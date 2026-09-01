export function Hero() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-6 sm:pt-10 pb-16 lg:pb-24">
      <div className="flex gap-6 lg:gap-12">
        {/* Left Metadata Rail (Desktop) */}
        <aside
          className="hidden xl:flex flex-col justify-between items-center py-4 border-r border-paper-border pr-6 text-ink-subtle select-none"
          aria-hidden="true"
        >
          <span className="text-[11px] font-mono font-medium tracking-wider">01</span>
          <div className="writing-mode-vertical text-[10px] font-bold tracking-[0.24em] uppercase text-ink-muted/80 my-auto py-12">
            Systems • Ideas • Impact
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-olive/60" />
        </aside>

        {/* Main Hero Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
            {/* Location & Progress Tag */}
            <div className="flex flex-col gap-1.5 mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-ink-muted">
                Toronto, Canada
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-ink-subtle">
                A Life in Progress
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-5 h-[1.5px] bg-olive" />
                <span className="w-1.5 h-1.5 rounded-full bg-olive" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[44px] sm:text-[62px] md:text-[72px] lg:text-[68px] xl:text-[76px] leading-[1.0] sm:leading-[0.96] tracking-[-0.03em] text-ink font-normal">
              <span className="block">Building systems.</span>
              <span className="block">Learning continuously.</span>
              <span className="block">
                <span className="italic text-olive font-serif mr-2 sm:mr-3">Living</span>
                <span>intentionally.</span>
              </span>
            </h1>

            {/* Code / Technical Symbol */}
            <div className="font-mono text-xs sm:text-sm text-ink-subtle mt-6 sm:mt-8 tracking-widest">
              &lt;/&gt;
            </div>

            {/* Subcopy */}
            <p className="text-sm sm:text-[15px] md:text-base text-ink-muted leading-relaxed max-w-[460px] mt-4">
              I work with technology to solve real problems, build useful products, and document
              what I learn along the way.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-charcoal text-paper font-semibold text-xs sm:text-sm tracking-tight hover:bg-ink active:scale-[0.98] transition-all"
              >
                <span>Explore my work</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#updates"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-ink-muted hover:text-ink transition-colors group"
              >
                <span>Latest updates</span>
                <span
                  className="w-2 h-2 rounded-full bg-status-green transition-transform group-hover:scale-125"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Media Area & Overlapping Technical Card */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative mt-4 lg:mt-0">
            {/* Subtle Dot Matrix Background (Desktop) */}
            <div
              className="hidden sm:block absolute -top-8 -right-6 w-48 h-48 bg-dot-pattern opacity-40 pointer-events-none"
              aria-hidden="true"
            />

            {/* Media Stack Container */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[440px]">
              {/* Image / Structured Editorial Placeholder Frame */}
              <div
                className="relative rounded-2xl overflow-hidden border border-paper-border bg-gradient-to-b from-[#ded9ce] via-[#d2ccc0] to-[#bcb6a8] aspect-[4/5] sm:aspect-[4/5] shadow-md flex flex-col justify-between p-5"
                role="region"
                aria-label="Toronto skyline placeholder composition"
              >
                {/* Top-Left Geographic Coordinates Glassmorphic Badge */}
                <div className="self-start rounded-md bg-paper/75 backdrop-blur-md border border-paper-border/60 px-3 py-2 text-[10px] font-mono text-ink leading-tight shadow-xs select-none">
                  <div className="font-semibold tracking-wider">43.6532° N</div>
                  <div className="font-semibold tracking-wider">79.3832° W</div>
                  <div className="text-[9px] text-ink-muted font-bold tracking-widest uppercase mt-0.5 flex items-center gap-1">
                    Toronto <span>→</span>
                  </div>
                </div>

                {/* Structured Architectural Placeholder Silhouette */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-end items-center opacity-85">
                  <svg
                    viewBox="0 0 400 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ded9ce" />
                        <stop offset="60%" stopColor="#cac3b5" />
                        <stop offset="100%" stopColor="#9c9588" />
                      </linearGradient>
                      <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4a4843" />
                        <stop offset="100%" stopColor="#1e1d1b" />
                      </linearGradient>
                    </defs>

                    <rect width="400" height="480" fill="url(#skyGrad)" />

                    {/* Subtle grid lines */}
                    <path
                      d="M 50 0 V 480 M 100 0 V 480 M 150 0 V 480 M 200 0 V 480 M 250 0 V 480 M 300 0 V 480 M 350 0 V 480"
                      stroke="#bcb5a6"
                      strokeWidth="0.5"
                      strokeDasharray="2 4"
                      opacity="0.35"
                    />

                    {/* Distant Skyline Silhouettes */}
                    <rect x="20" y="320" width="40" height="160" fill="#888277" opacity="0.6" />
                    <rect x="70" y="290" width="35" height="190" fill="#756f64" opacity="0.65" />
                    <rect x="115" y="310" width="45" height="170" fill="#696459" opacity="0.7" />
                    <rect x="230" y="300" width="50" height="180" fill="#696459" opacity="0.7" />
                    <rect x="290" y="330" width="40" height="150" fill="#7a7469" opacity="0.65" />
                    <rect x="340" y="340" width="50" height="140" fill="#888277" opacity="0.6" />

                    {/* CN Tower Silhouette */}
                    <g transform="translate(195, 120)">
                      {/* Spire */}
                      <line x1="5" y1="0" x2="5" y2="80" stroke="url(#towerGrad)" strokeWidth="1.5" />
                      {/* Pod */}
                      <path
                        d="M -6 80 L 16 80 L 13 95 L -3 95 Z"
                        fill="url(#towerGrad)"
                      />
                      {/* Shaft */}
                      <path
                        d="M 0 95 L 10 95 L 12 360 L -2 360 Z"
                        fill="url(#towerGrad)"
                      />
                    </g>

                    {/* Water reflection horizon */}
                    <rect x="0" y="440" width="400" height="40" fill="#615c52" opacity="0.5" />
                  </svg>
                </div>

                {/* Subtle Editorial Placement Indicator */}
                <div className="relative z-10 self-center text-center py-2 px-3 rounded-full bg-paper/60 backdrop-blur-xs border border-paper-border/40 text-[9px] font-mono uppercase tracking-widest text-ink-muted">
                  [ Toronto • Asset Frame ]
                </div>
              </div>

              {/* Overlapping Technical ~/now Card */}
              <div className="sm:absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 md:-bottom-10 md:-right-8 w-full sm:w-[270px] md:w-[290px] rounded-2xl bg-charcoal-card border border-charcoal-border p-4 sm:p-5 shadow-2xl text-paper font-mono text-xs mt-4 sm:mt-0 z-20">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-charcoal-border-subtle">
                  <div className="text-emerald-400 font-semibold text-xs tracking-tight">
                    ~/now
                  </div>
                  <span
                    className="w-2 h-2 rounded-full bg-status-green animate-pulse"
                    aria-label="Active status indicator"
                  />
                </div>

                {/* Body Content */}
                <div className="space-y-3 text-[11px] leading-relaxed">
                  {/* Focus */}
                  <div>
                    <span className="text-ink-subtle block text-[10px]">&gt; focus</span>
                    <p className="text-paper/90 font-medium">Building things that solve problems.</p>
                  </div>

                  {/* Status */}
                  <div>
                    <span className="text-ink-subtle block text-[10px]">&gt; status</span>
                    <div className="flex items-center gap-1.5 text-paper/90">
                      <span className="text-status-green">[●]</span>
                      <span>In Progress</span>
                    </div>
                  </div>

                  {/* Mindset JSON */}
                  <div>
                    <span className="text-ink-subtle block text-[10px]">&gt; mindset</span>
                    <pre className="text-[10px] leading-tight text-paper/80 bg-charcoal-surface/60 p-2 rounded-md border border-charcoal-border-subtle overflow-x-auto">
                      <code>
                        <span className="text-paper/60">&#123;</span>
                        {"\n"}  curious: <span className="text-amber-300">true</span>,
                        {"\n"}  consistent: <span className="text-amber-300">true</span>,
                        {"\n"}  impact: <span className="text-emerald-300">&apos;real&apos;</span>
                        {"\n"}
                        <span className="text-paper/60">&#125;</span>
                      </code>
                    </pre>
                  </div>

                  {/* Mini Dot Grid ASCII Graphic */}
                  <div className="pt-1 text-center font-mono text-[8px] text-ink-subtle tracking-tighter opacity-70 select-none">
                    . . · : · . . : · . · : · . .
                  </div>

                  {/* System Version Footer */}
                  <div className="pt-2 border-t border-charcoal-border-subtle flex justify-between items-center text-[9px] text-ink-subtle">
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
