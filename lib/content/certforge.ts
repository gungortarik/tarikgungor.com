export const certforgeCaseStudy = {
  slug: "certforge",
  name: "CertForge",
  status: "In progress",
  tagline: "CCNA & Network+ study platform",
  overview:
    "CertForge is an in-progress study platform for Cisco CCNA and CompTIA Network+. It brings objective-aligned practice, questions with device output, and subnetting tools together. It is still being built, not a finished product.",
  problem:
    "Static dumps reward memorization. I needed a place to practice against the blueprint, see why an answer is wrong, and work subnetting and routing as systems — not as flashcards.",
  system: [
    {
      title: "Practice console",
      body: "Questions arrive with real device output. The OSPF one shows an adjacency stuck in EXSTART because two interfaces disagree on MTU — the kind of failure you have to read off a console, not memorize.",
    },
    {
      title: "Subnet lab & dojo",
      body: "A 32-bit binary visualizer, magic-number shortcut, VLSM planner, and drill — a working lab for prefix math while Network+ and CCNA are in progress.",
    },
    {
      title: "Practice & review",
      body: "Domain-filtered sessions, explanations, and a wrong-answer queue. The product is still taking shape around that loop.",
    },
  ],
  stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  liveUrl: "https://certforge-chi.vercel.app",
  github: "https://github.com/gungortarik/certforge",
} as const;
