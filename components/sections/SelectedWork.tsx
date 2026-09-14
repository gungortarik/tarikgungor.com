"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/content/projects";

gsap.registerPlugin(ScrollTrigger);

export function SelectedWork() {
  const sonoma = projects.find((p) => p.slug === "sonoma");
  const certforge = projects.find((p) => p.slug === "certforge");
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)" });
      return;
    }

    gsap.set(el, { clipPath: "inset(100% 0% 0% 0%)" });

    const tween = gsap.to(el, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.25,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 84%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  if (!sonoma || !certforge) return null;

  return (
    <section id="work" className="w-full py-24 sm:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-foreground-muted">
              Building
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[36px] sm:text-[44px] lg:text-[52px] text-foreground font-medium leading-[1.05] tracking-tight max-w-[14ch]">
              Two systems. One practice.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-foreground-muted leading-[1.75] mt-5 max-w-[34rem]">
              Private tools for real workflows, and a public study platform still taking shape.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 sm:mt-16 max-w-[1400px] mx-auto px-0 sm:px-6 lg:px-8">
        <div
          ref={mediaRef}
          className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted border-y sm:border border-surface-border sm:rounded-sm"
        >
          <Image
            src={sonoma.image!}
            alt={`${sonoma.name} landing`}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 mt-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-[560px]">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="font-serif text-[28px] sm:text-[34px] text-foreground font-medium">
                {sonoma.name}
              </h3>
                <span className="text-[11px] font-mono text-foreground-muted uppercase tracking-wider">
                  Private · In progress
                </span>
            </div>
            <p className="text-[15px] text-foreground-muted leading-[1.75] mt-3">
              {sonoma.description}
            </p>
          </div>
          <Button href={sonoma.href!} variant="secondary" size="sm">
            Case study →
          </Button>
        </div>

        <div className="mt-16 pt-12 border-t border-surface-border grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] overflow-hidden border border-surface-border bg-surface-muted rounded-sm">
              <Image
                src={certforge.image!}
                alt={`${certforge.name} landing`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="font-serif text-[28px] sm:text-[34px] text-foreground font-medium">
                {certforge.name}
              </h3>
              <span className="text-[11px] font-mono text-foreground-muted uppercase tracking-wider">
                Live preview · In progress
              </span>
            </div>
            <p className="text-[15px] text-foreground-muted leading-[1.75] mt-3 max-w-[30rem]">
              {certforge.description}
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-7">
              <Button href={certforge.href!} external size="sm">
                Open live preview ↗
              </Button>
              {certforge.github && (
                <a
                  href={certforge.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-mono text-foreground-muted hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/work"
            className="text-[13px] font-mono text-foreground-muted hover:text-foreground transition-colors"
          >
            All work →
          </Link>
        </div>
      </div>
    </section>
  );
}
