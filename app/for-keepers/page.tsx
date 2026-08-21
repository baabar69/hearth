import type { Metadata } from "next";
import ForKeepersClient from "./ForKeepersClient";

export const metadata: Metadata = {
  title: "Become a Keeper: Paid Peer Support Work",
  description:
    "Hearth pays Keepers to hold long-term one-to-one peer support. No clinical licence required. Training, supervision, and members matched to you.",
  alternates: { canonical: "/for-keepers" },
  openGraph: {
    title: "Become a Hearth Keeper",
    description:
      "Paid peer support work, biweekly in USD. No clinical licence required.",
    url: "/for-keepers",
  },
};

export default function Page() {
  return <ForKeepersClient />;
}
