"use client";

import { useState } from "react";
import Link from "next/link";
import SharedNav from "@/app/components/SharedNav";

/* ─── data ─────────────────────────────────────────────────────────────── */

const TOPICS = [
  { id: "grief", label: "Grief or loss" },
  { id: "family", label: "Family pressure or expectations" },
  { id: "diaspora", label: "Life between cultures" },
  { id: "identity", label: "Identity & belonging" },
  { id: "sexual_identity", label: "Sexual identity or LGBTQ+" },
  { id: "intimacy", label: "Intimacy & shame" },
  { id: "relationships", label: "Relationship stress" },
  { id: "marriage", label: "Marriage or partnership" },
  { id: "career", label: "Career & life direction" },
  { id: "anxiety", label: "Anxiety or overwhelm" },
  { id: "parenting", label: "Parenting stress" },
  { id: "loneliness", label: "Loneliness & disconnection" },
  { id: "transition", label: "Major life change" },
  { id: "trauma", label: "Difficult past experiences" },
  { id: "other", label: "Something else" },
];

const AGE_RANGES = ["Under 18", "18–24", "25–34", "35–44", "45–54", "55+"];

const COUNTRIES = [
  "United States", "Canada", "United Kingdom", "Australia",
  "India", "Pakistan", "Bangladesh", "UAE",
  "Singapore", "New Zealand", "Ireland", "Germany",
  "France", "Netherlands", "South Africa", "Other",
];

const WELLBEING_LABELS = [
  "Struggling", "Difficult", "Managing", "Okay", "Doing well",
];

const SLEEP_OPTIONS = [
  "Well — no complaints",
  "Okay — some disruptions",
  "Poorly — it's affecting me",
];

const SADNESS_OPTIONS = [
  "No, not really",
  "Sometimes, in waves",
  "Yes, it's been heavy",
];

const ANXIETY_OPTIONS = [
  "No, not really",
  "Sometimes",
  "Yes, fairly often",
];

const SAFETY_OPTIONS = [
  { id: "no", label: "No, I'm not having those thoughts" },
  { id: "sometimes", label: "Sometimes, but I'm not in danger" },
  { id: "yes", label: "Yes — I need immediate support" },
];

const PRIOR_THERAPY_OPTIONS = [
  "Yes, in the past",
  "Yes, I'm currently seeing someone",
  "No, never",
  "Prefer not to say",
];

const RELATIONSHIP_OPTIONS = [
  "Single", "In a relationship", "Married or partnered",
  "Separated or divorced", "Widowed", "It's complicated", "Prefer not to say",
];

const SPIRITUALITY_OPTIONS = [
  "Yes, it's central to who I am",
  "Somewhat — it matters but isn't everything",
  "Not really",
  "Prefer not to say",
];

const EMPLOYMENT_OPTIONS = [
  "Employed full-time", "Employed part-time", "Self-employed",
  "Student", "Not currently working", "Prefer not to say",
];

const KEEPER_GENDER_OPTIONS = ["No preference", "Woman", "Man", "Non-binary"];

const CONNECTION_OPTIONS = [
  "Video — I want to see them",
  "Audio only",
  "I'll figure it out",
];

const AVAILABILITY_OPTIONS = [
  "Early morning", "Morning", "Afternoon",
  "Evening", "Late night", "Weekends only",
];

const REFERRAL_OPTIONS = [
  "Social media", "A friend or family member", "Google or search",
  "Podcast or article", "My therapist or doctor", "Other",
];

/* ─── types ─────────────────────────────────────────────────────────────── */

interface IntakeData {
  firstName: string;
  email: string;
  ageRange: string;
  country: string;
  topics: string[];
  openContext: string;
  wellbeing: number | null;
  sleep: string;
  sadness: string;
  anxiety: string;
  safetyCheck: string;
  priorTherapy: string;
  relationshipStatus: string;
  spirituality: string;
  employment: string;
  keeperGender: string;
  connectionMode: string;
  availability: string[];
  openNote: string;
  referralSource: string;
  agreePeerSupport: boolean;
  agreeAge: boolean;
}

const INITIAL: IntakeData = {
  firstName: "", email: "", ageRange: "", country: "",
  topics: [], openContext: "",
  wellbeing: null, sleep: "", sadness: "", anxiety: "", safetyCheck: "",
  priorTherapy: "", relationshipStatus: "", spirituality: "", employment: "",
  keeperGender: "", connectionMode: "", availability: [], openNote: "",
  referralSource: "", agreePeerSupport: false, agreeAge: false,
};

