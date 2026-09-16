import Image from "next/image";
import Link from "next/link";
import { Signature } from "@/components/ui/Signature";
import { profile } from "@/lib/content/profile";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-border bg-surface py-14 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="flex flex-col gap-5">
            <Link href="/" className="hover:opacity-80 transition-opacity" aria-label="Tarik Gungor Home">
              <Image
                src="/assets/logos/tarik-gungor-wordmark.png"
                alt="Tarik Gungor"
                width={168}
                height={44}
                className="w-[156px] h-auto object-contain dark:invert"
              />
            </Link>
            <Signature />
            <p className="text-sm text-foreground-muted max-w-[320px] leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium">
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

          <div className="text-[13px] text-foreground-muted text-left lg:text-right">
            <p>© 2026 {profile.name}</p>
            <p className="mt-1 text-foreground-subtle">{profile.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
