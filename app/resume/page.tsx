import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const metadata: Metadata = {
  title: "Tarik Gungor — Resume",
  description:
    "IT Support Specialist focused on infrastructure, endpoint support, networking, Windows systems, and technical operations.",
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
  bullets: React.ReactNode[];
}

const experiences: WorkExperience[] = [
  {
    company: "BETA PREP",
    role: "IT Specialist",
    location: "Toronto, ON",
    period: "2024 — Present",
    bullets: [
      <>Support and maintain <strong className="font-semibold text-ink dark:text-white">38 endpoints</strong> in a hybrid business environment</>,
      <>Manage and resolve user incidents ensuring minimal operational disruption</>,
      <>Configure and maintain Windows 10/11 devices</>,
      <>Assist with Microsoft 365 administration and user account management</>,
      <>Troubleshoot network connectivity issues (DNS, DHCP, IP configuration)</>,
      <>Deploy and configure new devices for staff use</>,
    ],
  },
  {
    company: "Bestof Floor LTD",
    role: "IT Support Specialist",
    location: "Toronto, ON",
    period: "2023 — Present",
    bullets: [
      <>Provide technical support across a <strong className="font-semibold text-ink dark:text-white">23-device environment</strong></>,
      <>Diagnose and resolve user-reported hardware and software issues</>,
      <>Perform Active Directory user account management</>,
      <>Support internal network infrastructure and connectivity</>,
      <>Maintain system reliability and ensure daily operational continuity</>,
    ],
  },
  {
    company: "Payment Source",
    role: "IT Analyst — Internship",
    location: "Toronto, ON",
    period: "2023",
    bullets: [
      <>Worked with ManageEngine Endpoint Central for device configuration</>,
      <>Assisted in mobile device management (MDM) deployments</>,
      <>Contributed to <strong className="font-semibold text-ink dark:text-white">50+ endpoint configurations</strong></>,
      <>Supported endpoint monitoring and structured policy implementation</>,
    ],
  },
];

interface SkillGroup {
  category: string;
  skills: string;
}

