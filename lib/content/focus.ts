export interface FocusItem {
  number: string;
  category: string;
  title: string;
  description: string;
  status?: string;
}

export const focusItems: FocusItem[] = [
  {
    number: "01",
    category: "BUILDING",
    title: "Sonoma & CertForge",
    description:
      "Sonoma for private expense and document workflows. CertForge as a live CCNA / Network+ study platform.",
    status: "In Progress",
  },
  {
    number: "02",
    category: "STUDYING",
    title: "Computer Systems Technology",
    description: "George Brown College, Toronto — started January 2026.",
  },
  {
    number: "03",
    category: "LEARNING",
    title: "Network+ · CCNA · Security+",
    description: "Network+ and CCNA in progress; Security+ planned.",
  },
  {
    number: "04",
    category: "DOCUMENTING",
    title: "The path as it happens",
    description: "Projects, lessons, decisions, and mistakes — recorded honestly over time.",
  },
];
