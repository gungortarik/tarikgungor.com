export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Notes", href: "/notes" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
