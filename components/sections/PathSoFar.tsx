import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { milestones } from "@/lib/content/timeline";

export function PathSoFar() {
  return (
    <section id="path" className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
      <RevealOnScroll>
        <SectionHeader
          label="Path So Far"
          title="Not a perfect roadmap. Just the path that actually happened."
        />
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {milestones.map((milestone, index) => (
          <RevealOnScroll key={milestone.title} delay={index * 0.08}>
            <div className="relative pt-5 border-t border-surface-border">
              <span
                className="absolute -top-[5px] left-0 w-2 h-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="text-[11px] font-mono text-foreground-muted">{milestone.year}</span>
              <h3 className="font-serif text-[18px] text-foreground mt-2">{milestone.title}</h3>
              <p className="text-[13px] text-foreground-muted leading-relaxed mt-2">
                {milestone.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
