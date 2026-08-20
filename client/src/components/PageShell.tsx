/**
 * Sun-bleached Court Club design: pages arrive as a unified moving promenade with a permanent clubhouse frame.
 */
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "wouter";
import { ClubFooter } from "./ClubFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return (
    <div className="site-frame">
      <SiteHeader />
      <motion.main key={location} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.44, ease: [0.23, 1, 0.32, 1] }}>
        {children}
      </motion.main>
      <ClubFooter />
    </div>
  );
}
