"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { milestones } from "@/lib/content/timeline";

gsap.registerPlugin(ScrollTrigger);

export function PathSoFar() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const progress = progressRef.current;
    if (!section || !progress) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(progress, { scaleX: 1 });
        return;
      }
      gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 50%",
          scrub: 0.6,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="path"
      className="bg-surface-muted/40 border-y border-surface-border"
    >
      <div className="px-5 sm:px-7 lg:px-8 py-12 sm:py-16">
        <p className="home-folio text-foreground-muted">Path</p>
        <h2 className="home-quote mt-5 max-w-[28rem]">
          Not a perfect roadmap. Just the path that actually happened.
        </h2>

        <div className="relative mt-10 pt-1">
          <div className="absolute top-0 left-0 right-0 h-px bg-surface-border" aria-hidden="true" />
          <div
            ref={progressRef}
            className="absolute top-0 left-0 right-0 h-px bg-accent origin-left"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {milestones.map((milestone) => (
              <div key={`${milestone.year}-${milestone.title}`}>
                <span className="font-serif text-[22px] leading-none tracking-[-0.03em]">
                  {milestone.year}
                </span>
                <h3 className="text-[15px] mt-3 leading-snug">{milestone.title}</h3>
                <p className="text-[13px] text-foreground-muted leading-relaxed mt-2">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
