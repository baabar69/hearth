"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedFooter from "./components/SharedFooter";
import SharedNav from "./components/SharedNav";
import {
  HEARTHSIDE_CHECKOUT_PATH,
  HEARTH_DEEP_CHECKOUT_PATH,
} from "./lib/checkout";
import { jsonLd, faqLd } from "./lib/schema";

const HERO_PICKS = [
  { id: "family", label: "Family pressure" },
  { id: "grief", label: "Grief or loss" },
  { id: "career", label: "Career & direction" },
  { id: "loneliness", label: "Loneliness" },
  { id: "parenting", label: "Parenting" },
  { id: "anxiety", label: "Anxiety or overwhelm" },
  { id: "transition", label: "A big life change" },
  { id: "other", label: "Something else" },
];

const PROOF = [
  { n: "72 hrs", t: "to be matched with your Keeper. By a person, not an algorithm." },
  { n: "120 hrs", t: "of training before a Keeper ever meets a member." },
  { n: "Under 8%", t: "of Keeper applicants are accepted." },
  { n: "$39", t: "a month. Less than a single private therapy session almost anywhere." },
  { n: "1 Sit", t: "is all it takes to ask for a different Keeper. Cancel any time, in one click." },
];

const COMPARE = [
  {
    label: "Who you talk to",
    bh: "A licensed therapist, assigned by questionnaire and availability.",
    us: "A trained Keeper, chosen for you by a person who read what you wrote.",
  },
  {
    label: "The same person, for years",
    bh: "Not promised. You can be reassigned, and many people switch more than once.",
    us: "Yes. It is the whole design. If your first Sit is not the right fit, ask and we assign someone else.",
  },
  {
    label: "Price per month",
    bh: "About $280 to $400, per BetterHelp's own FAQ (August 2026).",
    us: "$39 for a call every two weeks. $99 for every week.",
  },
  {
    label: "Between sessions",
    bh: "Messaging, answered when your therapist is next available.",
    us: "A chat thread answered within a day, and a written note from your Keeper every Friday.",
  },
  {
    label: "Can treat a condition",
    bh: "Yes. It is licensed therapy.",
    us: "No. Peer support, with help finding a therapist through The Bridge when you need one.",
  },
  {
    label: "Time to start",
    bh: "Often within 48 hours.",
    us: "Within 72 hours, matched by hand.",
  },
];

const VOICES = [
  {
    q: "I've been holding everyone for years. My mother. My kids. My husband's grief. The first Sit I cried for forty minutes. Aruna didn't try to stop me. She just stayed.",
    who: "Sara, 47",
    meta: "Caregiving · 10 months in",
  },
  {
    q: "My grandmother died two years ago. I never grieved out loud. There wasn't space for it. Aruna made the space. We talk about her every week.",
    who: "Devika, 38",
    meta: "Grief · 1 year in",
  },
  {
    q: "I quit the job my parents wanted. I didn't tell them for six weeks. Faisal sat with me through that silence. Not a therapist. Just someone who'd done a version of this himself.",
    who: "Hassan, 29",
    meta: "Career · 1 year in",
  },
];

