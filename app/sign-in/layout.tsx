import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in to Hearth",
  description: "Sign in to your Hearth account.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/sign-in" },
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return children;
}
