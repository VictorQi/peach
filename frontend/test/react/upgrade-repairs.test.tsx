import { expect, it, vi } from 'vitest';
import { UpgradeRepairs } from '../../src/react/settings/upgrade-repairs';
import { buttonNamed, click, fetchMock, mount, sentBody, settle } from './render';

const client = vi.hoisted(() => ({ snapshot: { repairs: {
  state: 'idle', available: true, enabled: false,
  items: [{ id: 'background', label: '后台更新进度', state: 'idle', pending: 0, failed: 0 }],
} } }));
vi.mock('../../src/react/client-updates', () => ({ useClientUpdates: () => client }));

it('读取设置不开始更新；直接开始和停止，失败留在原处供重试', async () => {
  const fetcher = fetchMock(200, { ...client.snapshot.repairs, state: 'running', enabled: true });
  vi.stubGlobal('fetch', fetcher);
  const host = await mount(<UpgradeRepairs />);
  expect(fetcher).not.toHaveBeenCalled();
  await click(buttonNamed('开始更新', host));
  await settle();
  expect(sentBody(fetcher)).toEqual({ action: 'start' });
  expect(fetcher.mock.calls[0]?.[0]).toBe('/api/configuration/upgrade-repairs');
  expect(buttonNamed('停止派发', host)).not.toBeNull();
  expect(document.querySelector('[role="dialog"]')).toBeNull();
  const failed = fetchMock(409, { detail: '处理记录暂时被占用' });
  vi.stubGlobal('fetch', failed);
  await click(buttonNamed('停止派发', host));
  await settle();
  expect(sentBody(failed)).toEqual({ action: 'pause' });
  expect(host.querySelector('[role="alert"]')?.textContent).toBe('处理记录暂时被占用');
  const stopped = fetchMock(200, { ...client.snapshot.repairs, state: 'paused',
    items: [{ id: 'background', state: 'paused', pending: 4, failed: 1 }] });
  vi.stubGlobal('fetch', stopped);
  await click(buttonNamed('停止派发', host));
  await settle();
  expect(buttonNamed('继续更新', host)).not.toBeNull();
  await click(buttonNamed('重试失败项', host));
  expect(stopped.mock.calls[1]?.[0]).toBe('/api/configuration/upgrade-repairs/retry');
  expect(sentBody(stopped, 1)).toEqual({});
});
