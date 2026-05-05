import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Trust & security · Hearth",
  description:
    "How we protect what you bring to Hearth — encryption, no data selling, vetted Keepers, honest scope, and the things we will not do with your story.",
};

const PRINCIPLES = [
  {
    eyebrow: "What you say stays here",
    title: "Your Sits, your Long Talks, your story.",
    body: "Everything you bring to a Sit or write into the Long Talk is between you and your Keeper. We don't share it with other Keepers. We don't share it with our team beyond what's needed for safety and quality. We don't sell it. We don't use it to train AI. Ever.",
  },
  {
    eyebrow: "Encrypted, end to end",
    title: "Your messages are not readable on our servers.",
    body: "Long Talk messages, voice notes, and Sit notes are encrypted at rest and in transit. We use HIPAA-comparable security infrastructure — even though Hearth is not a healthcare provider, we hold ourselves to that standard.",
  },
  {
    eyebrow: "No trackers in the room",
    title: "No advertising pixels on authenticated pages.",
    body: "Once you sign in, there are no Facebook pixels, no Google ads tags, no third-party analytics watching what you read or write. Marketing pages have minimal, privacy-respecting analytics. Member pages have none.",
  },
  {
    eyebrow: "You own your story",
    title: "Export it, delete it, take it with you.",
    body: "You can request a full export of your Sit notes, Long Talk messages, and account data at any time. You can delete your account permanently — and within 30 days, your conversation data is removed from our systems and backups.",
  },
];

const KEEPERS = [
  {
    title: "Vetted before they're trusted",
    body: "Every Keeper completes a background check, a structured interview, two reference checks, and a 120-hour pre-launch training. We accept fewer than 1 in 12 applicants.",
  },
  {
    title: "Trained for the work, and the limits",
    body: "Keeper training covers active listening, cultural fluency, scope boundaries, and crisis protocol. The most important thing they learn is what is not theirs to handle — and how to walk you to a clinician when it is.",
  },
  {
    title: "Supervised, ongoing",
    body: "Every Keeper meets with a Lead Keeper monthly for case review and supervision. We take peer support as seriously as a clinical practice takes its own — without pretending it is one.",
  },
  {
    title: "Paid fairly",
    body: "Keepers are paid contractors, not gig workers. Living wages adjusted for their region. We do not optimise for cheap support; we optimise for consistent, slow, careful support.",
  },
];

const CRISIS = [
  {
    title: "What we are not",
    body: "Hearth is not a crisis service. If you are in immediate danger, please call 988 (US), 1-866-585-0445 (Canada), 116 123 (UK Samaritans), or text HOME to 741741 (Crisis Text Line). We have a full list at /crisis.",
  },
  {
    title: "What our Keepers do when something escalates",
    body: "If a Keeper notices something that needs a clinician — sustained suicidal ideation, an active crisis, abuse, anything outside peer support's scope — they pause the Sit gently, share the appropriate crisis resource, and walk you to The Bridge by name. They do not disappear. They do not pretend they can hold it.",
  },
  {
    title: "Mandatory reporting",
    body: "Keepers are not licensed clinicians and do not have the same mandatory reporting obligations therapists do. But we follow the law in your jurisdiction for child safety and immediate danger. We will be honest with you about what that means before your first Sit.",
  },
];

const PROMISES = [
  "We will tell you what Hearth is not, clearly, repeatedly, without apology.",
  "We will not invent therapy credentials our Keepers don't have.",
  "We will not gamify your healing with streaks, badges, or points.",
  "We will not run dark-pattern cancellation flows. One click. No exit interview.",
  "We will not raise your price after you've signed up. Locked at your tier for as long as you stay.",
  "We will not sell, share, or rent your data — to anyone, ever.",
  "We will not let an algorithm match you. A human does it. By hand. In 72 hours.",
  "We will not pretend our Keepers can hold what only a clinician can. The Bridge is a value, not a feature.",
];

