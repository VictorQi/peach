import { act } from 'react';
import { afterEach, expect, it, vi } from 'vitest';
import { LibraryImportPanel, type LibraryImports } from '../../src/react/catalog-grid/library-import-panel';
import { buttonNamed, click, mount, mountRoot, settle, submit, type } from './render';

const empty: LibraryImports = { editable: true, native_picker: true, roots: [], jobs: [] };
const reply = (body: unknown, status = 200) => ({ ok: status < 400, status, json: async () => body });
afterEach(() => sessionStorage.removeItem('peach.library'));

it('已有内容的首屏不读取目录设置', async () => {
  const fetcher = vi.fn();
  vi.stubGlobal('fetch', fetcher);
  const host = await mount(<LibraryImportPanel empty={false} onContent={vi.fn()} />);
  expect(fetcher).not.toHaveBeenCalled();
  expect(host.textContent).toBe('');
});

it('选择文件夹后直接添加并读取，取消选择不写配置', async () => {
  let chosen: string | null = null;
  const fetcher = vi.fn(async (url: string) => reply(url === '/api/pick-folder' ? { path: chosen } : empty));
  vi.stubGlobal('fetch', fetcher);
  const changed = vi.fn();
  const host = await mount(<LibraryImportPanel empty onContent={changed} />);
  await click(buttonNamed('添加文件夹', host));
  expect(fetcher.mock.calls.map(([url]) => url)).toEqual(['/api/library-imports', '/api/pick-folder']);
  expect(changed).not.toHaveBeenCalled();
  chosen = 'C:\\Movies';
  const library = '12345678-1234-1234-1234-123456789abc';
  sessionStorage.setItem('peach.library', library);
  await click(buttonNamed('添加文件夹', host));
  const calls = fetcher.mock.calls as [string, RequestInit?][];
  expect(JSON.parse(String(calls.find(([url, init]) => url === '/api/library-imports' && init?.method === 'POST')?.[1]?.body)))
    .toEqual({ path: chosen, library_id: library });
  expect(changed).toHaveBeenCalled();
  expect(host.querySelector('[role="dialog"]')).toBeNull();
});

it('远程服务器输入服务器路径；失败和重试都留在当前位置', async () => {
  let error = true;
  const fetcher = vi.fn(async (_url: string, init?: RequestInit) => init?.method === 'POST' && error
    ? reply({ detail: '文件夹无法读取' }, 400) : reply({ ...empty, native_picker: false }));
  vi.stubGlobal('fetch', fetcher);
  const host = await mount(<LibraryImportPanel empty onContent={vi.fn()} />);
  expect(host.textContent).toContain('Peach 服务器上的文件夹路径');
  expect(buttonNamed('添加文件夹', host)).toBeNull();
  await type(host.querySelector('input'), '/media/movies');
  await submit(host.querySelector('form'));
  expect(host.querySelector('[role="alert"]')?.textContent).toBe('文件夹无法读取');
  expect(host.querySelector('input')?.value).toBe('/media/movies');
  error = false;
  await submit(host.querySelector('form'));
  expect(host.querySelector('[role="alert"]')).toBeNull();
  expect(fetcher.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(2);
});

it('已添加但尚未读取和离线的目录可原位开始，活动任务不能重复开始', async () => {
  const roots = [{ id: 'one', library_id: 'lib', name: '电影', path: 'D:\\Movies', online: false }];
  let started = false;
  const fetcher = vi.fn(async (_url: string, init?: RequestInit) => {
    if (init?.method === 'POST') started = true;
    return reply({ ...empty, roots, jobs: started ? [{ id: 2, root_id: 'one', state: 'pending', label: '正在读取', error: '' }] : [] });
  });
  vi.stubGlobal('fetch', fetcher);
  const host = await mount(<LibraryImportPanel empty onContent={vi.fn()} />);
  expect(host.textContent).toContain('文件夹当前不可用');
  await click(buttonNamed('开始读取', host));
  expect(JSON.parse(String(fetcher.mock.calls.find(([, init]) => init?.method === 'POST')?.[1]?.body))).toEqual({ root_id: 'one' });
  expect(buttonNamed('开始读取', host)?.disabled).toBe(true);
});

it('首批内容出现后继续更新这一轮进度，完成后不挡住浏览', async () => {
  vi.useFakeTimers();
  let state = 'running';
  vi.stubGlobal('fetch', vi.fn(async () => reply({ ...empty,
    jobs: [{ id: 3, root_id: 'one', state, label: '正在读取电影', error: '' }] })));
  const changed = vi.fn();
  const view = await mountRoot(<LibraryImportPanel empty onContent={changed} />);
  await view.rerender(<LibraryImportPanel empty={false} onContent={changed} />);
  expect(view.host.textContent).toContain('正在读取电影');
  state = 'succeeded';
  await act(async () => { await vi.advanceTimersByTimeAsync(2000) });
  await settle();
  expect(view.host.textContent).toBe('');
  expect(changed).toHaveBeenCalled();
});
