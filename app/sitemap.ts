import type { MetadataRoute } from "next";

const SITE = "https://dearhearth.com";

// Real timestamps per route. Bumping these on a deploy is fine — fabricating a
// uniform millisecond timestamp on every request is the thing Google ignores.
// Hand-curated by section so high-priority commercial pages signal recency
// without lying to crawlers.
const ROUTES: Array<{ path: string; priority: number; lastmod: string }> = [
  // Core
  { path: "/",                          priority: 1.0, lastmod: "2026-05-14" },
  { path: "/how-it-works",              priority: 0.9, lastmod: "2026-05-14" },
  { path: "/pricing",                   priority: 0.9, lastmod: "2026-05-14" },
  { path: "/keepers",                   priority: 0.9, lastmod: "2026-05-14" },
  { path: "/hearth-vs-therapy",         priority: 0.9, lastmod: "2026-05-14" },
  { path: "/learn/peer-support-vs-therapy", priority: 0.9, lastmod: "2026-05-14" },
  { path: "/learn/what-is-a-hearth-keeper", priority: 0.9, lastmod: "2026-08-22" },

  // Mid-funnel
  { path: "/about",                     priority: 0.7, lastmod: "2026-05-14" },
  { path: "/why-paired",                priority: 0.7, lastmod: "2026-05-14" },
  { path: "/stories",                   priority: 0.7, lastmod: "2026-05-14" },
  { path: "/circles",                   priority: 0.7, lastmod: "2026-05-14" },
  { path: "/embers",                    priority: 0.7, lastmod: "2026-05-14" },
  { path: "/bridge",                    priority: 0.7, lastmod: "2026-05-14" },
  { path: "/faq",                       priority: 0.7, lastmod: "2026-05-14" },

  // Audience-specific
  { path: "/for-keepers",               priority: 0.6, lastmod: "2026-05-14" },
  { path: "/for-therapists",            priority: 0.6, lastmod: "2026-05-14" },
  { path: "/gift",                      priority: 0.5, lastmod: "2026-05-14" },

  // Trust / informational
  { path: "/trust",                     priority: 0.6, lastmod: "2026-05-14" },
  { path: "/crisis",                    priority: 0.6, lastmod: "2026-05-14" },
  { path: "/press",                     priority: 0.4, lastmod: "2026-05-14" },
  { path: "/accessibility",             priority: 0.3, lastmod: "2026-05-14" },
  { path: "/privacy",                   priority: 0.3, lastmod: "2026-05-14" },
  { path: "/terms",                     priority: 0.3, lastmod: "2026-05-14" },
  // Note: /sign-in, /checkout, /welcome, /intake are intentionally excluded.
  // /intake is a conversion flow that should not absorb crawl budget.
];

const FOR_TOPICS = [
  "grief",
  "family-pressure",
  "identity",
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
  const staticEntries = ROUTES.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: new Date(r.lastmod),
    priority: r.priority,
  }));

  const forEntries = FOR_TOPICS.map((slug) => ({
    url: `${SITE}/for/${slug}`,
    lastModified: new Date("2026-05-14"),
    priority: 0.8,
  }));

  const keeperEntries = KEEPER_SLUGS.map((slug) => ({
    url: `${SITE}/keepers/${slug}`,
    lastModified: new Date("2026-05-14"),
    priority: 0.7,
  }));

  return [...staticEntries, ...forEntries, ...keeperEntries];
}
