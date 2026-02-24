"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  /** Delay in seconds before the first word appears. */
  delay?: number;
  /** Stagger between each word in seconds. */
  stagger?: number;
  /** Trigger once or every time it enters view. */
  once?: boolean;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { delay: number; stagger: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

export function TextReveal({
  children,
  className,
  delay = 0,
  stagger = 0.04,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  const words = children.split(/(\s+)/);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={{ delay, stagger }}
      aria-label={children}
    >
      {words.map((word, i) => {
        if (word.trim() === "") {
          return <span key={`space-${i}`}>{word}</span>;
        }
        return (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            style={{ display: "inline-block" }}
            aria-hidden="true"
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
