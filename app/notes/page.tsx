import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { notes } from "@/lib/content/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Writing and thinking by Tarik Gungor.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  return (
    <PageShell>
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <RevealOnScroll>
          <SectionHeader
            label="Notes"
            title="Writing and thinking in progress."
            description="Occasional pieces about work, school, and the trade-offs in between."
          />
        </RevealOnScroll>

        <div className="mt-10 space-y-6">
          {notes.map((note, index) => (
            <RevealOnScroll key={note.slug} delay={index * 0.08}>
              <article className="rounded-2xl border border-surface-border bg-surface-elevated p-6 sm:p-8">
                <span className="text-[11px] font-mono text-foreground-subtle tracking-wider uppercase">
                  {note.date} · {note.category}
                </span>
                <h2 className="font-serif text-[24px] sm:text-[28px] text-foreground mt-3">
                  {note.title}
                </h2>
                <p className="text-[15px] text-foreground-muted font-medium mt-2">{note.subtitle}</p>
                <p className="text-[14px] text-foreground-muted leading-relaxed mt-3">{note.excerpt}</p>
              </article>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={0.2}>
            <p className="text-[13px] font-mono text-foreground-subtle pt-4">
              More notes will appear here as the archive grows.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </PageShell>
  );
}
