export function waitForMainSwap(timeoutMs = 260): Promise<void> {
  return new Promise((resolve) => {
    const main = document.querySelector("main");
    if (!main) {
      window.setTimeout(resolve, 48);
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      observer.disconnect();
      window.clearTimeout(timer);
      // View Transition pauses rendering until its update callback settles.
      // Waiting for a frame here would also block the timeout fallback.
      resolve();
    };

    const observer = new MutationObserver(() => {
      finish();
    });

    observer.observe(main, { childList: true, subtree: true });
    const timer = window.setTimeout(finish, timeoutMs);
  });
}
