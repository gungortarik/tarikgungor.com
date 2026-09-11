import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { notes } from "@/lib/content/notes";

export function NotesTeaser() {
  const latest = notes[0];

  return (
    <section id="notes" className="w-full bg-depth text-surface py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <SectionHeader
            label="Notes"
            title="Writing and thinking in progress."
            description="Occasional pieces about work, school, and the trade-offs in between."
          />
        </RevealOnScroll>

        {latest && (
          <RevealOnScroll delay={0.1}>
            <article className="mt-10 max-w-[640px] rounded-2xl border border-depth-border bg-depth-elevated p-6 sm:p-8">
              <span className="text-[11px] font-mono text-surface/50 tracking-wider uppercase">
                {latest.date} · {latest.category}
              </span>
              <h3 className="font-serif text-[24px] sm:text-[28px] text-surface mt-3">
                {latest.title}
              </h3>
              <p className="text-[15px] text-surface/70 font-medium mt-2">{latest.subtitle}</p>
              <p className="text-[14px] text-surface/60 leading-relaxed mt-3">{latest.excerpt}</p>
            </article>
          </RevealOnScroll>
        )}

        <RevealOnScroll delay={0.15}>
          <div className="mt-8">
            <Button href="/notes" variant="secondary">
              View notes →
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
