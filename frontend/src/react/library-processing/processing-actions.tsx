import { useRef, useState, type ReactNode } from 'react';
import { RiArrowDownSLine } from '@remixicon/react';
import { Dialog, Popover } from 'react-aria-components';
import { Button } from '@/components/base/buttons/button';
import { MENU_ITEM, MENU_ITEM_INTERACTIVE, MENU_POPOVER_SURFACE } from '@/components/base/dropdown/menu-styles';
import { cx } from '@/utils/cx';
import { useMovingSurface } from '../components/use-moving-surface';
import { busyProps } from '../settings/use-action';
import { type LibraryProcessingCommand, type ProcessingSpeed } from './library-processing';

interface ProcessingOption {
  label: string; description: string; command: LibraryProcessingCommand; disabled?: boolean;
}

function ProcessingMenuGroup({ label, maintenance = false, children }: {
  label: string; maintenance?: boolean; children: ReactNode;
}) {
  const ref = useMovingSurface('hover');
  return <div ref={ref} role="group" aria-label={label} data-processing-maintenance={maintenance || undefined}
    className={cx('flex flex-col gap-1', maintenance && 'mt-2 rounded-lg bg-background-secondary-default p-1 pt-3')}>
    {children}
  </div>;
}

function ProcessingMenuOption({ option, metadataOnly, onRun }: {
  option: ProcessingOption; metadataOnly: boolean; onRun(command: LibraryProcessingCommand): void;
}) {
  const blocked = metadataOnly && option.command.stage === 'previews';
  const disabled = blocked || option.disabled;
  return <button type="button" disabled={disabled}
    title={blocked ? '请先在媒体库设置中开启视频预览生成' : undefined}
    className={cx(MENU_ITEM, disabled ? 'cursor-not-allowed opacity-50' : MENU_ITEM_INTERACTIVE, 'text-body-2-medium')}
    onClick={() => onRun(option.command)}><span className="flex min-w-0 flex-col gap-1">
      <span>{option.label}</span><span className="text-caption-1-regular text-text-secondary">{option.description}</span>
    </span></button>;
}

/** 扫描和已有作品补全共用资料流水线，视频预览由媒体库设置决定。
 *
 * `busy` 是这次启动还在路上，按钮标 `aria-busy`，点击由共享的忙碌拦截吞掉。`occupied` 是已有
 * 任务在跑：按钮只标 `aria-disabled`，点击仍会到达，由 `onOccupied` 告诉人为什么没有开始。 */
export function ProcessingActions({ busy, occupied = false, scan = false, metadataOnly = false, pendingCount = 0, onRun, onOccupied }: {
  busy: boolean; occupied?: boolean; scan?: boolean; metadataOnly?: boolean; speedMode?: ProcessingSpeed; pendingCount?: number;
  onRun(command: LibraryProcessingCommand): void | Promise<unknown>;
  onOccupied?(): void;
}) {
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const primary: ProcessingOption = { label: scan ? '同步新增文件' : '同步这些影片', description: '',
    command: scan ? {incremental:true} : { stage: 'collect' as const } };
  const dailyOptions: ProcessingOption[] = [
    {label:'仅发现新增文件', description:'扫描并登记新文件，保留已有影片资料', command:{stage:'scan',incremental:true}},
    {label:'补全待处理影片', description:pendingCount ? `${pendingCount.toLocaleString()} 部已登记影片等待补全` : '暂无待补全影片',
      command:{stage:'collect',scope:'new'}, disabled:!pendingCount},
  ];
  const options: ProcessingOption[] = [
    ...(scan ? [{label:'同步整个媒体库',description:'检查全部文件，补全缺失资料和预览',command:{}}] : []),
    ...(scan ? [{ label: '仅扫描文件', description: '发现文件，读取视频时长和分辨率', command: { stage: 'scan' as const } }] : []),
    ...(scan ? [{ label: '补全资料与预览', description: metadataOnly ? '补已有影片的资料和视频属性' : '补资料和视频属性，生成本地预览图', command: { stage: 'collect' as const } }] : []),
    { label: '仅补全影片资料', description: '补影片资料、封面和人物资料', command: { stage: 'metadata' as const } },
    { label: '仅补全预览图', description: '为已入库的本地视频生成九宫格', command: { stage: 'previews' as const } },
  ];
  const blockedProps = busy ? busyProps(true) : occupied ? { 'aria-disabled': true } as const : {};
  const run = (command: LibraryProcessingCommand) => {
    if (busy) return;
    if (occupied) { onOccupied?.(); return }
    setOpen(false);
    void Promise.resolve(onRun(command)).catch(() => { /* 错误由任务入口留在原位。 */ });
  };
  return <>
    <span data-button-group data-split-button data-variant="primary">
      <Button {...blockedProps} onClick={() => run(primary.command)}>{primary.label}</Button>
      <Button ref={trigger} iconOnly leadingIcon={RiArrowDownSLine} aria-label="更多同步方式"
        aria-haspopup="dialog" aria-expanded={open} {...blockedProps} onClick={() => {
          if (busy) return;
          if (occupied) onOccupied?.(); else setOpen(!open);
        }} />
    </span>
    <Popover triggerRef={trigger} isOpen={open} onOpenChange={setOpen} placement="bottom end" offset={4}
      className={MENU_POPOVER_SURFACE}>
      <Dialog aria-label="同步方式" className="flex w-80 flex-col gap-1 outline-none">
        {scan ? <ProcessingMenuGroup label="日常同步">
          <p className="px-2 py-1 text-caption-1-medium text-text-secondary">日常同步</p>
          {dailyOptions.map(option => <ProcessingMenuOption key={option.label} option={option} metadataOnly={metadataOnly} onRun={run} />)}
        </ProcessingMenuGroup> : null}
        <ProcessingMenuGroup label={scan ? '全库维护' : '补全方式'} maintenance={scan}>
          {scan ? <div className="flex flex-col gap-1 px-2 pb-2">
            <p className="text-body-medium text-text-primary">全库维护</p>
            <p className="text-caption-1-regular text-text-secondary">检查全部文件，复用已有资料和预览</p>
          </div> : null}
          {options.map(option => <ProcessingMenuOption key={option.label} option={option} metadataOnly={metadataOnly} onRun={run} />)}
        </ProcessingMenuGroup>
      </Dialog>
    </Popover>
  </>;
}
