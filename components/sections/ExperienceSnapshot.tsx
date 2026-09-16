import { Button } from "@/components/ui/Button";
import { educationList, experiences, labProjects } from "@/lib/content/experience";

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
              04 / Practice
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

        <ol className="border-t border-surface-border">
          {experiences.map((exp, index) => (
            <li
              key={exp.company}
              className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_1fr_auto] gap-x-4 gap-y-1 border-b border-surface-border py-6"
            >
              <span className="font-mono text-[11px] text-foreground-muted pt-1">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-serif text-[22px] sm:text-[24px] text-foreground leading-tight">
                  {exp.company}
                </h3>
                <p className="text-sm text-foreground-muted mt-1 leading-relaxed">{exp.role}</p>
              </div>
              <p className="font-mono text-[11px] text-foreground-subtle sm:text-right sm:pt-2 col-start-2 sm:col-start-auto">
                {exp.period}
              </p>
            </li>
          ))}
        </ol>

        <div className="grid lg:grid-cols-12 gap-10 mt-14">
          <div className="lg:col-span-5 border-t border-surface-border pt-6">
            <p className="font-mono text-[11px] text-foreground-muted mb-4">Currently</p>
            <ul className="space-y-4">
              <li>
                <p className="font-serif text-[20px] text-foreground">{educationList[0]?.program}</p>
                <p className="text-[13px] text-foreground-muted mt-1">
                  {educationList[0]?.institution} · {educationList[0]?.period}
                </p>
              </li>
              <li>
                <p className="font-serif text-[20px] text-foreground">Network+ · CCNA · Security+</p>
                <p className="text-[13px] text-foreground-muted mt-1">
                  Network+ and CCNA in progress; Security+ planned.
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 border-t border-surface-border pt-6">
            <p className="font-mono text-[11px] text-foreground-muted mb-4">Labs</p>
            <ol className="grid sm:grid-cols-2 gap-x-8">
              {labProjects.map((lab, index) => (
                <li key={lab.title} className="border-b border-surface-border py-4">
                  <span className="font-mono text-[11px] text-foreground-subtle">0{index + 1}</span>
                  <h3 className="font-serif text-[17px] text-foreground mt-1 leading-snug">{lab.title}</h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
