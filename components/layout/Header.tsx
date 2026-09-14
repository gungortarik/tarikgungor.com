"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/lib/content/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border/80 bg-surface/85 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-[68px] sm:h-[76px]">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0"
          aria-label="Tarik Gungor Home"
        >
          <Image
            src="/assets/logos/tarik-gungor-monogram.svg"
            alt=""
            width={44}
            height={37}
            className="w-9 sm:w-10 h-auto dark:invert"
            priority
          />
          <span className="text-[17px] sm:text-[19px] font-semibold tracking-[-0.02em]">
            Tarik Gungor
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {mainNav.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute left-3.5 right-3.5 -bottom-[calc(50%-1px)] h-px bg-accent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border border-surface-border text-foreground-muted hover:text-foreground transition-colors"
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
          className="md:hidden border-t border-surface-border bg-surface px-6 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {mainNav.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-3 text-sm font-medium transition-colors border-l-2 ${
                  isActive
                    ? "text-foreground border-accent"
                    : "text-foreground-muted border-transparent hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
