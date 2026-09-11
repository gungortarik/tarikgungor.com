import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { renderMarkdownBold } from "@/lib/utils/render-markdown-bold";
import { experiences } from "@/lib/content/experience";

export function ExperienceSnapshot() {
  return (
    <section
      id="experience"
      className="w-full bg-surface-muted/40 border-y border-surface-border py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <SectionHeader
            label="Experience"
            title="IT work across real business environments."
            description="Supporting endpoints, networks, and users — with measurable scope across multiple organizations."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={exp.company} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-surface-border bg-surface-elevated p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-[20px] text-foreground">{exp.company}</h3>
                  <span className="text-[11px] font-mono text-foreground-subtle shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-foreground-muted mt-1">{exp.role}</p>
                <p className="text-[11px] font-mono text-foreground-subtle mt-1">{exp.location}</p>
                <ul className="mt-4 space-y-2 text-[13px] text-foreground-muted leading-relaxed">
                  {exp.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-accent shrink-0">·</span>
                      <span>{renderMarkdownBold(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
