import type { Metadata, Viewport } from "next";
import "./globals.css";
import ExitPopup from "./components/ExitPopup";

const SITE_URL = "https://hearth.com";
const SITE_NAME = "Hearth";
const DEFAULT_TITLE = "Hearth — Pull up a chair";
const DEFAULT_DESCRIPTION =
  "Peer support, paired for the long term. Hearth pairs you with a Keeper — a trained companion (not therapy) — for the slow, ongoing weight of grief, family, identity, and the in-between.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · Hearth",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "peer support",
    "diaspora mental health",
    "South Asian therapy alternative",
    "grief support",
    "family pressure",
    "cultural mental health",
    "Keeper peer support",
    "paired peer support",
  ],
  authors: [{ name: "Hearth" }],
  creator: "Hearth",
  publisher: "Hearth",
  alternates: {
    canonical: "/",
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
        alt: "Hearth — Pull up a chair. Peer support, paired for the long term.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@hearth",
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
  icons: {
    icon: "/favicon.ico",
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#F2EDE5",
  width: "device-width",
  initialScale: 1,
};

const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hearth",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description: DEFAULT_DESCRIPTION,
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@hearth.com",
    contactType: "customer support",
    availableLanguage: ["English", "Bengali", "Hindi", "Urdu", "Punjabi"],
  },
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
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
