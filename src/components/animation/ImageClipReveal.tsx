"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImageClipRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Direction the clip-path reveal comes from. */
  direction?: "left" | "right" | "bottom" | "top";
  /** Animation duration in seconds. */
  duration?: number;
  /** Delay in seconds. */
  delay?: number;
  /** Trigger once or every time it enters view. */
  once?: boolean;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Build clip-path values for hidden and visible states.
 * Uses inset() for crisp, GPU-accelerated reveals.
 */
function getClipPaths(direction: string) {
  // inset(top right bottom left)
  switch (direction) {
    case "left":
      return {
        hidden: "inset(0 100% 0 0)",
        visible: "inset(0 0% 0 0)",
      };
    case "right":
      return {
        hidden: "inset(0 0 0 100%)",
        visible: "inset(0 0 0 0%)",
      };
    case "top":
      return {
        hidden: "inset(0 0 100% 0)",
        visible: "inset(0 0 0% 0)",
      };
    case "bottom":
    default:
      return {
        hidden: "inset(100% 0 0 0)",
        visible: "inset(0% 0 0 0)",
      };
  }
}

export function ImageClipReveal({
  children,
  className,
  direction = "bottom",
  duration = 0.9,
  delay = 0,
  once = true,
}: ImageClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-5% 0px" });

  const clips = getClipPaths(direction);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: clips.hidden, opacity: 0.3 }}
      animate={
        inView
          ? { clipPath: clips.visible, opacity: 1 }
          : { clipPath: clips.hidden, opacity: 0.3 }
      }
      transition={{ duration, ease: easeOutExpo, delay }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}
