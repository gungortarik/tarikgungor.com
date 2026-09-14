"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
      className="home-hero relative w-full overflow-hidden"
    >
      <HeroScene />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 sm:px-8 lg:px-10 pt-8 sm:pt-12 pb-8">
        <div className="flex items-center justify-between gap-6 border-b border-surface-border pb-5 mb-8 font-mono text-[11px] text-foreground-muted">
          <span>01 / A life in progress</span>
          <span>{profile.location}</span>
        </div>
        <div className="max-w-[1040px]">
          <p
            data-hero-part
            className="text-[14px] font-mono text-accent mb-6"
          >
            {profile.name}
          </p>

          <h1
            data-hero-part
            className="hero-title font-serif text-foreground font-medium"
          >
            Crafted systems.
            <br />
            <span className="text-accent italic">Continuous learning.</span>
          </h1>

          <p
            data-hero-part
            className="text-[16px] sm:text-[18px] text-foreground-muted leading-[1.7] mt-7 max-w-[34rem]"
          >
            {profile.positioning}
          </p>

          <div data-hero-part className="flex flex-wrap items-center gap-5 mt-7">
            <Button href="#work">Explore the work <span aria-hidden="true">↘</span></Button>
            <Button href="/about" variant="ghost">
              About →
            </Button>
          </div>
        </div>
        <div data-hero-part className="mt-8 sm:mt-12 border-t border-surface-border pt-5">
          <p className="font-mono text-[11px] text-foreground-muted mb-5">Currently, in practice</p>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-8">
            {[
              { number: "01", title: "Building", detail: "Sonoma & CertForge", href: "/work" },
              { number: "02", title: "Learning", detail: "Computer Systems Technology", href: "/about" },
              { number: "03", title: "Documenting", detail: "Notes from the process", href: "/notes" },
            ].map((item) => (
              <Link key={item.number} href={item.href} className="group flex items-start gap-4 border-b border-surface-border pb-3 sm:pb-5 hover:text-accent transition-colors">
                <span className="font-mono text-[11px] text-foreground-muted pt-2">{item.number}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-[22px] sm:text-[25px] leading-tight">{item.title}</p>
                  <p className="text-[12px] sm:text-[13px] text-foreground-muted mt-1 sm:mt-2">{item.detail}</p>
                </div>
                <span aria-hidden="true" className="pt-2">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
