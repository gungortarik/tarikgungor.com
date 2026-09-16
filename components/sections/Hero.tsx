"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import { profile } from "@/lib/content/profile";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parts = root.querySelectorAll<HTMLElement>("[data-hero-part]");
    const media = root.querySelector<HTMLElement>("[data-hero-media]");

    if (prefersReducedMotion) {
      gsap.set(parts, { opacity: 1, y: 0 });
      if (media) gsap.set(media, { clipPath: "inset(0% 0% 0% 0%)" });
      return;
    }

    gsap.set(parts, { opacity: 0, y: 24 });
    if (media) gsap.set(media, { clipPath: "inset(10% 12% 0% 0%)" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(parts, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      stagger: 0.08,
    });
    if (media) {
      tl.to(
        media,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.15,
          ease: "power3.out",
        },
        "-=0.55"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={rootRef} className="home-hero relative w-full overflow-hidden">
      <div className="grid lg:grid-cols-12 lg:min-h-[calc(100svh-76px)]">
        <div className="lg:col-span-7 bg-surface text-foreground flex flex-col justify-center max-w-[1280px] lg:max-w-none w-full mx-auto px-6 sm:px-8 lg:px-10 pt-10 sm:pt-14 pb-10 lg:py-16">
          <div
            data-hero-part
            className="flex items-center justify-between gap-6 border-b border-surface-border pb-5 mb-8 font-mono text-[11px] text-foreground-muted"
          >
            <span>01 / A life in progress</span>
            <span>{profile.location}</span>
          </div>

          <p data-hero-part className="text-[14px] font-mono text-accent mb-5">
            {profile.name}
          </p>

          <h1 data-hero-part className="hero-title font-serif text-foreground font-medium">
            Crafted systems.
            <br />
            <span className="text-accent italic">Continuous learning.</span>
          </h1>

          <p
            data-hero-part
            className="text-[16px] sm:text-[17px] text-foreground-muted leading-[1.7] mt-6 max-w-[32rem]"
          >
            {profile.positioning}
          </p>

          <div data-hero-part className="flex flex-wrap items-center gap-5 mt-7">
            <Button href="#work">
              Explore the work <span aria-hidden="true">↘</span>
            </Button>
            <Button href="/about" variant="ghost">
              About →
            </Button>
          </div>

          <p
            data-hero-part
            className="font-mono text-[11px] text-foreground-muted mt-10 pt-5 border-t border-surface-border"
          >
            Building Sonoma &amp; CertForge · Learning at George Brown · Documenting the path
          </p>
        </div>

        <div className="lg:col-span-5 bg-depth text-on-depth flex items-center justify-center border-t lg:border-t-0 lg:border-l border-on-depth-border py-14 sm:py-16 lg:py-10 lg:min-h-full px-6 sm:px-8 lg:px-10">
          {/* Portrait slot: cream mat stays theme-stable; swap brand for a real photo later */}
          <div
            data-hero-media
            className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] overflow-hidden bg-on-depth text-on-depth-fill-fg flex flex-col items-center justify-center gap-8 px-8"
            aria-label={`${profile.name} brand mark — portrait placeholder`}
          >
            <Image
              src="/assets/logos/tarik-gungor-monogram.svg"
              alt=""
              width={160}
              height={134}
              priority
              className="w-[7.5rem] sm:w-[9rem] h-auto"
            />
            <p className="font-serif text-[20px] sm:text-[24px] tracking-[0.16em] uppercase text-on-depth-fill-fg text-center">
              {profile.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
