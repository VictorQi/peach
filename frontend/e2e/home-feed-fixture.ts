import type { Page } from 'playwright-core';

/** 只供显式模拟非空首页新作的用例使用：首帧已知形状与 discoveries 夹具保持一致。 */
export async function prepareKnownHomeFeed(page: Page): Promise<void> {
  await page.addInitScript(() => localStorage.setItem('peach.home-feed.v1', '1'));
  await page.route('**/api/entity/shapes', async route => {
    const response = await route.fetch();
    const data = await response.json();
    await route.fulfill({ response, json: { ...data, home: { ...data.home, feed: true } } });
  });
}
