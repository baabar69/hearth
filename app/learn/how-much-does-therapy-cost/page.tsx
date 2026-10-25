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
  title: "How Much Does Therapy Cost in 2026?",
  description:
    "What therapy costs per session, month and year in the US, UK, Canada and Australia, what insurance covers, and what online platforms charge.",
  alternates: { canonical: "/learn/how-much-does-therapy-cost" },
  openGraph: {
    type: "article",
    title: "How Much Does Therapy Cost in 2026?",
    description:
      "Per session, per month and per year, by country. The arithmetic nobody does for you.",
    url: "/learn/how-much-does-therapy-cost",
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "How much does a therapy session cost?",
    a: "In the US, cash-pay sessions averaged about $143 in a 2024 study of therapist prices (about $83 when Medicaid paid), and state averages run from about $122 in Missouri to $227 in North Dakota. In the UK, £40 to £80 for a counsellor and £60 to £100 for a psychotherapist. In Canada, $120 to $200 for a registered psychotherapist or social worker and $200 to $350 for a psychologist. In Australia, $200 to $320 before the Medicare rebate, and roughly $75 to $175 out of pocket after it.",
  },
  {
    q: "How much does therapy cost per month?",
    a: "It depends entirely on frequency, which is the part most price guides skip. Weekly therapy at a $143 session is about $620 a month. Fortnightly is about $310. At the top of the range in a major city, weekly sessions can pass $1,000 a month. Multiply your session price by 4.3 for weekly or 2.2 for fortnightly to get a realistic monthly figure.",
  },
  {
    q: "Why is therapy so expensive?",
    a: "Because you are paying for a licensed professional's hour, plus the unpaid time around it. A 50-minute session usually comes with notes, treatment planning, supervision, continuing education, licensing fees and insurance, and therapists typically cannot fill every hour of a day. The price reflects a skilled person's labour, not a markup. That does not make it affordable, but it does mean the price is rarely negotiable downward except through sliding scale.",
  },
  {
    q: "Does insurance cover therapy?",
    a: "In the US, often partly: a copay of $20 to $50 per session is typical in-network, but many experienced therapists do not take insurance at all, and out-of-network reimbursement requires a superbill and a deductible. In the UK, NHS talking therapies are free but waits are long. In Canada, provincial plans do not cover private psychotherapy, though most workplace extended health plans cover some sessions up to an annual cap. In Australia, a Mental Health Treatment Plan from a GP unlocks Medicare rebates on up to 10 sessions a year.",
  },
  {
    q: "Is therapy worth the money?",
    a: "For a clinical condition, a period of crisis, trauma, or a pattern you genuinely cannot break alone, yes, and the cost is worth finding a way to cover. For the ordinary weight of a life, such as grief, family strain, loneliness or a hard transition, it is worth asking first whether what you need is clinical treatment or someone who stays. Those cost very different amounts because they are very different things.",
  },
];

type Row = {
  country: string;
  session: string;
  weeklyMonth: string;
  weeklyYear: string;
  fortnightlyMonth: string;
};

// Typical figures, rounded. Weekly = session x 52 / 12. Fortnightly = session x 26 / 12.
const ARITHMETIC: Row[] = [
  {
    country: "United States",
    session: "$143 cash-pay average (state averages $122 to $227)",
    weeklyMonth: "about $620",
    weeklyYear: "about $7,440",
    fortnightlyMonth: "about $310",
  },
  {
    country: "United Kingdom",
    session: "£60 (range £40 to £100)",
    weeklyMonth: "about £260",
    weeklyYear: "about £3,100",
    fortnightlyMonth: "about £130",
  },
  {
    country: "Canada",
    session: "C$150 (range C$120 to C$350)",
    weeklyMonth: "about C$650",
    weeklyYear: "about C$7,800",
    fortnightlyMonth: "about C$325",
  },
  {
    country: "Australia",
    session: "A$260 before rebate (range A$200 to A$320)",
    weeklyMonth: "about A$1,010 blended",
    weeklyYear: "about A$12,200",
    fortnightlyMonth: "about A$450 blended",
  },
];

export default function HowMuchDoesTherapyCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: "/learn/how-much-does-therapy-cost",
              name: "How Much Does Therapy Cost in 2026?",
              description:
                "Therapy costs per session, per month and per year in the US, UK, Canada and Australia, with what insurance and Medicare cover.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/learn/how-much-does-therapy-cost",
              headline: "How Much Does Therapy Cost in 2026?",
              description:
                "Per session, per month and per year, by country. What insurance covers, what the online platforms charge, and the arithmetic nobody does for you.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 1900,
              about: [
                "Therapy cost",
                "Cost of therapy",
                "Mental health",
                "Counselling fees",
                "Affordable therapy",
              ],
            }),
            breadcrumbLd([
              { name: "Dear Hearth", path: "/" },
              { name: "Learn", path: "/learn/how-much-does-therapy-cost" },
              {
                name: "How much does therapy cost",
                path: "/learn/how-much-does-therapy-cost",
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
              href="/learn/how-much-does-therapy-cost"
              style={{ color: "var(--ink-3)" }}
            >
              Learn
            </Link>
            {" · What therapy costs"}
          </div>
          <h1 style={{ maxWidth: "18ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            How much does
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              therapy cost?
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
            Per session, per month and per year, in four countries. Most price
            guides stop at the session figure, which is the least useful number
            there is. Nobody pays for one session.
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
            Published 22 August 2026 · US and app prices updated 24 October 2026 · ~8 min read
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
            <strong>Crisis support costs nothing.</strong> US and Canada: call or text{" "}
            <strong>988</strong>. UK and Ireland: Samaritans,{" "}
            <strong>116 123</strong>.
            Australia: Lifeline, <strong>13 11 14</strong>. More on our{" "}
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
              A single session runs about <strong>$143 in the US</strong>{" "}
              paying cash,{" "}
              <strong>£60 in the UK</strong>, <strong>C$150 in Canada</strong>{" "}
              and <strong>A$260 in Australia</strong> before any rebate.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              Weekly, that is roughly $620, £260, C$650 or A$1,000 a month. The
              rest of this page shows where those numbers come from, what
              insurance and public schemes genuinely take off, and what the
              online platforms charge instead.
            </p>
          </div>
        </div>
      </section>

      {/* BY COUNTRY */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "22ch", marginBottom: 28 }}>
              What a session costs, by country.
            </h2>

            <h3 style={{ marginTop: 8, marginBottom: 12 }}>United States</h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              <strong>Cash-pay sessions averaged about $143</strong> in a 2024
              study of therapist prices, against about $83 when Medicaid paid,
              and about a third of the private-practice therapists studied did
              not take insurance at all (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11412241/"
                style={{ color: "var(--ember)" }}
              >
                Zhu et al., 2024
              </a>
              ). Across 104.7 million session fees in 2023 and 2024, state
              averages ran from $122 in Missouri to $227 in North Dakota (
              <a
                href="https://www.simplepractice.com/resource/how-much-does-therapy-cost"
                style={{ color: "var(--ember)" }}
              >
                SimplePractice
              </a>
              ). In San Francisco, New York and similar cities, $250 is common
              and $300 is not rare. Sliding
              scale slots, where a therapist offers them, can bring a session to
              $30 to $80. In-network copays usually run $20 to $50, but a large
              share of experienced therapists do not take insurance at all. If
              you have no coverage, or a plan that does not cover your
              therapist, see{" "}
              <Link href="/learn/therapy-without-insurance" style={{ color: "var(--ember)" }}>
                therapy without insurance
              </Link>
              , including the written estimate you are legally owed.
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 12 }}>United Kingdom</h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              <strong>Counsellors £40 to £70, psychotherapists £60 to £100,
              clinical psychologists £100 to £180 and up.</strong> The most
              recent BACP survey puts the average private rate at £60 to £80,
              and more than half of therapists on the BACP directory advertise
              between £40 and £60. London runs 15 to 25 percent above the rest
              of the country. Online sessions are typically 20 to 40 percent
              cheaper than in person. NHS talking therapies are free, and the
              wait is the cost.
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 12 }}>Canada</h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              <strong>Registered psychotherapists C$120 to C$180, registered
              social workers C$130 to C$200, psychologists C$200 to C$350.</strong>{" "}
              Qualifying therapists and interns working under supervision charge
              C$50 to C$125 and are a genuinely good option. Provincial plans
              such as OHIP do not cover private psychotherapy. They do cover
              psychiatrists, who are physicians, and some hospital and community
              programmes, usually with long waits. Most workplace extended health
              plans cover some sessions, often with an annual cap that runs out
              after a handful of them.
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 12 }}>Australia</h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              <strong>A$200 to A$320 a session before the rebate.</strong> With
              a Mental Health Treatment Plan from a GP, Medicare rebates updated
              on 1 July 2026 return A$149.05 for a clinical psychologist,
              A$101.55 for a general psychologist and A$89.50 for a social
              worker, leaving most people A$75 to A$175 out of pocket. The catch
              that every price guide should say louder:{" "}
              <strong>the rebate covers 10 sessions a calendar year</strong>.
              Session 11 onward is full price. Some practices bulk bill eligible
              clients, meaning no gap at all, and they are worth asking about.
            </p>
          </div>
        </div>
      </section>

      {/* THE ARITHMETIC */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <h2 style={{ maxWidth: "24ch", marginBottom: 16 }}>
            The arithmetic nobody does for you.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--ink-2)",
              maxWidth: "64ch",
              marginBottom: 32,
            }}
          >
            Therapy is not a purchase, it is a subscription you pay by the hour.
            Typical session figures, multiplied out. Weekly is the session price
            times 52 over 12. Fortnightly is times 26 over 12. Australian
            figures are blended across the 10 rebated sessions and the full-price
            remainder.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 15,
                lineHeight: 1.55,
                minWidth: 720,
              }}
            >
              <thead>
                <tr>
                  {[
                    "Country",
                    "Typical session",
                    "Weekly, per month",
                    "Weekly, per year",
                    "Fortnightly, per month",
                  ].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "12px 14px",
                        borderBottom: "1px solid var(--rule)",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ARITHMETIC.map((r) => (
                  <tr key={r.country}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid var(--rule-2)",
                        color: "var(--ink)",
                        fontWeight: 500,
                        verticalAlign: "top",
                      }}
                    >
                      {r.country}
                    </td>
                    {[r.session, r.weeklyMonth, r.weeklyYear, r.fortnightlyMonth].map(
                      (cell, i) => (
                        <td
                          key={i}
                          style={{
                            padding: "14px",
                            borderBottom: "1px solid var(--rule-2)",
                            color: "var(--ink-2)",
                            verticalAlign: "top",
                          }}
                        >
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--ink-3)",
              marginTop: 22,
              maxWidth: "64ch",
            }}
          >
            Rounded, and indicative. Your own figure is your session price times
            4.3 for weekly or 2.2 for fortnightly. US figures updated 24
            October 2026, other countries as of August 2026; verify with any
            provider before relying on them.
          </p>
        </div>
      </section>

      {/* THE PLATFORMS */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "22ch", marginBottom: 28 }}>
              What the online platforms charge.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              <strong>Subscription therapy apps</strong> bill{" "}
              <strong>about $60 to $120 a week, charged monthly or every four
              weeks, so roughly $260 to $520 a month</strong>, for a licensed
              therapist, usually one live session a week plus messaging.
              BetterHelp lists $70 to $100 a week, billed every four weeks.
              Online-Therapy.com lists $60, $90 or $120 a week, depending on
              how many live sessions you get. That is cheaper than weekly private therapy in a
              major US city and more expensive than fortnightly private therapy
              almost anywhere. The therapist you are matched with can change,
              and that is the trade-off people most often report.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              Talkspace lists <strong>$69 a week</strong> out of pocket for
              messaging only, $99 for video plus messaging and $109 with
              workshops, and says most insured members pay a $0 copay. Some
              platforms accept some US insurance, which can bring the cost
              down a long way. We set the
              category against Hearth in{" "}
              <Link href="/hearth-vs-betterhelp" style={{ color: "var(--ember)" }}>
                Hearth vs. therapy apps
              </Link>
              , using the largest platform as the worked example.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              Prices on these platforms change often and vary by location and
              promotion. The figures above come from{" "}
              <a href="https://www.betterhelp.com/faq/" style={{ color: "var(--ember)" }}>
                BetterHelp&rsquo;s FAQ
              </a>
              ,{" "}
              <a href="https://www.talkspace.com/pricing" style={{ color: "var(--ember)" }}>
                Talkspace&rsquo;s pricing page
              </a>{" "}
              and{" "}
              <a
                href="https://www.online-therapy.com/pricing"
                style={{ color: "var(--ember)" }}
              >
                Online-Therapy.com&rsquo;s pricing page
              </a>
              , checked 24 October 2026. Check the platform&rsquo;s own page on
              the day.
            </p>
          </div>
        </div>
      </section>

      <CostComparison />

      {/* WHY */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "22ch", marginBottom: 28 }}>
              Why it costs this much.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Not because anyone is profiteering. A 50-minute session comes with
              notes, treatment planning, supervision, continuing education,
              licensing, professional insurance and office costs, and a
              therapist cannot fill every hour of a working day with clients. You
              are paying for a skilled person&rsquo;s labour, and the price
              reflects that labour fairly accurately.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              That does not make it affordable. It does mean the price is rarely
              negotiable downward except through the routes built for it:{" "}
              <Link href="/learn/sliding-scale-therapy" style={{ color: "var(--ember)" }}>
                sliding scale
              </Link>
              , training clinics, community centres, Open Path. Every one of
              them, with current prices, is in{" "}
              <Link href="/learn/cheap-therapy" style={{ color: "var(--ember)" }}>
                cheap therapy options
              </Link>
              , and the step-by-step plan, including the exact words to use
              when asking for a lower fee, is in{" "}
              <Link href="/learn/cant-afford-therapy" style={{ color: "var(--ember)" }}>
                what to do when you can&rsquo;t afford therapy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WHERE HEARTH FITS */}
      <section style={{ padding: "80px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Where we fit
            </div>
            <h2 style={{ maxWidth: "26ch", marginBottom: 28 }}>
              A different thing, at a different price.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Hearth is a peer-support membership at <strong>$39 a month</strong>{" "}
              for fortnightly conversations, or $99 for weekly. You are matched
              with one <strong>Keeper</strong>, a trained peer companion rather
              than a clinician, and you keep the same person for as long as it
              serves you.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              It costs a fraction of the figures above because it is not the
              thing above. Keepers do not diagnose, treat or prescribe. If what
              you need is clinical care, the right move is the low-cost therapy
              routes, not a cheaper non-clinical service. If what you need is
              someone who stays, through grief, a hard year, or the ordinary
              weight of a life, that is what we do, and{" "}
              <Link href="/learn/do-i-need-therapy" style={{ color: "var(--ember)" }}>
                here is how to tell which you need
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
                href="/learn/cheap-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Cheap therapy options, with real prices &rarr;
              </Link>
              <Link
                href="/learn/cant-afford-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Can&rsquo;t afford therapy? What to do next &rarr;
              </Link>
              <Link
                href="/learn/do-i-need-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Do I need therapy, or someone to talk to? &rarr;
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
