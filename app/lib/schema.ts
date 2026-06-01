// Centralised JSON-LD helpers. Keep schema in one place so updates propagate.

export const SITE_URL = "https://dearhearth.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

type JsonLd = Record<string, unknown>;

export function jsonLd(obj: JsonLd | JsonLd[]): string {
  return JSON.stringify(obj);
}

/** BreadcrumbList — supply pairs from root downward. */
export function breadcrumbLd(
  items: Array<{ name: string; path: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** FAQPage from {q,a} pairs. */
export function faqLd(items: Array<{ q: string; a: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/** Subscription Service with priced Offers. */
export function pricingServiceLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/pricing#service`,
    name: "Hearth Peer Support",
    serviceType: "Peer Support Subscription",
    url: `${SITE_URL}/pricing`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: {
      "@type": "PeopleAudience",
      audienceType:
        "Adults seeking ongoing non-clinical emotional support, including diaspora communities, caregivers, and people navigating grief, identity, and family pressure",
    },
    category: "Mental wellness and peer support",
    description:
      "Subscription peer support pairing each member with the same trained Keeper. Sits (video/audio sessions), unlimited async Long Talk thread, Friday reflections, Circles, and Embers library. Not therapy.",
    termsOfService: `${SITE_URL}/terms`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hearth Subscription Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Hearthside",
          description:
            "Biweekly Sits, unlimited Long Talk with 24-hour Keeper response, Friday reflections, full Embers library, 1 Circle/month included, Bridge referral access.",
          url: `${SITE_URL}/pricing`,
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          price: "39.00",
          eligibleRegion: { "@type": "Place", name: "Worldwide" },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "39.00",
            priceCurrency: "USD",
            billingDuration: "P1M",
            billingIncrement: 1,
            unitCode: "MON",
          },
          category: "Subscription",
        },
        {
          "@type": "Offer",
          name: "Hearthside (Annual)",
          description:
            "Annual Hearthside plan billed upfront, two months free vs. monthly.",
          url: `${SITE_URL}/pricing`,
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          price: "390.00",
          eligibleRegion: { "@type": "Place", name: "Worldwide" },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "390.00",
            priceCurrency: "USD",
            billingDuration: "P1Y",
            billingIncrement: 1,
            unitCode: "ANN",
          },
          category: "Subscription",
        },
        {
          "@type": "Offer",
          name: "Hearth Deep",
          description:
            "Everything in Hearthside, plus weekly Sits, priority Long Talk with 4-hour response, 2 Circles/month, anniversary rituals, Bridge priority matching.",
          url: `${SITE_URL}/pricing`,
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          price: "99.00",
          eligibleRegion: { "@type": "Place", name: "Worldwide" },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "99.00",
            priceCurrency: "USD",
            billingDuration: "P1M",
            billingIncrement: 1,
            unitCode: "MON",
          },
          category: "Subscription",
        },
        {
          "@type": "Offer",
          name: "Hearth Deep (Annual)",
          description:
            "Annual Hearth Deep plan billed upfront, two months free vs. monthly.",
          url: `${SITE_URL}/pricing`,
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          price: "990.00",
          eligibleRegion: { "@type": "Place", name: "Worldwide" },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "990.00",
            priceCurrency: "USD",
            billingDuration: "P1Y",
            billingIncrement: 1,
            unitCode: "ANN",
          },
          category: "Subscription",
        },
      ],
    },
  };
}

/** Person schema for a Keeper profile page. */
export function keeperPersonLd(k: {
  slug: string;
  name: string;
  fullBio: string;
  city: string;
  languages: string[];
  themes: string[];
  photo?: string;
}): JsonLd {
  const cityName = k.city.split("→").pop()?.trim() ?? k.city;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/keepers/${k.slug}#person`,
    name: k.name,
    url: `${SITE_URL}/keepers/${k.slug}`,
    image: k.photo ? `${SITE_URL}${k.photo}` : `${SITE_URL}/og-image.png`,
    description: k.fullBio.slice(0, 320).trim() + (k.fullBio.length > 320 ? "…" : ""),
    knowsLanguage: k.languages,
    knowsAbout: k.themes,
    worksFor: { "@id": ORG_ID },
    hasOccupation: {
      "@type": "Occupation",
      name: "Peer Support Keeper",
      occupationLocation: { "@type": "City", name: cityName },
      skills: k.themes.join(", "),
    },
  };
}

/** WebPage wrapper for arbitrary pages. */
export function webPageLd(args: {
  path: string;
  name: string;
  description: string;
  lastReviewed?: string;
  inLanguage?: string;
  primaryImage?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${args.path}#webpage`,
    url: `${SITE_URL}${args.path}`,
    name: args.name,
    description: args.description,
    isPartOf: { "@id": SITE_ID },
    inLanguage: args.inLanguage ?? "en-US",
    primaryImageOfPage: args.primaryImage
      ? { "@type": "ImageObject", url: `${SITE_URL}${args.primaryImage}` }
      : undefined,
    lastReviewed: args.lastReviewed,
    publisher: { "@id": ORG_ID },
  };
}

/** Article schema for long-form guides. */
export function articleLd(args: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  wordCount?: number;
  image?: string;
  about?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${args.path}#article`,
    headline: args.headline,
    description: args.description,
    mainEntityOfPage: { "@id": `${SITE_URL}${args.path}#webpage` },
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    inLanguage: "en-US",
    wordCount: args.wordCount,
    image: `${SITE_URL}${args.image ?? "/og-image.png"}`,
    about: args.about?.map((name) => ({ "@type": "Thing", name })),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isAccessibleForFree: true,
  };
}
