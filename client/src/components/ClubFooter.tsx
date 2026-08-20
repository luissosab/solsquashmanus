/**
 * Sun-bleached Court Club design: the footer closes the promenade as a rounded tropical nightcap, not a utility shelf.
 */
import { Link } from "wouter";
import { MagneticButton } from "./MagneticButton";

const logoSrc = "/manus-storage/sol-squash-logo_dd364204.png";

export function ClubFooter() {
  const returnToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <footer className="club-footer">
      <div className="club-footer__mural-mark" aria-hidden="true" />
      <div className="club-footer__main">
        <img src={logoSrc} alt="Sol Squash" className="club-footer__logo" />
        <p>Come for the squash. Stay for everything around it.</p>
        <MagneticButton href="/schedule" className="button--mango">BOOK A SESSION</MagneticButton>
      </div>
      <div className="club-footer__links">
        <div>
          <span className="eyebrow eyebrow--cyan">COME FIND US</span>
          <a href="https://maps.google.com/?q=645+NW+72nd+Street+Miami+FL+33150" target="_blank" rel="noreferrer">645 NW 72nd Street<br />Miami, FL 33150</a>
          <a href="mailto:sol@solsquash.com">sol@solsquash.com</a>
        </div>
        <div>
          <span className="eyebrow eyebrow--cyan">KEEP PLAYING</span>
          <Link href="/new-to-squash" onClick={returnToTop}>New to Squash</Link>
          <Link href="/play-and-pricing" onClick={returnToTop}>Play & Pricing</Link>
          <Link href="/schedule" onClick={returnToTop}>Upcoming Sessions</Link>
          <Link href="/our-story" onClick={returnToTop}>Our Story</Link>
        </div>
      </div>
      <div className="club-footer__bottom">© Sol Squash · <a href="https://www.instagram.com/solsquash/" target="_blank" rel="noreferrer">@solsquash</a></div>
    </footer>
  );
}
