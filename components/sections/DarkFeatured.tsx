import Image from "next/image";

export function DarkFeatured() {
  const recentNotes = [
    {
      date: "AUG 31",
      title: "The power of compound learning",
      href: "#notes",
    },
    {
      date: "AUG 28",
      title: "Notes on system design",
      href: "#notes",
    },
    {
      date: "AUG 24",
      title: "Building in public",
      href: "#notes",
    },
    {
      date: "AUG 21",
      title: "Toronto thoughts",
      href: "#notes",
    },
  ];

  const logEntries = [
    { date: "2026-08-31", message: "Progress in motion." },
    { date: "2026-08-28", message: "New ideas captured." },
    { date: "2026-08-24", message: "Building, learning, living." },
    { date: "2026-08-21", message: "Stay curious." },
  ];

  return (
    <section id="work" className="w-full bg-[#141413] text-paper border-t border-paper-border py-10 sm:py-18 lg:py-20">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 items-start">
          {/* 1. FEATURED PROJECT — SONOMA */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between h-full lg:pr-8 xl:pr-10 lg:border-r lg:border-white/10">
            <div>
              {/* Header Label with Rule */}
              <div className="flex items-center gap-3 mb-5 sm:mb-8">
                <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-white/50 uppercase shrink-0">
                  Featured Project
                </span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>

              {/* Project Card: Screenshot Slot + Project Info */}
              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 xl:gap-8">
                {/* Real Sonoma Screenshot Frame (Compact on mobile, 16:11 on desktop) */}
                <div
                  className="relative w-full max-w-[260px] sm:max-w-none sm:w-[280px] lg:w-[270px] xl:w-[320px] aspect-[16/9] sm:aspect-[16/11] rounded-xl bg-[#1e1e1c] border border-white/10 overflow-hidden shrink-0 select-none shadow-inner mx-auto sm:mx-0"
                  role="region"
                  aria-label="Sonoma Application Screenshot"
                >
                  <Image
                    src="/assets/projects/sonoma-dashboard.png"
                    alt="Sonoma document and expense management dashboard"
                    fill
                    className="object-cover object-[14%_8%]"
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 320px"
                  />
                </div>

                {/* Project Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    {/* Title + Private Status Badge */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-serif text-[26px] sm:text-[28px] lg:text-[30px] text-white font-normal tracking-tight">
                        Sonoma
                      </h3>
                      <span className="inline-flex items-center text-[9.5px] font-mono font-medium px-2.5 py-0.5 rounded bg-[#242420] text-[#a3b18a] border border-white/5">
                        Private · In Progress
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[13.5px] sm:text-[14px] text-white/65 leading-[1.65] mt-3 sm:mt-4 whitespace-pre-line">
                      Document management{"\n"}and expense tracking.{"\n"}Built with Next.js, TypeScript,{"\n"}and Tailwind CSS.
                    </p>
                  </div>

                  {/* Non-clickable Editorial Status */}
                  <div className="inline-flex items-center text-[12px] font-mono text-white/40 mt-6 sm:mt-8 select-none">
                    <span>Private project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. RECENT NOTES (Center) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-full lg:pr-8 xl:pr-10 lg:border-r lg:border-white/10">
            <div>
              {/* Header Label + View All Link */}
              <div className="flex items-center justify-between pb-3 mb-1 border-b border-white/10">
                <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-white/50 uppercase">
                  Recent Notes
                </span>
                <a
                  href="#notes"
                  className="text-[11px] font-mono font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1"
                >
                  View all <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Note Rows */}
              <div className="divide-y divide-white/[0.07]">
                {recentNotes.map((note) => (
                  <a
                    key={note.title}
                    href={note.href}
                    className="flex items-center justify-between py-3.5 sm:py-4 group hover:text-white transition-colors"
                  >
                    <div className="flex items-baseline gap-4 min-w-0 pr-2">
                      <span className="text-[11px] font-mono text-white/40 shrink-0 tracking-wider">
                        {note.date}
                      </span>
                      <span className="text-[13.5px] sm:text-[14px] text-white/85 group-hover:text-white transition-colors leading-snug truncate">
                        {note.title}
                      </span>
                    </div>
                    <span
                      className="text-white/40 group-hover:text-white text-xs transition-transform group-hover:translate-x-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 3. ~/updates.log (Right) */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div className="rounded-xl bg-[#181816] border border-white/[0.08] p-5 sm:p-6 shadow-xl font-mono text-xs">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                <span className="text-white/85 font-mono text-[12px] font-medium tracking-tight">
                  ~/updates.log
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
                  aria-label="Log active indicator"
                />
              </div>

              {/* Log Entries */}
              <div className="space-y-2.5 text-[11px] text-white/70 leading-relaxed">
                {logEntries.map((entry) => (
                  <div key={entry.date} className="flex items-start gap-3">
                    <span className="text-white/40 font-mono shrink-0">{entry.date}</span>
                    <span className="text-white/85 font-mono leading-snug">{entry.message}</span>
                  </div>
                ))}
              </div>

              {/* Terminal Cursor Line */}
              <div className="mt-4 text-white/40 font-mono text-xs">
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
