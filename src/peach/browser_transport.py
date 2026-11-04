"""用户主动连接账号时使用的独立浏览器与本机 CDP 通道。"""
from __future__ import annotations

import base64
import json
import os
import platform
import shutil
import socket
import struct
import subprocess
import time
import urllib.request
from pathlib import Path
from typing import Callable
from urllib.parse import urlsplit, urlunsplit


ONSCREEN = (200, 100)
WINDOW_SIZE = (1000, 800)
#: 验证页的标记，前两条是 Cloudflare 的标题（英文与中文界面），后面是它脚本与文案里的固定字串。
CHALLENGE_MARKS = ("Just a moment", "请稍候", "cf-chl-", "challenge-platform",
                   "Verifying you are human", "Attention Required")
_WINDOWS_CANDIDATES = (
    # 优先 Chrome；账号连接始终使用 Peach 独立目录，禁用同步。
    # 尾段写正斜杠：`Path` 在哪个平台都按它拆段，反斜杠在 macOS 上是文件名的一部分，测试找不到文件。
    ("ProgramFiles", "Google/Chrome/Application/chrome.exe"),
    ("ProgramFiles(x86)", "Google/Chrome/Application/chrome.exe"),
    ("LocalAppData", "Google/Chrome/Application/chrome.exe"),
    ("ProgramFiles(x86)", "Microsoft/Edge/Application/msedge.exe"),
    ("ProgramFiles", "Microsoft/Edge/Application/msedge.exe"),
)
_MAC_CANDIDATES = (
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
)
_LINUX_NAMES = ("google-chrome", "google-chrome-stable", "chromium", "chromium-browser",
                "microsoft-edge", "microsoft-edge-stable")


class BrowserUnavailable(RuntimeError):
    """用户主动连接账号时浏览器未能启动或连接已断开。"""


def find_browser(environ: dict[str, str] | None = None, system: str | None = None,
                 which: Callable[[str], str | None] = shutil.which) -> str | None:
    """用户主动连接账号可用的 Chromium 系浏览器；没有就返回 None。

    `PEACH_BROWSER` 指定的可执行文件优先。Linux 上没有显示器（无 `DISPLAY` 也无 `WAYLAND_DISPLAY`）
    时视为没有：用户需要可见窗口完成操作。
    """
    environ = os.environ if environ is None else environ
    system = platform.system() if system is None else system
    chosen = environ.get("PEACH_BROWSER")
    if chosen:
        return chosen if Path(chosen).is_file() else None
    if system == "Windows":
        candidates = [Path(environ[key]) / tail for key, tail in _WINDOWS_CANDIDATES if environ.get(key)]
    elif system == "Darwin":
        candidates = [Path(item) for item in _MAC_CANDIDATES]
    else:
        if not (environ.get("DISPLAY") or environ.get("WAYLAND_DISPLAY")):
            return None
        candidates = [Path(found) for found in map(which, _LINUX_NAMES) if found]
    return next((str(path) for path in candidates if path.is_file()), None)


def proxy_flags(*, direct: bool, proxy: str) -> tuple[str, ...] | None:
    """来源的连接方式换成浏览器的启动参数。

    直连是 `--no-proxy-server`；Peach 代理有地址就 `--proxy-server=`；跟环境走的什么都不加，浏览器
    用系统代理。Chromium 不收命令行里的代理凭据（会弹登录框），带用户名的地址返回 None，来源退回
    httpx 那条路。
    """
    if direct:
        return ("--no-proxy-server",)
    if not proxy:
        return ()
    parsed = urlsplit(proxy)
    if parsed.username or parsed.password:
        return None
    scheme = 'socks5' if parsed.scheme == 'socks5h' else parsed.scheme
    return (f"--proxy-server={urlunsplit((scheme, parsed.netloc, '', '', ''))}",)


