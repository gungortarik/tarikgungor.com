import Link from "next/link";
import { FieldReveal } from "@/components/motion/FieldReveal";
import { profile } from "@/lib/content/profile";

const indexLinks = [
  { label: "Work", href: "#work", number: "01" },
  { label: "Lab", href: "#lab", number: "02" },
  { label: "Path", href: "#path", number: "03" },
];

export function FieldMasthead() {
  return (
    <section
      className="bg-depth text-on-depth"
      aria-labelledby="field-masthead-heading"
      data-field-chapter="masthead"
    >
      <div className="page-pad page-width">
        <div className="flex items-center justify-between gap-4 border-b border-on-depth-border/60 py-4 sm:py-5">
          <p className="field-meta flex items-center gap-3 text-on-depth-muted">
            <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
            Public field system
          </p>
          <p className="field-meta text-on-depth-subtle">{profile.location}</p>
        </div>

        <FieldReveal>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 py-14 sm:py-20 lg:py-24">
            <div className="lg:col-span-9">
              <p className="field-meta text-on-depth-subtle">Systems / study / things made</p>
              <h1
                id="field-masthead-heading"
                className="mt-6 field-display max-w-[13ch] sm:max-w-[16ch] lg:max-w-none text-balance"
              >
                Building systems by day.
                <br />
                <span className="text-on-depth-muted">Building tools for real problems.</span>
              </h1>

              <div className="mt-8 sm:mt-10 grid sm:grid-cols-12 gap-6 sm:gap-8 items-end">
                <p className="sm:col-span-7 max-w-[34rem] text-[15px] sm:text-[17px] leading-[1.7] text-on-depth-muted">
                  Documenting the path — work, systems, study, and the things I make along the way.
                </p>
                <nav
                  aria-label="Explore the index"
                  className="sm:col-span-5 flex flex-wrap sm:justify-end gap-x-5 gap-y-2"
                >
                  {indexLinks.map((item) => (
                    <Link
                      key={item.href}
                      className="group min-h-11 inline-flex items-center gap-2 field-meta text-on-depth hover:text-accent transition-colors"
                      href={item.href}
                    >
                      <span className="text-on-depth-subtle group-hover:text-accent" aria-hidden="true">
                        {item.number}
                      </span>
                      {item.label}
                      <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">↓</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <aside className="hidden lg:flex lg:col-span-3 flex-col justify-between border-l border-on-depth-border/60 pl-6 xl:pl-8">
              <p className="field-meta text-on-depth-subtle">Index / 01—06</p>
              <p className="max-w-[15ch] font-display text-[22px] leading-[1.2] tracking-[-0.025em] text-on-depth-muted">
                A working record of what I build, learn, and keep figuring out.
              </p>
            </aside>
          </div>
        </FieldReveal>
      </div>
      <div className="page-pad">
        <div className="page-width h-px bg-on-depth-border/60" />
      </div>
    </section>
  );
}
