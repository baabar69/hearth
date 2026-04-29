import type { MetadataRoute } from "next";

const SITE = "https://hearth.com";

const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/keepers", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/embers", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/intake", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/bridge", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/hearth-vs-therapy", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/why-paired", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/stories", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/circles", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/gift", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/for-keepers", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/for-therapists", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/trust", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/accessibility", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/press", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/crisis", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/sign-in", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

const FOR_TOPICS = [
  "grief",
  "family-pressure",
  "diaspora",
  "intimacy",
  "sexual-identity",
  "anxiety",
];

const KEEPER_SLUGS = [
  "aruna-bhattacharya",
  "rabia-k",
  "faisal-m",
  "priya-s",
  "hassan-a",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const forEntries = FOR_TOPICS.map((slug) => ({
    url: `${SITE}/for/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const keeperEntries = KEEPER_SLUGS.map((slug) => ({
    url: `${SITE}/keepers/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...forEntries, ...keeperEntries];
}
