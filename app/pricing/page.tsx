import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Pricing · Hearth",
  description:
    "Honest numbers. Two tiers. No streaks, no upsells. 60% goes to your Keeper.",
};

const FAQ = [
  {
    q: "When am I billed?",
    a: "You're billed on the same date each month, starting the day you sign up. Annual plans are billed in full upfront at a discount. You'll get a receipt each time.",
  },
  {
    q: "How do I cancel?",
    a: "One click, no exit interview, no friction. Cancel from your account settings at any time. You keep access through the end of the billing period you've already paid for. This is FTC-compliant click-to-cancel — we don't make it hard.",
  },
  {
    q: "Does Hearth take insurance?",
    a: "Not currently. Hearth is peer support, not therapy, so it doesn't fall under standard mental health insurance codes. We're working on FSA/HSA compatibility — watch this space. If your employer has an EAP or wellness benefit, it may cover peer support; check with your HR team.",
  },
  {
    q: "Can I change tiers mid-subscription?",
    a: "Yes, at any time. Upgrading to Hearth Deep takes effect immediately and you're billed the prorated difference. Downgrading to Hearthside takes effect at the start of your next billing cycle. Your Keeper stays the same either way.",
  },
  {
    q: "What's the reschedule policy?",
    a: "Life happens. Reschedule a Sit up to 24 hours before it starts and there's no fee — just pick a new time that works for both of you. Inside the 24-hour window, we charge a $20 fee to cover your Keeper's time, since they've already held the slot. Emergencies are different — your Keeper has discretion to waive the fee, and they will. We're not going to police a death in the family.",
  },
  {
    q: "What if I miss a Sit?",
    a: "If you no-show without rescheduling, the Sit counts as taken. Your Keeper will reach out through the Long Talk to check in. Three no-shows in a row triggers a gentle pause — we'll email to ask whether Hearth is still the right fit for this season of your life, with no judgement either way.",
  },
  {
    q: "Can I gift a Hearth membership?",
    a: "Yes. Gift options start at $39 for one month. The recipient gets a gentle onboarding email from us, not a surprise invoice. You choose when the gift is delivered. Visit the Gift page for details.",
  },
  {
    q: "Why does it cost what it costs?",
    a: "60% of what you pay goes directly to your Keeper. The rest covers platform, infrastructure, Keeper training, and supervision. We don't underpay our Keepers to offer a cheaper product — that model produces burned-out, poorly-trained people. Cultural fluency has a cost, and we think that cost is worth paying.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Pricing
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "14ch" }}>
            Pricing. Honest numbers.
          </h1>
          <p
            style={{
              marginTop: 28,
              color: "var(--ink-2)",
              fontSize: 20,
              lineHeight: 1.55,
              maxWidth: "52ch",
            }}
          >
            Two tiers. No hidden fees. No streaks. No upsells. Cancel any time
            in one click.
          </p>
        </div>
      </section>

      {/* PRICE CARDS */}
      <section
        className="pricing"
        style={{ padding: "80px 0 100px" }}
      >
        <div className="wrap">
          <div className="price-grid">
            {/* Hearthside */}
            <div className="price">
              <div className="plan">Standard</div>
              <div className="name">
                <em>Hearthside</em>
              </div>
              <div className="pp">
                <span className="num">$39</span>
                <span className="per">/ month &middot; biweekly Sits</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  marginBottom: 4,
                }}
              >
                Or $390/yr &mdash; save 2 months
              </div>
              <ul>
                <li>Matched Keeper — paired in 72 hours or we keep looking</li>
                <li>Biweekly Sits — one 35–60 min video or audio Sit every two weeks</li>
                <li>The Long Talk — unlimited async thread, 24-hour Keeper response</li>
                <li>Friday reflection from your Keeper, every week</li>
                <li>Full Embers library access</li>
                <li>One Circle per month included</li>
                <li>The Bridge handoff — when a clinician is the right tool</li>
              </ul>
              <a href="/#cta" className="btn btn-primary">
                Begin with Hearthside <span className="arr">&rarr;</span>
              </a>
              <p className="mb">Cancel any time, in one click</p>
            </div>

            {/* Hearth Deep */}
            <div className="price deep">
              <div className="plan">Premium</div>
              <div className="name">
                <em>Hearth Deep</em>
              </div>
              <div className="pp">
                <span className="num" style={{ color: "var(--paper)" }}>
                  $99
                </span>
                <span className="per">/ month &middot; weekly Sits</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#C9B894",
                  marginBottom: 4,
                }}
              >
                Or $990/yr &mdash; save 2 months
              </div>
              <ul>
                <li>Everything in Hearthside</li>
                <li>Weekly Sits — one 35–60 min Sit every week</li>
                <li>Priority Long Talk — 4-hour Keeper response window</li>
                <li>Two Circles per month included</li>
                <li>Anniversary rituals — yearly meaning-making with your Keeper</li>
                <li>Bridge therapist priority matching when needed</li>
              </ul>
              <a
                href="/#cta"
                className="btn btn-primary"
                style={{ background: "var(--ember)" }}
              >
                Begin with Hearth Deep <span className="arr">&rarr;</span>
              </a>
              <p className="mb">Cancel any time, in one click</p>
            </div>
          </div>

          {/* WHAT $39 GETS YOU — IN CONTEXT */}
          <div style={{ marginTop: 80, paddingTop: 48, borderTop: "1px solid var(--rule-2)" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              What $39 gets you, in context
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15, marginBottom: 32, maxWidth: "20ch" }}>
              Honest pricing, in a{" "}
              <span className="serif-i" style={{ color: "var(--ember)" }}>
                crowded landscape.
              </span>
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 18,
              }}
              className="pricing-context-grid"
            >
              <ContextCard
                option="Free peer chats"
                price="$0"
                what="Anonymous volunteers, different person each time, variable training. Good for a one-off vent."
                gap="No consistency. No relationship. No cultural fluency built in."
              />
              <ContextCard
                option="AI companions"
                price="~$20/mo"
                what="Always available, remembers what you say, never gets tired. Real comfort for some."
                gap="Not a person. Doesn't sit with silence the way a human does. Won't notice the thing you didn't say."
              />
              <ContextCard
                option="12-week group programs"
                price="$300–600"
                what="Structured curriculum, cohort-based, time-bound. Useful for a specific transition."
                gap="Ends. One facilitator, group format, no ongoing pairing past graduation."
              />
              <ContextCard
                option="Therapy"
                price="$400–1,200/mo"
                what="Clinical care from a licensed professional. The right tool for diagnosis, treatment, deep clinical work."
                gap="Often hard to find culturally fluent. Expensive without insurance. Not built for the slow weight between sessions."
                accent
              />
            </div>

            <div
              style={{
                marginTop: 28,
                padding: "32px 36px",
                background: "#FFF7EE",
                border: "1px solid rgba(156,42,26,0.12)",
                borderRadius: 12,
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 24,
                alignItems: "center",
              }}
              className="pricing-hearth-row"
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 36,
                  fontWeight: 300,
                  color: "var(--ember)",
                  fontStyle: "italic",
                  whiteSpace: "nowrap",
                }}
              >
                Hearth · $39/mo
              </div>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  margin: 0,
                }}
              >
                One Keeper, the same person every Sit, paired by hand within
                72 hours. Cultural context built in. Async Long Talk in
                between. The slow, paired, long-term shape of support — for
                less than the cost of a single therapy session.
              </p>
            </div>
          </div>

          {/* COMPARISON TABLE */}
          <div style={{ marginTop: 64 }}>
            <div
              className="eyebrow"
              style={{ marginBottom: 28 }}
            >
              <span className="dot" />
              Feature comparison
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 15,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 0",
                      borderBottom: "2px solid var(--rule)",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      fontWeight: 500,
                      width: "50%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "12px 0",
                      borderBottom: "2px solid var(--rule)",
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 380,
                      fontStyle: "italic",
                      color: "var(--ember)",
                      width: "25%",
                    }}
                  >
                    Hearthside
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "12px 0",
                      borderBottom: "2px solid var(--rule)",
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 380,
                      fontStyle: "italic",
                      color: "var(--ember)",
                      width: "25%",
                    }}
                  >
                    Hearth Deep
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Matched Keeper", "✓", "✓"],
                  ["Sit cadence", "Biweekly", "Weekly"],
                  ["Long Talk (async thread)", "✓", "✓"],
                  ["Keeper response time", "24 hours", "4 hours"],
                  ["Friday reflections", "✓", "✓"],
                  ["Embers library", "✓", "✓"],
                  ["Circles per month", "1 included", "2 included"],
                  ["Anniversary rituals", "–", "✓"],
                  ["Bridge referral access", "✓", "Priority"],
                  ["Price", "$39/mo or $390/yr", "$99/mo or $990/yr"],
                ].map(([feature, basic, deep]) => (
                  <tr key={feature as string}>
                    <td
                      style={{
                        padding: "14px 0",
                        borderBottom: "1px solid var(--rule-2)",
                        color: "var(--ink-2)",
                      }}
                    >
                      {feature}
                    </td>
                    <td
                      style={{
                        padding: "14px 0",
                        borderBottom: "1px solid var(--rule-2)",
                        textAlign: "center",
                        color: basic === "–" ? "var(--ink-3)" : "var(--ink)",
                      }}
                    >
                      {basic}
                    </td>
                    <td
                      style={{
                        padding: "14px 0",
                        borderBottom: "1px solid var(--rule-2)",
                        textAlign: "center",
                        color: deep === "–" ? "var(--ink-3)" : "var(--ember)",
                        fontWeight: deep === "–" ? 400 : 500,
                      }}
                    >
                      {deep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* A LA CARTE */}
          <div className="alacarte">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                À la carte
              </div>
              <p
                style={{
                  marginTop: 12,
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.2,
                }}
              >
                Extra Sit{" "}
                <span style={{ color: "var(--ember)" }}>$25</span>
              </p>
              <p style={{ marginTop: 6, color: "var(--ink-3)", fontSize: 13.5 }}>
                Add a Sit when the week calls for it.
              </p>
            </div>
            <div>
              <div className="eyebrow">
                <span className="dot" />
                À la carte
              </div>
              <p
                style={{
                  marginTop: 12,
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.2,
                }}
              >
                Couples Sit{" "}
                <span style={{ color: "var(--ember)" }}>$45</span>
              </p>
              <p style={{ marginTop: 6, color: "var(--ink-3)", fontSize: 13.5 }}>
                Bring a partner, sibling, or parent.
              </p>
            </div>
            <div>
              <div className="eyebrow">
                <span className="dot" />
                À la carte
              </div>
              <p
                style={{
                  marginTop: 12,
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.2,
                }}
              >
                Single Circle{" "}
                <span style={{ color: "var(--ember)" }}>$25</span>
              </p>
              <p style={{ marginTop: 6, color: "var(--ink-3)", fontSize: 13.5 }}>
                One Circle cohort, no membership needed.
              </p>
            </div>
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Gifting
              </div>
              <p
                style={{
                  marginTop: 12,
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.2,
                }}
              >
                Gift 1 month{" "}
                <span style={{ color: "var(--ember)" }}>$39</span>
              </p>
              <p style={{ marginTop: 6, color: "var(--ink-3)", fontSize: 13.5 }}>
                One month of Hearthside, given to someone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE COST WHAT WE COST */}
      <section style={{ padding: "80px 0", borderTop: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot" />
                Why we cost what we cost
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
                60% goes to your Keeper.
              </h2>
            </div>
            <div
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
              }}
            >
              <p>
                The majority of every membership fee goes directly to your
                Keeper — not to a platform cut, not to investor returns, not to
                marketing. Keepers are paid professionals. We don&rsquo;t use
                the volunteer model, because burned-out, underpaid people
                cannot hold space for other people well.
              </p>
              <p style={{ marginTop: 18 }}>
                Cultural fluency has a cost. Finding, training, and retaining
                Keepers who actually understand the diaspora South Asian
                experience — in Bengali, Urdu, Tamil, Punjabi — takes real
                investment. We think that cost is worth paying, and we think
                you deserve to know where your money goes.
              </p>
              <p style={{ marginTop: 18 }}>
                The remainder covers infrastructure, Hearth&rsquo;s Keeper
                training program, monthly peer supervision (every Keeper
                participates), platform costs, and the small team running the
                organization. We are not a venture-backed growth machine. We
                are building something we intend to still be here in ten years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "80px 0 100px",
          background: "var(--paper-2)",
          borderTop: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 40 }}>
            <span className="dot" />
            Pricing questions, answered
          </div>
          <div style={{ maxWidth: 760 }}>
            {FAQ.map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid var(--rule)",
                  padding: "28px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    fontWeight: 380,
                    marginBottom: 14,
                    color: "var(--ink)",
                  }}
                >
                  {item.q}
                </div>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.65,
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

      {/* CTA */}
      <section className="bigcta" style={{ padding: "100px 0", textAlign: "center" }}>
        <div className="wrap">
          <div
            className="eyebrow"
            style={{
              color: "#FFE0B0",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <span className="dot" style={{ background: "#FFE0B0" }} />
            Cancel any time, in one click
          </div>
          <h2 style={{ marginTop: 18 }}>
            Pull up a chair.
          </h2>
          <div className="cta-row" style={{ marginTop: 40 }}>
            <a href="/#cta" className="btn btn-primary btn-lg">
              Pull up a chair <span className="arr">&rarr;</span>
            </a>
            <Link href="/gift" className="btn btn-ghost btn-lg">
              Gift a membership
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .pricing-context-grid { grid-template-columns: 1fr !important; }
          .pricing-hearth-row { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}

function ContextCard({
  option,
  price,
  what,
  gap,
  accent,
}: {
  option: string;
  price: string;
  what: string;
  gap: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        background: "var(--paper)",
        border: accent ? "1px solid var(--rule)" : "1px solid var(--rule-2)",
        borderRadius: 10,
        padding: "24px 26px 26px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: 19,
            fontWeight: 380,
            color: "var(--ink)",
          }}
        >
          {option}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 13,
            letterSpacing: "0.04em",
            color: "var(--ink-3)",
          }}
        >
          {price}
        </span>
      </div>
      <p
        style={{
          fontSize: 14.5,
          lineHeight: 1.6,
          color: "var(--ink-2)",
          marginBottom: 12,
        }}
      >
        {what}
      </p>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          letterSpacing: "0.04em",
          lineHeight: 1.55,
          color: "var(--ink-3)",
          margin: 0,
          paddingTop: 12,
          borderTop: "1px solid var(--rule-2)",
        }}
      >
        Where it falls short: {gap}
      </p>
    </div>
  );
}
