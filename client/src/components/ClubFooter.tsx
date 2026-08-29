/**
 * Sun-bleached Court Club design: the footer closes the promenade as a rounded tropical nightcap, not a utility shelf.
 */
import { Link } from "wouter";
import { MagneticButton } from "./MagneticButton";
import { PLAYBYPOINT_BOOKING_URL } from "@/lib/booking";

const logoSrc = "/manus-storage/sol-squash-logo_dd364204.png";

export function ClubFooter() {
  const returnToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <footer className="club-footer">
      <div className="club-footer__mural-mark" aria-hidden="true" />
      <div className="club-footer__main">
        <img src={logoSrc} alt="Sol Squash" className="club-footer__logo" />
        <p className="club-footer__promise">Come for the squash. Stay for everything around it.</p>
        <MagneticButton href={PLAYBYPOINT_BOOKING_URL} className="button--mango">BOOK A SESSION</MagneticButton>
      </div>
      <div className="club-footer__links">
        <div>
          <span className="eyebrow eyebrow--cyan">COME FIND US</span>
          <a href="https://maps.google.com/?q=645+NW+72nd+Street+Miami+FL+33150" target="_blank" rel="noreferrer">645 NW 72nd Street<br />Miami, FL 33150</a>
          <a href="https://wa.me/13054814295" target="_blank" rel="noreferrer">WhatsApp / text: 305 481 4295</a>
          <a href="mailto:sol@solsquash.com">sol@solsquash.com</a>
        </div>
        <div>
          <span className="eyebrow eyebrow--cyan">KEEP PLAYING</span>
          <Link href="/play" onClick={returnToTop}>Play</Link>
          <Link href="/new-to-squash" onClick={returnToTop}>New to Squash</Link>
          <Link href="/memberships-and-prices" onClick={returnToTop}>Memberships &amp; Prices</Link>
          <Link href="/our-story" onClick={returnToTop}>Our Story</Link>
          <Link href="/faq" onClick={returnToTop}>FAQ</Link>
        </div>
      </div>
      <div className="club-footer__bottom">© Sol Squash · <a href="https://www.instagram.com/solsquash/" target="_blank" rel="noreferrer">@solsquash</a></div>
    </footer>
  );
}
