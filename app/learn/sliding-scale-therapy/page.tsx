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
  title: "Sliding Scale Therapy: How to Ask",
  description:
    "What a sliding scale is, how therapists actually set one, the exact words to use by email and by phone, what to do when the answer is no, and why asking is not rude.",
  alternates: { canonical: "/learn/sliding-scale-therapy" },
  openGraph: {
    type: "article",
    title: "Sliding Scale Therapy: How to Ask for a Lower Fee",
    description:
      "The exact words to use, how therapists decide, and what to do when the answer is no.",
    url: "/learn/sliding-scale-therapy",
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "What is sliding scale therapy?",
    a: "A fee that slides down from the therapist's standard rate according to what you can afford. Most therapists set it in income tiers, often built on federal poverty guidelines, with a floor that covers their own costs. Some keep a fixed number of reduced-fee slots rather than a formal scale. Either way, the listed price is the top of a range, not a fixed fact.",
  },
  {
    q: "How much cheaper is sliding scale therapy?",
    a: "Commonly 30 to 60 percent off the listed fee, sometimes more. A therapist charging $165 might offer $80 to $110 on a sliding scale, and some go as low as $30 to $50 for clients on very low incomes. Open Path Collective, which is sliding scale at national scale, runs $30 to $70 a session after a one-time $65 membership.",
  },
  {
    q: "Is it rude to ask a therapist for a lower fee?",
    a: "No. Therapists are asked this regularly, most keep reduced slots deliberately, and professional ethics codes explicitly allow fee adjustment where the standard fee would cause hardship. The worst realistic outcome is a polite no and a referral to someone who does have space, which still moves you forward.",
  },
  {
    q: "Will a therapist ask for proof of income?",
    a: "Some do, usually a recent pay stub or tax return, to place you in the right tier. Many simply take your word for it. If you are asked, it is a routine part of how the scale works, not a judgement. Have a rough annual figure ready either way.",
  },
  {
    q: "Can I ask for a sliding scale fee after I have already started therapy?",
    a: "Yes. If your circumstances change, redundancy, a new dependent, a drop in hours, say so directly in a session. Therapists would far rather adjust the fee than have you disappear without explanation, which is what most people do instead. Losing a client mid-treatment is worse for everyone than a lower fee.",
  },
  {
    q: "What if the therapist says no?",
    a: "Ask for a referral to someone who does offer a reduced fee, then look at Open Path Collective, university training clinics, community mental health centres and your employer's EAP if you have one. A no from one therapist is information about their caseload, not about whether you deserve help.",
  },
];

type Script = { label: string; body: string[] };

const SCRIPTS: Script[] = [
  {
    label: "By email, before your first session",
    body: [
      "Hi [Name],",
      "I am interested in working with you. Your full fee is out of reach for me right now. Do you have any sliding scale or reduced fee openings?",
      "If not, could you point me toward someone who does? Thank you either way.",
    ],
  },
  {
    label: "By phone, or on an intake call",
    body: [
      "Before we go further, I should say your standard fee is more than I can manage. Do you offer a sliding scale, and is there space on it at the moment?",
    ],
  },
  {
    label: "Mid-treatment, when your circumstances change",
    body: [
      "My situation has changed since we started. I want to keep working with you, and I need to ask whether we can revisit the fee. If that is not possible I understand, and I would rather talk about it than just stop coming.",
    ],
  },
];

