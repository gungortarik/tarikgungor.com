"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorkPlate } from "@/components/ui/WorkPlate";
import { profile } from "@/lib/content/profile";
import { projects } from "@/lib/content/projects";
import { screenshots } from "@/lib/content/screenshots";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const sonoma = projects.find((p) => p.slug === "sonoma");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const media = root.querySelector<HTMLElement>("[data-hero-media]");
    const ctx = gsap.context(() => {
      if (reduced || !media) return;
      gsap.fromTo(
        media,
        { clipPath: "inset(10% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: media,
            start: "top 88%",
            end: "top 48%",
            scrub: 0.7,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="px-5 sm:px-7 lg:px-8 pt-8 sm:pt-10 pb-10 sm:pb-12">
      <div className="home-folio flex items-baseline justify-between gap-4 text-foreground-muted">
        <span>{profile.location}</span>
        <Link href="#work" className="hover:text-foreground py-1">
          Work ↓
        </Link>
      </div>

      <h1 className="home-display mt-6">
        Crafted systems.{" "}
        <span className="home-display-sub">Continuous learning.</span>
      </h1>

      <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.65] text-foreground-muted max-w-[34rem]">
        {profile.positioning}
      </p>

      <div data-hero-media className="mt-8 border border-surface-border overflow-hidden">
        <WorkPlate shot={screenshots.sonomaLanding} flush priority sizes="100vw" />
      </div>

      {sonoma ? (
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-[12px] text-foreground-muted">
          <span>
            {sonoma.name} — {sonoma.tagline}
          </span>
          {sonoma.href ? (
            <Link href={sonoma.href} className="home-folio hover:text-foreground py-1">
              Case study ↗
            </Link>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
