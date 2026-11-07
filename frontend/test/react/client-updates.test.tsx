import { act } from 'react';
import { expect, it, vi } from 'vitest';
import { useClientUpdates, CLIENT_UPDATES_INTERVAL } from '../../src/react/client-updates';
import { mountRoot, pending, settle } from './render';

const current = { runtime: { version: '0.9.0', build_id: 'a' }, release: { state: 'available' } };
const response = (body = current) => ({ ok: true, json: async () => body });
function Probe() {
  const { snapshot, refresh } = useClientUpdates();
  return <output data-refresh={refresh}>{snapshot?.runtime.build_id || ''}</output>;
}
function visible(state: DocumentVisibilityState) {
  vi.spyOn(document, 'visibilityState', 'get').mockReturnValue(state);
}
async function render(firstError = false) {
  vi.useFakeTimers(); visible('visible');
  const fetcher = vi.fn(async (_path: string, _init?: RequestInit) => response());
  if (firstError) fetcher.mockRejectedValueOnce(new Error('连接失败'));
  vi.stubGlobal('fetch', fetcher);
  const root = await mountRoot(<Probe />);
  await settle();
  return { ...root, fetcher };
}
async function tick() {
  await act(async () => { await vi.advanceTimersByTimeAsync(CLIENT_UPDATES_INTERVAL) });
  await settle();
}

it('设置读取本机更新快照，发现新构建也不打开弹层或刷新页面', async () => {
  const reload = vi.spyOn(window.location, 'reload').mockImplementation(() => {});
  const { host, fetcher } = await render();
  expect(host.textContent).toBe('a');
  fetcher.mockResolvedValue(response({ ...current, runtime: { version: '0.10.0', build_id: 'b' } }));
  await tick();
  expect(host.querySelector('output')?.dataset.refresh).toBe('true');
  expect(document.querySelector('[role="dialog"], [data-client-update]')).toBeNull();
  expect(reload).not.toHaveBeenCalled();
});

it('读取失败保留已取得内容，首次失败不假报成功', async () => {
  const { host, fetcher } = await render(true);
  expect(host.textContent).toBe('');
  fetcher.mockResolvedValue(response()); await tick();
  expect(host.textContent).toBe('a');
  fetcher.mockRejectedValue(new Error('连接失败')); await tick();
  expect(host.textContent).toBe('a');
  expect(document.querySelector('[role="alert"]')).toBeNull();
});

it('页面隐藏停止轮询，恢复只读取本机快照', async () => {
  const { fetcher } = await render();
  visible('hidden');
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')) });
  await tick(); expect(fetcher).toHaveBeenCalledTimes(1);
  visible('visible');
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')) });
  await settle(); expect(fetcher).toHaveBeenCalledTimes(2);
  expect(fetcher.mock.calls.every(([url]) => url === '/api/client-updates')).toBe(true);
});

it('卸载中止请求并忽略迟到响应，释放监听和计时器', async () => {
  const { host, fetcher, unmount } = await render();
  const late = pending<ReturnType<typeof response>>();
  fetcher.mockImplementation(async () => late.answer);
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')) });
  const signal = fetcher.mock.calls.at(-1)?.[1]?.signal;
  await unmount(); expect(signal?.aborted).toBe(true);
  await late.release(response()); await tick();
  expect(fetcher).toHaveBeenCalledTimes(2);
  expect(host.textContent).toBe('');
});
