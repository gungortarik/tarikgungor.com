export function Hero() {
  return (
    <section className="relative w-full max-w-[1480px] mx-auto px-5 sm:px-6 lg:px-6 pt-3 sm:pt-8 pb-10 sm:pb-16 lg:pb-24">
      <div className="flex gap-6 sm:gap-8 lg:gap-10 items-stretch">
        {/* Left Metadata Rail (Desktop) */}
        <div
          className="hidden xl:flex flex-col items-center justify-between py-1 pr-5 border-r border-paper-border text-ink-subtle select-none w-[32px] shrink-0"
          aria-hidden="true"
        >
          <span className="text-[11px] font-mono font-medium tracking-wider text-ink-muted">01</span>
          <div className="h-10 w-[1px] bg-paper-border/70 mt-2" />
          <div className="writing-mode-vertical text-[9.5px] font-mono font-medium tracking-[0.34em] uppercase text-ink-muted/80 my-auto py-10">
            Systems • Ideas • Impact
          </div>
          <div className="h-10 w-[1px] bg-paper-border/70 mb-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-olive-indicator/80" />
        </div>

        {/* Hero Main Content & Media Grid */}
        <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Column: Editorial Headline, Intro & CTA */}
          <div className="w-full lg:max-w-[580px] xl:max-w-[620px] flex flex-col items-start shrink-0">
            {/* Location & Status Eyebrow */}
            <div className="flex flex-col items-start gap-1 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-muted">
                Toronto, Canada
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.18em] uppercase text-ink-subtle">
                A Life in Progress
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-5 h-[1.5px] bg-olive-indicator/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[38px] sm:text-[52px] lg:text-[58px] xl:text-[62px] leading-[1.05] sm:leading-[1.04] tracking-[-0.025em] text-ink font-normal">
              <span className="block">Building systems.</span>
              <span className="block">Learning continuously.</span>
              <span className="block">
                <span className="italic text-olive font-serif mr-2 sm:mr-2.5">Living</span>
                <span>intentionally.</span>
              </span>
            </h1>

            {/* Code / Technical Symbol */}
            <div className="font-mono text-xs text-ink-subtle mt-5 sm:mt-7 tracking-widest">
              &lt;/&gt;
            </div>

            {/* Subcopy */}
            <p className="text-[14px] sm:text-[16px] text-ink-muted leading-[1.65] max-w-[460px] mt-3 sm:mt-4">
              I work with technology to solve real problems, build useful products, and document
              what I learn along the way.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mt-6 sm:mt-9">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-charcoal text-paper font-semibold text-xs sm:text-[13px] tracking-tight hover:bg-ink active:scale-[0.99] transition-all text-center"
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

          {/* Right Column: Media Frame & Technical ~/now Card */}
          <div className="w-full lg:w-[500px] xl:w-[520px] flex justify-center lg:justify-end relative shrink-0 mt-4 sm:mt-6 lg:mt-0">
            {/* Subtle Dot Matrix Grid in Background (Desktop) */}
            <div
              className="hidden sm:block absolute -top-8 right-4 w-40 h-32 bg-dot-pattern opacity-30 pointer-events-none"
              aria-hidden="true"
            />

            {/* Media Stack Composition */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex flex-col sm:block mx-auto lg:mx-0">
              {/* Media Area (Clean Compact on Mobile, Full-scale on Desktop) */}
              <div
                className="relative rounded-2xl overflow-hidden border border-paper-border bg-[#ded8cc] w-full aspect-[16/10] sm:aspect-auto sm:h-[470px] shadow-xs select-none"
                role="region"
                aria-label="Media placeholder"
              >
                {/* Geographic Coordinates Translucent Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-md bg-paper/85 backdrop-blur-xs border border-paper-border/70 px-2 sm:px-2.5 py-1.5 sm:py-2 text-[9.5px] sm:text-[10px] font-mono text-ink leading-tight shadow-xs select-none z-10">
                  <div className="font-medium tracking-wide">43.6532° N</div>
                  <div className="font-medium tracking-wide">79.3832° W</div>
                  <div className="text-[8.5px] sm:text-[9px] text-ink-muted font-bold tracking-widest uppercase mt-0.5 flex items-center gap-1">
                    Toronto <span>→</span>
                  </div>
                </div>
              </div>

              {/* Overlapping ~/now Card (Cohesive Mobile Connection, Preserved Desktop Art Direction) */}
              <div className="-mt-8 sm:mt-0 sm:absolute top-[26%] -right-10 sm:-right-14 md:-right-16 w-[92%] sm:w-[215px] mx-auto sm:mx-0 rounded-2xl bg-[#171716] border border-white/[0.08] p-4 sm:p-4.5 shadow-[0_22px_48px_rgba(0,0,0,0.42)] text-paper font-mono z-20">
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
