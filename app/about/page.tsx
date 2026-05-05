import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "About · Hearth",
  description:
    "Why Hearth exists. To restore the elder a generation of us never had.",
};

const VALUES = [
  {
    title: "Warmth without saccharine",
    body: "We do not perform cheerfulness. We hold real weight. There is a difference between warmth and positivity, and we are firmly in the former camp.",
  },
  {
    title: "Wisdom without credentialism",
    body: "The most useful wisdom in most people's lives came from people without degrees. We honor that tradition while being clear about our scope and building bridges to credentials when they matter.",
  },
  {
    title: "Cultural fluency as standard",
    body: "Diaspora context is not a niche add-on. It is the default. The things you don't have to translate. The half-understood things that are understood anyway.",
  },
  {
    title: "Honesty about scope",
    body: "We will tell you what we are not. Clearly, repeatedly, without apology. That honesty is part of the product. When something clinical comes up, we say so.",
  },
  {
    title: "Bridges over walls",
    body: "We do not compete with therapy. We complement it. We do not keep you in Hearth when something else serves you better. The Bridge is not a feature — it is a value.",
  },
  {
    title: "Human first, AI second",
    body: "Hearth is built by humans, staffed by humans, and the most important work we do is human. Technology exists to reduce friction, not to replace the chair.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            About Hearth
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            Why Hearth exists.
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
            To restore the elder a generation of us never had. The kitchen
            table. The long evening. The person who wasn&rsquo;t tired of you.
          </p>
        </div>
      </section>

      {/* FOUNDER'S LETTER */}
      <section
        className="origin"
        style={{ padding: "80px 0", borderTop: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div className="origin-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot" />
                The founder&rsquo;s letter
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}>
                The elder&rsquo;s house, on your phone.
              </h2>
              <p
                style={{
                  marginTop: 22,
                  color: "var(--ink-2)",
                  fontSize: 17,
                  lineHeight: 1.65,
                  maxWidth: "40ch",
                }}
              >
                What we lost when the village ended. What we&rsquo;re
                trying to give back.
              </p>
            </div>
            <div className="letter">
              <p>
                &ldquo;In villages, when life got heavy, you walked to the
                elder&rsquo;s house. There was always a fire, always tea,
                always a person who&rsquo;d lived more than you. They
                didn&rsquo;t have credentials. They had time, attention, and
                the patience to let your sentence finish.&rdquo;
              </p>
              <p>
                &ldquo;Modern life has stripped that away. The village is
                gone. The elders are far away or passed away. We have therapists
                for the clinical things and friends for the easy things, but
                for everything in between — the grief, the half-formed worries,
                the family questions that don&rsquo;t fit on a couch, the
                identity exhaustion, the caregiving weight — most of us have
                nobody.&rdquo;
              </p>
              <p>
                &ldquo;We went looking for that person — the trusted aunt,
                the community elder, the neighbour who&rsquo;d seen more than
                you — and found that they still exist. They are in our
                communities, mostly unrecognized and unpaid for this work they
                do quietly every week. We called them Keepers.&rdquo;
              </p>
              <p>
                &ldquo;Hearth is that elder&rsquo;s house, on your phone, in
                any language. For anyone navigating a life that doesn&rsquo;t
                fit neatly on a couch — whether you left one world for
                another, or your world simply changed under you, or the
                village you were raised to rely on is no longer
                there.&rdquo;
              </p>
              <p>
                &ldquo;We are not therapy. We are not a chatbot. We are not
                a crisis line. We are the people who pull up a chair and stay
                in the room with you. We are the long talk.&rdquo;
              </p>
              <span className="sig">&mdash; Founder&rsquo;s letter, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--ink)",
          color: "var(--paper)",
          borderTop: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap" style={{ textAlign: "center" }}>
          <div
            className="eyebrow"
            style={{ color: "#C9B894", justifyContent: "center", display: "flex", marginBottom: 28 }}
          >
            <span className="dot" />
            Our mission
          </div>
          <h2
            style={{
              color: "var(--paper)",
              fontSize: "clamp(32px, 5vw, 72px)",
              maxWidth: "20ch",
              margin: "0 auto",
            }}
          >
            To restore the elder a generation of us never had.
          </h2>
          <p
            style={{
              marginTop: 24,
              color: "#D8C8AA",
              fontSize: 18,
              lineHeight: 1.65,
              maxWidth: "52ch",
              margin: "24px auto 0",
            }}
          >
            For anyone in the world carrying a life where the village
            elder, trusted aunt, or community wise-person tradition is alive in
            memory but absent in modern life. Our Keepers bring deep cultural
            fluency for those who want it &mdash; and warm, careful presence
            for everyone.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section
        style={{
          padding: "100px 0",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Our values
              </div>
              <h2 style={{ marginTop: 18 }}>
                Six things we actually believe.
              </h2>
            </div>
            <p className="lede">
              Values are easy to write. These are the ones that have shaped
              every decision we&rsquo;ve made about how Hearth works.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              border: "1px solid var(--rule)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {VALUES.map((v, i) => (
              <div
                key={i}
                style={{
                  padding: "36px 32px",
                  borderRight: i % 3 !== 2 ? "1px solid var(--rule)" : "none",
                  borderBottom: i < 3 ? "1px solid var(--rule)" : "none",
                  background: i === 1 ? "var(--ink)" : "var(--paper-2)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color:
                      i === 1 ? "#C9B894" : "var(--ember)",
                    marginBottom: 16,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 380,
                    fontSize: 22,
                    lineHeight: 1.2,
                    marginBottom: 14,
                    color: i === 1 ? "var(--paper)" : "var(--ink)",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: i === 1 ? "#D8C8AA" : "var(--ink-2)",
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--paper-2)",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 40 }}>
            <span className="dot" />
            The team
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
              maxWidth: 760,
            }}
          >
            {[
              {
                role: "Founder",
                name: "Coming soon",
                bio: "Building the elder&rsquo;s house.",
              },
              {
                role: "Lead Keeper",
                name: "Coming soon",
                bio: "Holding the thread. Training the team.",
              },
            ].map((person, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--paper-3)",
                    border: "1px solid var(--rule)",
                    marginBottom: 16,
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ember)",
                    marginBottom: 8,
                  }}
                >
                  {person.role}
                </div>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 22,
                    fontWeight: 380,
                    marginBottom: 10,
                  }}
                >
                  {person.name}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-3)",
                    lineHeight: 1.5,
                  }}
                  dangerouslySetInnerHTML={{ __html: person.bio }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bigcta" style={{ padding: "100px 0", textAlign: "center" }}>
        <div className="wrap">
          <h2 style={{ marginTop: 18 }}>
            Pull up a chair.
          </h2>
          <p
            style={{
              marginTop: 18,
              color: "#FFE0B0",
              fontFamily: "var(--mono)",
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            The First Sit takes about 12 minutes
          </p>
          <div className="cta-row" style={{ marginTop: 40 }}>
            <a href="/#cta" className="btn btn-primary btn-lg">
              Pull up a chair <span className="arr">&rarr;</span>
            </a>
            <Link href="/keepers" className="btn btn-ghost btn-lg">
              Meet the Keepers
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
