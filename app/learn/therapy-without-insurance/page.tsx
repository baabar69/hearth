import type { Metadata } from "next";
import Link from "next/link";
import SharedNav from "../../components/SharedNav";
import SharedFooter from "../../components/SharedFooter";
import CostComparison from "../../components/CostComparison";
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
  title: "Therapy Without Insurance: Cost and Options",
  description:
    "What therapy costs cash-pay in the US, the written estimate you are legally owed, how a superbill gets money back if you are out of network, and the routes that work with no coverage at all.",
  alternates: { canonical: "/learn/therapy-without-insurance" },
  openGraph: {
    type: "article",
    title: "Therapy Without Insurance: What It Costs and What to Do",
    description:
      "Cash-pay costs, the Good Faith Estimate you are owed, superbills, and the routes that work with no coverage.",
    url: "/learn/therapy-without-insurance",
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "How much is therapy without insurance?",
    a: "In the US, $100 to $250 a session paying cash, with a national average around $165 as of August 2026. Sliding scale brings that to roughly $50 to $110 with many therapists, Open Path Collective runs $30 to $70 a session after a one-time membership, university training clinics are free to about $40, and community mental health centres charge on an income-based scale.",
  },
  {
    q: "Do therapists take patients without insurance?",
    a: "Yes, and many prefer it. A large share of experienced therapists do not take insurance at all, so every client of theirs is cash-pay whether insured or not. Being uninsured closes the in-network route, but it does not close the door to most private practices, and it makes no difference at training clinics, community centres or Open Path.",
  },
  {
    q: "What is a Good Faith Estimate for therapy?",
    a: "A written estimate of expected charges that any licensed provider, including a solo-practice therapist, must give uninsured and self-pay clients under the federal No Surprises Act, in effect since 1 January 2022. If the eventual bill comes in $400 or more above the estimate, you can challenge it through a federal dispute process. You are entitled to one whether or not you ask, and asking costs nothing.",
  },
  {
    q: "How does a superbill work for out-of-network therapy?",
    a: "You pay the therapist in full, they give you a superbill (an itemised receipt with dates, billing codes, a diagnosis code and their credentials), and you submit it to your insurer. If your plan has out-of-network mental health benefits, it reimburses a share of an allowed amount, commonly 50 to 80 percent, after a separate out-of-network deductible that often runs $500 to $2,000. Expect two to six weeks. Some plans have no out-of-network benefit at all, which is why you phone first.",
  },
  {
    q: "Can I get therapy through Medicaid if I have no insurance?",
    a: "If your income is low enough to qualify, yes. Medicaid covers mental health services in every state, and eligibility thresholds differ by state. Community mental health centres and federally funded health centres can usually tell you on the spot whether you qualify and help you apply. Losing other coverage also opens a limited window to enrol in a marketplace plan, often with subsidies.",
  },
];

type Route = { name: string; cost: string; body: string };

const ROUTES: Route[] = [
  {
    name: "Ask for a sliding scale",
    cost: "Often 30 to 60 percent off",
    body: "Most under-used option on this list. Many therapists keep reduced-fee slots and never advertise them. The listed price is the top of a range.",
  },
  {
    name: "Open Path Collective",
    cost: "$30 to $70 a session, $65 one-time membership",
    body: "Licensed therapists who have agreed to reduced rates for people without adequate coverage. Built for exactly this situation. Figures as of August 2026.",
  },
  {
    name: "Community mental health centres and federally funded health centres",
    cost: "Income-based, sometimes free",
    body: "Publicly funded, means-tested, and required to see you regardless of ability to pay. Often the only route to psychiatry without insurance. Waits can be long. They can also tell you whether you qualify for Medicaid.",
  },
  {
    name: "University training clinics",
    cost: "Free to about $40",
    body: "Graduate students under close supervision. Frequently more attentive than an overloaded practice, because they are being assessed. Your therapist moves on when their placement ends.",
  },
  {
    name: "Your employer's EAP",
    cost: "Free, usually 3 to 6 sessions",
    body: "An employee assistance programme is a separate employer benefit, not health insurance, so it is often available even if you are not on the company health plan. Ask HR. Short-term by design.",
  },
  {
    name: "Medicaid, or a marketplace plan",
    cost: "Free to low cost if you qualify",
    body: "If your income is low enough, Medicaid covers therapy. If you recently lost coverage, you have a limited window to enrol in a marketplace plan, often subsidised. Not instant, but it changes everything after it.",
  },
  {
    name: "Warmlines, 7 Cups, NAMI groups",
    cost: "Free",
    body: "Warmlines for talking before crisis point. 7 Cups for immediate volunteer listeners. NAMI for peer groups around specific conditions. None are therapy. All are there tonight.",
  },
];

