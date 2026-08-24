import type { MetadataRoute } from "next";

const SITE = "https://dearhearth.com";

// Real timestamps per route. Bumping these on a deploy is fine: fabricating a
// uniform millisecond timestamp on every request is the thing Google ignores.
// Hand-curated by section so high-priority commercial pages signal recency
// without lying to crawlers.
const ROUTES: Array<{ path: string; priority: number; lastmod: string }> = [
  // Core
  { path: "/",                          priority: 1.0, lastmod: "2026-05-14" },
  { path: "/how-it-works",              priority: 0.9, lastmod: "2026-05-14" },
  { path: "/pricing",                   priority: 0.9, lastmod: "2026-05-14" },
  { path: "/keepers",                   priority: 0.9, lastmod: "2026-05-14" },
  { path: "/hearth-vs-therapy",         priority: 0.9, lastmod: "2026-08-22" },
  { path: "/hearth-vs-betterhelp",      priority: 0.9, lastmod: "2026-08-22" },
  { path: "/learn/peer-support-vs-therapy", priority: 0.9, lastmod: "2026-05-14" },
  { path: "/learn/what-is-a-hearth-keeper", priority: 0.9, lastmod: "2026-08-22" },
  { path: "/learn/do-i-need-therapy",    priority: 0.9, lastmod: "2026-08-22" },
  { path: "/learn/cant-afford-therapy",  priority: 0.9, lastmod: "2026-08-22" },
  { path: "/learn/how-much-does-therapy-cost", priority: 0.9, lastmod: "2026-08-22" },
  { path: "/learn/sliding-scale-therapy", priority: 0.9, lastmod: "2026-08-22" },
  { path: "/learn/therapy-without-insurance", priority: 0.9, lastmod: "2026-08-22" },

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

const FOR_TOPICS: { slug: string; lastmod: string }[] = [
  { slug: "grief", lastmod: "2026-05-14" },
  { slug: "family-pressure", lastmod: "2026-05-14" },
  { slug: "identity", lastmod: "2026-05-14" },
  { slug: "intimacy", lastmod: "2026-05-14" },
  { slug: "sexual-identity", lastmod: "2026-05-14" },
  { slug: "anxiety", lastmod: "2026-05-14" },
  { slug: "bullying", lastmod: "2026-08-24" },
  { slug: "comparison", lastmod: "2026-08-24" },
  { slug: "dating-burnout", lastmod: "2026-08-24" },
];

// Ember essays: per the new-page rule in AGENTS.md, every public page gets a
// sitemap entry. Dates are each essay's publishDate.
const EMBER_SLUGS: { slug: string; lastmod: string }[] = [
  { slug: "the-weight-you-inherited", lastmod: "2025-09-12" },
  { slug: "on-saying-no-to-your-mother", lastmod: "2025-10-04" },
  { slug: "late-grief", lastmod: "2025-11-18" },
  { slug: "code-switch-fatigue", lastmod: "2025-12-09" },
  { slug: "the-bedroom-got-quiet", lastmod: "2026-01-22" },
  { slug: "the-year-i-stopped-performing", lastmod: "2026-02-14" },
  { slug: "the-door-you-were-promised", lastmod: "2026-08-24" },
  { slug: "the-listener-they-switched-off", lastmod: "2026-08-24" },
  { slug: "when-your-name-starts-trending", lastmod: "2026-08-24" },
  { slug: "the-rooms-that-closed", lastmod: "2026-08-24" },
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

  const forEntries = FOR_TOPICS.map((t) => ({
    url: `${SITE}/for/${t.slug}`,
    lastModified: new Date(t.lastmod),
    priority: 0.8,
  }));

  const emberEntries = EMBER_SLUGS.map((e) => ({
    url: `${SITE}/embers/${e.slug}`,
    lastModified: new Date(e.lastmod),
    priority: 0.6,
  }));

  const keeperEntries = KEEPER_SLUGS.map((slug) => ({
    url: `${SITE}/keepers/${slug}`,
    lastModified: new Date("2026-05-14"),
    priority: 0.7,
  }));

  return [...staticEntries, ...forEntries, ...emberEntries, ...keeperEntries];
}
