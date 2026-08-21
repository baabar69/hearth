import type { Metadata, Viewport } from "next";
import "./globals.css";
import ExitPopup from "./components/ExitPopup";

const SITE_URL = "https://dearhearth.com";
const SITE_NAME = "Hearth";
const DEFAULT_TITLE = "Hearth: The Private Alternative to Therapy Apps";
const DEFAULT_DESCRIPTION =
  "One trained Keeper, hand-matched to you and kept for years. A video call every two weeks, a chat thread in between, a note every Friday. Peer support, not therapy. From $39 a month.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · Hearth",
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
  authors: [{ name: "Hearth", url: SITE_URL }],
  creator: "Hearth",
  publisher: "Hearth",
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
        alt: "Hearth: the private alternative to therapy apps.",
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
  alternateName: "Dear Hearth",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512,
    caption: "Hearth",
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    "Hearth is a one-to-one peer-support subscription pairing each member with the same trained Keeper for the long term. Not therapy. Not a crisis service.",
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
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@dearhearth.com",
      availableLanguage: ["English", "Bengali", "Hindi", "Urdu", "Punjabi", "Tamil", "Arabic"],
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
    <html lang="en" data-theme="magazine">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
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
        {children}
        <ExitPopup />
      </body>
    </html>
  );
}