export default function SlidingScaleTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: "/learn/sliding-scale-therapy",
              name: "Sliding Scale Therapy: How to Ask for a Lower Fee",
              description:
                "What a sliding scale is, how therapists set one, the exact words to use, and what to do when the answer is no.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/learn/sliding-scale-therapy",
              headline: "Sliding Scale Therapy: How to Ask for a Lower Fee",
              description:
                "How sliding scale fees work, the exact words to use by email and by phone, and what to do when the answer is no.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 1600,
              about: [
                "Sliding scale therapy",
                "Affordable therapy",
                "Therapy fees",
                "Mental health support",
                "Reduced fee counselling",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Learn", path: "/learn/sliding-scale-therapy" },
              {
                name: "Sliding scale therapy",
                path: "/learn/sliding-scale-therapy",
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
              href="/learn/sliding-scale-therapy"
              style={{ color: "var(--ink-3)" }}
            >
              Learn
            </Link>
            {" · Sliding scale"}
          </div>
          <h1 style={{ maxWidth: "20ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Sliding scale therapy:
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              how to ask.
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
            The listed price on a therapist&rsquo;s website is the top of a
            range, not a fixed fact. Most people never find that out, because
            asking feels like admitting something. Here is what a sliding scale
            actually is, how therapists decide, and the exact words to use.
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
            Published 22 August 2026 · ~7 min read
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
            <strong>If you are in crisis, cost is not the question today.</strong>{" "}
            US: call or text <strong>988</strong>. UK and Ireland: Samaritans,{" "}
            <strong>116 123</strong>. Canada: <strong>1-866-585-0445</strong>.
            More on our{" "}
            <Link href="/crisis" style={{ color: "var(--ember)" }}>
              crisis page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* SHORT VERSION */}
      <section style={{ padding: "64px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              The short version
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
              A sliding scale is a fee that comes down to match what you can
              pay. <strong>Many therapists offer one and do not advertise
              it.</strong> You get it by asking, plainly, at first contact.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              Commonly 30 to 60 percent off the listed fee. The worst realistic
              outcome is a polite no and a referral. Nobody is offended, and you
              are not the first person to ask this week.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              How therapists actually decide.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              There are two common shapes, and knowing which one you are
              dealing with makes the conversation easier.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              <strong style={{ color: "var(--ink)" }}>A formal scale.</strong>{" "}
              The therapist sets income tiers, frequently built on the federal
              poverty guidelines in the US or an equivalent elsewhere, and each
              tier has a fee. Their standard rate is the top tier. The bottom
              tier is the lowest fee at which their practice still works. You
              tell them roughly what you earn and how many people depend on it,
              and they place you. Some ask for a pay stub or tax return. Many
              take your word.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              <strong style={{ color: "var(--ink)" }}>A fixed number of
              reduced slots.</strong> Less formal and more common in small
              practices. The therapist decides they will carry, say, three
              clients at a reduced fee, and whether you get one depends on
              whether a slot is open. This is why the answer can be no today and
              yes in two months, and why asking to be told when one opens is a
              reasonable request.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              In both cases the reduced fee is deliberate. It is budgeted for. It
              is not a favour extracted from a reluctant professional, and the
              ethics codes therapists work under explicitly allow adjusting a
              fee that would cause hardship. That matters, because the thing
              that stops most people asking is the feeling that they would be
              asking for charity. They would not be.
            </p>
          </div>
        </div>
      </section>

      {/* THE WORDS */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "22ch", marginBottom: 16 }}>
              The words to use.
            </h2>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginBottom: 32,
              }}
            >
              Copy these as they are. They are short on purpose. Over-explaining
              your finances reads as apology, and you have nothing to apologise
              for.
            </p>
            <div style={{ display: "grid", gap: 22 }}>
              {SCRIPTS.map((s) => (
                <div
                  key={s.label}
                  style={{
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
                    {s.label}
                  </p>
                  {s.body.map((line, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 18.5,
                        lineHeight: 1.6,
                        color: "var(--ink)",
                        margin: i === 0 ? 0 : "12px 0 0",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 28,
              }}
            >
              Notice that none of these name a figure. Let the therapist tell you
              what their scale is. If they ask what you can manage, give a real
              number rather than a hopeful one. A fee you cannot sustain for six
              months is not a fee that helps you.
            </p>
          </div>
        </div>
      </section>

      {/* HAVE READY */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "22ch", marginBottom: 28 }}>
              Have these three things ready.
            </h2>
            <ul
              style={{
                paddingLeft: 0,
                listStyle: "none",
                display: "grid",
                gap: 18,
              }}
            >
              {[
                [
                  "A rough annual income figure.",
                  "Household, not just yours, if the therapist uses a formal scale. You do not need it to the pound, and you do not need to volunteer it unless asked.",
                ],
                [
                  "How often you can realistically sustain sessions.",
                  "Fortnightly at a fee you can hold is worth more than weekly at a fee that makes you quit in month three. Say so if that is the case.",
                ],
                [
                  "Whether you have any coverage at all.",
                  "An employer EAP, an out-of-network benefit, a student health plan. A therapist can sometimes combine a partial benefit with a reduced fee.",
                ],
              ].map(([head, body]) => (
                <li
                  key={head}
                  style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}
                >
                  <strong style={{ color: "var(--ink)" }}>{head}</strong> {body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHEN NO */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "22ch", marginBottom: 28 }}>
              When the answer is no.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              A no is information about one therapist&rsquo;s caseload this
              month. It is not information about you. Three moves, in order.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              <strong style={{ color: "var(--ink)" }}>Ask for a referral.</strong>{" "}
              Therapists know who in their area offers reduced fees, and a warm
              name is worth more than a directory search. The email script above
              already asks for this, so if they reply with only a no, reply
              once more: &ldquo;Understood. Is there anyone you would suggest
              who does?&rdquo;
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              <strong style={{ color: "var(--ink)" }}>Open Path Collective.</strong>{" "}
              Sliding scale at national scale, in the US and Canada. Licensed
              therapists who have agreed to see Open Path clients at{" "}
              <strong>$30 to $70 a session</strong> for individuals, up to $80
              for couples and families, after a one-time membership of $65 (or
              $89 CAD). No recurring fee. It exists precisely for the person who
              was just told no. Figures as of August 2026; check their site.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              <strong style={{ color: "var(--ink)" }}>The rest of the list.</strong>{" "}
              University training clinics, community mental health centres, an
              employer EAP, and the free options that may fit what you are
              carrying. We laid all of them out, with costs and trade-offs, in{" "}
              <Link href="/learn/cant-afford-therapy" style={{ color: "var(--ember)" }}>
                what to do when you cannot afford therapy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ONE LINE */}
      <section style={{ padding: "56px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-2)" }}>
              <strong style={{ color: "var(--ink)" }}>A note on who wrote
              this.</strong>{" "}
              Hearth is a peer-support membership, $39 a month for one{" "}
              <strong>Keeper</strong>, a trained peer companion rather than a
              clinician, kept for the long term. It is not therapy and it is not
              what this page is about. If you are not sure whether you need
              therapy or someone who stays,{" "}
              <Link href="/learn/do-i-need-therapy" style={{ color: "var(--ember)" }}>
                here is how to tell
              </Link>
              . If you do need therapy, we hope the script above gets you a
              fee you can keep.
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
                href="/learn/do-i-need-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Do I need therapy, or someone to talk to? &rarr;
              </Link>
              <Link
                href="/crisis"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Crisis resources by country &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
