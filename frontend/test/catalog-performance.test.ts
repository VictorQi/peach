import { afterEach, expect, it, vi } from 'vitest';
import { installCatalogPerformance, resourceMeasurement } from '../src/catalog-performance';

afterEach(() => {
  document.getElementById('peach-performance')?.remove();
  history.replaceState(null, '', '/');
  vi.restoreAllMocks();
});

it('普通浏览不建立观察器或诊断输出', () => {
  history.replaceState(null, '', '/');
  const observe = vi.spyOn(MutationObserver.prototype, 'observe');
  expect(installCatalogPerformance()).toBeUndefined();
  expect(observe).not.toHaveBeenCalled();
  expect(document.getElementById('peach-performance')).toBeNull();
});

it('资源取证仅保留同源固定路径及数字，剔除作品和凭据参数', () => {
  const entry = { name: 'http://localhost/cover?code=private&token=secret',
    startTime: 100, duration: 250, requestStart: 110, responseStart: 220,
    transferSize: 300, decodedBodySize: 400 } as PerformanceResourceTiming;
  expect(resourceMeasurement(entry, 'http://localhost')).toEqual({ path: '/cover',
    startMs: 100, durationMs: 250, ttfbMs: 110, transferBytes: 300, decodedBytes: 400 });
  expect(resourceMeasurement({ ...entry, name: 'https://example.com/cover?token=secret' }, 'http://localhost')).toBeNull();
  expect(resourceMeasurement({ ...entry, name: 'http://localhost/private-title.mp4' }, 'http://localhost')).toBeNull();
  for (const path of ['/dist/peach-app.js', '/dist/peach-app.css']) {
    expect(resourceMeasurement({ ...entry, name: `http://localhost${path}?v=build` }, 'http://localhost')?.path).toBe(path);
  }
});
