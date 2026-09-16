import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/content/profile";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-border bg-surface py-12 sm:py-16">
      <div className="page-pad page-width">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-[28rem]">
            <Link href="/" className="hover:opacity-80 transition-opacity" aria-label="Tarik Gungor — Index">
              <Image
                src="/assets/logos/tarik-gungor-wordmark.png"
                alt="Tarik Gungor"
                width={168}
                height={44}
                className="w-[148px] h-auto object-contain dark:invert"
              />
            </Link>
            <p className="field-meta text-foreground-subtle">Public field system</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-accent transition-colors min-h-11 inline-flex items-center"
            >
              GitHub
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-accent transition-colors min-h-11 inline-flex items-center"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-foreground-muted hover:text-accent transition-colors min-h-11 inline-flex items-center"
            >
              {profile.contact.email}
            </a>
          </div>

          <div className="text-[13px] text-foreground-muted text-left lg:text-right">
            <p>© 2026 {profile.name}</p>
            <p className="mt-1 text-foreground-subtle">{profile.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
