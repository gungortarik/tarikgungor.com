"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HeroScene } from "@/components/three/HeroScene";
import { Button } from "@/components/ui/Button";
import { profile } from "@/lib/content/profile";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parts = root.querySelectorAll<HTMLElement>("[data-hero-part]");

    if (prefersReducedMotion) {
      gsap.set(parts, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(parts, { opacity: 0, y: 24 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(parts, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden min-h-[88vh] flex flex-col justify-center"
    >
      <HeroScene />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 sm:px-8 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24">
        <div className="max-w-[720px]">
          <p
            data-hero-part
            className="text-[11px] font-mono font-medium tracking-[0.24em] uppercase text-foreground-muted mb-10"
          >
            {profile.location} · Systems · Software
          </p>

          <h1
            data-hero-part
            className="font-serif text-[52px] sm:text-[72px] lg:text-[92px] text-foreground font-medium leading-[0.92] tracking-[-0.035em]"
          >
            Crafted systems.
            <br />
            Continuous learning.
          </h1>

          <p
            data-hero-part
            className="text-[15px] sm:text-[17px] text-foreground-muted leading-[1.75] mt-9 max-w-[34rem]"
          >
            {profile.positioning}
          </p>

          <div data-hero-part className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-12">
            <Button href="/work">See the work</Button>
            <Button href="/about" variant="ghost">
              About →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
