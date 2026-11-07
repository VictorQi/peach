"""采集来源的本机设置、域内 Cookie 和按来源连接策略。"""
from __future__ import annotations

import http.cookiejar
import hashlib
from http.cookies import SimpleCookie, CookieError
import json
import logging
import math
import os
from pathlib import Path
import tempfile
import threading
import time
from email.utils import parsedate_to_datetime
from datetime import datetime, timezone
from urllib.parse import urlsplit, urljoin

import httpx

from .follow_secrets import CredentialStore
from . import peach_proxy
from .http import HttpRequest, HttpxTransport
from .scripting import USER_AGENT, host_under, hostname_of
from .fsutil import atomic_write_text

LOGGER = logging.getLogger(__name__)


SOURCES = {
    "r18dev": {"label": "R18.dev", "domains": ("r18.dev",), "login": "https://r18.dev/"},
    "dmm": {"label": "DMM / FANZA", "domains": ("dmm.co.jp", "dmm.com"), "login": "https://www.dmm.co.jp/"},
    "prestige": {"label": "Prestige", "domains": ("prestige-av.com",), "login": "https://www.prestige-av.com/"},
    "mgstage": {"label": "MGStage", "domains": ("mgstage.com",), "login": "https://www.mgstage.com/"},
    "faleno": {"label": "FALENO", "domains": ("faleno.jp",), "login": "https://faleno.jp/"},
    "dahlia": {"label": "DAHLIA", "domains": ("dahlia-av.jp",), "login": "https://dahlia-av.jp/"},
    "makers": {"label": "片商官网", "domains": (), "login": ""},
    "fc2club": {"label": "FC2Club", "domains": ("fc2club.top",), "login": "https://fc2club.top/"},
    "freejavbt": {"label": "FreeJavBT", "domains": ("freejavbt.com",), "login": "https://freejavbt.com/"},
    "airav": {"label": "AIRAV", "domains": ("airav.io",), "login": "https://airav.io/"},
    "avsox": {"label": "AVSOX", "domains": ("avsox.click",), "login": "https://avsox.click/"},
    # FC2 的商品页、卖家页和图片存储（`storage*`、`contents-thumbnail*`）都在 fc2.com
    # 底下，一条域名就够。免登录可读，不收 Cookie。
    "fc2": {"label": "FC2", "domains": ("fc2.com",), "login": "https://adult.contents.fc2.com/"},
    # 女優那一栏在浏览器里只对登录用户显示，公开采集也带上用户贴的 Cookie（`session`），
    # 按登录用户看到的那一页取；游客补问这一栏眼下也回，见 `sources/fc2cmadb.py`。
    "fc2cmadb": {"label": "FC2CMADB", "domains": ("fc2cmadb.com",), "login": "https://fc2cmadb.com/",
                 "cookie": True, "session": True},
    # 需要站点会话的来源可主动配置 Cookie；验证或拒绝访问按来源冷却，不操作桌面。
    "fc2ppvdb": {"label": "FC2PPV-DB", "domains": ("fc2ppv-db.com",), "login": "https://fc2ppv-db.com/",
                 "cookie": True, "session": True, "blocked_pause": 6 * 3600},
    "javten": {"label": "JAVten", "domains": ("javten.com",), "login": "https://javten.com/",
               "cookie": True, "session": True, "blocked_pause": 6 * 3600},
    # 下架 FC2 的最后一档。作品页在 javarchive.com、封面转存在 javstore.net 上，两边算同一个
    # 来源。免登录可读，不收 Cookie，`robots.txt` 是全站放行。
    "javarchive": {"label": "JavArchive", "domains": ("javarchive.com", "javstore.net"),
                   "login": "https://javarchive.com/"},
    # 作品 JSON、剧照和样片都在 1pondo.tv 底下（含 `smovie.`）。免登录可读，不收 Cookie。
    "1pondo": {"label": "一本道", "domains": ("1pondo.tv",), "login": "https://www.1pondo.tv/"},
    "instagram": {"label": "Instagram", "domains": ("instagram.com", "cdninstagram.com"), "login": "https://www.instagram.com/accounts/login/", "cookie": True},
    # 三家社区来源拒绝访问时回 403，不发 Retry-After：javdb 是出口 IP 超了配额（一封 3～7 日，
    # docs/SOURCING.md），AVBase 是 Cloudflare 验证，JavBus 的 403 原因未取得。封期里接着问只会每条都
    # 再撞一次，所以整个来源停下——停多久按 `FIRST_BLOCKED_PAUSE` 翻倍，`blocked_pause` 是这个来源的上限。
    # 回 200 的验证页由解析器认成 `cloudflare_challenge`，经 `SourceTransport.hold` 进同一份记录。
    # `session`：公开采集也带上用户在采集设置里贴的 Cookie。javdb 有登录墙，JavBus 有年龄门，
    # 不带只回确认页；Cookie 由用户在浏览器里过门或登录后贴进来，Peach 不读浏览器的 Cookie 库。
    "javdb": {"label": "JavDB", "domains": ("javdb.com", "jdbstatic.com", "jdbimgs.com"), "login": "https://javdb.com/",
              "cookie": True, "session": True, "blocked_pause": 24 * 3600},
    "javbus": {"label": "JavBus", "domains": ("javbus.com",), "login": "https://www.javbus.com/", "cookie": True,
               "session": True, "blocked_pause": 6 * 3600},
    # 磁力候选链。manko.fun 的页面数据来自同一产品使用的 healertanker API；Sukebei
    # 只读搜索结果。两者仍走统一的请求预算、来源冷却与域名白名单。
    "manko": {"label": "manko.fun", "domains": ("manko.fun", "healertanker.com"),
              "login": "https://manko.fun/", "blocked_pause": 6 * 3600},
    "sukebei": {"label": "sukebei", "domains": ("sukebei.nyaa.si",),
                "login": "https://sukebei.nyaa.si/", "blocked_pause": 6 * 3600},
    "avbase": {"label": "AVBase", "domains": ("avbase.net",), "login": "https://www.avbase.net/", "blocked_pause": 6 * 3600},
    # 女优编号与资料交叉核对（ADR-0067）。httpx 直连就回整页，不收 Cookie、不走浏览器；
    # 拒绝访问时和 AVBase 一样停一段，不反复撞。
    "avwikidb": {"label": "AVWikiDB", "domains": ("avwikidb.com",), "login": "https://avwikidb.com/",
                 "blocked_pause": 6 * 3600},
    # 女优资料、别名和事务所名册共用来源冷却，不因消费者不同而重复访问受限页面。
    "minnano-av": {"label": "みんなのAV", "domains": ("minnano-av.com",), "login": "https://www.minnano-av.com/",
                   "blocked_pause": 6 * 3600},
}
_LOCK = threading.RLock()

