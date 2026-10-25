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
const REVIEWED = "2026-10-24";

export const metadata: Metadata = {
  title: "Can't Afford Therapy? What to Do Next",
  description:
    "Can't afford therapy but need it? What to do first, the words to use to ask for a lower fee, the free routes, and what to do while you wait.",
  alternates: { canonical: "/learn/cant-afford-therapy" },
  openGraph: {
    type: "article",
    title: "Can't Afford Therapy? What to Do Next",
    description:
      "A step-by-step plan for when you need therapy and cannot pay full price, starting with one email you can send today.",
    url: "/learn/cant-afford-therapy",
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "What do I do if I can't afford therapy but need it?",
    a: "Work through it in order. First, ask the therapist you want whether they have a sliding scale. Second, check what you may already have: an employer EAP, Medicaid if your income qualifies, or student counselling. Third, look at Open Path Collective, where sessions are $40 to $70 after a one-time $65 membership, or a university training clinic. Fourth, contact a community mental health clinic or federally funded health centre, which do not turn people away for inability to pay. While you wait, warmlines and NAMI groups are free.",
  },
  {
    q: "How do I ask a therapist for a lower fee?",
    a: "Say it plainly at first contact: 'I am interested in working with you but your full fee is out of reach for me. Do you have any sliding scale or reduced fee openings, and if not, could you point me toward someone who does?' Therapists are asked this regularly and most are not offended. The worst realistic outcome is a no and a referral, which is still useful.",
  },
  {
    q: "Where can I get free therapy in Canada or the UK?",
    a: "In England, NHS Talking Therapies is free and you can refer yourself without going through a GP. In Ontario, Ontario Structured Psychotherapy offers free short-term CBT to adults by self-referral, and you do not need a health card. Other provinces and UK nations have their own routes, and waits vary by area.",
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
    a: "No. Peer support costs less because it is a different thing, not a discounted version of the same thing. Peer supporters do not diagnose, treat or prescribe. If you need clinical care, a cheaper non-clinical service does not meet that need, and the honest move is to keep working the low-cost therapy steps on this page.",
  },
];

