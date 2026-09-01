"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Now", href: "#now", active: true },
    { label: "Work", href: "#work" },
    { label: "Notes", href: "#notes" },
    { label: "Life", href: "#life" },
    { label: "Archive", href: "#archive" },
  ];

  return (
    <header className="relative w-full bg-paper pt-5 sm:pt-8 pb-3 z-30">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-6 lg:px-6 flex items-center justify-between">
        {/* Brand Group */}
        <div className="flex items-center">
          <Link
            href="/"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-ink flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-ink tracking-tight hover:opacity-80 transition-opacity"
            aria-label="Tarik Gungor Home"
          >
            TG
          </Link>
          <Link
            href="/"
            className="text-[14px] sm:text-[15px] font-semibold text-ink ml-3 tracking-tight hover:opacity-80 transition-opacity"
          >
            Tarik Gungor
          </Link>
          <span className="hidden lg:inline text-[11px] text-ink-subtle ml-4 tracking-normal">
            Building <span className="mx-1 text-ink-subtle/60">•</span> Learning <span className="mx-1 text-ink-subtle/60">•</span> Living
          </span>
        </div>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs text-ink-muted">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative py-1 transition-colors hover:text-ink ${
                item.active ? "text-ink font-semibold" : "font-normal"
              }`}
            >
              <span>{item.label}</span>
              {item.active && (
                <div className="flex items-center justify-center gap-0.5 mt-0.5" aria-hidden="true">
                  <span className="w-2.5 h-[1.5px] bg-olive-indicator rounded-l-full" />
                  <span className="w-1 h-1 rounded-full bg-olive-indicator" />
                  <span className="w-2.5 h-[1.5px] bg-olive-indicator rounded-r-full" />
                </div>
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#explore"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-ink hover:opacity-75 transition-opacity"
          >
            Explore <span aria-hidden="true">↓</span>
          </a>

          <button
            type="button"
            className="hidden sm:flex w-6 h-6 rounded-full bg-ink text-paper items-center justify-center hover:opacity-85 transition-opacity cursor-pointer"
            aria-label="Toggle theme or view mode"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2l2.3 6.3 6.7 1.4-4.9 4.7 1.2 6.6-5.3-3.2-5.3 3.2 1.2-6.6-4.9-4.7 6.7-1.4L12 2z" />
            </svg>
          </button>

          {/* Mobile Hamburger / Close Button (44px min touch target) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 -mr-2.5 gap-1.5 text-ink focus:outline-hidden cursor-pointer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className="absolute w-5 h-[1.5px] bg-ink rotate-45 rounded-full" />
                <span className="absolute w-5 h-[1.5px] bg-ink -rotate-45 rounded-full" />
              </div>
            ) : (
              <>
                <span className="w-5 h-[1.5px] bg-ink rounded-full" />
                <span className="w-5 h-[1.5px] bg-ink rounded-full" />
                <span className="w-5 h-[1.5px] bg-ink rounded-full" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-paper border-b border-paper-border shadow-md px-5 py-4 z-40">
          <nav className="flex flex-col divide-y divide-paper-border/60">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-3 text-[14px] transition-colors ${
                  item.active ? "text-ink font-semibold" : "text-ink-muted hover:text-ink font-normal"
                }`}
              >
                <span>{item.label}</span>
                {item.active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator" aria-hidden="true" />
                )}
              </a>
            ))}
            <a
              href="#explore"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-3 text-[14px] text-ink font-medium hover:opacity-75 transition-opacity"
            >
              <span>Explore</span>
              <span aria-hidden="true">↓</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
