import { profile } from "@/lib/content/profile";

export function WhoIAm() {
  return (
    <section id="about" className="w-full border-t border-surface-border">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-24 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-foreground-muted sticky top-28">
              About
            </p>
          </div>
          <div className="lg:col-span-9">
            <p className="font-serif text-[30px] sm:text-[38px] lg:text-[44px] text-foreground font-medium leading-[1.2] tracking-tight max-w-[820px] text-balance">
              {profile.aboutIntro}
            </p>
            <p className="text-[15px] sm:text-[16px] text-foreground-muted leading-[1.8] mt-8 max-w-[36rem]">
              {profile.shortBio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
