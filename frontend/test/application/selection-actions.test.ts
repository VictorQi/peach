import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { runCatalogBatch, runFollowBatch, runJunkBatch } from '../../src/application/selection';
import { selected, followSelected, state, writeShell } from '../../src/shell';

const ports = vi.hoisted(() => ({ api: vi.fn(), confirm: vi.fn(), receipt: vi.fn(), failure: vi.fn() }));
vi.mock('../../src/core', async original => ({ ...await original<typeof import('../../src/core')>(), api: ports.api }));
vi.mock('../../src/ui-kit', async original => ({ ...await original<typeof import('../../src/ui-kit')>(), confirmModal: ports.confirm }));
vi.mock('../../src/application/catalog', () => ({ loadCatalog: vi.fn(), pushGridPage: vi.fn() }));
vi.mock('../../src/application/entity', () => ({ photoViewActive: vi.fn(), pushEntityPage: vi.fn(), setPhotoSize: vi.fn() }));
vi.mock('../../src/application/follow', () => ({ pushFollowFeed: vi.fn() }));
vi.mock('../../src/application/layout', () => ({ reloadAfterWrite: vi.fn() }));
vi.mock('../../src/application/preferences', () => ({ censorOn: vi.fn(), preferencesState: {} }));
vi.mock('../../src/application/loading', () => ({ loadingState: {} }));
vi.mock('../../src/application/receipts', () => ({ receiptsState: { actionReceipt: ports.receipt, actionFailure: ports.failure } }));
vi.mock('../../src/react/application-residents', () => ({ batchDockApi: () => null, loadBatchDock: vi.fn() }));

beforeEach(() => {
  vi.clearAllMocks(); ports.api.mockResolvedValue({}); ports.confirm.mockResolvedValue({ confirmed: false });
  document.body.innerHTML = '<button id="selectMode"></button>';
  history.replaceState({}, '', '/');
  selected.clear(); selected.add(1); selected.add(2);
  followSelected.clear(); followSelected.add(3);
  writeShell({ state: { ...state, state: '' }, selectMode: true, selectSurface: 'catalog' });
});
afterEach(() => { document.body.innerHTML = '' });

it.each(['like', 'seen', 'later', 'dispose', 'restore'])('批量 %s 直接提交选择范围，保留动作回执', async operation => {
  await runCatalogBatch(operation, document.getElementById('selectMode'));
  expect(ports.confirm).not.toHaveBeenCalled();
  expect(ports.api).toHaveBeenCalledWith('/api/batch', { method: 'POST', body: JSON.stringify({ ids: [1, 2], operation }) });
  expect(ports.receipt).toHaveBeenCalledOnce();
  expect(ports.failure).not.toHaveBeenCalled();
});

it('永久删除仍须确认，取消时不发删除请求', async () => {
  await runCatalogBatch('delete', document.getElementById('selectMode'));
  expect(ports.confirm).toHaveBeenCalledWith(expect.objectContaining({ danger: true, confirmLabel: '永久删除所选项目' }));
  expect(ports.api).not.toHaveBeenCalled();
});

it('可逆操作失败提供失败回执并释放忙态，可以重试', async () => {
  ports.api.mockRejectedValueOnce(new Error('服务暂不可用'));
  const button = document.getElementById('selectMode')!;
  await runCatalogBatch('seen', button);
  expect(ports.failure).toHaveBeenCalledOnce();
  expect(ports.receipt).not.toHaveBeenCalled();
  expect(button.getAttribute('aria-busy')).toBeNull();
  await runCatalogBatch('seen', button);
  expect(ports.receipt).toHaveBeenCalledOnce();
});

it('关注标记与垃圾复核直接执行，不重复确认', async () => {
  const button = document.getElementById('selectMode');
  await runFollowBatch('seen', button);
  selected.clear(); selected.add(1); selected.add(2);
  await runJunkBatch('dismiss-junk', button);
  expect(ports.confirm).not.toHaveBeenCalled();
  expect(ports.api.mock.calls.map(([path]) => path)).toEqual(['/api/follow/status', '/api/batch']);
});
