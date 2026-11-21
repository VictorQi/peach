import { t } from '../../../i18n';
import { useEffect, useState, type FormEvent } from 'react';
import { RiFolderAddLine } from '@remixicon/react';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { Note } from '../../components/note';
import { useAction } from '../../settings/use-action';
import { SetupRequestError, pickFolder, submitSetup, type SetupDone, type SetupQuestions } from './setup-api';
import { SetupDoneView } from './setup-done';
import { SetupShell } from './setup-scene';

export function SetupQuickStart({ setup, onDone, onAdvanced, onRestore }: {
  setup: SetupQuestions; onDone(done: SetupDone): void; onAdvanced(): void; onRestore(): void;
}) {
  const [path, setPath] = useState('');
  const [manual, setManual] = useState(!setup.windows && !setup.standalone);
  const action = useAction();
  const save = (value: string | null, signal: AbortSignal) => submitSetup({
    media_dir: value ? [{ path: value, location: 'local', root: '', cost: 'free', library_policy: 'local' }] : [],
    skip_media: value === null, access_enabled: false, scan_now: value !== null, host: '1', history_guide: false,
    ...Object.fromEntries(setup.questions.filter(question => question.key === 'data_root' || question.key === 'port')
      .map(question => [question.key, question.default])),
  }, signal);
  const failed = (cause: unknown) => {
    if (cause instanceof SetupRequestError && cause.status === 501) setManual(true);
    const details = cause instanceof SetupRequestError && cause.errors
      ? Object.values(cause.errors).flat().filter(Boolean).join(' / ') : '';
    action.setError(details || (cause instanceof Error ? cause.message : t('shell:setupQuick.failed')));
  };
  const pick = () => void action.run('pick', async signal => {
    const selected = await pickFolder(path, 'media', signal);
    if (!selected) return null;
    setPath(selected);
    return save(selected, signal);
  }, done => { if (done) onDone(done) }, failed);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    void action.run('path', signal => save(path.trim(), signal), onDone, failed);
  };
  return <SetupShell step={1}><section data-setup-form-panel="" aria-labelledby="auth-card-title">
    <div data-setup-top=""><span className="text-body-2-regular text-text-secondary">Peach</span></div>
    <div data-setup-step-scroll=""><div data-setup-step-content="">
      <header data-setup-step-heading="">
        <h1 id="auth-card-title" className="text-title-1-semibold text-text-primary">{t('shell:setupQuick.title')}</h1>
        <p className="text-body-regular text-text-secondary">{t('shell:setupQuick.intro')}</p>
      </header>
      <div className="flex min-w-0 flex-col gap-4">
        <p className="text-body-2-regular text-text-secondary">{t('shell:setupQuick.details')}</p>
        {manual ? <form onSubmit={submit} className="flex min-w-0 flex-col gap-3">
          <Input label={t('shell:setupQuick.folderPath')} aria-label={t('shell:setupQuick.folderPath')} value={path} onChange={setPath} placeholder={t('shell:setupQuick.fullPath')} />
          <Button type="submit" disabled={!!action.busy || !path.trim()}>{t('shell:setupQuick.addAndStart')}</Button>
        </form> : <div className="flex flex-wrap gap-2">
          <Button leadingIcon={RiFolderAddLine} disabled={!!action.busy} onClick={pick}>{t('shell:setupQuick.addFolder')}</Button>
          <Button variant="ghost" disabled={!!action.busy} onClick={() => setManual(true)}>{t('shell:setupQuick.enterPath')}</Button>
        </div>}
        {action.busy ? <p role="status" className="text-body-2-regular text-text-secondary">
          {action.busy === 'pick' && !path ? t('shell:setupQuick.selectFolder') : t('shell:setupQuick.prepareLibrary')}</p> : null}
        {action.error ? <Note tone="error">{action.error}</Note> : null}
      </div>
    </div></div>
    <footer data-setup-footer="" className="flex flex-wrap gap-2">
      <Button size="small" variant="ghost" disabled={!!action.busy}
        onClick={() => void action.run('skip', signal => save(null, signal), onDone, failed)}>{t('shell:setupQuick.skip')}</Button>
      <Button size="small" variant="ghost" disabled={!!action.busy} onClick={onRestore}>{t('shell:setupQuick.restore')}</Button>
      <Button size="small" variant="ghost" disabled={!!action.busy} onClick={onAdvanced}>{t('shell:setupQuick.advanced')}</Button>
    </footer>
  </section></SetupShell>;
}

/** 首次建立数据后仅等待服务接续；准备好就进入同一窗口的馆藏。 */
export function SetupQuickOpening({ done }: { done: SetupDone }) {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!done.redirect) return;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    let tries = 0;
    const poll = async () => {
      try {
        const response = await fetch('/healthz?ready=1', { signal: controller.signal, cache: 'no-store' });
        if (response.ok && (await response.json()).ready === true && !controller.signal.aborted) {
          location.replace(done.redirect!);
          return;
        }
      } catch { /* 首启服务切换期间继续等待。 */ }
      if (controller.signal.aborted) return;
      if (++tries < 30) timer = setTimeout(() => void poll(), 1000);
      else setFailed(true);
    };
    void poll();
    return () => { controller.abort();clearTimeout(timer) };
  }, [done.redirect, attempt]);
  if (!done.redirect) return <SetupDoneView done={done} />;
  return <SetupShell step={1}><section data-setup-form-panel="" aria-labelledby="auth-card-title">
    <div data-setup-top=""><span className="text-body-2-regular text-text-secondary">Peach</span></div>
    <div data-setup-step-scroll=""><div data-setup-step-content="">
      <header data-setup-step-heading=""><h1 id="auth-card-title" className="text-title-1-semibold text-text-primary">
        {done.skip_media ? t('shell:setupQuick.opening') : t('shell:setupQuick.openingScan')}</h1></header>
      {failed ? <Note tone="error" action={<Button size="small" onClick={() => { setFailed(false);setAttempt(value => value + 1) }}>{t('shell:setupQuick.retryConnection')}</Button>}>
        {t('shell:setupQuick.unavailable')}</Note>
        : <p role="status" className="text-body-regular text-text-secondary">{t('shell:setupQuick.whenReady')}</p>}
    </div></div>
  </section></SetupShell>;
}
