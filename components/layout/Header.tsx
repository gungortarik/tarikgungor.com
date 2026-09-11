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
    <header className="sticky top-0 z-40 w-full border-b border-surface-border/70 bg-surface/90 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-16 sm:h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          aria-label="Tarik Gungor Home"
        >
          <Image
            src="/assets/logos/tarik-gungor-monogram.svg"
            alt=""
            width={36}
            height={30}
            className="w-8 h-auto dark:invert"
            priority
          />
          <span className="hidden sm:inline text-sm font-semibold tracking-tight">
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
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground bg-surface-muted"
                    : "text-foreground-muted hover:text-foreground hover:bg-surface-muted/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-surface-border text-foreground-muted hover:text-foreground transition-colors"
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
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground bg-surface-muted"
                    : "text-foreground-muted hover:text-foreground"
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
