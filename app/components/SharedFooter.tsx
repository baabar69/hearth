import Link from "next/link";
import { HearthCairn, HearthDrawnWordmark } from "./HearthLogo";

export default function SharedFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand" style={{ alignItems: "center", gap: 8 }}>
              <HearthCairn size={42} onDark />
              <HearthDrawnWordmark height={28} color="#F2EDE5" />
            </div>
            <p>
              Peer support, paired for the long term. Hearth is not therapy,
              not a chatbot, not a crisis line. We are the people who pull up
              a chair.
            </p>
          </div>
          <div className="foot-col">
            <p className="foot-h">Hearth</p>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/why-paired">Why paired</Link>
            <Link href="/keepers">Meet the Keepers</Link>
            <Link href="/circles">Circles</Link>
            <Link href="/embers">Embers</Link>
            <Link href="/bridge">The Bridge</Link>
            <Link href="/hearth-vs-therapy">Hearth vs. therapy</Link>
            <Link href="/hearth-vs-betterhelp">Hearth vs. therapy apps</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="foot-col">
            <p className="foot-h">Guides</p>
            <Link href="/peer-support">What is peer support?</Link>
            <Link href="/learn/alternatives-to-therapy">
              Alternatives to therapy
            </Link>
            <Link href="/learn/cheap-therapy">Cheap therapy options</Link>
            <Link href="/learn/one-to-one-peer-support">
              One-to-one peer support
            </Link>
            <Link href="/learn/pay-someone-to-listen">
              Pay someone to listen
            </Link>
            <Link href="/learn/peer-support-vs-therapy">
              Peer support vs. therapy
            </Link>
            <Link href="/learn/do-i-need-therapy">Do I need therapy?</Link>
            <Link href="/learn/how-much-does-therapy-cost">
              What therapy costs
            </Link>
          </div>
          <div className="foot-col">
            <p className="foot-h">The Brand</p>
            <Link href="/about">Our story</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/press">Press</Link>
            <a
              href="https://www.linkedin.com/company/dearhearth"
              target="_blank"
              rel="me noopener noreferrer"
            >
              LinkedIn
            </a>
            <Link href="/gift">Light a Hearth</Link>
            <Link href="/faq">Questions</Link>
            <Link href="/for-keepers">Become a Keeper</Link>
            <Link href="/for-therapists">Join The Bridge</Link>
          </div>
          <div className="foot-col">
            <p className="foot-h">Members</p>
            <Link href="/trust">Trust & security</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/crisis">Crisis Resources</Link>
            <Link href="mailto:hello@dearhearth.com">Contact</Link>
          </div>
        </div>
        <div className="foot-bot">
          <span>&copy; 2026 Hearth. Made with attention.</span>
          <span className="crisis">
            Hearth is not therapy. In crisis? US and Canada 988 &middot; UK Samaritans 116 123. Hearth is not emergency support.
          </span>
        </div>
      </div>
    </footer>
  );
}
