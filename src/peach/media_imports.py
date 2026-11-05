"""用户主动添加文件夹；配置热生效与定向读取复用现有媒体和任务通道。"""
from __future__ import annotations

import json
import os
from pathlib import Path
import shutil
import time
from uuid import UUID

from . import media_configuration, media_identity, settings_file
from .followups import FollowupType, register
from .fsutil import atomic_write_text

TASK_KEY = 'library-import'


def prepare(config, raw: object, *, library_id=None):
    """只校验选中目录的存在性；既有离线来源不阻碍添加本地内容。"""
    if not isinstance(raw, str) or not raw.strip():
        raise ValueError('请选择文件夹或填写完整路径')
    path = Path(raw.strip()).expanduser()
    if not path.is_absolute():
        raise ValueError('请填写运行 Peach 的电脑上的完整文件夹路径')
    from .media import normalized_path
    path = normalized_path(path)
    if not path.is_dir():
        raise ValueError('请选择文件夹')
    existing = media_configuration.rows(config, windows=os.name == 'nt')
    for row in existing:
        if row['location'] == 'local' and os.path.normcase(os.path.abspath(row['path'])) == os.path.normcase(str(path)):
            return config, row['root_id']
    libraries = media_identity.catalog(config)[0]
    if library_id is not None and (not isinstance(library_id, str) or library_id not in libraries):
        raise ValueError('当前媒体库已变化，请重新选择')
    row = {'location': 'local', 'path': str(path), 'cost': 'free'}
    if library_id:
        row.update(library_id=library_id, library=libraries[library_id]['name'])
    else:
        row['library_policy'] = 'local'
    sources = media_configuration.prepare_sources([*existing, row], windows=os.name == 'nt', config=config)
    _, _, errors = media_configuration.validate(sources, windows=os.name == 'nt', config=config)
    if errors:
        raise ValueError(next(error for error in errors if error))
    prepared = media_identity.configure_sources(config, sources, windows=os.name == 'nt')
    old_roots = media_identity.catalog(config)[1]
    root_id = next(key for key in prepared.storage_roots if key not in old_roots)
    return prepared, root_id


def save(previous, prepared):
    if prepared is previous:
        return
    shutil.copy2(previous.path, previous.path.with_suffix('.previous.toml'))
    settings_file.keep_pre_identity_backup(previous.path)
    atomic_write_text(previous.path, settings_file.render(prepared))


def enqueue(contract, config, root_id: object) -> int:
    if not isinstance(root_id, str):
        raise ValueError('请选择已添加的文件夹')
    UUID(root_id)
    libraries, roots = media_identity.catalog(config)
    if root_id not in roots:
        raise ValueError('文件夹配置已变化，请重试')
    store = contract.task_runs
    key = f'{TASK_KEY}:{root_id}'
    existing = store.blocking(key)
    if existing is not None:
        return existing.id
    label = libraries[roots[root_id]['library_id']]['name']
    parent = store.start('library-add', trigger='manual', label=f'添加文件夹：{label}')
    if parent is None:
        raise ValueError('暂时无法开始读取，请重试')
    try:
        result = store.enqueue_followups(parent.id, [(key, TASK_KEY, f'读取文件夹：{label}')])
        active = store.blocking(key)
        if not result['queued'] and active is None:
            raise ValueError('暂时无法安排读取，请重试')
        run_id = result['queued'][0] if result['queued'] else active.id
        store.finish(parent.id, 'succeeded', summary={'outcome': '文件夹已添加，内容正在读取'})
    except Exception as exc:
        store.finish(parent.id, 'failed', error=str(exc))
        raise
    contract.followups.wake()
    return run_id


def snapshot(contract, config, *, editable, native_picker, sources=()):
    if not editable:
        return {'editable': False, 'native_picker': False, 'roots': [], 'jobs': []}
    status = {root['root_id']: root for source in sources for root in source['roots']}
    roots = [{'id': row['root_id'], 'library_id': row['library_id'], 'name': row['library'], 'path': row['path'],
              'online': status.get(row['root_id'], {}).get('online')}
             for row in media_configuration.rows(config, windows=os.name == 'nt')]
    jobs = contract.task_runs.query(status='active', task_key=TASK_KEY, limit=64)
    if not jobs:
        jobs = contract.task_runs.query(task_key=TASK_KEY, limit=1)
    from .task_control import projection
    public = []
    for job in jobs:
        control = projection(contract.task_runs, job)
        public.append({'id': job.id, 'root_id': job.followup_key.split(':', 1)[1],
                       'state': control['state'] if control else job.status,
                       'label': job.progress_label, 'error': job.error,
                       'current': job.progress_current, 'total': job.progress_total})
    return {'editable': True, 'native_picker': native_picker, 'roots': roots, 'jobs': public}


def run(contract, key, handle):
    from .jobs import JobPaused
    from .library_processing import process_library
    config = settings_file.active()
    root_id = key.split(':', 1)[1]
    libraries, roots = media_identity.catalog(config)
    if root_id not in roots:
        raise ValueError('读取的文件夹已经从配置中移除')
    root = roots[root_id]
    scoped = media_identity.project(config, {root['library_id']: libraries[root['library_id']]}, {root_id: root})
    state_file = config.directory('state') / 'media-imports' / f'{handle.run_id}.json'
    previous = json.loads(state_file.read_text(encoding='utf-8')) if state_file.is_file() else None
    last_publish = 0.0
    def report(state):
        nonlocal last_publish
        handle.progress(label=f'{libraries[root["library_id"]]["name"]} · {state.get("stage") or "读取文件夹"}',
                        current=state.get('checked'), total=state.get('total'))
        if time.monotonic() - last_publish >= 1:
            contract.cache_bust()
            last_publish = time.monotonic()
    try:
        result = process_library(scoped, contract.db_path, contract.candidate_root, contract.cover_root,
                                 database=contract.database, state_file=state_file, resume_state=previous,
                                 job_id=f'media-import-{handle.run_id}', report=report,
                                 active=lambda: not contract.followups.stopping)
    except InterruptedError:
        if contract.followups.stopping:
            raise JobPaused('文件夹读取已保存，服务恢复后继续') from None
        raise
    finally:
        contract.cache_bust()
    if result.get('status') not in ('complete', 'succeeded'):
        raise RuntimeError(result.get('error') or '文件夹未读取完成，请重试')
    return {'outcome': '文件夹读取完成', 'scanned': result.get('scanned', 0),
            'issue_count': result.get('issue_count', 0)}


TYPE = register(FollowupType(TASK_KEY, '读取文件夹', True, run, jumps_queue=True))
