import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: profile.contactIntro,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-[640px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <SectionHeader
          label="Contact"
          title={profile.contactIntro}
          description="Email is the cleanest way. LinkedIn and GitHub are there if you prefer."
        />

        <div className="mt-10 space-y-6">
          <div className="pt-6 border-t border-surface-border">
            <span className="text-[11px] font-mono text-foreground-subtle uppercase tracking-wider">
              Email
            </span>
            <a
              href={`mailto:${profile.contact.email}`}
              className="block text-[18px] text-foreground font-medium mt-2 hover:text-accent transition-colors"
            >
              {profile.contact.email}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-6 border-t border-surface-border hover:border-accent/40 transition-colors"
            >
              <span className="text-[11px] font-mono text-foreground-subtle uppercase tracking-wider">
                LinkedIn
              </span>
              <p className="text-[16px] text-foreground font-medium mt-2">tarikgungor</p>
            </a>

            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-6 border-t border-surface-border hover:border-accent/40 transition-colors"
            >
              <span className="text-[11px] font-mono text-foreground-subtle uppercase tracking-wider">
                GitHub
              </span>
              <p className="text-[16px] text-foreground font-medium mt-2">gungortarik</p>
            </a>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <Button href="/work" variant="secondary">
            See the work
          </Button>
          <Button href="/resume" variant="ghost">
            Resume →
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
