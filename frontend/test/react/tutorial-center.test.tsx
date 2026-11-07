import { act } from 'react';
import { expect, it, vi } from 'vitest';
import { TutorialCenter } from '../../src/react/onboarding/tutorial-center';
import { emptyProgress, openGuide } from '../../src/onboarding/guide-state';
import { GUIDE_CHAPTERS } from '../../src/onboarding/guide-catalog';
import type { ShellActions } from '../../src/react/router/shell-actions';
import { buttonNamed, click, mount, pending, settle } from './render';

const guide = vi.hoisted(() => ({ create: vi.fn(), stop: vi.fn(), show: vi.fn() }));
vi.mock('../../src/onboarding/guide-driver', () => ({ createGuideSession: guide.create }));
vi.mock('../../src/react/application-residents', () => ({ stageApi: () => null }));

const actions = () => ({ navigate: vi.fn(), closeSettings: vi.fn() }) as unknown as ShellActions;
const progress = { ...emptyProgress(), campaign: 'welcome-1' };
const response = (body: unknown) => ({ ok: true, json: async () => body });

it('挂载、刷新可见状态与焦点变化不读取教程或显示遮罩', async () => {
  const fetcher = vi.fn(); vi.stubGlobal('fetch', fetcher);
  const input = document.createElement('input'); document.body.append(input); input.focus();
  await mount(<TutorialCenter actions={actions()} />);
  await act(async () => {
    window.dispatchEvent(new Event('focus'));
    document.dispatchEvent(new Event('visibilitychange'));
  });
  expect(fetcher).not.toHaveBeenCalled();
  expect(document.querySelector('[role="dialog"], .driver-overlay')).toBeNull();
  expect(document.activeElement).toBe(input);
});

it('用户打开时立即呈现教程，读取失败只在已打开页面内反馈', async () => {
  const late = pending<ReturnType<typeof response>>();
  vi.stubGlobal('fetch', vi.fn(async () => late.answer));
  await mount(<TutorialCenter actions={actions()} />);
  await act(async () => openGuide());
  expect(document.querySelector('[role="dialog"]')).not.toBeNull();
  await late.release({ ok: false, json: async () => ({}) });
  expect(document.querySelector('[role="dialog"]')?.textContent).toContain('未取得账本中的教程状态');
  await click(document.querySelector('[aria-label="关闭新手教程"]'));
  expect(document.querySelector('[role="dialog"]')).toBeNull();
  expect(document.querySelector('[role="alert"]')).toBeNull();
});

it.each(['close', 'complete'] as const)('主动导览 %s 后回到浏览，不再弹出教程目录', async mode => {
  let callbacks: { close(): void; next(skipped?: boolean): Promise<void> };
  guide.create.mockImplementation(options => { callbacks = options; return { stop: guide.stop, show: guide.show } });
  const fetcher = vi.fn(async () => response(progress)); vi.stubGlobal('fetch', fetcher);
  await mount(<TutorialCenter actions={actions()} />);
  await act(async () => openGuide()); await settle();
  await click(buttonNamed('开始快速导览'));
  expect(guide.create).toHaveBeenCalled();
  expect(document.querySelector('[role="dialog"]')).toBeNull();
  await act(async () => {
    if (mode === 'close') callbacks!.close();
    else for (const _step of GUIDE_CHAPTERS.find(chapter => chapter.id === 'basics')!.steps) await callbacks!.next();
  });
  await settle();
  expect(document.querySelector('[role="dialog"]')).toBeNull();
  expect(document.body.classList.contains('peach-guiding')).toBe(false);
});
