import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { ProjectScreens } from "@/components/ui/ProjectScreens";
import { screenshots } from "@/lib/content/screenshots";
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
        <header className="page-pad page-width pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
          <div className="flex items-center justify-between gap-6 border-b border-surface-border pb-5 field-meta text-foreground-muted">
            <p>01 / Work</p>
            <p>{sonomaCaseStudy.status}</p>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-10 sm:pt-14">
            <div className="lg:col-span-8">
              <p className="font-mono text-[12px] text-accent">Private finance archive</p>
              <h1 className="font-serif text-[54px] sm:text-[76px] lg:text-[104px] text-foreground font-medium leading-[0.9] tracking-[-0.035em] mt-4">
                Sonoma
              </h1>
              <p className="font-serif text-[27px] sm:text-[34px] leading-[1.15] text-foreground mt-8 max-w-[22ch]">
                {sonomaCaseStudy.tagline}.
              </p>
            </div>
            <div className="lg:col-span-4 lg:pt-14">
              <p className="text-[16px] leading-[1.75] text-foreground-muted max-w-[28rem]">
                {sonomaCaseStudy.overview}
              </p>
              <dl className="mt-8 border-y border-surface-border py-5 grid grid-cols-2 gap-y-4 text-[12px]">
                <div>
                  <dt className="font-mono text-foreground-subtle">Scope</dt>
                  <dd className="mt-1 text-foreground">Small trusted circle</dd>
                </div>
                <div>
                  <dt className="font-mono text-foreground-subtle">State</dt>
                  <dd className="mt-1 text-foreground">In progress</dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-mono text-foreground-subtle">Stack</dt>
                  <dd className="mt-1 text-foreground leading-relaxed">{sonomaCaseStudy.stack.join(" / ")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <section aria-label="Sonoma product surfaces" className="bg-depth text-on-depth py-12 sm:py-16 lg:py-20">
          <div className="page-pad page-width">
            <ProjectScreens
              name="Sonoma"
              depth
              screens={[
                { label: "Landing", ...screenshots.sonomaLanding },
                { label: "Dashboard", ...screenshots.sonomaDashboard },
              ]}
            />
            <p className="max-w-[44rem] mt-8 text-[15px] sm:text-[17px] leading-[1.75] text-on-depth-muted">
              A private product surface for expense review, document storage, and a long-term record that remains owned by its users.
            </p>
          </div>
        </section>

        <section className="page-pad page-width py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="field-meta text-foreground-subtle">The problem</p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-serif text-[30px] sm:text-[42px] leading-[1.18] text-foreground">
                {sonomaCaseStudy.problem}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-14 border-t border-surface-border">
            {sonomaCaseStudy.approach.map((item, index) => (
              <div key={item} className="border-b md:border-r md:last:border-r-0 border-surface-border p-5 sm:p-6 min-h-40">
                <p className="font-mono text-[11px] text-accent">0{index + 1}</p>
                <p className="text-[15px] leading-[1.6] text-foreground mt-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-muted/50 border-y border-surface-border py-16 sm:py-20 lg:py-24">
          <div className="page-pad page-width">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="field-meta text-foreground-subtle">The system</p>
              </div>
              <div className="lg:col-span-9 grid md:grid-cols-3 gap-0 border-t border-surface-border">
                {sonomaCaseStudy.system.map((item, index) => (
                  <section key={item.title} className="py-8 md:px-7 md:first:pl-0 border-b md:border-b-0 md:border-r md:last:border-r-0 border-surface-border">
                    <p className="font-mono text-[11px] text-accent">0{index + 1}</p>
                    <h2 className="font-serif text-[28px] leading-tight text-foreground mt-6">{item.title}</h2>
                    <p className="text-[15px] leading-[1.75] text-foreground-muted mt-4">{item.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-pad page-width py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="field-meta text-foreground-subtle">What I learned</p>
            </div>
            <div className="lg:col-span-7">
              <ul className="border-t border-surface-border">
                {sonomaCaseStudy.learnings.map((item, index) => (
                  <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-surface-border py-5 text-[16px] sm:text-[18px] leading-[1.55]">
                    <span className="font-mono text-[11px] text-accent pt-1">0{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href="/work" variant="secondary">All work</Button>
                <Button href="/contact" variant="ghost">Contact <span aria-hidden="true">↗</span></Button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
