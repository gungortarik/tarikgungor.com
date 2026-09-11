export const sonomaCaseStudy = {
  slug: "sonoma",
  name: "Sonoma",
  status: "Private · In Progress",
  tagline: "Personal expense and document management",
  overview:
    "Sonoma is a private web application I built to manage personal expenses and documents in one place. It started from a real need — scattered receipts, inconsistent tracking, and no single system that matched how I actually work.",
  problem:
    "Personal finance tools felt either too simple or too bloated. Document storage was separate from spending context. I wanted something tailored to my own workflows without pretending it was a product for everyone.",
  approach: [
    "Built with Next.js and TypeScript for a fast, type-safe foundation",
    "Designed a dashboard-first interface for at-a-glance financial overview",
    "Structured document storage alongside expense records for context",
    "Kept the scope honest — personal use, not a startup pitch",
  ],
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
  learnings: [
    "Shipping for yourself forces clarity about what actually matters",
    "Dashboard design benefits from restraint — fewer metrics, better hierarchy",
    "Private projects still deserve the same engineering discipline as public ones",
  ],
  image: "/assets/projects/sonoma-dashboard.png",
} as const;
