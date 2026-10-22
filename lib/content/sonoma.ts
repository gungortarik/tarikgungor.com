export const sonomaCaseStudy = {
  slug: "sonoma",
  name: "Sonoma",
  status: "Private · In Progress",
  tagline: "Personal finance archive and private document vault",
  overview:
    "Sonoma is a privacy-first system for personal expenses and documents. It is built for a small trusted circle — not as a mass-market SaaS product. The work started from a real need: scattered receipts, disconnected files, and no single place that matched how I actually keep records.",
  problem:
    "Consumer finance apps were either too thin or too noisy. Document storage lived apart from spending context. I needed one private system where expenses, receipts, and longer-term documents could stay together — with human review still in control.",
  approach: [
    "Treat privacy and ownership as product requirements, not marketing copy",
    "Keep AI assistance reviewable — extraction helps, the user confirms the record",
    "Unite expenses and documents instead of splitting them across tools",
    "Design for a small invitation-based audience, not public self-serve growth",
  ],
  system: [
    {
      title: "Expenses & review",
      body: "Track spending with categories and a dashboard overview. Receipt extraction can prepare amounts and details, but nothing becomes canonical until I review and confirm it.",
    },
    {
      title: "Private document vault",
      body: "Store important documents with ownership controls, expiry tracking, renewal history, and reminders — the longer-term records that outlast a single transaction.",
    },
    {
      title: "Export on your terms",
      body: "Local archive and optional user-initiated Google Drive export. Nothing leaves automatically.",
    },
  ],
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase Auth + Postgres",
    "Cloudflare R2",
  ],
  learnings: [
    "Shipping for yourself forces clarity about what actually matters",
    "Private tools still deserve production-grade engineering discipline",
    "Restraint beats feature lists when the product has to stay usable",
    "Invitation-based scope keeps the product honest about who it is for",
  ],
  images: {
    landing: "/assets/projects/sonoma-landing.png",
    dashboard: "/assets/projects/sonoma-dashboard.png",
  },
} as const;