export default function TrustPage() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Trust & security
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            Your weight is{" "}
            <span className="ember-word">held with care.</span>
          </h1>
          <p
            style={{
              maxWidth: "60ch",
              marginTop: 28,
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--ink-2)",
            }}
          >
            Hearth is built for the things you don&rsquo;t say out loud
            elsewhere. That puts a particular weight on us &mdash; to handle
            what you bring with the same care your Keeper does. Here&rsquo;s how
            we do it. Plainly, without legalese.
          </p>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Privacy first
              </div>
              <h2 style={{ marginTop: 18 }}>
                The principles{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  underneath everything.
                </span>
              </h2>
            </div>
            <p className="lede">
              These aren&rsquo;t aspirations. They&rsquo;re how the product is
              built &mdash; in the database, in the auth layer, in the
              Keeper&rsquo;s interface, in the lawyer&rsquo;s contract.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
            className="trust-grid-2"
          >
            {PRINCIPLES.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 10,
                  padding: "32px 32px 32px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ember)",
                    marginBottom: 14,
                  }}
                >
                  {p.eyebrow}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 22,
                    lineHeight: 1.25,
                    fontWeight: 380,
                    color: "var(--ink)",
                    marginBottom: 14,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--ink-2)",
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY DETAIL */}
      <section>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 64,
              alignItems: "start",
            }}
            className="trust-row"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ember)",
                  marginBottom: 14,
                }}
              >
                Security infrastructure
              </p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15 }}>
                The technical{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  detail.
                </span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <SpecRow
                label="Encryption at rest"
                value="AES-256 on all conversation data, Sit notes, Long Talk messages, and voice notes."
              />
              <SpecRow
                label="Encryption in transit"
                value="TLS 1.3 on every connection between you, your Keeper, and our servers."
              />
              <SpecRow
                label="Hosting"
                value="US-based infrastructure (AWS), with isolated databases for member data."
              />
              <SpecRow
                label="Auth"
                value="Magic-link sign-in, no passwords to lose. Optional 2FA for additional protection."
              />
              <SpecRow
                label="Backups"
                value="Encrypted daily backups, retained 30 days, then permanently destroyed."
              />
              <SpecRow
                label="Penetration testing"
                value="Independent annual third-party security audit. Findings published in our security log."
              />
              <SpecRow
                label="Insurance"
                value="$1M+ professional liability coverage. Cyber-incident coverage in addition."
              />
              <SpecRow
                label="Standard"
                value="HIPAA-comparable. We are not a covered entity, but we hold ourselves to the same posture."
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEEPERS */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                The people in the chair
              </div>
              <h2 style={{ marginTop: 18 }}>
                Trust is{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  who you sit with.
                </span>
              </h2>
            </div>
            <p className="lede">
              The hardest part of building Hearth is not the encryption. It is
              choosing the people who hold what you bring. We treat that
              choosing seriously.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
            className="trust-grid-2"
          >
            {KEEPERS.map((k, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 10,
                  padding: "28px 28px 28px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    lineHeight: 1.25,
                    fontWeight: 380,
                    color: "var(--ink)",
                    marginBottom: 12,
                  }}
                >
                  {k.title}
                </h3>
                <p
                  style={{
                    color: "var(--ink-2)",
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {k.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRISIS */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                When something escalates
              </div>
              <h2 style={{ marginTop: 18 }}>
                The honest{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  scope conversation.
                </span>
              </h2>
            </div>
            <p className="lede">
              We&rsquo;d rather tell you what Hearth is not than let you discover
              it in a moment that needed something different.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {CRISIS.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 10,
                  padding: "28px 32px",
                  display: "grid",
                  gridTemplateColumns: "240px 1fr",
                  gap: 32,
                  alignItems: "start",
                }}
                className="trust-crisis-row"
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    lineHeight: 1.25,
                    fontWeight: 380,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    color: "var(--ink-2)",
                    fontSize: 15.5,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              textAlign: "center",
            }}
          >
            <Link
              href="/crisis"
              className="btn btn-ghost"
            >
              See full crisis resources &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PROMISES */}
      <section style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="wrap">
          <div style={{ maxWidth: 760, marginInline: "auto", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FFE0B0",
                marginBottom: 18,
              }}
            >
              Eight things we will not do
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                lineHeight: 1.1,
                color: "var(--paper)",
                marginBottom: 56,
              }}
            >
              The promises{" "}
              <span style={{ color: "var(--ember)", fontStyle: "italic", fontWeight: 300 }}>
                in writing.
              </span>
            </h2>
          </div>

          <div style={{ maxWidth: 800, marginInline: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
            {PROMISES.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 18,
                  alignItems: "baseline",
                  paddingBottom: 18,
                  borderBottom: i === PROMISES.length - 1 ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "#FFE0B0",
                    minWidth: 30,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 18,
                    lineHeight: 1.5,
                    color: "var(--paper)",
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
            }}
            className="trust-contact-row"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ember)",
                  marginBottom: 14,
                }}
              >
                Found a security issue?
              </p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.2, marginBottom: 14, fontWeight: 380 }}>
                We want to hear from you.
              </h3>
              <p style={{ color: "var(--ink-2)", fontSize: 15.5, lineHeight: 1.7 }}>
                Email{" "}
                <a href="mailto:security@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  security@dearhearth.com
                </a>
                . Responsible disclosure is welcomed and rewarded. Please give
                us a reasonable window to fix before publishing.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ember)",
                  marginBottom: 14,
                }}
              >
                Privacy questions
              </p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.2, marginBottom: 14, fontWeight: 380 }}>
                Read the long version.
              </h3>
              <p style={{ color: "var(--ink-2)", fontSize: 15.5, lineHeight: 1.7 }}>
                Our{" "}
                <Link href="/privacy" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  Privacy Policy
                </Link>{" "}
                spells out the legal detail. For anything not answered there,
                email{" "}
                <a href="mailto:privacy@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  privacy@dearhearth.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            style={{
              padding: "48px 40px",
              background: "var(--paper-2)",
              borderRadius: 12,
              textAlign: "center",
              border: "1px solid var(--rule-2)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 22,
                lineHeight: 1.4,
                color: "var(--ink)",
                margin: 0,
                maxWidth: "44ch",
                marginInline: "auto",
              }}
            >
              You can pull up a chair knowing the room is built carefully.
            </p>
            <Link href="/intake" className="btn btn-primary btn-lg" style={{ marginTop: 28 }}>
              Begin the First Sit <span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .trust-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .trust-grid-2 { grid-template-columns: 1fr !important; }
          .trust-contact-row { grid-template-columns: 1fr !important; gap: 40px !important; }
          .trust-crisis-row { grid-template-columns: 1fr !important; gap: 12px !important; padding: 24px !important; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 18, alignItems: "baseline", borderBottom: "1px solid var(--rule-2)", paddingBottom: 14 }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>
        {label}
      </span>
      <span style={{ fontFamily: "var(--serif)", fontSize: 16, lineHeight: 1.5, color: "var(--ink)" }}>
        {value}
      </span>
    </div>
  );
}
