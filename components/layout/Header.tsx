"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

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
    <header className="relative w-full bg-paper pt-5 sm:pt-7 pb-3 sm:pb-4 z-30">
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Brand Group */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-1.5 hover:opacity-80 transition-opacity"
            aria-label="Tarik Gungor Home"
          >
            <Image
              src="/assets/logos/tarik-gungor-monogram.svg"
              alt=""
              width={88}
              height={74}
              className="w-[78px] sm:w-[88px] h-auto shrink-0 dark:invert"
              priority
            />
            <span className="text-[14px] sm:text-[15px] font-semibold text-ink tracking-tight">
              Tarik Gungor
            </span>
          </Link>
          <span className="hidden lg:inline text-[11.5px] text-ink-muted/85 ml-3.5 tracking-normal">
            Building <span className="mx-1 text-ink-subtle/70">•</span> Learning <span className="mx-1 text-ink-subtle/70">•</span> Living
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
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href="#explore"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-ink hover:opacity-75 transition-opacity"
          >
            Explore <span aria-hidden="true">↓</span>
          </a>

          <ThemeToggle />

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
