import type { Metadata } from "next";
import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { sonomaCaseStudy } from "@/lib/content/sonoma";

export const metadata: Metadata = {
  title: "Sonoma",
  description: sonomaCaseStudy.overview,
  alternates: { canonical: "/work/sonoma" },
};

export default function SonomaPage() {
  return (
    <PageShell>
      <article className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <RevealOnScroll>
          <Badge variant="accent" className="mb-6">{sonomaCaseStudy.status}</Badge>
          <h1 className="font-serif text-[40px] sm:text-[48px] text-foreground leading-tight">
            {sonomaCaseStudy.name}
          </h1>
          <p className="text-[18px] text-foreground-muted mt-3">{sonomaCaseStudy.tagline}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-surface-border bg-surface-muted mt-10">
            <Image
              src={sonomaCaseStudy.image}
              alt="Sonoma dashboard screenshot"
              fill
              className="object-cover object-[14%_8%]"
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <section className="mt-12">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase">
              Overview
            </h2>
            <p className="text-[16px] text-foreground-muted leading-[1.75] mt-4">
              {sonomaCaseStudy.overview}
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <section className="mt-10">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase">
              The Problem
            </h2>
            <p className="text-[16px] text-foreground-muted leading-[1.75] mt-4">
              {sonomaCaseStudy.problem}
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25}>
          <section className="mt-10">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase">
              Approach
            </h2>
            <ul className="mt-4 space-y-3">
              {sonomaCaseStudy.approach.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-foreground-muted leading-relaxed">
                  <span className="text-accent shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <section className="mt-10">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase">
              Stack
            </h2>
            <p className="text-[14px] font-mono text-foreground-muted mt-4">
              {sonomaCaseStudy.stack.join(" · ")}
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.35}>
          <section className="mt-10">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase">
              What I Learned
            </h2>
            <ul className="mt-4 space-y-3">
              {sonomaCaseStudy.learnings.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-foreground-muted leading-relaxed">
                  <span className="text-accent shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="mt-12 pt-8 border-t border-surface-border flex gap-4">
            <Button href="/work" variant="secondary">← All work</Button>
            <Button href="/contact" variant="ghost">Get in touch →</Button>
          </div>
        </RevealOnScroll>
      </article>
    </PageShell>
  );
}
