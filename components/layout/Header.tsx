import Link from "next/link";

export function Header() {
  const navItems = [
    { label: "Now", href: "#now", active: true },
    { label: "Work", href: "#work" },
    { label: "Notes", href: "#notes" },
    { label: "Life", href: "#life" },
    { label: "Archive", href: "#archive" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/90 backdrop-blur-xs border-b border-paper-border transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Group */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-ink text-ink font-bold text-xs tracking-tight transition-transform hover:scale-105"
            aria-label="Tarik Gungor Home"
          >
            TG
          </Link>
          <div className="flex items-baseline gap-2.5">
            <Link
              href="/"
              className="text-sm sm:text-[15px] font-bold text-ink tracking-tight hover:opacity-80 transition-opacity"
            >
              Tarik Gungor
            </Link>
            <span className="hidden md:inline-block text-[11px] font-medium tracking-wide text-ink-muted">
              Building <span className="text-ink-subtle mx-0.5">•</span> Learning <span className="text-ink-subtle mx-0.5">•</span> Living
            </span>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold tracking-wide text-ink-muted">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative py-1.5 transition-colors hover:text-ink ${
                item.active ? "text-ink font-bold" : ""
              }`}
            >
              {item.label}
              {item.active && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-olive rounded-full"
                  aria-hidden="true"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Desktop Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#explore"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:opacity-70 transition-opacity"
          >
            Explore <span className="text-xs" aria-hidden="true">↓</span>
          </a>

          {/* Theme/Mode Indicator Accent Icon */}
          <button
            type="button"
            className="hidden sm:flex w-7 h-7 rounded-full bg-ink text-paper items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Toggle theme or action"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              aria-hidden="true"
            >
              <path d="M12 2l2.4 6.6L21 11l-5.6 4.4L17 22l-5-4-5 4 1.6-6.6L3 11l6.6-2.4L12 2z" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 text-ink focus:outline-hidden"
            aria-label="Open menu"
          >
            <span className="w-5 h-[1.5px] bg-ink rounded-full"></span>
            <span className="w-5 h-[1.5px] bg-ink rounded-full"></span>
            <span className="w-5 h-[1.5px] bg-ink rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
