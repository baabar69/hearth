import type { MetadataRoute } from "next";

const SITE = "https://hearth.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/sign-in", "/api/", "/_next/", "/admin"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
