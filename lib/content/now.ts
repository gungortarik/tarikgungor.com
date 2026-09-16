export interface NowSignal {
  id: string;
  label: string;
  title: string;
  href: string;
  external?: boolean;
}

/** Truthful active threads only — max three on the homepage. */
export const nowSignals: NowSignal[] = [
  {
    id: "sonoma",
    label: "Building",
    title: "Sonoma — private expense & document vault",
    href: "/work/sonoma",
  },
  {
    id: "certforge",
    label: "Building",
    title: "CertForge — CCNA & Network+ study platform",
    href: "https://certforge-chi.vercel.app",
    external: true,
  },
  {
    id: "certs",
    label: "Studying",
    title: "Network+ and CCNA in progress",
    href: "/lab",
  },
];
