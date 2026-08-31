/**
 * Sun-bleached Court Club design: pages arrive as a unified moving promenade with a permanent clubhouse frame.
 */
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { ClubFooter } from "./ClubFooter";
import { SiteHeader } from "./SiteHeader";
import { WaveDivider } from "./WaveDivider";
import { PLAYBYPOINT_BOOKING_URL } from "@/lib/booking";

export function PageShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const needsFinalFooterWave =
    location === "/" ||
    location === "/faq" ||
    location === "/schedule" ||
    location === "/play-and-pricing";
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <motion.main
        id="main-content"
        tabIndex={-1}
        key={location}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.44, ease: [0.23, 1, 0.32, 1] }}
      >
        {children}
        {needsFinalFooterWave && (
          <WaveDivider source="navy" destination="navy" />
        )}
      </motion.main>
      <ClubFooter />
      <nav className="mobile-action-dock" aria-label="Quick actions">
        <a href="/schedule">SCHEDULE</a>
        <a href={PLAYBYPOINT_BOOKING_URL} target="_blank" rel="noreferrer">
          BOOK
        </a>
        <a href="https://wa.me/13054814295" target="_blank" rel="noreferrer">
          MESSAGE
        </a>
      </nav>
    </div>
  );
}
