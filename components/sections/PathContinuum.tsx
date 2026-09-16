"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { milestones } from "@/lib/content/timeline";

gsap.registerPlugin(ScrollTrigger);

export function PathContinuum() {
  const rootRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const bar = progressRef.current;
    if (!root || !bar) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(bar, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      ScrollTrigger.create({
        trigger: root,
        start: "top 70%",
        end: "bottom 40%",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(bar, { scaleX: self.progress });
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="bg-surface border-b border-surface-border"
      aria-labelledby="path-heading"
      data-field-chapter="path"
    >
      <div className="page-pad page-width py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="field-meta text-foreground-subtle">Path</p>
            <h2
              id="path-heading"
              className="mt-3 font-serif text-[28px] sm:text-[36px] tracking-[-0.03em] font-medium leading-[1.1] max-w-[20ch]"
            >
              Not a perfect roadmap. Just the path that happened.
            </h2>
          </div>
          <Link
            href="/path"
            className="text-[13px] text-foreground-muted hover:text-accent transition-colors min-h-11 inline-flex items-center"
          >
            Full path →
          </Link>
        </div>

        <div className="h-px bg-surface-border relative mb-2" aria-hidden="true">
          <div
            ref={progressRef}
            className="absolute inset-y-0 left-0 w-full bg-accent origin-left scale-x-0"
          />
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-surface-border">
          {milestones.map((item) => (
            <li
              key={`${item.year}-${item.title}`}
              data-path-item
              className="border-b sm:border-r border-surface-border last:border-r-0 py-6 sm:pr-5 lg:odd:[&:nth-child(4n)]:border-r-0"
            >
              <p className="font-mono text-[11px] text-accent">{item.year}</p>
              <h3 className="mt-3 font-serif text-[18px] text-foreground leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