const skillGroups: SkillGroup[] = [
  {
    category: "OPERATING SYSTEMS",
    skills: "Windows 10/11 · Ubuntu Linux",
  },
  {
    category: "DIRECTORY SERVICES",
    skills: "Active Directory — User & Group Management",
  },
  {
    category: "CLOUD & PRODUCTIVITY",
    skills: "Microsoft 365",
  },
  {
    category: "NETWORKING",
    skills: "TCP/IP · DNS · DHCP · VPN · Network Segmentation",
  },
  {
    category: "ENDPOINT MANAGEMENT",
    skills: "Device configuration · Policy deployment · System updates",
  },
  {
    category: "VIRTUALIZATION",
    skills: "Hyper-V · Ubuntu VM Lab Environment",
  },
  {
    category: "SECURITY",
    skills: "Endpoint monitoring · Configuration hardening",
  },
  {
    category: "HARDWARE",
    skills: "Desktop/laptop troubleshooting · Device setup & deployment",
  },
  {
    category: "REMOTE SUPPORT",
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
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-olive-indicator/20 selection:text-ink print:bg-white print:text-black">
      {/* JSON-LD Person Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Utility Header (Sticky on Desktop, Clean & Compact, Hidden on Print) */}
      <header className="w-full border-b border-paper-border/70 dark:border-white/10 bg-paper/92 dark:bg-[#161514]/92 backdrop-blur-xs md:sticky md:top-0 z-30 py-3 sm:py-3.5 print:hidden">
        <div className="max-w-[1080px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-4">
          {/* Left: Monogram & Brand + Back Link */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-ink dark:text-white hover:opacity-80 transition-opacity shrink-0"
              aria-label="Tarik Gungor Home"
            >
              <Image
                src="/assets/logos/tarik-gungor-monogram.svg"
                alt=""
                width={32}
                height={27}
                className="w-7.5 sm:w-8 h-auto dark:invert shrink-0"
              />
              <span className="text-[13.5px] font-semibold tracking-tight hidden sm:inline">
                Tarik Gungor
              </span>
            </Link>
            <span className="text-paper-border dark:text-white/15 select-none" aria-hidden="true">|</span>
            <Link
              href="/"
              className="text-[12px] sm:text-[12.5px] font-mono text-ink-muted dark:text-white/60 hover:text-ink dark:hover:text-white transition-colors flex items-center gap-1.5 truncate"
            >
              <span aria-hidden="true">←</span>
              <span className="hidden sm:inline">Back to home</span>
              <span className="sm:hidden">Home</span>
            </Link>
          </div>

          {/* Right: Download PDF Action & Theme Toggle (Clean, No Visible ATS text) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="/resume/tarik-gungor-resume.pdf"
              download="tarik-gungor-resume.pdf"
              title="Download ATS-friendly PDF resume"
              aria-label="Download ATS-friendly PDF resume"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#141413] text-[#f4f0e8] dark:bg-[#f4f0e8] dark:text-[#141413] font-semibold text-xs sm:text-[12.5px] tracking-tight hover:opacity-90 active:scale-[0.99] transition-all shadow-xs"
            >
              <span>Download PDF</span>
              <span aria-hidden="true">↓</span>
            </a>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Resume Canvas (Centered, max-width: 1080px, tightened top gap) */}
      <main className="flex-1 max-w-[1080px] w-full mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 lg:pt-9 pb-10 sm:pb-12 print:py-0 print:px-0 print:max-w-full">
        <article className="space-y-10 sm:space-y-11 print:space-y-6">
          {/* Identity Block */}
          <header className="space-y-3.5">
            <div>
              <h1 className="font-serif text-[38px] sm:text-[46px] lg:text-[52px] text-ink dark:text-white font-normal tracking-tight leading-[1.05] print:text-black">
                Tarik Gungor
              </h1>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <p className="text-[16px] sm:text-[17px] font-medium text-ink/90 dark:text-white/90 tracking-tight print:text-black">
                  IT Support Specialist
                </p>
                <span className="hidden sm:inline text-paper-border dark:text-white/20 select-none" aria-hidden="true">•</span>
                <p className="text-[13.5px] sm:text-[14px] font-mono text-ink-muted dark:text-white/65 print:text-neutral-700">
                  Infrastructure &amp; Endpoint-Focused
                </p>
              </div>
            </div>

            {/* Contact Information Strip (Scannable Manrope for links, JetBrains Mono for location/separators) */}
            <div className="pt-3 border-t border-paper-border dark:border-white/10 text-[13px] sm:text-[13.5px] text-ink-muted dark:text-white/70 print:border-black/20 print:text-black">
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 font-sans">
                <span className="font-mono text-[12px] sm:text-[12.5px] text-ink dark:text-white font-medium print:text-black">
                  Toronto, ON
                </span>
                <span className="font-mono text-paper-border dark:text-white/20 select-none text-[12px]" aria-hidden="true">•</span>
                <a
                  href="mailto:gungortarik@icloud.com"
                  className="hover:text-ink dark:hover:text-white transition-colors underline-offset-2 hover:underline print:no-underline print:text-black"
                >
                  gungortarik@icloud.com
                </a>
                <span className="font-mono text-paper-border dark:text-white/20 select-none text-[12px]" aria-hidden="true">•</span>
                <a
                  href="https://tarikgungor.com"
                  className="hover:text-ink dark:hover:text-white transition-colors underline-offset-2 hover:underline print:no-underline print:text-black"
                >
                  tarikgungor.com
                </a>
                <span className="font-mono text-paper-border dark:text-white/20 select-none text-[12px]" aria-hidden="true">•</span>
                <a
                  href="https://linkedin.com/in/tarikgungor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink dark:hover:text-white transition-colors underline-offset-2 hover:underline print:no-underline print:text-black"
                >
                  LinkedIn
                </a>
                <span className="font-mono text-paper-border dark:text-white/20 select-none text-[12px]" aria-hidden="true">•</span>
                <a
                  href="https://github.com/gungortarik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink dark:hover:text-white transition-colors underline-offset-2 hover:underline print:no-underline print:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Small Local Section Navigation (Restrained, no # characters, subtle olive hover, Hidden on Print) */}
            <nav
              aria-label="Resume sections"
              className="flex items-center gap-x-5 sm:gap-x-6 gap-y-2 pt-2.5 text-[12px] sm:text-[12.5px] font-sans font-medium text-ink-muted dark:text-white/55 border-t border-paper-border/50 dark:border-white/5 print:hidden overflow-x-auto no-scrollbar"
            >
              {[
                { label: "Summary", href: "#summary" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Labs", href: "#labs" },
                { label: "Education", href: "#education" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-ink dark:hover:text-white transition-colors py-1 shrink-0 group relative"
                >
                  <span>{item.label}</span>
                  <span
                    className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-olive-indicator transition-all duration-200 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </header>

          {/* Section: Summary */}
          <section id="summary" aria-labelledby="summary-heading" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <h2
                id="summary-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink dark:text-white uppercase shrink-0 print:text-black"
              >
                Summary
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border dark:bg-white/10 print:bg-black/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator shrink-0 print:hidden" aria-hidden="true" />
            </div>
            <p className="max-w-[760px] text-[15px] sm:text-[16px] text-ink/95 dark:text-white/90 leading-[1.7] font-normal print:text-black">
              Infrastructure-focused IT support professional supporting 60+ endpoints across hybrid
              business environments. Experienced in Windows 10/11 administration, Active Directory
              user management, Microsoft 365 support, endpoint configuration, and network
              troubleshooting (TCP/IP, DNS, DHCP, VPN). Skilled in hardware support, device
              deployment, remote troubleshooting, and maintaining operational system reliability.
              Actively expanding into systems administration through virtualization and server-based
              lab environments.
            </p>
          </section>

          {/* Section: Technical Skills (Structured 3-Col / 2-Col / 1-Col Grid, Improved Label Contrast) */}
          <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <h2
                id="skills-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink dark:text-white uppercase shrink-0 print:text-black"
              >
                Technical Skills
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border dark:bg-white/10 print:bg-black/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator shrink-0 print:hidden" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-6 sm:gap-y-7">
              {skillGroups.map((group) => (
                <div key={group.category} className="space-y-1.5">
                  <span className="block font-mono text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] uppercase text-ink-subtle dark:text-white/60 print:text-neutral-700">
                    {group.category}
                  </span>
                  <p className="text-[13px] sm:text-[13.5px] text-ink dark:text-white leading-relaxed print:text-black">
                    {group.skills}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Professional Experience (Tightened Vertical Gaps ~32-40px, Bullet Max-Width ~800px) */}
          <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <h2
                id="experience-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink dark:text-white uppercase shrink-0 print:text-black"
              >
                Professional Experience
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border dark:bg-white/10 print:bg-black/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator shrink-0 print:hidden" aria-hidden="true" />
            </div>

            <div className="space-y-8 sm:space-y-9.5 divide-y divide-paper-border/60 dark:divide-white/10 print:divide-black/20">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.company}
                  className={`${idx > 0 ? "pt-8 sm:pt-9.5" : ""} print:break-inside-avoid`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <div>
                      <h3 className="font-serif text-[22px] sm:text-[24px] text-ink dark:text-white font-normal tracking-tight print:text-black">
                        {exp.company}
                      </h3>
                      <p className="text-[14px] sm:text-[14.5px] font-medium text-ink-muted dark:text-white/75 mt-0.5 print:text-neutral-700">
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-[11.5px] sm:text-[12px] font-mono text-ink-subtle dark:text-white/50 sm:text-right shrink-0 print:text-neutral-700">
                      <span>{exp.location}</span>
                      <span className="mx-1.5 select-none" aria-hidden="true">·</span>
                      <span className="text-ink dark:text-white/80 font-medium print:text-black">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-[13.5px] sm:text-[14px] text-ink-muted dark:text-white/75 leading-[1.6] list-disc list-outside pl-4 marker:text-olive-indicator print:text-black max-w-[800px]">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Projects / Labs (Clean 2-Column Editorial Index, Tightened Spacing) */}
          <section id="labs" aria-labelledby="labs-heading" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <h2
                id="labs-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink dark:text-white uppercase shrink-0 print:text-black"
              >
                Projects / Labs
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border dark:bg-white/10 print:bg-black/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator shrink-0 print:hidden" aria-hidden="true" />
            </div>
            <p className="text-[11.5px] font-mono text-ink-subtle dark:text-white/45 mb-5 print:text-neutral-700">
              Technical infrastructure labs &amp; systems configurations
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-5 sm:gap-y-6">
              {labProjects.map((project) => (
                <div
                  key={project.title}
                  className="pt-3 border-t border-paper-border/60 dark:border-white/10 print:border-black/20 print:break-inside-avoid"
                >
                  <h3 className="font-serif text-[18px] sm:text-[18.5px] text-ink dark:text-white font-normal tracking-tight print:text-black">
                    {project.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-ink-muted dark:text-white/65 leading-[1.6] mt-1 print:text-neutral-800">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Education (Tightened Gap Between Schools) */}
          <section id="education" aria-labelledby="education-heading" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <h2
                id="education-heading"
                className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink dark:text-white uppercase shrink-0 print:text-black"
              >
                Education
              </h2>
              <div className="flex-1 h-[1px] bg-paper-border dark:bg-white/10 print:bg-black/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-olive-indicator shrink-0 print:hidden" aria-hidden="true" />
            </div>

            <div className="space-y-4.5 sm:space-y-5 divide-y divide-paper-border/50 dark:divide-white/10 print:divide-black/20">
              {educationList.map((edu, idx) => (
                <div
                  key={edu.institution}
                  className={`${idx > 0 ? "pt-4.5 sm:pt-5" : ""} print:break-inside-avoid`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <div>
                      <h3 className="font-serif text-[19px] sm:text-[20px] text-ink dark:text-white font-normal tracking-tight print:text-black">
                        {edu.institution}
                      </h3>
                      <p className="text-[13.5px] sm:text-[14px] text-ink-muted dark:text-white/75 mt-0.5 print:text-neutral-700">
                        {edu.program}
                      </p>
                    </div>
                    <div className="text-[11.5px] sm:text-[12px] font-mono text-ink-subtle dark:text-white/50 sm:text-right shrink-0 print:text-neutral-700">
                      {edu.location && (
                        <>
                          <span>{edu.location}</span>
                          <span className="mx-1.5 select-none" aria-hidden="true">·</span>
                        </>
                      )}
                      <span className="text-ink dark:text-white/80 font-medium print:text-black">{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Closing Utility Area (Clear Visual Hierarchy, Hidden on Print) */}
          <div className="pt-8 sm:pt-9 border-t border-paper-border/70 dark:border-white/10 space-y-3.5 print:hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Primary Left */}
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink dark:text-white hover:text-olive-dark dark:hover:text-[#a3b18a] transition-colors group"
              >
                <span>See software projects</span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>

              {/* Primary Right + Restrained ATS Note */}
              <div className="flex flex-col sm:items-end">
                <a
                  href="/resume/tarik-gungor-resume.pdf"
                  download="tarik-gungor-resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#141413] text-[#f4f0e8] dark:bg-[#f4f0e8] dark:text-[#141413] font-semibold text-xs sm:text-[13px] tracking-tight hover:opacity-90 active:scale-[0.99] transition-all shadow-xs"
                >
                  <span>Download PDF</span>
                  <span aria-hidden="true">↓</span>
                </a>
                <span className="text-[10.5px] font-mono text-ink-subtle dark:text-white/40 mt-1 select-none">
                  ATS-friendly · text-based PDF
                </span>
              </div>
            </div>

            {/* Tertiary Machine-Readable Action */}
            <div className="pt-2 border-t border-paper-border/40 dark:border-white/5 flex justify-end">
              <a
                href="/resume/tarik-gungor-resume.json"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-subtle dark:text-white/45 hover:text-ink dark:hover:text-white transition-colors"
              >
                <span>Machine-readable JSON</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer (Compact Resume Footer, Reduced Padding, Hidden on Print) */}
      <footer className="w-full bg-paper dark:bg-[#161514] border-t border-paper-border/60 dark:border-white/10 py-6 sm:py-7 mt-8 print:hidden">
        <div className="max-w-[1080px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[12.5px] text-ink-muted dark:text-white/60">
          <div className="flex items-center gap-3.5">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/assets/logos/tarik-gungor-wordmark.png"
                alt="Tarik Gungor"
                width={130}
                height={35}
                className="w-[115px] sm:w-[130px] h-auto object-contain dark:invert"
              />
            </Link>
            <span className="text-paper-border dark:text-white/15 select-none" aria-hidden="true">|</span>
            <span>© 2026 Tarik Gungor</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11.5px]">
            <Link href="/" className="hover:text-ink dark:hover:text-white transition-colors">Home</Link>
            <Link href="/#projects" className="hover:text-ink dark:hover:text-white transition-colors">Projects</Link>
            <a href="https://linkedin.com/in/tarikgungor" target="_blank" rel="noopener noreferrer" className="hover:text-ink dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/gungortarik" target="_blank" rel="noopener noreferrer" className="hover:text-ink dark:hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
