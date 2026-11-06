/** 显式 ?measure=1 的本机取证：只在页面 DOM 中保留数字，不联网或持久保存。 */
const PATHS = new Set(['/api/items', '/api/entity/shapes', '/api/settings', '/api/sources',
  '/api/facets', '/api/tops', '/api/index', '/api/tasks', '/api/result-updates',
  '/cover', '/poster', '/thumb', '/entity-image', '/avatar', '/peach-app.js', '/peach-app.css']);
const rounded = (value: number) => Math.round(value * 100) / 100;

export function resourceMeasurement(entry: PerformanceResourceTiming, origin: string) {
  const url = new URL(entry.name, origin);
  if (url.origin !== origin || !PATHS.has(url.pathname)) return null;
  return { path: url.pathname, startMs: rounded(entry.startTime), durationMs: rounded(entry.duration),
    ttfbMs: rounded(Math.max(0, entry.responseStart - entry.requestStart)),
    transferBytes: entry.transferSize, decodedBytes: entry.decodedBodySize };
}

export function installCatalogPerformance() {
  if (new URLSearchParams(location.search).get('measure') !== '1') return;
  const output = document.createElement('output');
  output.id = 'peach-performance';
  output.hidden = true;
  document.body.append(output);
  const report = {
    schema: 1, clock: 'navigation-start', startedAtMs: rounded(performance.now()),
    firstCardReadyMs: null as number | null, firstCoverDecodedMs: null as number | null,
    visibleCards: 0, imageErrors: 0, longTasks: 0, longTaskMs: 0,
    observedTypes: [] as string[],
    resources: [] as NonNullable<ReturnType<typeof resourceMeasurement>>[],
    paints: [] as { name: string; startMs: number }[],
    finished: false,
  };
  let stopped = false, frame = 0;
  const observers: PerformanceObserver[] = [];
  const decoding = new WeakMap<HTMLImageElement, string>();
  const publish = () => { output.textContent = JSON.stringify(report); };
  function inspect() {
    frame = 0;
    if (stopped || report.firstCoverDecodedMs !== null) return;
    const cards = Array.from(document.querySelectorAll<HTMLElement>('#grid [data-media-card]'))
      .filter(card => { const rect = card.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < innerHeight
          && rect.right > 0 && rect.left < innerWidth && getComputedStyle(card).visibility !== 'hidden'; });
    report.visibleCards = cards.length;
    const card = cards.find(item => item.querySelector('[data-media-title]')?.textContent?.trim()
      && item.querySelector<HTMLButtonElement>('[data-media-open]')?.disabled === false);
    if (!card) return;
    report.firstCardReadyMs ??= rounded(performance.now());
    for (const picture of card.querySelectorAll<HTMLImageElement>('[data-media-pic] img')) {
      const source = picture.currentSrc;
      if (!source || decoding.get(picture) === source) continue;
      decoding.set(picture, source);
      void picture.decode().then(() => {
        if (!stopped && picture.isConnected && picture.currentSrc === source && picture.naturalWidth > 0) {
          report.firstCoverDecodedMs ??= rounded(performance.now());
          publish();
        }
      }, () => { if (!stopped) { report.imageErrors++; publish(); } });
    }
    publish();
  }
  const schedule = () => { if (!stopped && !frame) frame = requestAnimationFrame(inspect); };
  const mutations = new MutationObserver(records => {
    if (records.some(record => !output.contains(record.target))) schedule();
  });
  mutations.observe(document.body, { subtree: true, childList: true, attributes: true,
    attributeFilter: ['src', 'srcset', 'class', 'hidden'] });
  document.addEventListener('load', schedule, true);
  for (const type of ['resource', 'paint', 'longtask']) {
    if (!PerformanceObserver.supportedEntryTypes.includes(type)) continue;
    report.observedTypes.push(type);
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource' && report.resources.length < 250) {
          const measured = resourceMeasurement(entry as PerformanceResourceTiming, location.origin);
          if (measured) report.resources.push(measured);
        } else if (entry.entryType === 'paint') {
          report.paints.push({ name: entry.name, startMs: rounded(entry.startTime) });
        } else if (entry.entryType === 'longtask') {
          report.longTasks++;
          report.longTaskMs = rounded(report.longTaskMs + entry.duration);
        }
      }
      publish();
    });
    observer.observe({ type, buffered: true });
    observers.push(observer);
  }
  const finish = () => {
    stopped = true;
    clearTimeout(timer);
    cancelAnimationFrame(frame);
    mutations.disconnect();
    observers.forEach(observer => observer.disconnect());
    document.removeEventListener('load', schedule, true);
    window.removeEventListener('pagehide', finish);
    report.finished = true;
    publish();
  };
  const timer = window.setTimeout(finish, 60_000);
  window.addEventListener('pagehide', finish, { once: true });
  publish();
  schedule();
  return finish;
}
