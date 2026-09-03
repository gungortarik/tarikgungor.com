export function Hero() {
  return (
    <section className="relative w-full max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-10 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
      <div className="flex gap-5 sm:gap-6 lg:gap-6.5 xl:gap-7 items-stretch">
        {/* Left Metadata Rail (Desktop) */}
        <div
          className="hidden lg:flex flex-col items-center justify-between select-none w-6 shrink-0 text-ink-subtle pt-0 pb-1"
          aria-hidden="true"
        >
          <span className="text-[11px] font-mono font-medium tracking-wider text-ink-muted leading-none">01</span>
          <div className="w-[1px] bg-paper-border flex-1 my-3 min-h-[40px]" />
          <div className="writing-mode-vertical text-[9.5px] font-mono font-medium tracking-[0.32em] uppercase text-ink-muted/80 my-2">
            Systems • Ideas • Impact
          </div>
          <div className="w-[1px] bg-paper-border flex-1 my-3 min-h-[40px]" />
          <div className="w-1.5 h-1.5 rounded-full bg-olive-indicator" />
        </div>

        {/* Hero Main Content & Media Grid */}
        <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
          {/* Left Column: Editorial Headline, Intro & CTA */}
          <div className="w-full lg:max-w-[490px] xl:max-w-[520px] flex flex-col items-start shrink-0">
            {/* Location & Status Eyebrow */}
            <div className="flex flex-col items-start gap-1 mb-5 sm:mb-6 lg:mb-7">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-ink-muted leading-none">
                Toronto, Canada
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-medium tracking-[0.22em] uppercase text-ink-subtle mt-0.5">
                A Life in Progress
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-4 h-[1.5px] bg-olive-indicator/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[38px] sm:text-[46px] lg:text-[54px] xl:text-[58px] leading-[1.06] sm:leading-[1.06] tracking-[-0.018em] text-ink font-normal">
              <span className="block whitespace-nowrap">Building systems.</span>
              <span className="block whitespace-nowrap">Learning continuously.</span>
              <span className="block whitespace-nowrap">
                <span className="italic text-olive mr-2 sm:mr-2.5">Living</span>
                <span>intentionally.</span>
              </span>
            </h1>

            {/* Code / Technical Symbol */}
            <div className="font-mono text-[11px] sm:text-xs text-ink-subtle mt-6 sm:mt-7 lg:mt-8 tracking-widest">
              &lt;/&gt;
            </div>

            {/* Subcopy */}
            <p className="text-[14px] sm:text-[15.5px] text-ink-muted leading-[1.65] max-w-[490px] mt-3.5 sm:mt-4">
              I&apos;m Tarik Gungor. I study Computer Systems Technology in Toronto and build
              practical tools while learning how systems work — from networks and Linux to
              software and design. This site is where I document the work, the lessons, and the life
              around them.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mt-7 sm:mt-9">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#141413] text-[#f4f0e8] dark:bg-[#f4f0e8] dark:text-[#141413] dark:hover:bg-[#e8e2d5] font-semibold text-xs sm:text-[13px] tracking-tight hover:bg-ink active:scale-[0.99] transition-all text-center"
              >
                <span>Explore my work</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#updates"
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-[13px] font-semibold text-ink-muted hover:text-ink transition-colors group py-1"
              >
                <span>Latest updates</span>
                <span
                  className="w-2 h-2 rounded-full bg-status-green transition-transform group-hover:scale-125"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Media Frame & Technical ~/now Card (Shifted 120-150px inward, unified composition) */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end lg:-translate-x-[120px] xl:-translate-x-[150px] relative shrink-0 mt-4 sm:mt-6 lg:mt-0">
            {/* Subtle Dot Matrix Grid in Background (Desktop) */}
            <div
              className="hidden sm:block absolute -top-8 -right-8 w-48 h-40 bg-dot-pattern opacity-35 pointer-events-none"
              aria-hidden="true"
            />

            {/* Media Stack Composition */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:w-[385px] xl:w-[400px] flex flex-col sm:block mx-auto lg:mx-0">
              {/* Media Area (Rich warm beige frame, clearly visible and tangible) */}
              <div
                className="relative rounded-2xl overflow-hidden border border-[#141413]/18 dark:border-white/18 bg-gradient-to-br from-[#ded7c8] via-[#ded7c8] to-[#d4ccbd] dark:from-[#21201d] dark:to-[#1a1917] w-full aspect-[16/10] sm:aspect-auto sm:h-[480px] lg:h-[490px] xl:h-[500px] shadow-[0_12px_32px_rgba(20,20,19,0.08)] select-none"
                role="region"
                aria-label="Media placeholder"
              >
                {/* Subtle Framing Crosshair Accents */}
                <div className="absolute top-4 right-4 text-[#141413]/25 dark:text-white/20 font-mono text-[11px] select-none" aria-hidden="true">+</div>
                <div className="absolute bottom-4 left-4 text-[#141413]/25 dark:text-white/20 font-mono text-[11px] select-none" aria-hidden="true">+</div>

                {/* Geographic Coordinates Translucent Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 rounded-md bg-paper/95 backdrop-blur-xs border border-paper-border px-2.5 py-1.5 sm:py-2 text-[9.5px] sm:text-[10px] font-mono text-ink leading-tight shadow-xs select-none z-10">
                  <div className="font-medium tracking-wide">43.6532° N</div>
                  <div className="font-medium tracking-wide">79.3832° W</div>
                  <div className="text-[8.5px] sm:text-[9px] text-ink-muted font-bold tracking-widest uppercase mt-0.5 flex items-center gap-1">
                    Toronto <span>→</span>
                  </div>
                </div>
              </div>

              {/* Overlapping ~/now Card (35-45% overlap anchored firmly over the frame) */}
              <div className="-mt-8 sm:mt-0 sm:absolute top-[22%] sm:-right-[125px] md:-right-[130px] lg:-right-[135px] w-[92%] sm:w-[225px] mx-auto sm:mx-0 rounded-2xl bg-[#171716] border border-white/[0.08] p-4 sm:p-4.5 shadow-[0_22px_48px_rgba(0,0,0,0.42)] text-paper font-mono z-20">
                {/* Header */}
                <div className="flex items-center justify-between pb-3">
                  <span className="text-white/90 font-mono text-[12px] font-medium tracking-tight">
                    ~/now
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.5)]"
                    aria-label="Active status indicator"
                  />
                </div>

                {/* Content Sections */}
                <div className="space-y-3.5 text-[10px]">
                  {/* Focus */}
                  <div>
                    <span className="text-white/45 block text-[10px] font-mono tracking-tight">&gt; focus</span>
                    <p className="text-white/95 font-mono text-[11.5px] leading-[1.45] mt-1">
                      Building things that solve problems.
                    </p>
                  </div>

                  {/* Status */}
                  <div>
                    <span className="text-white/45 block text-[10px] font-mono tracking-tight">&gt; status</span>
                    <div className="flex items-center gap-1 text-white/95 mt-1 text-[11.5px] font-mono">
                      <span className="text-white/40">[</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block mx-0.5" />
                      <span className="text-white/40">]</span>
                      <span className="text-white/95 font-mono ml-1">In Progress</span>
                    </div>
                  </div>

                  {/* Mindset */}
                  <div>
                    <span className="text-white/45 block text-[10px] font-mono tracking-tight">&gt; mindset</span>
                    <div className="text-[10.5px] font-mono leading-[1.5] text-white/85 mt-1">
                      <span className="text-white/40">&#123;</span>
                      <div className="pl-3.5 space-y-0.5">
                        <div>curious: <span className="text-[#e5c890]">true</span>,</div>
                        <div>consistent: <span className="text-[#e5c890]">true</span>,</div>
                        <div>impact: <span className="text-[#a6d189]">&apos;real&apos;</span></div>
                      </div>
                      <span className="text-white/40">&#125;</span>
                    </div>
                  </div>

                  {/* Dot Matrix World Map Silhouette */}
                  <div className="py-1 flex justify-center opacity-35" aria-hidden="true">
                    <svg
                      viewBox="0 0 160 55"
                      fill="currentColor"
                      className="w-full max-w-[155px] h-auto text-white"
                    >
                      {/* Americas */}
                      <circle cx="20" cy="12" r="1.1" />
                      <circle cx="26" cy="10" r="1.1" />
                      <circle cx="32" cy="14" r="1.1" />
                      <circle cx="24" cy="18" r="1.1" />
                      <circle cx="30" cy="20" r="1.1" />
                      <circle cx="28" cy="26" r="1.1" />
                      <circle cx="34" cy="30" r="1.1" />
                      <circle cx="38" cy="36" r="1.1" />
                      <circle cx="36" cy="42" r="1.1" />
                      {/* Europe & Africa */}
                      <circle cx="72" cy="12" r="1.1" />
                      <circle cx="78" cy="10" r="1.1" />
                      <circle cx="84" cy="14" r="1.1" />
                      <circle cx="76" cy="18" r="1.1" />
                      <circle cx="82" cy="22" r="1.1" />
                      <circle cx="78" cy="28" r="1.1" />
                      <circle cx="84" cy="32" r="1.1" />
                      <circle cx="86" cy="38" r="1.1" />
                      <circle cx="82" cy="42" r="1.1" />
                      {/* Asia & Australia */}
                      <circle cx="102" cy="12" r="1.1" />
                      <circle cx="110" cy="10" r="1.1" />
                      <circle cx="118" cy="14" r="1.1" />
                      <circle cx="126" cy="16" r="1.1" />
                      <circle cx="108" cy="20" r="1.1" />
                      <circle cx="116" cy="22" r="1.1" />
                      <circle cx="124" cy="24" r="1.1" />
                      <circle cx="132" cy="26" r="1.1" />
                      <circle cx="114" cy="30" r="1.1" />
                      <circle cx="122" cy="32" r="1.1" />
                      <circle cx="132" cy="40" r="1.1" />
                      <circle cx="138" cy="42" r="1.1" />
                      <circle cx="134" cy="46" r="1.1" />
                    </svg>
                  </div>

                  {/* System Version Footer */}
                  <div className="pt-2.5 border-t border-white/[0.08] flex justify-between items-center text-[9px] text-white/45 font-mono">
                    <span>System: Human</span>
                    <span>Version: 1.0.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
