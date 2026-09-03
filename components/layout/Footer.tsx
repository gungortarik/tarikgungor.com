import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-paper border-t border-paper-border/60 py-12 sm:py-14">
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-[12.5px] text-ink-muted dark:text-white/70">
        {/* Left: Wordmark, Copyright & Social Text Links */}
        <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center sm:justify-start">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity flex items-center shrink-0"
            aria-label="Tarik Gungor Home"
          >
            <Image
              src="/assets/logos/tarik-gungor-wordmark.png"
              alt="Tarik Gungor"
              width={168}
              height={45}
              className="w-[150px] sm:w-[168px] h-auto object-contain dark:invert"
            />
          </Link>
          <span className="hidden sm:inline text-paper-border select-none" aria-hidden="true">|</span>
          <span>© 2026 Tarik Gungor</span>
          <div className="flex items-center gap-4 text-ink/80 dark:text-white/80 font-medium">
            <a
              href="https://github.com/gungortarik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tarikgungor/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tarik.gungor.ca@gmail.com"
              className="hover:text-ink dark:hover:text-white transition-colors"
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
