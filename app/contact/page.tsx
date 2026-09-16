import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: profile.contactIntro,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="page-pad page-width py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="field-meta text-foreground-subtle">Contact</p>
          </div>
          <div className="lg:col-span-7">
            <h1 className="font-serif text-[32px] sm:text-[44px] lg:text-[52px] text-foreground font-medium leading-[1.08] tracking-[-0.035em] max-w-[14ch]">
              {profile.contactIntro}
            </h1>
            <p className="text-[16px] text-foreground-muted leading-[1.75] mt-6 max-w-[36rem]">
              Email is the cleanest way. LinkedIn and GitHub are there if you prefer.
            </p>

            <div className="mt-10 space-y-0">
              <div className="py-6 border-t border-surface-border">
                <span className="field-meta text-foreground-subtle">Email</span>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="block text-[18px] sm:text-[20px] text-foreground font-medium mt-2 hover:text-accent transition-colors"
                >
                  {profile.contact.email}
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-6 border-t border-surface-border hover:text-accent transition-colors sm:pr-6"
                >
                  <span className="field-meta text-foreground-subtle">LinkedIn</span>
                  <p className="text-[16px] text-foreground font-medium mt-2">tarikgungor</p>
                </a>

                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-6 border-t border-surface-border hover:text-accent transition-colors"
                >
                  <span className="field-meta text-foreground-subtle">GitHub</span>
                  <p className="text-[16px] text-foreground font-medium mt-2">gungortarik</p>
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
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
