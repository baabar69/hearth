"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/keepers", label: "Keepers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/embers", label: "Embers" },
  { href: "/bridge", label: "The Bridge" },
];

export default function SharedNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeStyle = { color: "var(--ember)", fontWeight: 600 };
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link href="/" className="brand">
            <span className="brand-mark" />
            <span className="brand-name">Hearth</span>
          </Link>
          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={isActive(l.href) ? activeStyle : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="nav-cta">
            <Link href="/sign-in" className="btn btn-ghost btn-sm nav-signin">
              Sign in
            </Link>
            <Link href="/intake" className="btn btn-primary btn-sm">
              Pull up a chair <span className="arr">&rarr;</span>
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="nav-hamburger"
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 4px",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <span style={{ display: "block", width: 22, height: 2, background: "var(--ink)", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2, background: "var(--ink)", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2, background: "var(--ink)", borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--ink)",
            display: "flex",
            flexDirection: "column",
            padding: "24px 32px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--paper)", textDecoration: "none" }}>
              Hearth
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--paper)", fontSize: 28, lineHeight: 1, padding: 4 }}
            >
              &times;
            </button>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  color: isActive(l.href) ? "var(--ember)" : "var(--paper)",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  fontWeight: isActive(l.href) ? 500 : 300,
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 14 }}>
            <Link
              href="/sign-in"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--paper)",
                textDecoration: "none",
                opacity: 0.7,
              }}
            >
              Sign in
            </Link>
            <Link
              href="/intake"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary btn-sm"
              style={{ alignSelf: "flex-start" }}
            >
              Pull up a chair &rarr;
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-hamburger { display: flex !important; }
          .nav-signin { display: none !important; }
        }
      `}</style>
    </>
  );
}
