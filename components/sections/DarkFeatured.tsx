import Image from "next/image";

export function DarkFeatured() {
  return (
    <section
      id="projects"
      className="w-full bg-paper-muted/40 dark:bg-[#0c0c0b] text-ink dark:text-paper border-t border-b border-paper-border dark:border-white/14 py-12 sm:py-18 lg:py-22"
    >
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-7 xl:gap-10 items-start">
          {/* 1. PROJECTS — TWO-PROJECT EDITORIAL LAYOUT */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between h-full lg:pr-7 xl:pr-9 lg:border-r lg:border-paper-border/50 dark:lg:border-white/[0.06]">
            <div>
              {/* Header Label with Rule */}
              <div className="flex items-center gap-3 mb-5 sm:mb-8">
                <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink-muted dark:text-white/50 uppercase shrink-0">
                  Projects
                </span>
                <div className="flex-1 h-[1px] bg-paper-border dark:bg-white/10" />
              </div>

              {/* Project 1: Sonoma */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                {/* Real Sonoma Screenshot Frame */}
                <div
                  className="relative w-full max-w-[280px] sm:max-w-none sm:w-[240px] lg:w-[230px] xl:w-[260px] aspect-[16/10] rounded-xl bg-[#ded8cc] dark:bg-[#161614] border border-paper-border dark:border-white/10 overflow-hidden shrink-0 select-none shadow-xs dark:shadow-inner mx-auto sm:mx-0"
                  role="region"
                  aria-label="Sonoma Application Screenshot"
                >
                  <Image
                    src="/assets/projects/sonoma-dashboard.png"
                    alt="Sonoma private expense and document management dashboard"
                    fill
                    className="object-cover object-[14%_8%]"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 230px, 260px"
                  />
                </div>

                {/* Project Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    {/* Title + Private Status Badge */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-serif text-[24px] sm:text-[26px] text-ink dark:text-white font-normal tracking-tight">
                        Sonoma
                      </h3>
                      <span className="inline-flex items-center text-[9.5px] font-mono font-medium px-2 py-0.5 rounded bg-paper-muted dark:bg-[#242420] text-olive-dark dark:text-[#a3b18a] border border-paper-border dark:border-white/5">
                        Private · In Progress
                      </span>
                    </div>

                    {/* Copy */}
                    <p className="text-[13px] sm:text-[13.5px] text-ink-muted dark:text-white/65 leading-[1.65] mt-2 sm:mt-2.5">
                      A private expense and document management tool I built for personal use.
                    </p>

                    {/* Secondary */}
                    <p className="text-[11.5px] sm:text-[12px] font-mono text-ink-subtle dark:text-white/45 mt-2.5">
                      Next.js · TypeScript · Tailwind CSS
                    </p>
                  </div>

                  {/* Non-clickable Editorial Status */}
                  <div className="inline-flex items-center text-[11.5px] font-mono text-ink-subtle dark:text-white/40 mt-3.5 sm:mt-4 select-none">
                    <span>Private project</span>
                  </div>
                </div>
              </div>

              {/* Restrained Hairline Divider */}
              <div className="w-full h-[1px] bg-paper-border/60 dark:bg-white/[0.07] my-6 sm:my-7" />

              {/* Project 2: CertForge (Deliberate text-led editorial structure matching Sonoma's visual weight) */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                {/* Deliberate Editorial Spec Frame (Matches Sonoma frame size without pretending to be an image) */}
                <div
                  className="w-full max-w-[280px] sm:max-w-none sm:w-[240px] lg:w-[230px] xl:w-[260px] aspect-[16/10] rounded-xl bg-paper/90 dark:bg-[#141412] border border-paper-border dark:border-white/10 p-3.5 sm:p-4 flex flex-col justify-between shrink-0 select-none mx-auto sm:mx-0 font-mono shadow-xs dark:shadow-inner"
                  role="region"
                  aria-label="CertForge Curriculum and Scope"
                >
                  <div className="flex items-center justify-between text-[10px] text-ink-subtle dark:text-white/40 tracking-wider uppercase">
                    <span>Focus Area</span>
                    <span>Self-directed</span>
                  </div>

                  <div className="space-y-1 my-auto py-1 text-[11.5px] font-mono text-ink/85 dark:text-white/85 leading-snug">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator/80" />
                      <span>CompTIA Network+</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator/80" />
                      <span>Cisco CCNA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator/80" />
                      <span>Systems &amp; Routing</span>
                    </div>
                  </div>

                  <div className="text-[9.5px] text-ink-subtle dark:text-white/35 flex items-center justify-between border-t border-paper-border/60 dark:border-white/5 pt-2">
                    <span>Study Platform</span>
                    <span>Web App</span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    {/* Title */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-serif text-[24px] sm:text-[26px] text-ink dark:text-white font-normal tracking-tight">
                        CertForge
                      </h3>
                    </div>

                    {/* Copy */}
                    <p className="text-[13px] sm:text-[13.5px] text-ink-muted dark:text-white/65 leading-[1.65] mt-2 sm:mt-2.5">
                      An IT certification study platform I built around Network+ and CCNA preparation.
                    </p>

                    {/* Secondary */}
                    <p className="text-[11.5px] sm:text-[12px] font-mono text-ink-subtle dark:text-white/45 mt-2.5">
                      Next.js · TypeScript · Tailwind CSS
                    </p>
                  </div>

                  {/* Understated GitHub Link */}
                  <div className="inline-flex items-center text-[11.5px] font-mono mt-3.5 sm:mt-4">
                    <a
                      href="https://github.com/gungortarik/certforge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-ink-muted dark:text-white/60 hover:text-ink dark:hover:text-white transition-colors group"
                    >
                      <span>GitHub</span>
                      <span className="text-[10px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. RECENT NOTES (Center) */}
          <div id="notes" className="lg:col-span-3 xl:col-span-3 flex flex-col justify-between h-full lg:px-6 xl:px-8 lg:border-r lg:border-paper-border/50 dark:lg:border-white/[0.06]">
            <div>
              {/* Header Label with Rule */}
              <div className="flex items-center gap-3 mb-5 sm:mb-8">
                <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink-muted dark:text-white/50 uppercase shrink-0">
                  Recent Notes
                </span>
                <div className="flex-1 h-[1px] bg-paper-border dark:bg-white/10" />
              </div>

              {/* Real Newsletter Piece */}
              <div className="flex flex-col justify-between pt-1">
                <div>
                  <span className="text-[10.5px] sm:text-[11px] font-mono text-ink-subtle dark:text-white/45 tracking-wider uppercase block mb-2.5">
                    July 2026 · Newsletter
                  </span>

                  <h3 className="font-serif text-[22px] sm:text-[24px] text-ink dark:text-white font-normal leading-[1.2] tracking-tight">
                    Flexible, but Not Free
                  </h3>

                  <p className="text-[13px] sm:text-[13.5px] text-ink/80 dark:text-white/80 font-medium leading-[1.45] mt-2">
                    The hidden cost of gig work for Toronto polytechnic students
                  </p>

                  <p className="text-[12.5px] sm:text-[13px] text-ink-muted dark:text-white/60 leading-[1.65] mt-3">
                    A piece about the trade-offs of app-based gig work while studying in Toronto.
                  </p>
                </div>

                <div className="pt-5 sm:pt-6 mt-6 sm:mt-8 border-t border-paper-border dark:border-white/[0.07]">
                  <span className="text-[11px] font-mono text-ink-subtle dark:text-white/40 tracking-wider">
                    More notes will appear here as the archive grows.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. ~/updates.log (Right, enlarged ~10%) */}
          <div id="updates" className="lg:col-span-3 xl:col-span-3">
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
                  <span className="text-white/45 block text-[10px] tracking-tight">&gt; site</span>
                  <p className="text-white/85 mt-0.5">Personal site rebuild in progress.</p>
                </div>

                <div>
                  <span className="text-white/45 block text-[10px] tracking-tight">&gt; building</span>
                  <p className="text-white/85 mt-0.5">Sonoma · CertForge</p>
                </div>

                <div>
                  <span className="text-white/45 block text-[10px] tracking-tight">&gt; learning</span>
                  <p className="text-white/85 mt-0.5">Computer Systems Technology · Network+</p>
                </div>

                <div>
                  <span className="text-white/45 block text-[10px] tracking-tight">&gt; next</span>
                  <p className="text-white/85 mt-0.5">Document the work as it happens.</p>
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