class _WebSocket:
    """最小的 RFC 6455 客户端：本机回环、文本帧、客户端加掩码、不处理分片。"""

    def __init__(self, url: str, timeout: float = 30.0):
        _scheme, rest = url.split("://", 1)
        hostport, path = rest.split("/", 1)
        host, port = hostport.rsplit(":", 1)
        self.sock = socket.create_connection((host, int(port)), timeout=timeout)
        key = base64.b64encode(os.urandom(16)).decode()
        self.sock.sendall((f"GET /{path} HTTP/1.1\r\nHost: {hostport}\r\nUpgrade: websocket\r\n"
                           f"Connection: Upgrade\r\nSec-WebSocket-Key: {key}\r\n"
                           f"Sec-WebSocket-Version: 13\r\n\r\n").encode())
        head = b""
        while b"\r\n\r\n" not in head:
            chunk = self.sock.recv(4096)
            if not chunk:
                raise ConnectionError("浏览器在握手时关闭了连接")
            head += chunk
        if b" 101 " not in head.split(b"\r\n", 1)[0]:
            raise ConnectionError("浏览器拒绝了调试连接")
        self.buffer = head.split(b"\r\n\r\n", 1)[1]
        self.next_id = 0

    def _read(self, size: int) -> bytes:
        while len(self.buffer) < size:
            chunk = self.sock.recv(65536)
            if not chunk:
                raise ConnectionError("浏览器关闭了调试连接")
            self.buffer += chunk
        out, self.buffer = self.buffer[:size], self.buffer[size:]
        return out

    def send(self, text: str) -> None:
        payload = text.encode()
        mask = os.urandom(4)
        size = len(payload)
        if size < 126:
            head = bytes([0x81, 0x80 | size])
        elif size < 65536:
            head = bytes([0x81, 0x80 | 126]) + struct.pack(">H", size)
        else:
            head = bytes([0x81, 0x80 | 127]) + struct.pack(">Q", size)
        masked = bytes(byte ^ mask[index % 4] for index, byte in enumerate(payload))
        self.sock.sendall(head + mask + masked)

    def recv(self) -> str:
        while True:
            first, second = self._read(2)
            opcode, size = first & 0x0F, second & 0x7F
            if size == 126:
                size = struct.unpack(">H", self._read(2))[0]
            elif size == 127:
                size = struct.unpack(">Q", self._read(8))[0]
            if second & 0x80:
                self._read(4)
            data = self._read(size)
            if opcode == 0x1:
                return data.decode()
            if opcode == 0x8:
                raise ConnectionError("浏览器关闭了调试连接")

    def call(self, method: str, timeout: float = 30.0, **params):
        """发一条 CDP 命令，等它的回包；中途到的事件跳过。"""
        self.next_id += 1
        wanted = self.next_id
        self.sock.settimeout(timeout)
        self.send(json.dumps({"id": wanted, "method": method, "params": params}))
        while True:
            message = json.loads(self.recv())
            if message.get("id") == wanted:
                if "error" in message:
                    raise RuntimeError(f"{method}: {message['error'].get('message', message['error'])}")
                return message.get("result", {})

    def close(self) -> None:
        try:
            self.sock.close()
        except OSError:
            pass


def _targets(port: int) -> list[dict]:
    # 回环 DevTools 端口不经任何代理；裸 urlopen 读系统代理，绕过名单没列 127.0.0.1 时会被代理接走。
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
    with opener.open(f"http://127.0.0.1:{port}/json", timeout=10) as response:
        return json.load(response)


