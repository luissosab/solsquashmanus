import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

export function ExperienceDrawer({
  open,
  title,
  eyebrow,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="bn-drawer"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.section
            className="bn-drawer__panel"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            onClick={event => event.stopPropagation()}
          >
            <button
              className="bn-drawer__close"
              onClick={onClose}
              aria-label="Close details"
            >
              <X />
            </button>
            {eyebrow && <p className="bn-kicker">{eyebrow}</p>}
            <h2>{title}</h2>
            <div className="bn-drawer__body">{children}</div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
