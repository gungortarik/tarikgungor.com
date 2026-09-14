"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const DataField = dynamic(
  () =>
    import("@designcodeio/threeui/components/DataField").then((mod) => mod.DataField),
  { ssr: false }
);

const emptySubscribe = () => () => {};

function getMotionEnabled() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeDark(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

export function HeroScene() {
  const enabled = useSyncExternalStore(emptySubscribe, getMotionEnabled, () => false);
  const isDark = useSyncExternalStore(subscribeDark, getIsDark, () => false);

  if (!enabled) {
    return (
      <div
        className="absolute inset-y-0 right-0 w-[48%] max-w-[640px] bg-gradient-to-l from-accent-subtle/70 via-surface-muted/25 to-transparent"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-[42%] max-w-[680px] overflow-hidden opacity-35 dark:opacity-25"
      aria-hidden="true"
    >
      <div className="absolute inset-0 scale-[1.06] origin-right translate-x-[10%]">
        <DataField
          className="w-full h-full"
          mode={isDark ? "dark" : "light"}
          hue={210}
          saturation={isDark ? 0.28 : 0.4}
          brightness={isDark ? 0.85 : 1.02}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent" />
    </div>
  );
}
