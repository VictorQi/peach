import { afterEach, describe, expect, it } from 'vitest';
import { mountVolumeMemory, rememberVolume } from '../src/player/volume-memory';

const KEY = 'peach.player.volume.v1';
const savedVolume = () => JSON.parse(localStorage.getItem(KEY) || 'null')?.volume;

function video(volume = 1) {
  const element = document.createElement('video');
  let current = volume;
  Object.defineProperty(element, 'volume', { configurable: true, get: () => current, set: (next: number) => { current = next } });
  const change = (next: number) => { current = next; element.dispatchEvent(new Event('volumechange')) };
  return { element, change };
}

describe('音量记忆', () => {
  afterEach(() => localStorage.clear());

  it('新播放器从上次调过的音量起播并恢复静音', () => {
    localStorage.setItem(KEY, JSON.stringify({ volume: 0.35, muted: true }));
    const { element } = video();
    const cleanup = new AbortController();
    rememberVolume(element, cleanup.signal);
    expect(element.volume).toBe(0.35);
    expect(element.muted).toBe(true);
    cleanup.abort();
  });

  it('用户调音量时记下，包括 0，播放器销毁后不再写', () => {
    const { element, change } = video();
    const cleanup = new AbortController();
    rememberVolume(element, cleanup.signal);
    expect(element.volume).toBe(1);
    change(0.4);
    expect(savedVolume()).toBe(0.4);
    change(0);
    expect(savedVolume()).toBe(0);
    const reopened = video();
    mountVolumeMemory(reopened.element, new AbortController().signal);
    expect(reopened.element.volume).toBe(0);
    cleanup.abort();
    change(0.9);
    expect(savedVolume()).toBe(0);
  });

  it('恢复事件到达前用户已经改过音量时按用户的值记', () => {
    localStorage.setItem(KEY, JSON.stringify({ volume: 0.5, muted: false }));
    const { element, change } = video();
    const cleanup = new AbortController();
    rememberVolume(element, cleanup.signal);
    change(0.2);
    expect(savedVolume()).toBe(0.2);
    cleanup.abort();
  });

  it.each(['abc', '-1', '2', ''])('存的值不合法（%s）时保持原音量', raw => {
    localStorage.setItem(KEY, raw);
    const { element } = video(0.7);
    const cleanup = new AbortController();
    rememberVolume(element, cleanup.signal);
    expect(element.volume).toBe(0.7);
    cleanup.abort();
  });
});