#: 撞上拒绝访问后第一次停多久。`blocked_pause` 是**上限**，不是首停时长：那几家按出口
#: IP 计的封，实际封期常常远短于上限。2026-09-22 实测——javdb 记下的 24 小时只走了
#: 6.6 小时，用同一套 client 问首页和两条搜索全回 200，剩下的时间整个来源在盲等，那一轮
#: 778 部片的 1432 条失败全部写着「来源正在冷却」。所以先停这一档，连着再撞才翻倍到上限；
#: 通了一次就把记录清掉，下次从最短的一档重新起算。
FIRST_BLOCKED_PAUSE = 900


class SourcePaused(RuntimeError):
    """来源冷却期内停止请求，保留已有图像。"""


class SourceBudgetExhausted(SourcePaused):
    """本趟采集预算耗尽，不能作为单个来源的冷却跳过。"""


def cooldown_path(root: Path, source: str) -> Path:
    """这个来源的冷却记录。键是来源名；没有来源名的请求按主机名散列，见 `SourceTransport`。"""
    return Path(root) / ("scraping-" + source + ".cooldown.json")


#: 新记录统一使用 HTTP；读取旧记录时保留来源冷却，不因传输方式变化而再次撞站。
VIA_HTTP = "http"


def cooldown_state(root: Path, source: str) -> tuple[float, int]:
    """`(冷却到几点, 连着撞了几次)`；没有记录或记录坏了都按 `(0, 0)`。"""
    until, blocks, _via = _record(root, source)
    return until, blocks


