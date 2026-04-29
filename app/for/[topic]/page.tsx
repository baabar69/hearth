import { notFound } from "next/navigation";
import Link from "next/link";
import SharedNav from "../../components/SharedNav";
import SharedFooter from "../../components/SharedFooter";

type Topic = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headlinePre: string;
  headlineEmber: string;
  intro: string;
  signs: string[];
  weHold: string[];
  weDont: string;
  keeperName: string;
  keeperSlug: string;
  keeperBlurb: string;
  storyQuote: string;
  storyAttribution: string;
  related: { slug: string; label: string }[];
};

const TOPICS: Topic[] = [
  {
    slug: "grief",
    metaTitle: "Grief & loss support · Hearth",
    metaDescription:
      "Peer support for the kind of grief that arrives on time and the kind that shows up ten years late. A trained Keeper who will sit with you in it.",
    eyebrow: "For grief & loss",
    headlinePre: "Some grief arrives on time.\nSome",
    headlineEmber: "shows up ten years late.",
    intro:
      "The kind of loss that gets a funeral and the kind that doesn't. Parents, grandparents, marriages, places, the version of yourself you were before something happened. There isn't a timeline for any of it, and there's nobody at the office who wants to hear about it past week two. Hearth is a chair, a Keeper, and however long the conversation needs to be.",
    signs: [
      "You lost someone, and the people around you have stopped asking — but the weight hasn't moved.",
      "The grief is years old and you only just realised you never grieved it out loud.",
      "Your family treats grief as a private thing. You are tired of being private.",
      "It isn't a death — it's a divorce, a homeland you can't return to, the parent who's still alive but isn't the parent you needed.",
      "You're the one holding everyone else's grief and have no chair of your own to sit in.",
    ],
    weHold: [
      "A weekly or biweekly Sit with the same Keeper, every week, no matter where the grief takes you.",
      "A Long Talk thread you can write into at 2am — your Keeper responds within 24 hours, no algorithms in between.",
      "A Friday Reflection from your Keeper — what stayed with them about your week, in their own words.",
      "If the grief tips into something clinical, your Keeper walks you to The Bridge — a vetted, culturally-fluent therapist — by name.",
    ],
    weDont:
      "Hearth is not a grief therapist. We do not provide bereavement counselling, prescribe anything, or replace the deeper clinical work some grief needs. We hold the long, slow, between-sessions weight — the ordinary grief that doesn't fit on a couch.",
    keeperName: "Aruna Bhattacharya",
    keeperSlug: "aruna-bhattacharya",
    keeperBlurb:
      "Aruna has sat with grief in three languages and across two countries. She will not rush your sentence. She will not fix what doesn't need fixing.",
    storyQuote:
      "My nani died two years ago. I never grieved out loud — there wasn't space for it. Aruna made the space. We talk about her every week. It feels like keeping her with me.",
    storyAttribution: "Devika · 38 · Bay Area · 1 year and 4 months in Hearth",
    related: [
      { slug: "family-pressure", label: "Family pressure" },
      { slug: "diaspora", label: "Life between cultures" },
      { slug: "anxiety", label: "Anxiety & overwhelm" },
    ],
  },
  {
    slug: "family-pressure",
    metaTitle: "Family pressure & expectations support · Hearth",
    metaDescription:
      "Peer support for the call that ruins your Sunday. The expectations that don't translate. A trained Keeper who knows the specific weight.",
    eyebrow: "For family pressure",
    headlinePre: "The call that\nruins",
    headlineEmber: "your Sunday.",
    intro:
      "Expectations that don't translate. Parents who love you in a language that feels like control. The marriage timeline you never agreed to. The career your family wanted versus the life you actually want. Therapy can help with the patterns. Hearth helps with the next phone call — and the one after that.",
    signs: [
      "A single phone call from a parent ruins the rest of your day.",
      "You've been having the same fight for ten years and nothing has shifted.",
      "You can't tell your family the real version of your life.",
      "Holidays are a performance, not a homecoming.",
      "You love them. You also need a witness to what they're doing.",
    ],
    weHold: [
      "A regular Sit with someone who has lived a version of the same story.",
      "A Long Talk thread for the immediate after — the call you just hung up from, the dinner you survived.",
      "A Keeper who will not pathologise your family. Who understands what they were protecting, and helps you decide what's yours to carry.",
      "Cultural fluency built in. Nothing to translate, nothing to caveat.",
    ],
    weDont:
      "Hearth is not family therapy. We do not mediate, do not work with multiple family members at once, and do not replace the structured work that some family wounds need. We hold the in-between — your reflection, your nervous system, your slow figuring-out.",
    keeperName: "Rabia K.",
    keeperSlug: "rabia-k",
    keeperBlurb:
      "Retired school principal. Three decades of being the calm person in the middle of everyone else's emergency. She'll tell you what your mother meant to say.",
    storyQuote:
      "My mother and I have been having the same fight for ten years. Aruna didn't fix it. She helped me see what we were both protecting. The fight is still there. The shame around it isn't.",
    storyAttribution: "Priya · 34 · Toronto · 8 months in Hearth",
    related: [
      { slug: "diaspora", label: "Life between cultures" },
      { slug: "grief", label: "Grief & loss" },
      { slug: "intimacy", label: "Intimacy & shame" },
    ],
  },
  {
    slug: "diaspora",
    metaTitle: "Life between cultures support · Hearth",
    metaDescription:
      "Peer support for diaspora life — too much of one thing, not enough of the other. A Keeper from your part of the world, fluent in what you don't have to translate.",
    eyebrow: "For life between cultures",
    headlinePre: "Too much of one thing.\nNot enough",
    headlineEmber: "of the other.",
    intro:
      "Code-switching so often you forget which one is real. Parents whose homeland isn't yours, and a country that doesn't quite let you all the way in. The questions you can't take to a therapist because you'd spend the whole hour explaining the context. Hearth starts with the context already understood.",
    signs: [
      "You explain your family to your friends and your friends to your family — and don't quite belong with either.",
      "You're too American for the cousins, too brown for the office, too queer/secular/loud for the community.",
      "Your parents' culture stopped at the year they emigrated. Yours kept moving. So did the homeland.",
      "You go back and feel like a tourist. You stay here and feel like a guest.",
      "You have a therapist who is wonderful and also doesn't quite get it.",
    ],
    weHold: [
      "Keepers based in South Asia, fluent in the cultural context you live inside.",
      "A Sit where the auntie reference, the uncle reference, the religious-but-not reference, all land.",
      "A Friday Reflection in your Keeper's voice — sometimes English, sometimes Bengali or Urdu or Hindi if that's where the realest word lives.",
      "Languages: Bengali, Hindi, Urdu, English, Punjabi, Tamil — speak in the one where the truth fits.",
    ],
    weDont:
      "Hearth is not an identity coach. We do not tell you who to be or which culture to choose. We hold the in-between with you, without trying to resolve it on your behalf.",
    keeperName: "Aruna Bhattacharya",
    keeperSlug: "aruna-bhattacharya",
    keeperBlurb:
      "Karachi → Toronto. Twenty-five years of sitting with people who didn't fit one place neatly. Bengali, English, Hindi.",
    storyQuote:
      "I'm too American for the family, too brown for the office, too queer for the community. Hassan got it without me having to explain. That's the whole thing — not having to explain.",
    storyAttribution: "Anonymous · 32 · Seattle · 7 months in Hearth",
    related: [
      { slug: "family-pressure", label: "Family pressure" },
      { slug: "sexual-identity", label: "Sexual identity" },
      { slug: "anxiety", label: "Anxiety & overwhelm" },
    ],
  },
  {
    slug: "intimacy",
    metaTitle: "Intimacy & shame support · Hearth",
    metaDescription:
      "Peer support for the things you've never said out loud — about your body, your desires, your marriage. A Keeper who will not flinch.",
    eyebrow: "For intimacy & shame",
    headlinePre: "The things you've\nnever said",
    headlineEmber: "out loud.",
    intro:
      "Shame around your body. Marriages where the bedroom is quiet. Things you couldn't say to your husband, your wife, your therapist, your closest friend. Hearth is not a sex therapist. We are a chair where the words can come out for the first time, in your own pace, with someone who has heard them before and will not look away.",
    signs: [
      "There are things about your body, your desires, or your marriage you've never said to anyone.",
      "You grew up where sex was either invisible or shameful — and you've never had a place to put what that left.",
      "Your marriage is fine on the outside. The bedroom has been silent for a long time.",
      "You're carrying something from a long time ago that you've never spoken about.",
      "You want to talk to your partner about it — and you need to say it once first, somewhere safe.",
    ],
    weHold: [
      "A confidential Sit with a Keeper trained for the slow work of shame — the kind that came before you had words for it.",
      "A Long Talk thread where you can write the thing you've been writing in your head for years.",
      "A Keeper who will not perform comfort or rush you toward a fix.",
      "Encrypted, never shared, no one but your Keeper sees what you bring.",
    ],
    weDont:
      "Hearth is not sex therapy or medical care. We do not treat sexual dysfunction, vaginismus, ED, or anything that needs a clinician. For the medical, we will walk you to a vetted clinician through The Bridge. We hold the shame, the identity, the words that have been waiting years to come out.",
    keeperName: "Rabia K.",
    keeperSlug: "rabia-k",
    keeperBlurb:
      "Has held three decades of stories. Will not flinch, will not perform. Speaks Urdu, Punjabi, English — uses the one where the truth comes easier.",
    storyQuote:
      "I'd never said any of it out loud. Not to my husband, not to friends, not to a therapist. Rabia didn't flinch. That's what I needed before I could say it to anyone else.",
    storyAttribution: "Anonymous · 41 · Houston · 6 months in Hearth",
    related: [
      { slug: "sexual-identity", label: "Sexual identity" },
      { slug: "family-pressure", label: "Family pressure" },
      { slug: "grief", label: "Grief & loss" },
    ],
  },
  {
    slug: "sexual-identity",
    metaTitle: "Sexual identity & LGBTQ+ support · Hearth",
    metaDescription:
      "Peer support for who you are, who you love, and what that means in the world you were raised in. A Keeper who has held the question before.",
    eyebrow: "For sexual identity",
    headlinePre: "Questions you've\ncarried",
    headlineEmber: "alone for years.",
    intro:
      "Who you are. Who you love. What that means in the family you were raised in, the religion you were raised inside, the community that knows your parents. Hearth is a chair where the question can be asked out loud — without the answer being prescribed for you.",
    signs: [
      "You've known something about yourself for years and have never said it.",
      "You can't take this to your family, your community, your religion — and you don't want to lose any of them.",
      "You're out in some parts of your life and not in others. The split is exhausting.",
      "You're trying to figure out who to tell first, in what order, and how.",
      "You want a witness to the figuring-out, not advice on the destination.",
    ],
    weHold: [
      "A Keeper who has either lived a version of this themselves or has held many people through it. We match carefully.",
      "A confidential, encrypted space — your Sits and Long Talks are not shared with anyone, ever.",
      "Time. We do not push timelines. The slow work is the work.",
      "A handoff to The Bridge — therapists who are LGBTQ+-affirming and culturally fluent — when something deeper than peer support is needed.",
    ],
    weDont:
      "Hearth is not an identity therapist or a coming-out coach. We will not tell you who you are or what to do. We sit with you while you figure it out, in your time, in your language.",
    keeperName: "Aruna Bhattacharya",
    keeperSlug: "aruna-bhattacharya",
    keeperBlurb:
      "Has sat with many people on the slow journey toward saying something true. Bengali, English, Hindi. Will hold the question without pushing the answer.",
    storyQuote:
      "I came to Hearth because I couldn't tell my family. Priya didn't tell me what to do. She helped me figure out who I needed to tell first — myself.",
    storyAttribution: "Anonymous · 26 · London · 5 months in Hearth",
    related: [
      { slug: "intimacy", label: "Intimacy & shame" },
      { slug: "diaspora", label: "Life between cultures" },
      { slug: "family-pressure", label: "Family pressure" },
    ],
  },
  {
    slug: "anxiety",
    metaTitle: "Anxiety & overwhelm support · Hearth",
    metaDescription:
      "Peer support for the racing heart before a family dinner. The weight in your chest. A Keeper for the relational, ongoing kind of anxiety that lives between sessions.",
    eyebrow: "For anxiety & overwhelm",
    headlinePre: "Worry that won't\nstay",
    headlineEmber: "in one place.",
    intro:
      "The racing heart before a family dinner. The weight that sits in your chest before you've even opened the laptop. Therapy is great for the deep work and the diagnosis. Hearth is for the rest of the week — the day-to-day grind of an anxious life, with someone who knows you well enough that you don't have to start at the beginning.",
    signs: [
      "Your anxiety is mostly about people — family, partner, kids, work, the weight of all of them.",
      "You have a therapist and you also need someone for the time in between.",
      "Sundays are heavy. Family group chats are heavy. The hour before bed is heavy.",
      "You've tried meditation apps and they didn't reach the part of you that needed reaching.",
      "You want a person, not a programme. Slow, ongoing, the same one every week.",
    ],
    weHold: [
      "A regular Sit so the relationship is built before the next anxious week.",
      "A Long Talk thread for the spike — write a paragraph at 11pm, get a real human reply within 24 hours.",
      "A Keeper who knows your context and doesn't make you re-explain.",
      "Honest pacing. We don't rush you toward calm. We sit with the worry first.",
    ],
    weDont:
      "Hearth is not a treatment for clinical anxiety or panic disorder. We do not diagnose, prescribe, or replace the work that medication and therapy can do. If your anxiety is severe or escalating, our Keepers will walk you to The Bridge — a vetted, culturally-fluent therapist — personally.",
    keeperName: "Rabia K.",
    keeperSlug: "rabia-k",
    keeperBlurb:
      "Calm for thirty-two years in two countries. Knows the specific anxiety of holding everyone else together. Will not rush your nervous system.",
    storyQuote:
      "I've been holding everyone for years. My mother. My kids. My husband's grief. The first Sit I cried for forty minutes. Aruna didn't try to stop me. She just stayed.",
    storyAttribution: "Sara · 47 · Chicago · 10 months in Hearth",
    related: [
      { slug: "family-pressure", label: "Family pressure" },
      { slug: "grief", label: "Grief & loss" },
      { slug: "diaspora", label: "Life between cultures" },
    ],
  },
];

