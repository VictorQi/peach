"""版本化存量补修：本地事务、证据回执和有界后台派发。"""
from __future__ import annotations

import json
import logging
import time
import threading
from pathlib import Path

from apscheduler.schedulers.background import BackgroundScheduler
from filelock import FileLock, Timeout

from . import artifact_rules, composite_alias_repair, metadata_text_repair, r18_legacy_repair, upgrade_rules
from .field_owners import SCAN_FILENAME, is_protected, owner_of, write_owned_fields
from .followups import FollowupType, Attempts, attempts_root, register
from .fsutil import atomic_write_text
from .migrations import sqlite_backup
from .task_runs import MAX_FOLLOWUPS

LOGGER = logging.getLogger(__name__)
TASK_KEY = 'upgrade-repairs'
MEDIA_TASK = 'upgrade-library'
CATALOG_REVISION = ':'.join((upgrade_rules.CATALOG, upgrade_rules.PREVIEWS, upgrade_rules.PROCESSING,
                           str(upgrade_rules.PUBLIC_SNAPSHOTS), str(upgrade_rules.PROVIDER_EVIDENCE)))
REVISION = f'{CATALOG_REVISION}:text-{upgrade_rules.PROVIDER_TEXT}'


def _read(path: Path) -> dict:
    try:
        value = json.loads(path.read_text(encoding='utf-8'))
    except FileNotFoundError:
        return {}
    if not isinstance(value, dict):
        raise ValueError('更新后的处理记录格式无效')
    return value


def _title(row) -> str:
    """任务中心里这一条写哪部片：有番号写番号，没有就写文件名。"""
    return str(row['code'] or row['name'] or f'影片 {row["id"]}')


def _counts(connection) -> dict:
    return {table: connection.execute(f'SELECT count(*) FROM {table}').fetchone()[0]
            for table in ('asset', 'entity', 'asset_tag')}


def _manual_name(connection, entity_id: int) -> bool:
    row = connection.execute('SELECT metadata_json FROM entity WHERE id=?', (entity_id,)).fetchone()
    try:
        metadata = json.loads(row[0] or '{}') if row else {}
        if not isinstance(metadata, dict):
            return True
        preference = metadata.get('name_preference', {})
    except (ValueError, TypeError):
        return True
    return (is_protected(preference.get('source')) if isinstance(preference, dict) else True) or bool(
        connection.execute("SELECT 1 FROM entity_alias WHERE entity_id=? AND source='user:preferred-name'",
                           (entity_id,)).fetchone())


def _catalog_plan(connection, sources: Path, *, catalog: bool = True) -> dict:
    text = metadata_text_repair.collect(connection, sources / 'library-metadata')
    if not catalog:
        return {'codes':[], 'fields':[], 'names':[], 'aliases':[], 'text':text, 'catalog':False}
    from .catalog_rules import compile_code_patterns, release_code_from_filename, same_release_code
    from .profiles import read_settings
    patterns = compile_code_patterns(read_settings(connection).get('codePatterns'))
    codes = []
    for row in connection.execute('SELECT id,name,code,field_owners FROM asset WHERE medium=\'video\''):
        if owner_of(row['field_owners'], 'code') != SCAN_FILENAME:
            continue
        expected = release_code_from_filename(row['name'] or '', patterns=patterns)
        if expected and row['code'] and not same_release_code(expected, row['code']):
            codes.append({'id': row['id'], 'current': row['code'], 'target': expected})
    fields = r18_legacy_repair.collect(connection, sources / 'library-metadata')
    names = r18_legacy_repair.collect_entities(connection, sources / 'library-metadata',
                                              sources / 'metadata/javinizer-go')
    for row in names:
        if _manual_name(connection, row['entity_id']):
            row.update(action='skip', reason='manual-name')
    aliases = composite_alias_repair.collect(connection)
    for row in aliases:
        if is_protected(row['source']):
            row.update(verdict='review', note='人工别名保持原样')
    return {'codes': codes, 'fields': fields, 'names': names, 'aliases': aliases,
            'text': text, 'catalog': True}


