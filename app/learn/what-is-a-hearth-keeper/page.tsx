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
  title: "What Is a Hearth Keeper? Meaning & Origins",
  description:
    "A hearth keeper tended the household fire: the oldest domestic role there is, from Hestia and Vesta to the folk practice of carrying flame to a new home. What the term means, where it comes from, and why it endures.",
  alternates: { canonical: "/learn/what-is-a-hearth-keeper" },
  openGraph: {
    type: "article",
    title: "What Is a Hearth Keeper? Meaning and Origins",
    description:
      "The household fire had to be kept alive, and someone had to keep it. A plain history of the hearth keeper, from Hestia and Vesta to the present.",
    url: "/learn/what-is-a-hearth-keeper",
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "What is a hearth keeper?",
    a: "A hearth keeper is the person responsible for tending the household fire: keeping it alive, banking it overnight, and relighting it. Before matches and central heating, letting the fire go out meant a cold house, no cooked food, and the trouble of fetching flame from a neighbour. In Greek and Roman households the role carried religious weight too: the hearth was where the household's goddess was honoured, and tending it was an act of devotion as much as housekeeping.",
  },
  {
    q: "What does 'keeper of the hearth' mean?",
    a: "Literally, the person who keeps the household fire burning. Figuratively, it has come to mean whoever holds a home or a family together: the person who maintains warmth, continuity and welcome, often without much recognition for it. The phrase carries both senses at once, which is why it has outlived the practical job by several centuries.",
  },
  {
    q: "Is 'hearthkeeper' one word or two?",
    a: "Both appear. 'Hearth keeper' as two words is the older and more common form in historical writing. 'Hearthkeeper' as one word turns up more often in modern usage, particularly as a title or a name. Neither is wrong, and both mean the same thing.",
  },
  {
    q: "Who was the goddess of the hearth?",
    a: "Hestia in Greek tradition, Vesta in Roman. Hestia's name means 'hearth'. She was not a goddess who happened to be associated with the fireplace, she essentially was it. Rome took the idea considerably further: alongside the fire in every household, the state maintained a sacred hearth in the Forum, tended by priestesses known as the Vestals whose central duty was ensuring it never went out.",
  },
  {
    q: "Is a hearth keeper the same as a Hearth Keeper at dearhearth.com?",
    a: "No, and the difference matters. The historical hearth keeper tended a literal fire. A Keeper at Hearth is a trained peer companion: a person matched to one member for the long term, who listens and stays consistent through grief, family pressure, identity questions and caregiving. We borrowed the metaphor because the shape of the job is similar: something that needs tending rather than fixing, and someone who stays with it. Keepers are not therapists and do not provide clinical care.",
  },
];

export default function WhatIsAHearthKeeperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: "/learn/what-is-a-hearth-keeper",
              name: "What Is a Hearth Keeper? Meaning and Origins",
              description:
                "The meaning and history of the hearth keeper: the household role of tending the fire, its place in Greek and Roman domestic religion, and why the phrase endures.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/learn/what-is-a-hearth-keeper",
              headline: "What Is a Hearth Keeper? Meaning and Origins",
              description:
                "A hearth keeper tended the household fire. A plain history of the role, from Hestia and Vesta to the folk practice of carrying flame to a new home.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 1900,
              about: [
                "Hearth keeper",
                "Hestia",
                "Vesta",
                "Domestic history",
                "Peer support",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Learn", path: "/learn/what-is-a-hearth-keeper" },
              {
                name: "What is a hearth keeper",
                path: "/learn/what-is-a-hearth-keeper",
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
              href="/learn/what-is-a-hearth-keeper"
              style={{ color: "var(--ink-3)" }}
            >
              Learn
            </Link>
            {" · The hearth keeper"}
          </div>
          <h1 style={{ maxWidth: "18ch", fontSize: "clamp(44px, 7vw, 96px)" }}>
            What is a
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              hearth keeper?
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
            Someone had to keep the fire alive. For most of human history that
            was a real job, held by a real person, every single day. This is
            what the role was, where the phrase comes from, and why it has
            outlasted the fire by several hundred years.
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
            Published 22 August 2026 · ~8 min read
          </div>
        </div>
      </section>

      {/* SHORT VERSION */}
      <section style={{ padding: "56px 0", background: "var(--paper-2)" }}>
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
              A <strong>hearth keeper</strong> is the person who tends the
              household fire: keeping it alive through the day, banking it
              overnight, coaxing it back each morning.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              It was ordinary, relentless, largely invisible work. Nobody
              thanked you for a fire that was still burning. They noticed
              immediately when it wasn&rsquo;t. The phrase survived the job
              because that shape of work (continuous, unglamorous, holding
              something together so everyone else can get on with their lives)
              never went anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* THE LITERAL JOB */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "22ch", marginBottom: 28 }}>
              The fire was not a convenience. It was the house.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              It is difficult now to feel how much depended on a household fire.
              It was the only heat. It was the only way to cook. In the evening
              it was very nearly the only light, and it was the one place in the
              building everyone gathered, not by preference but by physics,
              because it was the single warm spot in a cold structure.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              Relighting it from nothing was genuinely hard work. Before friction
              matches (a nineteenth-century invention) you were striking flint
              against steel into tinder that had to be bone dry, in a house that
              very often wasn&rsquo;t. An hour of frustrated effort to recover
              something that should never have been allowed to lapse.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              So the fire was not allowed to lapse. It was <em>banked</em>:
              covered with ash at night so the embers held their heat until
              morning, when they could be uncovered and fed back into flame. That
              is the actual daily craft of hearth keeping, and it is why the job
              existed: a fire left entirely alone dies, and a fire smothered
              entirely dies too. It needed someone paying attention to the
              difference.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              If it did go out, the usual remedy was to go next door and ask.
              Carrying live coals between houses was common enough to be
              unremarkable, a neighbourly transaction that quietly reveals how
              interdependent households were about the one thing none of them
              could do without.
            </p>
          </div>
        </div>
      </section>

      {/* HESTIA AND VESTA */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Hestia and Vesta: when the hearth was also an altar.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              In Greek households the hearth belonged to{" "}
              <strong>Hestia</strong>, and the relationship is closer than
              patronage. Her name <em>means</em> hearth. She is not a goddess who
              was assigned the fireplace as a portfolio; she is more or less the
              fireplace itself, understood as a presence.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              This made the hearth the household&rsquo;s altar. Offerings were
              made there. It was customary to honour Hestia first and last, at
              the beginning of a meal and at its end, which put a small act of
              devotion at either edge of every ordinary day. The women who ran
              the household generally held this duty, which meant the religious
              life of a Greek home ran through the same hands as its cooking.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              Rome inherited the idea as <strong>Vesta</strong> and then took it
              much further. Alongside the fire in every private house, the state
              kept a sacred hearth in the Forum, and its flame was tended by
              priestesses, the Vestals, whose defining responsibility was that
              it never be allowed to go out. Rome had taken a domestic chore and
              made it a matter of civic survival. The fire in the Forum was
              understood to stand for the continuity of Rome itself.
            </p>
            <div
              style={{
                marginTop: 32,
                padding: "26px 30px",
                background: "var(--paper-2)",
                borderLeft: "3px solid var(--ember)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(19px, 2vw, 23px)",
                  lineHeight: 1.5,
                  fontWeight: 320,
                  color: "var(--ink)",
                }}
              >
                There is a detail here worth sitting with. When a Greek family
                moved house, they carried fire from the old hearth to the new
                one.
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  marginTop: 16,
                }}
              >
                Not a symbol of the fire. The actual fire. You could obviously
                have lit a fresh one on arrival, but a new fire would have been
                a different fire, and the point was that it should be the same
                one. Continuity was the thing being moved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THE PHRASE SURVIVED */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "22ch", marginBottom: 28 }}>
              Why we still say it, long after the fire went out.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Central heating should have retired the phrase. It didn&rsquo;t.
              &ldquo;Keeper of the hearth&rdquo; is still in use, and it has
              drifted a long way from fuel and ash. It now describes whoever
              holds a home or a family together. The person who notices what is
              running low. Who remembers which relative is not speaking to which.
              Who keeps the thread of a family&rsquo;s life from dropping.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              The metaphor holds because the underlying structure of the work is
              unchanged, and it has three properties that most work doesn&rsquo;t.
            </p>
            <ul
              style={{
                marginTop: 24,
                paddingLeft: 0,
                listStyle: "none",
                display: "grid",
                gap: 20,
              }}
            >
              <li style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--ink)" }}>
                  It is continuous, not episodic.
                </strong>{" "}
                You do not keep a fire once. The work has no completion state,
                which is exactly what makes it easy to undervalue.
              </li>
              <li style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--ink)" }}>
                  It is tending, not fixing.
                </strong>{" "}
                A fire is not a problem to be solved. It is a live thing in a
                relationship with the person attending to it, and it responds to
                attention rather than intervention.
              </li>
              <li style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--ink)" }}>
                  It is invisible when it works.
                </strong>{" "}
                Nobody remarks on a fire that is still burning. The work is only
                ever noticed in its absence, which is the defining condition of
                most care.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* THE BRIDGE */}
      <section style={{ padding: "80px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Where we come in
            </div>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              What a Keeper means at Hearth.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              We took the name deliberately, and we should be straightforward
              about the fact that we did. Hearth is a peer-support service. A{" "}
              <strong>Keeper</strong> here is a trained peer companion, matched
              to one person for the long term, who listens and stays consistent
              through grief, family pressure, identity questions, caregiving, and
              the ordinary weight of being a person.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              The reason the old word fitted is the three properties above. The
              things people actually carry are continuous rather than episodic.
              They want tending, not fixing. Most of what weighs on a life is
              not a malfunction to be repaired. And the work of staying with
              someone through it is invisible precisely when it is going well.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              And there is the fire carried between houses. What we are trying to
              build is that, rather than the alternative: being handed to
              whoever is free this week and starting the explanation from the
              beginning again. The same Keeper, who already knows the shape of
              your situation. Continuity is the product.
            </p>
            <div
              style={{
                marginTop: 32,
                padding: "26px 30px",
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
                  To be clear about what a Keeper is not.
                </strong>{" "}
                Keepers are not therapists, counsellors or clinicians. They do
                not diagnose, they do not treat, and they do not prescribe.
                Hearth is not therapy and is not a crisis service. When someone
                needs clinical care, their Keeper says so and helps them reach it
                through{" "}
                <Link href="/bridge" style={{ color: "var(--ember)" }}>
                  The Bridge
                </Link>
                . If you are in crisis, please use the{" "}
                <Link href="/crisis" style={{ color: "var(--ember)" }}>
                  crisis resources
                </Link>
                . In the US call or text 988; in the UK, Samaritans on 116 123.
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
                href="/learn/peer-support-vs-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Peer support vs. therapy: the honest difference &rarr;
              </Link>
              <Link
                href="/why-paired"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Why Hearth pairs you with one Keeper, not a pool &rarr;
              </Link>
              <Link
                href="/keepers"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Meet the Keepers &rarr;
              </Link>
              <Link
                href="/how-it-works"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                How Hearth works, step by step &rarr;
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
