import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { projects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Software projects by Tarik Gungor — Sonoma, CertForge, and the systems around them.",
  alternates: { canonical: "/work" },
};

const statusLabels: Record<string, string> = {
  "in-progress": "In Progress",
  paused: "Paused",
  completed: "Completed",
  private: "Private",
};

export default function WorkPage() {
  return (
    <PageShell>
      <div className="page-pad page-width py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 border-b border-surface-border pb-10">
          <div className="lg:col-span-3">
            <p className="field-meta text-foreground-subtle">Work</p>
          </div>
          <div className="lg:col-span-9">
            <h1 className="font-serif text-[32px] sm:text-[44px] lg:text-[52px] text-foreground font-medium leading-[1.08] tracking-[-0.035em] text-balance max-w-[16ch]">
              Built for real problems.
            </h1>
            <p className="text-[16px] text-foreground-muted leading-[1.75] mt-6 max-w-[38rem]">
              Software I make alongside school and IT work — private systems and public experiments,
              kept honest about scope.
            </p>
          </div>
        </div>

        <div className="mt-4">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 sm:py-16 border-b border-surface-border last:border-b-0"
            >
              {project.cover && (
                <div className="lg:col-span-7">
                  <div
                    style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
                    className="relative overflow-hidden border border-surface-border bg-depth"
                  >
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      className="object-cover object-left-top"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              )}

              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="field-meta text-accent">
                  {String(index + 1).padStart(2, "0")} · {statusLabels[project.status]}
                  {project.liveUrl ? " · Live preview" : project.slug === "sonoma" ? " · Private" : ""}
                </p>
                <h2 className="font-serif text-[32px] sm:text-[40px] text-foreground font-semibold tracking-[-0.03em] mt-3 leading-none">
                  {project.name}
                </h2>
                <p className="text-[15px] text-foreground-muted mt-2">{project.tagline}</p>
                <p className="text-[15px] text-foreground-muted leading-[1.7] mt-4">
                  {project.description}
                </p>
                <p className="text-[12px] font-mono text-foreground-subtle mt-4">
                  {project.stack.join(" · ")}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-7">
                  {project.href && (
                    <Button href={project.href} size="sm" variant="secondary">
                      Case study →
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button href={project.liveUrl} external size="sm">
                      Open live preview ↗
                    </Button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-mono text-foreground-muted hover:text-accent transition-colors min-h-11 inline-flex items-center"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
