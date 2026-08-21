import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Peer Support FAQ — Matching, Sits, Pricing",
  description:
    "How matching works, what a Sit is, how Hearth differs from therapy, what it costs, and how to cancel. Answered plainly, without hedging.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Hearth FAQ — answered plainly",
    description:
      "Matching, Sits, therapy differences, pricing, cancelling, safety.",
    url: "/faq",
  },
};

export default function Page() {
  return <FaqClient />;
}
