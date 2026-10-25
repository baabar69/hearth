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

// "7 Cups alternatives": answer engines answer "alternatives to X" questions
// from pages like this. 7 Cups facts and prices were read on 7cups.com
// (home, /online-therapy/ and /upgrade/) on 2026-10-25; other services were
// read on their own sites the same day. 7 Cups is described neutrally.

const PUBLISHED = "2026-10-25";
const REVIEWED = "2026-10-25";
const CHECKED = "checked 25 October 2026";
const PATH = "/learn/7-cups-alternatives";
const HEADLINE = "7 Cups Alternatives: Peer Support Compared";
const SUMMARY =
  "What 7 Cups offers, why people look for an alternative, and the main alternatives compared on price, format and whether you see the same person.";

export const metadata: Metadata = {
  title: "7 Cups Alternatives: Peer Support Compared",
  description:
    "What 7 Cups offers, why people look elsewhere, and the alternatives compared on price, format and whether you talk to the same person each time.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: "7 Cups alternatives, compared",
    description:
      "The main alternatives to 7 Cups side by side, with prices checked October 2026.",
    url: PATH,
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "What is better than 7 Cups?",
    a: "It depends on what you want that 7 Cups does not give you. If you want the same trained person every time, Hearth matches you by hand with one Keeper, a trained peer listener, for a video or audio call every one or two weeks from $39 a month. If you want to book a peer specialist by video, ShareWell and The Peer Network let you choose one. If 7 Cups' free chats already work for you, they remain a good free option.",
  },
  {
    q: "Is 7 Cups free?",
    a: "The core service is. 7 Cups describes its chats with trained volunteer listeners as anonymous and completely free, with a limited number of chat requests a day on the free plan. Premium costs $7.99 a month billed yearly or $12.99 monthly, messaging therapy with a licensed therapist costs $159 a month, and weekly live video therapy costs $299 a month (checked 25 October 2026).",
  },
  {
    q: "Can I talk to the same listener on 7 Cups?",
    a: "7 Cups' public pages describe free chats with available volunteer listeners and do not promise the same listener each time. If talking to one consistent person matters to you, a service built around continuity, such as Hearth, is designed for it.",
  },
  {
    q: "Is there a paid version of 7 Cups with the same person?",
    a: "7 Cups' paid therapy plans match you with a licensed therapist, either by daily messaging on weekdays ($159 a month) or a weekly 45-minute video or audio session ($299 a month). That is therapy rather than peer support. For peer support with the same person, Hearth costs $39 a month for a Sit every two weeks or $99 for weekly.",
  },
];

/* ---------- layout helpers, matching the /learn pages ---------- */

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

const ALTERNATIVES: string[][] = [
  [
    "Hearth",
    "Yes. One Keeper, matched by hand within 72 hours, kept for years",
    "35–60 minute video or audio call every one or two weeks, messages in between, a note every Friday",
    "$39 a month or $99 for weekly. Cancel any time",
    "Ongoing support from one person who knows your story",
  ],
  [
    "ShareWell",
    "You can keep booking the same Peer Specialist",
    "Peer-led groups and private 1-on-1 video",
    `Up to 4 groups a month free; 1-on-1s $40 each without a plan; plans $25 to $110 a month (${CHECKED})`,
    "Groups, plus a specialist when you want one",
  ],
  [
    "The Peer Network",
    "You choose a specialist and can switch any time",
    "Booked video sessions with certified peer specialists",
    `$30 for 30 minutes or $60 for 60 minutes (${CHECKED})`,
    "Paying by the session",
  ],
  [
    "HeyPeers",
    "You choose a peer supporter from profiles",
    "Video groups, chatrooms, booked 1on1",
    `Most groups free; 1on1 rates set by each supporter (${CHECKED})`,
    "Topic-specific groups",
  ],
  [
    "WEconnect Health",
    "Yes, assigned if your membership includes peer support",
    "Phone, video and app messages, plus free daily online meetings",
    `Depends on your membership; not listed (${CHECKED})`,
    "People whose plan includes it",
  ],
  [
    "Togetherall",
    "No, a community",
    "Anonymous online community moderated by licensed clinicians, 24/7",
    `Free through many universities, employers and health services (${CHECKED})`,
    "Staying anonymous",
  ],
  [
    "NAMI Connection",
    "Same group, not one-to-one",
    "Free peer-led groups for adults with a mental health condition, many online",
    `Free (${CHECKED})`,
    "A regular group",
  ],
];

