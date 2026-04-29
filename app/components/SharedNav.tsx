"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SharedNav() {
  const pathname = usePathname();

  const activeStyle = {
    color: "var(--ember)",
    fontWeight: 600,
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark" />
          <span className="brand-name">Hearth</span>
        </Link>
        <nav className="nav-links">
          <Link href="/how-it-works" style={isActive("/how-it-works") ? activeStyle : undefined}>How it works</Link>
          <Link href="/keepers" style={isActive("/keepers") ? activeStyle : undefined}>Keepers</Link>
          <Link href="/pricing" style={isActive("/pricing") ? activeStyle : undefined}>Pricing</Link>
          <Link href="/embers" style={isActive("/embers") ? activeStyle : undefined}>Embers</Link>
          <Link href="/bridge" style={isActive("/bridge") ? activeStyle : undefined}>The Bridge</Link>
        </nav>
        <div className="nav-cta">
          <Link href="/sign-in" className="btn btn-ghost btn-sm">
            Sign in
          </Link>
          <Link href="/#cta" className="btn btn-primary btn-sm">
            Pull up a chair <span className="arr">&rarr;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
