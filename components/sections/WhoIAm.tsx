import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/content/profile";

export function WhoIAm() {
  return (
    <section id="about" className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
      <RevealOnScroll>
        <SectionHeader
          label="Who I Am"
          title={profile.aboutIntro}
          description={profile.shortBio}
        />
      </RevealOnScroll>
    </section>
  );
}
