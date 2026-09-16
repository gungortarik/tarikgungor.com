"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorkPlate } from "@/components/ui/WorkPlate";
import { projects } from "@/lib/content/projects";
import { screenshots } from "@/lib/content/screenshots";

gsap.registerPlugin(ScrollTrigger);

export function SelectedWork() {
  const sonoma = projects.find((p) => p.slug === "sonoma");
  const certforge = projects.find((p) => p.slug === "certforge");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      const plates = section.querySelectorAll<HTMLElement>("[data-work-plate]");
      plates.forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(14% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 52%",
              scrub: 0.65,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  if (!sonoma || !certforge) return null;

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-labelledby="work-title"
      className="border-t border-surface-border scroll-mt-20"
    >
      <div className="px-5 sm:px-7 lg:px-8 pt-10 sm:pt-12 pb-8">
        <div className="home-folio flex items-baseline justify-between gap-4 text-foreground-muted">
          <h2 id="work-title" className="font-normal tracking-[0.14em] uppercase">
            Work
          </h2>
          <Link href="/work" className="hover:text-foreground py-1">
            All projects ↗
          </Link>
        </div>

        <article className="mt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="home-name">{sonoma.name}</h3>
            <p className="text-[13px] text-foreground-muted">{sonoma.tagline}</p>
          </div>
          <p className="mt-3 text-[14px] leading-[1.7] text-foreground-muted max-w-[36rem]">
            {sonoma.description}
          </p>
          {sonoma.href ? (
            <Link
              href={sonoma.href}
              className="inline-block mt-3 text-[13px] underline underline-offset-4 py-1"
            >
              Read the case study ↗
            </Link>
          ) : null}
          <div data-work-plate className="mt-5 border border-surface-border overflow-hidden">
            <WorkPlate shot={screenshots.sonomaDashboard} flush sizes="100vw" />
          </div>
        </article>
      </div>

      <article className="bg-depth text-on-depth">
        <div className="px-5 sm:px-7 lg:px-8 pt-10 sm:pt-12 pb-8">
          <p className="home-folio text-on-depth-muted">Live preview · In progress</p>
          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="home-name">{certforge.name}</h3>
            <p className="text-[13px] text-on-depth-muted">{certforge.tagline}</p>
          </div>
          <p className="mt-3 text-[14px] leading-[1.7] text-on-depth-muted max-w-[36rem]">
            {certforge.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 home-folio">
            {certforge.href ? (
              <Link href={certforge.href} className="text-on-depth py-1">
                Read the study ↗
              </Link>
            ) : null}
            {certforge.liveUrl ? (
              <a
                href={certforge.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-depth-muted py-1"
              >
                Open live preview ↗
              </a>
            ) : null}
          </div>
          <div data-work-plate className="mt-5 overflow-hidden border border-on-depth-border">
            <WorkPlate shot={screenshots.certforgeLanding} depth flush sizes="100vw" />
          </div>
          <div className="mt-px grid md:grid-cols-2 gap-px bg-on-depth-border">
            <div data-work-plate className="bg-depth overflow-hidden">
              <WorkPlate
                shot={screenshots.certforgeDashboard}
                depth
                flush
                caption="CertForge / Study desk"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
            <div data-work-plate className="bg-depth overflow-hidden">
              <WorkPlate
                shot={screenshots.certforgeSubnetLab}
                depth
                flush
                caption="CertForge / Subnet lab"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
