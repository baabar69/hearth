import Link from "next/link";

export default function SharedFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <span className="brand-mark" />
              <span className="brand-name" style={{ color: "var(--paper)" }}>
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
            <Link href="/how-it-works">How it works</Link>
            <Link href="/why-paired">Why paired</Link>
            <Link href="/keepers">Meet the Keepers</Link>
            <Link href="/circles">Circles</Link>
            <Link href="/embers">Embers</Link>
            <Link href="/bridge">The Bridge</Link>
            <Link href="/hearth-vs-therapy">Hearth vs. therapy</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="foot-col">
            <h5>The Brand</h5>
            <Link href="/about">Our story</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/press">Press</Link>
            <Link href="/gift">Light a Hearth</Link>
            <Link href="/faq">Questions</Link>
            <Link href="/for-keepers">Become a Keeper</Link>
            <Link href="/for-therapists">Join The Bridge</Link>
          </div>
          <div className="foot-col">
            <h5>Members</h5>
            <Link href="/sign-in">Sign in</Link>
            <Link href="/trust">Trust & security</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/crisis">Crisis Resources</Link>
            <Link href="mailto:hello@hearth.com">Contact</Link>
          </div>
        </div>
        <div className="foot-bot">
          <span>&copy; 2026 Hearth. Made with attention.</span>
          <span className="crisis">
            Hearth is not therapy. In crisis? US 988 &middot; Canada 1-866-585-0445 &middot; UK Samaritans 116 123. Hearth is not emergency support.
          </span>
        </div>
      </div>
    </footer>
  );
}
