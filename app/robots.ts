import type { MetadataRoute } from "next";

const SITE = "https://dearhearth.com";

// Founder rule: every AI and search crawler is welcome. Nothing is blocked by
// user agent. The only paths kept out are ones with nothing to read: the sign-in
// stub, checkout sessions, the post-payment page and API routes.
//
// /_next/ must stay crawlable. It holds the CSS, JavaScript and optimised images
// that Googlebot needs to render a page the way a visitor sees it.
const DISALLOW = ["/sign-in", "/checkout", "/welcome", "/api/"];

// Named explicitly so each one finds its own group and nobody has to guess.
// They all get the same rules as "*".
const CRAWLERS = [
  // Search engines
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "YandexBot",
  // Google and Apple AI training and answers
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Claude-Web",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Meta
  "meta-externalagent",
  "meta-externalfetcher",
  "FacebookBot",
  // Others
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "cohere-training-data-crawler",
  "CCBot",
  "Bytespider",
  "YouBot",
  "Diffbot",
  "PetalBot",
  // SEO tools: allowed so their free site audits and backlink checks work
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