def _record(root: Path, source: str) -> tuple[float, int, str]:
    """`(冷却到几点, 连着撞了几次, 走的哪条路)`；没有记录或记录坏了都按 `(0, 0, VIA_HTTP)`。"""
    try:
        record = json.loads(cooldown_path(root, source).read_text(encoding="utf-8"))
        return float(record["until"]), int(record.get("blocks") or 0), str(record.get("via") or VIA_HTTP)
    except (OSError, ValueError, KeyError, TypeError, AttributeError):
        return 0.0, 0, VIA_HTTP


def _state_for(root: Path, source: str, via: str) -> tuple[float, int]:
    """保留来源在已有传输路径上取得的冷却。"""
    until, blocks, _ = _record(root, source)
    return until, blocks


def paused_until(root: Path, source: str) -> float:
    """来源还在冷却就返回到几点，否则 0。amane 桥那几站在起子进程前按它筛。"""
    until, _ = cooldown_state(root, source)
    return until if until > time.time() else 0.0


def pause_source(root: Path, source: str, *, refused: bool = False,
                 retry_after: float | None = None, via: str = VIA_HTTP) -> float:
    """按现成的两档把来源停下，返回冷却到几点。

    `refused` 走 403 那一档：先停 `FIRST_BLOCKED_PAUSE`，连着再撞才翻倍，上限是
    `SOURCES[source]['blocked_pause']`，没登记上限的来源按 24 小时。否则走 429 那一档：
    停站方说的 `retry_after` 秒，没说就 15 分钟。amane 桥报的限流与封禁、自写站契约报的
    冷却细档（`SourceTransport.hold`）都从这里进，与 `SourceTransport` 读写同一份记录。
    `via` 是这次请求走的路；记录是另一条路写下的，就从第一档重新数。
    """
    until, blocks = _state_for(root, source, via)
    if refused:
        blocks += 1
        limit = SOURCES.get(source, {}).get("blocked_pause") or 24 * 3600
        until = time.time() + min(FIRST_BLOCKED_PAUSE * 2 ** (blocks - 1), limit)
    else:
        until = time.time() + max(0.0, float(retry_after if retry_after is not None else 900))
    _pause(cooldown_path(root, source), until, blocks, via)
    return until


def _pause(cooldown: Path, until: float, blocks: int = 0, via: str = VIA_HTTP) -> None:
    with _LOCK:
        cooldown.parent.mkdir(parents=True, exist_ok=True)
        cooldown.write_text(json.dumps({"until": max(until, time.time() + 1), "blocks": blocks, "via": via}),
                            encoding="utf-8")


def source_for(url: str) -> str | None:
    return next((name for name, spec in SOURCES.items()
                 if host_under(hostname_of(url), spec["domains"])), None)


def _store(root: Path) -> CredentialStore:
    return CredentialStore(root)


def values_for(root: Path, source: str) -> dict[str, str]:
    if source not in SOURCES:
        raise ValueError("未知采集来源")
    credential = _store(root).load("scraping-" + source)
    return dict(credential.values) if credential else {}


def _write_values(root: Path, source: str, values: dict[str, str]) -> None:
    path = _store(root).path_for("scraping-" + source)
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", dir=path.parent,
                                         delete=False) as handle:
            temporary = Path(handle.name)
            json.dump(values, handle, ensure_ascii=False)
        if os.name != "nt":
            temporary.chmod(0o600)
        temporary.replace(path)
    finally:
        if temporary:
            temporary.unlink(missing_ok=True)


def _refused(response) -> bool:
    """HTTP 客户端这一下是不是被站方拦了：429、403，或回 200 的 Cloudflare 验证页。"""
    from .sources.base import challenge_page

    return response.status in {403, 429} or challenge_page(response.body)


def cookie_jar(values: dict[str, str], source: str) -> http.cookiejar.CookieJar:
    """文本导入复用标准库；过期项、异域项和 CDN 会话项不参与请求。"""
    domain = urlsplit(SOURCES[source]["login"]).hostname or ""
    domain = domain.removeprefix("www.")
    jar = http.cookiejar.MozillaCookieJar()
    text = values.get("cookies_text", "")
    if text:
        path = None
        try:
            with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", delete=False) as handle:
                path = handle.name
                handle.write(text)
            jar.load(path, ignore_discard=True, ignore_expires=False)
        except (OSError, http.cookiejar.LoadError) as exc:
            raise ValueError("Cookie 文件须为 Netscape 文本格式") from exc
        finally:
            if path:
                Path(path).unlink(missing_ok=True)
        for cookie in list(jar):
            if not host_under(cookie.domain.lstrip(".").lower(), (domain,)):
                jar.clear(cookie.domain, cookie.path, cookie.name)
    elif values.get("cookie"):
        text = values["cookie"]
        if "\r" in text or "\n" in text:
            raise ValueError("请粘贴一行 Cookie 请求头")
        parsed = SimpleCookie()
        try:
            parsed.load(text)
        except CookieError as exc:
            raise ValueError("Cookie 请求头格式无效") from exc
        for name, item in parsed.items():
            jar.set_cookie(http.cookiejar.Cookie(
                0, name, item.value, None, False, domain, True, False,
                "/", True, True, None, True, None, None, {}, False))
    return jar