// The step-by-step plan. The full side-by-side price list lives on
// /learn/cheap-therapy, so this page does not compete with it.
const STEPS = [
  {
    name: "1. Ask about a sliding scale",
    cost: "Often 30 to 60 percent off",
    body: "Do this first, with the therapist you actually want. The words are above. Many therapists keep reduced-fee places they never advertise, and people skip this because the listed price looks fixed.",
  },
  {
    name: "2. Check what you may already have",
    cost: "Often free",
    body: "An employer EAP (employee assistance programme) usually covers a few free sessions and is separate from health insurance, so ask HR even if you are not on the company plan. If your income is low, check Medicaid in your state, which can cover therapy at little or no cost. If you are a student, start with your college counselling centre.",
  },
  {
    name: "3. Try Open Path or a training clinic",
    cost: "$40 to $70 a session at Open Path",
    body: "Open Path Collective connects people without adequate coverage to licensed therapists at $40 to $70 a session after a one-time $65 membership (checked 24 October 2026). University training clinics offer therapy from closely supervised graduate students, often free or close to it. Sessions may be recorded for supervision, and your therapist leaves when their placement ends.",
  },
  {
    name: "4. Call a clinic that cannot turn you away",
    cost: "Free to low cost, by income",
    body: "Certified Community Behavioral Health Clinics must serve anyone regardless of ability to pay, and there are more than 500 of them. Federally funded health centres charge on a sliding fee scale, do not deny care for inability to pay, and many offer mental health care. Waits can be long, so call now even if you start somewhere else. The free SAMHSA National Helpline, 1-800-662-4357, can point you to state-funded and sliding-fee programmes near you.",
  },
  {
    name: "5. In Canada or the UK, start with the free public route",
    cost: "Free",
    body: "In England, refer yourself to NHS Talking Therapies. In Ontario, Ontario Structured Psychotherapy offers free short-term CBT to adults by self-referral, with no health card needed. Routes and waits differ in other provinces and UK nations.",
  },
  {
    name: "6. While you wait, do not wait alone",
    cost: "Free",
    body: "Warmlines are free, peer-staffed phone lines for talking before things reach crisis, and about 30 states have one. NAMI Connection runs free 90-minute peer-led groups, many of them online. 7 Cups has free volunteer listeners at 3am. None of these is therapy, and all of them are there tonight.",
  },
  {
    name: "If it is urgent",
    cost: "Free, 24 hours",
    body: "Call or text 988 in the US and Canada, or call Samaritans on 116 123 in the UK and Ireland. In the US, 988 is for emotional distress too, not only for suicidal thoughts.",
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
              name: "Can't Afford Therapy? What to Do Next",
              description:
                "A step-by-step plan for when you need therapy and cannot pay full price: sliding scale, free routes, low-cost clinics, and what to do while you wait.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/learn/cant-afford-therapy",
              headline: "Can't Afford Therapy? What to Do Next",
              description:
                "A step-by-step plan for when you need therapy and cannot pay full price, starting with one email you can send today.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 2000,
              about: [
                "Affordable therapy",
                "Free therapy",
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
                name: "Can't afford therapy",
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
            {" · Can’t afford therapy"}
          </div>
          <h1 style={{ maxWidth: "18ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Can&rsquo;t afford
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
            If you need therapy and cannot pay full price, here is what to do
            next, in order, starting with one email you can send today.
            Several of the routes are free, and one of them is simply asking.
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
            Published 22 August 2026 · Updated 24 October 2026 · ~8 min read
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
            In the US and Canada call or text <strong>988</strong>. In the UK
            and Ireland, Samaritans on <strong>116 123</strong>. More on our{" "}
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
            What to do next, in order.
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
            Work down the list. Each step is cheaper or faster than what most
            people try first. For every low-cost option side by side, with
            current prices, see{" "}
            <Link href="/learn/cheap-therapy" style={{ color: "var(--ember)" }}>
              cheap therapy options, with real prices
            </Link>
            . For what full-price therapy costs by country, see{" "}
            <Link
              href="/learn/how-much-does-therapy-cost"
              style={{ color: "var(--ember)" }}
            >
              how much therapy costs in 2026
            </Link>
            . If you have no coverage at all, read{" "}
            <Link
              href="/learn/therapy-without-insurance"
              style={{ color: "var(--ember)" }}
            >
              affordable therapy without insurance
            </Link>
            .
          </p>
          <div style={{ display: "grid", gap: 24, maxWidth: "72ch" }}>
            {STEPS.map((o) => (
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

      <CostComparison />

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
                Hearth vs. therapy apps
              </Link>
              . It is also considerably more expensive than free, and several of
              the options above cost nothing. If a warmline, a NAMI group or 7 Cups fits what you are
              carrying, use them. We would rather you got the right help than our
              help.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              If what you want is not clinical care but someone to talk to, we
              compared the{" "}
              <Link
                href="/learn/alternatives-to-therapy"
                style={{ color: "var(--ember)" }}
              >
                alternatives to therapy
              </Link>{" "}
              honestly, and explained{" "}
              <Link href="/peer-support" style={{ color: "var(--ember)" }}>
                what peer support is
              </Link>{" "}
              and what it is not.
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
                right move is to keep working the low-cost therapy steps above.
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
                href="/learn/cheap-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Cheap therapy options, with real prices &rarr;
              </Link>
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
                Affordable therapy without insurance &rarr;
              </Link>
              <Link
                href="/learn/alternatives-to-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Alternatives to therapy, compared &rarr;
              </Link>
              <Link
                href="/peer-support"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                What is peer support? &rarr;
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
                href="/hearth-vs-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Hearth vs. therapy: the honest comparison &rarr;
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
              <Link href="/intake" className="btn btn-primary btn-lg">
                Start the 12-minute intake <span className="arr">&rarr;</span>
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
