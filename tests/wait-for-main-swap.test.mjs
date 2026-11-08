import assert from "node:assert/strict";
import test from "node:test";
import { waitForMainSwap } from "../lib/utils/wait-for-main-swap.ts";

function browser(t, hasMain = true) {
  const timers = new Map();
  let id = 0;
  let mutate;
  let disconnected = false;
  let frames = 0;
  const globals = {
    document: { querySelector: () => hasMain ? {} : null },
    window: {
      setTimeout(callback) { timers.set(++id, callback); return id; },
      clearTimeout(key) { timers.delete(key); },
    },
    MutationObserver: class {
      constructor(callback) { mutate = callback; }
      observe() {}
      disconnect() { disconnected = true; }
    },
    // View transitions can pause rendering: frame callbacks never run here.
    requestAnimationFrame() { frames++; },
  };
  for (const [key, value] of Object.entries(globals)) {
    const previous = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, value });
    t.after(() => previous
      ? Object.defineProperty(globalThis, key, previous)
      : delete globalThis[key]);
  }
  return {
    mutate: () => mutate(),
    expire: () => { for (const callback of [...timers.values()]) callback(); },
    get disconnected() { return disconnected; },
    get timerCount() { return timers.size; },
    get frames() { return frames; },
  };
}

test("DOM swap resolves while rendering is paused and releases observer/timer", async (t) => {
  const env = browser(t);
  let settled = false;
  waitForMainSwap().then(() => { settled = true; });
  env.mutate();
  await Promise.resolve();
  assert.equal(settled, true);
  assert.equal(env.disconnected, true);
  assert.equal(env.timerCount, 0);
  assert.equal(env.frames, 0);
});

test("slow navigation remains bounded without an animation frame", async (t) => {
  const env = browser(t);
  let settled = false;
  waitForMainSwap().then(() => { settled = true; });
  env.expire();
  await Promise.resolve();
  assert.equal(settled, true);
  assert.equal(env.disconnected, true);
  assert.equal(env.timerCount, 0);
  assert.equal(env.frames, 0);
});

test("missing main does not block navigation", async (t) => {
  const env = browser(t, false);
  let settled = false;
  waitForMainSwap().then(() => { settled = true; });
  env.expire();
  await Promise.resolve();
  assert.equal(settled, true);
  assert.equal(env.frames, 0);
});
