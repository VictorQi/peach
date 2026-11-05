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
      ? Object.values(cause.errors).flat().filter(Boolean).join('；') : '';
    action.setError(details || (cause instanceof Error ? cause.message : '添加失败，请重试'));
  };
  const pick = () => void action.run('pick', async signal => {
    const selected = await pickFolder(path, signal);
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
        <h1 id="auth-card-title" className="text-title-1-semibold text-text-primary">添加你的第一份内容</h1>
        <p className="text-body-regular text-text-secondary">选择存放视频的文件夹，开始浏览。</p>
      </header>
      <div className="flex min-w-0 flex-col gap-4">
        <p className="text-body-2-regular text-text-secondary">文件保留在原处，先使用本地资料。此时只有这台电脑可以访问，其他设置可稍后修改。</p>
        {manual ? <form onSubmit={submit} className="flex min-w-0 flex-col gap-3">
          <Input label="文件夹路径" aria-label="文件夹路径" value={path} onChange={setPath} placeholder="输入完整路径" />
          <Button type="submit" disabled={!!action.busy || !path.trim()}>添加并开始</Button>
        </form> : <div className="flex flex-wrap gap-2">
          <Button leadingIcon={RiFolderAddLine} disabled={!!action.busy} onClick={pick}>添加文件夹</Button>
          <Button variant="ghost" disabled={!!action.busy} onClick={() => setManual(true)}>输入路径</Button>
        </div>}
        {action.busy ? <p role="status" className="text-body-2-regular text-text-secondary">
          {action.busy === 'pick' && !path ? '请选择文件夹' : '正在准备你的媒体库'}</p> : null}
        {action.error ? <Note tone="error">{action.error}</Note> : null}
      </div>
    </div></div>
    <footer data-setup-footer="" className="flex flex-wrap gap-2">
      <Button size="small" variant="ghost" disabled={!!action.busy}
        onClick={() => void action.run('skip', signal => save(null, signal), onDone, failed)}>暂不添加</Button>
      <Button size="small" variant="ghost" disabled={!!action.busy} onClick={onRestore}>使用已有数据</Button>
      <Button size="small" variant="ghost" disabled={!!action.busy} onClick={onAdvanced}>其他设置</Button>
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
        {done.skip_media ? '正在打开 Peach' : '正在开始读取内容'}</h1></header>
      {failed ? <Note tone="error" action={<Button size="small" onClick={() => { setFailed(false);setAttempt(value => value + 1) }}>重试连接</Button>}>
        Peach 暂时还未准备好，请确认它仍在运行。</Note>
        : <p role="status" className="text-body-regular text-text-secondary">准备好后会自动显示内容。</p>}
    </div></div>
  </section></SetupShell>;
}
