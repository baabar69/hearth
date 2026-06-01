import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embers — Hearth's Library on Grief, Identity, and Caregiving",
  description:
    "Embers is Hearth's written library on the recurring themes of a life: grief, family pressure, diaspora identity, caregiving, faith and doubt, postpartum, transitions.",
  alternates: { canonical: "/embers" },
  openGraph: {
    title: "Embers — Hearth's library",
    description:
      "Writing on grief, identity, caregiving, and the in-between.",
    url: "/embers",
    type: "website",
  },
};

export default function EmbersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
