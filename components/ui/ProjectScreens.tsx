"use client";

import Image from "next/image";
import { useId, useState } from "react";

interface Screen {
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProjectScreensProps {
  name: string;
  depth?: boolean;
  screens: Screen[];
}

export function ProjectScreens({ name, screens, depth = false }: ProjectScreensProps) {
  const [active, setActive] = useState(0);
  const id = useId();
  const current = screens[active];

  return (
    <figure className="min-w-0">
      <div
        role="group"
        aria-label={`${name} screenshots`}
        className={`flex gap-1 mb-4 border-b ${depth ? "border-on-depth-border" : "border-surface-border"}`}
      >
        {screens.map((screen, index) => (
          <button
            key={screen.src}
            type="button"
            aria-pressed={active === index}
            aria-controls={id}
            onClick={() => setActive(index)}
            className={`min-h-11 px-4 border-b-2 text-[12px] font-mono cursor-pointer transition-colors ${
              active === index
                ? depth
                  ? "border-on-depth text-on-depth"
                  : "border-accent text-accent"
                : depth
                  ? "border-transparent text-on-depth-muted hover:text-on-depth"
                  : "border-transparent text-foreground-muted hover:text-foreground"
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>
      <div
        id={id}
        style={{ aspectRatio: `${current.width} / ${current.height}` }}
        className={`relative overflow-hidden border ${
          depth
            ? "border-on-depth-border bg-depth-elevated"
            : "border-surface-border bg-surface-muted"
        }`}
      >
        {screens.map((screen, index) => (
          <Image
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 90vw"
            className={`object-cover ${active === index ? "visible" : "invisible"}`}
          />
        ))}
      </div>
      <figcaption
        className={`mt-3 font-mono text-[11px] ${depth ? "text-on-depth-muted" : "text-foreground-muted"}`}
        aria-live="polite"
      >
        {name} / {current.label}
      </figcaption>
    </figure>
  );
}
