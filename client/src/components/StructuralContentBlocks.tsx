/**
 * Sol mural language remains intact: these blocks only place approved Sol content in the prototype-aligned route sequence.
 */
import { FirstTimerContent } from "@/pages/NewToSquash";
import { MagneticButton } from "./MagneticButton";
import { WaveDivider } from "./WaveDivider";

export function PlayIntroBlocks() {
  return (
    <>
      <FirstTimerContent />
      <WaveDivider source="navy" destination="green" />
      <section className="pricing-section pricing-section--real">
        <div className="pricing-heading"><p className="eyebrow eyebrow--cyan">WANT TO TRY BEFORE YOU COMMIT?</p><h2>TASTE OF<br /><em>SOL.</em></h2></div>
        <div className="pricing-card"><div className="pricing-card__head"><span>15 DAYS</span><strong>$99</strong></div><p>Two group sessions, a court booking with a guest, and a private lesson with Bruna or Vini. Enough to properly get a feel for the place before you commit.</p><MagneticButton href="/schedule" className="button--mango">GET THE TASTE OF SOL</MagneticButton></div>
      </section>
    </>
  );
}

export function JoinContinuationBlocks() {
  return (
    <>
      <WaveDivider source="mango" destination="green" />
      <section className="pricing-section pricing-section--real">
        <div className="pricing-heading"><p className="eyebrow eyebrow--cyan">ONCE YOU'RE PLAYING</p><h2>PLAY MORE.<br /><em>PAY LESS.</em></h2></div>
        <div className="pricing-card"><div className="pricing-card__head"><span>PACKAGES</span><strong>KEEP THE RALLY GOING.</strong></div><p>Add a 5-pack for $250 and save $25.</p><MagneticButton href="/schedule" className="button--mango">SEE SESSIONS</MagneticButton></div>
      </section>
      <WaveDivider source="green" destination="navy" />
      <section className="pricing-section pricing-section--real">
        <div className="pricing-heading"><p className="eyebrow eyebrow--cyan">MEMBER AND NON-MEMBER</p><h2>ALL<br /><em>PRICES.</em></h2></div>
        <div className="pricing-card"><div className="pricing-card__head"><span>WAYS TO GET ON COURT</span><strong>WITH OR WITHOUT A MEMBERSHIP.</strong></div><div className="price-row"><span>Court Access</span><b>From $20</b></div><div className="price-row"><span>Open Play</span><b>$25 / $55</b></div><div className="price-row"><span>Clinics</span><b>$40 / $55</b></div><div className="price-row"><span>Private Lessons</span><b>$125 / $145</b></div><div className="price-row"><span>Junior Sessions</span><b>$40 / $50</b></div><MagneticButton href="/schedule" className="button--mango">BOOK A SESSION</MagneticButton></div>
      </section>
      <FirstTimerContent includeLeadingWave={false} />
    </>
  );
}

export function PlayMembershipPrompt() {
  return (
    <>
      <WaveDivider source="green" destination="navy" />
      <section className="pricing-section pricing-section--real">
        <div className="pricing-heading"><p className="eyebrow eyebrow--cyan">PLAYING OFTEN?</p><h2>JOIN THE<br /><em>CLUB.</em></h2></div>
        <div className="pricing-card"><div className="pricing-card__head"><span>SOL CLUB</span><strong>MORE TIME ON COURT.</strong></div><p>Court time every day, the sauna, cold plunge and showers, and member pricing on everything else.</p><MagneticButton href="/join" className="button--mango">SEE MEMBERSHIPS</MagneticButton></div>
      </section>
    </>
  );
}
