import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const metadata: Metadata = {
  title: "Resume — Tarik Gungor",
  description:
    "Professional resume of Tarik Gungor — IT Support Specialist focused on infrastructure, endpoints, Active Directory, and systems administration in Toronto, ON.",
  alternates: {
    canonical: "/resume",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tarik Gungor",
  jobTitle: "IT Support Specialist",
  description:
    "Infrastructure-focused IT support professional supporting 60+ endpoints across hybrid business environments. Experienced in Windows 10/11 administration, Active Directory user management, Microsoft 365 support, endpoint configuration, and network troubleshooting.",
  url: "https://tarikgungor.com",
  email: "gungortarik@icloud.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  sameAs: [
    "https://linkedin.com/in/tarikgungor",
    "https://github.com/gungortarik",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "George Brown College",
    },
    {
      "@type": "EducationalOrganization",
      name: "British Columbia Institute of Technology",
    },
  ],
  knowsAbout: [
    "Windows 10/11",
    "Active Directory",
    "Microsoft 365",
    "TCP/IP",
    "DNS",
    "DHCP",
    "VPN",
    "Network Segmentation",
    "Endpoint Management",
    "Hyper-V",
    "Ubuntu Linux",
  ],
};

interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

const experiences: WorkExperience[] = [
  {
    company: "BETA PREP",
    role: "IT Specialist",
    location: "Toronto, ON",
    period: "2024 — Present",
    bullets: [
      "Support and maintain 38 endpoints in a hybrid business environment",
      "Manage and resolve user incidents ensuring minimal operational disruption",
      "Configure and maintain Windows 10/11 devices",
      "Assist with Microsoft 365 administration and user account management",
      "Troubleshoot network connectivity issues (DNS, DHCP, IP configuration)",
      "Deploy and configure new devices for staff use",
    ],
  },
  {
    company: "Bestof Floor LTD",
    role: "IT Support Specialist",
    location: "Toronto, ON",
    period: "2023 — Present",
    bullets: [
      "Provide technical support across a 23-device environment",
      "Diagnose and resolve user-reported hardware and software issues",
      "Perform Active Directory user account management",
      "Support internal network infrastructure and connectivity",
      "Maintain system reliability and ensure daily operational continuity",
    ],
  },
  {
    company: "Payment Source",
    role: "IT Analyst — Internship",
    location: "Toronto, ON",
    period: "2023",
    bullets: [
      "Worked with ManageEngine Endpoint Central for device configuration",
      "Assisted in mobile device management (MDM) deployments",
      "Contributed to 50+ endpoint configurations",
      "Supported endpoint monitoring and structured policy implementation",
    ],
  },
];

interface SkillGroup {
  category: string;
  skills: string;
}

const skillGroups: SkillGroup[] = [
  {
    category: "Operating Systems",
    skills: "Windows 10/11 · Ubuntu Linux",
  },
  {
    category: "Directory Services",
    skills: "Active Directory — User & Group Management",
  },
  {
    category: "Cloud & Productivity",
    skills: "Microsoft 365",
  },
  {
    category: "Networking",
    skills: "TCP/IP · DNS · DHCP · VPN · Network Segmentation",
  },
  {
    category: "Endpoint Management",
    skills: "Device configuration · Policy deployment · System updates",
  },
  {
    category: "Virtualization",
    skills: "Hyper-V · Ubuntu VM Lab Environment",
  },
  {
    category: "Security",
    skills: "Endpoint monitoring · Configuration hardening",
  },
  {
    category: "Hardware",
    skills: "Desktop/laptop troubleshooting · Device setup & deployment",
  },
  {
    category: "Remote Support",
    skills: "Remote diagnostics · Issue resolution",
  },
];

interface LabProject {
  title: string;
  description: string;
}

const labProjects: LabProject[] = [
  {
    title: "Virtualized Enterprise Lab",
    description:
      "NAT/firewall routing, multi-DC design, Linux DHCP, DNS, SAN/iSCSI and failover testing using Hyper-V and VMware/ESXi.",
  },
  {
    title: "Active Directory — Users, OUs & GPO",
    description:
      "Structured OU design, security groups, permissions and policy-based workstation/user settings.",
  },
  {
    title: "DNS — Primary/Secondary + AD-Integrated Zones",
    description:
      "Service configuration, zone design and troubleshooting.",
  },
  {
    title: "DHCP — Linux + Advanced DHCP Service",
    description:
      "Scope planning, options, reservations and validation in a segmented environment.",
  },
  {
    title: "Storage — SAN + iSCSI + RAID",
    description:
      "iSCSI connectivity and redundancy testing, including multi-disk failure scenarios.",
  },
  {
    title: "Failover Cluster — File Servers + Shared Storage",
    description:
      "Cluster design, shared storage using VHD Set, and availability testing.",
  },
  {
    title: "VMware ESXi — Nested Build & Management",
    description:
      "Workstation and nested ESXi environment setup for repeatable lab workflows.",
  },
];