def save(root: Path, source: str, body: dict) -> dict:
    with _LOCK:
        values = values_for(root, source)
        previous_network = "direct" if values.get("network") == "direct" else "peach"
        mode = body.get("network", "direct" if values.get("network") == "direct" else "peach")
        if mode not in {"direct", "peach"}:
            raise ValueError("请选择来源连接方式")
        if values.get("network") == "proxy" and mode == "peach":
            inherited = peach_proxy.values(root)
            peach_proxy.client_options(root)
            peach_proxy.save(root, inherited)
        values["network"] = mode
        values.pop("proxy", None)
        if body.get("revoke"):
            values.pop("cookie", None)
            values.pop("cookies_text", None)
        elif body.get("cookie") or body.get("cookies_text"):
            if not SOURCES[source].get("cookie"):
                raise ValueError("此来源不接受登录 Cookie")
            if body.get("cookie") and body.get("cookies_text"):
                raise ValueError("Cookie 粘贴与文件导入只选一种")
            supplied = {name: str(body.get(name) or "") for name in ("cookie", "cookies_text")}
            if sum(map(len, supplied.values())) > 256 * 1024:
                raise ValueError("Cookie 文本超过 256 KiB")
            if not list(cookie_jar(supplied, source)):
                raise ValueError("未找到该来源尚未过期的 Cookie")
            values.update(supplied)
            # 新 Cookie 多半是为了解开 403 才换的；冷却记的是旧 Cookie 撞出来的账，别让它压着新的等到期。
            cooldown_path(root, source).unlink(missing_ok=True)
        _write_values(root, source, values)
        if mode != previous_network:
            cooldown_path(root, source).unlink(missing_ok=True)
    return describe(root, source)


def describe(root: Path, source: str) -> dict:
    values = values_for(root, source)
    until = paused_until(root, source)
    return {"source": source, "label": SOURCES[source]["label"],
            "login": SOURCES[source]["login"], "accepts_cookie": bool(SOURCES[source].get("cookie")),
            "network": "direct" if values.get("network") == "direct" else "peach",
            "cookie_saved": bool(values.get("cookie") or values.get("cookies_text")),
            "cooldown_until": until or None}


def source_checks(root: Path, source: str) -> dict:
    """逐站最近一次连接与解析结果；不包含请求地址、正文或凭据。"""
    if source not in SOURCES:
        return {}
    try:
        path = Path(root) / f"source-check-{source}.json"
        if path.stat().st_size > 16384:
            return {}
        value = json.loads(path.read_text(encoding="utf-8"))
        if not isinstance(value, dict):
            return {}
        result = {}
        for stage in ("connection", "metadata"):
            record = value.get(stage)
            if not isinstance(record, dict):
                continue
            clean = {"ok": record.get("ok") is True,
                     "kind": record.get("kind") if record.get("kind") in ("ok", "auth", "unavailable", "not_found") else "unavailable",
                     "reason": record.get("reason") if isinstance(record.get("reason"), str) and len(record["reason"]) <= 64 else "unexpected",
                     "status": record.get("status") if type(record.get("status")) is int and 100 <= record["status"] <= 599 else 0}
            for key in ("checked_at", "last_success_at", "elapsed_s"):
                raw = record.get(key)
                if isinstance(raw, bool) or raw is None:
                    continue
                try:
                    if isinstance(raw, str) and key != "elapsed_s":
                        moment = datetime.fromisoformat(raw.replace("Z", "+00:00"))
                        number = moment.replace(tzinfo=timezone.utc).timestamp() if moment.tzinfo is None else moment.timestamp()
                    else:
                        number = float(raw)
                    if math.isfinite(number) and number >= 0:
                        clean[key] = number
                except (ValueError, TypeError, OverflowError, OSError):
                    pass
            if "checked_at" in clean:
                result[stage] = clean
        return result
    except (OSError, ValueError):
        return {}


