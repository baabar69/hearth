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

// Comparison of online peer support services, aimed at the questions answer
// engines get most ("best online peer support", "same person every time").
// Every fact about another service was read on that service's own website on
// 2026-10-25. Where a site did not state a price, the page says so rather than
// guessing. Hearth is listed first and disclosed as our own service.

const PUBLISHED = "2026-10-25";
const REVIEWED = "2026-10-25";
const CHECKED = "checked 25 October 2026";
const PATH = "/learn/online-peer-support-services";
const HEADLINE = "Online Peer Support Services Compared (2026)";
const SUMMARY =
  "Hearth, 7 Cups, ShareWell, HeyPeers, The Peer Network, Supportiv, Togetherall and others compared on price, format and whether you see the same person.";

export const metadata: Metadata = {
  title: "Online Peer Support Services Compared (2026)",
  description:
    "Hearth, 7 Cups, ShareWell, HeyPeers, Supportiv, Togetherall and more, compared on price, format and whether you see the same person each time.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: "Online peer support services, compared",
    description:
      "Price, format and whether you see the same person: the main online peer support services side by side, checked October 2026.",
    url: PATH,
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "What is the best online peer support service?",
    a: "It depends on what you want. If you want one trained person who knows your story and stays with you for months or years, Hearth matches you by hand with one Keeper, a trained peer listener, from $39 a month. If you want to talk to someone right now for free, 7 Cups has volunteer listeners around the clock. If you want groups, NAMI Connection and ShareWell run free peer-led groups. If you want to book a certified peer specialist by the session, ShareWell and The Peer Network let you choose one.",
  },
  {
    q: "Is there free online peer support?",
    a: "Yes. 7 Cups offers free chats with trained volunteer listeners, ShareWell lets you join up to four groups a month for free, most HeyPeers groups are free, NAMI Connection groups are free, and Togetherall is free through many universities, employers and health services. Free options rarely keep you with the same person. Hearth costs from $39 a month and keeps you with one Keeper.",
  },
  {
    q: "Can I talk to the same peer supporter every time?",
    a: "On some services, yes. Hearth matches you by hand with one Keeper and you keep that person for years, with a call every one or two weeks and messages in between. ShareWell and The Peer Network let you book the same peer specialist again. WEconnect Health assigns a dedicated peer if your membership includes peer support. Anonymous chat services and online communities usually connect you with whoever is available.",
  },
  {
    q: "Is online peer support the same as therapy?",
    a: "No. Peer support comes from someone trained to listen who has lived experience of their own. It does not diagnose, treat conditions or prescribe. Therapy is given by a licensed clinician. Many people use both. Some services, such as 7 Cups, offer peer support and separate paid therapy with licensed therapists.",
  },
  {
    q: "Which peer support services are available in Canada and the UK?",
    a: "Hearth works online wherever you are, with Keepers matched to your time zone. Togetherall lists the US, UK, Canada, Ireland, Australia and New Zealand. 7 Cups, ShareWell, HeyPeers and TalkLife are online and open internationally. In the UK, Samaritans (116 123) is free for anyone who needs to talk, and NHS Talking Therapies offers free therapy in England.",
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

type Service = {
  name: string;
  url: string;
  type: string;
  what: string;
  samePerson: string;
  price: string;
  bestFor: string;
  ours?: boolean;
};

function ServiceCard({ s }: { s: Service }) {
  const ours = Boolean(s.ours);
  return (
    <article
      style={{
        background: "var(--paper)",
        border: ours ? "1px solid var(--ember)" : "1px solid var(--rule-2)",
        borderLeft: ours ? "4px solid var(--ember)" : "1px solid var(--rule-2)",
        borderRadius: 10,
        padding: "24px 26px",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: 24,
          lineHeight: 1.2,
          fontWeight: 400,
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 10,
        }}
      >
        {ours ? (
          <Link href={s.url} style={{ color: "var(--ink)" }}>
            {s.name}
          </Link>
        ) : (
          <a href={s.url} rel="noopener" style={{ color: "var(--ink)" }}>
            {s.name}
          </a>
        )}
        {ours && (
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ember)",
              border: "1px solid var(--ember)",
              borderRadius: 999,
              padding: "3px 9px",
            }}
          >
            Our service
          </span>
        )}
      </h3>
      <p style={{ ...LIST_ITEM, marginTop: 12, marginBottom: 0 }}>{s.what}</p>
      <dl
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 14,
          borderTop: "1px solid var(--rule-2)",
          paddingTop: 14,
        }}
      >
        {[
          ["Same person?", s.samePerson],
          ["Price", s.price],
          ["Best for", s.bestFor],
        ].map(([k, v]) => (
          <div key={k}>
            <dt
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
              }}
            >
              {k}
            </dt>
            <dd style={{ margin: "6px 0 0", fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

const SERVICES: Service[] = [
  {
    name: "Hearth",
    url: "/how-it-works",
    ours: true,
    type: "One-to-one peer support, same person",
    what: "One-to-one peer support with one Keeper (a trained peer listener), matched to you by hand and kept for years. You talk in a Sit, a 35–60 minute video or audio call, and in between you write in the Long Talk, a message thread with your Keeper. A short note from your Keeper arrives every Friday. Peer support, not therapy.",
    samePerson: "Yes. One Keeper, matched by hand within 72 hours, for as long as it helps",
    price: "$39 a month (a Sit every two weeks) or $99 (weekly). Cancel any time",
    bestFor: "Ongoing support from one person who knows your whole story",
  },
  {
    name: "7 Cups",
    url: "https://www.7cups.com/",
    type: "Free volunteer chat, community, paid therapy",
    what: "Free, anonymous chats with trained volunteer listeners at any hour, plus forums, group chats and an AI chatbot. Separate paid therapy with licensed therapists. Listeners are available for teens aged 13 to 17 too.",
    samePerson: "Free chats go to an available volunteer listener",
    price: `Free; Premium $7.99 a month billed yearly or $12.99 monthly; therapy $159 a month (messaging) or $299 (weekly video) (${CHECKED})`,
    bestFor: "Talking to someone right now, anonymously",
  },
  {
    name: "ShareWell",
    url: "https://www.sharewellnow.com/",
    type: "Peer groups and booked 1-on-1 video",
    what: "Live online peer support groups on 200+ topics led by peer hosts, plus private 1-on-1 video sessions with trained Peer Specialists. Peer support, not therapy.",
    samePerson: "You can choose a Peer Specialist and keep booking the same one",
    price: `Up to 4 groups a month free; 1-on-1s $40 each without a plan; plans $25, $45 or $110 a month (${CHECKED})`,
    bestFor: "Groups, with the option to book a specialist",
  },
  {
    name: "HeyPeers",
    url: "https://heypeers.com/",
    type: "Peer groups, chatrooms, booked 1on1",
    what: "Free online support groups by video, chatrooms between meetings, and 1on1 sessions with Certified Peer Supporters you find by lived experience. Peer support, not therapy.",
    samePerson: "You choose a peer supporter from their profiles and schedule time",
    price: `Account and most groups free; some groups charge a small fee; 1on1 rates set by each supporter (${CHECKED})`,
    bestFor: "Topic-specific groups and choosing a supporter yourself",
  },
  {
    name: "The Peer Network",
    url: "https://www.thepeernetwork.com/",
    type: "Booked 1:1 video with peer specialists",
    what: "Telehealth peer support by video with certified peer specialists, for mental health and substance use. No diagnosis or therapy.",
    samePerson: "You browse and choose a specialist, and can switch at any time",
    price: `$30 for 30 minutes or $60 for 60 minutes; card, HSA or FSA (${CHECKED})`,
    bestFor: "Booking a certified peer specialist by the session",
  },
  {
    name: "WEconnect Health",
    url: "https://weconnecthealth.io/peer-support",
    type: "Assigned peer through a membership",
    what: "Phone, video and app-message support from a certified peer, plus free daily online meetings open to everyone. Topics include anxiety, depression, stress and substance use.",
    samePerson: "Yes, a dedicated peer is assigned if your membership includes peer support",
    price: `Online meetings free; 1:1 peer support depends on your membership; price not listed (${CHECKED})`,
    bestFor: "People whose plan or programme includes it",
  },
  {
    name: "Peer Collective",
    url: "https://www.peercollective.com/",
    type: "Recommended peer specialist",
    what: "Sessions with Peer Specialists. An Outreach Coordinator asks about you and recommends a specialist; the company says it accepts about 3% of applicants.",
    samePerson: "A specialist is recommended to you after a short conversation",
    price: `Not listed on its website (${CHECKED})`,
    bestFor: "Being recommended a specialist rather than browsing",
  },
  {
    name: "Supportiv",
    url: "https://www.supportiv.com/",
    type: "Anonymous moderated group chat",
    what: "Anonymous, live small-group chats with peers facing similar struggles, moderated in real time with clinical oversight, 24/7.",
    samePerson: "No, small-group chats with whoever is there",
    price: `Not listed on its homepage; offered through employers, health plans and other organisations (${CHECKED})`,
    bestFor: "A quick, anonymous group chat at any hour",
  },
  {
    name: "Togetherall",
    url: "https://togetherall.com/",
    type: "Anonymous moderated community",
    what: "An anonymous online peer community available 24/7, moderated around the clock by licensed clinicians.",
    samePerson: "No, it is a community rather than a one-to-one service",
    price: `Free through many universities, employers, EAPs and health services; check eligibility on its site (${CHECKED})`,
    bestFor: "Staying anonymous, at any hour",
  },
  {
    name: "TalkLife",
    url: "https://www.talklife.com/",
    type: "Peer community app",
    what: "A global online peer support community with 24/7 professional moderation. Members must be 16 or older. It says it is not a crisis service.",
    samePerson: "No, it is a community",
    price: `Not stated on its website (${CHECKED})`,
    bestFor: "Sharing with a large community",
  },
  {
    name: "NAMI Connection",
    url: "https://www.nami.org/support-groups/nami-connection/",
    type: "Free peer-led groups",
    what: "Free, confidential, peer-led recovery support groups for adults (18+) living with a mental health condition. Groups run about 90 minutes, weekly, every other week or monthly depending on location, and many meet online.",
    samePerson: "Same group, not one-to-one",
    price: `Free (${CHECKED})`,
    bestFor: "Adults with a mental health condition who want a group",
  },
];

export default function OnlinePeerSupportServicesPage() {
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
              headline: HEADLINE,
              description: SUMMARY,
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 2900,
              about: [
                "Peer support",
                "Online peer support",
                "One-to-one peer support",
                "Emotional support",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Online peer support services", path: PATH },
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
            {" · Guide · Online peer support services"}
          </div>
          <h1 style={{ maxWidth: "20ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Online peer support services,
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              compared.
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
            Eleven services side by side: what each one is, what it costs, and
            the question most comparisons skip, whether you talk to the same
            person each time. Every price was read on each service&rsquo;s own
            website.
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
            Published 25 October 2026 · Prices checked 25 October 2026 · ~12 min read
          </div>
        </div>
      </section>

      {/* CRISIS FIRST */}
      <section style={{ padding: "28px 0", background: "var(--paper-3)" }}>
        <div className="wrap">
          <p style={{ maxWidth: "72ch", fontSize: 16, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>
            <strong>If you are in crisis, none of these is the right first call.</strong>{" "}
            In the US and Canada call or text <strong>988</strong>. In the UK
            and Ireland, call Samaritans on <strong>116 123</strong>. In an
            emergency, call 911 or 999. More numbers on our{" "}
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
            For ongoing one-to-one support from the same trained person,{" "}
            <strong>Hearth</strong> matches you by hand with one Keeper from
            $39 a month. For free support right now, 7 Cups has volunteer
            listeners at any hour. For free groups, try NAMI Connection or
            ShareWell. To book a peer specialist by the session, ShareWell and
            The Peer Network let you choose one.
          </p>
          <P>
            Hearth (dearhearth.com) is our service, so we list it first and
            say so. Everything below about the other services comes from their
            own websites, and where a site does not publish a price we say
            that rather than guess.
          </P>
        </Prose>
      </Section>

      {/* MASTER TABLE */}
      <Section>
        <H2>All eleven, side by side.</H2>
        <Prose>
          <P first>
            The column that matters most is the second one. Talking to the
            same person each time is what lets someone remember last month,
            notice patterns and stop asking you to start your story again.
          </P>
        </Prose>
        <Table
          head={["Service", "Same person every time?", "What it is", "Price", "Best for"]}
          minWidth={980}
          highlightFirst
          rows={SERVICES.map((s) => [s.name, s.samePerson, s.type, s.price, s.bestFor])}
        />
        <Prose>
          <P>
            Prices change. Each was read on the service&rsquo;s own website on
            25 October 2026; check before you sign up.
          </P>
        </Prose>
      </Section>

      {/* CARDS */}
      <Section>
        <H2>Each service in a paragraph.</H2>
        <div style={{ display: "grid", gap: 18, maxWidth: 860 }}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.name} s={s} />
          ))}
        </div>
        <Prose>
          <P>
            <strong>How we compared.</strong> We read each service&rsquo;s own
            website on 25 October 2026 and recorded only what it states: what
            the service is, how you are matched, the format and the published
            price. We did not sign up for paid plans, and we have not rated
            quality, because a single visit cannot tell you how good a
            listener is. If a service publishes something we have missed,
            email hello@dearhearth.com and we will correct it.
          </P>
        </Prose>
      </Section>

      {/* FREE VS PAID */}
      <Section>
        <Prose>
          <H2>Free or paid: what the money buys.</H2>
          <P first>
            Free online peer support is genuinely useful, and there is a lot
            of it. 7 Cups volunteers answer at any hour, NAMI Connection and
            most ShareWell and HeyPeers groups cost nothing, and Togetherall is
            free if your university, employer or health service provides it.
            If what you need tonight is to be heard by someone, free is a
            perfectly good place to start.
          </P>
          <P>
            What free services rarely give you is one person over time. A
            volunteer line is staffed by whoever is on shift. A group is a
            room of people, not a relationship. Communities are many voices at
            once. That is not a flaw; it is how free support stays free.
          </P>
          <P>
            Paid peer support mostly buys three things: a trained person whose
            time is paid for, a schedule you can rely on, and, on some
            services, the same person every time. Prices vary widely. On the
            sites we checked, booking a peer specialist costs $30 to $60 a
            session at The Peer Network and $40 a session without a plan at
            ShareWell, while Hearth is a flat $39 a month for a 35–60 minute
            Sit every two weeks with the Long Talk in between, or $99 a month
            for weekly Sits.
          </P>
          <P>
            For comparison, therapy is a different service with a different
            price: 7 Cups lists its own messaging therapy at $159 a month and
            weekly video therapy at $299 a month. Our guide to{" "}
            <Link href="/learn/alternatives-to-therapy" style={LINK}>
              alternatives to therapy
            </Link>{" "}
            covers when therapy is the right call.
          </P>
        </Prose>
      </Section>

      {/* ASSIGNED VS CHOOSE */}
      <Section>
        <Prose>
          <H2>Matched by hand, or choosing your own peer?</H2>
          <P first>
            Online peer support services work in one of three ways, and it is
            worth knowing which one you are signing up for.
          </P>
          <Bullets
            items={[
              [
                "Someone is matched to you.",
                "Hearth reads your intake and pairs you with one Keeper within 72 hours, on language, time zone and what you are carrying. WEconnect Health assigns a dedicated peer when your membership includes it, and Peer Collective recommends a specialist after a short call. You do not have to judge strangers from profiles at a hard moment.",
              ],
              [
                "You browse and book.",
                "ShareWell, HeyPeers and The Peer Network show you profiles and let you pick a peer specialist and book sessions. This suits people who know exactly the kind of person they want and are happy to manage bookings.",
              ],
              [
                "Whoever is available.",
                "7 Cups free chats, Supportiv, Togetherall and TalkLife connect you with an available listener, a small group or a community. This is the fastest way to talk, and it rarely means the same person twice.",
              ],
            ]}
          />
          <P>
            If continuity matters to you, the first model is the one built for
            it. At Hearth you can also ask for a different Keeper after your
            first Sit at no charge, so being matched does not mean being stuck.
          </P>
        </Prose>
      </Section>

      {/* HOW TO CHOOSE */}
      <Section>
        <Prose>
          <H2>Six questions to ask any service.</H2>
          <Bullets
            items={[
              [
                "Will I talk to the same person each time?",
                "Ask how matching works and whether you can keep one person.",
              ],
              [
                "How are the peers trained and supervised?",
                "Look for a stated number of training hours, background checks and ongoing supervision. At Hearth every Keeper completes 120 hours of training, a background check and monthly supervision.",
              ],
              [
                "What happens in a crisis?",
                "A good service tells you plainly that it is not a crisis line and what its people do if you are at risk.",
              ],
              [
                "Is it peer support or therapy?",
                "Both are useful, and they are different. Peer supporters should say they do not diagnose, treat or prescribe.",
              ],
              [
                "What happens to what I write?",
                "Ask where your messages are stored, who can read them and whether calls are recorded.",
              ],
              [
                "How do I cancel?",
                "It should take one click, with no exit interview.",
              ],
            ]}
          />
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
          <Bullets
            items={[
              [
                "The same person, for years.",
                "One Keeper who remembers your story, so you never start from the beginning.",
              ],
              [
                "Matched by hand within 72 hours.",
                "On language, time zone and what you are carrying, with a free change of Keeper after your first Sit.",
              ],
              [
                "Trained and supervised.",
                "Every Keeper completes Hearth’s 120-hour training, a background check and monthly supervision. Many trained as psychologists or counsellors in their home countries.",
              ],
              [
                "Support between calls.",
                "Write in the Long Talk any day and hear back within a day (within 4 hours on the weekly plan), plus a note from your Keeper every Friday.",
              ],
              [
                "Simple pricing.",
                "$39 a month for a Sit every two weeks, or $99 a month for weekly. Cancel any time, in one click.",
              ],
            ]}
          />
          <P>
            Hearth is peer support, not therapy, and not a crisis service. If
            something needs a clinician, your Keeper says so and helps you find
            one.{" "}
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
                ["/learn/7-cups-alternatives", "7 Cups alternatives, compared"],
                ["/learn/one-to-one-peer-support", "One-to-one peer support: how it works"],
                ["/peer-support", "What is peer support? Types, evidence and limits"],
                ["/learn/alternatives-to-therapy", "Alternatives to therapy, and when they fit"],
                ["/learn/pay-someone-to-listen", "Can you pay someone to listen to you?"],
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
