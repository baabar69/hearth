import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Trust and Privacy: Where Your Data Lives",
  description:
    "Exactly where your information lives today: Whop for payment, email for the Long Talk, Google Meet for Sits. No ad pixels, no data sales, no recordings.",
  alternates: { canonical: "/trust" },
  openGraph: {
    title: "Trust and Privacy · Hearth",
    description:
      "Where your information lives today, who can see it, and the things we will not do with it.",
    url: "/trust",
    type: "website",
  },
};

const PRINCIPLES = [
  {
    eyebrow: "What you say stays here",
    title: "Your Sits, your Long Talk, your story.",
    body: "Everything you bring to a Sit (your video or audio call) or write in the Long Talk (the message thread with your Keeper) is between you and your Keeper. We don't share it with other Keepers. The founder reads your intake to make the match, and is told if you raise a safety concern, so you are never left alone with it. We don't sell any of it, and we don't use it to train AI.",
  },
  {
    eyebrow: "Plain about security",
    title: "Encrypted in transit. Not end-to-end. Yet.",
    body: "Today the Long Talk is an email thread and Sits run on Google Meet. Both are encrypted between you and the server, but neither is end-to-end encrypted, and email is stored by the providers that carry it. We would rather tell you that than borrow words like \"HIPAA-comparable\". When we move to a private member space, this page will say exactly what changed.",
  },
  {
    eyebrow: "No trackers in the room",
    title: "No advertising pixels. Anywhere.",
    body: "There are no Facebook pixels and no Google Ads tags on this site. We count page visits with PostHog, set up to store no cookies, record no sessions and capture nothing you type into a form. Your Sits and Long Talk never touch any analytics at all.",
  },
  {
    eyebrow: "You own your story",
    title: "Ask, and we delete it.",
    body: "Email privacy@dearhearth.com and we will delete your intake, your match record and our copy of your Long Talk within 30 days. The Long Talk is already yours: it sits in your own inbox, and you can keep it or delete it whenever you like.",
  },
];

const KEEPERS = [
  {
    title: "Vetted before they're trusted",
    body: "Every Keeper completes a background check, a structured interview, two reference checks, and a 120-hour pre-launch training. We accept fewer than 1 in 12 applicants.",
  },
  {
    title: "Trained for the work, and the limits",
    body: "Keeper training covers active listening, trained sensitivity to context, scope boundaries, and crisis protocol. The most important thing they learn is what is not theirs to handle, and how to walk you to a clinician when it is.",
  },
  {
    title: "Supervised, ongoing",
    body: "Every Keeper meets with a Lead Keeper monthly for case review and supervision. We take peer support as seriously as a clinical practice takes its own, without pretending it is one.",
  },
  {
    title: "Paid fairly",
    body: "Keepers are paid contractors, not gig workers. Living wages adjusted for their region. We do not optimise for cheap support; we optimise for consistent, slow, careful support.",
  },
];

const CRISIS = [
  {
    title: "What we are not",
    body: "Hearth is not a crisis service. If you are in immediate danger, please call or text 988 (US and Canada), call 116 123 (UK Samaritans), or text HOME to 741741 (Crisis Text Line, US). We have a full list at /crisis.",
  },
  {
    title: "What our Keepers do when something escalates",
    body: "If a Keeper notices something that needs a clinician (sustained suicidal ideation, an active crisis, abuse, anything outside peer support's scope) they pause the Sit gently, share the right crisis line, and help you find clinical care: Open Path Collective, Psychology Today's directory, or your own doctor. They offer to help you write that first email, there and then. They do not disappear. They do not pretend they can hold it.",
  },
  {
    title: "Mandatory reporting",
    body: "Keepers do not practise as licensed clinicians at Hearth and do not have the same mandatory reporting obligations therapists do. But we follow the law in your jurisdiction for child safety and immediate danger. We will be honest with you about what that means before your first Sit.",
  },
];

const PROMISES = [
  "We will tell you what Hearth is not, clearly, repeatedly, without apology.",
  "We will not invent therapy credentials our Keepers don't have.",
  "We will not gamify your healing with streaks, badges, or points.",
  "We will not run dark-pattern cancellation flows. One click. No exit interview.",
  "We will not raise your price after you've signed up. Locked at your tier for as long as you stay.",
  "We will not sell, share, or rent your data, to anyone, ever.",
  "We will not let an algorithm match you. A human does it. By hand. In 72 hours.",
  "We will not pretend our Keepers can hold what only a clinician can. When you need one, your Keeper helps you find one.",
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
            elsewhere. That puts a particular weight on us, to handle
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
              Hearth is small and run by hand right now, so this page
              describes what is true today, not a roadmap. If something
              changes, this page changes first.
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
                Where your information lives
              </p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15 }}>
                The plain{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  detail.
                </span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <SpecRow
                label="Payment"
                value="Handled by Whop, our payment provider. Your card number goes to Whop, never to us."
              />
              <SpecRow
                label="Your intake"
                value="Sent over HTTPS and delivered by email (through Brevo) to the founder, who makes your match. No database holds it. Our host's server logs briefly keep your first name, email, country and safety answer."
              />
              <SpecRow
                label="Match records"
                value="One spreadsheet: your email, plan, Keeper and dates. Only the founder has access."
              />
              <SpecRow
                label="Sits"
                value="Booked through Cal.com, held on Google Meet. Not recorded."
              />
              <SpecRow
                label="The Long Talk"
                value="An email thread between you and your Keeper's Hearth address, copied to hello@dearhearth.com so it is never lost."
              />
              <SpecRow
                label="The website"
                value="Hosted on Netlify. HTTPS on every page. No member accounts or passwords exist yet, so there are none to leak."
              />
              <SpecRow
                label="Not HIPAA"
                value="Hearth is peer support, not a healthcare provider, so HIPAA does not apply to us and we do not claim to meet it."
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
                . Responsible disclosure is welcome. Please give us a
                reasonable window to fix before publishing.
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