def _catalog_apply(connection, plan: dict) -> dict:
    if not plan.get('catalog', True):
        return {'codes':0, 'probe_retry':0, **metadata_text_repair.apply(connection, plan['text'])}
    from datetime import datetime, timezone
    changed = {}
    for row in plan['codes']:
        current = connection.execute('SELECT code,field_owners FROM asset WHERE id=?', (row['id'],)).fetchone()
        if current and current[0] == row['current'] and owner_of(current[1], 'code') == SCAN_FILENAME:
            write_owned_fields(connection, [row['id']], {'code': row['target']}, SCAN_FILENAME)
    changed['codes'] = len(plan['codes'])
    changed.update(r18_legacy_repair.apply_rows(connection, plan['fields']))
    stamp = datetime.now(timezone.utc).isoformat()
    names = [row for row in plan['names'] if not _manual_name(connection, row['entity_id'])]
    changed.update(r18_legacy_repair.apply_entity_rows(connection, names, stamp))
    fields = ('entity_id', 'field', 'value', 'source', 'parts')
    approved = {tuple(row[field] for field in fields) for row in plan['aliases'] if row['verdict'] == 'auto'}
    aliases = [row for row in composite_alias_repair.collect(connection)
               if tuple(row[field] for field in fields) in approved and not is_protected(row['source'])]
    changed.update(composite_alias_repair.apply_rows(connection, aliases))
    changed.update(metadata_text_repair.apply(connection, plan['text']))
    failed = connection.execute("SELECT id FROM asset WHERE medium='video' AND duration<=0 AND disposal IS NULL").fetchall()
    connection.execute("UPDATE asset SET duration=NULL WHERE medium='video' AND duration<=0 AND disposal IS NULL")
    changed['probe_retry'] = len(failed)
    return changed


def _stale_previews(contract, row):
    """本地配套海报和九宫格分别按所属规则校验。"""
    from .media_processing_policy import metadata_only
    from .platform import translate_ledger_path
    poster = Path(getattr(contract, 'poster_root', Path(contract.candidate_root) / 'posters')) / f'{row["id"]}_4.jpg'
    if poster.is_file() and not (artifact_rules.current(poster, source_required=True) or artifact_rules.current(
            poster, upgrade_rules.LOCAL_POSTERS, source_required=True)):
        return True
    snapshot = translate_ledger_path(row['snapshot_path']) if row['snapshot_path'] else None
    return (snapshot is not None and contract.snapshot_root is not None
            and snapshot.is_relative_to(contract.snapshot_root) and not artifact_rules.current(snapshot)
            and not metadata_only(contract.follow_state_root))


