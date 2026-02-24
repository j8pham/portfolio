"use client";

import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const variants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: reducedMotion ? 0 : 0.42,
            ease: easeOutExpo,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
