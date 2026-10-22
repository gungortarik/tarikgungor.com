export interface Note {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  category: string;
  externalUrl?: string;
}

export const notes: Note[] = [
  {
    slug: "flexible-but-not-free",
    title: "Flexible, but Not Free",
    subtitle: "The hidden cost of gig work for Toronto polytechnic students",
    excerpt:
      "A piece about the trade-offs of app-based gig work while studying in Toronto.",
    date: "July 2026",
    category: "Newsletter",
  },
];