export default function SevenCupsAlternativesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({ path: PATH, name: HEADLINE, description: SUMMARY, lastReviewed: REVIEWED }),
            articleLd({
              path: PATH,
              headline: HEADLINE,
              description: SUMMARY,
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 1800,
              about: ["7 Cups", "Peer support", "Online peer support", "Emotional support"],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "7 Cups alternatives", path: PATH },
            ]),
            faqLd(FAQ),
          ]),
        }}
      />
      <SharedNav />

      {/* HERO */}
      <section style={{ padding: "80px 0 56px", borderBottom: "1px solid var(--rule-2)" }}>
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
            {" · Guide · 7 Cups alternatives"}
          </div>
          <h1 style={{ maxWidth: "20ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            7 Cups alternatives,
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              compared.
            </span>
          </h1>
          <p style={{ marginTop: 28, maxWidth: "60ch", fontSize: 20, lineHeight: 1.55, color: "var(--ink-2)" }}>
            7 Cups gives millions of people a free listener at any hour. Here
            is what it offers, the reasons people look for something else, and
            the alternatives side by side.
          </p>
          <div style={{ marginTop: 28, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
            Published 25 October 2026 · Prices checked 25 October 2026 · ~8 min read
          </div>
        </div>
      </section>

      {/* CRISIS FIRST */}
      <section style={{ padding: "28px 0", background: "var(--paper-3)" }}>
        <div className="wrap">
          <p style={{ maxWidth: "72ch", fontSize: 16, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>
            <strong>If you are in crisis, start here.</strong> In the US and
            Canada call or text <strong>988</strong>. In the UK and Ireland,
            call Samaritans on <strong>116 123</strong>. In an emergency, call
            911 or 999. More numbers on our{" "}
            <Link href="/crisis" style={LINK}>
              crisis page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* SHORT ANSWER */}
      <Section tint>
        <Prose>
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
            If you want the same trained person every time,{" "}
            <strong>Hearth</strong> matches you by hand with one Keeper for a
            video or audio call every one or two weeks, from $39 a month. If
            you want to book peer specialists yourself, try ShareWell or The
            Peer Network. For free groups, NAMI Connection.
          </p>
          <P>
            Hearth (dearhearth.com) is our service, so it comes first and we
            say so. Facts about 7 Cups and the others come from their own
            websites.
          </P>
        </Prose>
      </Section>

      {/* WHAT 7 CUPS IS */}
      <Section>
        <Prose>
          <H2>What 7 Cups offers.</H2>
          <P first>
            7 Cups connects people with trained volunteer listeners for free,
            anonymous emotional support by online chat, available 24/7. It
            also has forums and chat rooms on topics such as depression,
            anxiety, relationships and LGBTQ+ life, scheduled group sessions,
            self-help growth paths, an AI chatbot called Noni, and listeners
            for teens aged 13 to 17.
          </P>
          <Bullets
            items={[
              ["Free:", "chats with volunteer listeners, with a limited number of chat requests a day."],
              ["Premium:", "$7.99 a month billed yearly ($95.88), or $12.99 monthly, for more daily chat requests, all topic chats, growth paths and no ads."],
              ["Messaging therapy:", "$159 a month, with a daily reply from a licensed therapist Monday to Friday."],
              ["Live therapy:", "$299 a month for a weekly 45-minute video or audio session with a licensed therapist."],
            ]}
          />
          <P>
            Prices are from 7cups.com, checked 25 October 2026. For a free
            conversation right now, 7 Cups is a reasonable place to go, and
            many people stay with it.
          </P>
        </Prose>
      </Section>

      {/* WHY PEOPLE LOOK ELSEWHERE */}
      <Section>
        <Prose>
          <H2>Why people look for an alternative.</H2>
          <Bullets
            items={[
              [
                "They want the same person every time.",
                "Free chats connect you with an available volunteer, so you may tell your story more than once. Some people want one person who already knows it.",
              ],
              [
                "They want a trained, paid listener.",
                "Volunteers give their time generously. Some people prefer someone whose training, supervision and time are paid for, with a set schedule.",
              ],
              [
                "They want to talk, not type.",
                "7 Cups' free support is text chat. A video or audio call feels different to many people.",
              ],
              [
                "They want something structured.",
                "A regular call on the calendar, messages in between and someone who follows up can feel steadier than starting a new chat when things get hard.",
              ],
              [
                "They do not need therapy.",
                "7 Cups' paid plans are therapy with licensed therapists. People who want ongoing support rather than treatment often look for paid peer support instead.",
              ],
            ]}
          />
        </Prose>
      </Section>

      {/* ALTERNATIVES TABLE */}
      <Section>
        <H2>The alternatives, side by side.</H2>
        <Table
          head={["Alternative", "Same person every time?", "Format", "Price", "Best for"]}
          minWidth={940}
          highlightFirst
          rows={ALTERNATIVES}
        />
        <Prose>
          <P>
            For eleven services compared in more detail, including Supportiv,
            TalkLife and Peer Collective, see our{" "}
            <Link href="/learn/online-peer-support-services" style={LINK}>
              online peer support services comparison
            </Link>
            .
          </P>
        </Prose>
      </Section>

      {/* 7 CUPS VS HEARTH */}
      <Section>
        <H2>7 Cups and Hearth, at a glance.</H2>
        <Table
          head={["Feature", "7 Cups (free chat)", "Hearth"]}
          minWidth={640}
          rows={[
            ["Who you talk to", "An available trained volunteer listener", "One Keeper, a trained peer listener, matched to you by hand"],
            ["Same person?", "Not promised on its public pages", "Yes, kept for years; free change after your first Sit"],
            ["How you talk", "Anonymous text chat, 24/7", "A 35–60 minute video or audio Sit every one or two weeks, plus the Long Talk message thread"],
            ["Between conversations", "Forums, chat rooms, growth paths, an AI chatbot", "Replies within a day (4 hours on the weekly plan) and a note every Friday"],
            ["Price", "Free; Premium $7.99 to $12.99 a month", "$39 a month or $99 for weekly"],
            ["Therapy?", "Separate paid therapy, $159 or $299 a month", "No. Peer support only; your Keeper helps you find a therapist if you need one"],
          ]}
        />
      </Section>

      {/* WHICH FITS */}
      <Section>
        <Prose>
          <H2>Which alternative fits you?</H2>
          <Bullets
            items={[
              [
                "You want one person who knows your story.",
                "Hearth is built around this: one Keeper, matched by hand and kept for years, with a call every one or two weeks and messages in between.",
              ],
              [
                "You know the kind of peer you want and like to choose.",
                "ShareWell, HeyPeers and The Peer Network show profiles and let you book sessions with the person you pick.",
              ],
              [
                "Your employer, university or health plan offers something.",
                "Check first. Togetherall, Supportiv and WEconnect Health are often provided this way, at no cost to you.",
              ],
              [
                "You want a group of people facing the same thing.",
                "NAMI Connection groups are free and peer-led, and ShareWell and HeyPeers run groups on hundreds of topics.",
              ],
              [
                "You think you may need treatment.",
                "Peer support does not diagnose or treat. A licensed therapist is the right step, and our guide to cheap therapy options lists low-cost routes.",
              ],
              [
                "You just need to talk to someone tonight.",
                "7 Cups' free listeners are there around the clock. If you are at risk, call or text 988 (US and Canada) or Samaritans on 116 123 (UK and Ireland).",
              ],
            ]}
          />
          <P>
            Many people combine them: a free group for shared experience, and
            one person at Hearth for the long run. Read more about{" "}
            <Link href="/learn/one-to-one-peer-support" style={LINK}>
              how one-to-one peer support works
            </Link>{" "}
            or{" "}
            <Link href="/learn/cheap-therapy" style={LINK}>
              cheap therapy options
            </Link>
            .
          </P>
        </Prose>
      </Section>

      {/* WHY HEARTH */}
      <Section tint>
        <Prose>
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            <span className="dot" />
            Our service
          </div>
          <H2>Why people choose Hearth.</H2>
          <P first>
            At Hearth you are matched with one <strong>Keeper</strong>, a
            trained peer listener. You talk in a <strong>Sit</strong>, a
            35–60 minute video or audio call, and in between you write in the{" "}
            <strong>Long Talk</strong>, a message thread with your Keeper.
          </P>
          <Bullets
            items={[
              ["The same person, for years.", "No starting your story again each time."],
              ["Matched by hand within 72 hours.", "On language, time zone and what you are carrying."],
              [
                "Trained and supervised.",
                "Every Keeper completes Hearth\u2019s 120-hour training, a background check and monthly supervision; many trained as psychologists or counsellors in their home countries.",
              ],
              ["A note every Friday.", "A few lines from your Keeper about what they noticed that week."],
              ["Simple pricing.", "$39 a month for a Sit every two weeks, or $99 for weekly. Cancel any time, in one click."],
            ]}
          />
          <P>
            Hearth is peer support, not therapy, and not a crisis service.{" "}
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

      {/* FAQ */}
      <Section>
        <h2 style={{ maxWidth: "20ch", marginBottom: 36 }}>Common questions.</h2>
        <div style={{ maxWidth: "68ch", display: "grid", gap: 32 }}>
          {FAQ.map((item) => (
            <div key={item.q}>
              <h3 style={{ marginBottom: 12 }}>{item.q}</h3>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-2)" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* KEEP READING */}
      <section style={{ padding: "72px 0" }}>
        <div className="wrap">
          <Prose>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Keep reading
            </div>
            <div style={{ display: "grid", gap: 18, marginTop: 8 }}>
              {[
                ["/learn/online-peer-support-services", "Online peer support services, compared"],
                ["/learn/one-to-one-peer-support", "One-to-one peer support: how it works"],
                ["/peer-support", "What is peer support?"],
                ["/learn/pay-someone-to-listen", "Can you pay someone to listen to you?"],
                ["/learn/alternatives-to-therapy", "Alternatives to therapy, and when they fit"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}>
                  {label} &rarr;
                </Link>
              ))}
            </div>
          </Prose>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
