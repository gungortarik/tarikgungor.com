import Link from "next/link";
import { labProjects } from "@/lib/content/experience";

const featuredLabs = labProjects.slice(0, 4);

export function LabPlate() {
  return (
    <section
      className="bg-depth text-on-depth"
      aria-labelledby="lab-heading"
      data-field-chapter="lab"
    >
      <div className="page-pad page-width py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="field-meta text-on-depth-subtle">Lab</p>
            <h2
              id="lab-heading"
              className="mt-3 font-serif text-[28px] sm:text-[36px] tracking-[-0.03em] font-medium leading-[1.1] text-on-depth max-w-[14ch]"
            >
              Systems practice
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-on-depth-muted max-w-[28rem]">
              Infrastructure work from IT support and virtualized labs — listed as it is, without
              invented diagrams.
            </p>
            <Link
              href="/lab"
              className="mt-8 inline-flex min-h-11 items-center text-[13px] text-on-depth hover:text-accent transition-colors underline-offset-4 hover:underline"
            >
              Open Lab →
            </Link>
          </div>

          <ol className="lg:col-span-8 grid sm:grid-cols-2 border-t border-on-depth-border">
            {featuredLabs.map((lab, index) => (
              <li
                key={lab.title}
                data-lab-item
                className="border-b border-on-depth-border sm:odd:border-r py-6 sm:odd:pr-6 sm:even:pl-6"
              >
                <span className="font-mono text-[11px] text-accent">0{index + 1}</span>
                <h3 className="mt-3 font-serif text-[18px] sm:text-[20px] leading-snug text-on-depth">
                  {lab.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-on-depth-muted">
                  {lab.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