export function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const t = TOPICS.find((x) => x.slug === topic);
  if (!t) return { title: "Hearth" };
  return {
    title: t.metaTitle,
    description: t.metaDescription,
  };
}

export default async function ForTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const t = TOPICS.find((x) => x.slug === topic);
  if (!t) notFound();

  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            {t.eyebrow}
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "18ch" }}>
            {t.headlinePre.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
            <br />
            <span className="ember-word">{t.headlineEmber}</span>
          </h1>
          <p
            style={{
              maxWidth: "60ch",
              marginTop: 28,
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--ink-2)",
            }}
          >
            {t.intro}
          </p>
          <div className="hero-cta" style={{ marginTop: 32 }}>
            <Link href="/intake" className="btn btn-primary btn-lg">
              Begin the First Sit <span className="arr">&rarr;</span>
            </Link>
            <Link href="/keepers" className="btn btn-ghost btn-lg">
              Meet the Keepers
            </Link>
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="trust-strip" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 64,
              alignItems: "start",
            }}
            className="for-row"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ember)",
                  marginBottom: 14,
                }}
              >
                If this sounds like you
              </p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15 }}>
                You are <em>not</em> the first.
              </h2>
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {t.signs.map((s, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 14,
                    alignItems: "start",
                    paddingBottom: 14,
                    borderBottom:
                      i === t.signs.length - 1
                        ? "none"
                        : "1px solid var(--rule-2)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--ember)",
                      marginTop: 10,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 17,
                      lineHeight: 1.55,
                      color: "var(--ink)",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT HEARTH HOLDS */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                What Hearth holds
              </div>
              <h2 style={{ marginTop: 18 }}>
                Slow, paired, and{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  built for the long term.
                </span>
              </h2>
            </div>
            <p className="lede">
              No streaks. No optimisation. Just a Keeper, a chair, and however
              long the conversation needs to be.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 18,
            }}
            className="for-grid"
          >
            {t.weHold.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: "26px 26px 28px",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "var(--ember)",
                    color: "white",
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  {i + 1}
                </div>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 17,
                    lineHeight: 1.5,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 48,
              padding: "28px 32px",
              background: "#FFF7EE",
              border: "1px solid rgba(156,42,26,0.12)",
              borderRadius: 12,
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 20,
              alignItems: "start",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--ember)",
                color: "white",
                fontFamily: "var(--serif)",
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              ≠
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ember)",
                  marginBottom: 8,
                }}
              >
                What Hearth isn&rsquo;t
              </p>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {t.weDont}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A KEEPER FOR THIS */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />A Keeper for this
              </div>
              <h2 style={{ marginTop: 18 }}>
                Meet someone who has{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  held this before.
                </span>
              </h2>
            </div>
            <p className="lede">
              We hand-match Keepers to members within 72 hours. This is the kind
              of Keeper we&rsquo;d typically pair with someone bringing what you&rsquo;re
              bringing.
            </p>
          </div>

          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--rule)",
              borderRadius: 12,
              padding: "40px",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 40,
              alignItems: "center",
            }}
            className="for-keeper-card"
          >
            <div
              style={{
                aspectRatio: "1",
                background: "#E8C9A0",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--serif)",
                fontSize: 64,
                color: "var(--ember)",
                fontStyle: "italic",
              }}
            >
              {t.keeperName.split(" ")[0][0]}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  lineHeight: 1.15,
                  fontWeight: 380,
                  marginBottom: 12,
                }}
              >
                {t.keeperName}
              </h3>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  marginBottom: 24,
                }}
              >
                {t.keeperBlurb}
              </p>
              <Link
                href={`/keepers/${t.keeperSlug}`}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ember)",
                  textDecoration: "underline",
                }}
              >
                Read {t.keeperName.split(" ")[0]}&rsquo;s full profile &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section>
        <div className="wrap">
          <div
            style={{
              maxWidth: 760,
              marginInline: "auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ember)",
                marginBottom: 28,
              }}
            >
              From a member
            </p>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(22px, 2.6vw, 32px)",
                lineHeight: 1.4,
                fontStyle: "italic",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              &ldquo;{t.storyQuote}&rdquo;
            </p>
            <p
              style={{
                marginTop: 24,
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                color: "var(--ink-3)",
              }}
            >
              {t.storyAttribution}
            </p>
            <Link
              href="/stories"
              style={{
                marginTop: 28,
                display: "inline-block",
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: "0.06em",
                color: "var(--ember)",
                textDecoration: "underline",
              }}
            >
              Read more stories &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Pricing
              </div>
              <h2 style={{ marginTop: 18 }}>
                Two tiers. No streaks.{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  No upsells.
                </span>
              </h2>
            </div>
            <p className="lede">
              Start with Hearthside. Move to Hearth Deep when the season needs
              more weight. Cancel any time, in one click.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
            className="for-pricing-grid"
          >
            <PriceCard
              tier="Hearthside"
              price="$39/mo"
              detail="biweekly Sits · billed monthly · or $390/yr (2 months free)"
              bullets={[
                "Matched Keeper in 72 hours",
                "One Sit every two weeks",
                "Unlimited Long Talk · 24h response",
                "Friday Reflection from your Keeper",
                "One Circle per month included",
              ]}
              dark={false}
            />
            <PriceCard
              tier="Hearth Deep"
              price="$99/mo"
              detail="weekly Sits · billed monthly · or $990/yr (2 months free)"
              bullets={[
                "Everything in Hearthside",
                "Weekly Sits — 35–60 min each",
                "Priority Long Talk — 4h response",
                "Two Circles per month included",
                "Bridge therapist matching when needed",
              ]}
              dark={true}
            />
          </div>
        </div>
      </section>

      {/* RELATED + CTA */}
      <section>
        <div className="wrap">
          <div
            style={{
              padding: "56px 40px",
              background: "var(--ink)",
              borderRadius: 16,
              textAlign: "center",
              color: "var(--paper)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FFE0B0",
                marginBottom: 12,
              }}
            >
              The First Sit takes about 12 minutes
            </p>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1, color: "var(--paper)", marginBottom: 18 }}>
              You don&rsquo;t have to{" "}
              <span style={{ color: "var(--ember)", fontStyle: "italic" }}>carry it alone.</span>
            </h2>
            <p style={{ color: "rgba(242,237,229,0.7)", fontSize: 16, lineHeight: 1.6, maxWidth: "44ch", marginInline: "auto", marginBottom: 28 }}>
              Pull up a chair. Your Keeper will be on the other side within 72
              hours.
            </p>
            <Link href="/intake" className="btn btn-primary btn-lg">
              Begin the First Sit <span className="arr">&rarr;</span>
            </Link>
          </div>

          {/* Related topics */}
          <div style={{ marginTop: 56, textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 16,
              }}
            >
              Also for
            </p>
            <div
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {t.related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/for/${r.slug}`}
                  style={{
                    padding: "9px 18px",
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    letterSpacing: "0.05em",
                    border: "1.5px solid var(--rule)",
                    borderRadius: 100,
                    color: "var(--ink)",
                    textDecoration: "none",
                    transition: "all 0.15s",
                  }}
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .for-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .for-grid { grid-template-columns: 1fr !important; }
          .for-keeper-card { grid-template-columns: 1fr !important; gap: 24px !important; padding: 28px !important; }
          .for-pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}

function PriceCard({
  tier,
  price,
  detail,
  bullets,
  dark,
}: {
  tier: string;
  price: string;
  detail: string;
  bullets: string[];
  dark: boolean;
}) {
  return (
    <div
      style={{
        background: dark ? "var(--ink)" : "var(--paper)",
        color: dark ? "var(--paper)" : "var(--ink)",
        border: dark ? "none" : "1px solid var(--rule)",
        borderRadius: 12,
        padding: "32px 28px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <p
        style={{
          fontFamily: "var(--serif)",
          fontSize: 24,
          fontStyle: "italic",
          fontWeight: 380,
          color: dark ? "var(--paper)" : "var(--ink)",
          margin: 0,
        }}
      >
        {tier}
      </p>
      <div>
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: 36,
            fontWeight: 300,
            color: dark ? "var(--paper)" : "var(--ink)",
          }}
        >
          {price}
        </span>
      </div>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.05em",
          color: dark ? "rgba(242,237,229,0.6)" : "var(--ink-3)",
          margin: 0,
        }}
      >
        {detail}
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "12px 0 0",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {bullets.map((b, i) => (
          <li
            key={i}
            style={{
              fontSize: 14.5,
              lineHeight: 1.55,
              color: dark ? "rgba(242,237,229,0.85)" : "var(--ink-2)",
              paddingLeft: 18,
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: dark ? "#FFB74D" : "var(--ember)",
              }}
            />
            {b}
          </li>
        ))}
      </ul>
      <Link
        href="/intake"
        className="btn btn-primary"
        style={{
          marginTop: 14,
          alignSelf: "flex-start",
          background: dark ? "var(--ember)" : "var(--ink)",
          color: dark ? "white" : "var(--paper)",
        }}
      >
        Begin with {tier} <span className="arr">&rarr;</span>
      </Link>
    </div>
  );
}
