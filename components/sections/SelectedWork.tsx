import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProjects } from "@/lib/content/projects";

export function SelectedWork() {
  return (
    <section id="work" className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
      <RevealOnScroll>
        <SectionHeader
          label="Selected Work"
          title="Projects built from real problems."
          description="Software I build alongside school and IT work — starting with Sonoma as the flagship project."
        />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-8 mt-10">
        {featuredProjects.map((project, index) => (
          <RevealOnScroll key={project.slug} delay={index * 0.1}>
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl border border-surface-border bg-surface-elevated p-6 sm:p-8">
              {project.image && (
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-surface-border bg-surface-muted">
                  <Image
                    src={project.image}
                    alt={`${project.name} dashboard screenshot`}
                    fill
                    className="object-cover object-[14%_8%]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-serif text-[28px] sm:text-[32px] text-foreground">
                    {project.name}
                  </h3>
                  <Badge variant="accent">
                    {project.status === "in-progress" ? "In Progress" : project.status}
                  </Badge>
                </div>

                <p className="text-[15px] text-foreground-muted leading-relaxed mt-3">
                  {project.description}
                </p>

                <p className="text-[12px] font-mono text-foreground-subtle mt-3">
                  {project.stack.join(" · ")}
                </p>

                {project.href && (
                  <div className="mt-6">
                    <Button href={project.href} variant="secondary" size="sm">
                      View case study →
                    </Button>
                  </div>
                )}
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll>
        <div className="mt-8 text-center">
          <Button href="/work" variant="ghost">See all work →</Button>
        </div>
      </RevealOnScroll>
    </section>
  );
}
