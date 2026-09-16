import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { notes } from "@/lib/content/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Occasional writing by Tarik Gungor.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  return (
    <PageShell>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 border-b border-surface-border pb-10">
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-foreground-muted">
              Notes
            </p>
          </div>
          <div className="lg:col-span-8">
            <h1 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-foreground font-medium leading-[1.15] tracking-tight text-balance">
              Writing when there is something worth keeping.
            </h1>
            <p className="text-[16px] text-foreground-muted leading-[1.75] mt-6 max-w-[36rem]">
              A small archive — not a content machine. Pieces appear here when they’re ready.
            </p>
          </div>
        </div>

        <div className="mt-4">
          {notes.map((note) => (
            <article key={note.slug} className="grid lg:grid-cols-12 gap-6 py-10 border-b border-surface-border">
              <div className="lg:col-span-3">
                <span className="text-[11px] font-mono text-foreground-subtle tracking-wider uppercase">
                  {note.date} · {note.category}
                </span>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-serif text-[24px] sm:text-[28px] text-foreground">{note.title}</h2>
                <p className="text-[15px] text-foreground-muted font-medium mt-2">{note.subtitle}</p>
                <p className="text-[14px] text-foreground-muted leading-relaxed mt-3 max-w-[40rem]">{note.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
