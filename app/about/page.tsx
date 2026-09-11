import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.shortBio,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <RevealOnScroll>
          <Badge variant="status" className="mb-6">{profile.coop.label}</Badge>
          <SectionHeader
            label="About"
            title={`Hi, I'm ${profile.name}.`}
            description={profile.positioning}
          />
        </RevealOnScroll>

        <div className="mt-10 space-y-6">
          {profile.aboutBody.map((paragraph, index) => (
            <RevealOnScroll key={index} delay={index * 0.08}>
              <p className="text-[16px] text-foreground-muted leading-[1.75]">{paragraph}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href="/resume" variant="secondary">View resume</Button>
            <Button href="/work" variant="ghost">See my work →</Button>
          </div>
        </RevealOnScroll>
      </div>
    </PageShell>
  );
}
