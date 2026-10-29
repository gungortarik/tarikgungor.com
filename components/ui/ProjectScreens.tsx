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
  vtSlug?: string;
  depth?: boolean;
  screens: Screen[];
}

export function ProjectScreens({ name, vtSlug, screens, depth = false }: ProjectScreensProps) {
  const [active, setActive] = useState(0);
  const id = useId();
  const current = screens[active];

  return (
    <figure className="min-w-0">
      {/* Capped at half the capture's pixel width so it stays sharp at 2x. */}
      <div className="mx-auto" style={{ maxWidth: `${Math.round(current.width / 2)}px` }}>
        <div
          role="group"
          aria-label={`${name} screenshots`}
          className={`flex gap-1 mb-4 border-b ${
            depth ? "border-on-depth-border" : "border-surface-border"
          }`}
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
                    ? "border-accent text-on-depth"
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
          {...(vtSlug ? { "data-vt-cover": vtSlug } : {})}
          style={{ aspectRatio: `${current.width} / ${current.height}` }}
          className={`relative overflow-hidden border ${
            depth
              ? "border-on-depth-border bg-depth-elevated"
              : "border-surface-border bg-surface-muted"
          }`}
        >
          {screens.map((screen, index) => {
            const isActive = active === index;
            return (
              <Image
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 90vw"
                className={`object-cover transition-all duration-500 ease-out ${
                  isActive
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-[1.015] pointer-events-none"
                }`}
              />
            );
          })}
        </div>
        <figcaption
          className={`mt-3 flex items-center justify-between font-mono text-[11px] ${
            depth ? "text-on-depth-muted" : "text-foreground-muted"
          }`}
          aria-live="polite"
        >
          <span>
            {name} / {current.label}
          </span>
          <span className="tabular-nums">
            0{active + 1} / 0{screens.length}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
