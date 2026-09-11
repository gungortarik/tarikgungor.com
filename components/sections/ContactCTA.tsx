import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { profile } from "@/lib/content/profile";

export function ContactCTA() {
  return (
    <section id="contact" className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
      <RevealOnScroll>
        <div className="rounded-3xl border border-surface-border bg-surface-elevated p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="font-serif text-[32px] sm:text-[40px] text-foreground leading-tight">
            Let&apos;s connect.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-foreground-muted leading-relaxed mt-4 max-w-[520px] mx-auto">
            {profile.coop.message}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button href="/contact">Contact me</Button>
            <Button href="/resume" variant="secondary">View resume</Button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
