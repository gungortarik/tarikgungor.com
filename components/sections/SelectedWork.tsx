"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { ProjectScreens } from "@/components/ui/ProjectScreens";
import { projects } from "@/lib/content/projects";
import { screenshots } from "@/lib/content/screenshots";

gsap.registerPlugin(ScrollTrigger);

export function SelectedWork() {
  const sonoma = projects.find((p) => p.slug === "sonoma");
  const certforge = projects.find((p) => p.slug === "certforge");
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el,
        { clipPath: "inset(12% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        }
      );
    });
    return () => media.revert();
  }, []);

  if (!sonoma || !certforge) return null;

  return (
    <section id="work" aria-labelledby="work-title" className="selected-work w-full scroll-mt-20">
      <div className="bg-depth text-on-depth py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4 border-b border-on-depth-border pb-5 font-mono text-[11px] text-on-depth-muted">
            <p>02 / Selected work</p>
            <Link href="/work" className="hover:text-on-depth py-2">
              All projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-20 mt-10 mb-12 items-end">
            <h2 id="work-title" className="font-serif text-[40px] sm:text-[56px] leading-[1.05] font-medium">
              Two systems.
              <br />
              <span className="italic text-on-depth-muted">One practice.</span>
            </h2>
            <p className="text-[16px] leading-[1.75] text-on-depth-muted max-w-[28rem]">
              Private tools for real workflows, and a public study platform still taking shape. The screens are the work.
            </p>
          </div>
        </div>
        <div ref={mediaRef} className="max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[minmax(0,1.7fr)_minmax(16rem,0.9fr)] gap-8 lg:gap-12 items-start px-6 sm:px-0">
            <ProjectScreens
              name="Sonoma"
              depth
              screens={[
                { label: "Landing", ...screenshots.sonomaLanding },
                { label: "Dashboard", ...screenshots.sonomaDashboard },
              ]}
            />
            <div className="lg:pt-2 pb-2">
              <p className="font-mono text-[11px] text-on-depth-muted mb-4">01 / Private · In progress</p>
              <h3 className="font-serif text-[38px] leading-tight">{sonoma.name}</h3>
              <p className="mt-3 text-[15px] text-on-depth leading-relaxed">{sonoma.tagline}</p>
              <p className="mt-5 text-[14px] text-on-depth-muted leading-[1.8]">
                Built for a small trusted circle — receipts, documents, and a record that stays owned. Not a public product, and not dressed up as one.
              </p>
              <dl className="my-7 border-y border-on-depth-border py-5 text-[12px] leading-6">
                <dt className="font-mono text-on-depth-muted">Built with</dt>
                <dd className="mt-1">{sonoma.stack.join(" / ")}</dd>
              </dl>
              <Button href={sonoma.href!} tone="depth" variant="secondary">
                Read the case study <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 py-14 sm:py-20">
        <div className="grid lg:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.7fr)] gap-8 lg:gap-16 items-center">
          <div>
            <p className="font-mono text-[11px] text-foreground-muted mb-5">02 / Live preview · In progress</p>
            <h3 className="font-serif text-[38px] leading-tight">{certforge.name}</h3>
            <p className="mt-3 text-[18px]">{certforge.tagline}</p>
            <p className="mt-5 text-[15px] text-foreground-muted leading-[1.8] max-w-[30rem]">
              I use it while I study. Questions carry real device output, the subnet lab does the bit math with you, and practice is mapped to exam domains — public because the work is happening, not because it is finished.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-7">
              <Button href={certforge.href!}>Read the study <span aria-hidden="true">↗</span></Button>
              {certforge.liveUrl && (
                <Button href={certforge.liveUrl} external variant="ghost">
                  Open live preview ↗
                </Button>
              )}
            </div>
          </div>
          <ProjectScreens
            name="CertForge"
            screens={[
              { label: "Landing", ...screenshots.certforgeLanding },
              { label: "Subnet lab", ...screenshots.certforgeSubnetLab },
              { label: "Practice", ...screenshots.certforgePractice },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
