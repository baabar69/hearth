import type { Metadata } from "next";
import ForKeepersClient from "./ForKeepersClient";

export const metadata: Metadata = {
  title: "Become a Keeper — Paid Peer Support Work at Hearth",
  description:
    "Hearth pays Keepers 60% of member revenue to hold long-term one-to-one peer support. No clinical licence required. Training, supervision, and members matched to you.",
  alternates: { canonical: "/for-keepers" },
  openGraph: {
    title: "Become a Hearth Keeper",
    description:
      "Paid peer support work. 60% of member revenue. No clinical licence required.",
    url: "/for-keepers",
  },
};

export default function Page() {
  return <ForKeepersClient />;
}
