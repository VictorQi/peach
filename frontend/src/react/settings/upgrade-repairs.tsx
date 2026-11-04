/** 升级补修与程序安装分别显示；复核和重试都由用户明确发起。 */
import { useEffect, useState } from 'react';
import { Button } from '@/components/base/buttons/button';
import { apiSend } from '../../api';
import { useClientUpdates } from '../client-updates';
import type { ClientUpdates } from '../client-updates';
import { AnimatedNumber } from '../components/animated-number';
import { StatusLabel } from '../components/status-label';
import { ErrorText, ExternalLink, Fact, FactList, Footer, Help, Section, Stack, TaskCenterLink } from './section';
import { useAction } from './use-action';

const LABELS: Record<string, string> = { idle: '尚未开始', paused: '已停止派发', pending: '等待更新', running: '正在更新', failed: '需要重试',
  review: '需要复核', complete: '已完成', unavailable: '当前部署未启用' };

export function UpgradeRepairs() {
  const { snapshot } = useClientUpdates();
  const [saved, setSaved] = useState<ClientUpdates['repairs'] | null>(null);
  const action = useAction();
  useEffect(() => setSaved(null), [snapshot]);
  const data = saved ?? snapshot?.repairs;
  const state = data?.state || 'pending';
  const pending = data?.items.reduce((count, row) => count + (row.pending || 0), 0) || 0;
  const failed = data?.items.reduce((count, row) => count + (row.failed || 0), 0) || 0;
  const review = data?.items.reduce((count, row) => count + (row.review_count || 0), 0) || 0;
  const operate = (command: 'start' | 'pause' | 'retry') => void action.run(command, signal => apiSend<ClientUpdates['repairs']>(
    command === 'retry' ? '/api/configuration/upgrade-repairs/retry' : '/api/configuration/upgrade-repairs',
    command === 'retry' ? {} : { action: command }, 'POST', signal), next => {
    setSaved(next);
    document.dispatchEvent(new Event('peach:client-updates'));
  });
  return <Section id="upgradeRepairs" title="资料更新" aside={<StatusLabel
    tone={state === 'failed' ? 'error' : state === 'running' ? 'progress' : state === 'review' ? 'warning'
      : state === 'complete' ? 'success' : 'neutral'}><span key={state}
        data-copy-key={`upgradeRepairs.${state}.status`}>{LABELS[state] || '未取得'}</span></StatusLabel>}>
    <Stack><Help>按当前来源设置补全已有资料和预览，可能联网。每轮只处理开始时已有的内容，稍后可停止。</Help></Stack>
    <FactList>
      <Fact term="待完成"><span><AnimatedNumber value={pending} /> 项</span></Fact>
      <Fact term="失败"><span><AnimatedNumber value={failed} /> 项</span></Fact>
      <Fact term="待复核"><span><AnimatedNumber value={review} /> 项</span></Fact>
    </FactList>
    {data?.message || action.error ? <Stack><ErrorText>{action.error || data?.message}</ErrorText></Stack> : null}
    {pending || data?.enabled ? <Stack><Help>{data?.enabled ? '资料与预览正在后台补全。' : '尚未完成的工作已保留，停止进度可在任务中心查看。'}</Help><TaskCenterLink /></Stack> : null}
    <Footer status={review ? <ExternalLink href="/api/configuration/upgrade-repairs/review">下载复核记录</ExternalLink> : undefined}>
      <Button size="small" variant="secondary" disabled={!data?.available || !!action.busy}
        onClick={() => operate(data?.enabled ? 'pause' : 'start')}>{data?.enabled ? '停止派发' : pending ? '继续更新' : '开始更新'}</Button>
      <Button size="small" variant="secondary" disabled={!data?.available || data?.enabled || !!action.busy || !failed}
        onClick={() => operate('retry')}>重试失败项</Button>
    </Footer>
  </Section>;
}
