import { t } from '../../i18n';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { RiFolderAddLine } from '@remixicon/react';
import { Button, ButtonLink } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { ApiError, apiGet, apiSend, errorMessage } from '../../api';
import { PICK_FOLDER_URL } from '../../configuration-endpoints';
import { Note } from '../components/note';
import { TaskCenterLink } from '../settings/section';
import { useAction } from '../settings/use-action';

interface ImportRoot { id: string; library_id: string; name: string; path: string; online?: boolean | null }
interface ImportJob { id: number; root_id: string; state: string; label: string; error: string; current?: number; total?: number }
export interface LibraryImports { editable: boolean; native_picker: boolean; roots: ImportRoot[]; jobs: ImportJob[] }
const active = (job: ImportJob) => ['pending', 'running', 'pausing', 'paused', 'cancelling'].includes(job.state);
const moving = (job: ImportJob) => ['pending', 'running', 'pausing', 'cancelling'].includes(job.state);
const URL = '/api/library-imports';

/** 空馆藏的直接操作；首批内容出现后保持本轮进度，完成即让出内容区域。 */
export function LibraryImportPanel({ empty, onContent }: { empty: boolean; onContent(): void }) {
  const [data, setData] = useState<LibraryImports | null>(null);
  const [failure, setFailure] = useState('');
  const [round, setRound] = useState(0);
  const [manual, setManual] = useState(false);
  const [path, setPath] = useState('');
  const action = useAction();
  const changed = useRef(onContent);
  changed.current = onContent;
  const started = useRef(false);
  const didMove = useRef(false);
  useEffect(() => {
    if (!empty && !started.current) return;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    const load = async () => {
      if (document.visibilityState === 'hidden') return;
      try {
        const next = await apiGet<LibraryImports>(URL, controller.signal);
        if (controller.signal.aborted) return;
        setData(next);setFailure('');
        const running = next.jobs.some(moving);
        const watching = next.jobs.some(active);
        if (watching) started.current = true;
        if (running || didMove.current) changed.current();
        didMove.current = running;
        if (watching) timer = setTimeout(() => void load(), running ? 2000 : 10000);
      } catch (cause) {
        if (!controller.signal.aborted) setFailure(errorMessage(cause));
      }
    };
    const visible = () => { clearTimeout(timer);if (document.visibilityState !== 'hidden') void load() };
    document.addEventListener('visibilitychange', visible);
    void load();
    return () => { controller.abort();clearTimeout(timer);document.removeEventListener('visibilitychange', visible) };
  }, [empty, round]);
  const accepted = (next: LibraryImports | null) => {
    if (!next) return;
    started.current = true;didMove.current = true;
    setData(next);setFailure('');setRound(value => value + 1);
    changed.current();
  };
  const send = (body: Record<string, string>, signal: AbortSignal) => apiSend<LibraryImports>(URL, body, 'POST', signal);
  const addPath = (value: string, signal: AbortSignal) => {
    const library = sessionStorage.getItem('peach.library');
    return send({ path: value, ...(library ? { library_id: library } : {}) }, signal);
  };
  const pick = () => void action.run('pick', async signal => {
    const chosen = await apiSend<{ path: string | null }>(PICK_FOLDER_URL, { initial: path }, 'POST', signal);
    if (!chosen.path) return null;
    setPath(chosen.path);
    return addPath(chosen.path, signal);
  }, accepted, cause => {
    if (cause instanceof ApiError && cause.status === 501) setManual(true);
    action.setError(errorMessage(cause));
  });
  const submit = (event: FormEvent) => {
    event.preventDefault();
    void action.run('path', signal => addPath(path.trim(), signal), accepted);
  };
  const read = (root: ImportRoot) => void action.run(root.id, signal => send({ root_id: root.id }, signal), accepted);
  if (!empty && !data?.jobs.some(active) && !action.busy) return null;
  const library = sessionStorage.getItem('peach.library');
  const roots = data?.roots.filter(root => !library || root.library_id === library) || [];
  return <section data-library-import="" aria-label={t('catalog:libraryImport.addFolder')} className="flex min-w-0 flex-col gap-4 py-6">
    {empty ? <div className="flex flex-col gap-1">
      <h2 className="text-title-2-medium text-text-primary">{roots.length ? t('catalog:libraryImport.readExisting') : t('catalog:libraryImport.firstContent')}</h2>
      <p className="text-body-2-regular text-text-secondary">{t('catalog:libraryImport.scanDetails')}</p>
    </div> : null}
    {data?.jobs.filter(active).map(job => <Note key={job.id} tone="neutral" action={<TaskCenterLink />}>
      {job.state === 'paused' ? t('catalog:libraryImport.paused') : job.label || t('catalog:libraryImport.scanning')}
    </Note>)}
    {empty && data?.jobs.filter(job => job.state === 'failed' || job.state === 'interrupted').map(job =>
      <Note key={job.id} tone="error">{job.error || t('catalog:libraryImport.failed')}</Note>)}
    {empty && data?.jobs[0]?.state === 'succeeded' ? <p className="text-body-2-regular text-text-secondary">
      {t('catalog:libraryImport.empty')}</p> : null}
    {failure || action.error ? <Note tone="error" action={failure ? <Button size="small" variant="secondary"
      onClick={() => setRound(value => value + 1)}>{t('catalog:libraryImport.retry')}</Button> : undefined}>{action.error || failure}</Note> : null}
    {empty && !data ? <p role="status" className="text-body-2-regular text-text-secondary">{t('catalog:libraryImport.loading')}</p> : null}
    {empty && data?.editable ? <>
      {roots.map(root => <div key={root.id} className="flex min-w-0 flex-wrap items-center justify-between gap-2">
        <div className="min-w-0 flex-1 text-body-2-regular text-text-secondary"><p className="wrap-anywhere">{root.path}</p>
          {root.online === false ? <p>{t('catalog:libraryImport.offline')}</p> : null}</div>
        <Button size="small" variant="secondary" disabled={!!action.busy || data.jobs.some(job => job.root_id === root.id && active(job))}
          onClick={() => read(root)}>{t('catalog:libraryImport.scan')}</Button>
      </div>)}
      {!data.native_picker || manual ? <form onSubmit={submit} className="flex min-w-0 flex-wrap items-end gap-2">
        <Input aria-label={t('catalog:libraryImport.folderPath')} label={data.native_picker ? t('catalog:libraryImport.folderPath') : t('catalog:libraryImport.serverPath')}
          value={path} onChange={setPath} placeholder={data.native_picker ? t('catalog:libraryImport.fullPath') : t('catalog:libraryImport.fullServerPath')}
          className="min-w-0 flex-1" />
        <Button type="submit" size="small" disabled={!!action.busy || !path.trim()}>{t('catalog:libraryImport.addAndScan')}</Button>
      </form> : <div className="flex flex-wrap gap-2">
        <Button size="small" leadingIcon={RiFolderAddLine} disabled={!!action.busy} onClick={pick}>{t('catalog:libraryImport.addFolder')}</Button>
        <Button size="small" variant="ghost" disabled={!!action.busy} onClick={() => setManual(true)}>{t('catalog:libraryImport.enterPath')}</Button>
      </div>}
      <ButtonLink size="small" variant="ghost" href="/subscriptions?tab=add" className="self-start">{t('catalog:libraryImport.followSources')}</ButtonLink>
    </> : null}
    {empty && data && !data.editable ? <p className="text-body-2-regular text-text-secondary">
      {t('catalog:libraryImport.remote')}{' '}<a href="/subscriptions?tab=add" className="underline">{t('catalog:libraryImport.followSources')}</a></p> : null}
  </section>;
}
