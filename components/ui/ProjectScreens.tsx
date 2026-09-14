"use client";

import Image from "next/image";
import { useId, useState } from "react";

interface ProjectScreensProps {
  name: string;
  depth?: boolean;
  screens: { label: string; src: string; alt: string }[];
}

export function ProjectScreens({ name, screens, depth = false }: ProjectScreensProps) {
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <figure className="min-w-0">
      <div role="group" aria-label={`${name} screenshots`} className={`flex gap-1 mb-4 border-b ${depth ? "border-on-depth-border" : "border-surface-border"}`}>
        {screens.map((screen, index) => (
          <button key={screen.src} type="button" aria-pressed={active === index} aria-controls={id} onClick={() => setActive(index)} className={`min-h-11 px-4 border-b-2 text-[12px] font-mono cursor-pointer transition-colors ${active === index ? (depth ? "border-on-depth text-on-depth" : "border-accent text-accent") : (depth ? "border-transparent text-on-depth-muted hover:text-on-depth" : "border-transparent text-foreground-muted hover:text-foreground")}`}>
            {screen.label}
          </button>
        ))}
      </div>
      <div id={id} className={`relative aspect-[1.79] overflow-hidden border rounded-sm ${depth ? "border-on-depth-border bg-depth-elevated" : "border-surface-border bg-surface-muted"}`}>
        {screens.map((screen, index) => (
          <Image key={screen.src} src={screen.src} alt={screen.alt} fill sizes="(max-width: 1023px) 92vw, 65vw" className={`object-contain ${active === index ? "visible" : "invisible"}`} />
        ))}
      </div>
      <figcaption className={`mt-3 font-mono text-[11px] ${depth ? "text-on-depth-muted" : "text-foreground-muted"}`} aria-live="polite">{name} / {screens[active].label}</figcaption>
    </figure>
  );
}
