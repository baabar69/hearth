import type { Metadata } from "next";
import GiftClient from "./GiftClient";

export const metadata: Metadata = {
  title: "Gift a Membership: Long-Term Peer Support",
  description:
    "Give a month or a year of Hearth. They are matched with their own Keeper within 72 hours. No awkward reveal, no expiry pressure.",
  alternates: { canonical: "/gift" },
  openGraph: {
    title: "Light a Hearth: give someone a chair",
    description:
      "Give a month or a year. Matched with their own Keeper in 72 hours.",
    url: "/gift",
  },
};

export default function Page() {
  return <GiftClient />;
}
