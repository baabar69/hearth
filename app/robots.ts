import type { MetadataRoute } from "next";

const SITE = "https://dearhearth.com";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/sign-in", "/checkout", "/welcome", "/api/", "/_next/", "/admin"];

  return {
    rules: [
      // Default: allow everything except auth, checkout, and infra paths.
      { userAgent: "*", allow: "/", disallow },

      // Explicitly welcomed AI/search crawlers — same scope, named for clarity.
      { userAgent: "Googlebot", allow: "/", disallow },
      { userAgent: "Googlebot-Image", allow: "/", disallow },
      { userAgent: "Google-Extended", allow: "/", disallow },
      { userAgent: "Bingbot", allow: "/", disallow },
      { userAgent: "DuckDuckBot", allow: "/", disallow },
      { userAgent: "GPTBot", allow: "/", disallow },
      { userAgent: "OAI-SearchBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow },
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "Perplexity-User", allow: "/", disallow },
      { userAgent: "ClaudeBot", allow: "/", disallow },
      { userAgent: "Claude-Web", allow: "/", disallow },
      { userAgent: "anthropic-ai", allow: "/", disallow },
      { userAgent: "Applebot", allow: "/", disallow },
      { userAgent: "Applebot-Extended", allow: "/", disallow },
      { userAgent: "Amazonbot", allow: "/", disallow },
      { userAgent: "Bytespider", disallow: "/" }, // TikTok scraper — block.
      { userAgent: "MJ12bot", disallow: "/" },     // SEO scraper — block.
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
