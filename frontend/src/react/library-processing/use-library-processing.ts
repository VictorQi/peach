/* 卡片与任务面共用的那一份读取与状态迁移判断。
 *
 * 两处读同一个 `queryKey`，轮询由 Query 合成一份；这里额外盯住「这一趟是不是在本次
 * 眼前跑完的」。任务关掉页面照样在跑，状态里常年躺着上一趟的回执：首屏读到的终态没有
 * 上一个状态，所以它不会被当成刚刚跑完，也不发回执。 */
import { useEffect, useRef, useState } from 'react';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import type { LibraryProcessingProps } from '../bundle';
import {
  announceCompletion, fetchLibraryProcessing, LIBRARY_PROCESSING_KEY, pollInterval,
  processingActive, type LibraryProcessingData,
} from './library-processing';

export interface LibraryProcessingJob {
  job: UseQueryResult<LibraryProcessingData>;
  /** 本次亲眼看着跑完的那一趟。首屏读到的旧终态不会走到这里。 */
  settled: LibraryProcessingData | null;
  /** 又发起了一趟：上一趟的结论不再留在屏幕上。 */
  forget(): void;
}

export function useLibraryProcessingJob(
  { toast, mode, monitor }: LibraryProcessingProps,
): LibraryProcessingJob {
  const watching = mode === 'notice' || !!monitor;
  const job = useQuery({
    queryKey: LIBRARY_PROCESSING_KEY,
    queryFn: ({ signal }) => fetchLibraryProcessing(signal),
    refetchInterval: (query) => pollInterval(query.state.data, watching),
  });
  const [settled, setSettled] = useState<LibraryProcessingData | null>(null);
  const previous = useRef<LibraryProcessingData | undefined>(undefined);
  const state = job.data;
  useEffect(() => {
    if (!state) return;
    const was = previous.current;
    previous.current = state;
    const witnessed = !!was && !!state.job_id && was.job_id === state.job_id
      && ['running', 'pausing', 'paused', 'stopping'].includes(was.status) && !processingActive(state);
    if (witnessed) setSettled(state);
    if (witnessed) announceCompletion(state, toast, witnessed);
  }, [state, mode, toast]);

  return { job, settled, forget: () => setSettled(null) };
}
