import Link from "next/link";
import SharedNav from "../components/SharedNav";

/**
 * There is no account system yet. The previous version of this page was a
 * form whose submit handler set a flag and told the member a sign-in link had
 * been sent. No link was ever sent. Until real auth exists, this page tells
 * the truth: everything happens over email with your Keeper.
 */
export default function SignInPage() {
  return (
    <>
      <SharedNav />

      <main
        style={{
          minHeight: "calc(100vh - 80px)",
          background: "var(--paper)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 24px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 460,
            background: "white",
            border: "1px solid var(--rule)",
            borderRadius: 12,
            padding: "48px 40px",
            boxShadow: "0 30px 60px -40px rgba(26,23,20,0.12)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ember)",
              marginBottom: 12,
            }}
          >
            Members
          </p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.2,
              color: "var(--ink)",
              marginBottom: 12,
              fontWeight: 300,
            }}
          >
            Welcome back.
          </h1>
          <p
            style={{
              color: "var(--ink-2)",
              fontSize: 15.5,
              lineHeight: 1.65,
              marginBottom: 18,
            }}
          >
            Right now, Hearth happens over email. Your Keeper writes to you
            directly, your Long Talk is the thread between you, and your Sits
            are booked from the link in their messages. There is nothing to
            sign in to yet.
          </p>
          <p
            style={{
              color: "var(--ink-2)",
              fontSize: 15.5,
              lineHeight: 1.65,
              marginBottom: 28,
            }}
          >
            Lost the thread? Write to us and a person answers, usually the
            same day.
          </p>

          <a
            href="mailto:hello@dearhearth.com?subject=Hello%20from%20a%20member"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Email hello@dearhearth.com <span className="arr">&rarr;</span>
          </a>

          <p
            style={{
              marginTop: 16,
              color: "var(--ink-3)",
              fontSize: 13.5,
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Manage or cancel your membership any time at{" "}
            <a
              href="https://whop.com/@me/settings/memberships"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ember)" }}
            >
              whop.com
            </a>
            .
          </p>

          <div
            style={{
              marginTop: 32,
              paddingTop: 24,
              borderTop: "1px solid var(--rule-2)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "var(--ink-3)",
                fontSize: 14,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Not a member yet?{" "}
              <Link
                href="/intake"
                style={{ color: "var(--ember)", textDecoration: "underline" }}
              >
                Begin the First Sit
              </Link>
            </p>
          </div>

          <p
            style={{
              marginTop: 28,
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              color: "var(--ink-3)",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            Our{" "}
            <Link href="/terms" style={{ color: "var(--ember)" }}>
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" style={{ color: "var(--ember)" }}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}
