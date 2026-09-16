import Link from "next/link";
import { educationList, experiences, labProjects } from "@/lib/content/experience";

export function ExperienceSnapshot() {
  return (
    <section id="experience" className="border-t border-surface-border">
      <div className="px-5 sm:px-7 lg:px-8 py-12 sm:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <p className="home-folio text-foreground-muted">Practice</p>
          <Link href="/resume" className="home-folio text-foreground-muted hover:text-foreground py-1">
            Full resume ↗
          </Link>
        </div>

        <ol className="mt-8">
          {experiences.map((exp) => (
            <li
              key={exp.company}
              className="grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-1 border-t border-surface-border py-5"
            >
              <h3 className="sm:col-span-5 font-serif text-[17px] sm:text-[18px] leading-snug font-medium tracking-[-0.02em]">
                {exp.company}
              </h3>
              <div className="sm:col-span-5">
                <p className="text-[14px] text-foreground-muted leading-snug">{exp.role}</p>
                <p className="home-folio text-foreground-subtle mt-1">{exp.location}</p>
              </div>
              <p className="sm:col-span-2 home-folio text-foreground-subtle sm:text-right sm:pt-1">
                {exp.period}
              </p>
            </li>
          ))}
        </ol>

        <div className="grid lg:grid-cols-12 gap-10 mt-2 border-t border-surface-border pt-8">
          <div className="lg:col-span-5">
            <p className="home-folio text-foreground-muted mb-4">Currently</p>
            <p className="font-serif text-[16px] leading-snug">{educationList[0]?.program}</p>
            <p className="text-[13px] text-foreground-muted mt-2">
              {educationList[0]?.institution} · {educationList[0]?.period}
            </p>
            <p className="font-serif text-[16px] leading-snug mt-6">Network+ · CCNA · Security+</p>
            <p className="text-[13px] text-foreground-muted mt-2">
              Network+ and CCNA in progress; Security+ planned.
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="home-folio text-foreground-muted mb-4">Labs</p>
            <ol>
              {labProjects.map((lab) => (
                <li key={lab.title} className="border-t border-surface-border py-3">
                  <h3 className="text-[14px] sm:text-[15px] leading-snug">{lab.title}</h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