const HOME_FAQ = [
  {
    q: "Is Hearth therapy?",
    a: "No. Hearth is peer support: a trained Keeper who is not a clinician, for the recurring weight of ordinary life. Keepers do not diagnose, treat or prescribe. If what you describe needs a therapist, your Keeper says so and helps you find a vetted one through The Bridge.",
  },
  {
    q: "How is Hearth different from BetterHelp?",
    a: "BetterHelp is online therapy with licensed professionals, at roughly $280 to $400 a month, and you can be reassigned to a different therapist. Hearth is one trained Keeper, matched to you by hand, who stays for years, at $39 a month. If you need treatment, choose therapy. If you need someone who knows your whole story and stays, that is Hearth.",
  },
  {
    q: "Who are the Keepers?",
    a: "Trained, vetted, paid peer supporters. Each completes 120 hours of Hearth training in listening, sensitivity, scope and crisis protocol, passes a background check and joins monthly supervision. Fewer than 8% of applicants are accepted. They are paid from every membership fee, biweekly in USD.",
  },
  {
    q: "What does it cost?",
    a: "$39 a month for a 35 to 60 minute call every two weeks, the chat thread, and the Friday note. $99 a month for a call every week. No per-session billing, no upsells. Cancel any time in one click and keep access to the end of the period you paid for.",
  },
  {
    q: "What if my Keeper is not the right fit?",
    a: "After your first Sit with your Keeper, if it does not feel right, ask and we assign you a different Keeper. No questions asked. You can request a change later too.",
  },
  {
    q: "Is it confidential?",
    a: "Yes. Calls and messages are encrypted. Hearth is not a medical record and nothing is shared with employers or insurers. You can export or delete your data at any time.",
  },
  {
    q: "What happens after I click start?",
    a: "A 12-minute intake about what you are carrying and how you like to talk. Within 72 hours a person at Hearth matches you with a Keeper. Your first call goes on the calendar. No payment is taken until you are matched and choose a plan.",
  },
];

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
  { day: "Mon", label: "Matched", tone: "light" },
  { day: "Wed", label: "Chat", tone: "light" },
  { day: "Fri", label: "Friday note", tone: "light" },
  { day: "Sun", label: "Video call", tone: "dark" },
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
    /* Mon: Paired */
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

    /* Wed: The Long Talk */
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

    /* Fri: Reflection */
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

    /* Sun: The Sit */
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
        <span className="ha-name">Aruna B. &middot; Keeper</span>
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
      {/* Eyes: two bold dots */}
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
                A trained listener, matched to you &middot; From $39 a month
              </div>
              <h1 style={{ marginTop: 24 }}>
                Pull up a chair.
                <br />
                You weren&rsquo;t meant
                <br />
                to <span className="ember-word">carry it alone.</span>
              </h1>
              <p className="hero-sub">
                <b>Relief, comfort, and someone who stays.</b> One trained
                Keeper, matched to you by hand: a video call every two weeks,
                a chat thread in between, and a note every Friday. For the
                weight that is not a diagnosis. $39 a month, cancel any time.
              </p>
              <div className="hero-pick">
                <div className="hero-pick-label">What are you carrying?</div>
                <div className="hero-pick-row">
                  {HERO_PICKS.map((t) => (
                    <Link
                      key={t.id}
                      href={`/intake?topic=${t.id}`}
                      className="pick"
                    >
                      {t.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hero-cta">
                <Link href="/intake" className="btn btn-primary btn-lg">
                  Start the 12-minute intake{" "}
                  <span className="arr">&rarr;</span>
                </Link>
                <a href="#compare" className="btn btn-ghost btn-lg">
                  Compare with BetterHelp
                </a>
              </div>
              <div className="hero-tag">
                <span>
                  <span className="dot" />
                  Matched within 72 hours
                </span>
                <span>
                  <span className="dot" />
                  Ask for a different Keeper after your first Sit
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

          {/* Proof strip */}
          <div className="proof reveal">
            {PROOF.map((x) => (
              <div key={x.n} className="proof-item">
                <div className="proof-n">{x.n}</div>
                <div className="proof-t">{x.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CHANGES */}
      <section className="change" id="what-changes">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                What you get out of it
              </div>
              <h2 style={{ marginTop: 18 }}>
                Relief, comfort, and{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  a steadier week.
                </span>
              </h2>
            </div>
            <p className="lede">
              Most people carry the hard things alone, in pieces, with nobody
              who has the whole picture. A Keeper does. Here is what members
              say changes, usually within the first few months.
            </p>
          </div>

          <div className="change-grid reveal">
            <div className="change-col">
              <div className="change-label">Before</div>
              <ul>
                <li>You rehearse a difficult phone call for days and still say the wrong thing.</li>
                <li>You are the person everyone leans on. Nobody asks how you are.</li>
                <li>You have told the story so many times, in pieces, that nobody has all of it.</li>
                <li>You keep a brave face on, and go home exhausted from it.</li>
              </ul>
            </div>
            <div className="change-col is-after">
              <div className="change-label">After a few months with a Keeper</div>
              <ul>
                <li><b>Relief.</b> One person has the whole story, so you stop explaining and say the true thing.</li>
                <li><b>Comfort you can count on.</b> Every two weeks there is a call in the calendar, whatever the week did.</li>
                <li><b>Feeling heard.</b> Your Keeper notices what you did not say, and tells you gently on a Friday.</li>
                <li><b>A steadier week.</b> There is somewhere to put things, so they stop leaking into everything else.</li>
              </ul>
            </div>
          </div>

          <p className="change-close reveal">
            That is what you are paying for: relief that lasts, from a person who <em>stays.</em>
          </p>
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
                What your membership includes,{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  every month.
                </span>
              </h2>
            </div>
            <p className="lede">
              No streaks, no badges, no app telling you how to feel. One
              person who knows your story, on a schedule you can count on.
              Three things, every time.
            </p>
          </div>

          <div className="steps three reveal">
            <div className="step">
              <div className="num">WE CALL IT THE SIT</div>
              <div className="glyph">&#9004;</div>
              <h3>A video call every two weeks</h3>
              <p>
                Thirty-five to sixty minutes, on video or just audio, with the
                same person every time. One hour where you do not have to
                perform. Every week on the $99 plan.
              </p>
            </div>
            <div className="step">
              <div className="num">WE CALL IT THE LONG TALK</div>
              <div className="glyph">&#8767;</div>
              <h3>A chat thread in between</h3>
              <p>
                Text, voice notes, photos, whenever something comes up. Your
                Keeper replies within a day. The thing that happens on Tuesday
                does not have to wait two weeks.
              </p>
            </div>
            <div className="step">
              <div className="num">THE FRIDAY NOTE</div>
              <div className="glyph">&#10038;</div>
              <h3>A note from them every Friday</h3>
              <p>
                A few lines from your Keeper each Friday: what they noticed
                this week, what stayed with them. Proof, every week, that
                someone is paying attention.
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

      {/* HEARTH VS BETTERHELP */}
      <section className="compare" id="compare">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Hearth vs. BetterHelp
              </div>
              <h2 style={{ marginTop: 18 }}>
                Therapy apps rent you a counsellor.{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  Hearth gives you a person who stays.
                </span>
              </h2>
            </div>
            <p className="lede">
              BetterHelp is good at what it sells: licensed therapy, fast. It
              was never built for the years-long relationship most of the
              weight in a life needs. That is the gap we built for. Their
              details are from their own FAQ, August 2026.
            </p>
          </div>

          <div className="cmp reveal">
            <div className="cmp-head">
              <div>What</div>
              <div>BetterHelp</div>
              <div className="cmp-us">Hearth</div>
            </div>
            {COMPARE.map((row) => (
              <div key={row.label} className="cmp-row">
                <div className="cmp-label">{row.label}</div>
                <div className="cmp-bh">{row.bh}</div>
                <div className="cmp-us">{row.us}</div>
              </div>
            ))}
          </div>

          <div className="cmp-verdict reveal">
            <p>
              If you need treatment, choose therapy; BetterHelp is a fair way to
              get it. If what you need is a trained person who knows your whole
              story and stays, that is what we build. At about a seventh of the
              price.
            </p>
            <Link href="/hearth-vs-betterhelp" className="btn btn-ghost">
              The full comparison, with alternatives{" "}
              <span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* THE SPACE BETWEEN */}
      <section className="between" id="between">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                So what is a Keeper, exactly?
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
                For the things you carry{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  every week.
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
                Trained, vetted, and{" "}
                <span className="em">on your side.</span>
              </h2>
              <p
                style={{
                  marginTop: 22,
                  color: "var(--ink-2)",
                  maxWidth: "46ch",
                  fontSize: 17,
                }}
              >
                Keepers are trained companions, the kind of steady person most
                of us used to have in a family or a neighbourhood. Paid
                professionals, not volunteers. Not clinicians, and clear about
                it. And they stay yours.
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
                    <h4>Matched by hand. Changed on request.</h4>
                    <p>
                      A person at Hearth pairs you by language, lived context,
                      and the themes you carry. Not the right fit after your
                      first Sit? Ask and we assign someone else.
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
                  Meet the Keepers <span className="arr">&rarr;</span>
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
                or $390/yr (2 months free)
              </p>
              <ul>
                <li>A 35&ndash;60 minute call with your Keeper, every two weeks</li>
                <li>Chat thread in between, replies within a day</li>
                <li>A note from your Keeper every Friday</li>
                <li>One small-group session a month (we call it a Circle)</li>
                <li>Matched within 72 hours. Not the right fit after your first Sit? Ask and we reassign you</li>
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
                or $990/yr (2 months free)
              </p>
              <ul>
                <li>Everything in the two-week plan</li>
                <li>A call with your Keeper every week</li>
                <li>Chat replies within 4 hours</li>
                <li>Two small-group sessions a month</li>
                <li>Priority help finding a therapist, if you ever need one</li>
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
            For scale: therapy usually runs $400&ndash;1,200 a month, and a
            therapy app can hand you a new counsellor any time. A Keeper is $39,
            and stays.{" "}
            <Link href="/pricing">Full pricing &rarr;</Link>
            <Link href="/hearth-vs-betterhelp">Compare with BetterHelp &rarr;</Link>
          </p>
        </div>
      </section>

      {/* MEMBER VOICES */}
      <section className="voices" id="stories">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Members, in their own words
              </div>
              <h2 style={{ marginTop: 18 }}>
                What members{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  say.
                </span>
              </h2>
            </div>
            <p className="lede">
              First names, real situations, names changed for privacy.{" "}
              <Link href="/stories" style={{ borderBottom: "1px solid var(--rule)" }}>
                Read more stories &rarr;
              </Link>
            </p>
          </div>
          <div className="voices-grid reveal">
            {VOICES.map((v) => (
              <figure key={v.who} className="voice">
                <blockquote>{v.q}</blockquote>
                <figcaption>
                  <b>{v.who}</b>
                  <span>{v.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(faqLd(HOME_FAQ)) }}
        />
        <div className="wrap">
          <div className="faq-grid">
            <div className="reveal">
              <div className="eyebrow">
                <span className="dot" />
                Before you decide
              </div>
              <h2 style={{ marginTop: 18 }}>
                The questions people ask{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  first.
                </span>
              </h2>
              <p style={{ marginTop: 22, color: "var(--ink-2)", fontSize: 16, lineHeight: 1.6, maxWidth: "40ch" }}>
                Plain answers. If yours is not here,{" "}
                <Link href="/faq" style={{ borderBottom: "1px solid var(--rule)" }}>
                  the full FAQ
                </Link>{" "}
                has the rest.
              </p>
            </div>
            <div className="faq-list reveal">
              {HOME_FAQ.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORDS WE USE */}
      <section className="glossary" aria-labelledby="glossary-title">
        <div className="wrap">
          <div className="eyebrow" id="glossary-title">
            <span className="dot" />
            Words we use, in plain English
          </div>
          <dl className="glossary-grid reveal">
            <div><dt>Keeper</dt><dd>Your trained listener. One person, matched to you by hand, kept for years.</dd></div>
            <div><dt>The Sit</dt><dd>Your call with your Keeper. 35 to 60 minutes, video or audio, every two weeks or every week.</dd></div>
            <div><dt>The Long Talk</dt><dd>The chat thread between calls. Text, voice notes, photos. Replies within a day.</dd></div>
            <div><dt>The Friday note</dt><dd>A few lines from your Keeper every Friday about what they noticed that week.</dd></div>
            <div><dt>Circle</dt><dd>A small-group session, six to ten people, led by a Keeper. One a month is included.</dd></div>
            <div><dt>The Bridge</dt><dd>If you ever need a therapist, we help you find a vetted one. Your Keeper stays.</dd></div>
          </dl>
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
            Tell us what you&rsquo;re carrying. Within 72 hours you&rsquo;ll have someone to carry it with, and some relief.
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

          {/* Step 1: name + email */}
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

          {/* Step 2: what brings you here */}
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

          {/* Step 3: confirmation */}
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
                While you wait, read an Ember &rarr;
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
