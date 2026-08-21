import type { Metadata } from "next";
import ForTherapistsClient from "./ForTherapistsClient";

export const metadata: Metadata = {
  title: "Join The Bridge — Referral Network for Licensed Therapists",
  description:
    "Hearth refers members who need clinical care to licensed therapists through The Bridge. Warm handoffs from a Keeper who stays in the relationship. No fees, no lead-gen contracts.",
  alternates: { canonical: "/for-therapists" },
  openGraph: {
    title: "Join The Bridge — for licensed therapists",
    description:
      "Warm clinical referrals from Hearth Keepers. No fees, no lead-gen contracts.",
    url: "/for-therapists",
  },
};

export default function Page() {
  return <ForTherapistsClient />;
}
