import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  educationList,
  experiences,
  labProjects,
  skillGroups,
} from "@/lib/content/experience";
import { profile } from "@/lib/content/profile";
import { renderMarkdownBold } from "@/lib/utils/render-markdown-bold";

export const metadata: Metadata = {
  title: "Resume",
  description: profile.resumeSummary,
  alternates: { canonical: "/resume" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.resumeTitle,
  description: profile.resumeSummary,
  url: profile.contact.website,
  email: profile.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  sameAs: [profile.contact.linkedin, profile.contact.github],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "George Brown College" },
    { "@type": "EducationalOrganization", name: "British Columbia Institute of Technology" },
  ],
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-foreground selection:bg-accent-subtle print:bg-white print:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="w-full border-b border-surface-border bg-surface/92 backdrop-blur-xs md:sticky md:top-0 z-30 py-3 print:hidden">
        <div className="max-w-[1080px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
              <Image
                src="/assets/logos/tarik-gungor-monogram.svg"
                alt=""
                width={32}
                height={27}
                className="w-7 h-auto dark:invert shrink-0"
              />
              <span className="text-sm font-semibold tracking-tight hidden sm:inline">
                {profile.name}
              </span>
            </Link>
            <span className="text-surface-border select-none" aria-hidden="true">|</span>
            <Link
              href="/"
              className="text-xs font-mono text-foreground-muted hover:text-foreground transition-colors"
            >
              ← Home
            </Link>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/resume/tarik-gungor-resume.pdf"
              download="tarik-gungor-resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-foreground text-surface dark:bg-surface dark:text-foreground font-semibold text-xs hover:opacity-90 transition-all"
            >
              Download PDF ↓
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-6 sm:px-10 pt-8 pb-12 print:py-0">
        <article className="space-y-10">
          <header className="space-y-4">
            <div>
              <h1 className="font-serif text-[42px] sm:text-[48px] text-foreground font-normal tracking-tight leading-tight print:text-black">
                {profile.name}
              </h1>
              <p className="text-[16px] font-medium text-foreground/90 mt-2 print:text-black">
                {profile.resumeTitle}
              </p>
              <p className="text-sm font-mono text-foreground-muted mt-1">
                {profile.resumeSubtitle}
              </p>
            </div>

            <div className="pt-3 border-t border-surface-border text-sm text-foreground-muted flex flex-wrap gap-x-4 gap-y-1">
              <span className="font-mono text-foreground font-medium">Toronto, ON</span>
              <a href={`mailto:${profile.contact.email}`} className="hover:text-foreground underline-offset-2 hover:underline">
                {profile.contact.email}
              </a>
              <a href={profile.contact.website} className="hover:text-foreground underline-offset-2 hover:underline">
                tarikgungor.com
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline-offset-2 hover:underline">
                LinkedIn
              </a>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline-offset-2 hover:underline">
                GitHub
              </a>
            </div>
          </header>

          <section id="summary">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase mb-4">
              Summary
            </h2>
            <p className="max-w-[760px] text-[15px] text-foreground/95 leading-[1.7]">
              {profile.resumeSummary}
            </p>
          </section>

          <section id="skills">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase mb-5">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <span className="block font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-foreground-subtle">
                    {group.category}
                  </span>
                  <p className="text-[13px] text-foreground mt-1.5">{group.skills}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="experience">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase mb-5">
              Professional Experience
            </h2>
            <div className="space-y-8 divide-y divide-surface-border">
              {experiences.map((exp, idx) => (
                <div key={exp.company} className={idx > 0 ? "pt-8" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="font-serif text-[22px] text-foreground">{exp.company}</h3>
                      <p className="text-sm text-foreground-muted mt-0.5">{exp.role}</p>
                    </div>
                    <div className="text-xs font-mono text-foreground-subtle sm:text-right">
                      {exp.location} · {exp.period}
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-[14px] text-foreground-muted leading-relaxed list-disc list-outside pl-4 marker:text-accent max-w-[800px]">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>{renderMarkdownBold(bullet)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="labs">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase mb-2">
              Projects / Labs
            </h2>
            <p className="text-xs font-mono text-foreground-subtle mb-5">
              Technical infrastructure labs &amp; systems configurations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {labProjects.map((project) => (
                <div key={project.title} className="pt-3 border-t border-surface-border">
                  <h3 className="font-serif text-[18px] text-foreground">{project.title}</h3>
                  <p className="text-[13px] text-foreground-muted leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="education">
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase mb-5">
              Education
            </h2>
            <div className="space-y-5 divide-y divide-surface-border">
              {educationList.map((edu, idx) => (
                <div key={edu.institution} className={idx > 0 ? "pt-5" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="font-serif text-[19px] text-foreground">{edu.institution}</h3>
                      <p className="text-sm text-foreground-muted mt-0.5">{edu.program}</p>
                    </div>
                    <div className="text-xs font-mono text-foreground-subtle sm:text-right">
                      {edu.location && <span>{edu.location} · </span>}
                      {edu.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
            <Link href="/work" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              See software projects →
            </Link>
            <a
              href="/resume/tarik-gungor-resume.json"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-foreground-subtle hover:text-foreground transition-colors"
            >
              Machine-readable JSON ↗
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
