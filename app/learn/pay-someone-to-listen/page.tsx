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

const PUBLISHED = "2026-10-24";
const REVIEWED = "2026-10-24";

export const metadata: Metadata = {
  title: "Can You Pay Someone to Listen to You?",
  description:
    "Yes, you can pay someone to listen. The free and paid options, what each costs, whether you get the same person, and what to check before you pay.",
  alternates: { canonical: "/learn/pay-someone-to-listen" },
  openGraph: {
    type: "article",
    title: "Can You Pay Someone to Listen to You?",
    description:
      "The paid and free ways to have someone listen: what each costs, whether you get the same person, and what to check before you pay.",
    url: "/learn/pay-someone-to-listen",
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "Can I pay someone to listen to me?",
    a: "Yes. Hearth, for example, matches you by hand with one trained listener (a Keeper) who stays with you for years, from $39 a month for a video or audio call every two weeks. Other paid peer support services, listener apps and coaches will also listen for a fee, and a therapist will if what you are carrying is clinical. Free warmlines, volunteer listener chats and peer-led groups exist too. Whoever you choose, check how the person is trained, whether you get the same person each time, what they do in a crisis, and how you cancel.",
  },
  {
    q: "Is it weird to pay someone to listen?",
    a: "No. People have always paid for attention they could not get elsewhere, from pastoral care to mentoring to therapy. Wanting to be heard by someone outside your own life, who will not get tired of the story or take sides in it, is ordinary. Loneliness is common and it is linked to worse health, so looking for a regular listener is a sensible thing to do, not an embarrassing one.",
  },
  {
    q: "How much does it cost to pay someone to talk to?",
    a: "Hearth is $39 a month for a call every two weeks with the same trained listener, or $99 a month for a weekly call. Across the market, prices run from nothing to well over $100 a session. Warmlines, volunteer listener chats and peer-led groups are free. Other paid peer support and listener services vary widely, from per-call or per-minute pricing to monthly plans. Therapy paid in cash averaged about $143 a session in the US in a 2024 study, and lower-cost routes such as Open Path Collective run $40 to $70 a session after a one-time $65 membership.",
  },
  {
    q: "Is a paid listener the same as a therapist?",
    a: "No. A paid listener or peer supporter listens, reflects and stays with you, but does not diagnose, treat conditions or prescribe. A therapist is a licensed clinician trained to treat mental health conditions. If you have a diagnosis, symptoms that are getting worse, trauma, or thoughts of harming yourself, a therapist or doctor is the right person, and a paid listener is not a substitute.",
  },
  {
    q: "Where can I talk to someone online for free?",
    a: "In the US and Canada, call or text 988 at any hour; in the US it is for emotional distress, not only suicidal thoughts. Warmlines are free, peer-staffed phone lines for talking before things reach crisis point, and about 30 states have one. 7 Cups has free volunteer listeners by chat. NAMI Connection runs free, peer-led support groups, many of them online. In the UK and Ireland, Samaritans are on 116 123. If you want the same person every time, Hearth starts at $39 a month.",
  },
];

type Option = {
  option: string;
  href?: string;
  ours?: boolean;
  cost: string;
  same: string;
  what: string;
};

const OPTIONS: Option[] = [
  {
    option: "Hearth",
    href: "/how-it-works",
    ours: true,
    cost: "$39 a month (a call every two weeks) or $99 (weekly)",
    same: "Yes, for years",
    what: "One Keeper (a trained peer listener), matched to you by hand. Video or audio calls, messages in between, a note every Friday.",
  },
  {
    option: "Warmlines",
    cost: "Free",
    same: "No",
    what: "A peer-staffed phone line for talking before things reach crisis point",
  },
  {
    option: "Volunteer listener chats (such as 7 Cups)",
    cost: "Free, with paid tiers on some",
    same: "Rarely",
    what: "Text chat with a trained volunteer, often within minutes",
  },
  {
    option: "Peer-led support groups (such as NAMI Connection)",
    cost: "Free",
    same: "Same group, not one-to-one",
    what: "A group of people who have lived the same thing",
  },
  {
    option: "Friends, family, faith or community leaders",
    cost: "Free",
    same: "Yes",
    what: "People who already know you",
  },
  {
    option: "Other paid peer support and listener services",
    cost: "Varies: per call, per minute or monthly",
    same: "Depends on the service; ask",
    what: "Regular conversation with a supporter",
  },
  {
    option: "Coaching",
    cost: "Varies widely; unregulated",
    same: "Usually yes",
    what: "Help with goals, decisions and accountability",
  },
  {
    option: "Therapy",
    cost: "About $143 cash-pay average in the US; low-cost routes from $40",
    same: "Usually the same therapist; some apps reassign",
    what: "Assessment, diagnosis and treatment from a licensed clinician",
  },
];

