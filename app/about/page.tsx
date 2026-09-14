import type { Metadata } from "next";
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
        <SectionHeader
          label="About"
          title={profile.aboutIntro}
          description={profile.positioning}
        />

        <div className="mt-10 space-y-6">
          {profile.aboutBody.map((paragraph) => (
            <p key={paragraph} className="text-[16px] text-foreground-muted leading-[1.75]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row gap-4">
          <Button href="/work">See the work</Button>
          <Button href="/resume" variant="secondary">
            Resume
          </Button>
          <Button href="/contact" variant="ghost">
            Contact →
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