def record_source_check(root: Path, source: str, stage: str, record: dict) -> None:
    """保存脱敏状态，保留连接检查与元数据解析的独立时间戳。"""
    if source not in SOURCES or stage not in {"connection", "metadata"}:
        return
    allowed = {"ok", "kind", "reason", "status", "elapsed_s", "checked_at"}
    with _LOCK:
        state = source_checks(root, source)
        clean = {key: value for key, value in record.items() if key in allowed}
        if stage == "metadata":
            clean["last_success_at"] = record.get("checked_at") if record.get("ok") else state.get(stage, {}).get("last_success_at")
        state[stage] = clean
        try:
            atomic_write_text(Path(root) / f"source-check-{source}.json",
                              json.dumps(state, ensure_ascii=False), mode=0o600)
        except OSError:
            LOGGER.warning("来源 %s 的诊断记录未保存", source)


def client_for(root: Path, source: str, *, session: bool = False, **kwargs) -> httpx.Client:
    values = values_for(root, source)
    network = {"trust_env": False} if values.get("network") == "direct" else peach_proxy.client_options(root)
    options = {**network, "follow_redirects": True,
               "headers": {"User-Agent": USER_AGENT}}
    if session:
        options["cookies"] = cookie_jar(values, source)
    options.update(kwargs)
    return httpx.Client(**options)


