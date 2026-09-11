import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/content/profile";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-border bg-surface-muted/30 py-12 sm:py-14">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:opacity-80 transition-opacity" aria-label="Tarik Gungor Home">
              <Image
                src="/assets/logos/tarik-gungor-wordmark.png"
                alt="Tarik Gungor"
                width={150}
                height={40}
                className="w-[140px] h-auto object-contain dark:invert"
              />
            </Link>
            <p className="text-sm text-foreground-muted max-w-[320px] leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              {profile.contact.email}
            </a>
          </div>

          <div className="text-sm text-foreground-subtle text-left lg:text-right">
            <p>© 2026 {profile.name}</p>
            <p className="mt-1">{profile.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
