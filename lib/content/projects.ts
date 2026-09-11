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
}

export const projects: Project[] = [
  {
    slug: "sonoma",
    name: "Sonoma",
    tagline: "Private expense and document management",
    description:
      "A private expense and document management tool I built for personal use — tracking spending, organizing documents, and keeping real workflows in one place.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
    featured: true,
    href: "/work/sonoma",
    image: "/assets/projects/sonoma-dashboard.png",
  },
  {
    slug: "certforge",
    name: "CertForge",
    tagline: "IT certification study platform",
    description:
      "An IT certification study platform built around Network+ and CCNA preparation. Currently paused while I refocus on school and Sonoma.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "paused",
    featured: false,
    github: "https://github.com/gungortarik/certforge",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
