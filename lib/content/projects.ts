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
  image?: string;
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
    image: "/assets/projects/sonoma-dashboard.png",
  },
  {
    slug: "certforge",
    name: "CertForge",
    tagline: "CCNA & Network+ study platform",
    description:
      "Objective-aligned practice, live network simulations, and review loops for Cisco CCNA and CompTIA Network+. Live preview while it keeps evolving.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
    featured: true,
    href: "/work/certforge",
    liveUrl: "https://certforge-chi.vercel.app",
    image: "/assets/projects/certforge-ospf.png",
    github: "https://github.com/gungortarik/certforge",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
