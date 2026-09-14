import { Button } from "@/components/ui/Button";
import { experiences } from "@/lib/content/experience";

export function ExperienceSnapshot() {
  return (
    <section
      id="experience"
      className="w-full border-t border-surface-border py-24 sm:py-28 lg:py-32"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-14">
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-foreground-muted">
              Experience
            </p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[44px] text-foreground font-medium leading-[1.12] tracking-tight">
              The day job under the craft.
            </h2>
            <p className="text-[15px] text-foreground-muted leading-[1.75] mt-4 max-w-[34rem]">
              IT support across hybrid environments — the practical base under school and the software I build.
            </p>
          </div>
          <div className="lg:col-span-2 lg:flex lg:justify-end lg:items-start">
            <Button href="/resume" size="sm" variant="secondary">
              Full resume →
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-surface-border">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="py-7 md:py-8 md:pr-8 md:border-r md:border-surface-border md:last:border-r-0 md:last:pr-0 md:pl-8 md:first:pl-0 border-b md:border-b-0 border-surface-border last:border-b-0"
            >
              <p className="text-[11px] font-mono text-foreground-muted">{exp.period}</p>
              <h3 className="font-serif text-[22px] text-foreground mt-3">{exp.company}</h3>
              <p className="text-sm text-foreground-muted mt-1 leading-relaxed">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
