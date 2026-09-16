import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { Signature } from "@/components/ui/Signature";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: profile.contactIntro,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-foreground-muted">
              Contact
            </p>
          </div>
          <div className="lg:col-span-7">
            <h1 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-foreground font-medium leading-[1.15] tracking-tight max-w-[16ch]">
              {profile.contactIntro}
            </h1>
            <p className="text-[16px] text-foreground-muted leading-[1.75] mt-6 max-w-[36rem]">
              Email is the cleanest way. LinkedIn and GitHub are there if you prefer.
            </p>
            <div className="mt-8">
              <Signature />
            </div>

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
        </div>
      </div>
    </PageShell>
  );
}
