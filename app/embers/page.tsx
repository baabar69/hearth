import type { Metadata } from "next";
import EmbersClient from "./EmbersClient";

export const metadata: Metadata = {
  title: "Embers: Free Essays on Grief and Identity",
  description:
    "Short written pieces on grief, family pressure, faith, caregiving, and identity. Free to read, no account needed.",
  alternates: { canonical: "/embers" },
  openGraph: {
    title: "Embers: small written wisdom, free",
    description:
      "Essays on grief, family pressure, faith, caregiving, and identity.",
    url: "/embers",
  },
};

export default function Page() {
  return <EmbersClient />;
}
