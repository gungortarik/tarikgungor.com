export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experiences: WorkExperience[] = [
  {
    company: "BETA PREP",
    role: "IT Specialist",
    location: "Toronto, ON",
    period: "2024 — Present",
    bullets: [
      "Support and maintain **38 endpoints** in a hybrid business environment",
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
      "Provide technical support across a **23-device environment**",
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
      "Contributed to **50+ endpoint configurations**",
      "Supported endpoint monitoring and structured policy implementation",
    ],
  },
];

export interface SkillGroup {
  category: string;
  skills: string;
}

export const skillGroups: SkillGroup[] = [
  { category: "OPERATING SYSTEMS", skills: "Windows 10/11 · Ubuntu Linux" },
  { category: "DIRECTORY SERVICES", skills: "Active Directory — User & Group Management" },
  { category: "CLOUD & PRODUCTIVITY", skills: "Microsoft 365" },
  { category: "NETWORKING", skills: "TCP/IP · DNS · DHCP · VPN · Network Segmentation" },
  { category: "ENDPOINT MANAGEMENT", skills: "Device configuration · Policy deployment · System updates" },
  { category: "VIRTUALIZATION", skills: "Hyper-V · Ubuntu VM Lab Environment" },
  { category: "SECURITY", skills: "Endpoint monitoring · Configuration hardening" },
  { category: "HARDWARE", skills: "Desktop/laptop troubleshooting · Device setup & deployment" },
  { category: "REMOTE SUPPORT", skills: "Remote diagnostics · Issue resolution" },
];

export interface LabProject {
  title: string;
  description: string;
}

export const labProjects: LabProject[] = [
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
    description: "Service configuration, zone design and troubleshooting.",
  },
  {
    title: "DHCP — Linux + Advanced DHCP Service",
    description: "Scope planning, options, reservations and validation in a segmented environment.",
  },
  {
    title: "Storage — SAN + iSCSI + RAID",
    description: "iSCSI connectivity and redundancy testing, including multi-disk failure scenarios.",
  },
  {
    title: "Failover Cluster — File Servers + Shared Storage",
    description: "Cluster design, shared storage using VHD Set, and availability testing.",
  },
  {
    title: "VMware ESXi — Nested Build & Management",
    description: "Workstation and nested ESXi environment setup for repeatable lab workflows.",
  },
];

export interface Education {
  institution: string;
  program: string;
  location?: string;
  period: string;
}

export const educationList: Education[] = [
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
