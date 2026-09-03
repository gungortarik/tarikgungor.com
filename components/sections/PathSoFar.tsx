interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2023",
    title: "BCIT — Technology Support Professional",
    description:
      "Completed hands-on training across Windows infrastructure, networking, virtualization, Linux, and IT support.",
  },
  {
    year: "2023",
    title: "Payment Source — Technology Support Intern",
    description:
      "Worked on endpoint management, migration, patching, inventory, and day-to-day technology support.",
  },
  {
    year: "2026",
    title: "George Brown College",
    description:
      "Started the Computer Systems Technology advanced diploma and returned deeper into networking, Linux, Windows systems, and infrastructure.",
  },
  {
    year: "2026",
    title: "Sonoma",
    description:
      "Began building a private software product around expenses, documents, and real personal workflows.",
  },
];

export function PathSoFar() {
  return (
    <section
      id="path"
      className="w-full max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20"
    >
      {/* Section Header with Rule and Far-Right Accent Dot */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8 lg:mb-10">
        <h2 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink uppercase shrink-0">
          PATH SO FAR
        </h2>
        <div className="flex-1 h-[1px] bg-paper-border" />
        <span
          className="w-1.5 h-1.5 rounded-full bg-olive-indicator shrink-0"
          aria-hidden="true"
        />
      </div>

      {/* Intro */}
      <p className="font-serif text-[22px] sm:text-[26px] lg:text-[28px] text-ink font-normal leading-[1.3] tracking-tight max-w-[620px] mb-10 sm:mb-14">
        Not a perfect roadmap. Just the path that actually happened.
      </p>

      {/* Timeline Milestones Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
        {milestones.map((milestone, idx) => (
          <div
            key={idx}
            className="relative pt-6 border-t border-paper-border"
          >
            {/* Timeline node accent */}
            <span
              className="absolute -top-[4.5px] left-0 w-2 h-2 rounded-full bg-olive-indicator"
              aria-hidden="true"
            />

            {/* Milestone Year */}
            <span className="text-[11px] sm:text-[11.5px] font-mono font-medium tracking-wider text-ink-muted">
              {milestone.year}
            </span>

            {/* Milestone Title */}
            <h3 className="font-serif text-[18px] sm:text-[19px] text-ink font-normal tracking-tight mt-2.5">
              {milestone.title}
            </h3>

            {/* Milestone Description */}
            <p className="text-[13px] sm:text-[13.5px] text-ink-muted leading-[1.65] mt-3">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
