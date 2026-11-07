import assert from 'node:assert/strict';
import { copyFile, mkdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { after, before, describe, it } from 'node:test';
import type { Browser } from 'playwright-core';
import { launch, layout, requiredEnv, visit, VIEWPORTS } from './harness.ts';

describe('原位添加文件夹', () => {
  let browser: Browser;
  before(async () => { browser = await launch() });
  after(async () => { await browser?.close() });
  for (const viewport of VIEWPORTS) it(`${viewport.name}：取消无写入，选中后原位入库并可播放`, { timeout: 120_000 }, async () => {
    const directory = join(requiredEnv('PEACH_E2E_IMPORT_ROOT'), viewport.name);
    await mkdir(directory, { recursive: true });
    const name = `direct-import-${viewport.name}.mp4`;
    await copyFile(requiredEnv('PEACH_E2E_IMPORT_SAMPLE'), join(directory, name));
    let selected = false;
    let added = false;
    const opened = await visit(browser, '/?thumb=0', viewport, async page => {
      await page.route('**/api/items{,?*}', async route => {
        // 空态只替换最初的列表，添加和后续读取、播放都走实际服务。
        if (!added) await route.fulfill({ json: { items: [], total: 0, has_more: false } });
        else await route.continue();
      });
      await page.route('**/api/pick-folder', route => route.fulfill({ json: { path: selected ? directory : null } }));
      page.on('response', response => {
        if (response.url().endsWith('/api/library-imports') && response.request().method() === 'POST' && response.ok()) added = true;
      });
    });
    const { page, problems } = opened;
    try {
      const panel = page.locator('[data-library-import]');
      const button = panel.getByRole('button', { name: '添加文件夹', exact: true });
      await button.waitFor();
      const artifacts = resolve('..', 'build', 'agent-verification', 'library-import');
      await mkdir(artifacts, { recursive: true });
      await page.screenshot({ path: join(artifacts, `${viewport.name}-empty.png`), fullPage: true });
      let posts = 0;
      page.on('request', request => { if (request.url().endsWith('/api/library-imports') && request.method() === 'POST') posts++ });
      const cancelled = page.waitForResponse(response => response.url().endsWith('/api/pick-folder'));
      await button.click();
      await cancelled;
      assert.equal(posts, 0);
      selected = true;
      await button.click();
      await page.waitForFunction(() => document.querySelector('[data-media-card] [data-card-title]')
        || document.querySelector('[data-media-card]'), undefined, { timeout: 60_000 });
      const cards = page.locator('[data-media-card]').filter({ hasText: `direct-import-${viewport.name}` });
      await cards.first().waitFor({ timeout: 60_000 });
      await page.waitForFunction(async () => {
        const state = await (await fetch('/api/library-imports')).json();
        return state.jobs.length && state.jobs.every((job: { state: string }) => job.state === 'succeeded');
      }, undefined, { timeout: 60_000 });
      assert.equal(await page.locator('[data-processing-dock]').count(), 0, '目录读取不派出另一轮全局任务浮窗');
      await page.screenshot({ path: join(artifacts, `${viewport.name}-content.png`), fullPage: true });
      assert.equal(posts, 1);
      assert.equal(new URL(page.url()).pathname, '/');
      assert.equal(await page.locator('dialog[open]').count(), 0);
      const api = (address: string) => new URL(address, page.url()).href;
      const payload = await (await page.request.get(api(`/api/items?thumb=0&q=${encodeURIComponent(name)}`))).json();
      const item = payload.items.find((row: { name: string }) => row.name === name);
      assert.ok(item, '实际目录中的媒体已登记');
      const session = `import-${viewport.name}`;
      const response = await page.request.get(api(`/api/stream-plan?id=${item.id}&session=${session}`));
      assert.equal(response.status(), 200, await response.text());
      const plan = await response.json();
      const stream = await page.request.get(api(plan.src));
      assert.equal(stream.status(), 200);
      await page.request.post(api(`/api/stream-cancel?session=${session}`), { headers: { Origin: new URL(page.url()).origin } });
      const measured = await layout(page);
      assert.ok(measured.scrollWidth <= viewport.width, JSON.stringify(measured));
      assert.deepEqual(problems, []);
    } finally { await opened.close() }
  });
});
