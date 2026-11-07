"""保存扫描已登记、尚未交给资料处理的新影片范围。"""
from contextlib import closing
import json
from pathlib import Path, PureWindowsPath
import sqlite3

from filelock import FileLock
from .fsutil import atomic_write_text
from .update_tasks import state_for


def _path(db):
    return state_for(Path(db)).parent/'library-new-assets.json'


def _read(db):
    path = _path(db)
    try:
        ids = json.loads(path.read_text(encoding='utf-8'))
    except FileNotFoundError:
        patched = path.with_name('incremental-media.json')
        if patched.is_file():
            data = json.loads(patched.read_text(encoding='utf-8'))
            return {int(key) for key, value in data['items'].items() if value['status'] == 'pending'}
        legacy = path.with_name('library-processing.json')
        try:
            state = json.loads(legacy.read_text(encoding='utf-8'))
        except FileNotFoundError:
            return set()
        if state.get('status') == 'complete' and state.get('requested_stage') != 'scan':
            return set()
        ids = [value for checkpoint in state.get('scan_checkpoints', {}).values()
               for value in checkpoint.get('result', {}).get('new_ids', [])]
        completed = {int(key.split(':',1)[0]) for key in state.get('completed_metadata', [])}
        ids = [value for value in ids if value not in completed]
    if not isinstance(ids,list) or any(type(value) is not int or value<=0 for value in ids):
        raise ValueError('新入库处理范围无效，请重新扫描媒体库')
    return set(ids)


def _lock(path):
    return FileLock(str(path)+'.lock')


def pending(db):
    # `remember` 持锁原子替换；Windows 上替换瞬间的读取会撞上共享冲突，读也等同一把锁。
    path = _path(db)
    if not path.parent.is_dir():
        return []
    with _lock(path):
        wanted = sorted(_read(db))
    return _active_videos(db, wanted)


def _active_videos(db, wanted):
    result = []
    if wanted:
        with closing(sqlite3.connect(Path(db).resolve().as_uri()+'?mode=ro',uri=True)) as connection:
            for offset in range(0,len(wanted),900):
                batch = wanted[offset:offset+900]
                result.extend(row[0] for row in connection.execute(
                    "SELECT id FROM asset WHERE medium='video' AND disposal IS NULL AND id IN ("
                    +','.join('?'*len(batch))+') ORDER BY id',batch))
    return result


def remember(db, ids=(), *, completed=()):
    path = _path(db)
    path.parent.mkdir(parents=True,exist_ok=True)
    with _lock(path):
        previous = _read(db)
        updated = set(_active_videos(db, sorted(previous | set(ids)))) - set(completed)
        if updated != previous or not path.exists():
            atomic_write_text(path,json.dumps(sorted(updated)))


def observe(db, asset_id, size, mtime_ns, *, new=False):
    """目录事件按文件版本去重；首次遇到旧文件只建立基线。"""
    observe_many(db, [(asset_id, size, mtime_ns, new)])


def observe_many(db, observations):
    """一个已提交的扫描批次只读取和保存一次版本文件。"""
    path = _path(db).with_name('incremental-media.json')
    path.parent.mkdir(parents=True, exist_ok=True)
    with FileLock(str(path) + '.lock'):
        try:
            data = json.loads(path.read_text(encoding='utf-8'))
        except FileNotFoundError:
            data = {'seen': {}, 'items': {}}
        if not isinstance(data.get('seen'), dict) or not isinstance(data.get('items'), dict):
            raise ValueError('增量媒体队列格式无效，请检查状态文件')
        pending_ids, changed = [], False
        for asset_id, size, mtime_ns, new in observations:
            key, version = str(asset_id), [size, mtime_ns]
            previous = data['seen'].get(key)
            if new or previous is not None and previous != version:
                pending_ids.append(asset_id)
            if previous != version:
                data['seen'][key] = version
                changed = True
        if pending_ids:
            remember(db, pending_ids)
        if changed:
            atomic_write_text(path, json.dumps(data, ensure_ascii=False))


def snapshot(db, ids=None):
    """冻结处理开始时的文件版本；未建立指纹的旧待处理项也保留身份。"""
    path = _path(db).with_name('incremental-media.json')
    path.parent.mkdir(parents=True, exist_ok=True)
    with FileLock(str(path) + '.lock'):
        seen = json.loads(path.read_text(encoding='utf-8')).get('seen', {}) if path.exists() else {}
        return {asset_id: seen.get(str(asset_id)) for asset_id in (pending(db) if ids is None else ids)}


def finish(db, versions, *, completed=None):
    """仅确认已处理的版本，期间到达的同文件新版本继续等待处理。"""
    path = _path(db).with_name('incremental-media.json')
    path.parent.mkdir(parents=True, exist_ok=True)
    with FileLock(str(path) + '.lock'):
        seen = json.loads(path.read_text(encoding='utf-8')).get('seen', {}) if path.exists() else {}
        wanted = set(versions if completed is None else completed)
        remember(db, completed=[asset_id for asset_id, version in versions.items()
                                if asset_id in wanted and seen.get(str(asset_id)) == version])


def cancel_scope(db, roots, ids=None):
    """撤回这一范围的待处理版本，不改媒体或成功结论；文件再次变化可产生新请求。"""
    wanted = pending(db)
    if ids is not None:
        wanted = sorted(set(wanted).intersection(ids))
    selected = _within_roots(db, wanted, roots)
    if selected:
        finish(db, snapshot(db, selected))


def _within_roots(db, wanted, roots):
    prefixes = tuple(PureWindowsPath(root) for root in roots)
    selected = []
    with closing(sqlite3.connect(Path(db).resolve().as_uri()+'?mode=ro', uri=True)) as connection:
        for offset in range(0, len(wanted), 900):
            batch = wanted[offset:offset+900]
            selected.extend(row[0] for row in connection.execute(
                'SELECT id,path FROM asset WHERE id IN ('+','.join('?'*len(batch))+')', batch)
                if any(PureWindowsPath(row[1]).is_relative_to(root) for root in prefixes))
    return selected


def available_for_dispatch(db, wanted, config):
    """已由目录读取认领的范围，包括排队和暂停时，不另派增量任务。"""
    from .media_identity import catalog
    with closing(sqlite3.connect(Path(db).resolve().as_uri()+'?mode=ro', uri=True)) as connection:
        owned = [row[0].split(':', 1)[1] for row in connection.execute(
            "SELECT followup_key FROM task_run WHERE task_key='library-import' "
            "AND followup_key IS NOT NULL AND status IN ('pending','running')")]
    roots = catalog(config)[1]
    reserved = [roots[key]['root'] for key in owned if key in roots]
    if not reserved:
        return wanted
    busy = set(_within_roots(db, wanted, reserved))
    return [asset_id for asset_id in wanted if asset_id not in busy]


def cancel_task(db, run):
    """任务中心取消也关闭对应增量请求，不能另起一轮绕过取消。"""
    if run.task_key not in ('library-processing', 'library-import'):
        return
    from . import media_identity, settings_file
    config = settings_file.active()
    if run.task_key == 'library-import':
        root = media_identity.catalog(config)[1].get(run.followup_key.split(':', 1)[1])
        if root:
            cancel_scope(db, (root['root'],))
    else:
        from .job_recovery import read
        saved = read(db, run.task_key)
        if saved.get('run_id') == run.id:
            cancel_scope(db, (root for roots in config.locations.values() for root in roots),
                         saved.get('request', {}).get('asset_ids'))
