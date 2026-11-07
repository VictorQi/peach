"""用户主动连接账号时的 CDP 握手、帧、浏览器查找与进程生命周期。"""
import base64
import hashlib
import json
import socket
import struct
import tempfile
import threading
import unittest
from pathlib import Path
from unittest.mock import patch

from peach import browser_transport
from peach.browser_transport import _WebSocket, find_browser, proxy_flags


class FakeCdp(threading.Thread):
    """一个端口同时充当 `/json` 目标列表和页面的 WebSocket 端：回包按 `handler(method, params)`。"""

    def __init__(self, handler):
        super().__init__(daemon=True)
        self.handler = handler
        self.calls: list[tuple[str, dict]] = []
        self.listener = socket.socket()
        self.listener.bind(("127.0.0.1", 0))
        self.listener.listen(5)
        self.port = self.listener.getsockname()[1]
        self.start()

    def targets(self, port: int) -> list[dict]:
        assert port == self.port
        return [{"type": "page", "id": "T1", "webSocketDebuggerUrl": f"ws://127.0.0.1:{self.port}/devtools/page/T1"}]

    def run(self):
        while True:
            try:
                connection, _ = self.listener.accept()
            except OSError:
                return
            threading.Thread(target=self.serve, args=(connection,), daemon=True).start()

    def serve(self, connection: socket.socket):
        head = b""
        while b"\r\n\r\n" not in head:
            chunk = connection.recv(4096)
            if not chunk:
                return
            head += chunk
        request, rest = head.split(b"\r\n\r\n", 1)
        key = next(line.split(b":", 1)[1].strip() for line in request.split(b"\r\n") if line.lower().startswith(b"sec-websocket-key"))
        accept = base64.b64encode(hashlib.sha1(key + b"258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest())
        connection.sendall(b"HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\n"
                           b"Sec-WebSocket-Accept: " + accept + b"\r\n\r\n")
        buffer = rest
        while True:
            frame, buffer = self.read_frame(connection, buffer)
            if frame is None:
                connection.close()
                return
            message = json.loads(frame)
            self.calls.append((message["method"], message.get("params", {})))
            result = self.handler(message["method"], message.get("params", {}))
            reply = json.dumps({"id": message["id"], "result": result}).encode()
            length = len(reply)
            if length < 126:
                header = bytes([0x81, length])
            elif length < 65536:
                header = bytes([0x81, 126]) + struct.pack(">H", length)
            else:
                header = bytes([0x81, 127]) + struct.pack(">Q", length)
            connection.sendall(header + reply)

    @staticmethod
    def read_frame(connection, buffer):
        def need(size):
            nonlocal buffer
            while len(buffer) < size:
                chunk = connection.recv(65536)
                if not chunk:
                    raise ConnectionError
                buffer += chunk
            out, buffer = buffer[:size], buffer[size:]
            return out
        try:
            first, second = need(2)
            opcode, size = first & 0x0F, second & 0x7F
            if size == 126:
                size = struct.unpack(">H", need(2))[0]
            elif size == 127:
                size = struct.unpack(">Q", need(8))[0]
            mask = need(4) if second & 0x80 else b"\0\0\0\0"
            data = bytes(byte ^ mask[index % 4] for index, byte in enumerate(need(size)))
        except ConnectionError:
            return None, buffer
        if opcode == 0x8:
            return None, buffer
        return data.decode(), buffer

    def close(self):
        self.listener.close()


class FakeProcess:
    def __init__(self, port_file: Path, port: int):
        self.port_file, self.port, self.returncode = port_file, port, None
        self.killed = False

    def poll(self):
        return self.returncode

    def wait(self, timeout=None):
        self.returncode = 0 if self.returncode is None else self.returncode
        return self.returncode

    def kill(self):
        self.killed = True
        self.returncode = -9


class Clock:
    def __init__(self):
        self.now = 1000.0

    def __call__(self):
        return self.now

    def sleep(self, seconds):
        self.now += seconds


class AttendedBrowserTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.profile = Path(self.temporary.name) / "browser"
        self.launches: list[list[str]] = []
        self.processes: list[FakeProcess] = []
        self.clock = Clock()


    @staticmethod
    def generic(method, params):
        if method == "Browser.getWindowForTarget":
            return {"windowId": 7}
        return {}


    def test_an_attended_window_opens_on_screen_keeps_its_profile_and_loads_everything(self):
        """给人登录用的窗口（ADR-0093）：开在屏幕内、Edge 也不用 InPrivate，图片与字体照常加载。"""
        server = FakeCdp(self.generic)
        self.addCleanup(server.close)

        def popen(command, **_kwargs):
            self.launches.append(command)
            (self.profile / "DevToolsActivePort").write_text(f"{server.port}\n/devtools/browser/abc\n", encoding="utf-8")
            return FakeProcess(self.profile / "DevToolsActivePort", server.port)

        browser = browser_transport._Browser("C:/fake/msedge.exe", self.profile, (), popen=popen,
                                             targets=server.targets, sleep=self.clock.sleep)
        browser.start()
        self.addCleanup(browser.close)
        command = self.launches[0]
        self.assertIn(f"--window-position={browser_transport.ONSCREEN[0]},{browser_transport.ONSCREEN[1]}", command)
        self.assertIn(f"--user-data-dir={self.profile}", command)
        self.assertNotIn("--inprivate", command, "登录要的 localStorage 必须落在 profile 里")
        self.assertNotIn("Network.setBlockedURLs", [method for method, _params in server.calls],
                         "登录页和人机验证靠图片与字体渲染")


class WebSocketTests(unittest.TestCase):
    def test_frames_of_every_length_class_round_trip(self):
        server = FakeCdp(lambda method, params: {"echo": params["text"]})
        self.addCleanup(server.close)
        ws = _WebSocket(f"ws://127.0.0.1:{server.port}/devtools/page/T1")
        self.addCleanup(ws.close)
        for size in (10, 200, 70000):
            text = "字" * size
            self.assertEqual(ws.call("Echo", text=text), {"echo": text})

    def test_a_cdp_error_surfaces_as_an_exception(self):
        server = FakeCdp(lambda method, params: {})
        self.addCleanup(server.close)
        ws = _WebSocket(f"ws://127.0.0.1:{server.port}/devtools/page/T1")
        self.addCleanup(ws.close)
        with patch.object(ws, "recv", return_value=json.dumps({"id": 1, "error": {"code": -32000, "message": "no target"}})):
            with self.assertRaises(RuntimeError) as caught:
                ws.call("Page.navigate", url="about:blank")
        self.assertIn("no target", str(caught.exception))


class BrowserLookupTests(unittest.TestCase):
    def test_the_environment_override_wins_and_a_missing_file_means_none(self):
        with tempfile.TemporaryDirectory() as folder:
            fake = Path(folder) / "browser.exe"
            fake.write_bytes(b"")
            self.assertEqual(find_browser({"PEACH_BROWSER": str(fake)}, "Windows"), str(fake))
            self.assertIsNone(find_browser({"PEACH_BROWSER": str(fake) + ".missing"}, "Windows"))

    def test_each_platform_looks_in_its_own_places(self):
        with tempfile.TemporaryDirectory() as folder:
            edge = Path(folder) / "Microsoft" / "Edge" / "Application" / "msedge.exe"
            edge.parent.mkdir(parents=True)
            edge.write_bytes(b"")
            self.assertEqual(find_browser({"ProgramFiles(x86)": folder}, "Windows"), str(edge))
            chrome = Path(folder) / "Google" / "Chrome" / "Application" / "chrome.exe"
            chrome.parent.mkdir(parents=True)
            chrome.write_bytes(b"")
            self.assertEqual(find_browser({"ProgramFiles(x86)": folder}, "Windows"), str(chrome),
                             "两个都装了先用 Chrome：Edge 会拿系统账号登录并同步")
            self.assertEqual(find_browser({"LocalAppData": folder}, "Windows"), str(chrome), "用户目录下只找 Chrome")
            self.assertIsNone(find_browser({}, "Linux", which=lambda name: None), "Linux 没有显示器就没有浏览器")
            linux_chrome = Path(folder) / "google-chrome"
            linux_chrome.write_bytes(b"")
            self.assertEqual(find_browser({"DISPLAY": ":0"}, "Linux",
                                          which=lambda name: str(linux_chrome) if name == "google-chrome" else None),
                             str(linux_chrome))

    def test_proxy_flags_follow_the_source_connection_mode(self):
        self.assertEqual(proxy_flags(direct=True, proxy="http://x:1"), ("--no-proxy-server",))
        self.assertEqual(proxy_flags(direct=False, proxy=""), ())
        self.assertEqual(proxy_flags(direct=False, proxy="socks5://127.0.0.1:7890/"), ("--proxy-server=socks5://127.0.0.1:7890",))
        self.assertEqual(proxy_flags(direct=False, proxy="socks5h://127.0.0.1:7890/"), ("--proxy-server=socks5://127.0.0.1:7890",))
        self.assertIsNone(proxy_flags(direct=False, proxy="http://user:pw@127.0.0.1:7890"), "命令行带不了代理凭据")


if __name__ == "__main__":
    unittest.main()
