import { screenshots, type Screenshot } from "@/lib/content/screenshots";

export type ProjectStatus = "in-progress" | "paused" | "completed" | "private";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  featured: boolean;
  href?: string;
  cover?: Screenshot;
  github?: string;
  liveUrl?: string;
  external?: boolean;
}

export const projects: Project[] = [
  {
    slug: "sonoma",
    name: "Sonoma",
    tagline: "Private expense and document vault",
    description:
      "A privacy-first archive for expenses and documents — built for personal workflows and a small trusted circle, not public self-serve growth.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
    featured: true,
    href: "/work/sonoma",
    cover: screenshots.sonomaLanding,
  },
  {
    slug: "certforge",
    name: "CertForge",
    tagline: "CCNA & Network+ study platform",
    description:
      "Objective-aligned practice with real device output, a subnet and CIDR lab, and review loops for Cisco CCNA and CompTIA Network+. Live preview while it keeps evolving.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
    featured: true,
    href: "/work/certforge",
    liveUrl: "https://certforge-chi.vercel.app",
    cover: screenshots.certforgeLanding,
    github: "https://github.com/gungortarik/certforge",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
