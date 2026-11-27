/* 当前浏览器内所有 Peach 播放会话共用音量与静音偏好。 */
const KEY = 'peach.player.volume.v1';
const LEGACY_KEY = 'peach.player-volume.v1';

function legacyVolume(): number | null {
  const raw = localStorage.getItem(LEGACY_KEY);
  const volume = raw?.trim() ? Number(raw) : NaN;
  return Number.isFinite(volume) && volume >= 0 && volume <= 1 ? volume : null;
}
export function rememberVolume(video: HTMLVideoElement, signal: AbortSignal,
  media: Pick<HTMLMediaElement, 'volume' | 'muted'> = video): void {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved && typeof saved === 'object' && 'volume' in saved && 'muted' in saved
      && typeof saved.volume === 'number' && Number.isFinite(saved.volume)
      && saved.volume >= 0 && saved.volume <= 1 && typeof saved.muted === 'boolean') {
      video.volume = saved.volume;
      video.muted = saved.muted;
      // 控制条通过媒体适配器写入；同步它的属性，保证取消静音能到达原生视频。
      media.volume = saved.volume;
      media.muted = saved.muted;
    } else {
      const previous = legacyVolume();
      if (previous !== null) {
        video.volume = previous;
        media.volume = previous;
      }
    }
  } catch { /* 存储不可用时保留浏览器默认音量。 */ }
  video.addEventListener('volumechange', () => {
    try { localStorage.setItem(KEY, JSON.stringify({ volume: video.volume, muted: video.muted })) }
    catch { /* 存储限制不影响播放和音量调整。 */ }
  }, { signal });
}

/** 原生控件与自定义控件共用同一浏览器偏好。 */
export function mountVolumeMemory(video: HTMLVideoElement, signal: AbortSignal): void {
  rememberVolume(video, signal);
}
