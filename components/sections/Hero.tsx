import Image from "next/image";
import { HeroScene } from "@/components/three/HeroScene";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { profile } from "@/lib/content/profile";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <HeroScene />

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 max-w-[600px]">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="status">{profile.coop.label}</Badge>
                <span className="text-[11px] font-mono text-foreground-muted tracking-wider uppercase">
                  {profile.location}
                </span>
              </div>

              <h1 className="font-serif text-[42px] sm:text-[52px] lg:text-[60px] text-foreground font-normal leading-[1.05] tracking-tight">
                {profile.name}
              </h1>

              <p className="font-serif text-[22px] sm:text-[26px] text-foreground/80 mt-3 leading-snug">
                {profile.tagline}
              </p>

              <p className="text-[15px] sm:text-[16px] text-foreground-muted leading-[1.7] mt-5 max-w-[520px]">
                {profile.positioning}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
                <Button href="/work">View my work</Button>
                <Button href="/resume" variant="secondary">Resume</Button>
                <Button href="/contact" variant="ghost">Get in touch →</Button>
              </div>
            </div>

            <div className="relative w-full max-w-[360px] lg:max-w-[400px] shrink-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-surface-border bg-surface-elevated shadow-2xl">
                <Image
                  src={profile.heroImage}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 360px, 400px"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-accent/20 -z-10" aria-hidden="true" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
