import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <SectionHeader
          label="Work"
          title="Built for real problems."
          description="Software I make alongside school and IT work — private systems and public experiments, kept honest about scope."
        />

        <div className="mt-14 space-y-16">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-surface-border last:border-b-0 last:pb-0"
            >
              {project.cover && (
                <div className="lg:col-span-7">
                  <div
                    style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
                    className="relative overflow-hidden border border-surface-border bg-surface-muted"
                  >
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
              )}

              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="text-[11px] font-mono text-foreground-subtle uppercase tracking-wider">
                  {statusLabels[project.status]}
                  {project.liveUrl ? " · Live preview" : project.slug === "sonoma" ? " · Private" : ""}
                </p>
                <h2 className="font-serif text-[32px] sm:text-[36px] text-foreground font-medium mt-3">
                  {project.name}
                </h2>
                <p className="text-[14px] text-foreground-muted mt-1">{project.tagline}</p>
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
                      className="text-[13px] font-mono text-foreground-muted hover:text-foreground transition-colors"
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
