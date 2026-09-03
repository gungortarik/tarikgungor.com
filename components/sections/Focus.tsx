interface FocusItem {
  number: string;
  category: string;
  title: string;
  description: string;
  status?: string;
}

const focusItems: FocusItem[] = [
  {
    number: "01",
    category: "BUILDING",
    title: "Personal systems",
    description:
      "Working on practical software projects and small tools that solve problems I actually have.",
  },
  {
    number: "02",
    category: "STUDYING",
    title: "Computer Systems Technology",
    description: "Currently studying at George Brown College in Toronto.",
  },
  {
    number: "03",
    category: "LEARNING",
    title: "Network+ → Security+",
    description:
      "Strengthening networking fundamentals and working toward the next layer of IT systems knowledge.",
  },
  {
    number: "04",
    category: "DOCUMENTING",
    title: "Work as it happens",
    description:
      "Projects, technical lessons, decisions, mistakes, and progress — documented honestly over time.",
  },
];

export function RightNow() {
  return (
    <section
      id="now"
      className="w-full max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-10 pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Section Header with Rule and Far-Right Accent Dot */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8 lg:mb-10">
        <h2 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink uppercase shrink-0">
          RIGHT NOW
        </h2>
        <div className="flex-1 h-[1px] bg-paper-border" />
        <span
          className="w-1.5 h-1.5 rounded-full bg-olive-indicator shrink-0"
          aria-hidden="true"
        />
      </div>

      {/* 4 Editorial Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-paper-border">
        {focusItems.map((item, index) => (
          <div
            key={item.category}
            className={`flex flex-col justify-between py-6 sm:py-2 ${
              index === 0
                ? "sm:pr-6 lg:pr-8 sm:pt-0"
                : index === focusItems.length - 1
                ? "sm:pl-6 lg:pl-8 sm:pt-0"
                : "sm:px-6 lg:px-8 sm:pt-0"
            }`}
          >
            <div>
              {/* Eyebrow: 01 — BUILDING */}
              <div className="text-[10px] sm:text-[10.5px] font-mono font-medium tracking-[0.2em] uppercase text-ink-subtle mb-2">
                {item.number} — {item.category}
              </div>

              {/* Title */}
              <h3 className="font-serif text-[20px] sm:text-[22px] text-ink font-normal tracking-tight">
                {item.title}
              </h3>

              {/* Small status (e.g. for Sonoma) */}
              {item.status && (
                <div className="mt-2">
                  <span className="inline-flex items-center text-[9.5px] font-mono font-medium px-2 py-0.5 rounded bg-paper-muted dark:bg-[#242420] text-olive-dark dark:text-[#a3b18a] border border-paper-border dark:border-white/5">
                    {item.status}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-[13px] sm:text-[13.5px] text-ink-muted leading-[1.65] mt-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const CurrentlyFocusing = RightNow;
