import { Link } from "wouter";
import { RacketQMark, SunMark } from "./BrandMarks";
import { PLAYBYPOINT_BOOKING_URL } from "@/lib/booking";

export function ClubFooter() {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="bn-footer">
      <div className="bn-footer__lead">
        <SunMark tone="mustard" />
        <p>
          More than a game.
          <br />
          <em>A way of life.</em>
        </p>
        <a
          className="bn-button bn-button--mustard"
          href={PLAYBYPOINT_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
        >
          Book your court
        </a>
      </div>
      <div className="bn-footer__grid">
        <div>
          <h3>Visit</h3>
          <a
            href="https://maps.google.com/?q=645+NW+72nd+Street+Miami+FL+33150"
            target="_blank"
            rel="noreferrer"
          >
            645 NW 72nd Street
            <br />
            Miami, FL 33150
          </a>
          <a href="https://wa.me/13054814295">305 481 4295</a>
          <a href="mailto:sol@solsquash.com">sol@solsquash.com</a>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/play" onClick={top}>
            Play
          </Link>
          <Link href="/new-to-squash" onClick={top}>
            New to squash
          </Link>
          <Link href="/memberships-and-prices" onClick={top}>
            Membership
          </Link>
          <Link href="/schedule" onClick={top}>
            Schedule
          </Link>
          <Link href="/our-story" onClick={top}>
            The club
          </Link>
          <Link href="/faq" onClick={top}>
            FAQ
          </Link>
        </div>
        <div>
          <h3>Hours</h3>
          <span>Mon–Thu · 6am–10pm</span>
          <span>Fri · 6am–5pm</span>
          <span>Sat–Sun · 8am–5pm</span>
          <small>
            Hours may shift seasonally. Check the live schedule before visiting.
          </small>
        </div>
        <RacketQMark />
      </div>
      <div className="bn-footer__legal">
        <span>© Sol Squash</span>
        <a href="https://www.instagram.com/solsquash/">Instagram</a>
        <a href="https://www.solsquash.com/english-privacy-policy">Privacy</a>
        <a href="https://www.solsquash.com/english-terms-conditions">Terms</a>
      </div>
    </footer>
  );
}