const OUR_TAG = {
  display: "inline-block",
  marginLeft: 8,
  padding: "2px 8px",
  borderRadius: 999,
  border: "1px solid var(--ember)",
  color: "var(--ember)",
  fontFamily: "var(--mono)",
  fontSize: 10,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  fontWeight: 500,
  verticalAlign: "middle",
  whiteSpace: "nowrap" as const,
};

const CHECKS: Array<[string, string]> = [
  [
    "How are they trained?",
    "Ask what the training covered and how long it was. Listening skills, knowing their limits and what to do in a crisis are the minimum.",
  ],
  [
    "What will they not do?",
    "A good service tells you plainly. Anyone who is not a licensed clinician should say they do not diagnose, treat or prescribe.",
  ],
  [
    "What happens if things get worse?",
    "Ask for the crisis plan in writing: which numbers they give you, and whether they help you find clinical care.",
  ],
  [
    "Will it be the same person every time?",
    "Some services rotate whoever is free. If you want to stop retelling your story, ask before you pay.",
  ],
  [
    "Where do my words go?",
    "Are calls recorded? Where are messages stored, and who can read them? Can you ask for your information to be deleted?",
  ],
  [
    "What does it cost, all in, and how do I cancel?",
    "Get the full price, the billing cycle and the cancellation steps before you start. Cancelling should be quick and should not need a phone call.",
  ],
];

