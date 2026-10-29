import { TransitionLink } from "@/components/motion/TransitionLink";
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
          <h2 id="now-heading" className="field-meta flex items-center gap-2.5 text-foreground-subtle">
            <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
            Now / Live signal
          </h2>
          <p className="field-meta text-foreground-subtle hidden sm:block">Active threads</p>
        </div>

        <ul className="divide-y divide-surface-border border-y border-surface-border">
          {nowSignals.map((signal, index) => {
            const num = `0${index + 1}`;
            const className =
              "group relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 py-5 min-h-11 hover:bg-surface-muted/40 -mx-2 px-3 transition-colors";

            const inner = (
              <>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-accent origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
                />
                <span
                  className="relative overflow-hidden h-4 w-8 font-mono text-[11px] text-accent tabular-nums shrink-0 inline-flex items-center"
                  {...(index === 0 ? { "data-now-mark": "" } : {})}
                >
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {num}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center text-foreground translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                  >
                    {num}
                  </span>
                </span>
                <span className="field-meta text-foreground-subtle shrink-0 w-[5.5rem]">
                  {signal.label}
                </span>
                <span className="text-[15px] sm:text-[16px] text-foreground leading-snug flex-1">
                  {signal.title}
                </span>
                <span
                  className="text-foreground-subtle group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0"
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
                  <TransitionLink href={signal.href} className={className}>
                    {inner}
                  </TransitionLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