interface Education {
  institution: string;
  program: string;
  location?: string;
  period: string;
}

const educationList: Education[] = [
  {
    institution: "George Brown College",
    program: "Computer Systems Technology — Advanced Diploma",
    location: "Toronto, ON",
    period: "2026 — Ongoing",
  },
  {
    institution: "British Columbia Institute of Technology",
    program: "Technology Support Professional",
    period: "2022 — 2023",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-olive-indicator/20 selection:text-ink">
      {/* JSON-LD Person Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Action & Navigation Bar */}
      <header className="w-full border-b border-paper-border/70 bg-paper/90 backdrop-blur-xs sticky top-0 z-30 py-3.5 sm:py-4">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-ink hover:opacity-75 transition-opacity"
              aria-label="Back to homepage"
            >
              <Image
                src="/assets/logos/tarik-gungor-monogram.svg"
                alt=""
                width={32}
                height={27}
                className="w-7 h-auto dark:invert shrink-0"
              />
              <span className="text-[13.5px] font-semibold tracking-tight hidden sm:inline">
                Tarik Gungor
              </span>
            </Link>
            <span className="hidden sm:inline text-paper-border select-none" aria-hidden="true">|</span>
            <Link
              href="/"
              className="text-[12px] sm:text-[12.5px] font-mono text-ink-muted hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <span aria-hidden="true">←</span>
              <span>Back to home</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/resume/tarik-gungor-resume.pdf"
              download="tarik-gungor-resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#141413] text-[#f4f0e8] dark:bg-[#f4f0e8] dark:text-[#141413] font-semibold text-xs sm:text-[12.5px] tracking-tight hover:opacity-90 active:scale-[0.99] transition-all shadow-xs"
            >
              <span>Download ATS Resume</span>
              <span aria-hidden="true">↓</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Resume Canvas */}
      <main className="flex-1 max-w-[1000px] w-full mx-auto px-6 sm:px-8 lg:px-10 py-10 sm:py-14 lg:py-16">
        <article className="space-y-10 sm:space-y-12">
          {/* Header Block */}
          <header className="space-y-4">
            <div>
              <h1 className="font-serif text-[36px] sm:text-[44px] lg:text-[48px] text-ink font-normal tracking-tight leading-[1.08]">
                Tarik Gungor
              </h1>
              <p className="text-[15px] sm:text-[16px] text-ink-muted font-medium mt-2 tracking-tight">
                IT Support Specialist | Infrastructure &amp; Endpoint-Focused
              </p>
            </div>

            {/* Contact & Professional Links Meta Strip */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 pt-3 border-t border-paper-border text-xs sm:text-[12.5px] font-mono text-ink-muted">
              <span className="text-ink font-medium">Toronto, ON</span>
              <span className="text-paper-border select-none" aria-hidden="true">•</span>
              <a
                href="mailto:gungortarik@icloud.com"
                className="hover:text-ink transition-colors"
              >
                gungortarik@icloud.com
              </a>
              <span className="text-paper-border select-none" aria-hidden="true">•</span>
              <a
                href="https://tarikgungor.com"
                className="hover:text-ink transition-colors"
              >
                tarikgungor.com
              </a>
              <span className="text-paper-border select-none" aria-hidden="true">•</span>
              <a
                href="https://linkedin.com/in/tarikgungor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                linkedin.com/in/tarikgungor
              </a>
              <span className="text-paper-border select-none" aria-hidden="true">•</span>
              <a
                href="https://github.com/gungortarik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                github.com/gungortarik
              </a>
              <span className="text-paper-border select-none" aria-hidden="true">•</span>
              <a
                href="/resume/tarik-gungor-resume.json"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-subtle hover:text-ink transition-colors"
                title="View machine-readable JSON resume"
              >
                [JSON Resume]
              </a>
            </div>
          </header>

          {/* Section: Summary */}
          <section aria-labelledby="summary-heading">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <h2
                id="summary-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink uppercase shrink-0"
              >
                Summary
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border" />
            </div>
            <p className="text-[14px] sm:text-[15px] text-ink-muted leading-[1.75] font-normal">
              Infrastructure-focused IT support professional supporting 60+ endpoints across hybrid
              business environments. Experienced in Windows 10/11 administration, Active Directory
              user management, Microsoft 365 support, endpoint configuration, and network
              troubleshooting (TCP/IP, DNS, DHCP, VPN). Skilled in hardware support, device
              deployment, remote troubleshooting, and maintaining operational system reliability.
              Actively expanding into systems administration through virtualization and server-based
              lab environments.
            </p>
          </section>

          {/* Section: Technical Skills */}
          <section aria-labelledby="skills-heading">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <h2
                id="skills-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink uppercase shrink-0"
              >
                Technical Skills
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5 text-[13px] sm:text-[13.5px] leading-relaxed pb-2 sm:pb-0 border-b sm:border-b-0 border-paper-border/40"
                >
                  <span className="font-mono text-[11px] sm:text-[11.5px] font-semibold text-ink uppercase tracking-wider shrink-0 sm:w-[175px]">
                    {group.category}
                  </span>
                  <span className="text-ink-muted">
                    {group.skills}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Professional Experience */}
          <section aria-labelledby="experience-heading">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <h2
                id="experience-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink uppercase shrink-0"
              >
                Professional Experience
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border" />
            </div>

            <div className="space-y-8 sm:space-y-10 divide-y divide-paper-border/60">
              {experiences.map((exp, idx) => (
                <div key={exp.company} className={idx > 0 ? "pt-8 sm:pt-10" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <div>
                      <h3 className="font-serif text-[21px] sm:text-[23px] text-ink font-normal tracking-tight">
                        {exp.company}
                      </h3>
                      <p className="text-[13.5px] sm:text-[14px] font-medium text-ink-muted mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-[11.5px] sm:text-[12px] font-mono text-ink-subtle sm:text-right shrink-0">
                      <span>{exp.location}</span>
                      <span className="mx-1.5 select-none" aria-hidden="true">·</span>
                      <span className="text-ink-muted font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="mt-3.5 space-y-2 text-[13.5px] sm:text-[14px] text-ink-muted leading-[1.65] list-disc list-outside pl-4 marker:text-olive-indicator">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Projects / Labs */}
          <section aria-labelledby="labs-heading">
            <div className="flex items-center gap-3 mb-2">
              <h2
                id="labs-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink uppercase shrink-0"
              >
                Projects / Labs
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border" />
            </div>
            <p className="text-[11.5px] font-mono text-ink-subtle mb-6">
              Technical infrastructure labs &amp; systems configurations
            </p>

            <div className="space-y-4 divide-y divide-paper-border/40">
              {labProjects.map((project, idx) => (
                <div key={project.title} className={idx > 0 ? "pt-4" : ""}>
                  <h3 className="font-serif text-[17px] sm:text-[18px] text-ink font-normal tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-ink-muted leading-[1.65] mt-1">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Education */}
          <section aria-labelledby="education-heading">
            <div className="flex items-center gap-3 mb-6 sm:mb-7">
              <h2
                id="education-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink uppercase shrink-0"
              >
                Education
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border" />
            </div>

            <div className="space-y-6 divide-y divide-paper-border/50">
              {educationList.map((edu, idx) => (
                <div key={edu.institution} className={idx > 0 ? "pt-6" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <div>
                      <h3 className="font-serif text-[19px] sm:text-[20px] text-ink font-normal tracking-tight">
                        {edu.institution}
                      </h3>
                      <p className="text-[13.5px] sm:text-[14px] text-ink-muted mt-0.5">
                        {edu.program}
                      </p>
                    </div>
                    <div className="text-[11.5px] sm:text-[12px] font-mono text-ink-subtle sm:text-right shrink-0">
                      {edu.location && (
                        <>
                          <span>{edu.location}</span>
                          <span className="mx-1.5 select-none" aria-hidden="true">·</span>
                        </>
                      )}
                      <span className="text-ink-muted font-medium">{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Website-Only Software Projects Bridge Link */}
          <div className="pt-6 sm:pt-8 border-t border-paper-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[12.5px] sm:text-[13px] font-mono">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-ink hover:text-olive-dark dark:hover:text-[#a3b18a] transition-colors group font-medium"
            >
              <span>See additional software projects</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>

            <a
              href="/resume/tarik-gungor-resume.pdf"
              download="tarik-gungor-resume.pdf"
              className="inline-flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors"
            >
              <span>Download ATS Resume (PDF)</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="w-full bg-paper border-t border-paper-border/60 py-10 sm:py-12 mt-12">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[12.5px] text-ink-muted">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/assets/logos/tarik-gungor-wordmark.png"
                alt="Tarik Gungor"
                width={140}
                height={38}
                className="w-[125px] sm:w-[140px] h-auto object-contain dark:invert"
              />
            </Link>
            <span className="text-paper-border select-none" aria-hidden="true">|</span>
            <span>© 2026 Tarik Gungor</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11.5px]">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <Link href="/#projects" className="hover:text-ink transition-colors">Projects</Link>
            <a href="https://linkedin.com/in/tarikgungor" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">LinkedIn</a>
            <a href="https://github.com/gungortarik" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
