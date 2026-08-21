import type { Metadata } from "next";
import Link from "next/link";
import SharedNav from "../../components/SharedNav";
import SharedFooter from "../../components/SharedFooter";
import {
  articleLd,
  breadcrumbLd,
  faqLd,
  jsonLd,
  webPageLd,
} from "../../lib/schema";

const PUBLISHED = "2026-08-22";
const REVIEWED = "2026-08-22";

export const metadata: Metadata = {
  title: "Can't Afford Therapy? What to Actually Do",
  description:
    "Sliding scale, Open Path, university clinics, employer EAPs, NAMI groups, warmlines and free listening lines. What each really costs, what the trade-off is, and the exact words to use when asking.",
  alternates: { canonical: "/learn/cant-afford-therapy" },
  openGraph: {
    type: "article",
    title: "Cannot Afford Therapy? What to Actually Do",
    description:
      "The real options when therapy is out of reach, what each costs, and the exact wording to use when asking for a reduced fee.",
    url: "/learn/cant-afford-therapy",
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "What can I do if I cannot afford therapy?",
    a: "Ask your therapist directly about a sliding scale, since many hold reduced-fee slots they do not advertise. Look at Open Path Psychotherapy Collective, where sessions run roughly $30 to $60 after a one-time membership fee. Check whether your employer offers an EAP, which typically covers a few free sessions. University training clinics offer supervised sessions at low cost. NAMI and similar organisations run free peer support groups. Warmlines offer free phone support before crisis point.",
  },
  {
    q: "How do I ask a therapist for a lower fee?",
    a: "Say it plainly at first contact: 'I am interested in working with you but your full fee is out of reach for me. Do you have any sliding scale or reduced fee openings, and if not, could you point me toward someone who does?' Therapists are asked this regularly and most are not offended. The worst realistic outcome is a no and a referral, which is still useful.",
  },
  {
    q: "Is free therapy any good?",
    a: "Low-cost is not the same as low-quality. University training clinics are staffed by graduate students who are closely supervised, often bring more time and attention than an overloaded private practice, and are being actively assessed on their work. The genuine trade-offs are that you may see a less experienced clinician, sessions may be recorded for supervision, and your therapist may leave when their placement ends.",
  },
  {
    q: "Will my employer know what I discuss in EAP counselling?",
    a: "Reputable EAP providers keep session content confidential and report only aggregate usage data to the employer, not names or notes. That said, confidentiality terms vary by provider, so read the specific policy before you start rather than assuming. If it matters to you, ask the provider directly what is reported and to whom.",
  },
  {
    q: "Is peer support a cheaper substitute for therapy?",
    a: "No. Peer support costs less because it is a different thing, not a discounted version of the same thing. Peer supporters do not diagnose, treat or prescribe. If you need clinical care, a cheaper non-clinical service does not meet that need, and the honest move is to keep working the low-cost therapy options on this page.",
  },
];

const OPTIONS = [
  {
    name: "Ask about a sliding scale",
    cost: "Often 30 to 60 percent off",
    body: "Many therapists hold a few reduced-fee slots and never advertise them. This is the single most under-used option on this list, because people assume the listed price is the price.",
  },
  {
    name: "Open Path Psychotherapy Collective",
    cost: "Roughly $30 to $60 a session, plus a one-time membership fee",
    body: "A non-profit that connects lower and middle income clients with therapists who have agreed to reduced rates. Verify current rates on their site before relying on these numbers.",
  },
  {
    name: "University training clinics",
    cost: "Free to about $40",
    body: "Graduate students delivering therapy under close supervision. Often more attentive than an overloaded private practice, because they are being assessed. Sessions may be recorded for supervision and your therapist will eventually finish their placement.",
  },
  {
    name: "Employer EAP",
    cost: "Free, usually 3 to 6 sessions",
    body: "Widely available and widely forgotten. Short-term by design, so best for a specific situation rather than long-term work. Check the confidentiality terms of your specific provider.",
  },
  {
    name: "Community mental health centres",
    cost: "Free to low cost, income-based",
    body: "Publicly funded and means-tested. Waiting lists are usually long, and they are often the only route to psychiatry for uninsured people.",
  },
  {
    name: "NAMI and condition-specific support groups",
    cost: "Free",
    body: "Peer-led groups, in person and online, for specific conditions and for family members. Group rather than individual, and the experience varies with the facilitator.",
  },
  {
    name: "Warmlines",
    cost: "Free",
    body: "Phone lines for talking to someone before things reach crisis. Staffed by people with lived experience. Badly under-known, and one of the most useful entries on this list.",
  },
  {
    name: "7 Cups",
    cost: "Free listeners, paid therapy tier",
    body: "Trained volunteer listeners available immediately. Training is variable and you rarely get the same person twice, but it is free and it is there at 3am.",
  },
  {
    name: "988 and crisis lines",
    cost: "Free",
    body: "For crisis, and increasingly for pre-crisis distress too. Call or text 988 in the US, Samaritans on 116 123 in the UK and Ireland.",
  },
];

