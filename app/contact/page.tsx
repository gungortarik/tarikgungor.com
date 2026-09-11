import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}. Open to co-op and internship opportunities.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-[640px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <RevealOnScroll>
          <Badge variant="status" className="mb-6">{profile.coop.label}</Badge>
          <SectionHeader
            label="Contact"
            title="Let's connect."
            description={profile.coop.message}
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-surface-border bg-surface-elevated p-6">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-surface-border bg-surface-elevated p-6 hover:border-accent/30 transition-colors"
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
                className="rounded-2xl border border-surface-border bg-surface-elevated p-6 hover:border-accent/30 transition-colors"
              >
                <span className="text-[11px] font-mono text-foreground-subtle uppercase tracking-wider">
                  GitHub
                </span>
                <p className="text-[16px] text-foreground font-medium mt-2">gungortarik</p>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-10 flex gap-4">
            <Button href="/resume">View resume</Button>
            <Button href="/work" variant="secondary">See my work</Button>
          </div>
        </RevealOnScroll>
      </div>
    </PageShell>
  );
}
