"""查询本 Fork 的公开发行版，传输复用共享 HTTPX。"""
from __future__ import annotations

import json
import platform
import re
import sys

import httpx

from . import __version__, distribution
from .http import HttpRequest, HttpxTransport
from .update_packages import TOOL_PATHS

REPOSITORY = "VictorQi/peach"
RELEASES_URL = f"https://github.com/{REPOSITORY}/releases"
API_URL = f"https://api.github.com/repos/{REPOSITORY}/releases?per_page=100"


def snapshot() -> dict:
    return {"current_version": __version__, "latest_version": None, "publisher": REPOSITORY,
            "channel": "测试版", "installation": "独立测试包" if distribution.standalone() else "源码运行",
            "in_app_update": distribution.in_app_update(),
            "state": "unchecked", "message": "尚未检查", "release_url": RELEASES_URL}


def _version(value: object) -> tuple[int, ...] | None:
    if not isinstance(value, str) or not re.fullmatch(r"v?\d+\.\d+\.\d+", value):
        return None
    return tuple(map(int, value.removeprefix("v").split(".")))


def _release_candidates(rows: list, system: str = "win32", machine: str = "") -> list[tuple]:
    """从一个公开发行源选择本机平台的完整包，并构造受信任的下载地址。

    macOS 选与本机架构同名的 DMG（`build_macos_standalone.py` 按 `platform.machine()` 命名），
    没有分包与工具包；其余平台沿用 Windows 包判断有无新版本。
    """
    releases = []
    for row in rows:
        if not isinstance(row, dict) or row.get("draft"):
            continue
        version = _version(row.get("tag_name"))
        if version is None:
            continue
        tag = row["tag_name"]
        assets = row.get("assets") or []
        uploaded = {a.get("name"): a for a in assets if isinstance(a, dict) and a.get("state") == "uploaded"}
        if system == "darwin":
            full = asset = uploaded.get(f"Peach-{tag.removeprefix('v')}-macos-{machine}.dmg")
            if full is None:
                continue
        else:
            prefix = f"Peach-{tag.removeprefix('v')}-windows-x64"
            full = uploaded.get(prefix + ".zip")
            if full is None:
                continue
            complete_tools = all(prefix + f"-tools-{tool}.zip" in uploaded for tool in TOOL_PATHS)
            asset = uploaded.get(prefix + "-update.zip", full) if complete_tools else full
        directory = f"{RELEASES_URL}/download/{tag}"
        release_url = f"{RELEASES_URL}/tag/{tag}"
        releases.append((version, tag, asset, full, directory, release_url))
    return releases


def check(*, transport=None, system: str | None = None, machine: str | None = None) -> dict:
    result = snapshot()
    system = system or sys.platform
    machine = machine or platform.machine()
    client = transport or HttpxTransport()
    try:
        headers = {"Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28"}
        response = client(HttpRequest("GET", API_URL, headers), 12.0, 2_000_000)
        if response.status != 200:
            raise ValueError("release endpoint unavailable")
        rows = json.loads(response.body)
        if not isinstance(rows, list):
            raise ValueError("release list required")
        releases = _release_candidates(rows, system, machine)
        if not releases:
            return dict(result, state="empty", message="暂未找到可下载的测试版。")
        version, tag, asset, full, directory, release_url = max(releases, key=lambda item: item[0])
        current = _version(result["current_version"])
        if current is None:
            raise ValueError("current version required")
        state = "available" if version > current else "ahead" if version < current else "current"
        message = {"available": "有新版本可下载。", "ahead": "当前版本高于已发布测试版。", "current": "已是最新测试版。"}[state]
        return dict(result, latest_version=tag.removeprefix("v"), state=state, message=message,
                    asset_url=f"{directory}/{asset['name']}",
                    asset_size=asset.get("size", 0), asset_digest=asset.get("digest"),
                    package_kind="installer" if system == "darwin" else "update" if asset is not full else "full",
                    # 应用更新包准备不下去（清单或工具包与本版更新器对不上）时改下的同版本完整包。
                    full_url=f"{directory}/{full['name']}", full_size=full.get("size", 0),
                    full_digest=full.get("digest"),
                    release_url=release_url)
    except (OSError, ValueError, TypeError, TimeoutError, httpx.HTTPError):
        return dict(result, state="error", message="未能取得版本信息，请重试。")
    finally:
        if transport is None:
            client.close()
