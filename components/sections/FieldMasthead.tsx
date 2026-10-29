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
      className="bg-depth text-on-depth relative overflow-hidden"
      aria-labelledby="field-masthead-heading"
      data-field-chapter="masthead"
    >
      <FieldReveal>
        <div className="page-pad page-width">
          <div className="relative flex flex-wrap items-center justify-between gap-4 py-4 sm:py-5">
            <p
              data-telemetry
              className="field-meta flex items-center gap-3 text-on-depth-muted"
            >
              <span
                className="h-1.5 w-1.5 bg-accent shadow-[0_0_10px_var(--accent)]"
                aria-hidden="true"
              />
              Public field system
            </p>
            <div data-telemetry className="flex items-center gap-6">
              <p className="field-meta hidden sm:block text-on-depth-subtle">
                SYS.STAT / ACTIVE
              </p>
              <p className="field-meta text-on-depth-subtle">{profile.location}</p>
            </div>
            <div
              data-grid-h
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px bg-on-depth-border/60"
            />
          </div>

          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 py-14 sm:py-20 lg:py-24">
            <div className="lg:col-span-9">
              <p data-telemetry className="field-meta text-on-depth-subtle">
                Systems / study / things made
              </p>
              <h1
                id="field-masthead-heading"
                className="mt-6 field-display max-w-[13ch] sm:max-w-[16ch] lg:max-w-none text-balance"
              >
                <span className="block overflow-hidden pb-[0.07em]">
                  <span data-line-inner className="block">
                    Building systems by day.
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-line-inner className="block text-on-depth-muted">
                    Building tools for real problems.
                  </span>
                </span>
              </h1>

              {/* Architectural Oxide Baseline Gauge */}
              <div
                className="mt-7 sm:mt-8 relative h-px w-full max-w-[38rem] bg-on-depth-border/40"
                aria-hidden="true"
              >
                <div
                  data-grid-oxide
                  className="absolute inset-y-0 left-0 w-2/5 bg-accent shadow-[0_0_12px_var(--accent)]"
                />
              </div>

              <div className="mt-7 sm:mt-9 grid sm:grid-cols-12 gap-6 sm:gap-8 items-end">
                <p
                  data-telemetry
                  className="sm:col-span-7 max-w-[34rem] text-[15px] sm:text-[17px] leading-[1.7] text-on-depth-muted"
                >
                  Documenting the path — work, systems, study, and the things I make along the way.
                </p>
                <nav
                  data-telemetry
                  aria-label="Explore the index"
                  className="sm:col-span-5 flex flex-wrap sm:justify-end gap-x-5 gap-y-2"
                >
                  {indexLinks.map((item) => (
                    <Link
                      key={item.href}
                      className="group min-h-11 inline-flex items-center gap-2 field-meta text-on-depth hover:text-accent transition-colors"
                      href={item.href}
                    >
                      <span
                        className="text-on-depth-subtle group-hover:text-accent transition-colors"
                        aria-hidden="true"
                      >
                        {item.number}
                      </span>
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-y-0.5"
                      >
                        ↓
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <aside className="hidden lg:flex lg:col-span-3 relative flex-col justify-between pl-6 xl:pl-8">
              <div
                data-grid-v
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-px bg-on-depth-border/60"
              />
              <div data-telemetry className="space-y-2">
                <p className="field-meta text-on-depth-subtle">Index / 01—06</p>
                <p className="font-mono text-[11px] text-accent">FIELD.REV // 02</p>
              </div>
              <p
                data-telemetry
                className="max-w-[15ch] font-display text-[22px] leading-[1.2] tracking-[-0.025em] text-on-depth-muted"
              >
                A working record of what I build, learn, and keep figuring out.
              </p>
            </aside>
          </div>
        </div>
        <div className="page-pad">
          <div
            data-grid-h
            className="page-width h-px bg-on-depth-border/60"
          />
        </div>
      </FieldReveal>
    </section>
  );
}
