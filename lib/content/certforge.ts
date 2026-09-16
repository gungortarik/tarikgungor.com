export const certforgeCaseStudy = {
  slug: "certforge",
  name: "CertForge",
  status: "Live preview · In progress",
  tagline: "A study platform I am building while I study",
  overview:
    "CertForge is an in-progress study platform for Cisco CCNA and CompTIA Network+. It is live so I can use it, not because it is finished. Practice is mapped to official exam domains, questions carry real device output, and a subnet lab sits next to the question loop.",
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
