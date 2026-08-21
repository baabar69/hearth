import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Therapists: Refer Clients to Hearth Peer Support",
  description:
    "How licensed therapists can refer clients to Hearth for the non-clinical, recurring weight of a life. Hearth complements therapy and refers back when clinical care is needed.",
  alternates: { canonical: "/for-therapists" },
  openGraph: {
    title: "For Therapists · Hearth",
    description:
      "How Hearth peer support complements clinical therapy practices.",
    url: "/for-therapists",
    type: "website",
  },
};

export default function ForTherapistsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
