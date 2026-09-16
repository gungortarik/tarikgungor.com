import { Button } from "@/components/ui/Button";
import { Signature } from "@/components/ui/Signature";
import { profile } from "@/lib/content/profile";

export function ContactCTA() {
  return (
    <section id="contact" className="w-full bg-depth text-on-depth py-24 sm:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-on-depth-subtle">
              06 / Contact
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[40px] sm:text-[52px] lg:text-[56px] text-on-depth font-medium leading-[1.05] tracking-[-0.02em] max-w-[16ch]">
              {profile.contactIntro}
            </h2>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-block text-[18px] sm:text-[20px] text-on-depth-muted mt-8 hover:text-on-depth transition-colors"
            >
              {profile.contact.email}
            </a>
            <div className="mt-10">
              <Signature depth />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12">
              <Button href={`mailto:${profile.contact.email}`} external tone="depth">
                Email
              </Button>
              <Button href="/resume" variant="ghost" tone="depth">
                Resume →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