class UpgradeRepairs:
    """一个数据目录一份回执；网络与媒体工作由现有任务通道执行。"""

    def __init__(self, contract, *, available: bool, config=None):
        self.contract, self.available = contract, available
        self.config = config
        self.error = ''
        self.stopping = threading.Event()
        self.root = Path(contract.follow_state_root) / 'upgrade-repairs'
        self.scheduler = BackgroundScheduler(timezone='UTC', daemon=True)

    @property
    def receipt(self) -> Path:
        return self.root / 'receipt.json'

    def snapshot(self) -> dict:
        if not self.available:
            return {'state': 'unavailable', 'items': [], 'available': False}
        try:
            receipt = _read(self.receipt)
        except (OSError, ValueError, TypeError):
            return {'state': 'failed', 'items': [{'id': 'receipt', 'label': '更新后自动处理', 'state': 'failed',
                                                 'message': '更新后的处理记录无法读取'}],
                    'available': True, 'message': '处理记录无法读取，请重试'}
        local = receipt.get('local', {})
        queued = receipt.get('queued', {})
        states = [row['status'] for row in self._family(receipt)]
        active = sum(state in ('pending', 'running') for state in states)
        failed = sum(state in ('failed', 'interrupted') for state in states)
        review = int(local.get('review_count', 0)) + len(receipt.get('deferred', []))
        enabled = bool(receipt.get('enabled')) and not (receipt.get('dispatch_complete') and not active)
        state = 'failed' if self.error else 'running' if enabled else 'paused' if active else (
            'failed' if failed else 'review' if review else 'complete' if receipt.get('dispatch_complete')
            else 'paused' if receipt.get('scope') else 'idle')
        items = [{'id': REVISION, 'label': '更新已有资料', 'state': local.get('state', 'pending'),
                  'changed': local.get('changed', {}), 'review_count': review},
                 {'id': 'background', 'label': '后台更新进度', 'state': state,
                  'pending': active, 'failed': failed, 'queued': len(queued)}]
        return {'state': state, 'items': items, 'available': self.available, 'enabled': enabled,
                'started': bool(receipt.get('scope')), 'message': self.error}

    def prepare(self) -> None:
        """服务恢复任务前应用本地确定性修复。"""
        if not self.available or not self.contract.task_runs.enabled:
            return
        self.root.mkdir(parents=True, exist_ok=True)
        with FileLock(str(self.receipt) + '.lock', timeout=0):
            contract = self.contract
            with contract.database.read_connection() as connection:
                applied = connection.execute('SELECT result_json FROM ledger_upgrade_repair WHERE id=?',
                                              (REVISION,)).fetchone()
                prior = connection.execute(
                    'SELECT result_json,id FROM ledger_upgrade_repair WHERE id=? OR id GLOB ? '
                    'ORDER BY CAST(applied_at AS REAL) DESC LIMIT 1',
                    (CATALOG_REVISION, CATALOG_REVISION + ':text-*')).fetchone()
            if applied is not None:
                self._restore_receipt(json.loads(applied[0]))
                self._adopt_control(_read(self.receipt))
                return
            self._restore_receipt(None)
            sources = Path(contract.follow_sources_root)
            previous = json.loads(prior[0]) if prior is not None else {}
            with contract.database.read_connection() as connection:
                plan = _catalog_plan(connection, sources, catalog=prior is None)
                before = _counts(connection)
                failed = [row[0] for row in connection.execute(
                    "SELECT id FROM asset WHERE medium='video' AND duration<=0 AND disposal IS NULL")] if prior is None else []
            atomic_write_text(self.root / 'catalog-review.json', json.dumps(plan, ensure_ascii=False, indent=2))
            backup = contract.db_path.with_name(f'ledger.pre-upgrade-{time.time_ns()}.db')
            sqlite_backup(contract.db_path, backup)
            review = sum(row['reason'] not in ('already-original', 'already-japanese', 'manual-name')
                         and row['action'] not in ('replace', 'rename') for row in plan['fields'] + plan['names'])
            review += sum(row['verdict'] == 'review' for row in plan['aliases'])
            review += sum(row['action'] == 'review' for row in plan['text']['rows'])
            review += previous.get('local', {}).get('review_count', 0)
            with contract.database.write_transaction() as connection:
                violations = {tuple(row) for row in connection.execute('PRAGMA foreign_key_check')}
                changed = _catalog_apply(connection, plan)
                if connection.execute('PRAGMA integrity_check').fetchone()[0] != 'ok':
                    raise RuntimeError('更新已有资料时账本完整性校验失败')
                if any(tuple(row) not in violations for row in connection.execute('PRAGMA foreign_key_check')):
                    raise RuntimeError('更新已有资料时关联校验失败')
                after = _counts(connection)
                receipt = {'revision': REVISION, 'local': {'state': 'succeeded', 'changed': changed,
                           'review_count': review, 'before': before, 'after': after, 'backup': str(backup)},
                           'text_media_ids': plan['text']['asset_ids'],
                           'media_ids': sorted(set(failed + [row['id'] for row in plan['codes']]
                                                   + previous.get('media_ids', [])
                                                   + plan['text']['asset_ids'])),
                           'queued': dict(previous.get('queued', {})),
                           'deferred': list(previous.get('deferred', [])),
                           'dispatch_complete': bool(previous.get('dispatch_complete')) and not plan['text']['asset_ids'],
                           'text_only': prior is not None,
                           'prior_revision': prior[1] if prior else None}
                connection.execute('INSERT INTO ledger_upgrade_repair(id,applied_at,result_json) VALUES(?,?,?)',
                                   (REVISION, str(time.time()), json.dumps(receipt, ensure_ascii=False)))
            atomic_write_text(self.receipt, json.dumps(receipt, ensure_ascii=False))
            self._adopt_control(receipt)

    def _parents(self, receipt):
        """仅查本服务派发的本机父任务，包含已结算但后继仍在工作的批次。"""
        ids = list(receipt.get('queued', {}).values())
        parents = set()
        with self.contract.database.read_connection() as connection:
            parents.update(row[0] for row in connection.execute(
                'SELECT DISTINCT p.id FROM task_run p JOIN task_run c ON c.root_run_id=p.id '
                "WHERE p.task_key=? AND p.host=? AND c.status IN ('pending','running')",
                (TASK_KEY, self.contract.task_runs.host)))
            for offset in range(0, len(ids), 900):
                batch = ids[offset:offset + 900]
                parents.update(row[0] for row in connection.execute(
                    f'SELECT DISTINCT p.id FROM task_run c JOIN task_run p ON p.id=c.parent_run_id '
                    f'WHERE c.id IN ({",".join("?" for _ in batch)}) AND p.task_key=? AND p.host=?',
                    (*batch, TASK_KEY, self.contract.task_runs.host)))
        return sorted(parents)

    def _family(self, receipt):
        """计入接续和更深后继，不能把派发父任务成功当作工作完成。"""
        rows = {}
        with self.contract.database.read_connection() as connection:
            for column, ids in (('id', list(receipt.get('queued', {}).values())),
                                ('root_run_id', self._parents(receipt))):
                for offset in range(0, len(ids), 900):
                    batch = ids[offset:offset + 900]
                    for row in connection.execute(
                            f'SELECT id,status,followup_key,task_key,progress_label FROM task_run '
                            f'WHERE {column} IN ({",".join("?" for _ in batch)}) AND followup_key IS NOT NULL', batch):
                        key = row['followup_key']
                        if key not in rows or row['id'] > rows[key]['id']:
                            rows[key] = dict(row)
        return list(rows.values())

    def _control_parents(self, receipt, action):
        from . import task_control
        store = self.contract.task_runs
        for run_id in self._parents(receipt):
            run = store.get(run_id)
            if task_control.requested(self.contract.db_path, run_id) == 'cancel':
                continue
            if task_control.projection(store, run) is not None:
                try:
                    task_control.request(store, run_id, action)
                except ValueError:
                    if task_control.projection(store, store.get(run_id)) is not None:
                        raise

    def _adopt_control(self, receipt):
        """旧版本自动排下的队列保留并暂停；升级不能追认联网意愿。"""
        if receipt.get('control_version') == 1:
            return
        self._control_parents(receipt, 'pause')
        receipt.update(control_version=1, enabled=False)
        self._save_receipt(receipt)

    def _stopped(self, receipt):
        from .task_control import intent
        since = receipt.get('scope', {}).get('at', 0)
        with self.contract.database.read_connection() as connection:
            parents = [row[0] for row in connection.execute('SELECT id FROM task_run WHERE task_key=? AND host=?',
                                                           (TASK_KEY, self.contract.task_runs.host))]
        return any(command.get('action') in ('pause', 'cancel') and command.get('at', 0) > since
                   for command in (intent(self.contract.db_path, run_id) for run_id in parents))

    def control(self, action: str) -> dict:
        """在现有设置中直接开始或停止；每次新一轮只处理开始时已有的内容。"""
        if not self.available:
            raise ValueError('资料更新只在本机写入端可用')
        if action not in ('start', 'pause'):
            raise ValueError('请选择开始或停止派发')
        self.prepare()
        with FileLock(str(self.receipt) + '.lock', timeout=0):
            receipt = _read(self.receipt)
            if action == 'start':
                if not receipt.get('scope') or (receipt.get('dispatch_complete') and not any(
                        row['status'] in ('pending', 'running') for row in self._family(receipt))):
                    from . import seed_followup
                    with self.contract.database.read_connection() as connection:
                        asset_max = connection.execute('SELECT coalesce(max(id),0) FROM asset').fetchone()[0]
                        entity_max = connection.execute('SELECT coalesce(max(id),0) FROM entity').fetchone()[0]
                        seeds = [dict(key=row.key, task_key=row.task_key, label=row.label)
                                 for row in seed_followup.plan(connection, since_entity_id=entity_max)]
                    receipt['scope'] = {'asset_max': asset_max, 'entity_max': entity_max, 'seeds': seeds}
                    receipt['dispatch_complete'] = False
                receipt['scope']['at'] = time.time_ns()
                receipt['enabled'] = True
                self._control_parents(receipt, 'resume')
            else:
                receipt['enabled'] = False
                self._control_parents(receipt, 'pause')
            self._save_receipt(receipt)
            self.error = ''
        self.tick()
        return self.snapshot()

    def _restore_receipt(self, authoritative):
        try:
            cached = _read(self.receipt)
        except (ValueError, TypeError):
            self.receipt.replace(self.receipt.with_name(f'receipt.corrupt-{time.time_ns()}.json'))
            cached = {}
        if authoritative is not None and cached != authoritative:
            atomic_write_text(self.receipt, json.dumps(authoritative, ensure_ascii=False))

    def _save_receipt(self, receipt):
        encoded = json.dumps(receipt, ensure_ascii=False)
        with self.contract.database.write_transaction(notify=False) as connection:
            if connection.execute('SELECT 1 FROM ledger_upgrade_repair WHERE id=?', (REVISION,)).fetchone() is None:
                raise ValueError('更新后的处理记录需要重新准备，请重试')
            connection.execute('UPDATE ledger_upgrade_repair SET result_json=? WHERE id=? AND result_json<>?',
                               (encoded, REVISION, encoded))
        atomic_write_text(self.receipt, encoded)

    def _plan(self, receipt: dict):
        from . import (avatar_followup, creator_identity_followup, performer_alias_followup,
                       performer_profile_followup, studio_followup)
        from .followups import Followup
        from .library_processing import _people_allowed
        from .media_sources import cost_for
        from .settings_file import load_config, DATA_ROOT_ENV
        config = load_config(environ={DATA_ROOT_ENV: str(self.config.data_root)}) if self.config is not None else load_config()
        seen = set(receipt.get('queued', {}))
        scope = receipt['scope']
        if 'retry' in scope:
            return [Followup(**row) for row in scope['retry'] if row['key'] not in seen][:MAX_FOLLOWUPS]
        inherited = set()
        for key, run_id in receipt.get('queued', {}).items():
            if key.startswith(MEDIA_TASK + ':'):
                run = self.contract.task_runs.get(run_id)
                if run is not None and run.status in ('pending', 'running', 'cancelled'):
                    inherited.add(int(key.rsplit(':', 1)[1]))
        attempts = Attempts(attempts_root(self.contract.candidate_root))
        with self.contract.database.read_connection() as connection:
            planned = [Followup(**row) for row in scope['seeds'] if row['key'] not in seen]
            outside = connection.execute('SELECT id,kind FROM entity WHERE id>?', (scope['entity_max'],)).fetchall()
            planners = (performer_alias_followup, studio_followup, performer_profile_followup,
                        creator_identity_followup, avatar_followup) if (
                            not receipt.get('text_only') and _people_allowed(config)) else ()
            for planner in planners:
                remaining = MAX_FOLLOWUPS - len(planned)
                if remaining <= 0:
                    break
                args = [connection]
                if planner is studio_followup:
                    args.append(self.contract.logo_root)
                elif planner is avatar_followup:
                    args.append(self.contract.avatar_root)
                args.append(attempts)
                skip = seen | {planner.followup_key(row['kind'], row['id']) if planner is avatar_followup
                               else planner.followup_key(row['id']) for row in outside}
                planned.extend(planner.stock(*args, limit=min(16, remaining), skip=skip))
            rows = connection.execute("SELECT id,code,name,path,location,snapshot_path FROM asset WHERE medium='video' "
                                      "AND disposal IS NULL AND id<=? ORDER BY id", (scope['asset_max'],)).fetchall()
        selected = set(receipt.get('media_ids', []))
        deferred = []
        for row in rows:
            if row['id'] in inherited:
                continue
            if row['id'] not in selected and not _stale_previews(self.contract, row):
                continue
            rule = upgrade_rules.PROCESSING
            if row['id'] in receipt.get('text_media_ids', []):
                rule += f':text-{upgrade_rules.PROVIDER_TEXT}'
            key = f'{MEDIA_TASK}:{rule}:{row["id"]}'
            if key in seen:
                continue
            if cost_for(row['location'], row['path'], config) != 'free':
                deferred.append(row['id'])
                continue
            planned.append(Followup(key, MEDIA_TASK, _title(row)))
            if len(planned) >= MAX_FOLLOWUPS:
                break
        receipt['deferred'] = deferred
        return planned[:MAX_FOLLOWUPS]

    def tick(self) -> None:
        if not self.available or not self.receipt.is_file():
            return
        try:
            with FileLock(str(self.receipt) + '.lock', timeout=0):
                receipt = _read(self.receipt)
                if not receipt.get('enabled'):
                    return
                if self._stopped(receipt):
                    receipt['enabled'] = False
                    self._control_parents(receipt, 'pause')
                    self._save_receipt(receipt)
                    return
                active = sum(row['status'] in ('pending', 'running') for row in self._family(receipt))
                if receipt.get('dispatch_complete'):
                    if not active:
                        receipt['enabled'] = False
                        self._save_receipt(receipt)
                    return
                if active >= MAX_FOLLOWUPS:
                    return
                planned = self._plan(receipt)[:MAX_FOLLOWUPS - active]
                if not planned:
                    receipt['dispatch_complete'] = True
                else:
                    if not self._dispatch(planned, receipt):
                        return
                self._save_receipt(receipt)
                self.error = ''
            self.contract.followups.wake()
        except Timeout:
            return
        except Exception as exc:
            self.error = str(exc)
            LOGGER.exception('升级补修派发失败')

    def _dispatch(self, planned, receipt):
        from .update_tasks import _mutex, state_for
        with _mutex(state_for(self.contract.db_path)):
            if self._stopped(receipt):
                return False
            return self._enqueue(planned, receipt)

    def _enqueue(self, planned, receipt):
        store = self.contract.task_runs
        orphan = store.blocking(TASK_KEY)
        if orphan is not None:
            store.finish(orphan.id, 'failed', error='资料派发被中断，正在重新安排')
        run = store.start(TASK_KEY, trigger='manual', mutex_key=TASK_KEY, label='安排资料更新')
        if run is None:
            return False
        try:
            result = store.enqueue_followups(run.id, [(row.key, row.task_key, row.label) for row in planned])
            queued = receipt.setdefault('queued', {})
            for run_id in result['queued']:
                child = store.get(run_id)
                queued[child.followup_key] = run_id
            for row in planned:
                if row.key not in queued:
                    child = store.blocking(row.key)
                    if child is not None:
                        queued[row.key] = child.id
            store.finish(run.id, 'succeeded', summary={'outcome': f'已安排 {len(result["queued"])} 项处理'})
        except Exception as exc:
            store.finish(run.id, 'failed', error=str(exc))
            raise
        return True

    def retry(self) -> dict:
        """显式重试失败项；用户取消的任务保持取消。"""
        if not self.available:
            raise ValueError('资料更新只在本机写入端可用')
        self.prepare()
        with FileLock(str(self.receipt) + '.lock', timeout=0):
            receipt = _read(self.receipt)
            failed = [row for row in self._family(receipt) if row['status'] in ('failed', 'interrupted')]
            if not failed:
                return self.snapshot()
            retry = {row['followup_key']: {'key': row['followup_key'], 'task_key': row['task_key'],
                                          'label': row['progress_label']} for row in failed}
            kept = {key: run_id for key, run_id in receipt.get('queued', {}).items() if key not in retry}
            receipt.update(queued=kept, dispatch_complete=False, enabled=True,
                           scope={'retry': list(retry.values()), 'at': time.time_ns()})
            self._save_receipt(receipt)
            self.error = ''
        self.tick()
        return self.snapshot()

    def start(self) -> None:
        if self.available and not self.scheduler.running:
            self.tick()
            self.scheduler.add_job(self.tick, 'interval', seconds=60, max_instances=1, coalesce=True)
            self.scheduler.start()

    def stop(self) -> None:
        self.stopping.set()
        if self.scheduler.running:
            self.scheduler.shutdown(wait=True)
        if self.available:
            self.contract.followups.stop(wait_for=(MEDIA_TASK, 'library-import'))