const TOTAL_STEPS = 6;

/* ─── small shared pieces ───────────────────────────────────────────────── */

function Pill({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "9px 18px",
        fontFamily: "var(--mono)",
        fontSize: 13,
        letterSpacing: "0.05em",
        borderRadius: 100,
        border: selected ? "1.5px solid var(--ember)" : "1.5px solid #D6CFC6",
        background: selected ? "var(--ember)" : "transparent",
        color: selected ? "white" : "var(--ink)",
        cursor: "pointer",
        transition: "all 0.15s",
        lineHeight: 1.3,
      }}
    >
      {label}
    </button>
  );
}

function RadioPill({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontFamily: "var(--mono)",
        fontSize: 13,
        letterSpacing: "0.04em",
        borderRadius: 8,
        border: selected ? "1.5px solid var(--ember)" : "1.5px solid #D6CFC6",
        background: selected ? "#FDF3F0" : "transparent",
        color: selected ? "var(--ember)" : "var(--ink)",
        cursor: "pointer",
        transition: "all 0.15s",
        textAlign: "left" as const,
        width: "100%",
      }}
    >
      {label}
    </button>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "var(--serif)",
      fontSize: 18,
      color: "var(--ink)",
      marginBottom: 12,
      lineHeight: 1.4,
    }}>
      {children}
    </p>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "var(--mono)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase" as const,
      color: "var(--ember)",
      marginBottom: 6,
    }}>
      {children}
    </p>
  );
}

function TextInput({
  type = "text", placeholder, value, onChange, required,
}: {
  type?: string; placeholder: string; value: string;
  onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      style={{
        width: "100%",
        padding: "12px 16px",
        fontFamily: "var(--mono)",
        fontSize: 14,
        border: "1.5px solid #D6CFC6",
        borderRadius: 8,
        background: "white",
        color: "var(--ink)",
        outline: "none",
        boxSizing: "border-box" as const,
      }}
    />
  );
}

function Textarea({
  placeholder, value, onChange,
}: { placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={4}
      style={{
        width: "100%",
        padding: "12px 16px",
        fontFamily: "var(--mono)",
        fontSize: 13,
        border: "1.5px solid #D6CFC6",
        borderRadius: 8,
        background: "white",
        color: "var(--ink)",
        outline: "none",
        resize: "vertical" as const,
        lineHeight: 1.6,
        boxSizing: "border-box" as const,
      }}
    />
  );
}

/* ─── main page ─────────────────────────────────────────────────────────── */

