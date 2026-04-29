"use client";

import { useState } from "react";
import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type FAQItem = { q: string; a: string };
type Category = { label: string; items: FAQItem[] };

const CATEGORIES: Category[] = [
  {
    label: "About Hearth",
    items: [
      {
        q: "Is Hearth therapy?",
        a: "No. Hearth is peer support — not therapy, not medical advice, not a clinical service. Keepers are trained companions, not licensed therapists. We say this plainly because the distinction is a feature, not a limitation. When something clinical comes up, your Keeper will tell you honestly and walk you to The Bridge, which connects you with vetted licensed therapists.",
      },
      {
        q: "How is this different from BetterHelp or Talkspace?",
        a: "BetterHelp and Talkspace are therapy platforms — you're matched with licensed therapists who diagnose and treat. Hearth is peer support, which means it's for the recurring weight of a life, not for clinical conditions. Hearth is also meaningfully different in cultural depth — our Keepers are matched on language, lived context, and diaspora experience, not just availability.",
      },
      {
        q: "How is this different from a friend or family member?",
        a: "Friends mean well but get tired, have their own lives, and can't hold consistent attention. Family can be part of what you're carrying. A Keeper is a trained, paid professional — not a volunteer, not a friend — whose only job in your relationship is to hold space for you. They don't need you to be okay. They don't have a stake in your decisions. They stay.",
      },
      {
        q: "What does 'peer support' actually mean here?",
        a: "Peer support means companionship from someone with lived experience and training — not clinical credentials. A Keeper has often navigated many of the same themes you're navigating, and has been trained by Hearth in listening, cultural fluency, scope boundaries, and crisis protocol. They are not peers in the sense of strangers on the internet — they are carefully selected, paid, and supervised.",
      },
      {
        q: "Who built Hearth and why?",
        a: "Hearth was built for diaspora communities in the US and Canada — people from cultures where the village elder, trusted aunt, and community wise-person traditions are alive in memory but absent in modern life. The founding belief: most people don't need therapy for most of what they carry. They need the elder's house, on their phone, in their language.",
      },
    ],
  },
  {
    label: "Keepers",
    items: [
      {
        q: "Are Keepers licensed therapists?",
        a: "No. Keepers are trained peer supporters. They complete Hearth's 120-hour Keeper training, which covers listening skills, cultural fluency, scope boundaries, and crisis protocol. They are not licensed therapists and do not diagnose, treat, or prescribe. When clinical care is needed, Keepers make a warm referral to The Bridge.",
      },
      {
        q: "Where are Keepers based?",
        a: "Currently, Keepers are based in the US and Canada, serving members across North American time zones. We are working on expanding to the UK and Australia. Most Keepers work in major cities with South Asian diaspora communities.",
      },
      {
        q: "How do you choose Keepers?",
        a: "We look for people who already do this work informally — the person in the community everyone turns to, the trusted elder, the friend with the right kind of patience. We look for cultural fluency, language range, lived experience, and the specific quality of holding space without fixing. Then we train them thoroughly. Less than 8% of Keeper applicants are accepted.",
      },
      {
        q: "What if my Keeper isn't the right fit?",
        a: "You can switch in the first 30 days, no questions asked. After 30 days, switching is available but requires a brief conversation with our pairing team. We want the match to work — it is in everyone's interest. Most members find the first match is right; when it isn't, we take the rematch seriously.",
      },
      {
        q: "Can I switch Keepers?",
        a: "Yes. In the first 30 days, one free switch is included. After that, you can request a switch at any time with a brief conversation with our team. We never penalize you for a mismatch.",
      },
      {
        q: "How are Keepers paid?",
        a: "Keepers receive 60% of what you pay each month. They are paid biweekly in USD. This is a meaningful living, not a side gig. We believe the quality of Hearth depends entirely on whether Keepers are treated as professionals — so we pay them as professionals.",
      },
    ],
  },
  {
    label: "Pricing & Billing",
    items: [
      {
        q: "How much does it cost?",
        a: "Hearthside is $39/month (biweekly Sits) or $390/year. Hearth Deep is $99/month (weekly Sits) or $990/year. Annual plans save you 2 months. À la carte options include an Extra Sit ($25), Couples Sit ($45), Single Circle ($25), and gifting starts at $39.",
      },
      {
        q: "What's the difference between biweekly and weekly Sits?",
        a: "Hearthside includes a Sit every two weeks. Hearth Deep includes a Sit every week. Both plans include the Long Talk (async thread with your Keeper), Friday reflections, and Embers library access. If you need the extra sit occasionally, you can add one for $25 on Hearthside.",
      },
      {
        q: "How do I cancel?",
        a: "One click, in your account settings. No exit interview, no phone call, no dark patterns. This is FTC-compliant click-to-cancel. You keep access through the end of the billing period you've paid for.",
      },
      {
        q: "Do you take insurance?",
        a: "Not currently. Hearth is peer support, not therapy, so standard mental health CPT codes don't apply. We're working on FSA/HSA compatibility. Some employer wellness budgets cover peer support — check with your HR team.",
      },
      {
        q: "Is there a sliding scale or scholarship?",
        a: "We offer a limited number of reduced-rate memberships for people who genuinely can't afford standard pricing. Email access@hearth.com with a brief note. We don't require financial documentation. We take this seriously.",
      },
      {
        q: "What's the refund policy?",
        a: "14-day money-back guarantee from your first Sit. If it doesn't feel right, email us — full refund, no questions. After 14 days, unused months on annual plans are refunded pro-rated if you cancel. Monthly plans are charged as used.",
      },
      {
        q: "What's the reschedule policy?",
        a: "Reschedule a Sit up to 24 hours before it starts — no fee, just pick a new time. Inside the 24-hour window, there's a $20 late-reschedule fee that covers your Keeper's held slot. Emergencies are different — your Keeper has discretion to waive the fee, and they will. We're not going to police a death in the family.",
      },
      {
        q: "What if I miss a Sit?",
        a: "If you no-show without rescheduling, the Sit counts as taken. Your Keeper will reach out through the Long Talk to check in. Three no-shows in a row triggers a gentle pause — we'll email to ask whether Hearth is still the right fit for this season, with no judgement either way.",
      },
    ],
  },
  {
    label: "The Bridge & Clinical",
    items: [
      {
        q: "What's The Bridge?",
        a: "The Bridge is Hearth's network of vetted, licensed therapists with South Asian heritage and cultural fluency. When your Keeper notices something clinical, they make a warm handoff — a personal introduction to a specific therapist, not a directory dump. You keep your Keeper throughout. It's not a goodbye; it's an addition.",
      },
      {
        q: "What if I'm already in therapy?",
        a: "Hearth works alongside therapy. Your Keeper provides peer support for the daily weight; your therapist provides clinical care. Many Hearth members have both, and they find the two complement each other. Your Keeper and therapist can coordinate with your permission.",
      },
      {
        q: "Can I do Hearth and therapy at the same time?",
        a: "Yes, absolutely. Many members do exactly this. Hearth is designed to complement clinical care, not replace it. Your Keeper will never push you away from therapy. If anything, they may support you in sticking with it.",
      },
      {
        q: "What if I have a clinical diagnosis?",
        a: "Hearth can provide peer support alongside clinical care for most diagnoses. If your diagnosis requires a level of care that exceeds peer support scope — active crisis, severe clinical depression, PTSD processing, eating disorders — your Keeper will be honest about that and help you access The Bridge.",
      },
    ],
  },
  {
    label: "Privacy & Data",
    items: [
      {
        q: "Is this private?",
        a: "Yes. Everything you share with your Keeper is private. We use encrypted, HIPAA-comparable storage. We do not sell your data, we do not run ad pixels on authenticated pages, and we do not share your information with third parties without your explicit consent.",
      },
      {
        q: "Who can see what I write to my Keeper?",
        a: "Only you and your Keeper can see your Long Talk thread. Hearth staff may access conversations only in the event of a mandatory reporting situation (safety concern). We do not read or review conversations for quality assurance without a specific protocol and your notification.",
      },
      {
        q: "Are Sits recorded?",
        a: "Recording is opt-in. Your Sit is never recorded by default. If you want a recording, you enable it in settings and the recording belongs entirely to you — stored in your private account, downloadable, deletable.",
      },
      {
        q: "What happens to my data if I cancel?",
        a: "You can export all your data before canceling. After cancellation, we hold your data for 30 days in case you change your mind, then delete it from our servers. You can also request immediate deletion at any time by emailing privacy@hearth.com.",
      },
    ],
  },
  {
    label: "Gift",
    items: [
      {
        q: "Can I gift this to someone who doesn't live in the US?",
        a: "Currently, Hearth serves members in the US and Canada. Gift recipients must be in one of these two countries to be matched with a Keeper. We're working on UK expansion — sign up for the waitlist if your person is in the UK.",
      },
      {
        q: "Does the recipient know what I paid?",
        a: "No. The gift email to your recipient mentions only the duration (e.g., 'one month of Hearth') — not the dollar amount. Gift amounts are never visible to recipients.",
      },
    ],
  },
  {
    label: "Languages & Locations",
    items: [
      {
        q: "What languages do Keepers speak?",
        a: "Current Keeper languages include Bengali, Urdu, Hindi, Punjabi, Tamil, English, and Arabic. We are actively adding Keepers in Gujarati, Telugu, and Sinhala. If you need a language not currently listed, email us — we may be able to pair you or put you on the waitlist for a specific Keeper.",
      },
      {
        q: "Can men join Hearth?",
        a: "Yes. Hearth is for everyone. We have Keepers specifically suited to the experience of diaspora men — including Faisal M., who works specifically with men navigating grief, career crossroads, and the cost of performing stoicism for a lifetime. The brief mention of South Asian women in our marketing reflects where the founding demand was loudest, not where the door closes.",
      },
    ],
  },
  {
    label: "Crisis",
    items: [
      {
        q: "What happens if I'm in crisis?",
        a: "Hearth is not a crisis service, and Keepers are not trained for emergency response. If you are in immediate danger, call 911 (US/Canada) or go to your nearest emergency room. If you are experiencing a mental health crisis, call or text 988 (US) or 1-866-585-0445 (Canada). Your Keeper will always name the crisis line first when something acute comes up — and then stay with you.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section style={{ padding: "80px 0 60px", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Questions
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "20ch" }}>
            Questions, answered plainly.
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
            No fine print. No hedging. If you have a question not covered here,
            email us at{" "}
            <a
              href="mailto:hello@hearth.com"
              style={{ color: "var(--ember)", textDecoration: "underline" }}
            >
              hello@hearth.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section style={{ padding: "80px 0 120px" }}>
        <div className="wrap">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} style={{ marginBottom: 64 }}>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  fontWeight: 380,
                  marginBottom: 32,
                  paddingBottom: 16,
                  borderBottom: "2px solid var(--rule)",
                  color: "var(--ink)",
                }}
              >
                {cat.label}
              </div>
              {cat.items.map((item) => {
                const id = `${cat.label}::${item.q}`;
                const isOpen = openItem === id;
                return (
                  <div
                    key={item.q}
                    style={{
                      borderBottom: "1px solid var(--rule-2)",
                    }}
                  >
                    <button
                      onClick={() => setOpenItem(isOpen ? null : id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "22px 0",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: 24,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "clamp(17px, 1.6vw, 21px)",
                          fontWeight: 380,
                          lineHeight: 1.3,
                          color: "var(--ink)",
                        }}
                      >
                        {item.q}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 18,
                          color: "var(--ember)",
                          flexShrink: 0,
                          transition: "transform 0.2s ease",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          lineHeight: 1,
                        }}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          paddingBottom: 24,
                          fontSize: 16,
                          lineHeight: 1.7,
                          color: "var(--ink-2)",
                          maxWidth: "68ch",
                        }}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--paper-2)",
          borderTop: "1px solid var(--rule-2)",
          textAlign: "center",
        }}
      >
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)" }}>
            Still have questions?
          </h2>
          <p
            style={{
              marginTop: 18,
              fontSize: 18,
              color: "var(--ink-2)",
              lineHeight: 1.55,
            }}
          >
            Email us at{" "}
            <a
              href="mailto:hello@hearth.com"
              style={{ color: "var(--ember)", textDecoration: "underline" }}
            >
              hello@hearth.com
            </a>
            . We respond within 24 hours.
          </p>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/#cta" className="btn btn-primary btn-lg">
              Pull up a chair <span className="arr">&rarr;</span>
            </Link>
            <Link href="/pricing" className="btn btn-ghost btn-lg">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
