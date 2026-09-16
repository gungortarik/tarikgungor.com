import Link from "next/link";
import { nowSignals } from "@/lib/content/now";

export function NowSignal() {
  return (
    <section
      className="border-b border-surface-border bg-surface"
      aria-labelledby="now-heading"
      data-field-chapter="now"
    >
      <div className="page-pad page-width py-10 sm:py-12">
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2 id="now-heading" className="field-meta text-foreground-subtle">
            Now
          </h2>
          <p className="field-meta text-foreground-subtle hidden sm:block">Active threads</p>
        </div>

        <ul className="divide-y divide-surface-border border-y border-surface-border">
          {nowSignals.map((signal, index) => {
            const className =
              "group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 py-5 min-h-11 hover:bg-surface-muted/40 -mx-2 px-2 transition-colors";

            const inner = (
              <>
                <span
                  className="font-mono text-[11px] text-accent tabular-nums shrink-0 w-8"
                  {...(index === 0 ? { "data-now-mark": "" } : {})}
                >
                  0{index + 1}
                </span>
                <span className="field-meta text-foreground-subtle shrink-0 w-[5.5rem]">
                  {signal.label}
                </span>
                <span className="text-[15px] sm:text-[16px] text-foreground leading-snug flex-1">
                  {signal.title}
                </span>
                <span
                  className="text-foreground-subtle group-hover:text-accent transition-colors shrink-0"
                  aria-hidden="true"
                >
                  →
                </span>
              </>
            );

            return (
              <li key={signal.id} data-now-row>
                {signal.external ? (
                  <a
                    href={signal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={signal.href} className={className}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
