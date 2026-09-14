import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { notes } from "@/lib/content/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Occasional writing by Tarik Gungor.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  return (
    <PageShell>
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <SectionHeader
          label="Notes"
          title="Writing when there is something worth keeping."
          description="A small archive — not a content machine. Pieces appear here when they’re ready."
        />

        <div className="mt-10 space-y-10">
          {notes.map((note) => (
            <article key={note.slug} className="pt-8 border-t border-surface-border">
              <span className="text-[11px] font-mono text-foreground-subtle tracking-wider uppercase">
                {note.date} · {note.category}
              </span>
              <h2 className="font-serif text-[24px] sm:text-[28px] text-foreground mt-3">
                {note.title}
              </h2>
              <p className="text-[15px] text-foreground-muted font-medium mt-2">{note.subtitle}</p>
              <p className="text-[14px] text-foreground-muted leading-relaxed mt-3">{note.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