class SourceTransport:
    """公开采集按来源复用连接池；登录会话由特定来源消费者显式建立。"""

    def __init__(self, secrets_root: Path, *, max_requests: int = 0,
                 max_bytes: int = 0, max_seconds: float = 0):
        self.root = secrets_root
        self.transports: dict[str | None, HttpxTransport] = {}
        self.max_requests, self.max_bytes = max_requests, max_bytes
        from .processing_control import deadline_after
        self.deadline = deadline_after(max_seconds) if max_seconds else 0
        self.requests = self.bytes = 0

    def __call__(self, request: HttpRequest, timeout: float, max_bytes: int):
        from .task_control import operation
        with operation():
            return self._controlled_request(request, timeout, max_bytes)

    def _controlled_request(self, request: HttpRequest, timeout: float, max_bytes: int):
        for _ in range(6):
            from .processing_control import checkpoint
            checkpoint('network')
            from .processing_traffic import CURRENT, download_route
            if CURRENT.get() is None:
                response = self._request(request, timeout, max_bytes)
            else:
                source = source_for(request.url)
                direct = bool(source and values_for(self.root, source).get('network') == 'direct')
                options = {'trust_env': False} if direct else peach_proxy.client_options(self.root)
                with download_route(bool(options.get('proxy') or options.get('trust_env', True))):
                    response = self._request(request, timeout, max_bytes)
            if response.status not in {301, 302, 303, 307, 308} or not response.headers.get("location"):
                return response
            target = urljoin(request.url, response.headers["location"])
            if urlsplit(target).scheme != "https":
                raise ValueError("采集重定向必须使用 HTTPS")
            cross_origin = urlsplit(target).netloc != urlsplit(request.url).netloc
            headers = {k: v for k, v in request.headers.items()
                       if not cross_origin or k.lower() not in {"cookie", "authorization", "host"}}
            request = HttpRequest("GET" if response.status == 303 else request.method,
                                  target, headers, None if response.status == 303 else request.body)
        raise ValueError("采集重定向次数超过上限")

    def _request(self, request: HttpRequest, timeout: float, max_bytes: int):
        """闸门到顶的三句话都写「本趟」和「再跑一次接着采」：这三条按任务重新计数，
        读的人要据以决定的是「现在重跑一遍」，不是去查哪里还有配额。"""
        source = source_for(request.url)
        if source == "javbus":
            # 中文作品解析与连接检查共用语言偏好，封面请求也遵循来源策略。
            headers = {key: value for key, value in request.headers.items() if key.lower() != "accept-language"}
            request = HttpRequest(request.method, request.url,
                                  {**headers, "Accept-Language": "zh-CN,zh;q=0.9"}, request.body)
        if self.max_requests and self.requests >= self.max_requests:
            raise SourceBudgetExhausted("本趟采集次数已用完，再跑一次接着采；已有图片保留")
        if self.deadline:
            timeout = min(timeout, self.deadline - time.monotonic())
            if timeout <= 0:
                raise SourceBudgetExhausted("本趟采集时间已用完，再跑一次接着采；已有图片保留")
        if self.max_bytes:
            remaining = self.max_bytes - self.bytes
            if remaining <= 0:
                raise SourceBudgetExhausted("本趟下载量已用完，再跑一次接着采；已有图片保留")
            max_bytes = min(max_bytes, remaining - 1)
        key = source or hashlib.sha256(hostname_of(request.url).encode()).hexdigest()
        cooldown = cooldown_path(self.root, key)
        # 冷却属于来源，保留升级前已经记录的停止时间。
        via = VIA_HTTP
        until, blocks = _state_for(self.root, key, via)
        if until > time.time():
            raise SourcePaused("来源正在冷却，请稍后重试；已有图片保留")
        if source not in self.transports:
            self.transports[source] = self._transport_for(source)
        self.requests += 1
        try:
            response = self.transports[source](request, timeout, max_bytes)
        except httpx.HTTPError:
            raise httpx.TransportError("来源连接未取得，请检查该来源的网络设置") from None
        self.bytes += len(response.body)
        if response.status == 429:
            retry = response.headers.get("retry-after", "")
            try:
                until = time.time() + max(0, int(retry))
            except ValueError:
                try:
                    until = parsedate_to_datetime(retry).timestamp()
                except (ValueError, TypeError, OverflowError):
                    until = time.time() + 900
            _pause(cooldown, until, blocks, via)
            raise SourcePaused("来源限流，已记录冷却时间；已有图片保留")
        blocked_pause = SOURCES.get(source or "", {}).get("blocked_pause")
        if response.status == 403 and blocked_pause:
            blocks += 1
            _pause(cooldown, time.time()
                   + min(FIRST_BLOCKED_PAUSE * 2 ** (blocks - 1), blocked_pause), blocks, via)
            if SOURCES[source].get("cookie"):
                raise SourcePaused("来源拒绝访问，暂停向它请求一段时间；"
                                   "已有图片保留")
            raise SourcePaused("来源拒绝访问，暂停向它请求一段时间；已有图片保留")
        if source and response.status < 400 and _refused(response):
            pause_source(self.root, key, refused=True)
            raise SourcePaused("来源需要验证，本次跳过；已有图片保留")
        if source and SOURCES[source].get('blocked_pause') and response.status >= 500:
            pause_source(self.root, key, retry_after=300)
            raise SourcePaused("来源暂时不可用，本次跳过；已有图片保留")
        if blocks and response.status < 400:
            # 这一趟通了，封已经解除：清掉记录，下次撞上从最短的一档重新起算。
            cooldown.unlink(missing_ok=True)
        return response

    def hold(self, source: str, action: str) -> None:
        """契约报的冷却细档（`SourceFailure.cooldown_action`）写回这个来源的冷却记录。

        `blocked` 按 403 那一档翻倍，`rate_limited` 按 429 那一档；别的值与不在 `SOURCES` 里的来源不记。
        回 200 的验证页（AVBase、JAVten、FC2PPV-DB 的 httpx 那条路）在传输层看不出来，由解析器认出后经
        `SiteSource.holding` 走到这里，与 403 进的是同一份记录。
        """
        if action not in {"blocked", "rate_limited"} or source not in SOURCES:
            return
        pause_source(self.root, source, refused=action == "blocked", via=VIA_HTTP)


    def _transport_for(self, source: str | None):
        """按来源的连接与会话配置建立 HTTP 客户端。"""
        if source:
            client = client_for(self.root, source, session=bool(SOURCES[source].get("session")),
                                follow_redirects=False)
        else:
            client = httpx.Client(**peach_proxy.client_options(self.root), follow_redirects=False,
                                  headers={"User-Agent": USER_AGENT})
        return HttpxTransport(client, owns_client=True)

    def renew(self):
        self.close()

    def close(self):
        # 关闭本轮拥有的 HTTP 连接池。
        for transport in self.transports.values():
            if isinstance(transport, HttpxTransport):
                transport.close()
        self.transports.clear()
