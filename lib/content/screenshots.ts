export interface Screenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Intrinsic pixel dimensions of the real captures in public/assets/projects.
 * Frames are sized from these so a screenshot never sits letterboxed inside a
 * box with a different aspect ratio.
 */
export const screenshots = {
  sonomaDashboard: {
    src: "/assets/projects/sonoma-dashboard.png",
    alt: "Sonoma dashboard showing monthly expenses and a spending trend",
    width: 3390,
    height: 1844,
  },
  sonomaLanding: {
    src: "/assets/projects/sonoma-landing.png",
    alt: "Sonoma landing page — a private vault by invitation",
    width: 1664,
    height: 929,
  },
  certforgeSubnetLab: {
    src: "/assets/projects/certforge-subnet-lab.png",
    alt: "CertForge Subnet & CIDR Mastery Lab showing 32-bit binary deconstruction and the computed subnet boundary",
    width: 3328,
    height: 2082,
  },
  certforgePractice: {
    src: "/assets/projects/certforge-practice.png",
    alt: "CertForge practice session setup for CCNA and Network+ domains",
    width: 3328,
    height: 1858,
  },
  certforgeLanding: {
    src: "/assets/projects/certforge-landing.png",
    alt: "CertForge landing page — exam-ready practice for CCNA and Network+",
    width: 1664,
    height: 929,
  },
} satisfies Record<string, Screenshot>;
