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

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(progress, { scaleX: 1 });
      return;
    }

    gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

    const tween = gsap.to(progress, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 40%",
        scrub: 0.6,
      },
    });

    const items = section.querySelectorAll<HTMLElement>("[data-path-item]");
    gsap.set(items, { opacity: 0.35 });

    const itemTween = gsap.to(items, {
      opacity: 1,
      stagger: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 65%",
        end: "center 40%",
        scrub: 0.5,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      itemTween.scrollTrigger?.kill();
      itemTween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="path"
      className="w-full bg-surface-muted/40 border-y border-surface-border py-24 sm:py-28 lg:py-32"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-foreground-muted">
          Path
        </p>
        <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] text-foreground font-medium leading-[1.2] tracking-tight mt-4 max-w-[620px]">
          A continuous line — school, work, and building in sequence.
        </h2>

        <div className="relative mt-12 pt-1">
          <div className="absolute top-0 left-0 right-0 h-px bg-surface-border" aria-hidden="true" />
          <div
            ref={progressRef}
            className="absolute top-0 left-0 right-0 h-px bg-accent origin-left"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {milestones.map((milestone) => (
              <div key={`${milestone.year}-${milestone.title}`} data-path-item className="relative">
                <span
                  className="absolute -top-[37px] left-0 w-2 h-2 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-mono text-foreground-muted">{milestone.year}</span>
                <h3 className="font-serif text-[18px] text-foreground mt-2">{milestone.title}</h3>
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
