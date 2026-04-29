import Link from "next/link";
import SharedNav from "./components/SharedNav";
import SharedFooter from "./components/SharedFooter";

export const metadata = {
  title: "Lost in the house · Hearth",
  description:
    "The page you were looking for isn't here. Pull up a chair somewhere else.",
};

export default function NotFound() {
  return (
    <>
      <SharedNav />

      <main
        style={{
          minHeight: "calc(100vh - 200px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 580, textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ember)",
              marginBottom: 24,
            }}
          >
            404 &middot; Lost in the house
          </p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(40px, 7vw, 88px)",
              lineHeight: 0.98,
              fontWeight: 300,
              color: "var(--ink)",
              letterSpacing: "-0.035em",
              marginBottom: 28,
            }}
          >
            This room
            <br />
            is <span style={{ color: "var(--ember)", fontStyle: "italic" }}>empty.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--ink-2)",
              maxWidth: "44ch",
              margin: "0 auto 36px",
            }}
          >
            The page you were looking for isn&rsquo;t here. Maybe the link is
            old. Maybe we moved it. Maybe it never existed. Pull up a chair
            somewhere else.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <Link href="/" className="btn btn-primary btn-lg">
              Back to home <span className="arr">&rarr;</span>
            </Link>
            <Link href="/intake" className="btn btn-ghost btn-lg">
              Begin the First Sit
            </Link>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--rule-2)",
              paddingTop: 32,
              maxWidth: 460,
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 16,
              }}
            >
              Or try one of these
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
              }}
            >
              {[
                { href: "/how-it-works", label: "How it works" },
                { href: "/keepers", label: "Meet the Keepers" },
                { href: "/pricing", label: "Pricing" },
                { href: "/embers", label: "Embers" },
                { href: "/stories", label: "Stories" },
                { href: "/faq", label: "Questions" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    padding: "8px 16px",
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    letterSpacing: "0.05em",
                    border: "1px solid var(--rule)",
                    borderRadius: 100,
                    color: "var(--ink-2)",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SharedFooter />
    </>
  );
}
