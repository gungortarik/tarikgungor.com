export function Footer() {
  return (
    <footer className="w-full bg-paper border-t border-paper-border/60 py-8 sm:py-10">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-6 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-[12.5px] text-ink-muted">
        {/* Left: Copyright & Social Text Links */}
        <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center sm:justify-start">
          <span>© 2026 Tarik Gungor</span>
          <div className="flex items-center gap-4 text-ink-muted">
            <a
              href="https://github.com/gungortarik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tarikgungor/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tarik.gungor.ca@gmail.com"
              className="hover:text-ink transition-colors"
            >
              Mail
            </a>
          </div>
        </div>

        {/* Center: Tech Stack Meta */}
        <div className="text-center">
          <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
        </div>

        {/* Right: Location */}
        <div className="text-center sm:text-right">
          <span>Toronto, Canada</span>
        </div>
      </div>
    </footer>
  );
}
