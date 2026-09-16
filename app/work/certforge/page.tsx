import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { ProjectScreens } from "@/components/ui/ProjectScreens";
import { certforgeCaseStudy } from "@/lib/content/certforge";
import { screenshots } from "@/lib/content/screenshots";

export const metadata: Metadata = {
  title: "CertForge",
  description: certforgeCaseStudy.overview,
  alternates: { canonical: "/work/certforge" },
};

export default function CertForgePage() {
  return (
    <PageShell>
      <article>
        <header className="page-pad page-width pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
          <div className="flex items-center justify-between gap-6 border-b border-surface-border pb-5 field-meta text-foreground-muted">
            <p>02 / Work</p>
            <p>{certforgeCaseStudy.status}</p>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-10 sm:pt-14">
            <div className="lg:col-span-8">
              <p className="font-mono text-[12px] text-accent">Study platform · CCNA &amp; Network+</p>
              <h1 className="font-serif text-[54px] sm:text-[76px] lg:text-[104px] text-foreground font-medium leading-[0.9] tracking-[-0.035em] mt-4">
                CertForge
              </h1>
              <p className="font-serif text-[27px] sm:text-[34px] leading-[1.15] text-foreground mt-8 max-w-[22ch]">
                {certforgeCaseStudy.tagline}.
              </p>
            </div>
            <div className="lg:col-span-4 lg:pt-14">
              <p className="text-[16px] leading-[1.75] text-foreground-muted max-w-[28rem]">
                {certforgeCaseStudy.overview}
              </p>
              <dl className="mt-8 border-y border-surface-border py-5 grid grid-cols-2 gap-y-4 text-[12px]">
                <div>
                  <dt className="font-mono text-foreground-subtle">State</dt>
                  <dd className="mt-1 text-foreground">In progress</dd>
                </div>
                <div>
                  <dt className="font-mono text-foreground-subtle">Access</dt>
                  <dd className="mt-1 text-foreground">Live preview</dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-mono text-foreground-subtle">Stack</dt>
                  <dd className="mt-1 text-foreground leading-relaxed">{certforgeCaseStudy.stack.join(" / ")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <section aria-label="CertForge product surfaces" className="bg-depth text-on-depth py-12 sm:py-16 lg:py-20">
          <div className="page-pad page-width">
            <ProjectScreens
              name="CertForge"
              depth
              screens={[
                { label: "Landing", ...screenshots.certforgeLanding },
                { label: "Study desk", ...screenshots.certforgeDashboard },
                { label: "Subnet lab", ...screenshots.certforgeSubnetLab },
                { label: "Practice", ...screenshots.certforgePractice },
              ]}
            />
            <p className="max-w-[44rem] mt-8 text-[15px] sm:text-[17px] leading-[1.75] text-on-depth-muted">
              Real surfaces from the live preview — not a finished product, and not a screenshot of someone else’s work.
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
                {certforgeCaseStudy.problem}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-muted/50 border-y border-surface-border py-16 sm:py-20 lg:py-24">
          <div className="page-pad page-width">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="field-meta text-foreground-subtle">What is live</p>
              </div>
              <div className="lg:col-span-9 grid md:grid-cols-3 gap-0 border-t border-surface-border">
                {certforgeCaseStudy.system.map((item, index) => (
                  <section
                    key={item.title}
                    className="py-8 md:px-7 md:first:pl-0 border-b md:border-b-0 md:border-r md:last:border-r-0 border-surface-border"
                  >
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={certforgeCaseStudy.liveUrl} external>
              Open live preview ↗
            </Button>
            <Button href={certforgeCaseStudy.github} external variant="secondary">
              GitHub
            </Button>
            <Button href="/work" variant="ghost">
              All work
            </Button>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
