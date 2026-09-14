import type { Metadata } from "next";
import Image from "next/image";
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
      <article>
        <header className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-10">
          <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-accent">
            {sonomaCaseStudy.status}
          </p>
          <h1 className="font-serif text-[44px] sm:text-[60px] lg:text-[72px] text-foreground font-medium leading-[0.95] tracking-[-0.03em] mt-5 max-w-[16ch]">
            {sonomaCaseStudy.name}
          </h1>
          <p className="text-[17px] sm:text-[19px] text-foreground-muted mt-5 max-w-[34rem] leading-relaxed">
            {sonomaCaseStudy.tagline}
          </p>
        </header>

        <div className="max-w-[1400px] mx-auto px-0 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted border-y sm:border border-surface-border sm:rounded-sm">
            <Image
              src={sonomaCaseStudy.images.landing}
              alt="Sonoma public landing"
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        <div className="max-w-[760px] mx-auto px-6 sm:px-8 lg:px-10 py-14 sm:py-16">
          <section>
            <h2 className="text-[11px] font-mono font-medium tracking-[0.2em] text-foreground-muted uppercase">
              Overview
            </h2>
            <p className="text-[16px] sm:text-[17px] text-foreground-muted leading-[1.8] mt-4">
              {sonomaCaseStudy.overview}
            </p>
          </section>

          <section className="mt-12 pt-10 border-t border-surface-border">
            <h2 className="text-[11px] font-mono font-medium tracking-[0.2em] text-foreground-muted uppercase">
              The problem
            </h2>
            <p className="text-[16px] sm:text-[17px] text-foreground-muted leading-[1.8] mt-4">
              {sonomaCaseStudy.problem}
            </p>
          </section>

          <section className="mt-12 pt-10 border-t border-surface-border">
            <h2 className="text-[11px] font-mono font-medium tracking-[0.2em] text-foreground-muted uppercase">
              Approach
            </h2>
            <ul className="mt-5 space-y-4">
              {sonomaCaseStudy.approach.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] sm:text-[16px] text-foreground-muted leading-relaxed"
                >
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="max-w-[1400px] mx-auto px-0 sm:px-6 lg:px-8 py-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted border-y sm:border border-surface-border sm:rounded-sm">
            <Image
              src={sonomaCaseStudy.images.dashboard}
              alt="Sonoma dashboard"
              fill
              className="object-cover object-[14%_8%]"
              sizes="100vw"
            />
          </div>
          <p className="text-[12px] font-mono text-foreground-muted mt-3 px-6 sm:px-0">
            Authenticated product surface — expenses, archive, and vault workflows.
          </p>
        </div>

        <div className="max-w-[980px] mx-auto px-6 sm:px-8 lg:px-10 py-14 sm:py-16">
          <h2 className="text-[11px] font-mono font-medium tracking-[0.2em] text-foreground-muted uppercase">
            System
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10">
            {sonomaCaseStudy.system.map((item) => (
              <div
                key={item.title}
                className="py-6 md:py-0 border-t md:border-t-0 border-surface-border first:border-t-0"
              >
                <h3 className="font-serif text-[22px] text-foreground">{item.title}</h3>
                <p className="text-[14px] text-foreground-muted leading-relaxed mt-3">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <section className="mt-14 pt-10 border-t border-surface-border">
            <h2 className="text-[11px] font-mono font-medium tracking-[0.2em] text-foreground-muted uppercase">
              Stack
            </h2>
            <p className="text-[13px] font-mono text-foreground-muted mt-4 leading-relaxed">
              {sonomaCaseStudy.stack.join(" · ")}
            </p>
          </section>

          <section className="mt-12 pt-10 border-t border-surface-border">
            <h2 className="text-[11px] font-mono font-medium tracking-[0.2em] text-foreground-muted uppercase">
              What I learned
            </h2>
            <ul className="mt-5 space-y-3">
              {sonomaCaseStudy.learnings.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] text-foreground-muted leading-relaxed"
                >
                  <span className="text-accent shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-14 pt-8 border-t border-surface-border flex flex-col sm:flex-row gap-4">
            <Button href="/work" variant="secondary">
              ← All work
            </Button>
            <Button href="/contact" variant="ghost">
              Contact →
            </Button>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
