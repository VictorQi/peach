"""合并普通 MP4 的顶层 mdat 视图；样本地址和媒体字节保持原位。

多个 mdat 的头也可以作为一个大 mdat 内未被样本表引用的填充。将首个 mdat 的
32 位长度改成 0（延伸到 EOF），解析器就不必经 HTTP 逐个跳过这些盒子。
仅接收前置单 moov、非分片、媒体之后只有 mdat/填充的完整布局。
"""
from __future__ import annotations

import hashlib
import json
import logging
import os
import stat as stat_module
import threading
from contextlib import contextmanager
from dataclasses import dataclass
from pathlib import Path

from filelock import FileLock

from .fsutil import atomic_write_text
from .mp4index import _find
from .mp4repair import RepairedHeader

LOGGER = logging.getLogger(__name__)
HEADER_LIMIT = 8 << 20
BOX_LIMIT = 8192
PADDING = frozenset({b'free', b'skip', b'wide'})


@dataclass(frozen=True)
class MdatLayout:
    offset: int
    prefix: bytes
    size: int

    def header(self) -> RepairedHeader:
        prefix = bytearray(self.prefix)
        prefix[self.offset:self.offset + 4] = bytes(4)
        return RepairedHeader(bytes(prefix), len(prefix), self.size)

    @property
    def digest(self) -> str:
        return hashlib.sha256(self.header().prefix).hexdigest()


def _box_span(handle, position: int, total: int):
    """校验一个顶层盒子的头，返回类型、载荷起点与终点。"""
    handle.seek(position)
    raw = handle.read(16)
    if len(raw) < 8:
        return None
    length, kind = int.from_bytes(raw[:4], 'big'), raw[4:8]
    width = 16 if length == 1 else 8
    if length == 1:
        if len(raw) < 16:
            return None
        length = int.from_bytes(raw[8:16], 'big')
    elif length == 0:
        length = total - position
    if length < width or position + length > total:
        return None
    return kind, position + width, position + length


def inspect(source: Path, *, known_stat=None) -> MdatLayout | None:
    """有界读取盒子头；不读媒体载荷，不支持的布局照原路播放。"""
    if not isinstance(source, Path) or source.suffix.lower() not in {'.mp4', '.m4v'}:
        return None
    try:
        with source.open('rb') as handle:
            found = os.fstat(handle.fileno())
            if not stat_module.S_ISREG(found.st_mode):
                return None
            if known_stat is not None and (found.st_size, found.st_mtime_ns) != (
                    known_stat.st_size, known_stat.st_mtime_ns):
                return None
            position = 0
            moov = None
            first = None
            mdats = 0
            ftyp = False
            for _ in range(BOX_LIMIT):
                if position == found.st_size:
                    break
                span = _box_span(handle, position, found.st_size)
                if span is None:
                    return None
                kind, body, end = span
                if kind == b'mdat':
                    if first is None:
                        first = (position, body)
                    mdats += 1
                elif first is not None:
                    if kind not in PADDING:
                        return None
                elif kind == b'moov' and moov is None:
                    moov = (body, end)
                elif kind == b'ftyp' and position == 0:
                    ftyp = True
                elif kind not in PADDING:
                    return None
                position = end
            if (position != found.st_size or not ftyp or moov is None or first is None
                    or mdats < 2 or first[1] > HEADER_LIMIT):
                return None
            handle.seek(0)
            prefix = handle.read(first[1])
            if len(prefix) != first[1] or _find(prefix, *moov, b'mvex') is not None:
                return None
            after = os.fstat(handle.fileno())
            if (after.st_size, after.st_mtime_ns) != (found.st_size, found.st_mtime_ns):
                return None
            return MdatLayout(first[0], prefix, found.st_size)
    except OSError:
        return None


class LayoutCache:
    """同一版本只检查一次；最多持有四份头，其余仅记无补丁结果。"""

    def __init__(self):
        self._guard = threading.Lock()
        self._results = {}
        self._checking = {}

    def header(self, source: Path, *, known_stat=None) -> RepairedHeader | None:
        if not isinstance(source, Path) or source.suffix.lower() not in {'.mp4', '.m4v'}:
            return None
        try:
            found = known_stat if known_stat is not None else source.stat()
        except OSError:
            return None
        key = (str(source), found.st_size, found.st_mtime_ns)
        with self._guard:
            if key in self._results:
                return self._results[key]
            gate = self._checking.setdefault(key, threading.Lock())
        with gate:
            with self._guard:
                if key in self._results:
                    return self._results[key]
            try:
                layout = inspect(source, known_stat=found)
                header = layout.header() if layout else None
                with self._guard:
                    if len(self._results) >= 512:
                        self._results.pop(next(iter(self._results)))
                    if header is not None:
                        headers = [k for k, value in self._results.items() if value is not None]
                        if len(headers) >= 4:
                            self._results.pop(headers[0])
                    self._results[key] = header
                return header
            finally:
                with self._guard:
                    if self._checking.get(key) is gate:
                        del self._checking[key]


