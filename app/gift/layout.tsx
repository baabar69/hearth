import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift a Hearth Membership — From $39 / Month of Peer Support",
  description:
    "Gift a month of Hearth peer support starting at $39. The recipient gets a gentle onboarding email, not an invoice. You choose the delivery date.",
  alternates: { canonical: "/gift" },
  openGraph: {
    title: "Gift a Hearth Membership",
    description:
      "Give a month of paired peer support. From $39.",
    url: "/gift",
    type: "website",
  },
};

export default function GiftLayout({ children }: { children: React.ReactNode }) {
  return children;
}
