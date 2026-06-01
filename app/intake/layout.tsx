import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hearth Intake — Tell us what you're carrying",
  description:
    "A 12-minute intake. We use what you tell us to hand-pair you with the Keeper most likely to fit.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/intake" },
};

export default function IntakeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
