"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedFooter from "./components/SharedFooter";
import SharedNav from "./components/SharedNav";
import {
  HEARTHSIDE_CHECKOUT_PATH,
  HEARTH_DEEP_CHECKOUT_PATH,
} from "./lib/checkout";

function RevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

const HERO_SCENES = [
  { day: "Mon", label: "Paired", tone: "light" },
  { day: "Wed", label: "Long Talk", tone: "light" },
  { day: "Fri", label: "Reflection", tone: "light" },
  { day: "Sun", label: "The Sit", tone: "dark" },
] as const;
const HERO_SCENE_MS = 6000;

function HeroPhone() {
  const [active, setActive] = useState(0);
  // Per-scene run counters. Bumping one remounts that scene so its inner
  // animations replay each time it comes on screen; the outgoing scene keeps
  // its key, so it can still fade out.
  const [runs, setRuns] = useState<number[]>(() =>
    HERO_SCENES.map(() => 0)
  );
  const [autoplay, setAutoplay] = useState(true);

  const go = (i: number) => {
    setActive(i);
    setRuns((r) => r.map((v, k) => (k === i ? v + 1 : v)));
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAutoplay(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(
      () => go((active + 1) % HERO_SCENES.length),
      HERO_SCENE_MS
    );
    return () => clearTimeout(t);
    // `runs` changes on every manual jump, which restarts the countdown.
  }, [autoplay, active, runs]);

  const scenes = [
    /* Mon — Paired */
    <div className="ha-scene ha-scene-match" key="match">
      <div className="ha-match-head">
        <span className="ha-dot" /> Paired in 71 hours
      </div>
      <div className="ha-match-stamp">We found your Keeper.</div>
      <div className="ha-portrait-wrap">
        <div className="ha-portrait">
          <Avatar id="aruna" size={112} />
        </div>
        <div className="ha-glow-ring" />
      </div>
      <div className="ha-match-name">
        Aruna <em>Bhattacharya</em>
      </div>
      <div className="ha-match-meta">
        Toronto &middot; English &middot; Founding Keeper
      </div>
      <div className="ha-match-tags">
        <span>Transitions</span>
        <span>Family</span>
        <span>Caregiving</span>
      </div>
      <div className="ha-match-next">
        Sunday&rsquo;s Sit &middot; <b>7 PM</b>
      </div>
    </div>,

    /* Wed — The Long Talk */
    <div className="ha-scene ha-scene-chat" key="chat">
      <div className="ha-chat-head">
        <span className="ha-chat-avatar">
          <Avatar id="aruna" size={36} />
        </span>
        <div>
          <div className="ha-chat-title">Aruna B.</div>
          <div className="ha-chat-sub">
            <span className="ha-dot" /> The Long Talk &middot; online
          </div>
        </div>
      </div>
      <div className="ha-msg ha-msg-them">
        My mother brought it up again. I don&rsquo;t know how to be honest
        without lighting the whole evening on fire.
      </div>
      <div className="ha-msg ha-msg-me">
        Heard. Two questions before you decide anything: what does <i>she</i>{" "}
        think she&rsquo;s protecting?
      </div>
      {/* The typing bubble sits in the slot the last message will fill. */}
      <div className="ha-chat-tail">
        <div className="ha-typing">
          <span />
          <span />
          <span />
        </div>
        <div className="ha-msg ha-msg-them late">
          Oh. I never asked it like that.
        </div>
      </div>
      <div className="ha-chat-compose">
        <span>Write back&hellip;</span>
        <span className="ha-chat-send">&uarr;</span>
      </div>
    </div>,

    /* Fri — Reflection */
    <div className="ha-scene ha-scene-friday" key="friday">
      <div className="ha-friday-stamp">Friday Reflection &middot; from Aruna</div>
      <div className="ha-friday-author">
        <div className="ha-friday-avatar">
          <Avatar id="aruna" size={38} />
        </div>
        <div>
          <div className="ha-friday-name">Aruna Bhattacharya</div>
          <div className="ha-friday-when">Friday &middot; 7:14 AM</div>
        </div>
      </div>
      <div className="ha-friday-body">
        <p>You said you wanted to stop performing.</p>
        <p>
          I noticed you laughed three times this week when something
          wasn&rsquo;t actually funny.
        </p>
        <p>Bring that to Sunday&rsquo;s Sit if you want.</p>
      </div>
      <div className="ha-seal">&#10038;</div>
    </div>,

    /* Sun — The Sit */
    <div className="ha-scene ha-scene-video" key="video">
      <div className="ha-vid-header">
        <span className="ha-rec" />
        <span className="ha-vid-title">The Sit &middot; with Aruna</span>
        <span className="ha-vid-time">12:04</span>
      </div>
      <div className="ha-vid-keeper">
        <div className="ha-portrait">
          <Avatar id="aruna" size={160} />
        </div>
        <div className="ha-talking-bars">
          <span />
          <span />
          <span />
          <span />
        </div>
        <span className="ha-name">Aruna B. &mdash; Keeper</span>
      </div>
      <div className="ha-vid-self">
        <div className="ha-portrait">
          <Avatar id="you" size={60} />
        </div>
        <span className="ha-name">You</span>
      </div>
      <div className="ha-caption">
        &ldquo;What&rsquo;s the smallest true thing you can say
        tonight?&rdquo;
      </div>
    </div>,
  ];

  return (
    <div className="hero-anim">
      <div className="ha-stage" aria-hidden="true">
        <div className="ha-phone" data-tone={HERO_SCENES[active].tone}>
          <div className="ha-status">
            <span className="ha-time">9:42</span>
            <span className="ha-batt" />
          </div>
          <div className="ha-screen">
            {scenes.map((scene, i) => (
              <div
                key={`${i}-${runs[i]}`}
                className={`ha-scene-slot${i === active ? " active" : ""}`}
              >
                {scene}
              </div>
            ))}
          </div>
        </div>
        <span className="ha-spark s1" />
        <span className="ha-spark s2" />
        <span className="ha-spark s3" />
        <span className="ha-spark s4" />
      </div>

      <div className="ha-cap" id="ha-cap">
        A week with your Keeper
      </div>
      <div className="ha-tabs" role="group" aria-labelledby="ha-cap">
        {HERO_SCENES.map((s, i) => (
          <button
            key={s.day}
            type="button"
            className={`ha-tab${i === active ? " active" : ""}${
              i < active ? " done" : ""
            }`}
            aria-pressed={i === active}
            aria-label={`${s.day}: ${s.label}`}
            onClick={() => go(i)}
          >
            <span className="ha-tab-day">{s.day}</span>
            <span className="ha-tab-label">{s.label}</span>
            <span className="ha-tab-bar">
              <span key={runs[i]} className="ha-tab-fill" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

type AvatarId = 'aruna'|'you'|'maleA'|'maleB'|'femaleA'|'femaleB';
const AVATARS: Record<AvatarId, { bg: string; skin: string; hair: string; hairStyle: string; top: string; blush?: string }> = {
  aruna:   { bg: '#E8C9A0', skin: '#A0704B', hair: '#2C1810', hairStyle: 'long',  top: '#C75C3A', blush: '#D4826A' },
  you:     { bg: '#B8C9D4', skin: '#F0CEAF', hair: '#8B6940', hairStyle: 'bob',   top: '#5B7A8C' },
  maleA:   { bg: '#C5D4C0', skin: '#5C3820', hair: '#1A0E08', hairStyle: 'crop',  top: '#4F5A45' },
  maleB:   { bg: '#D4C5B8', skin: '#F0CEAF', hair: '#6B4A28', hairStyle: 'short', top: '#6B6051' },
  femaleA: { bg: '#D0C0D4', skin: '#C48860', hair: '#2C1810', hairStyle: 'curly', top: '#7A5A6B', blush: '#D09080' },
  femaleB: { bg: '#C9D0C0', skin: '#5C3820', hair: '#1A0E08', hairStyle: 'locs',  top: '#5A6450' },
};

function Avatar({ id, size = 48 }: { id: AvatarId; size?: number }) {
  const a = AVATARS[id];
  const hairEls: Record<string, React.ReactNode> = {
    long: <><path d="M12 16 Q12 6 24 5 Q36 6 36 16" fill={a.hair} /><path d="M12 16 Q11 28 15 32" stroke={a.hair} strokeWidth="3.5" fill="none" strokeLinecap="round" /><path d="M36 16 Q37 28 33 32" stroke={a.hair} strokeWidth="3.5" fill="none" strokeLinecap="round" /></>,
    bob: <><path d="M12 16 Q12 6 24 5 Q36 6 36 16" fill={a.hair} /><path d="M12 16 Q11 24 14 27" stroke={a.hair} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M36 16 Q37 24 34 27" stroke={a.hair} strokeWidth="3" fill="none" strokeLinecap="round" /></>,
    crop: <path d="M13 17 Q13 8 24 7 Q35 8 35 17 L35 14 Q34 9 24 8.5 Q14 9 13 14Z" fill={a.hair} />,
    short: <><path d="M13 17 Q13 7 24 6 Q35 7 35 17 L35 14 Q34 8 24 7.5 Q14 8 13 14Z" fill={a.hair} /><path d="M13 15 Q12 13 14 12" stroke={a.hair} strokeWidth="2" fill="none" /><path d="M35 15 Q36 13 34 12" stroke={a.hair} strokeWidth="2" fill="none" /></>,
    curly: <><ellipse cx="24" cy="11" rx="15" ry="10" fill={a.hair} />{[14,19,24,29,34].map((x,i) => <circle key={i} cx={x} cy={6 + (i%2)*2} r="3.5" fill={a.hair} />)}<path d="M10 16 Q8 26 13 32" stroke={a.hair} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M38 16 Q40 26 35 32" stroke={a.hair} strokeWidth="3" fill="none" strokeLinecap="round" /></>,
    locs: <><path d="M12 16 Q12 6 24 5 Q36 6 36 16" fill={a.hair} />{[12,16.5,21,27,31.5,36].map((x,i) => <rect key={i} x={x-1.2} y={15} width="2.4" height={12 + (i%3)*4} rx="1.2" fill={a.hair} />)}</>,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <circle cx="24" cy="24" r="24" fill={a.bg} />
      {/* Shoulders + top */}
      <path d="M4 48 Q4 40 15 37 L21 35 L24 37 L27 35 L33 37 Q44 40 44 48Z" fill={a.top} />
      {/* Collar notch */}
      <path d="M21 35 L24 39 L27 35" fill="#F0EBE3" />
      {/* Neck */}
      <rect x="21" y="29.5" width="6" height="6" rx="3" fill={a.skin} />
      {/* Head */}
      <circle cx="24" cy="20" r="11" fill={a.skin} />
      {/* Hair */}
      {hairEls[a.hairStyle]}
      {/* Eyes — two bold dots */}
      <circle cx="19.5" cy="21" r="1.6" fill="#1A1412" />
      <circle cx="28.5" cy="21" r="1.6" fill="#1A1412" />
      {/* Eye highlights */}
      <circle cx="20.1" cy="20.3" r="0.6" fill="white" opacity="0.9" />
      <circle cx="29.1" cy="20.3" r="0.6" fill="white" opacity="0.9" />
      {/* Smile */}
      <path d="M21 26 Q24 28.5 27 26" stroke="#1A1412" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Blush */}
      {a.blush && <><circle cx="16" cy="24" r="2.5" fill={a.blush} opacity="0.25" /><circle cx="32" cy="24" r="2.5" fill={a.blush} opacity="0.25" /></>}
    </svg>
  );
}

function SmoothScroll() {
  useEffect(() => {
    const handler = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const id = a.getAttribute("href");
      if (id && id.length > 1 && id.startsWith("#")) {
        const t = document.querySelector(id);
        if (t) {
          e.preventDefault();
          window.scrollTo({
            top: (t as HTMLElement).offsetTop - 60,
            behavior: "smooth",
          });
        }
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", handler);
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.removeEventListener("click", handler);
      });
    };
  }, []);
  return null;
}

export default function Home() {
  const [ctaStep, setCtaStep] = useState(1);
  const [ctaName, setCtaName] = useState("");
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaTopics, setCtaTopics] = useState<string[]>([]);
  const [ctaSubmitting, setCtaSubmitting] = useState(false);
  const [ctaError, setCtaError] = useState<string | null>(null);

  const submitShortIntake = async () => {
    setCtaSubmitting(true);
    setCtaError(null);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "short",
          firstName: ctaName,
          email: ctaEmail,
          topics: ctaTopics,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(body.error ?? `submission failed (${res.status})`);
      }
      setCtaStep(3);
    } catch (err) {
      setCtaError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setCtaSubmitting(false);
    }
  };

  const intakeTopics = [
    { id: "grief", label: "Grief or loss" },
    { id: "family", label: "Family pressure" },
    { id: "belonging", label: "Between worlds & expectations" },
    { id: "identity", label: "Identity & belonging" },
    { id: "sexual_identity", label: "Sexual identity" },
    { id: "intimacy", label: "Intimacy & shame" },
    { id: "relationships", label: "Relationships" },
    { id: "marriage", label: "Marriage or partnership" },
    { id: "career", label: "Career & life direction" },
    { id: "anxiety", label: "Anxiety or overwhelm" },
    { id: "parenting", label: "Parenting stress" },
    { id: "transition", label: "Major life change" },
    { id: "loneliness", label: "Loneliness" },
    { id: "other", label: "Something else" },
  ];

  const toggleTopic = (id: string) => {
    setCtaTopics((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <>
      <RevealOnScroll />
      <SmoothScroll />

      <SharedNav />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Long-term peer support &middot; From $39 a month
              </div>
              <h1 style={{ marginTop: 24 }}>
                Pull up a chair.
                <br />
                You weren&rsquo;t meant
                <br />
                to <span className="ember-word">carry it alone.</span>
              </h1>
              <p className="hero-sub">
                <b>Someone who knows your whole story &mdash; and stays.</b>{" "}
                A trained listener, matched to you: a video call every two
                weeks, a chat thread in between, and a note from them every
                Friday. Not therapy. Not a chatbot.
              </p>
              <div className="hero-cta">
                <Link href="/intake" className="btn btn-primary btn-lg">
                  Start the 12-minute intake{" "}
                  <span className="arr">&rarr;</span>
                </Link>
                <a href="#keepers" className="btn btn-ghost btn-lg">
                  Meet the Keepers
                </a>
              </div>
              <div className="hero-tag">
                <span>
                  <span className="dot" />
                  Matched within 72 hours
                </span>
                <span>
                  <span className="dot" />
                  Switch Keepers free in the first 30 days
                </span>
                <span>
                  <span className="dot" />
                  Cancel any time
                </span>
              </div>
            </div>

            <div className="hero-meta">
              <HeroPhone />
            </div>
          </div>

          {/* Positioning rail */}
          <div className="gap-line">
            <span>
              <span className="pip" /> Calling a friend
            </span>
            <span className="rule" />
            <span className="center">
              Hearth lives in the space between
            </span>
            <span className="rule" />
            <span>
              Seeing a therapist{" "}
              <span
                className="pip"
                style={{ marginLeft: 8, background: "var(--ember)" }}
              />
            </span>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="how" id="what-you-get">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                What you get
              </div>
              <h2 style={{ marginTop: 18 }}>
                One person, yours.{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  Here&rsquo;s what that means.
                </span>
              </h2>
            </div>
            <p className="lede">
              No streaks, no badges, no app telling you how to feel. A
              Keeper is a person who knows your story, on a schedule you can
              count on. Three things, every time.
            </p>
          </div>

          <div className="steps three reveal">
            <div className="step">
              <div className="num">THE SIT &middot; 35&ndash;60 MIN</div>
              <div className="glyph">&#9004;</div>
              <h3>A video call every two weeks</h3>
              <p>
                Thirty-five to sixty minutes with your Keeper, on video or just
                audio. Same person, same time, every two weeks. Every week on
                the $99 plan.
              </p>
            </div>
            <div className="step">
              <div className="num">THE LONG TALK &middot; CHAT</div>
              <div className="glyph">&#8767;</div>
              <h3>A chat thread in between</h3>
              <p>
                Text, voice notes, photos, whenever something comes up. Your
                Keeper replies within a day. Slow on purpose: a thread, not a
                feed.
              </p>
            </div>
            <div className="step">
              <div className="num">FRIDAY REFLECTION &middot; NOTE</div>
              <div className="glyph">&#10038;</div>
              <h3>A note from them every Friday</h3>
              <p>
                A few lines from your Keeper each Friday: what they noticed
                this week, what stayed with them. Small, specific, yours to
                keep.
              </p>
            </div>
          </div>

          <div className="how-start reveal">
            <div className="how-start-steps">
              <span>
                <b>01</b> A 12-minute intake
              </span>
              <span className="sep">&rarr;</span>
              <span>
                <b>02</b> Matched with a Keeper within 72 hours
              </span>
              <span className="sep">&rarr;</span>
              <span>
                <b>03</b> Your first call on the calendar
              </span>
            </div>
            <p className="how-start-note">
              And if something ever needs a therapist, your Keeper helps you
              find one.{" "}
              <Link href="/how-it-works">How it works, in detail &rarr;</Link>
            </p>
          </div>
        </div>
      </section>

      {/* IS THIS FOR YOU */}
      <section className="bring" id="bring">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Is this for you?
              </div>
              <h2 style={{ marginTop: 18 }}>
                The weight that doesn&rsquo;t fit{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  anywhere else.
                </span>
              </h2>
            </div>
            <p className="lede">
              Not emergencies. Not diagnoses. The everyday weight: family,
              grief, caregiving, the in-between years. The things you carry
              every week.
            </p>
          </div>

          <div className="bring-grid six reveal">
            <Link href="/for/family-pressure" className="bring-card bring-card-link">
              <div className="bring-icon">{"⌂"}</div>
              <h4>Family pressure</h4>
              <p>
                The call that ruins your Sunday. Expectations that don&rsquo;t
                translate. Parents who love you in a language that feels like
                control.
              </p>
            </Link>
            <Link href="/for/grief" className="bring-card bring-card-link">
              <div className="bring-icon">{"✶"}</div>
              <h4>Grief &amp; loss</h4>
              <p>
                The kind that arrives on time and the kind that shows up ten
                years late. Losing people, places, versions of yourself.
              </p>
            </Link>
            <div className="bring-card">
              <div className="bring-icon">{"♡"}</div>
              <h4>Caregiving burnout</h4>
              <p>
                Holding everyone else together while quietly falling apart.
                The guilt of needing your own chair.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"⌘"}</div>
              <h4>Career crossroads</h4>
              <p>
                The job your family wanted vs. the life you actually want.
                Success that feels hollow. Starting over at 35.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"☉"}</div>
              <h4>Loneliness</h4>
              <p>
                Not the kind that means you have no friends. The kind that means
                nobody really knows the full version.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"⌒"}</div>
              <h4>New parenthood</h4>
              <p>
                The identity shift nobody warned you about. A relationship
                reshaped overnight. Needing village but having Wi-Fi.
              </p>
            </div>
          </div>

          <p className="bring-more reveal">
            &hellip;and the things that don&rsquo;t have a name yet. Also:{" "}
            <Link href="/for/identity">identity &amp; belonging</Link>,{" "}
            <Link href="/for/intimacy">intimacy &amp; shame</Link>,{" "}
            <Link href="/for/sexual-identity">sexual identity</Link>,{" "}
            <Link href="/for/anxiety">anxiety</Link>. If it&rsquo;s on your
            mind every week, it belongs here.
          </p>
        </div>
      </section>

      {/* THE SPACE BETWEEN */}
      <section className="between" id="between">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Not a friend. Not a therapist.
              </div>
              <h2 style={{ marginTop: 18 }}>
                There&rsquo;s a{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  whole life
                </span>{" "}
                between a friend and a therapist. Hearth lives there.
              </h2>
            </div>
            <p className="lede">
              Friends mean well, but they get tired. Therapists are for
              clinical things, and priced like it. A Keeper is the third thing
              (older, attentive, consistent) that most of us no longer have.
              Hearth is peer support, not therapy. We say it plainly because
              the difference is the point.
            </p>
          </div>

          <div className="between-grid reveal">
            <div className="bcell">
              <div>
                <div className="label">A friend</div>
                <h3>Loves you, also has their own week.</h3>
                <p>
                  Inconsistent attention. Will project. Doesn&rsquo;t know how
                  to hold a long story without trying to fix it.
                </p>
              </div>
              <div className="role">
                <span className="pip" /> What you already have
              </div>
            </div>
            <div className="bcell is-hearth">
              <div>
                <div className="label">A Keeper</div>
                <h3>
                  Trained, consistent, matched by hand. Yours, for years.
                </h3>
                <p>
                  One person. Same chair, every call. Lets your sentence
                  finish. Notices the patterns you can&rsquo;t see yet.
                </p>
              </div>
              <div className="role">
                <span className="pip" /> What Hearth gives you
              </div>
            </div>
            <div className="bcell">
              <div>
                <div className="label">A therapist</div>
                <h3>Clinical care for clinical things.</h3>
                <p>
                  Diagnoses, treats, prescribes. Right tool for some things.
                  Wrong tool for the everyday weight.
                </p>
              </div>
              <div className="role">
                <span className="pip" /> We help you find one, if you need one
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEEPER FEATURE */}
      <section className="keeper" id="keepers">
        <div className="wrap">
          <div className="keeper-grid">
            <div className="reveal">
              <div className="keeper-card">
                <div className="keeper-photo">
                  <Avatar id="aruna" size={240} />
                </div>
                <div className="keeper-meta">
                  <div>
                    <div className="keeper-name">
                      Aruna <em>Bhattacharya</em>
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase" as const,
                        color: "var(--ink-3)",
                        marginTop: 6,
                      }}
                    >
                      Keeper &middot; 6 yrs at the Hearth
                    </div>
                  </div>
                  <div className="keeper-loc">
                    Toronto / EST
                    <br />
                    English
                  </div>
                </div>
                <p className="keeper-bio">
                  &ldquo;I was the cousin people called when something
                  didn&rsquo;t make sense yet. I trained as a counselor, then
                  realized what most people needed first wasn&rsquo;t a session.
                  It was a chair, a long evening, and someone who
                  wasn&rsquo;t tired of them.&rdquo;
                </p>
                <div className="keeper-tags">
                  <span className="tag">Identity &amp; belonging</span>
                  <span className="tag">Caregiving</span>
                  <span className="tag">Family pressure</span>
                  <span className="tag">Career crossroads</span>
                </div>
                <div className="keeper-cta">
                  <span className="keeper-langs">
                    At the Hearth &middot; Aruna&rsquo;s profile
                  </span>
                  <Link
                    href="/keepers/aruna-bhattacharya"
                    className="btn btn-ghost"
                    style={{ padding: "9px 14px", fontSize: 12.5 }}
                  >
                    View profile <span className="arr">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="keeper-copy reveal">
              <div className="eyebrow">
                <span className="dot" />
                Meet your Keepers
              </div>
              <h2 style={{ marginTop: 18 }}>
                Not a coach. Not a clinician.{" "}
                <span className="em">An elder, on your side.</span>
              </h2>
              <p
                style={{
                  marginTop: 22,
                  color: "var(--ink-2)",
                  maxWidth: "46ch",
                  fontSize: 17,
                }}
              >
                Keepers are trained companions: the kind of person the village
                elder, the trusted aunt, the community wise-person used to be.
                Paid professionals, not volunteers. And they stay yours.
              </p>

              <div className="keeper-points">
                <div className="kpoint">
                  <span className="num">01</span>
                  <div>
                    <h4>Paired once. Held over years.</h4>
                    <p>
                      You don&rsquo;t rotate. The same Keeper carries the
                      thread of your life across seasons.
                    </p>
                  </div>
                </div>
                <div className="kpoint">
                  <span className="num">02</span>
                  <div>
                    <h4>Trained, vetted, paid.</h4>
                    <p>
                      120 hours of Keeper training, background checks, crisis
                      protocol, monthly supervision. Not clinicians, and clear
                      about it.
                    </p>
                  </div>
                </div>
                <div className="kpoint">
                  <span className="num">03</span>
                  <div>
                    <h4>Matched by hand. Switch free.</h4>
                    <p>
                      A person at Hearth pairs you by language, lived context,
                      and the themes you carry. Not the right fit? Switch free
                      in the first 30 days.
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 32,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap" as const,
                }}
              >
                <Link href="/keepers" className="btn btn-primary">
                  Browse all Keepers <span className="arr">&rarr;</span>
                </Link>
                <Link href="/how-it-works" className="btn btn-ghost">
                  How matching works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Pricing
              </div>
              <h2 style={{ marginTop: 18 }}>
                Two plans.{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  Pick how often you talk.
                </span>
              </h2>
            </div>
            <p className="lede">
              Everything else is the same: your Keeper, the chat thread, the
              Friday note. No upsells, no dark patterns. Cancel any time, in
              one click.
            </p>
          </div>

          <div className="price-grid reveal">
            <div className="price">
              <div
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  background: "var(--ember)",
                  color: "white",
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  padding: "4px 10px",
                  borderRadius: 100,
                  marginBottom: 16,
                }}
              >
                Most people start here
              </div>
              <div className="name">
                Every <em>two weeks</em>
              </div>
              <div className="plan">Hearthside</div>
              <div className="pp">
                <span className="num">$39</span>
                <span className="per">/mo &middot; billed monthly</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 8, marginTop: -4 }}>
                or $390/yr &mdash; 2 months free
              </p>
              <ul>
                <li>A 35&ndash;60 minute call with your Keeper, every two weeks</li>
                <li>Chat thread in between, replies within a day</li>
                <li>A note from your Keeper every Friday</li>
                <li>One small-group Circle a month</li>
                <li>Matched within 72 hours, switch free in the first 30 days</li>
              </ul>
              <Link
                href={HEARTHSIDE_CHECKOUT_PATH}
                className="btn btn-primary"
              >
                Choose every two weeks <span className="arr">&rarr;</span>
              </Link>
              <p className="mb">Cancel any time, in one click</p>
            </div>

            <div className="price deep">
              <div
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  background: "rgba(255,255,255,0.15)",
                  color: "var(--paper)",
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  padding: "4px 10px",
                  borderRadius: 100,
                  marginBottom: 16,
                }}
              >
                For a heavier season
              </div>
              <div className="name">
                Every <em>week</em>
              </div>
              <div className="plan">Hearth Deep</div>
              <div className="pp">
                <span className="num" style={{ color: "var(--paper)" }}>$99</span>
                <span className="per">/mo &middot; billed monthly</span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 8, marginTop: -4 }}>
                or $990/yr &mdash; 2 months free
              </p>
              <ul>
                <li>Everything in the two-week plan</li>
                <li>A call with your Keeper every week</li>
                <li>Chat replies within 4 hours</li>
                <li>Two Circles a month</li>
                <li>Priority therapist matching, if you ever need it</li>
              </ul>
              <Link
                href={HEARTH_DEEP_CHECKOUT_PATH}
                className="btn btn-primary"
                style={{ background: "var(--ember)" }}
              >
                Choose every week <span className="arr">&rarr;</span>
              </Link>
              <p className="mb">Cancel any time, in one click</p>
            </div>
          </div>

          <p className="price-context reveal">
            For scale: therapy usually runs $400&ndash;1,200 a month. A Keeper
            is $39.{" "}
            <Link href="/pricing">Full pricing, extras and gifting &rarr;</Link>
          </p>
        </div>
      </section>

      {/* ONE STORY */}
      <section className="one-story">
        <div className="wrap">
          <blockquote className="one-story-quote reveal">
            <p>
              My therapist did the work she was built for. My Keeper is the one
              who calls the shape of the week. I didn&rsquo;t know I was allowed
              to have both.
            </p>
            <cite>Ayesha &middot; member for two years</cite>
          </blockquote>
          <p className="one-story-origin reveal">
            Hearth is the elder&rsquo;s house, on your phone.{" "}
            <Link href="/about">Why we built it &rarr;</Link>
          </p>
        </div>
      </section>
      {/* BIG CTA */}
      <section className="bigcta" id="cta">
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
            The intake takes about 12 minutes
          </div>
          <h2 style={{ marginTop: 18 }}>
            Some things <em>deserve</em>
            <br />
            the long talk.
          </h2>
          <p className="sub">
            Tell us what you&rsquo;re carrying. We match you within 72 hours.
          </p>
          {/* Step indicator */}
          {ctaStep < 3 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 32, marginBottom: 24 }}>
              {[1, 2].map((s) => (
                <div key={s} style={{
                  width: s === ctaStep ? 24 : 8, height: 8, borderRadius: 100,
                  background: s === ctaStep ? "var(--ember)" : "rgba(255,255,255,0.25)",
                  transition: "all 0.3s",
                }} />
              ))}
            </div>
          )}

          {/* Step 1 — name + email */}
          {ctaStep === 1 && (
            <form
              onSubmit={(e) => { e.preventDefault(); setCtaStep(2); }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%", maxWidth: 440, margin: "0 auto" }}
            >
              <input
                type="text" required placeholder="Your first name"
                value={ctaName} onChange={(e) => setCtaName(e.target.value)}
                style={{ width: "100%", padding: "12px 16px", fontFamily: "var(--mono)", fontSize: 14, border: "1px solid rgba(255,255,255,0.25)", borderRadius: 6, background: "rgba(255,255,255,0.08)", color: "var(--paper)", outline: "none", boxSizing: "border-box" as const }}
              />
              <input
                type="email" required placeholder="your@email.com"
                value={ctaEmail} onChange={(e) => setCtaEmail(e.target.value)}
                style={{ width: "100%", padding: "12px 16px", fontFamily: "var(--mono)", fontSize: 14, border: "1px solid rgba(255,255,255,0.25)", borderRadius: 6, background: "rgba(255,255,255,0.08)", color: "var(--paper)", outline: "none", boxSizing: "border-box" as const }}
              />
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                Next: what brings you here &rarr;
              </button>
              <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.45)", textAlign: "center", marginTop: 4 }}>
                No payment yet. We&rsquo;ll email you within 48 hours.
              </p>
            </form>
          )}

          {/* Step 2 — what brings you here */}
          {ctaStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, width: "100%", maxWidth: 480, margin: "0 auto" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--paper)", textAlign: "center", lineHeight: 1.4, margin: 0 }}>
                {ctaName ? `${ctaName}, what` : "What"} brings you to Hearth?
              </p>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "rgba(255,255,255,0.5)", textAlign: "center", marginTop: -12, letterSpacing: "0.08em" }}>
                Pick everything that feels true.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, justifyContent: "center" }}>
                {intakeTopics.map((t) => {
                  const selected = ctaTopics.includes(t.id);
                  return (
                    <button key={t.id} type="button" onClick={() => toggleTopic(t.id)} style={{
                      padding: "9px 18px", fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.06em",
                      borderRadius: 100, border: selected ? "1.5px solid var(--ember)" : "1.5px solid rgba(255,255,255,0.25)",
                      background: selected ? "var(--ember)" : "rgba(255,255,255,0.06)", color: "var(--paper)",
                      cursor: "pointer", transition: "all 0.15s",
                    }}>
                      {t.label}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                disabled={ctaTopics.length === 0 || ctaSubmitting}
                onClick={submitShortIntake}
                className="btn btn-primary btn-lg"
                style={{
                  width: "100%",
                  maxWidth: 300,
                  opacity: ctaTopics.length === 0 || ctaSubmitting ? 0.45 : 1,
                  cursor:
                    ctaTopics.length === 0 || ctaSubmitting
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                {ctaSubmitting ? "Sending…" : "Match me with a Keeper →"}
              </button>
              {ctaError && (
                <p
                  role="alert"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "#FFB4B4",
                    margin: "4px 0 0",
                    maxWidth: 320,
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  {ctaError}. Please try again.
                </p>
              )}
              <button type="button" onClick={() => setCtaStep(1)} style={{ fontFamily: "var(--mono)", fontSize: 12, color: "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.06em" }}>
                &larr; Back
              </button>
            </div>
          )}

          {/* Step 3 — confirmation */}
          {ctaStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginTop: 8, textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                &#x2764;&#xfe0e;
              </div>
              <p style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--paper)", maxWidth: "34ch", lineHeight: 1.4, margin: 0 }}>
                {ctaName ? `${ctaName}, your` : "Your"} Keeper is being matched.
              </p>
              <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em", maxWidth: "36ch", lineHeight: 1.6, margin: 0 }}>
                Expect an email at {ctaEmail} within 48 hours.
              </p>
              <Link href="/embers" style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.08em", color: "#FFB74D", textDecoration: "underline", marginTop: 8 }}>
                While you wait &mdash; read an Ember &rarr;
              </Link>
              <Link href="/gift" className="btn btn-ghost btn-lg" style={{ marginTop: 8 }}>
                Light a Hearth for someone
              </Link>
            </div>
          )}
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