def _media_run(contract, key: str, handle) -> dict:
    from .settings_file import load_config
    from .library_processing import process_library
    from .jobs import JobPaused
    asset_id = int(key.rsplit(':', 1)[1])
    config = getattr(contract, 'upgrade_config', None) or load_config()
    state_file = Path(contract.follow_state_root) / 'upgrade-repairs' / f'{asset_id}.json'
    previous = _read(state_file)
    job_id = key.replace(':', '-')
    if previous.get('job_id', job_id) != job_id:
        previous = {}
    if previous:
        previous.update(issue_count=0, paused_count=0, issue_preview=[], retryable_asset_ids=[])
    service = getattr(contract, 'upgrade_repairs', None)
    with contract.database.read_connection() as connection:
        found = connection.execute('SELECT id,code,name FROM asset WHERE id=?', (asset_id,)).fetchone()
    title = _title(found) if found else f'影片 {asset_id}'
    def active():
        return service is None or not service.stopping.is_set()
    try:
        result = process_library(config, contract.db_path, contract.candidate_root, contract.cover_root,
                             database=contract.database, asset_ids=[asset_id], stage='collect',
                             recheck_existing=True, job_id=job_id,
                             state_file=state_file, resume_state=previous or None,
                             active=active,
                             report=lambda state: handle.progress(
                                 label=f"{title} · {state.get('stage') or '更新影片资料'}"))
    except InterruptedError:
        if not active():
            raise JobPaused('服务重启后继续') from None
        raise
    # 走完全程只剩这部片自己的问题（坏文件探不出时长、抽不出帧）算完成；有来源冷却暂缓的
    # 还要等来源放开再补，留成失败交给后继重试。
    finished = result.get('status') in ('complete', 'succeeded') or (
        result.get('outcome') == 'partial' and not result.get('paused_count'))
    if not finished:
        raise RuntimeError(result.get('error') or '影片升级补全未完成，请在任务中心查看后重试')
    return {'outcome': '影片升级补全完成', 'name': title, 'asset_id': asset_id}


TYPE = register(FollowupType(MEDIA_TASK, '更新影片资料', True, _media_run))
