/**
 * Sun-bleached Court Club design: a navy clubhouse masthead keeps the supplied bright Sol logo present at every turn.
 */
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { MagneticButton } from "./MagneticButton";
import { PLAYBYPOINT_BOOKING_URL } from "@/lib/booking";

const logoSrc = "/media/sol-squash-logo_dd364204.png";
const navigation = [
  { label: "PLAY", href: "/play" },
  { label: "START HERE", href: "/new-to-squash" },
  { label: "SCHEDULE", href: "/schedule" },
  { label: "PRICES & MEMBERSHIP", href: "/memberships-and-prices" },
  { label: "THE CLUB", href: "/our-story" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);
  const returnToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <Link
          href="/"
          className="site-logo"
          aria-label="Sol Squash home"
          onClick={returnToTop}
        >
          <img src={logoSrc} alt="Sol Squash" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.href ? "is-active" : ""}
              onClick={returnToTop}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-action">
          <MagneticButton
            href={PLAYBYPOINT_BOOKING_URL}
            className="button--mango"
          >
            BOOK A SESSION
          </MagneticButton>
        </div>
        <button
          className="menu-trigger"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu size={27} />
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              id="mobile-navigation"
              className="mobile-menu__panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              onClick={event => event.stopPropagation()}
            >
              <div className="mobile-menu__top">
                <img src={logoSrc} alt="Sol Squash" />
                <button
                  className="menu-trigger menu-trigger--close"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={27} />
                </button>
              </div>
              <nav aria-label="Mobile navigation">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.05 }}
                  >
                    <Link href={item.href} onClick={returnToTop}>
                      {item.label}
                      <span>↗</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <MagneticButton
                href={PLAYBYPOINT_BOOKING_URL}
                className="button--mango"
                onClick={() => setOpen(false)}
              >
                BOOK A SESSION
              </MagneticButton>
              <p>
                645 NW 72nd Street
                <br />
                Miami, FL 33150
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
