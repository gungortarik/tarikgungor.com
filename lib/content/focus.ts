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
    title: "Sonoma",
    description:
      "Building a private expense and document management tool around real personal workflows.",
    status: "In Progress",
  },
  {
    number: "02",
    category: "STUDYING",
    title: "Computer Systems Technology",
    description: "Currently studying at George Brown College in Toronto.",
  },
  {
    number: "03",
    category: "LEARNING",
    title: "Network+ → Security+",
    description:
      "Strengthening networking fundamentals and working toward the next layer of IT systems knowledge.",
  },
  {
    number: "04",
    category: "DOCUMENTING",
    title: "Work as it happens",
    description:
      "Projects, technical lessons, decisions, mistakes, and progress — documented honestly over time.",
  },
];
