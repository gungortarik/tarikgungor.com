export const certforgeCaseStudy = {
  slug: "certforge",
  name: "CertForge",
  status: "Live preview · In progress",
  tagline: "A study platform I am building while I study",
  overview:
    "CertForge is an in-progress study platform for Cisco CCNA and CompTIA Network+. It is live so I can use it, not because it is finished. Practice is mapped to official exam domains. Live labs — OSPF topology and a subnet dojo — sit next to the question loop.",
  problem:
    "Static dumps reward memorization. I needed a place to practice against the blueprint, see why an answer is wrong, and work subnetting and routing as systems — not as flashcards.",
  system: [
    {
      title: "OSPF topology",
      body: "A live simulation of a neighbor stuck in EXSTART from an MTU mismatch — the kind of failure you have to see, not only read about.",
    },
    {
      title: "Subnet lab & dojo",
      body: "IPv4 bit-matrix, CIDR partition, and drill — a working lab for prefix math while Network+ and CCNA are in progress.",
    },
    {
      title: "Practice & review",
      body: "Domain-filtered sessions, explanations, and a wrong-answer queue. The product is still taking shape around that loop.",
    },
  ],
  stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  liveUrl: "https://certforge-chi.vercel.app",
  github: "https://github.com/gungortarik/certforge",
  images: {
    ospf: "/assets/projects/certforge-ospf.png",
    subnetLab: "/assets/projects/certforge-subnet-lab.png",
    subnetMatrix: "/assets/projects/certforge-subnet-matrix.png",
    practice: "/assets/projects/certforge-practice.png",
    landing: "/assets/projects/certforge-landing.png",
  },
} as const;
