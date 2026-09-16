export interface NavItem {
  label: string;
  href: string;
  /** De-emphasized in primary chrome (utility) */
  utility?: boolean;
}

export const mainNav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Lab", href: "/lab" },
  { label: "Path", href: "/path" },
  { label: "Notes", href: "/notes" },
  { label: "Resume", href: "/resume", utility: true },
  { label: "Contact", href: "/contact" },
];

/** Priority links shown before the mobile “More” drawer collapses */
export const mobilePriorityNav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Lab", href: "/lab" },
  { label: "Path", href: "/path" },
];
