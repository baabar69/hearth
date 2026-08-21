import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Hearth Keeper: Paid Peer Support Work",
  description:
    "Apply to become a Hearth Keeper. Paid peer-support work, 120 hours of training, monthly supervision, paid biweekly in USD. Fewer than 8% of applicants are accepted.",
  alternates: { canonical: "/for-keepers" },
  openGraph: {
    title: "Become a Hearth Keeper",
    description:
      "Paid peer-support work. Training, supervision, and a real living.",
    url: "/for-keepers",
    type: "website",
  },
};

export default function ForKeepersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
