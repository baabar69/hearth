import type { Metadata } from "next";
import ForTherapistsClient from "./ForTherapistsClient";

export const metadata: Metadata = {
  title: "The Bridge: For Licensed Therapists",
  description:
    "Join The Bridge, the partner network of licensed therapists Hearth is building for members who need clinical care. No fees, no lead-gen contracts.",
  alternates: { canonical: "/for-therapists" },
  openGraph: {
    title: "Join The Bridge, for licensed therapists",
    description:
      "Warm clinical referrals from Hearth Keepers. No fees, no lead-gen contracts.",
    url: "/for-therapists",
  },
};

export default function Page() {
  return <ForTherapistsClient />;
}