export default function PaySomeoneToListenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: "/learn/pay-someone-to-listen",
              name: "Can You Pay Someone to Listen to You?",
              description:
                "The free and paid ways to have someone listen, what each costs, whether you get the same person, and what to check before paying.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/learn/pay-someone-to-listen",
              headline: "Can You Pay Someone to Listen to You?",
              description:
                "The paid and free ways to have someone listen: what each costs, whether you get the same person, and what to check before you pay.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 2000,
              about: [
                "Someone to talk to",
                "Paid listener",
                "Peer support",
                "Loneliness",
                "Emotional support",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Learn", path: "/learn/pay-someone-to-listen" },
              {
                name: "Pay someone to listen",
                path: "/learn/pay-someone-to-listen",
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
              href="/learn/pay-someone-to-listen"
              style={{ color: "var(--ink-3)" }}
            >
              Learn
            </Link>
            {" · Pay someone to listen"}
          </div>
          <h1 style={{ maxWidth: "20ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Can you pay someone
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              to listen to you?
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
            Yes. People do it every day, and there is nothing strange about it.
            Here are the options, starting with ours, with what each costs and
            what to check before you hand over any money.
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
            Published 24 October 2026 · ~9 min read
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
            <strong>If you need someone right now, it is free.</strong> In the
            US and Canada call or text <strong>988</strong>, any hour. In the UK
            and Ireland, Samaritans on <strong>116 123</strong>. More numbers on
            our{" "}
            <Link href="/crisis" style={{ color: "var(--ember)" }}>
              crisis page
            </Link>
            . If you are thinking about harming yourself, please use them
            today.
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
              <strong>Yes, you can pay someone just to listen</strong>: a paid
              peer supporter, a listener service, a coach, or a therapist if
              what you are carrying is clinical. With Hearth, one trained
              listener stays with you for years, from $39 a month.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              Whichever way you go, three questions matter more than the price:
              whether you get the same person each time, how that person is
              trained, and what happens if things get worse.
            </p>
          </div>
        </div>
      </section>

      {/* NOT STRANGE */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Why wanting a listener is not strange.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Most people who search for this already have people around them.
              The trouble is that those people are inside the story. A sister
              takes sides. A friend has heard it four times and starts to
              advise. A partner is part of what you need to talk about. What you
              are looking for is someone outside your life who will not get
              tired, will not take sides, and will remember what you said last
              time.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              People have always found that person somewhere: a priest, an
              older neighbour, a mentor, a barber. Paying for it is simply the
              modern version.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              It also matters for health. A large 2015 review of 70 studies
              found that loneliness was associated with a 26 percent higher
              likelihood of death over the study periods, similar to other
              well-known risk factors (Holt-Lunstad et al., 2015). And being
              listened to by someone who is not a clinician can help. In a 2021
              trial, 240 adults received regular phone calls for four weeks from
              callers given brief training in empathetic listening. Compared
              with a control group, they reported less loneliness, depression
              and anxiety (Kahlon et al., 2021). That was one short trial, so
              treat it as encouraging, not as proof that any paid listener will
              help you.
            </p>
          </div>
        </div>
      </section>

      {/* THE OPTIONS TABLE */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <h2 style={{ maxWidth: "24ch", marginBottom: 16 }}>
            The options, side by side.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--ink-3)",
              maxWidth: "62ch",
              marginBottom: 32,
            }}
          >
            &ldquo;Same person&rdquo; is the column most people overlook, and
            the one that decides whether you have to tell your story from the
            beginning every time.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 15,
                lineHeight: 1.6,
                minWidth: 760,
              }}
            >
              <thead>
                <tr>
                  {["Option", "Cost", "Same person every time?", "What you get"].map(
                    (h) => (
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
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {OPTIONS.map((o) => {
                  const base = {
                    padding: "14px",
                    borderBottom: "1px solid var(--rule-2)",
                    color: "var(--ink-2)",
                    verticalAlign: "top" as const,
                    background: o.ours ? "var(--paper-2)" : undefined,
                  };
                  return (
                    <tr key={o.option}>
                      <th
                        scope="row"
                        style={{
                          ...base,
                          textAlign: "left",
                          color: "var(--ink)",
                          fontWeight: o.ours ? 600 : 500,
                          borderLeft: o.ours ? "2px solid var(--ember)" : undefined,
                        }}
                      >
                        {o.href ? (
                          <Link href={o.href} style={{ color: "var(--ink)" }}>
                            {o.option}
                          </Link>
                        ) : (
                          o.option
                        )}
                        {o.ours && <span style={OUR_TAG}>Our service</span>}
                      </th>
                      {[o.cost, o.same, o.what].map((cell, i) => (
                        <td
                          key={i}
                          style={{
                            ...base,
                            color: o.ours && i === 1 ? "var(--ink)" : base.color,
                            fontWeight: o.ours && i === 1 ? 600 : 400,
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FREE OPTIONS */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              The free routes.
            </h2>

            <h3 style={{ marginTop: 8, marginBottom: 12 }}>Warmlines</h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              A warmline is a free, confidential phone line staffed by peers,
              people with their own lived experience, for talking before things
              reach crisis point. About 30 US states have one, according to the{" "}
              <a
                href="https://www.psychiatry.org/News-room/APA-Blogs/Warm-Lines-Providing-Help-Before-a-Crisis-Develops"
                style={{ color: "var(--ember)" }}
              >
                American Psychiatric Association
              </a>
              , and NAMI keeps a{" "}
              <a
                href="https://helplinefaqs.nami.org/article/577-nami-national-warmline-directory"
                style={{ color: "var(--ember)" }}
              >
                national warmline directory
              </a>
              . Warmlines are badly under-known. You will rarely reach the same
              person twice, and hours vary by line.
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 12 }}>
              Volunteer listener chats
            </h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Services such as 7 Cups connect you by chat with trained volunteer
              listeners, often within minutes and at any hour. They are free,
              which is a real advantage. The trade-offs are that training varies
              and you seldom talk to the same person again, so they suit
              getting something off your chest tonight better than a
              conversation that builds over months.
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 12 }}>
              Peer-led support groups
            </h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              <a
                href="https://www.nami.org/support-groups/nami-connection/"
                style={{ color: "var(--ember)" }}
              >
                NAMI Connection
              </a>{" "}
              groups are free, peer-led, 90 minutes long, open to adults, and
              many run online. Grief, caregiver and condition-specific groups
              exist in most cities. A group gives you something one-to-one
              cannot: a room of people who already understand. It gives you less
              individual attention in return.
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 12 }}>988</h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              People often think{" "}
              <a href="https://988lifeline.org/" style={{ color: "var(--ember)" }}>
                988
              </a>{" "}
              is only for suicidal crises. In the US it is free, confidential,
              open around the clock by call, text or chat, and it is for
              emotional distress of any kind. If tonight is bad, you do not need
              to wait until it is worse.
            </p>
          </div>
        </div>
      </section>

      {/* PAID OPTIONS */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              When paying makes sense.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              The free routes are generous, but most of them share one limit:
              a different person each time. Paying usually buys you continuity,
              someone who knows the whole story, plus a regular time that is
              yours.
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 12 }}>
              Paid peer support and listener services
            </h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              A peer supporter is someone trained to listen who has usually
              lived something close to what you are carrying. They do not
              diagnose or treat. Services differ a lot in how they charge (per
              call, per minute or a monthly plan), in how well they train
              people, and in whether you keep the same person. Hearth
              keeps you with one Keeper for years. We wrote a separate guide
              to{" "}
              <Link
                href="/learn/one-to-one-peer-support"
                style={{ color: "var(--ember)" }}
              >
                one-to-one peer support
              </Link>
              , and a plain explanation of{" "}
              <Link href="/peer-support" style={{ color: "var(--ember)" }}>
                what peer support is
              </Link>{" "}
              and what the research says about it.
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 12 }}>Coaching</h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Coaches listen too, but with a direction in mind: a goal, a
              decision, a change. That suits some people well. Coaching is
              unregulated, prices vary widely, and it is not built for grief or
              for mental health problems. If you want to be heard rather than
              pushed forward, a coach may feel like the wrong shape.
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 12 }}>Therapy</h3>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-2)" }}>
              A therapist will listen, and is also trained to treat. In the US,
              sessions paid in cash averaged about $143 in a{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11412241/"
                style={{ color: "var(--ember)" }}
              >
                2024 study
              </a>
              , and lower-cost routes exist:{" "}
              <a
                href="https://openpathcollective.org/"
                style={{ color: "var(--ember)" }}
              >
                Open Path Collective
              </a>{" "}
              runs $40 to $70 a session after a one-time $65 membership
              (checked 24 October 2026). We listed every one, with prices, in{" "}
              <Link href="/learn/cheap-therapy" style={{ color: "var(--ember)" }}>
                cheap therapy options
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO CHECK */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Six things to check before you pay.
            </h2>
            <ul
              style={{
                paddingLeft: 0,
                listStyle: "none",
                display: "grid",
                gap: 18,
                margin: 0,
              }}
            >
              {CHECKS.map(([head, body]) => (
                <li
                  key={head}
                  style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}
                >
                  <strong style={{ color: "var(--ink)" }}>{head}</strong>{" "}
                  {body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHEN IT IS THERAPY */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "26ch", marginBottom: 28 }}>
              When what you need is a therapist, not a listener.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Listening is not treatment. Go to a therapist or a doctor rather
              than a paid listener if any of these is true:
            </p>
            <ul
              style={{
                marginTop: 22,
                paddingLeft: 20,
                display: "grid",
                gap: 10,
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink-2)",
              }}
            >
              <li>You have thoughts of harming yourself.</li>
              <li>
                Sleep, eating, work or getting out of the house have stopped
                working, and it has lasted weeks.
              </li>
              <li>You have, or think you might have, a diagnosis.</li>
              <li>Trauma is involved.</li>
              <li>Alcohol or drugs have become part of how you cope.</li>
              <li>Medication might be part of the answer.</li>
            </ul>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              Not sure which side you are on? We wrote{" "}
              <Link
                href="/learn/do-i-need-therapy"
                style={{ color: "var(--ember)" }}
              >
                a plain guide to telling the difference
              </Link>
              . If therapy is the answer and money is the obstacle, the low-cost
              routes are real, and so are the{" "}
              <Link
                href="/learn/alternatives-to-therapy"
                style={{ color: "var(--ember)" }}
              >
                alternatives to therapy
              </Link>{" "}
              for the things that are not clinical.
            </p>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE CHOOSE DEAR HEARTH */}
      <section style={{ padding: "80px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Our service
            </div>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Why people choose Hearth.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              If what you want is someone outside your life who listens,
              remembers and stays, that is exactly what Hearth is for.
            </p>
            <ul
              style={{
                marginTop: 24,
                paddingLeft: 0,
                listStyle: "none",
                display: "grid",
                gap: 16,
              }}
            >
              {[
                ["The same person, for years.", "We match you by hand, within 72 hours, with one Keeper who stays with you. If the fit is wrong after your first call, you change Keeper at no charge."],
                ["Trained, checked and supervised.", "Every Keeper completes Hearth's 120-hour training, a background check and monthly supervision. Many trained as psychologists or counsellors in their home countries."],
                ["A regular time that is yours.", "A Sit is a 35 to 60 minute video or audio call: every two weeks for $39 a month, or every week for $99 a month."],
                ["Someone between calls, too.", "The Long Talk is your message thread with your Keeper, with replies within a day (within 4 hours on the $99 plan), plus a short note from them every Friday."],
                ["Easy to leave.", "Cancel any time, in one click."],
              ].map(([head, body]) => (
                <li key={head} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                  <strong style={{ color: "var(--ink)" }}>{head}</strong> {body}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 24,
              }}
            >
              Hearth is peer support, not therapy, and not a crisis
              service. In crisis, call or text 988 (US and Canada) or
              Samaritans on 116 123 (UK and Ireland).
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
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

      {/* REFERENCES */}
      <section
        style={{ padding: "64px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Sources
            </div>
            <ol
              style={{
                paddingLeft: 20,
                display: "grid",
                gap: 12,
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--ink-2)",
                margin: 0,
              }}
            >
              <li>
                Holt-Lunstad J, Smith TB, Baker M, Harris T, Stephenson D.
                Loneliness and social isolation as risk factors for mortality:
                a meta-analytic review. Perspectives on Psychological Science.
                2015;10(2):227-237.{" "}
                <a
                  href="https://doi.org/10.1177/1745691614568352"
                  style={{ color: "var(--ember)" }}
                >
                  doi:10.1177/1745691614568352
                </a>
              </li>
              <li>
                Kahlon MK, Aksan N, Aubrey R, et al. Effect of
                layperson-delivered, empathy-focused program of telephone calls
                on loneliness, depression, and anxiety among adults during the
                COVID-19 pandemic: a randomized clinical trial. JAMA
                Psychiatry. 2021;78(6):616-622.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7903319/"
                  style={{ color: "var(--ember)" }}
                >
                  PMC7903319
                </a>
              </li>
              <li>
                Zhu et al. Study of US therapist session prices by type of
                payment. Health Affairs Scholar. 2024.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11412241/"
                  style={{ color: "var(--ember)" }}
                >
                  PMC11412241
                </a>
              </li>
              <li>
                American Psychiatric Association. Warm lines: providing help
                before a crisis develops.{" "}
                <a
                  href="https://www.psychiatry.org/News-room/APA-Blogs/Warm-Lines-Providing-Help-Before-a-Crisis-Develops"
                  style={{ color: "var(--ember)" }}
                >
                  psychiatry.org
                </a>
              </li>
              <li>
                NAMI. NAMI Connection recovery support groups.{" "}
                <a
                  href="https://www.nami.org/support-groups/nami-connection/"
                  style={{ color: "var(--ember)" }}
                >
                  nami.org
                </a>
              </li>
              <li>
                988 Suicide and Crisis Lifeline.{" "}
                <a href="https://988lifeline.org/" style={{ color: "var(--ember)" }}>
                  988lifeline.org
                </a>
              </li>
              <li>
                Open Path Collective, session prices checked 24 October 2026.{" "}
                <a
                  href="https://openpathcollective.org/"
                  style={{ color: "var(--ember)" }}
                >
                  openpathcollective.org
                </a>
              </li>
            </ol>
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
                href="/peer-support"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                What is peer support? Types, evidence and limits &rarr;
              </Link>
              <Link
                href="/learn/one-to-one-peer-support"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                One-to-one peer support: how it works &rarr;
              </Link>
              <Link
                href="/learn/alternatives-to-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Alternatives to therapy, and when they fit &rarr;
              </Link>
              <Link
                href="/learn/cheap-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Cheap therapy options, with real prices &rarr;
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
