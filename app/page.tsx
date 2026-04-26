"use client";

import { useEffect } from "react";

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

function HeroDots() {
  useEffect(() => {
    const dots = document.querySelectorAll(".ha-pdot");
    if (!dots.length) return;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % 6;
      dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return null;
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
  return (
    <>
      <RevealOnScroll />
      <HeroDots />
      <SmoothScroll />

      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="/" className="brand">
            <span className="brand-mark" />
            <span className="brand-name">Hearth</span>
          </a>
          <nav className="nav-links">
            <a href="#between">How it works</a>
            <a href="#keepers">Meet the Keepers</a>
            <a href="#circles">Circles</a>
            <a href="#embers">Embers</a>
            <a href="#pricing">Pricing</a>
            <a href="#stories">The Stories</a>
          </nav>
          <div className="nav-cta">
            <a href="#" className="btn btn-ghost btn-sm">
              Sign in
            </a>
            <a href="#cta" className="btn btn-primary btn-sm">
              Begin the First Sit <span className="arr">&rarr;</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Peer support, paired for the long term
              </div>
              <h1 style={{ marginTop: 24 }}>
                Pull up a chair.
                <br />
                You weren&rsquo;t meant
                <br />
                to <span className="ember-word">carry it alone.</span>
              </h1>
              <div className="hero-cta">
                <a href="#cta" className="btn btn-primary btn-lg">
                  Begin the First Sit <span className="arr">&rarr;</span>
                </a>
                <a href="#keepers" className="btn btn-ghost btn-lg">
                  Meet the Keepers
                </a>
              </div>
              <div className="hero-tag">
                <span>
                  <span className="dot" />
                  Matched Keeper in 72 hours
                </span>
                <span>
                  <span className="dot" />
                  14-day money-back
                </span>
                <span>
                  <span className="dot" />
                  Not therapy. By design.
                </span>
              </div>
            </div>

            <div className="hero-meta">
              {/* HERO ANIMATION */}
              <div className="hero-anim" aria-hidden="true">
                <div className="ha-stage">
                  <div className="ha-phone">
                    <div className="ha-status">
                      <span className="ha-time">9:42</span>
                      <span className="ha-batt" />
                    </div>
                    <div className="ha-screen">
                      {/* Scene 1: The Sit (video call) */}
                      <div
                        className="ha-scene ha-scene-video"
                        data-scene="1"
                      >
                        <div className="ha-vid-header">
                          <span className="ha-rec" />
                          <span className="ha-vid-title">
                            The Sit &middot; with Aruna
                          </span>
                          <span className="ha-vid-time">24:31</span>
                        </div>
                        <div className="ha-vid-keeper">
                          <div className="ha-portrait">
                            <Avatar id="aruna" size={120} />
                          </div>
                          <div className="ha-talking-bars">
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>
                          <span className="ha-name">
                            Aruna B. &mdash; Keeper
                          </span>
                        </div>
                        <div className="ha-vid-self">
                          <div className="ha-portrait">
                            <Avatar id="you" size={78} />
                          </div>
                          <span className="ha-name">You</span>
                        </div>
                        <div className="ha-caption">
                          &ldquo;What stayed with you since we last sat
                          together?&rdquo;
                        </div>
                      </div>

                      {/* Scene 2: The Long Talk (async chat) */}
                      <div
                        className="ha-scene ha-scene-chat"
                        data-scene="2"
                      >
                        <div className="ha-chat-head">
                          <span className="ha-chat-avatar">
                            <Avatar id="aruna" size={36} />
                          </span>
                          <div>
                            <div className="ha-chat-title">Aruna B.</div>
                            <div className="ha-chat-sub">
                              <span className="ha-dot" /> The Long Talk &middot;
                              online
                            </div>
                          </div>
                        </div>
                        <div className="ha-msg ha-msg-me" style={{ animationDelay: '0.5s' }}>
                          Amma called again. She wants me home for Diwali but
                          the way she said it&thinsp;&mdash;&thinsp;like I owe
                          her my whole November.
                        </div>
                        <div className="ha-msg ha-msg-them" style={{ animationDelay: '1.4s' }}>
                          What would it feel like to say yes only to the parts
                          you actually want?
                        </div>
                        <div className="ha-typing">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="ha-msg ha-msg-me" style={{ animationDelay: '3.2s' }}>
                          I didn&rsquo;t know I was allowed to do that.
                        </div>
                      </div>

                      {/* Scene 3: Embers */}
                      <div
                        className="ha-scene ha-scene-ember"
                        data-scene="3"
                      >
                        <div className="ha-ember-head">
                          <span className="ha-ember-flame">
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                              <path d="M8 0C8 0 2 6 2 11a6 6 0 0012 0C14 6 8 0 8 0z" fill="var(--ember)" />
                              <path d="M8 8c0 0-3 3-3 6a3 3 0 006 0c0-3-3-6-3-6z" fill="#FFB74D" />
                            </svg>
                          </span>
                          <span>Embers &middot; 3 min read</span>
                        </div>
                        <h3 className="ha-ember-title">
                          The Weight You Inherited
                        </h3>
                        <p className="ha-ember-subtitle">
                          On carrying what was never yours to hold
                        </p>
                        <div className="ha-ember-body">
                          <p>
                            Your grandmother carried silence like currency.
                          </p>
                          <p>You learned to spend it the same way.</p>
                        </div>
                        <div className="ha-ember-footer">
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path d="M1 3a2 2 0 012-2h8a2 2 0 012 2v11.5l-6-3-6 3V3z" stroke="var(--ember)" strokeWidth="1.5" fill="none" />
                          </svg>
                          <span>Saved to your Hearth</span>
                        </div>
                      </div>

                      {/* Scene 4: Friday Reflection */}
                      <div
                        className="ha-scene ha-scene-friday"
                        data-scene="4"
                      >
                        <div className="ha-friday-stamp">
                          Friday Reflection &middot; from Aruna
                        </div>
                        <div className="ha-friday-author">
                          <div className="ha-friday-avatar">
                            <Avatar id="aruna" size={38} />
                          </div>
                          <div>
                            <div className="ha-friday-name">
                              Aruna Bhattacharya
                            </div>
                            <div className="ha-friday-when">
                              Friday &middot; 7:14 AM
                            </div>
                          </div>
                        </div>
                        <div className="ha-friday-body">
                          <p>You said you wanted to stop performing.</p>
                          <p>
                            I noticed you laughed three times this week when
                            something wasn&rsquo;t actually funny.
                          </p>
                          <p>
                            Bring that to Monday&rsquo;s Sit if you want.
                          </p>
                        </div>
                        <div className="ha-seal">&#10038;</div>
                      </div>

                      {/* Scene 5: Circle Gathering */}
                      <div
                        className="ha-scene ha-scene-circle"
                        data-scene="5"
                      >
                        <div className="ha-circle-head">
                          <span className="ha-dot" /> Tonight&rsquo;s Circle
                          &middot; Diaspora Mothers
                        </div>
                        <div className="ha-circle-grid">
                          <div className="ha-circle-tile">
                            <div className="ha-portrait">
                              <Avatar id="aruna" size={80} />
                            </div>
                            <span className="ha-circle-host">HOST</span>
                          </div>
                          <div className="ha-circle-tile">
                            <div className="ha-portrait">
                              <Avatar id="femaleA" size={80} />
                            </div>
                          </div>
                          <div className="ha-circle-tile">
                            <div className="ha-portrait">
                              <Avatar id="maleA" size={80} />
                            </div>
                          </div>
                          <div className="ha-circle-tile">
                            <div className="ha-portrait">
                              <Avatar id="maleB" size={80} />
                            </div>
                          </div>
                          <div className="ha-circle-tile">
                            <div className="ha-portrait">
                              <Avatar id="femaleB" size={80} />
                            </div>
                          </div>
                          <div className="ha-circle-tile">
                            <div className="ha-portrait">
                              <Avatar id="you" size={80} />
                            </div>
                            <span
                              className="ha-circle-host"
                              style={{ background: "var(--sage)" }}
                            >
                              YOU
                            </span>
                          </div>
                        </div>
                        <div className="ha-circle-cap">
                          &ldquo;The mother you became, the mother you
                          had.&rdquo;
                        </div>
                        <div className="ha-circle-count">
                          6 of 8 gathered
                        </div>
                      </div>

                      {/* Scene 6: CTA */}
                      <div className="ha-scene ha-scene-cta" data-scene="6">
                        <div className="ha-cta-avatar">
                          <Avatar id="aruna" size={64} />
                        </div>
                        <div className="ha-cta-tending">
                          Aruna is <em>tending</em> a spot for you
                        </div>
                        <div className="ha-cta-price">
                          From $29&thinsp;/&thinsp;week
                        </div>
                        <div className="ha-cta-btn">
                          Begin with The First Sit
                        </div>
                        <div className="ha-cta-match">
                          Matched within 72 hours
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating ember sparks */}
                  <span className="ha-spark s1" />
                  <span className="ha-spark s2" />
                  <span className="ha-spark s3" />
                  <span className="ha-spark s4" />
                </div>

                {/* Scene progress dots */}
                <div className="ha-dots">
                  <span className="ha-pdot active" data-i="1" />
                  <span className="ha-pdot" data-i="2" />
                  <span className="ha-pdot" data-i="3" />
                  <span className="ha-pdot" data-i="4" />
                  <span className="ha-pdot" data-i="5" />
                  <span className="ha-pdot" data-i="6" />
                </div>
                <div className="ha-cap">
                  A week with your Keeper
                </div>
              </div>
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

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="wrap">
          <div className="trust-grid reveal">
            <div className="trust-item">
              <div className="trust-icon">{"\u2260"}</div>
              <div>
                <div className="eyebrow">
                  <span className="dot" />
                  Is this therapy? No.
                </div>
                <p
                  style={{
                    marginTop: 10,
                    color: "var(--ink-2)",
                    fontSize: 15,
                    lineHeight: 1.55,
                  }}
                >
                  Hearth is peer support &mdash; not therapy, not medical
                  advice. We say it plainly because the difference is a
                  feature, not a limitation. When something needs a clinician,
                  your Keeper walks you to The Bridge.
                </p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">14</div>
              <div>
                <div className="eyebrow">
                  <span className="dot" />
                  14-day money-back
                </div>
                <p
                  style={{
                    marginTop: 10,
                    color: "var(--ink-2)",
                    fontSize: 15,
                    lineHeight: 1.55,
                  }}
                >
                  If the first Sit doesn&rsquo;t feel right, full refund. No
                  exit interview, no friction. Cancel any time in one click
                  &mdash; Click-to-Cancel, no dark patterns.
                </p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">{"\u2713"}</div>
              <div>
                <div className="eyebrow">
                  <span className="dot" />
                  Every Keeper vetted
                </div>
                <p
                  style={{
                    marginTop: 10,
                    color: "var(--ink-2)",
                    fontSize: 15,
                    lineHeight: 1.55,
                  }}
                >
                  120-hour Keeper training. Cultural fluency review. Crisis
                  protocol certification. Monthly peer supervision.
                  Background-checked. Paid professionals &mdash; not
                  volunteers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRING IT HERE */}
      <section className="bring" id="bring">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                What people bring here
              </div>
              <h2 style={{ marginTop: 18 }}>
                The weight that doesn&rsquo;t fit{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  anywhere else.
                </span>
              </h2>
            </div>
            <p className="lede">
              Not diagnoses. Not emergencies. The real, recurring weight of a
              life between cultures, families, and expectations &mdash; the
              things you carry every week.
            </p>
          </div>

          <div className="bring-grid reveal">
            <div className="bring-card">
              <div className="bring-icon">{"\u2302"}</div>
              <h4>Family pressure</h4>
              <p>
                The call that ruins your Sunday. Expectations that don&rsquo;t
                translate. Parents who love you in a language that feels like
                control.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2736"}</div>
              <h4>Grief &amp; loss</h4>
              <p>
                The kind that arrives on time and the kind that shows up ten
                years late. Losing people, places, versions of yourself.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2661"}</div>
              <h4>Caregiving burnout</h4>
              <p>
                Holding everyone else together while quietly falling apart.
                The guilt of needing your own chair.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2316"}</div>
              <h4>Diaspora identity</h4>
              <p>
                Too much of one thing, not enough of the other. Code-switching
                so often you forget which one is real.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2318"}</div>
              <h4>Career crossroads</h4>
              <p>
                The job your family wanted vs. the life you actually want.
                Success that feels hollow. Starting over at 35.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u29BF"}</div>
              <h4>Relationship weight</h4>
              <p>
                The things you can&rsquo;t say to the person you sleep next to.
                Partnerships bending under unspoken rules.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2609"}</div>
              <h4>Loneliness</h4>
              <p>
                Not the kind that means you have no friends. The kind that means
                nobody really knows the full version.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2740"}</div>
              <h4>Wedding season</h4>
              <p>
                The questions. The comparisons. The timeline your family runs
                that you never agreed to.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2726"}</div>
              <h4>Raising kids between worlds</h4>
              <p>
                Discipline styles that clash. In-laws with opinions. Teaching
                your kids a culture you&rsquo;re still figuring out yourself.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2307"}</div>
              <h4>Parenting guilt</h4>
              <p>
                Losing your patience and then losing sleep over it.
                The gap between the parent you planned to be and the one who
                showed up today.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2747"}</div>
              <h4>Your kid is struggling</h4>
              <p>
                Anxiety at school. Big feelings you don&rsquo;t know how to
                hold. The fear that you&rsquo;re passing something down.
              </p>
            </div>
            <div className="bring-card">
              <div className="bring-icon">{"\u2312"}</div>
              <h4>New parenthood</h4>
              <p>
                The identity shift nobody warned you about. A relationship
                reshaped overnight. Needing village but having Wi-Fi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Pull up to the Hearth <span className="pip" /> Bring it to the
            Hearth <span className="pip" /> Some things deserve the long talk{" "}
            <span className="pip" /> The elder&rsquo;s house, on your phone{" "}
            <span className="pip" /> You weren&rsquo;t meant to carry it
            alone <span className="pip" />
          </span>
          <span>
            Pull up to the Hearth <span className="pip" /> Bring it to the
            Hearth <span className="pip" /> Some things deserve the long talk{" "}
            <span className="pip" /> The elder&rsquo;s house, on your phone{" "}
            <span className="pip" /> You weren&rsquo;t meant to carry it
            alone <span className="pip" />
          </span>
        </div>
      </div>

      {/* THE SPACE BETWEEN */}
      <section className="between" id="between">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                The space between
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
              Friends mean well, but they get tired. Therapists are clinical,
              expensive, and not built for the everyday weight. A Keeper is a
              third thing &mdash; older, attentive, consistent &mdash; that
              most of us no longer have.
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
                  Trained, consistent, culturally fluent. Yours, for years.
                </h3>
                <p>
                  One person. Same chair every week. Lets your sentence finish.
                  Notices the patterns you can&rsquo;t see yet.
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
                <span className="pip" /> Routed via The Bridge when needed
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
                    Bengali &middot; English &middot; Hindi
                  </div>
                </div>
                <p className="keeper-bio">
                  &ldquo;I was the cousin people called when something
                  didn&rsquo;t make sense yet. I trained as a counselor, then
                  realized what most people needed first wasn&rsquo;t a session
                  &mdash; it was a chair, a long evening, and someone who
                  wasn&rsquo;t tired of them.&rdquo;
                </p>
                <div className="keeper-tags">
                  <span className="tag">Diaspora identity</span>
                  <span className="tag">Caregiving</span>
                  <span className="tag">Family pressure</span>
                  <span className="tag">Career-cultural</span>
                </div>
                <div className="keeper-cta">
                  <span className="keeper-langs">
                    At the Hearth &mdash; Aruna&rsquo;s profile
                  </span>
                  <a
                    href="#"
                    className="btn btn-ghost"
                    style={{ padding: "9px 14px", fontSize: 12.5 }}
                  >
                    View profile <span className="arr">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="keeper-copy reveal">
              <div className="eyebrow">
                <span className="dot" />
                What a Keeper is
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
                Keepers are trained companions rooted in cultures where the
                village elder, trusted aunt, and community wise-person
                traditions are still alive. They are paid professionals &mdash;
                not volunteers &mdash; and they stay yours.
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
                    <h4>
                      Trained, not credentialed in the clinical sense.
                    </h4>
                    <p>
                      Hearth&rsquo;s Keeper training covers listening,
                      cultural fluency, scope, and crisis protocol &mdash; and
                      what to hand to The Bridge.
                    </p>
                  </div>
                </div>
                <div className="kpoint">
                  <span className="num">03</span>
                  <div>
                    <h4>
                      Speaks your languages &mdash; and your unspoken ones.
                    </h4>
                    <p>
                      Diaspora context is the default, not the exception. The
                      half-things you don&rsquo;t have to translate.
                    </p>
                  </div>
                </div>
                <div className="kpoint">
                  <span className="num">04</span>
                  <div>
                    <h4>Friday reflections, every week.</h4>
                    <p>
                      &ldquo;What stayed with me from this week&rdquo; &mdash;
                      a short note from your Keeper, sent every Friday. A brand
                      signature.
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
                <a href="#" className="btn btn-primary">
                  Browse all Keepers <span className="arr">&rarr;</span>
                </a>
                <a href="#" className="btn btn-ghost">
                  How Pairing works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                How it works
              </div>
              <h2 style={{ marginTop: 18 }}>
                Four simple steps. Then a chair that&rsquo;s{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  always yours.
                </span>
              </h2>
            </div>
            <p className="lede">
              No streaks. No badges. No optimizing your feelings. Just a Sit on
              the calendar, a Keeper who knows the shape of your week, and the
              Long Talk in between.
            </p>
          </div>

          <div className="steps reveal">
            <div className="step">
              <div className="num">01 &mdash; INTAKE</div>
              <div className="glyph">&#10038;</div>
              <h3>The First Sit</h3>
              <p>
                A 12-minute intake. Three short screeners. We listen for what
                you&rsquo;re carrying, and what kind of company will actually
                help.
              </p>
            </div>
            <div className="step">
              <div className="num">02 &mdash; PAIRING</div>
              <div className="glyph">&#9680;</div>
              <h3>Meet your Keeper</h3>
              <p>
                We hand-match you with a Keeper based on language, lived
                context, and the themes you carry. 72-hour pairing or we keep
                looking.
              </p>
            </div>
            <div className="step">
              <div className="num">03 &mdash; SIT</div>
              <div className="glyph">&#9004;</div>
              <h3>The weekly Sit</h3>
              <p>
                35&ndash;60 minutes on video. Arrival, long listening, pattern
                noticing, closing ritual. No notes unless you want them.
              </p>
            </div>
            <div className="step">
              <div className="num">04 &mdash; TEND</div>
              <div className="glyph">&#8767;</div>
              <h3>The Long Talk</h3>
              <p>
                An async thread between Sits &mdash; text, voice, photos. Slow
                on purpose. Friday reflections, always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                What you get
              </div>
              <h2 style={{ marginTop: 18 }}>Five rooms in the same house.</h2>
            </div>
            <p className="lede">
              The Sit, the Long Talk, Circles, Embers, and &mdash; when needed
              &mdash; the Bridge. Built to hold whatever stage of your life you
              walk in with.
            </p>
          </div>

          <div className="services-grid reveal">
            {/* Long Talk */}
            <div className="svc span-7">
              <div>
                <div className="label">The Long Talk &middot; Async chat</div>
                <h3>
                  Some things deserve <em>the long talk.</em>
                </h3>
                <p>
                  A persistent thread between you and your Keeper. Text, voice
                  notes, photos, links. Replies within 24 hours on Hearthside,
                  4 hours on Hearth Deep. Slow on purpose.
                </p>
                <div className="svc-vis" style={{ background: "var(--paper)" }}>
                  <div className="chat-time">Wed &middot; 9:42 PM</div>
                  <div className="chat-bubble me">
                    My mother brought up the engagement again. I don&rsquo;t
                    know how to be honest without lighting the whole evening on
                    fire.
                  </div>
                  <div className="chat-time">Thu &middot; 8:14 AM</div>
                  <div className="chat-bubble them">
                    Heard. Two questions before you decide anything: what does{" "}
                    <i>she</i> think she&rsquo;s protecting? And what&rsquo;s
                    the smallest true thing you can say tonight?
                  </div>
                  <div className="friday">
                    <span className="stamp">
                      Friday reflection &middot; from Aruna
                    </span>
                    You said you wanted to stop performing. I noticed you
                    laughed three times this week when something wasn&rsquo;t
                    actually funny. Bring that to Monday&rsquo;s Sit if you
                    want.
                  </div>
                </div>
              </div>
              <div className="svc-foot">
                <span className="more">More about The Long Talk</span>
              </div>
            </div>

            {/* The Sit */}
            <div className="svc span-5">
              <div>
                <div className="label">The Sit &middot; 1:1 video</div>
                <h3>
                  35&ndash;60 minutes.{" "}
                  <em>The same chair, every week.</em>
                </h3>
                <p>
                  Arrival, long listening, pattern noticing, closing ritual.
                  Audio-only if the camera feels like too much. Recording is
                  opt-in and yours.
                </p>
                <div className="svc-vis">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        aspectRatio: "1",
                        background:
                          "repeating-linear-gradient(135deg,#D9C8A8 0 6px,#CDBA96 6px 12px)",
                        borderRadius: 6,
                        border: "1px solid var(--rule)",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 8,
                          bottom: 6,
                          fontFamily: "var(--mono)",
                          fontSize: 9,
                          color: "#1A171477",
                          letterSpacing: "0.14em",
                        }}
                      >
                        YOU
                      </span>
                    </div>
                    <div
                      style={{
                        aspectRatio: "1",
                        background:
                          "repeating-linear-gradient(135deg,#C8B898 0 6px,#BCA983 6px 12px)",
                        borderRadius: 6,
                        border: "1px solid var(--rule)",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 8,
                          bottom: 6,
                          fontFamily: "var(--mono)",
                          fontSize: 9,
                          color: "#1A171477",
                          letterSpacing: "0.14em",
                        }}
                      >
                        KEEPER
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 14,
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase" as const,
                      color: "var(--ink-3)",
                    }}
                  >
                    <span style={{ color: "var(--ember)" }}>
                      &#9679; Live &middot; 38:12
                    </span>
                    <span>Closing in 8 min</span>
                  </div>
                </div>
              </div>
              <div className="svc-foot">
                <span className="more">More about The Sit</span>
              </div>
            </div>

            {/* Circles */}
            <div className="svc span-6">
              <div>
                <div className="label">
                  Circles &middot; 4&ndash;8 week cohorts
                </div>
                <h3>
                  Six to ten people.{" "}
                  <em>One shared weather pattern.</em>
                </h3>
                <p>
                  Diaspora Mothers. Caregiving. Grief. The First Year After.
                  Wedding Season. Facilitated by a Keeper, never a clinician.
                </p>
              </div>
              <div className="svc-foot">
                <span className="more">Browse upcoming Circles</span>
              </div>
            </div>

            {/* Embers */}
            <div className="svc span-6" id="embers">
              <div>
                <div className="label">Embers &middot; Library</div>
                <h3>
                  Short pieces. <em>Specific. Adult.</em>
                </h3>
                <p>
                  Not generic wellness content. Written by Keepers and
                  contributing essayists with cultural specificity. 3&ndash;7
                  minute reads or listens.
                </p>
                <div className="ember-list">
                  <div className="ember-row">
                    <span className="cat">Family Stuff</span>
                    <span className="ttl">
                      When your parents call it &ldquo;concern&rdquo;
                    </span>
                    <span className="dur">6 MIN</span>
                  </div>
                  <div className="ember-row">
                    <span className="cat">The In-Between</span>
                    <span className="ttl">
                      The Sunday before everything changes
                    </span>
                    <span className="dur">4 MIN</span>
                  </div>
                  <div className="ember-row">
                    <span className="cat">Heavy Things</span>
                    <span className="ttl">
                      Grief that arrives ten years late
                    </span>
                    <span className="dur">7 MIN</span>
                  </div>
                </div>
              </div>
              <div className="svc-foot">
                <span className="more">Open the Embers library</span>
              </div>
            </div>

            {/* Bridge */}
            <div className="svc span-7">
              <div>
                <div className="label">
                  The Bridge &middot; Clinical referral
                </div>
                <h3>
                  When peer support isn&rsquo;t the right tool,{" "}
                  <em>your Keeper walks you over.</em>
                </h3>
                <p>
                  Hearth is not therapy. We say it plainly. When something
                  needs a clinician, your Keeper makes a warm handoff to a
                  vetted, culturally fluent therapist on The Bridge &mdash; not
                  a directory dump, not a goodbye.
                </p>
                <div className="bridge-vis">
                  <div className="bridge-node">
                    <div className="lbl">Member</div>
                    <div className="nm">You</div>
                  </div>
                  <div className="bridge-arrow">&rarr;</div>
                  <div
                    className="bridge-node"
                    style={{
                      background: "var(--ink)",
                      color: "var(--paper)",
                      borderColor: "var(--ink)",
                    }}
                  >
                    <div className="lbl" style={{ color: "#C9B894" }}>
                      Hearth
                    </div>
                    <div className="nm">Your Keeper</div>
                  </div>
                  <div className="bridge-arrow">&rarr;</div>
                  <div className="bridge-node">
                    <div className="lbl">The Bridge</div>
                    <div className="nm">Vetted therapist</div>
                  </div>
                </div>
              </div>
              <div className="svc-foot">
                <span className="more">More about The Bridge</span>
              </div>
            </div>

            {/* Light a Hearth */}
            <div className="svc span-5">
              <div>
                <div className="label">Light a Hearth &middot; Gifting</div>
                <h3>
                  Give someone <em>a chair.</em>
                </h3>
                <p>
                  Gift one month of Hearthside ($116). They get matched, they
                  get the Long Talk, they get the Friday reflection. You get to
                  do something useful at the right moment.
                </p>
              </div>
              <div className="svc-foot">
                <span className="more">Light a Hearth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="stories" id="stories">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                The Stories
              </div>
              <h2 style={{ marginTop: 18 }}>
                Members, in their own words.
              </h2>
            </div>
            <p className="lede">
              First names. Real situations. The range of life Hearth was built
              to hold &mdash; grief, family, identity, the in-between.
            </p>
          </div>

          <div className="stories-grid reveal">
            <div className="story feature">
              <div className="quote">
                My therapist did the work she was built for. My Keeper is the
                one who calls the shape of the week. I didn&rsquo;t know I was
                allowed to have both.
              </div>
              <div className="who">
                <span>AYESHA &mdash; NAVIGATING GRIEF</span>
                <span>HEARTHSIDE &middot; 2 YRS</span>
              </div>
            </div>
            <div className="story dark">
              <div className="quote">
                The Friday reflection is the thing I didn&rsquo;t know I was
                waiting for all week. My Keeper noticed something about my
                mother I&rsquo;d been carrying for a decade and never said out
                loud.
              </div>
              <div className="who">
                <span>RAVI &mdash; FAMILY &middot; CAREER</span>
                <span>HEARTH DEEP &middot; 8 MO</span>
              </div>
            </div>
            <div className="story">
              <div className="quote">
                I was burning out my best friend. Hearth gave me a chair that
                wasn&rsquo;t her.
              </div>
              <div className="who">
                <span>PRIYA &mdash; CAREGIVING</span>
                <span>HEARTHSIDE</span>
              </div>
            </div>
            <div className="story">
              <div className="quote">
                After my dad died, the Grief Circle was the only place where
                nobody flinched when I said the actual sentence.
              </div>
              <div className="who">
                <span>HASSAN &mdash; GRIEF CIRCLE</span>
                <span>HEARTHSIDE</span>
              </div>
            </div>
            <div className="story">
              <div className="quote">
                A Keeper who&rsquo;d lived the wedding-season pressure herself.
                Three months later I&rsquo;m still quoting her back to myself.
              </div>
              <div className="who">
                <span>MEERA &mdash; WEDDING SEASON</span>
                <span>HEARTH DEEP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIRCLES */}
      <section className="circles-section" id="circles">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow" style={{ color: "#C9B894" }}>
                <span className="dot" />
                Circles &middot; Currently gathering
              </div>
              <h2 style={{ marginTop: 18 }}>
                Six to ten people.{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  A shared weather.
                </span>
              </h2>
            </div>
            <p className="lede" style={{ color: "#D8C8AA" }}>
              A Circle is not group therapy. It&rsquo;s the kitchen table at
              the right house. 4&ndash;8 weeks, one Keeper facilitating, themes
              specific enough to actually land.
            </p>
          </div>

          <div className="circle-list reveal">
            <div className="circle">
              <div>
                <div className="theme">Diaspora Mothers</div>
                <h3>The mother you became, the mother you had.</h3>
                <p>
                  For first- and second-generation mothers parenting between
                  two unspoken rulebooks.
                </p>
              </div>
              <div className="meta">
                <span>
                  <span className="dot" />3 spots &middot; Starts May 6
                </span>
                <span>SARAH W.</span>
              </div>
            </div>
            <div className="circle full">
              <div>
                <div className="theme">Grief Circle</div>
                <h3>
                  Late grief. Out-of-order grief. The kind nobody named.
                </h3>
                <p>
                  For losses the world rushed you past. Open invitation, no
                  timeline required.
                </p>
              </div>
              <div className="meta">
                <span>
                  <span className="dot" />
                  Full &middot; Waitlist open
                </span>
                <span>HASSAN A.</span>
              </div>
            </div>
            <div className="circle">
              <div>
                <div className="theme">Career-Cultural</div>
                <h3>
                  What you owe your parents vs. what you owe yourself.
                </h3>
                <p>
                  For the career conversation that&rsquo;s actually a family
                  conversation in disguise.
                </p>
              </div>
              <div className="meta">
                <span>
                  <span className="dot" />5 spots &middot; Starts May 13
                </span>
                <span>JASMINE C.</span>
              </div>
            </div>
            <div className="circle">
              <div>
                <div className="theme">Wedding Season</div>
                <h3>Six weddings, one nervous system.</h3>
                <p>
                  A short, seasonal Circle for the months when the questions
                  multiply.
                </p>
              </div>
              <div className="meta">
                <span>
                  <span className="dot" />2 spots &middot; Starts May 20
                </span>
                <span>MARGARET H.</span>
              </div>
            </div>
            <div className="circle">
              <div>
                <div className="theme">Caregiving</div>
                <h3>You became the parent. Now what.</h3>
                <p>
                  For adult children parenting their own parents, with the
                  cultural specifics named.
                </p>
              </div>
              <div className="meta">
                <span>
                  <span className="dot" />4 spots &middot; Starts Jun 3
                </span>
                <span>DAVID C.</span>
              </div>
            </div>
            <div className="circle">
              <div>
                <div className="theme">First Year After</div>
                <h3>The first year after the thing.</h3>
                <p>
                  After a divorce, a death, a leaving. The year nobody designs
                  for.
                </p>
              </div>
              <div className="meta">
                <span>
                  <span className="dot" />6 spots &middot; Starts Jun 10
                </span>
                <span>AISHA M.</span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 36,
              flexWrap: "wrap" as const,
              gap: 16,
            }}
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                color: "#9C8E78",
              }}
            >
              1 Circle/month included on Hearthside &middot; 2 included on
              Hearth Deep &middot; Single passes $35
            </p>
            <a
              href="#"
              className="btn btn-primary"
              style={{ background: "var(--ember)" }}
            >
              All upcoming Circles <span className="arr">&rarr;</span>
            </a>
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
                Two tiers.{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  No streaks. No upsells.
                </span>
              </h2>
            </div>
            <p className="lede">
              14-day money-back guarantee. If the first Sit doesn&rsquo;t feel
              right, full refund &mdash; no exit interview, no friction. Cancel
              any time, in one click.
            </p>
          </div>

          <div className="price-grid reveal">
            <div className="price">
              <div className="plan">Standard</div>
              <div className="name">
                <em>Hearthside</em>
              </div>
              <div className="pp">
                <span className="num">$29</span>
                <span className="per">
                  / week &middot; billed monthly &middot; ~$116/mo &middot; or
                  $999/yr
                </span>
              </div>
              <ul>
                <li>
                  Matched Keeper &mdash; paired in 72 hours or we keep looking
                </li>
                <li>
                  One 35&ndash;60 min Sit every week, video or audio
                </li>
                <li>
                  Unlimited Long Talk &middot; 24-hour Keeper response window
                </li>
                <li>
                  Friday reflection from your Keeper, every week
                </li>
                <li>Full Embers library access</li>
                <li>One Circle per month included</li>
              </ul>
              <a href="#cta" className="btn btn-primary">
                Begin with Hearthside <span className="arr">&rarr;</span>
              </a>
              <p className="mb">14-day money-back &middot; cancel any time</p>
            </div>

            <div className="price deep">
              <div className="plan">Premium</div>
              <div className="name">
                <em>Hearth Deep</em>
              </div>
              <div className="pp">
                <span className="num" style={{ color: "var(--paper)" }}>
                  $49
                </span>
                <span className="per">
                  / week &middot; billed monthly &middot; ~$196/mo &middot; or
                  $1,699/yr
                </span>
              </div>
              <ul>
                <li>Everything in Hearthside</li>
                <li>Two Sits per week</li>
                <li>
                  Priority Long Talk &mdash; 4-hour Keeper response
                </li>
                <li>Two Circles per month included</li>
                <li>
                  Anniversary rituals &mdash; yearly meaning-making with your
                  Keeper
                </li>
                <li>Bridge therapist matching, when needed</li>
              </ul>
              <a
                href="#cta"
                className="btn btn-primary"
                style={{ background: "var(--ember)" }}
              >
                Begin with Hearth Deep <span className="arr">&rarr;</span>
              </a>
              <p className="mb">14-day money-back &middot; cancel any time</p>
            </div>
          </div>

          <div className="alacarte reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />&Agrave; la carte
              </div>
              <p
                style={{
                  marginTop: 12,
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.2,
                }}
              >
                Extra Sit{" "}
                <span style={{ color: "var(--ember)" }}>$35</span>
              </p>
              <p
                style={{
                  marginTop: 6,
                  color: "var(--ink-3)",
                  fontSize: 13.5,
                }}
              >
                Add a Sit when the week needs it.
              </p>
            </div>
            <div>
              <div className="eyebrow">
                <span className="dot" />&Agrave; la carte
              </div>
              <p
                style={{
                  marginTop: 12,
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.2,
                }}
              >
                Couples Sit{" "}
                <span style={{ color: "var(--ember)" }}>$59</span>
              </p>
              <p
                style={{
                  marginTop: 6,
                  color: "var(--ink-3)",
                  fontSize: 13.5,
                }}
              >
                Bring a partner, sibling, or parent.
              </p>
            </div>
            <div>
              <div className="eyebrow">
                <span className="dot" />&Agrave; la carte
              </div>
              <p
                style={{
                  marginTop: 12,
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.2,
                }}
              >
                Single Circle{" "}
                <span style={{ color: "var(--ember)" }}>$35</span>
              </p>
              <p
                style={{
                  marginTop: 6,
                  color: "var(--ink-3)",
                  fontSize: 13.5,
                }}
              >
                A 4&ndash;8 week cohort, no membership required.
              </p>
            </div>
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Gifting
              </div>
              <p
                style={{
                  marginTop: 12,
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.2,
                }}
              >
                Light a Hearth{" "}
                <span style={{ color: "var(--ember)" }}>$116</span>
              </p>
              <p
                style={{
                  marginTop: 6,
                  color: "var(--ink-3)",
                  fontSize: 13.5,
                }}
              >
                One month of Hearthside, given to someone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="origin">
        <div className="wrap">
          <div className="origin-grid">
            <div className="reveal">
              <div className="eyebrow">
                <span className="dot" />
                Why Hearth exists
              </div>
              <h2 style={{ marginTop: 20 }}>
                The elder&rsquo;s house, on your phone.
              </h2>
              <p
                style={{
                  marginTop: 22,
                  color: "var(--ink-2)",
                  fontSize: 17,
                  maxWidth: "42ch",
                }}
              >
                Hearth was built for diaspora communities in the US and Canada
                &mdash; for people from cultures where the village elder,
                trusted aunt, or community wise-person tradition is alive in
                memory but absent in modern life.
              </p>
              <a
                href="#"
                className="btn btn-ghost"
                style={{ marginTop: 24 }}
              >
                Read our story <span className="arr">&rarr;</span>
              </a>
            </div>
            <div className="letter reveal">
              <p>
                &ldquo;In villages, when life got heavy, you walked to the
                elder&rsquo;s house. There was always a fire, always tea,
                always a person who&rsquo;d lived more than you. They
                didn&rsquo;t have credentials. They had time, attention, and
                the patience to let your sentence finish.&rdquo;
              </p>
              <p>
                &ldquo;Modern life has stripped that away. We have therapists
                for the clinical things and friends for the easy things, but
                for everything in between &mdash; the grief, the half-formed
                worries, the family questions that don&rsquo;t fit on a couch
                &mdash; most of us have nobody.&rdquo;
              </p>
              <p>
                &ldquo;Hearth is that elder&rsquo;s house, on your phone, in
                any language. We are the people who pull up a chair.&rdquo;
              </p>
              <span className="sig">&mdash; Founder&rsquo;s letter</span>
            </div>
          </div>
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
            The First Sit takes about 12 minutes
          </div>
          <h2 style={{ marginTop: 18 }}>
            Some things <em>deserve</em>
            <br />
            the long talk.
          </h2>
          <p className="sub">
            Pull up a chair. Your Keeper is on the other side.
          </p>
          <div className="cta-row">
            <a href="#" className="btn btn-primary btn-lg">
              Begin the First Sit <span className="arr">&rarr;</span>
            </a>
            <a href="#" className="btn btn-ghost btn-lg">
              Light a Hearth for someone
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="brand">
                <span className="brand-mark" />
                <span
                  className="brand-name"
                  style={{ color: "var(--paper)" }}
                >
                  Hearth
                </span>
              </div>
              <p>
                Peer support, paired for the long term. Hearth is not therapy,
                not a chatbot, not a crisis line. We are the people who pull up
                a chair.
              </p>
            </div>
            <div className="foot-col">
              <h5>Hearth</h5>
              <a href="#">How it works</a>
              <a href="#">Meet the Keepers</a>
              <a href="#">Circles</a>
              <a href="#">Embers</a>
              <a href="#">The Bridge</a>
            </div>
            <div className="foot-col">
              <h5>The Brand</h5>
              <a href="#">Our story</a>
              <a href="#">The Stories</a>
              <a href="#">The Tea &mdash; free content</a>
              <a href="#">Pricing</a>
              <a href="#">Light a Hearth</a>
            </div>
            <div className="foot-col">
              <h5>Members</h5>
              <a href="#">Sign in</a>
              <a href="#">Become a Keeper</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="foot-bot">
            <span>&copy; 2026 Hearth. Made with attention.</span>
            <span className="crisis">
              In crisis? Call or text 988 (US) &middot; 988 (Canada). Hearth is
              not emergency support.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
