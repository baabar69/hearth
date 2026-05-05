import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Privacy Policy · Hearth",
  description:
    "Plain-language privacy policy. What we collect, how it's stored, what's never shared.",
};

export default function PrivacyPage() {
  return (
    <>
      <SharedNav />

      <section style={{ padding: "80px 0 40px", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Privacy Policy
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "18ch", fontSize: "clamp(40px, 5vw, 72px)" }}>
            Your privacy, plainly stated.
          </h1>
          <p
            style={{
              marginTop: 18,
              color: "var(--ink-3)",
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Last updated: May 2026
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0 100px" }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, display: "grid", gap: 56 }}>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                What we collect
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                When you create an account, we collect your name and email address. During the First Sit intake, we collect the information you share about what you&rsquo;re navigating — this is used only for Keeper matching and held with full confidentiality.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                Your Long Talk thread (messages between you and your Keeper) is stored in our system. Sit recordings are stored only if you explicitly enable opt-in recording. Session notes are stored only if you and your Keeper have agreed to note-keeping.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                We collect standard usage data (device type, browser, page visits) to improve the platform. We do not run third-party ad pixels on any authenticated pages.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Age
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Hearth is for adults. You must be 18 or older to create an account. We do not knowingly collect personal information from anyone under 18. If you become aware that a minor has created an account, email{" "}
                <a href="mailto:privacy@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  privacy@dearhearth.com
                </a>
                {" "}and we will delete it.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                How it&rsquo;s stored
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                All data is encrypted at rest and in transit using AES-256 and TLS 1.3. Our infrastructure is hosted on US-based servers that meet HIPAA-comparable security standards (even though Hearth is not a covered entity under HIPAA, we hold ourselves to the same standard because it&rsquo;s right).
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Access to member data within Hearth is restricted to: your assigned Keeper, and Hearth staff in specific documented circumstances (e.g., a safety concern that triggers mandatory reporting). We maintain access logs.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                What&rsquo;s never shared
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                We do not sell your data. Ever. To anyone.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                We do not share your personal information or session content with third parties without your explicit written consent — except in cases where we are legally required to do so (e.g., mandatory reporting of imminent harm).
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                If your Keeper refers you to a Bridge therapist, context is shared only with your explicit consent and only the specific context you agree to share.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Your controls
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                You can export all your data at any time from your account settings. This includes your Long Talk thread, session notes (if any), and intake information.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                To request deletion of your account and data, email{" "}
                <a href="mailto:privacy@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  privacy@dearhearth.com
                </a>
                . We hold data for 30 days after cancellation in case you change your mind. After 30 days, it is permanently deleted from our servers. You can also request immediate deletion at any time.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Your rights
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                Wherever you live, you have rights over your data. You can ask us to: show you what we hold on you, correct it, delete it, give you a copy in a portable format, pause our use of it, or object to a specific use. Email{" "}
                <a href="mailto:privacy@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  privacy@dearhearth.com
                </a>
                {" "}to exercise any of these. We respond within 30 days, usually faster.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                If you live in the EU or UK, the GDPR applies and the rights above are codified in law. If you are a California resident, the CCPA applies and you have the additional right to know what categories of personal information we sell or share &mdash; we do not sell or share your personal information for advertising purposes, full stop.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Cookies
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                We use session cookies for authentication and minimal analytics cookies (first-party only) to understand how the platform is used. We do not use third-party advertising cookies on any pages that require sign-in. On public pages, we use a minimal analytics script that respects Do Not Track.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Questions
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Privacy questions: email{" "}
                <a href="mailto:privacy@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  privacy@dearhearth.com
                </a>
                . We respond within 3 business days.
              </p>
            </div>

          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
