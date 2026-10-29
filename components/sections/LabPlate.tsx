import { TransitionLink } from "@/components/motion/TransitionLink";
import { labProjects } from "@/lib/content/experience";

const featuredLabs = labProjects.slice(0, 4);

const labCodes = [
  "TOPOLOGY // HYPER-V · ESXI",
  "DIRECTORY // OU · GPO",
  "RESOLVER // AD-DNS ZONES",
  "SEGMENT // LINUX DHCP",
];

function LabSchematic({ index }: { index: number }) {
  switch (index) {
    case 0:
      // Multi-DC + Firewall/NAT + SAN topology
      return (
        <svg
          viewBox="0 0 180 44"
          className="h-10 w-40 text-on-depth-subtle group-hover:text-on-depth transition-colors duration-300"
          fill="none"
          aria-hidden="true"
        >
          <rect x="4" y="14" width="22" height="16" stroke="currentColor" strokeWidth="1" />
          <line
            x1="26"
            y1="22"
            x2="68"
            y2="22"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
          <circle
            cx="76"
            cy="22"
            r="7"
            stroke="currentColor"
            strokeWidth="1"
            className="group-hover:stroke-accent transition-colors duration-300"
          />
          <circle
            cx="76"
            cy="22"
            r="2.2"
            className="fill-on-depth-subtle group-hover:fill-accent transition-colors duration-300"
          />
          <path d="M83 22H112M112 22V10H142M112 22V34H142" stroke="currentColor" strokeWidth="1" />
          <rect x="142" y="4" width="32" height="12" stroke="currentColor" strokeWidth="1" />
          <rect x="142" y="28" width="32" height="12" stroke="currentColor" strokeWidth="1" />
          <circle
            cx="148"
            cy="10"
            r="1.5"
            className="fill-accent opacity-60 group-hover:opacity-100 transition-opacity"
          />
          <circle
            cx="148"
            cy="34"
            r="1.5"
            className="fill-accent opacity-60 group-hover:opacity-100 transition-opacity"
          />
        </svg>
      );
    case 1:
      // Active Directory hierarchical OU / GPO tree
      return (
        <svg
          viewBox="0 0 180 44"
          className="h-10 w-40 text-on-depth-subtle group-hover:text-on-depth transition-colors duration-300"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="6"
            y="15"
            width="26"
            height="14"
            stroke="currentColor"
            strokeWidth="1"
            className="group-hover:stroke-accent transition-colors duration-300"
          />
          <circle cx="13" cy="22" r="2" className="fill-accent" />
          <path d="M32 22H66M66 9V35M66 9H102M66 22H102M66 35H102" stroke="currentColor" strokeWidth="1" />
          <rect x="102" y="4" width="28" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="102" y="17" width="28" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="102" y="30" width="28" height="10" stroke="currentColor" strokeWidth="1" />
          <line
            x1="130"
            y1="22"
            x2="168"
            y2="22"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <circle
            cx="170"
            cy="22"
            r="2.5"
            className="fill-on-depth-subtle group-hover:fill-accent transition-colors"
          />
        </svg>
      );
    case 2:
      // Primary / Secondary DNS Zone replication loop
      return (
        <svg
          viewBox="0 0 180 44"
          className="h-10 w-40 text-on-depth-subtle group-hover:text-on-depth transition-colors duration-300"
          fill="none"
          aria-hidden="true"
        >
          <rect x="10" y="11" width="36" height="22" stroke="currentColor" strokeWidth="1" />
          <rect x="134" y="11" width="36" height="22" stroke="currentColor" strokeWidth="1" />
          <path
            d="M46 17H134"
            stroke="currentColor"
            strokeWidth="1"
            className="group-hover:stroke-accent transition-colors duration-300"
          />
          <path d="M134 27H46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="90" cy="17" r="2.5" className="fill-accent" />
          <circle
            cx="28"
            cy="22"
            r="2"
            className="fill-on-depth-subtle group-hover:fill-accent transition-colors"
          />
          <circle
            cx="152"
            cy="22"
            r="2"
            className="fill-on-depth-subtle group-hover:fill-accent transition-colors"
          />
        </svg>
      );
    default:
      // DHCP segmented scope allocation bus
      return (
        <svg
          viewBox="0 0 180 44"
          className="h-10 w-40 text-on-depth-subtle group-hover:text-on-depth transition-colors duration-300"
          fill="none"
          aria-hidden="true"
        >
          <line x1="8" y1="22" x2="172" y2="22" stroke="currentColor" strokeWidth="1" />
          {[24, 66, 108, 150].map((x, idx) => (
            <g key={x}>
              <line x1={x} y1="10" x2={x} y2="34" stroke="currentColor" strokeWidth="1" />
              <circle
                cx={x}
                cy="22"
                r="3"
                className={
                  idx === 1
                    ? "fill-accent"
                    : "fill-depth stroke-current group-hover:fill-accent transition-colors duration-300"
                }
                strokeWidth="1"
              />
            </g>
          ))}
        </svg>
      );
  }
}

export function LabPlate() {
  return (
    <section
      id="lab"
      className="bg-depth text-on-depth"
      aria-labelledby="lab-heading"
      data-field-chapter="lab"
    >
      <div className="page-pad page-width py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="field-meta flex items-center gap-2.5 text-on-depth-subtle">
                <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                Lab / 03 infrastructure
              </p>
              <h2
                id="lab-heading"
                className="mt-3 font-serif text-[28px] sm:text-[36px] tracking-[-0.03em] font-medium leading-[1.1] text-on-depth max-w-[14ch]"
              >
                Systems practice
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-on-depth-muted max-w-[28rem]">
                Infrastructure work from IT support and virtualized labs — documented directly from
                hands-on builds and topology practice.
              </p>
              <TransitionLink
                href="/lab"
                className="group mt-8 inline-flex min-h-11 items-center gap-2 text-[13px] text-on-depth hover:text-accent transition-colors"
              >
                Open Lab directory
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </TransitionLink>
            </div>

            <div className="hidden lg:block border-t border-on-depth-border pt-4 mt-12">
              <p className="field-meta text-on-depth-subtle">ENV // HYPER-V · ESXI · LINUX · AD</p>
            </div>
          </div>

          <ol className="lg:col-span-8 grid sm:grid-cols-2 border-t border-on-depth-border">
            {featuredLabs.map((lab, index) => (
              <li
                key={lab.title}
                data-lab-item
                className="group relative border-b border-on-depth-border sm:odd:border-r py-6 sm:odd:pr-6 sm:even:pl-6 transition-colors duration-300 hover:bg-depth-elevated/60"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] bg-accent origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
                />
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-accent">0{index + 1}</span>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-on-depth-subtle">
                    {labCodes[index]}
                  </span>
                </div>

                <div className="mt-4 py-2 border-y border-on-depth-border/50 flex items-center justify-between">
                  <LabSchematic index={index} />
                  <span className="font-mono text-[10px] text-on-depth-subtle group-hover:text-accent transition-colors">
                    NODE.0{index + 1}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-[18px] sm:text-[20px] leading-snug text-on-depth group-hover:text-accent transition-colors">
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