def _save(path: Path, record: dict) -> None:
    atomic_write_text(path, json.dumps(record, ensure_ascii=False) + '\n')
    with path.open('r+b') as handle:
        os.fsync(handle.fileno())
    if os.name != 'nt':
        descriptor = os.open(path.parent, os.O_RDONLY)
        try:
            os.fsync(descriptor)
        finally:
            os.close(descriptor)


def _write(handle, offset: int, value: bytes) -> None:
    handle.seek(offset)
    if handle.write(value) != 4:
        raise OSError('MP4 长度字段未完整写入')
    handle.flush()
    os.fsync(handle.fileno())
    handle.seek(offset)
    if handle.read(4) != value:
        raise OSError('MP4 长度字段回读不符')


def _restore(source: Path, journal: Path, record: dict) -> None:
    """未完成的写入只在原头、原大小和文件身份仍匹配时恢复。"""
    with source.open('r+b') as handle:
        found = os.fstat(handle.fileno())
        prefix = bytearray(handle.read(record['prefix_bytes']))
        offset = record['offset']
        prefix[offset:offset + 4] = bytes(4)
        if (found.st_size != record['size'] or found.st_ino != record['inode']
                or hashlib.sha256(prefix).hexdigest() != record['digest']):
            raise ValueError('MP4 已变更，保留恢复记录，未覆盖文件')
        _write(handle, offset, bytes.fromhex(record['before']))
    os.utime(source, ns=(record['atime_ns'], record['mtime_ns']))
    _save(journal, {**record, 'status': 'rolled-back'})


@contextmanager
def prepare_local(source: Path, root: Path):
    """入库探测期间原位整理四字节；探测失败恢复，崩溃留持久恢复记录。"""
    if (not isinstance(source, Path) or source.suffix.lower() not in {'.mp4', '.m4v'}
            or source.is_symlink()):
        yield False
        return
    source = source.resolve()
    journal = root / (hashlib.sha256(str(source).encode()).hexdigest() + '.json')
    # 正常单 mdat 文件不创建目录或锁；有待恢复的事务则必须先处理它。
    layout = inspect(source)
    if layout is None and not journal.is_file():
        yield False
        return
    root.mkdir(parents=True, exist_ok=True)
    with FileLock(str(journal) + '.lock', timeout=5):
        try:
            previous = json.loads(journal.read_text(encoding='utf-8'))
        except FileNotFoundError:
            previous = None
        if previous and previous['status'] == 'pending':
            _restore(source, journal, previous)
        layout = inspect(source)
        if layout is None or source.stat().st_nlink > 1:
            yield False
            return
        try:
            handle = source.open('r+b')
        except PermissionError:
            yield False
            return
        with handle:
            found = os.fstat(handle.fileno())
            if found.st_size != layout.size or handle.read(len(layout.prefix)) != layout.prefix:
                raise ValueError('MP4 在检查后变化，未改写')
            record = {'path': str(source), 'offset': layout.offset, 'size': layout.size,
                      'inode': found.st_ino, 'prefix_bytes': len(layout.prefix), 'digest': layout.digest,
                      'before': layout.prefix[layout.offset:layout.offset + 4].hex(),
                      'atime_ns': found.st_atime_ns, 'mtime_ns': found.st_mtime_ns, 'status': 'pending'}
            _save(journal, record)
            try:
                _write(handle, layout.offset, bytes(4))
            except BaseException:
                _write(handle, layout.offset, bytes.fromhex(record['before']))
                os.utime(source, ns=(record['atime_ns'], record['mtime_ns']))
                _save(journal, {**record, 'status': 'rolled-back'})
                raise
        try:
            yield True
        except BaseException:
            _restore(source, journal, record)
            raise
        else:
            try:
                _save(journal, {**record, 'status': 'complete'})
                LOGGER.info('local MP4 layout prepared: %s', source.name)
            except BaseException:
                _restore(source, journal, record)
                raise
