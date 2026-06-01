import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hearth FAQ — Peer Support Questions, Answered Plainly",
  description:
    "Honest answers about Hearth: is it therapy, how Keepers are trained, pricing, the Bridge, privacy, crisis policy. Forty-plus questions, no hedging.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Hearth FAQ — Answered plainly",
    description:
      "Common questions about Hearth's peer-support model, pricing, privacy, and clinical handoff.",
    url: "/faq",
    type: "website",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
