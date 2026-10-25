import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
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

// Answers "Is there online emotional support for South Asians that speaks Urdu
// or Hindi?". Every other service listed was checked on its own website on
// 2026-10-25; Tele-MANAS against Press Information Bureau releases.
const PUBLISHED = "2026-10-25";
const REVIEWED = "2026-10-25";
const PATH = "/learn/urdu-hindi-punjabi-peer-support";
const HEADLINE = "Peer Support in Urdu, Hindi and Punjabi";
const SUMMARY =
  "Talk to a trained listener in Urdu, Hindi, Punjabi or English. One-to-one online peer support from Hearth, the same person for years. Not therapy.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: SUMMARY,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: "Emotional support in Urdu, Hindi and Punjabi",
    description:
      "One trained listener who speaks your language, matched by hand and kept for years. What Hearth offers, and the other options.",
    url: PATH,
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "Is there emotional support in Urdu online?",
    a: "Yes. Hearth matches you with one trained Keeper (a peer listener) who speaks Urdu, for video or audio calls and messages in between, and you keep the same person for years. It costs $39 a month for a call every two weeks, or $99 for weekly. The Meeting Matters, a clinic of clinical psychologists in Islamabad, also offers online therapy in Urdu.",
  },
  {
    q: "Can I talk to someone in Hindi about family pressure?",
    a: "Yes. Family pressure is one of the most common things people bring to Hearth. List Hindi as your preferred language in the 12-minute intake and we match you with a Keeper who speaks it, so you can talk about duty, parents, in-laws and marriage without translating any of it.",
  },
  {
    q: "Is there a Punjabi-speaking counsellor or listener online?",
    a: "Hearth has Keepers who speak Punjabi. A Keeper is a trained peer listener, not a counsellor or therapist. If you need counselling or therapy in Punjabi, The Meeting Matters offers sessions in English, Urdu, Hindi and Punjabi, online and in Islamabad.",
  },
  {
    q: "Do I need to be South Asian to use Hearth?",
    a: "No. Hearth is for anyone. Language is one of the things we match on, along with time zone and what you are carrying, so if you would rather talk in Urdu, Hindi or Punjabi, you can.",
  },
  {
    q: "Is Hearth therapy?",
    a: "No. Hearth is peer support. Keepers do not diagnose, treat or prescribe, and none act as clinicians at Hearth. If what you are carrying needs a therapist, your Keeper says so and helps you find one, including therapists who speak your language.",
  },
];

