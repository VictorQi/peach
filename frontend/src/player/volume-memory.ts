/* 当前浏览器内所有 Peach 播放会话共用音量与静音偏好。 */
export function rememberVolume(video: HTMLVideoElement, signal: AbortSignal,
  media: Pick<HTMLMediaElement, 'volume' | 'muted'> = video): void {
  const key = 'peach.player.volume.v1';
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(key) || 'null');
    if (saved && typeof saved === 'object' && 'volume' in saved && 'muted' in saved
      && typeof saved.volume === 'number' && Number.isFinite(saved.volume)
      && saved.volume >= 0 && saved.volume <= 1 && typeof saved.muted === 'boolean') {
      video.volume = saved.volume;
      video.muted = saved.muted;
      // 控制条通过媒体适配器写入；同步它的属性，保证取消静音能到达原生视频。
      media.volume = saved.volume;
      media.muted = saved.muted;
    }
  } catch { /* 存储不可用时保留浏览器默认音量。 */ }
  video.addEventListener('volumechange', () => {
    try { localStorage.setItem(key, JSON.stringify({ volume: video.volume, muted: video.muted })) }
    catch { /* 存储限制不影响播放和音量调整。 */ }
  }, { signal });
}
