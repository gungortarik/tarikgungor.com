import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { labProjects, skillGroups } from "@/lib/content/experience";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Systems practice — IT support foundations, virtualized labs, and tools Tarik uses while learning.",
  alternates: { canonical: "/lab" },
};

export default function LabPage() {
  return (
    <PageShell>
      <div className="page-pad page-width py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 border-b border-surface-border pb-10">
          <div className="lg:col-span-3">
            <p className="field-meta text-foreground-subtle">Lab</p>
          </div>
          <div className="lg:col-span-9">
            <h1 className="font-serif text-[32px] sm:text-[44px] lg:text-[52px] text-foreground font-medium leading-[1.08] tracking-[-0.035em] text-balance max-w-[18ch]">
              Systems practice
            </h1>
            <p className="text-[16px] text-foreground-muted leading-[1.75] mt-6 max-w-[38rem]">
              Infrastructure work from day-job IT support and virtualized labs. Listed as it is —
              without invented diagrams or success theater.
            </p>
          </div>
        </div>

        <section className="mt-14" aria-labelledby="lab-list-heading">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 id="lab-list-heading" className="field-meta text-foreground-subtle">
                Environments
              </h2>
            </div>
            <ol className="lg:col-span-9 border-t border-surface-border">
              {labProjects.map((lab, index) => (
                <li
                  key={lab.title}
                  className="grid sm:grid-cols-[3rem_1fr] gap-3 sm:gap-6 py-7 border-b border-surface-border"
                >
                  <span className="font-mono text-[11px] text-accent pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-[20px] sm:text-[22px] text-foreground leading-snug">
                      {lab.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-foreground-muted leading-relaxed max-w-[40rem]">
                      {lab.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-16 pt-10 border-t border-surface-border" aria-labelledby="tools-heading">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 id="tools-heading" className="field-meta text-foreground-subtle">
                Tools in use
              </h2>
              <p className="text-[13px] text-foreground-muted leading-relaxed mt-3 max-w-[16rem]">
                Skills from real support work and lab environments — not a completeness claim.
              </p>
            </div>
            <ul className="lg:col-span-9 grid sm:grid-cols-2 gap-0 border-t border-surface-border">
              {skillGroups.map((group) => (
                <li
                  key={group.category}
                  className="border-b sm:border-r sm:odd:pr-6 sm:even:pl-6 sm:even:border-r-0 border-surface-border py-5"
                >
                  <p className="field-meta text-foreground-subtle">{group.category}</p>
                  <p className="mt-2 text-[14px] text-foreground leading-relaxed">{group.skills}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16 pt-10 border-t border-surface-border" aria-labelledby="systems-note-heading">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 id="systems-note-heading" className="field-meta text-foreground-subtle">
                Personal systems
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[16px] text-foreground-muted leading-[1.75]">
                I keep private operating systems for planning and memory. They stay private. This
                Lab is the public surface of the same habit: document what is real, omit what isn&apos;t
                ready.
              </p>
              <p className="mt-4 text-[15px] text-foreground-subtle leading-relaxed">
                {profile.identityLine}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row gap-4">
          <Button href="/work">Work</Button>
          <Button href="/path" variant="secondary">
            Path
          </Button>
          <Link
            href="/resume"
            className="inline-flex items-center min-h-11 text-[13px] text-foreground-muted hover:text-foreground transition-colors"
          >
            Resume →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
