"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { milestones } from "@/lib/content/timeline";

gsap.registerPlugin(ScrollTrigger);

const VERNIER_TICKS = 41;

export function PathContinuum() {
  const rootRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const bar = progressRef.current;
    const needle = needleRef.current;
    if (!root || !bar) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(bar, { scaleX: 1 });
      if (needle) gsap.set(needle, { left: "100%" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      if (needle) gsap.set(needle, { left: "0%" });

      ScrollTrigger.create({
        trigger: root,
        start: "top 72%",
        end: "bottom 42%",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(bar, { scaleX: p });
          if (needle) {
            gsap.set(needle, { left: `${(p * 100).toFixed(2)}%` });
          }
          const idx = Math.min(
            milestones.length - 1,
            Math.max(0, Math.floor(p * milestones.length))
          );
          setActiveIndex((prev) => (prev === idx ? prev : idx));
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="path"
      ref={rootRef}
      className="bg-surface border-b border-surface-border"
      aria-labelledby="path-heading"
      data-field-chapter="path"
    >
      <div className="page-pad page-width py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="field-meta flex items-center gap-2.5 text-foreground-subtle">
              <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              Path / 04 continuum
            </p>
            <h2
              id="path-heading"
              className="mt-3 font-serif text-[28px] sm:text-[36px] tracking-[-0.03em] font-medium leading-[1.1] max-w-[20ch]"
            >
              Not a perfect roadmap. Just the path that happened.
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-block font-mono text-[11px] text-foreground-subtle tabular-nums">
              LOCK // {milestones[activeIndex]?.year ?? "2023"}
            </span>
            <TransitionLink
              href="/path"
              className="group text-[13px] text-foreground-muted hover:text-accent transition-colors min-h-11 inline-flex items-center gap-2"
            >
              Full path
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </TransitionLink>
          </div>
        </div>

        {/* Precision Vernier Timeline Gauge */}
        <div className="relative py-3 select-none" aria-hidden="true">
          <div className="flex items-end justify-between h-3 mb-1.5">
            {Array.from({ length: VERNIER_TICKS }).map((_, i) => {
              const isMajor = i % 10 === 0;
              const isMid = i % 5 === 0 && !isMajor;
              return (
                <span
                  key={i}
                  className={`w-px ${
                    isMajor
                      ? "h-3 bg-foreground-subtle"
                      : isMid
                        ? "h-2 bg-surface-border"
                        : "h-1.5 bg-surface-border/70"
                  }`}
                />
              );
            })}
          </div>

          <div className="h-px bg-surface-border relative">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-full bg-accent origin-left scale-x-0"
            />
            <div
              ref={needleRef}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-4 bg-accent shadow-[0_0_10px_var(--accent)]"
            />
          </div>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-surface-border mt-2">
          {milestones.map((item, idx) => {
            const isLocked = idx === activeIndex;
            return (
              <li
                key={`${item.year}-${item.title}`}
                data-path-item
                className={`relative border-b sm:border-r border-surface-border last:border-r-0 py-6 sm:px-5 first:sm:pl-0 lg:odd:[&:nth-child(4n)]:border-r-0 transition-colors duration-300 ${
                  isLocked ? "bg-surface-elevated/60" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-[11px] text-accent flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full transition-transform duration-300 ${
                        isLocked ? "bg-accent scale-125" : "bg-surface-border scale-100"
                      }`}
                    />
                    {item.year}
                  </p>
                  <span className="font-mono text-[10px] text-foreground-subtle">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-[18px] text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-foreground-muted">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
