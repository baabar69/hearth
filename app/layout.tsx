import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ExitPopup from "./components/ExitPopup";

// Self-hosted through next/font: no render-blocking request to Google Fonts,
// files preloaded from our own domain. globals.css reads these variables.
const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://dearhearth.com";
// "Dear Hearth" is the name Google should learn. "Hearth" alone is a common
// noun we can never own, and the rare spelling gets autocorrected to "dear
// heart" until the web treats it as an entity name (docs/seo/audit-2026-09-09.md).
const SITE_NAME = "Dear Hearth";
const DEFAULT_TITLE = "Online Peer Support, an Alternative to Therapy · Dear Hearth";
const DEFAULT_DESCRIPTION =
  "One-to-one online peer support: a trained listener, matched to you by hand and kept for years. An alternative to therapy apps, from $39 a month.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · Dear Hearth",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "peer support",
    "peer support online",
    "online emotional support",
    "alternative to therapy",
    "non-clinical mental health support",
    "diaspora mental health",
    "cultural mental health support",
    "grief support online",
    "caregiver support",
    "long-term peer support",
    "trained companion",
    "subscription emotional support",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dear Hearth: one-to-one online peer support.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@dearhearth",
    site: "@dearhearth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons are provided by file-based metadata conventions
  // (app/favicon.ico, app/icon.svg, app/apple-icon.png), which take
  // precedence over the metadata object and auto-generate the <link> tags.
  category: "health",
  verification: {
    // Wire real values via env when GSC + Bing are claimed.
    // google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    // other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION },
  },
};

export const viewport: Viewport = {
  themeColor: "#F2EDE5",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  legalName: "Hearth",
  alternateName: "Hearth",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512,
    caption: SITE_NAME,
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    "Dear Hearth is a one-to-one online peer support subscription pairing each member with the same trained listener (a Keeper) for the long term. Not therapy. Not a crisis service.",
  slogan: "Pull up a chair.",
  knowsAbout: [
    "Peer support",
    "Emotional support",
    "Grief support",
    "Caregiver support",
    "Diaspora mental health",
    "Identity and belonging",
    "Family dynamics",
  ],
  // Only list profiles that actually resolve. A sameAs pointing at a 404 is a
  // failed entity claim, not a neutral one: x.com/dearhearth was unclaimed and
  // has been removed until it exists.
  sameAs: [
    "https://www.linkedin.com/company/dearhearth",
    "https://www.crunchbase.com/organization/hearth-94b4",
    "https://www.instagram.com/thedearhearth/",
    "https://www.threads.com/@thedearhearth",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@dearhearth.com",
      availableLanguage: ["English", "Urdu", "Hindi", "Punjabi"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      contactType: "privacy",
      email: "privacy@dearhearth.com",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "security",
      email: "security@dearhearth.com",
      availableLanguage: ["English"],
    },
  ],
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: ["Hearth", "dearhearth.com"],
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": ORG_ID },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="magazine"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_LD) }}
        />
      </head>
      <body>
        {/* One <main> landmark for every page (pages render their own nav and
            footer inside it). Pages must not add another <main>. */}
        <main>{children}</main>
        <ExitPopup />
      </body>
    </html>
  );
}
