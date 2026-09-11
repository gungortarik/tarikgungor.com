import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ResumePreview() {
  return (
    <section id="resume" className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeader
            label="Resume"
            title="Experience, education, and technical work."
            description="A concise version of my professional background for people who need the traditional format."
          />
          <div className="flex items-center gap-3 shrink-0">
            <Button href="/resume">View resume</Button>
            <Button
              href="/resume/tarik-gungor-resume.pdf"
              variant="secondary"
              download="tarik-gungor-resume.pdf"
            >
              Download PDF ↓
            </Button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
