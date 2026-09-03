import Image from "next/image";

export function DarkFeatured() {
  return (
    <section
      id="work"
      className="w-full bg-paper-muted/40 dark:bg-[#0c0c0b] text-ink dark:text-paper border-t border-b border-paper-border dark:border-white/14 py-12 sm:py-18 lg:py-22"
    >
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-7 xl:gap-10 items-start">
          {/* 1. FEATURED PROJECT — SONOMA */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between h-full lg:pr-7 xl:pr-9 lg:border-r lg:border-paper-border/50 dark:lg:border-white/[0.06]">
            <div>
              {/* Header Label with Rule */}
              <div className="flex items-center gap-3 mb-5 sm:mb-8">
                <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink-muted dark:text-white/50 uppercase shrink-0">
                  Featured Project
                </span>
                <div className="flex-1 h-[1px] bg-paper-border dark:bg-white/10" />
              </div>

              {/* Project Card: Screenshot Slot + Project Info (Enlarged ~18%, tighter gap) */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 xl:gap-5">
                {/* Real Sonoma Screenshot Frame (Enlarged 15-20%) */}
                <div
                  className="relative w-full max-w-[300px] sm:max-w-none sm:w-[330px] lg:w-[320px] xl:w-[380px] aspect-[16/9] sm:aspect-[16/11] rounded-xl bg-[#ded8cc] dark:bg-[#161614] border border-paper-border dark:border-white/10 overflow-hidden shrink-0 select-none shadow-xs dark:shadow-inner mx-auto sm:mx-0"
                  role="region"
                  aria-label="Sonoma Application Screenshot"
                >
                  <Image
                    src="/assets/projects/sonoma-dashboard.png"
                    alt="Sonoma private expense and document management dashboard"
                    fill
                    className="object-cover object-[14%_8%]"
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 330px, 380px"
                  />
                </div>

                {/* Project Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    {/* Title + Private Status Badge */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-serif text-[26px] sm:text-[28px] lg:text-[30px] text-ink dark:text-white font-normal tracking-tight">
                        Sonoma
                      </h3>
                      <span className="inline-flex items-center text-[9.5px] font-mono font-medium px-2.5 py-0.5 rounded bg-paper-muted dark:bg-[#242420] text-olive-dark dark:text-[#a3b18a] border border-paper-border dark:border-white/5">
                        Private · In Progress
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[13.5px] sm:text-[14px] text-ink-muted dark:text-white/65 leading-[1.65] mt-2.5 sm:mt-3 whitespace-pre-line">
                      Document management{"\n"}and expense tracking.{"\n"}Built with Next.js, TypeScript,{"\n"}and Tailwind CSS.
                    </p>
                  </div>

                  {/* Non-clickable Editorial Status */}
                  <div className="inline-flex items-center text-[12px] font-mono text-ink-subtle dark:text-white/40 mt-5 sm:mt-7 select-none">
                    <span>Private project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. RECENT NOTES (Center) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-full lg:px-7 xl:px-9 lg:border-r lg:border-paper-border/50 dark:lg:border-white/[0.06]">
            <div>
              {/* Header Label with Rule */}
              <div className="flex items-center gap-3 mb-5 sm:mb-8">
                <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink-muted dark:text-white/50 uppercase shrink-0">
                  Recent Notes
                </span>
                <div className="flex-1 h-[1px] bg-paper-border dark:bg-white/10" />
              </div>

              {/* Editorial State Content */}
              <div className="flex flex-col justify-between pt-1">
                <div>
                  <p className="font-serif text-[20px] sm:text-[22px] text-ink dark:text-white/90 font-normal leading-[1.35] tracking-tight">
                    Notes are being documented.
                  </p>
                  <p className="text-[13.5px] sm:text-[14px] text-ink-muted dark:text-white/60 leading-[1.65] mt-3 whitespace-pre-line">
                    Writing on technology, systems,{"\n"}projects, and lessons along the way.
                  </p>
                </div>

                <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-paper-border dark:border-white/[0.07]">
                  <span className="text-[11px] font-mono text-ink-subtle dark:text-white/40 tracking-wider">
                    Archive opening soon.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. ~/updates.log (Right, enlarged ~10%) */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div className="rounded-xl bg-[#171716] dark:bg-[#131311] border border-black/10 dark:border-white/[0.08] p-5.5 sm:p-6.5 lg:p-7 shadow-xl font-mono text-[12px] sm:text-[12.5px]">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.06]">
                <span className="text-white/90 font-mono text-[12.5px] sm:text-[13px] font-medium tracking-tight">
                  ~/updates.log
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
                  aria-label="Log active indicator"
                />
              </div>

              {/* Live Terminal System State */}
              <div className="space-y-3.5 text-[11.5px] sm:text-[12px] font-mono leading-relaxed">
                <div>
                  <span className="text-white/45 block text-[10px] tracking-tight">&gt; system</span>
                  <p className="text-white/85 mt-0.5">Personal site rebuild in progress.</p>
                </div>

                <div>
                  <span className="text-white/45 block text-[10px] tracking-tight">&gt; current</span>
                  <p className="text-white/85 mt-0.5">Building the foundation.</p>
                </div>

                <div>
                  <span className="text-white/45 block text-[10px] tracking-tight">&gt; next</span>
                  <p className="text-white/85 mt-0.5">Document real work as it happens.</p>
                </div>
              </div>

              {/* Terminal Cursor Line */}
              <div className="mt-4 text-white/40 font-mono text-xs select-none">
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
