"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { mainNav } from "@/lib/content/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LiveDate } from "@/components/ui/LiveDate";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const primary = mainNav.filter((item) => !item.utility);
  const utility = mainNav.filter((item) => item.utility);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border/80 bg-surface/94 backdrop-blur-md">
      <div className="page-pad page-width flex items-center justify-between h-[var(--header-h)] gap-4">
        <div className="flex items-center gap-4 shrink-0">
          <TransitionLink
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Tarik Gungor — Index"
          >
            <Image
              src="/assets/logos/tarik-gungor-monogram.svg"
              alt=""
              width={44}
              height={37}
              className="w-7 sm:w-8 h-auto dark:invert"
              priority
            />
            <span className="text-[14px] sm:text-[15px] font-semibold tracking-[-0.02em]">
              Tarik Gungor
            </span>
          </TransitionLink>

          <span
            aria-live="polite"
            className="hidden md:inline-flex items-center gap-2 border-l border-surface-border pl-4 font-mono text-[10px] tracking-[0.14em] uppercase text-foreground-subtle tabular-nums"
          >
            <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
            <LiveDate />
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          <TransitionLink
            href="/"
            className={`relative px-2.5 py-1.5 text-[12px] font-medium tracking-tight transition-colors ${
              pathname === "/"
                ? "text-foreground"
                : "text-foreground-muted hover:text-foreground"
            }`}
          >
            Index
            {pathname === "/" && (
              <span
                className="vt-nav-indicator absolute left-2.5 right-2.5 bottom-0.5 h-px bg-accent"
                aria-hidden="true"
              />
            )}
          </TransitionLink>
          {primary.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                className={`relative px-2.5 py-1.5 text-[12px] font-medium tracking-tight transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="vt-nav-indicator absolute left-2.5 right-2.5 bottom-0.5 h-px bg-accent"
                    aria-hidden="true"
                  />
                )}
              </TransitionLink>
            );
          })}
          {utility.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                className={`relative px-2.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.08em] transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground-subtle hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="vt-nav-indicator absolute left-2.5 right-2.5 bottom-0.5 h-px bg-accent"
                    aria-hidden="true"
                  />
                )}
              </TransitionLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center min-w-11 min-h-11 border border-surface-border text-foreground-muted hover:text-foreground transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-lg leading-none">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          className="lg:hidden border-t border-surface-border bg-surface page-pad py-4 flex flex-col gap-0.5"
          aria-label="Mobile navigation"
        >
          <TransitionLink
            href="/"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-3 text-sm font-medium transition-colors border-l-2 min-h-11 ${
              pathname === "/"
                ? "text-foreground border-accent"
                : "text-foreground-muted border-transparent hover:text-foreground"
            }`}
          >
            Index
          </TransitionLink>
          {mainNav.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-3 text-sm font-medium transition-colors border-l-2 min-h-11 ${
                  isActive
                    ? "text-foreground border-accent"
                    : "text-foreground-muted border-transparent hover:text-foreground"
                }`}
              >
                {item.label}
              </TransitionLink>
            );
          })}
        </nav>
      )}
    </header>
  );
}
