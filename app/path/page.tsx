import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { educationList, experiences } from "@/lib/content/experience";
import { profile } from "@/lib/content/profile";
import { milestones } from "@/lib/content/timeline";

export const metadata: Metadata = {
  title: "Path",
  description: profile.shortBio,
  alternates: { canonical: "/path" },
};

export default function PathPage() {
  return (
    <PageShell>
      <div className="page-pad page-width py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 border-b border-surface-border pb-10">
          <div className="lg:col-span-3">
            <p className="field-meta text-foreground-subtle">Path</p>
          </div>
          <div className="lg:col-span-9">
            <h1 className="font-serif text-[32px] sm:text-[44px] lg:text-[52px] text-foreground font-medium leading-[1.08] tracking-[-0.035em] text-balance max-w-[20ch]">
              {profile.aboutIntro}
            </h1>
            <p className="text-[16px] text-foreground-muted leading-[1.75] mt-6 max-w-[38rem]">
              {profile.positioning}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-12">
          <div className="lg:col-span-3" aria-hidden="true" />
          <div className="lg:col-span-7 space-y-6">
            {profile.aboutBody.map((paragraph) => (
              <p key={paragraph} className="text-[16px] text-foreground-muted leading-[1.75]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <section className="mt-20 pt-10 border-t border-surface-border" aria-labelledby="continuum-heading">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 id="continuum-heading" className="field-meta text-foreground-subtle">
                Continuum
              </h2>
            </div>
            <ol className="lg:col-span-9 border-t border-surface-border">
              {milestones.map((item) => (
                <li
                  key={`${item.year}-${item.title}`}
                  className="grid sm:grid-cols-[5rem_1fr] gap-3 sm:gap-8 py-7 border-b border-surface-border"
                >
                  <span className="font-mono text-[11px] text-accent pt-1">{item.year}</span>
                  <div>
                    <h3 className="font-serif text-[22px] text-foreground">{item.title}</h3>
                    <p className="mt-2 text-[15px] text-foreground-muted leading-relaxed max-w-[40rem]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-6 pt-10 border-t border-surface-border" aria-labelledby="school-heading">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 id="school-heading" className="field-meta text-foreground-subtle">
                School
              </h2>
            </div>
            <div className="lg:col-span-9">
              {educationList.map((edu) => (
                <div key={edu.institution} className="py-5 border-b border-surface-border last:border-b-0">
                  <h3 className="font-serif text-[22px] text-foreground">{edu.institution}</h3>
                  <p className="text-[15px] text-foreground-muted mt-1">{edu.program}</p>
                  <p className="font-mono text-[11px] text-foreground-subtle mt-2">
                    {edu.location ? `${edu.location} · ` : ""}
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 pt-10 border-t border-surface-border" aria-labelledby="work-heading">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 id="work-heading" className="field-meta text-foreground-subtle">
                Work
              </h2>
              <p className="text-[13px] text-foreground-muted leading-relaxed mt-3 max-w-[16rem]">
                Roles as they happened. Full bullets live on the resume.
              </p>
            </div>
            <div className="lg:col-span-9">
              {experiences.map((job) => (
                <div key={`${job.company}-${job.period}`} className="py-5 border-b border-surface-border last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-serif text-[20px] text-foreground">{job.role}</h3>
                    <p className="font-mono text-[11px] text-foreground-subtle">{job.period}</p>
                  </div>
                  <p className="text-[14px] text-foreground-muted mt-1">
                    {job.company} · {job.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row gap-4">
          <Button href="/lab">Lab</Button>
          <Button href="/work" variant="secondary">
            Work
          </Button>
          <Button href="/resume" variant="ghost">
            Resume →
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
