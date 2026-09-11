import type { Metadata } from "next";
import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Software projects and experiments by Tarik Gungor.",
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
        <RevealOnScroll>
          <SectionHeader
            label="Work"
            title="Projects built from real problems."
            description="Software I build alongside school and IT work — honest scope, real workflows."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 0.08}>
              <Card href={project.href ?? undefined}>
                {project.image && (
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-surface-border bg-surface-muted mb-5 -mx-1 -mt-1">
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="font-serif text-[24px] text-foreground">{project.name}</h2>
                  <Badge variant={project.status === "paused" ? "default" : "accent"}>
                    {statusLabels[project.status]}
                  </Badge>
                </div>

                <p className="text-[14px] text-foreground-muted leading-relaxed mt-2">
                  {project.description}
                </p>

                <p className="text-[12px] font-mono text-foreground-subtle mt-3">
                  {project.stack.join(" · ")}
                </p>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-mono text-foreground-muted hover:text-foreground mt-4 transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
