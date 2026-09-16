import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tarikgungor.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work/sonoma`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/certforge`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/lab`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/path`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resume`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/notes`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
