/** 设置页按需读取本机更新与补修快照。 */
import { useEffect, useRef, useState } from 'react';

import { apiGet } from '../api';
import type { ReleaseState, UpdateJob } from './bundle';

export interface ClientUpdates {
  runtime: { version: string; build_id: string };
  release: ReleaseState;
  update_job: UpdateJob;
  userscript: { version: string; minimum_version: string; install_url: string };
  repairs: { state: string; available?: boolean; enabled?: boolean; started?: boolean; message?: string; items: {
    id: string; label: string; state: string; changed?: Record<string, number>;
    pending?: number; failed?: number; queued?: number; review_count?: number;
  }[] };
}

export const CLIENT_UPDATES_INTERVAL = 120_000;
const REQUEST_TIMEOUT = 15_000;
const visible = () => document.visibilityState !== 'hidden';

function pageRuntime(): ClientUpdates['runtime'] | null {
  try {
    const value = JSON.parse(document.getElementById('peach-client-runtime')?.textContent || 'null');
    return typeof value?.version === 'string' && typeof value?.build_id === 'string'
      ? { version: value.version, build_id: value.build_id } : null;
  } catch { return null; }
}

/** 文档携带加载时的运行标记，后台标签和首次断连也保留同一份基线。 */
export function useClientUpdates() {
  const baseline = useRef<ClientUpdates['runtime'] | null>(pageRuntime());
  const [snapshot, setSnapshot] = useState<ClientUpdates | null>(null);
  useEffect(() => {
    let disposed = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let request: AbortController | undefined;
    const poll = async () => {
      if (disposed || !visible()) return;
      const controller = new AbortController();
      request = controller;
      const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
      controller.signal.addEventListener('abort', () => clearTimeout(timeout), { once: true });
      try {
        const next = await apiGet<ClientUpdates>('/api/client-updates', controller.signal);
        if (!disposed && !controller.signal.aborted && typeof next?.runtime?.version === 'string'
          && typeof next.runtime.build_id === 'string') {
          baseline.current ??= { ...next.runtime };
          setSnapshot(next);
        }
      } catch {
        // 服务重启、断连和未取得快照都保留当前提示。
      } finally {
        clearTimeout(timeout);
        if (request === controller) {
          request = undefined;
          if (!disposed && visible()) timer = setTimeout(poll, CLIENT_UPDATES_INTERVAL);
        }
      }
    };
    const visibility = () => {
      clearTimeout(timer);
      request?.abort();
      request = undefined;
      if (visible()) void poll();
    };
    document.addEventListener('visibilitychange', visibility);
    document.addEventListener('peach:client-updates', visibility);
    void poll();
    return () => {
      disposed = true;
      clearTimeout(timer);
      request?.abort();
      document.removeEventListener('visibilitychange', visibility);
      document.removeEventListener('peach:client-updates', visibility);
    };
  }, []);
  const refresh = !!snapshot && !!baseline.current && (snapshot.runtime.version !== baseline.current.version
    || snapshot.runtime.build_id !== baseline.current.build_id);
  return { snapshot, refresh };
}
