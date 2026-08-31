import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { PLAYBYPOINT_BOOKING_URL } from "@/lib/booking";

const navigation = [
  { label: "Play", href: "/play" },
  { label: "New to squash", href: "/new-to-squash" },
  { label: "Membership", href: "/memberships-and-prices" },
  { label: "The club", href: "/our-story" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [open]);
  const navigate = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <header className="bn-header">
        <Link
          href="/"
          className="bn-header__logo"
          aria-label="Sol Squash home"
          onClick={navigate}
        >
          <img src="/media/sol-squash-logo_dd364204.png" alt="Sol Squash" />
        </Link>
        <nav className="bn-header__nav" aria-label="Main navigation">
          {navigation.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.href ? "is-active" : ""}
              onClick={navigate}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="bn-header__actions">
          <Link href="/schedule" onClick={navigate}>
            Schedule
          </Link>
          <a
            className="bn-button bn-button--mustard"
            href={PLAYBYPOINT_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book
          </a>
        </div>
        <button
          className="bn-menu-button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu />
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="bn-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bn-menu__panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              onClick={event => event.stopPropagation()}
            >
              <div className="bn-menu__top">
                <img
                  src="/media/sol-squash-logo_dd364204.png"
                  alt="Sol Squash"
                />
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X />
                </button>
              </div>
              <nav>
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={item.href} onClick={navigate}>
                      <span>0{index + 1}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link href="/schedule" onClick={navigate}>
                  <span>06</span>Schedule
                </Link>
              </nav>
              <a
                className="bn-button bn-button--mustard"
                href={PLAYBYPOINT_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
              >
                Book a session
              </a>
              <p>645 NW 72nd Street · Miami, Florida</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
