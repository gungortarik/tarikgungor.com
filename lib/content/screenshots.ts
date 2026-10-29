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
    alt: "Sonoma dashboard — Hybrid Glass Shell and Warm Ivory Ledger showing confirmed monthly spending and recent receipts",
    width: 2480,
    height: 1482,
  },
  sonomaLanding: {
    src: "/assets/projects/sonoma-landing.png",
    alt: "Sonoma landing page — Every receipt kept in full, nothing is guessed",
    width: 3328,
    height: 2082,
  },
  sonomaReceipts: {
    src: "/assets/projects/sonoma-receipts.png",
    alt: "Sonoma receipts archive — Evidence Continuum and side peek inspection",
    width: 2480,
    height: 950,
  },
  sonomaExport: {
    src: "/assets/projects/sonoma-export.png",
    alt: "Sonoma archive and export — canonical year packet and Drive backup controls",
    width: 2480,
    height: 950,
  },
  certforgeLanding: {
    src: "/assets/projects/certforge-landing.png",
    alt: "CertForge landing page — exam-ready practice for CCNA and Network+",
    width: 3328,
    height: 2082,
  },
  certforgeDashboard: {
    src: "/assets/projects/certforge-dashboard.png",
    alt: "CertForge study desk dashboard with accuracy, review queue, and domain map",
    width: 3328,
    height: 2082,
  },
  certforgePractice: {
    src: "/assets/projects/certforge-practice.png",
    alt: "CertForge custom practice session builder for CCNA and Network+",
    width: 3328,
    height: 2082,
  },
  certforgeSubnetLab: {
    src: "/assets/projects/certforge-subnet-lab.png",
    alt: "CertForge Subnet & CIDR Mastery Lab showing 32-bit binary deconstruction",
    width: 3328,
    height: 2082,
  },
} satisfies Record<string, Screenshot>;