const BODY: CSSProperties = { fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" };
const LIST_ITEM: CSSProperties = { fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" };
const LINK: CSSProperties = { color: "var(--ember)" };

function Section({
  children,
  tint,
}: {
  children: ReactNode;
  tint?: boolean;
}) {
  return (
    <section
      style={{
        padding: "72px 0",
        borderBottom: tint ? undefined : "1px solid var(--rule-2)",
        background: tint ? "var(--paper-2)" : undefined,
      }}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: "68ch" }}>{children}</div>;
}

function H2({ children }: { children: ReactNode }) {
  return <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>{children}</h2>;
}

function P({ children, first }: { children: ReactNode; first?: boolean }) {
  return <p style={{ ...BODY, marginTop: first ? 0 : 20 }}>{children}</p>;
}

function Bullets({ items }: { items: Array<[string, string]> }) {
  return (
    <ul
      style={{
        marginTop: 24,
        paddingLeft: 0,
        listStyle: "none",
        display: "grid",
        gap: 16,
      }}
    >
      {items.map(([head, body]) => (
        <li key={head} style={LIST_ITEM}>
          <strong style={{ color: "var(--ink)" }}>{head}</strong> {body}
        </li>
      ))}
    </ul>
  );
}

function Table({
  head,
  rows,
  minWidth = 680,
  highlightFirst = false,
}: {
  head: string[];
  rows: string[][];
  minWidth?: number;
  /** Highlights the first row and tags it as our own service. */
  highlightFirst?: boolean;
}) {
  const cell: CSSProperties = {
    padding: "14px",
    borderBottom: "1px solid var(--rule-2)",
    color: "var(--ink-2)",
    verticalAlign: "top",
  };
  return (
    <div style={{ overflowX: "auto", marginTop: 8 }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 15,
          lineHeight: 1.6,
          minWidth,
        }}
      >
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                scope="col"
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
          {rows.map((row, r) => {
            const hl = highlightFirst && r === 0;
            const rowCell: CSSProperties = hl
              ? { ...cell, background: "var(--paper-2)", color: "var(--ink)" }
              : cell;
            return (
              <tr key={row[0]}>
                {row.map((value, i) =>
                  i === 0 ? (
                    <th
                      key={i}
                      scope="row"
                      style={{
                        ...rowCell,
                        textAlign: "left",
                        color: "var(--ink)",
                        fontWeight: hl ? 600 : 500,
                        borderLeft: hl ? "3px solid var(--ember)" : undefined,
                      }}
                    >
                      {value}
                      {hl && (
                        <span
                          style={{
                            display: "block",
                            marginTop: 6,
                            fontFamily: "var(--mono)",
                            fontSize: 10,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--ember)",
                            fontWeight: 500,
                          }}
                        >
                          Our service
                        </span>
                      )}
                    </th>
                  ) : (
                    <td key={i} style={rowCell}>
                      {value}
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function UrduHindiPunjabiPeerSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: PATH,
              name: HEADLINE,
              description: SUMMARY,
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: PATH,
              headline: "Emotional support in Urdu, Hindi and Punjabi",
              description: SUMMARY,
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 2000,
              about: [
                "Peer support",
                "Emotional support",
                "South Asian mental health",
                "Urdu",
                "Hindi",
                "Punjabi",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Peer support", path: "/peer-support" },
              { name: "Urdu, Hindi and Punjabi", path: PATH },
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
            <Link href="/peer-support" style={{ color: "var(--ink-3)" }}>
              Peer support
            </Link>
            {" · Urdu, Hindi and Punjabi"}
          </div>
          <h1 style={{ maxWidth: "20ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Emotional support
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              in your own language.
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
            Some things only come out right in Urdu, Hindi or Punjabi. This
            page covers where to find a listener who speaks your language
            online, what Hearth offers, and the other options, including
            therapy and helplines.
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
            Published 25 October 2026 · ~9 min read
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
            <strong>If you are in crisis, start here.</strong> In the US and
            Canada call or text <strong>988</strong>. In the UK and Ireland,
            call Samaritans on <strong>116 123</strong>. In India, call
            Tele-MANAS on <strong>14416</strong>, free and open 24 hours in
            many Indian languages. In Pakistan or anywhere else, call your
            local emergency number. More on our{" "}
            <Link href="/crisis" style={LINK}>
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
                margin: 0,
              }}
            >
              Yes. Hearth offers one-to-one online peer support with Keepers who
              speak Urdu, Hindi and Punjabi as well as English. You are matched
              by hand within 72 hours with one trained listener and keep the
              same person for years: a call every two weeks for $39 a month, or
              weekly for $99. It is peer support, not therapy.
            </p>
          </div>
        </div>
      </section>

      {/* WHY LANGUAGE MATTERS */}
      <Section>
        <Prose>
          <H2>Why your first language matters.</H2>
          <P first>
            Plenty of people who live their working lives in English still
            feel things in another language. The word your mother used, the
            phrase your grandfather said at the door, the particular weight of
            a family obligation: they arrive in Urdu or Hindi or Punjabi, and
            something gets lost when you translate them for a listener who
            does not know them.
          </P>
          <P>
            Translation also costs effort. When you have to stop and explain
            what <em>izzat</em> means in your family, or why the eldest son
            cannot simply say no, or why an aunt&rsquo;s comment at a wedding is
            still with you a year later, you spend the hour on context instead
            of on what you came to say. Talking to someone who already knows
            the shape of it means you can start in the middle.
          </P>
          <P>
            Many people also switch between languages in a single sentence.
            That is normal, and a listener who can follow you between English
            and your first language lets you speak the way you actually think.
          </P>
        </Prose>
      </Section>

      {/* WHAT IS HARD TO SAY */}
      <Section>
        <Prose>
          <H2>What people find hard to say in English.</H2>
          <P first>
            None of this is a diagnosis. It is the ordinary, recurring weight
            that many South Asian families carry, and the things people most
            often bring to a Keeper.
          </P>
          <Bullets
            items={[
              [
                "Duty to parents and family.",
                "Being the eldest, the one who earns, the one who mediates, the one everyone calls first.",
              ],
              [
                "Family pressure about marriage and career.",
                "The rishta conversations, the career your parents chose, the comparisons with cousins.",
              ],
              [
                "In-laws and the joint family.",
                "Living with or near a whole household of expectations, and having nowhere private to put the frustration.",
              ],
              [
                "Grief, especially from far away.",
                "Losing a parent or grandparent in another country, missing the funeral, and grieving where nobody around you knew them.",
              ],
              [
                "Faith and doubt.",
                "Holding belief, questioning it, or both, without being judged by either side.",
              ],
              [
                "Identity between cultures.",
                "Being too much of one place for the other, and code-switching all day.",
              ],
            ]}
          />
          <P>
            We have written more about{" "}
            <Link href="/for/family-pressure" style={LINK}>
              family pressure
            </Link>
            ,{" "}
            <Link href="/for/grief" style={LINK}>
              grief
            </Link>{" "}
            and{" "}
            <Link href="/for/identity" style={LINK}>
              identity
            </Link>
            .
          </P>
        </Prose>
      </Section>

      {/* HOW HEARTH WORKS */}
      <Section tint>
        <Prose>
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            <span className="dot" />
            Our service
          </div>
          <H2>How Hearth works in your language.</H2>
          <P first>
            Hearth is one-to-one online peer support. You are matched with one{" "}
            <strong>Keeper</strong>, a trained peer listener, and you keep the
            same person for years. You talk in a <strong>Sit</strong>, a 35 to
            60 minute video or audio call, and in between there is the{" "}
            <strong>Long Talk</strong>, a written message thread with your
            Keeper.
          </P>
          <Bullets
            items={[
              [
                "You choose your language.",
                "The 12-minute intake asks which language you would rather talk in: Urdu, Hindi, Punjabi or English.",
              ],
              [
                "We match on language first.",
                "A person reads your intake and pairs you within 72 hours, on language first, then time zone, then what you are carrying.",
              ],
              [
                "The same person, every time.",
                "Your Keeper remembers last month and last year, so you never start your story from the beginning again.",
              ],
              [
                "Trained and supervised.",
                "Every Keeper completes Hearth’s 120-hour training, a background check and monthly supervision. Many trained as psychologists or counsellors in their home countries. None act as clinicians at Hearth.",
              ],
              [
                "Support between calls.",
                "Write to your Keeper any day and hear back within a day (within 4 hours on the weekly plan), plus a short note from them every Friday.",
              ],
              [
                "Simple pricing.",
                "$39 a month for a Sit every two weeks, or $99 for weekly. Change Keepers after your first Sit at no charge. Cancel any time, in one click.",
              ],
            ]}
          />
          <P>
            Hearth is for anyone, not only South Asians. Language is simply one
            of the things we match on.{" "}
            <Link href="/how-it-works" style={LINK}>
              How Hearth works
            </Link>{" "}
            ·{" "}
            <Link href="/pricing" style={LINK}>
              Pricing
            </Link>
          </P>
          <div className="cta-row" style={{ marginTop: 32 }}>
            <Link href="/intake" className="btn btn-primary btn-lg">
              Start the 12-minute intake <span className="arr">&rarr;</span>
            </Link>
            <Link href="/pricing" className="btn btn-ghost btn-lg">
              See pricing
            </Link>
          </div>
        </Prose>
      </Section>

      {/* OPTIONS COMPARED */}
      <Section>
        <H2>Your options, compared.</H2>
        <Prose>
          <P first>
            Each service below was checked on its own website on 25 October
            2026. Some are therapy with psychologists, some are helplines, and
            one is peer support. They do different jobs.
          </P>
        </Prose>
        <Table
          head={["Service", "Same person every time?", "What it is", "Languages", "Cost and where"]}
          minWidth={900}
          highlightFirst
          rows={[
            [
              "Hearth",
              "Yes. One Keeper, matched by hand, kept for years",
              "One-to-one peer support: video or audio calls plus messages in between",
              "Urdu, Hindi, Punjabi, English",
              "$39 a month (a call every two weeks) or $99 (weekly). Online, wherever you live",
            ],
            [
              "The Meeting Matters",
              "Usually, as with most therapy",
              "A clinic of clinical psychologists offering therapy and counselling, in person and online",
              "English, Urdu, Hindi, Punjabi",
              "Paid sessions; the fee is the same online or in person. Islamabad clinic, and online for clients in Pakistan and abroad",
            ],
            [
              "AAHNA South Asian Therapy",
              "Usually, as with most therapy",
              "A South Asian-led team of therapists offering online therapy",
              "Several South Asian languages (not listed on their homepage)",
              "Free 15-minute consultation; fees not published. London-based, online worldwide",
            ],
            [
              "South Asian Network (SAN)",
              "Depends on the service",
              "A community nonprofit whose services include therapy and workshops",
              "Describes its services as culturally and linguistically competent",
              "Free. Southern California, virtual and in person",
            ],
            [
              "SAMHIN helpline",
              "No, it is a helpline",
              "A non-emergency helpline, a provider directory and support groups",
              "Not stated",
              "Free. US, 888-581-3230, 10am to 7pm Eastern, daily",
            ],
            [
              "Tele-MANAS",
              "No, it is a helpline",
              "India's government mental health helpline: counselling and referral by phone",
              "About 20 Indian languages",
              "Free, 24 hours. India, 14416 or 1-800-891-4416",
            ],
          ]}
        />
        <Prose>
          <P>
            Links:{" "}
            <a href="https://themeetingmatters.com/" style={LINK} rel="noopener">
              The Meeting Matters
            </a>
            ,{" "}
            <a href="https://southasiantherapy.org/" style={LINK} rel="noopener">
              AAHNA South Asian Therapy
            </a>
            ,{" "}
            <a href="https://southasiannetwork.org/" style={LINK} rel="noopener">
              South Asian Network
            </a>
            ,{" "}
            <a href="https://samhin.org/" style={LINK} rel="noopener">
              SAMHIN
            </a>
            ,{" "}
            <a href="https://telemanas.mohfw.gov.in/" style={LINK} rel="noopener">
              Tele-MANAS
            </a>
            .
          </P>
          <P>
            Hearth is the only option above built around one person who stays
            and who speaks your language. If you want more on how one-to-one
            support works, read{" "}
            <Link href="/learn/one-to-one-peer-support" style={LINK}>
              one-to-one peer support, explained
            </Link>{" "}
            or our guide to{" "}
            <Link href="/peer-support" style={LINK}>
              what peer support is
            </Link>
            .
          </P>
        </Prose>
      </Section>

      {/* WHEN YOU NEED A THERAPIST */}
      <Section>
        <Prose>
          <H2>When you need a therapist instead.</H2>
          <P first>
            Peer support is for the weight of ordinary life. Some things need
            a licensed clinician, in any language:
          </P>
          <Bullets
            items={[
              ["A diagnosis, or a suspected one.", "Depression, an anxiety disorder, PTSD, OCD, bipolar disorder or an eating disorder."],
              ["Trauma.", "Abuse, assault or violence, including at home. Trauma has specific treatments that need a trained clinician."],
              ["Medication.", "Only a doctor or psychiatrist can have that conversation with you."],
              ["Thoughts of harming yourself.", "Please use the crisis numbers at the top of this page today."],
            ]}
          />
          <P>
            If any of these come up, your Keeper will say so plainly and help
            you find a therapist, including one who speaks your language, and
            will stay with you while you do. The services in the table above
            that offer therapy are a good place to start.
          </P>
        </Prose>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 style={{ maxWidth: "20ch", marginBottom: 36 }}>Common questions.</h2>
        <div style={{ maxWidth: "68ch", display: "grid", gap: 32 }}>
          {FAQ.map((item) => (
            <div key={item.q}>
              <h3 style={{ marginBottom: 12 }}>{item.q}</h3>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-2)" }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* KEEP READING */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Keep reading
            </div>
            <div style={{ display: "grid", gap: 18, marginTop: 8 }}>
              <Link href="/peer-support" style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}>
                What is peer support? Types, evidence and limits &rarr;
              </Link>
              <Link
                href="/learn/one-to-one-peer-support"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                One-to-one peer support, explained &rarr;
              </Link>
              <Link href="/how-it-works" style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}>
                How Hearth works &rarr;
              </Link>
              <Link href="/crisis" style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}>
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