export default function TherapyWithoutInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: "/learn/therapy-without-insurance",
              name: "Therapy Without Insurance: What It Costs and What to Do",
              description:
                "Cash-pay therapy costs in the US, the Good Faith Estimate you are owed, how superbills work, and the routes that work with no coverage.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/learn/therapy-without-insurance",
              headline: "Therapy Without Insurance: What It Costs and What to Do",
              description:
                "What therapy costs cash-pay, the written estimate you are legally owed, how a superbill gets money back, and the routes that work with no coverage at all.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 1800,
              about: [
                "Therapy without insurance",
                "Uninsured mental health care",
                "Good Faith Estimate",
                "Superbill",
                "Affordable therapy",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Learn", path: "/learn/therapy-without-insurance" },
              {
                name: "Therapy without insurance",
                path: "/learn/therapy-without-insurance",
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
              href="/learn/therapy-without-insurance"
              style={{ color: "var(--ink-3)" }}
            >
              Learn
            </Link>
            {" · Without insurance"}
          </div>
          <h1 style={{ maxWidth: "18ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Therapy without
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              insurance.
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
            Not having insurance closes one door and leaves more open than most
            people think. What it actually costs, the written estimate you are
            legally owed, how to get money back if you do have a plan that does
            not cover your therapist, and the routes that work with nothing.
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
            Published 22 August 2026 · US figures as of August 2026 · ~8 min
            read
          </div>
        </div>
      </section>

      {/* CRISIS */}
      <section style={{ padding: "24px 0", background: "var(--paper-3)" }}>
        <div className="wrap">
          <p
            style={{
              maxWidth: "72ch",
              fontSize: 15.5,
              lineHeight: 1.65,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            <strong>Crisis support never needs insurance.</strong> Call or text{" "}
            <strong>988</strong> anywhere in the US, any time. More on our{" "}
            <Link href="/crisis" style={{ color: "var(--ember)" }}>
              crisis page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* SHORT ANSWER */}
      <section style={{ padding: "64px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              The short answer
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
              Paying cash, therapy runs <strong>$100 to $250 a session</strong>{" "}
              in the US, averaging about $165. With the routes below, most
              people can get that to <strong>$30 to $80</strong>, and some to
              nothing.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              And one thing worth knowing before you feel at a disadvantage: a
              large share of experienced therapists do not take insurance at
              all. Every client of theirs pays cash. Being uninsured removes
              the in-network option, but with many of the best therapists
              there was never an in-network option to begin with.
            </p>
          </div>
        </div>
      </section>

      {/* YOUR RIGHT */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              The written estimate you are owed.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Since 1 January 2022, under the federal <strong>No Surprises
              Act</strong>, any licensed provider, including a therapist in solo
              practice, must give uninsured and self-pay clients a written{" "}
              <strong>Good Faith Estimate</strong> of what the care is expected
              to cost. Not a verbal ballpark. A document.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              If the eventual bill comes in <strong>$400 or more above</strong>{" "}
              that estimate, you can challenge it through a federal dispute
              process. Most people have never heard of this. Most therapists
              know it well, and a good one will hand you the estimate before
              you ask.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              &ldquo;Self-pay&rdquo; also covers people who have insurance and
              choose not to use it, often to keep a diagnosis off their record.
              If that is you, you are owed the same estimate.
            </p>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <h2 style={{ maxWidth: "22ch", marginBottom: 16 }}>
            Every route that works with no coverage.
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
            Cheapest and most under-used first. Costs are indicative and dated
            August 2026. Verify with each provider.
          </p>
          <div style={{ display: "grid", gap: 24, maxWidth: "72ch" }}>
            {ROUTES.map((r) => (
              <div
                key={r.name}
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
                  <h3 style={{ margin: 0 }}>{r.name}</h3>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--ember)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {r.cost}
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
                  {r.body}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--ink-2)",
              marginTop: 28,
              maxWidth: "68ch",
            }}
          >
            The first one deserves its own page, because asking is the step
            people skip. We wrote{" "}
            <Link href="/learn/sliding-scale-therapy" style={{ color: "var(--ember)" }}>
              the exact words to use
            </Link>
            .
          </p>
        </div>
      </section>

      {/* SUPERBILL */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "26ch", marginBottom: 28 }}>
              If you have a plan but your therapist is out of network.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              A different problem with a different fix. You pay the therapist in
              full. They give you a <strong>superbill</strong>: an itemised
              receipt with dates, billing codes, a diagnosis code and their
              credentials. You submit it to your insurer, and if your plan has
              out-of-network mental health benefits, it pays you back a share.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              The share is commonly <strong>50 to 80 percent of an allowed
              amount</strong>, after a separate out-of-network deductible that
              often runs <strong>$500 to $2,000</strong>. Reimbursement takes
              two to six weeks. Some plans, especially HMOs, have no
              out-of-network benefit at all.
            </p>
            <div
              style={{
                marginTop: 26,
                padding: "24px 28px",
                background: "var(--paper-2)",
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
                Four questions for the number on your insurance card
              </p>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: 22,
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "var(--ink)",
                }}
              >
                <li>Do I have out-of-network benefits for outpatient mental health?</li>
                <li>What is my out-of-network deductible, and how much of it have I met this year?</li>
                <li>After the deductible, what percentage do you reimburse?</li>
                <li>What is the allowed amount for billing code 90837, a 60-minute psychotherapy session?</li>
              </ol>
            </div>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              One thing to know before you submit: a superbill carries a
              diagnosis, and that goes on your insurance record. Some people pay
              cash precisely to avoid that. Neither choice is wrong. It is only
              worth deciding on purpose.
            </p>
          </div>
        </div>
      </section>

      <CostComparison />

      {/* WHERE HEARTH FITS */}
      <section style={{ padding: "80px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Where we fit
            </div>
            <h2 style={{ maxWidth: "26ch", marginBottom: 28 }}>
              Not therapy. Not insurance-billable either.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Hearth is a peer-support membership at <strong>$39 a month</strong>.
              You are matched with one <strong>Keeper</strong>, a trained peer
              companion rather than a clinician, and you keep the same person
              for as long as it serves you. No insurance is involved because
              nothing clinical is happening.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              That makes it cheaper than almost everything above. It also means
              it is not a substitute for any of it. Keepers do not diagnose,
              treat or prescribe. If what you need is clinical care, keep
              working the routes on this page. If what you need is someone who
              stays,{" "}
              <Link href="/learn/do-i-need-therapy" style={{ color: "var(--ember)" }}>
                here is how to tell the difference
              </Link>
              .
            </p>
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
                href="/learn/cant-afford-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Cannot afford therapy? What to actually do &rarr;
              </Link>
              <Link
                href="/learn/how-much-does-therapy-cost"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                How much does therapy cost in 2026? &rarr;
              </Link>
              <Link
                href="/learn/sliding-scale-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Sliding scale therapy: how to ask &rarr;
              </Link>
              <Link
                href="/hearth-vs-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Hearth vs. therapy: the honest comparison &rarr;
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
