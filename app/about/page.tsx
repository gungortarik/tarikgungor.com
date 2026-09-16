import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { Signature } from "@/components/ui/Signature";
import { educationList, labProjects } from "@/lib/content/experience";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.shortBio,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 border-b border-surface-border pb-10">
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-foreground-muted">
              About
            </p>
          </div>
          <div className="lg:col-span-9">
            <h1 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-foreground font-medium leading-[1.15] tracking-tight text-balance max-w-[20ch]">
              {profile.aboutIntro}
            </h1>
            <p className="text-[16px] text-foreground-muted leading-[1.75] mt-6 max-w-[36rem]">
              {profile.positioning}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-12">
          <div className="lg:col-span-3">
            <Signature />
          </div>
          <div className="lg:col-span-7 space-y-6">
            {profile.aboutBody.map((paragraph) => (
              <p key={paragraph} className="text-[16px] text-foreground-muted leading-[1.75]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <section className="mt-20 pt-10 border-t border-surface-border">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[11px] text-foreground-muted">School</p>
            </div>
            <div className="lg:col-span-9">
              {educationList.map((edu) => (
                <div key={edu.institution} className="py-5 border-b border-surface-border last:border-b-0">
                  <h2 className="font-serif text-[22px] text-foreground">{edu.institution}</h2>
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

        <section className="mt-6 pt-10 border-t border-surface-border">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[11px] text-foreground-muted">Labs</p>
              <p className="text-[13px] text-foreground-muted leading-relaxed mt-3 max-w-[16rem]">
                Systems work from virtualized labs — listed as they are, without invented diagrams.
              </p>
            </div>
            <ol className="lg:col-span-9 grid sm:grid-cols-2 gap-0">
              {labProjects.map((lab, index) => (
                <li key={lab.title} className="border-b sm:border-r sm:odd:pr-8 sm:even:pl-8 sm:even:border-r-0 border-surface-border py-6">
                  <span className="font-mono text-[11px] text-accent">0{index + 1}</span>
                  <h2 className="font-serif text-[20px] text-foreground mt-3 leading-snug">{lab.title}</h2>
                  <p className="text-[14px] text-foreground-muted leading-relaxed mt-2">{lab.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row gap-4">
          <Button href="/work">See the work</Button>
          <Button href="/resume" variant="secondary">
            Resume
          </Button>
          <Button href="/contact" variant="ghost">
            Contact →
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