export default function CantAffordTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: "/learn/cant-afford-therapy",
              name: "Cannot Afford Therapy? What to Actually Do",
              description:
                "Sliding scale, Open Path, university clinics, EAPs, NAMI groups, warmlines and free listening lines, with the real trade-offs of each.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/learn/cant-afford-therapy",
              headline: "Cannot Afford Therapy? What to Actually Do",
              description:
                "The real options when therapy is out of reach, what each costs, and the exact wording to use when asking for a reduced fee.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 1800,
              about: [
                "Affordable therapy",
                "Low cost counselling",
                "Mental health support",
                "Peer support",
                "Sliding scale therapy",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Learn", path: "/learn/cant-afford-therapy" },
              {
                name: "Cannot afford therapy",
                path: "/learn/cant-afford-therapy",
              },
            ]),
            faqLd(FAQ),
          ]),
        }}
      />
      <SharedNav />

      {/* HERO */}
      <section
        style={{
          padding: "80px 0 56px",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
              marginBottom: 18,
            }}
          >
            <Link href="/" style={{ color: "var(--ink-3)" }}>
              Hearth
            </Link>
            {" · "}
            <Link
              href="/learn/cant-afford-therapy"
              style={{ color: "var(--ink-3)" }}
            >
              Learn
            </Link>
            {" · Cannot afford therapy"}
          </div>
          <h1 style={{ maxWidth: "18ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Cannot afford
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              therapy?
            </span>
          </h1>
          <p
            style={{
              marginTop: 28,
              maxWidth: "60ch",
              fontSize: 20,
              lineHeight: 1.55,
              color: "var(--ink-2)",
            }}
          >
            There are more routes than most people know about, several of them
            free, and one of them is simply asking. Here is the full list with
            real numbers and the honest trade-off on each.
          </p>
          <div
            style={{
              marginTop: 28,
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--ink-3)",
              letterSpacing: "0.04em",
            }}
          >
            Published 22 August 2026 · ~8 min read
          </div>
        </div>
      </section>

      {/* CRISIS FIRST */}
      <section style={{ padding: "28px 0", background: "var(--paper-3)" }}>
        <div className="wrap">
          <p
            style={{
              maxWidth: "72ch",
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            <strong>Crisis support is free and does not depend on money.</strong>{" "}
            In the US call or text <strong>988</strong>. In the UK and Ireland,
            Samaritans on <strong>116 123</strong>. In Canada,{" "}
            <strong>1-866-585-0445</strong>. More on our{" "}
            <Link href="/crisis" style={{ color: "var(--ember)" }}>
              crisis page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* START HERE */}
      <section style={{ padding: "64px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Start with this one
            </div>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: 1.5,
                fontWeight: 320,
                color: "var(--ink)",
              }}
            >
              Before anything else on this page: <strong>ask the therapist you
              already want to see whether they have a sliding scale.</strong>
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              Many therapists keep a small number of reduced-fee places and never
              list them anywhere. People skip this step because the price on the
              website looks like a fixed fact. It frequently is not.
            </p>
            <div
              style={{
                marginTop: 26,
                padding: "24px 28px",
                background: "var(--paper)",
                borderLeft: "3px solid var(--ember)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  marginBottom: 14,
                }}
              >
                Words you can copy
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 19,
                  lineHeight: 1.6,
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                &ldquo;I am interested in working with you, but your full fee is
                out of reach for me right now. Do you have any sliding scale or
                reduced fee openings? If not, could you point me toward someone
                who does?&rdquo;
              </p>
            </div>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              Therapists are asked this regularly and it does not offend them.
              The worst realistic outcome is a no and a referral, which still
              moves you forward. We wrote a{" "}
              <Link
                href="/learn/sliding-scale-therapy"
                style={{ color: "var(--ember)" }}
              >
                full guide to asking
              </Link>
              , including phone and mid-treatment versions and what to do when
              the answer is no.
            </p>
          </div>
        </div>
      </section>

      {/* THE FULL LIST */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <h2 style={{ maxWidth: "22ch", marginBottom: 16 }}>
            Every route, with the real trade-off.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--ink-3)",
              maxWidth: "62ch",
              marginBottom: 36,
            }}
          >
            Costs are indicative and change. Verify current numbers with each
            provider before relying on them. For what full-price therapy costs
            by country, per session and per year, see{" "}
            <Link
              href="/learn/how-much-does-therapy-cost"
              style={{ color: "var(--ember)" }}
            >
              how much therapy costs in 2026
            </Link>
            . If you have no coverage at all, start with{" "}
            <Link
              href="/learn/therapy-without-insurance"
              style={{ color: "var(--ember)" }}
            >
              therapy without insurance
            </Link>
            .
          </p>
          <div style={{ display: "grid", gap: 24, maxWidth: "72ch" }}>
            {OPTIONS.map((o) => (
              <div
                key={o.name}
                style={{
                  padding: "22px 26px",
                  border: "1px solid var(--rule-2)",
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <h3 style={{ margin: 0 }}>{o.name}</h3>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--ember)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {o.cost}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 16.5,
                    lineHeight: 1.7,
                    color: "var(--ink-2)",
                    margin: 0,
                  }}
                >
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE HONEST BIT */}
      <section style={{ padding: "80px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Where we fit, and where we do not
            </div>
            <h2 style={{ maxWidth: "26ch", marginBottom: 28 }}>
              We are on this page, and we are not the cheapest thing on it.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Hearth is a peer-support membership from $39 a month. You are
              matched with one <strong>Keeper</strong>, a trained peer companion
              rather than a clinician, and you keep the same person rather than
              starting over with someone new each time.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              That is cheaper than most private therapy, and cheaper than the
              subscription therapy platforms, which we broke down in{" "}
              <Link
                href="/hearth-vs-betterhelp"
                style={{ color: "var(--ember)" }}
              >
                Hearth vs. BetterHelp
              </Link>
              . It is also considerably more expensive than free, and several of
              the options above cost nothing. If a warmline, a NAMI group or 7 Cups fits what you are
              carrying, use them. We would rather you got the right help than our
              help.
            </p>
            <div
              style={{
                marginTop: 30,
                padding: "24px 28px",
                background: "var(--paper)",
                border: "1px solid var(--rule-2)",
              }}
            >
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  margin: 0,
                }}
              >
                <strong style={{ color: "var(--ink)" }}>
                  The important caveat.
                </strong>{" "}
                Peer support costs less than therapy because it is a different
                thing, not a discounted version of the same thing. Keepers do not
                diagnose, treat or prescribe. If what you need is clinical care,
                a cheaper non-clinical service does not meet that need, and the
                right move is to keep working the low-cost therapy routes above.
                Not sure which you need?{" "}
                <Link
                  href="/learn/do-i-need-therapy"
                  style={{ color: "var(--ember)" }}
                >
                  We wrote a guide for that
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <h2 style={{ maxWidth: "20ch", marginBottom: 36 }}>
            Common questions.
          </h2>
          <div style={{ maxWidth: "68ch", display: "grid", gap: 32 }}>
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 style={{ marginBottom: 12 }}>{item.q}</h3>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "var(--ink-2)",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEEP READING */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Keep reading
            </div>
            <div style={{ display: "grid", gap: 18, marginTop: 8 }}>
              <Link
                href="/learn/sliding-scale-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Sliding scale therapy: how to ask &rarr;
              </Link>
              <Link
                href="/learn/therapy-without-insurance"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Therapy without insurance: cost and options &rarr;
              </Link>
              <Link
                href="/learn/how-much-does-therapy-cost"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                How much does therapy cost in 2026? &rarr;
              </Link>
              <Link
                href="/learn/do-i-need-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Do I need therapy, or someone to talk to? &rarr;
              </Link>
              <Link
                href="/learn/peer-support-vs-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Peer support vs. therapy: the honest difference &rarr;
              </Link>
              <Link
                href="/hearth-vs-betterhelp"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Hearth vs. BetterHelp: an honest comparison &rarr;
              </Link>
              <Link
                href="/pricing"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                What Hearth costs, and why &rarr;
              </Link>
              <Link
                href="/crisis"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Crisis resources by country &rarr;
              </Link>
            </div>
            <div className="cta-row" style={{ marginTop: 44 }}>
              <Link href="/#cta" className="btn btn-primary btn-lg">
                Pull up a chair <span className="arr">&rarr;</span>
              </Link>
              <Link href="/pricing" className="btn btn-ghost btn-lg">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