export default function IntakePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<IntakeData>(INITIAL);

  const set = <K extends keyof IntakeData>(key: K, value: IntakeData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggleArr = (key: "topics" | "availability", id: string) =>
    setData((d) => ({
      ...d,
      [key]: (d[key] as string[]).includes(id)
        ? (d[key] as string[]).filter((x) => x !== id)
        : [...(d[key] as string[]), id],
    }));

  const canProceed = (): boolean => {
    if (step === 1) return !!(data.firstName && data.email && data.ageRange && data.country);
    if (step === 2) return data.topics.length > 0;
    if (step === 3) return !!(data.wellbeing && data.sleep && data.sadness && data.anxiety && data.safetyCheck);
    if (step === 4) return !!(data.priorTherapy && data.relationshipStatus && data.spirituality && data.employment);
    if (step === 5) return !!(data.keeperGender && data.connectionMode && data.availability.length > 0);
    if (step === 6) return !!(data.referralSource && data.agreePeerSupport && data.agreeAge);
    return false;
  };

  const handleNext = () => {
    if (step === TOTAL_STEPS) setSubmitted(true);
    else setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => s - 1);

  /* progress bar */
  const ProgressBar = () => (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em", color: "#999" }}>
          Step {step} of {TOTAL_STEPS}
        </span>
        <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em", color: "#999" }}>
          ~{TOTAL_STEPS - step + 1} min left
        </span>
      </div>
      <div style={{ height: 3, background: "#E8E2DA", borderRadius: 100, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${(step / TOTAL_STEPS) * 100}%`,
          background: "var(--ember)",
          borderRadius: 100,
          transition: "width 0.4s",
        }} />
      </div>
    </div>
  );

  /* confirmation screen */
  if (submitted) {
    return (
      <>
        <SharedNav />
        <main style={{ minHeight: "100vh", background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
          <div style={{ maxWidth: 520, textAlign: "center" }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "#FDF3F0", border: "2px solid var(--ember)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 28, margin: "0 auto 24px",
            }}>
              &#x2764;&#xfe0e;
            </div>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px,4vw,36px)", color: "var(--ink)", marginBottom: 16, lineHeight: 1.3 }}>
              {data.firstName ? `${data.firstName}, you're in the queue.` : "You're in the queue."}
            </h1>
            <p style={{ fontFamily: "var(--mono)", fontSize: 14, color: "#777", lineHeight: 1.7, marginBottom: 32 }}>
              We're reading your answers and finding your Keeper. Expect a note at <strong style={{ color: "var(--ink)" }}>{data.email}</strong> within 48 hours — we match by hand, not algorithm.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
              <Link href="/embers" style={{
                fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.06em",
                color: "var(--ember)", textDecoration: "underline",
              }}>
                While you wait — read an Ember &rarr;
              </Link>
              <Link href="/" className="btn btn-ghost" style={{ marginTop: 8 }}>
                Back to home
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  const underAge = data.ageRange === "Under 18";

  return (
    <>
      <SharedNav />
      <main style={{ minHeight: "100vh", background: "var(--paper)", paddingTop: 72 }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "48px 24px 80px" }}>
          <ProgressBar />

          {/* ── STEP 1 — About you ── */}
          {step === 1 && (
            <div>
              <Eyebrow>Step 1 — About you</Eyebrow>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,3.5vw,32px)", color: "var(--ink)", marginBottom: 8, lineHeight: 1.3 }}>
                Let&rsquo;s start here.
              </h2>
              <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "#777", marginBottom: 36, lineHeight: 1.6 }}>
                Everything you share is confidential and used only to find the right Keeper for you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <FieldLabel>What&rsquo;s your first name?</FieldLabel>
                  <TextInput
                    placeholder="First name"
                    value={data.firstName}
                    onChange={(v) => set("firstName", v)}
                    required
                  />
                </div>

                <div>
                  <FieldLabel>What&rsquo;s your email?</FieldLabel>
                  <TextInput
                    type="email"
                    placeholder="your@email.com"
                    value={data.email}
                    onChange={(v) => set("email", v)}
                    required
                  />
                  <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#999", marginTop: 6 }}>
                    We&rsquo;ll send your Keeper match here. No spam, ever.
                  </p>
                </div>

                <div>
                  <FieldLabel>How old are you?</FieldLabel>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                    {AGE_RANGES.map((r) => (
                      <Pill
                        key={r}
                        label={r}
                        selected={data.ageRange === r}
                        onClick={() => set("ageRange", r)}
                      />
                    ))}
                  </div>
                  {underAge && (
                    <div style={{
                      marginTop: 16, padding: "14px 18px",
                      background: "#FFF8E7", border: "1px solid #F5C842",
                      borderRadius: 8, fontFamily: "var(--mono)", fontSize: 13, color: "#7A6200", lineHeight: 1.6,
                    }}>
                      Hearth is currently for adults 18 and over. If you&rsquo;re under 18 and need support,
                      please reach out to{" "}
                      <a href="https://www.crisistextline.org" style={{ color: "var(--ember)" }} target="_blank" rel="noopener noreferrer">
                        Crisis Text Line
                      </a>{" "}
                      or a trusted adult.
                    </div>
                  )}
                </div>

                <div>
                  <FieldLabel>Where are you based?</FieldLabel>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                    {COUNTRIES.map((c) => (
                      <Pill
                        key={c}
                        label={c}
                        selected={data.country === c}
                        onClick={() => set("country", c)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 2 — What's weighing on you ── */}
          {step === 2 && (
            <div>
              <Eyebrow>Step 2 — What&rsquo;s weighing on you</Eyebrow>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,3.5vw,32px)", color: "var(--ink)", marginBottom: 8, lineHeight: 1.3 }}>
                What are you carrying right now?
              </h2>
              <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "#777", marginBottom: 36, lineHeight: 1.6 }}>
                Pick everything that feels true. Your Keeper will see this before your first Sit.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, marginBottom: 32 }}>
                {TOPICS.map((t) => (
                  <Pill
                    key={t.id}
                    label={t.label}
                    selected={data.topics.includes(t.id)}
                    onClick={() => toggleArr("topics", t.id)}
                  />
                ))}
              </div>

              <div>
                <FieldLabel>
                  Anything else you want to say upfront?{" "}
                  <em style={{ fontStyle: "italic", fontSize: 15, color: "#999" }}>(optional)</em>
                </FieldLabel>
                <Textarea
                  placeholder="In a sentence or two — what's happening? There's no right way to answer this."
                  value={data.openContext}
                  onChange={(v) => set("openContext", v)}
                />
              </div>
            </div>
          )}

          {/* ── STEP 3 — How you're doing ── */}
          {step === 3 && (
            <div>
              <Eyebrow>Step 3 — How you&rsquo;re doing</Eyebrow>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,3.5vw,32px)", color: "var(--ink)", marginBottom: 8, lineHeight: 1.3 }}>
                A quick check-in.
              </h2>
              <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "#777", marginBottom: 36, lineHeight: 1.6 }}>
                Honest answers help us match you with the right Keeper. There are no wrong responses.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {/* Wellbeing scale */}
                <div>
                  <FieldLabel>Overall, how would you rate your wellbeing right now?</FieldLabel>
                  <div style={{ display: "flex", gap: 8 }}>
                    {WELLBEING_LABELS.map((label, i) => {
                      const val = i + 1;
                      const sel = data.wellbeing === val;
                      return (
                        <button
                          key={val}
                          type="button"
                          onClick={() => set("wellbeing", val)}
                          style={{
                            flex: 1,
                            padding: "12px 4px",
                            fontFamily: "var(--mono)",
                            fontSize: 11,
                            letterSpacing: "0.04em",
                            borderRadius: 8,
                            border: sel ? "1.5px solid var(--ember)" : "1.5px solid #D6CFC6",
                            background: sel ? "#FDF3F0" : "transparent",
                            color: sel ? "var(--ember)" : "#777",
                            cursor: "pointer",
                            transition: "all 0.15s",
                            textAlign: "center" as const,
                            lineHeight: 1.3,
                          }}
                        >
                          <div style={{ fontSize: 18, marginBottom: 4 }}>
                            {["😔", "😕", "😐", "🙂", "😊"][i]}
                          </div>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sleep */}
                <div>
                  <FieldLabel>How would you rate your current sleeping habits?</FieldLabel>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {SLEEP_OPTIONS.map((o) => (
                      <RadioPill
                        key={o}
                        label={o}
                        selected={data.sleep === o}
                        onClick={() => set("sleep", o)}
                      />
                    ))}
                  </div>
                </div>

                {/* Sadness */}
                <div>
                  <FieldLabel>Are you currently experiencing overwhelming sadness or grief?</FieldLabel>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {SADNESS_OPTIONS.map((o) => (
                      <RadioPill
                        key={o}
                        label={o}
                        selected={data.sadness === o}
                        onClick={() => set("sadness", o)}
                      />
                    ))}
                  </div>
                </div>

                {/* Anxiety */}
                <div>
                  <FieldLabel>Are you currently experiencing anxiety, panic attacks, or persistent worry?</FieldLabel>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {ANXIETY_OPTIONS.map((o) => (
                      <RadioPill
                        key={o}
                        label={o}
                        selected={data.anxiety === o}
                        onClick={() => set("anxiety", o)}
                      />
                    ))}
                  </div>
                </div>

                {/* Safety screen */}
                <div>
                  <FieldLabel>Are you having any thoughts of harming yourself or others?</FieldLabel>
                  <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "#999", marginBottom: 12, lineHeight: 1.5 }}>
                    Hearth is not a crisis service — please answer honestly so we can point you to the right support.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {SAFETY_OPTIONS.map((o) => (
                      <RadioPill
                        key={o.id}
                        label={o.label}
                        selected={data.safetyCheck === o.id}
                        onClick={() => set("safetyCheck", o.id)}
                      />
                    ))}
                  </div>
                  {data.safetyCheck === "yes" && (
                    <div style={{
                      marginTop: 16, padding: "18px 20px",
                      background: "#FFF0F0", border: "1.5px solid #E57373",
                      borderRadius: 10, lineHeight: 1.6,
                    }}>
                      <p style={{ fontFamily: "var(--serif)", fontSize: 16, color: "#C62828", marginBottom: 8 }}>
                        Please reach out for immediate help.
                      </p>
                      <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "#555", marginBottom: 12 }}>
                        Hearth isn&rsquo;t the right resource for a crisis — but these are:
                      </p>
                      <ul style={{ fontFamily: "var(--mono)", fontSize: 13, color: "#333", lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                        <li><strong>US:</strong> 988 Suicide & Crisis Lifeline — call or text <strong>988</strong></li>
                        <li><strong>Canada:</strong> 1-866-585-0445</li>
                        <li><strong>UK:</strong> Samaritans — <strong>116 123</strong></li>
                        <li><strong>Crisis Text Line:</strong> Text HOME to <strong>741741</strong></li>
                        <li>
                          <Link href="/crisis" style={{ color: "var(--ember)" }}>
                            Full list of resources &rarr;
                          </Link>
                        </li>
                      </ul>
                      <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "#888", marginTop: 12 }}>
                        You can still complete this form — your Keeper will know you may need extra care.
                      </p>
                    </div>
                  )}
                  {data.safetyCheck === "sometimes" && (
                    <div style={{
                      marginTop: 12, padding: "14px 18px",
                      background: "#FFF8E7", border: "1px solid #F5C842",
                      borderRadius: 8, fontFamily: "var(--mono)", fontSize: 13, color: "#7A6200", lineHeight: 1.6,
                    }}>
                      We hear you. Your Keeper will know you&rsquo;re carrying something heavy.
                      If those feelings ever become urgent, please contact{" "}
                      <Link href="/crisis" style={{ color: "var(--ember)" }}>a crisis line</Link>.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 4 — A little more context ── */}
          {step === 4 && (
            <div>
              <Eyebrow>Step 4 — A little more context</Eyebrow>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,3.5vw,32px)", color: "var(--ink)", marginBottom: 8, lineHeight: 1.3 }}>
                Help us understand you.
              </h2>
              <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "#777", marginBottom: 36, lineHeight: 1.6 }}>
                These help your Keeper show up in the right way from the very first conversation.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div>
                  <FieldLabel>Have you ever been in counseling or therapy before?</FieldLabel>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {PRIOR_THERAPY_OPTIONS.map((o) => (
                      <RadioPill
                        key={o}
                        label={o}
                        selected={data.priorTherapy === o}
                        onClick={() => set("priorTherapy", o)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>What is your relationship status?</FieldLabel>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                    {RELATIONSHIP_OPTIONS.map((o) => (
                      <Pill
                        key={o}
                        label={o}
                        selected={data.relationshipStatus === o}
                        onClick={() => set("relationshipStatus", o)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>Do you consider yourself to be spiritual or religious?</FieldLabel>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {SPIRITUALITY_OPTIONS.map((o) => (
                      <RadioPill
                        key={o}
                        label={o}
                        selected={data.spirituality === o}
                        onClick={() => set("spirituality", o)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>Are you currently employed?</FieldLabel>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                    {EMPLOYMENT_OPTIONS.map((o) => (
                      <Pill
                        key={o}
                        label={o}
                        selected={data.employment === o}
                        onClick={() => set("employment", o)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 5 — Finding your Keeper ── */}
          {step === 5 && (
            <div>
              <Eyebrow>Step 5 — Finding your Keeper</Eyebrow>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,3.5vw,32px)", color: "var(--ink)", marginBottom: 8, lineHeight: 1.3 }}>
                Let&rsquo;s find your match.
              </h2>
              <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "#777", marginBottom: 36, lineHeight: 1.6 }}>
                Your Keeper is matched by hand. These preferences shape that decision.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div>
                  <FieldLabel>Do you have a preference for your Keeper&rsquo;s gender?</FieldLabel>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                    {KEEPER_GENDER_OPTIONS.map((o) => (
                      <Pill
                        key={o}
                        label={o}
                        selected={data.keeperGender === o}
                        onClick={() => set("keeperGender", o)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>How do you prefer to connect for your Sits?</FieldLabel>
                  <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "#999", marginBottom: 12 }}>
                    A Sit is your regular 35–60 min conversation with your Keeper.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {CONNECTION_OPTIONS.map((o) => (
                      <RadioPill
                        key={o}
                        label={o}
                        selected={data.connectionMode === o}
                        onClick={() => set("connectionMode", o)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>When are you typically free? <em style={{ fontStyle: "normal", color: "#999", fontSize: 15 }}>(pick all that apply)</em></FieldLabel>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                    {AVAILABILITY_OPTIONS.map((o) => (
                      <Pill
                        key={o}
                        label={o}
                        selected={data.availability.includes(o)}
                        onClick={() => toggleArr("availability", o)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>
                    Anything you&rsquo;d like your Keeper to know before you meet?{" "}
                    <em style={{ fontStyle: "italic", fontSize: 15, color: "#999" }}>(optional)</em>
                  </FieldLabel>
                  <Textarea
                    placeholder="A fear, a hope, something you've never said out loud — no pressure."
                    value={data.openNote}
                    onChange={(v) => set("openNote", v)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 6 — Almost done ── */}
          {step === 6 && (
            <div>
              <Eyebrow>Step 6 — Almost done</Eyebrow>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,3.5vw,32px)", color: "var(--ink)", marginBottom: 8, lineHeight: 1.3 }}>
                One last thing.
              </h2>
              <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "#777", marginBottom: 36, lineHeight: 1.6 }}>
                A quick read-through, then you&rsquo;re in the queue.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div>
                  <FieldLabel>How did you hear about Hearth?</FieldLabel>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                    {REFERRAL_OPTIONS.map((o) => (
                      <Pill
                        key={o}
                        label={o}
                        selected={data.referralSource === o}
                        onClick={() => set("referralSource", o)}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {/* Peer support agreement */}
                  <label style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    padding: "16px 18px",
                    border: data.agreePeerSupport ? "1.5px solid var(--ember)" : "1.5px solid #D6CFC6",
                    borderRadius: 10,
                    background: data.agreePeerSupport ? "#FDF3F0" : "white",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}>
                    <input
                      type="checkbox"
                      checked={data.agreePeerSupport}
                      onChange={(e) => set("agreePeerSupport", e.target.checked)}
                      style={{ marginTop: 2, accentColor: "var(--ember)", flexShrink: 0 }}
                    />
                    <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)", lineHeight: 1.6 }}>
                      I understand Hearth is <strong>peer support, not therapy</strong>. My Keeper is a trained companion, not a licensed clinician. For clinical care, I&rsquo;ll seek a therapist.
                    </span>
                  </label>

                  {/* Age agreement */}
                  <label style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    padding: "16px 18px",
                    border: data.agreeAge ? "1.5px solid var(--ember)" : "1.5px solid #D6CFC6",
                    borderRadius: 10,
                    background: data.agreeAge ? "#FDF3F0" : "white",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}>
                    <input
                      type="checkbox"
                      checked={data.agreeAge}
                      onChange={(e) => set("agreeAge", e.target.checked)}
                      style={{ marginTop: 2, accentColor: "var(--ember)", flexShrink: 0 }}
                    />
                    <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)", lineHeight: 1.6 }}>
                      I am at least <strong>18 years old</strong>.
                    </span>
                  </label>
                </div>

                {/* Privacy note */}
                <p style={{
                  fontFamily: "var(--mono)", fontSize: 11, color: "#999",
                  lineHeight: 1.7, textAlign: "center" as const,
                }}>
                  Your answers are confidential and shared only with your matched Keeper.{" "}
                  <Link href="/privacy" style={{ color: "var(--ember)" }}>Privacy policy</Link>{" "}
                  &middot;{" "}
                  <Link href="/terms" style={{ color: "var(--ember)" }}>Terms</Link>
                </p>
              </div>
            </div>
          )}

          {/* ── Navigation ── */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid #E8E2DA",
          }}>
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  color: "#888",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 0",
                }}
              >
                &larr; Back
              </button>
            ) : (
              <Link
                href="/"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  color: "#888",
                  textDecoration: "none",
                }}
              >
                &larr; Home
              </Link>
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed() || underAge}
              className="btn btn-primary"
              style={{
                opacity: (!canProceed() || underAge) ? 0.4 : 1,
                cursor: (!canProceed() || underAge) ? "not-allowed" : "pointer",
                minWidth: 160,
              }}
            >
              {step === TOTAL_STEPS ? "Find my Keeper →" : "Continue →"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