class _Browser:
    """一个浏览器进程与它唯一的那一页。

    用户主动连接账号的窗口（PikPak 浏览器登录，ADR-0093）：开在屏幕内、不挡图片与字体
    （登录页和人机验证要靠它们渲染），Edge 也不用 InPrivate，因为登录要的 localStorage 必须落在 profile 里。
    """

    def __init__(self, executable: str, profile: Path, flags: tuple[str, ...], *,
                 popen: Callable[..., subprocess.Popen] = subprocess.Popen,
                 targets: Callable[[int], list[dict]] = _targets, sleep: Callable[[float], None] = time.sleep):
        self.executable, self.profile, self.flags = executable, Path(profile), tuple(flags)
        self._popen, self._targets, self._sleep = popen, targets, sleep
        self.process: subprocess.Popen | None = None
        self.socket: _WebSocket | None = None
        self.window_id = None

    def start(self) -> None:
        self.profile.mkdir(parents=True, exist_ok=True)
        port_file = self.profile / "DevToolsActivePort"
        port_file.unlink(missing_ok=True)
        position = ONSCREEN
        command = [self.executable, f"--user-data-dir={self.profile}", "--remote-debugging-port=0",
                   # 带远程调试口时 Chromium 会把 `navigator.webdriver` 置真，Turnstile 据此拒绝连人工点击；关掉这个标记。
                   # 它是「不受支持的标志」，浏览器会在每个窗口顶上挂一条警告；`--test-type` 让它不挂。
                   "--disable-blink-features=AutomationControlled", "--test-type",
                   "--no-first-run", "--no-default-browser-check", "--disable-background-networking", "--disable-sync",
                   f"--window-size={WINDOW_SIZE[0]},{WINDOW_SIZE[1]}",
                   f"--window-position={position[0]},{position[1]}", *self.flags]
        command.append("about:blank")
        try:
            self.process = self._popen(command, stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL,
                                       stderr=subprocess.DEVNULL)
        except OSError as error:
            raise BrowserUnavailable(f"浏览器没有启动：{error}") from None
        port = self._wait_port(port_file)
        try:
            page = next(target for target in self._targets(port) if target.get("type") == "page")
            self.socket = _WebSocket(page["webSocketDebuggerUrl"])
            self.socket.call("Page.enable")
            self.socket.call("Network.enable")
            self.window_id = self.socket.call("Browser.getWindowForTarget", targetId=page.get("id", "")).get("windowId")
        except (OSError, StopIteration, KeyError, ValueError, RuntimeError) as error:
            self.close()
            raise BrowserUnavailable(f"浏览器的调试口没有接上：{error}") from None

    def _wait_port(self, port_file: Path) -> int:
        for _ in range(300):
            if self.process is not None and self.process.poll() is not None:
                raise BrowserUnavailable(f"浏览器启动后立即退出（{self.process.returncode}）")
            if port_file.is_file():
                lines = port_file.read_text(encoding="utf-8", errors="replace").splitlines()
                if len(lines) >= 2 and lines[0].strip().isdigit():
                    return int(lines[0])
            self._sleep(0.1)
        self.close()
        raise BrowserUnavailable("浏览器没有写出调试口")

    def alive(self) -> bool:
        return self.socket is not None and self.process is not None and self.process.poll() is None

    def evaluate(self, expression: str, *, timeout: float = 30.0):
        assert self.socket is not None
        result = self.socket.call("Runtime.evaluate", timeout, expression=expression, returnByValue=True)
        if "exceptionDetails" in result:
            raise RuntimeError(result["exceptionDetails"].get("text") or "页面脚本出错")
        return result.get("result", {}).get("value")

    def navigate(self, url: str, *, referrer: str | None = None) -> None:
        """导航到 `url`；`referrer` 只作这一次主文档的 Referer，没有就不传这个键。"""
        assert self.socket is not None
        params = {"url": url, "referrer": referrer} if referrer else {"url": url}
        self.socket.call("Page.navigate", **params)


    def place(self, *, visible: bool) -> None:
        """要人点时放回屏幕内并顶到前面，点完最小化。

        位置与状态得分两步给：一条命令里同时带 `windowState` 与坐标，Chromium 只改状态不动位置
        （2026-09-25 实测，窗口停在屏幕外原地）。收起来用最小化而不是再挪回屏幕外：负坐标会被系统
        钳到边上，最小化则确定不占屏幕。
        """
        if self.socket is None or self.window_id is None:
            return
        if visible:
            self.socket.call("Browser.setWindowBounds", windowId=self.window_id, bounds={"windowState": "normal"})
            self.socket.call("Browser.setWindowBounds", windowId=self.window_id,
                             bounds={"left": ONSCREEN[0], "top": ONSCREEN[1],
                                     "width": WINDOW_SIZE[0], "height": WINDOW_SIZE[1]})
            self.socket.call("Page.bringToFront")
        else:
            self.socket.call("Browser.setWindowBounds", windowId=self.window_id, bounds={"windowState": "minimized"})

    def close(self) -> None:
        if self.socket is not None:
            try:
                self.socket.call("Browser.close", 5.0)
            except (OSError, RuntimeError, ValueError):
                pass
            self.socket.close()
            self.socket = None
        if self.process is not None:
            try:
                self.process.wait(timeout=10)
            except subprocess.TimeoutExpired:
                self.process.kill()
            self.process = None
