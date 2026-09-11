"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const EmeraldHorizonBackground = dynamic(
  () =>
    import("@designcodeio/threeui/components/EmeraldHorizonBackground").then(
      (mod) => mod.EmeraldHorizonBackground
    ),
  { ssr: false }
);

const emptySubscribe = () => () => {};

function getMotionEnabled() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroScene() {
  const enabled = useSyncExternalStore(emptySubscribe, getMotionEnabled, () => false);

  if (!enabled) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent-subtle via-surface to-surface-muted"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <EmeraldHorizonBackground
        className="w-full h-full"
        speed={0.6}
        waveScale={1.1}
        variation={0.8}
        glow={0.9}
        vignette={1.2}
        hue={0}
      />
      <div className="absolute inset-0 bg-surface/40 dark:bg-depth/50" />
    </div>
  );
}
