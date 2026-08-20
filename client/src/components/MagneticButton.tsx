/**
 * Sun-bleached Court Club design: physical springy controls with strong navy, mango, and palm-green contrast.
 */
import { motion, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

export function MagneticButton({ children, href = "#", onClick, className = "", ariaLabel }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 400, damping: 10 });
  const y = useSpring(0, { stiffness: 400, damping: 10 });

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      aria-label={ariaLabel}
      className={`magnetic-button ${className}`}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onFocus={reset}
      onClick={(event) => {
        if (href === "#") event.preventDefault();
        onClick?.();
      }}
      whileTap={{ scale: 0.96 }}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="magnetic-arrow">↗</span>
    </motion.a>
  );
}
