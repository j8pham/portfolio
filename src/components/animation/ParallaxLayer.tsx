"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  /** Parallax speed multiplier. Positive = moves slower than scroll, negative = moves opposite. */
  speed?: number;
  /** Optional horizontal sway amplitude in pixels. */
  swayAmount?: number;
  /** Whether to fade out as the element scrolls away. */
  fadeOut?: boolean;
  /** Scale range: [start, end]. Element scales from start to end as it scrolls through. */
  scaleRange?: [number, number];
}

export function ParallaxLayer({
  children,
  className,
  speed = 0.15,
  swayAmount = 0,
  fadeOut = false,
  scaleRange,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Vertical parallax: translate from +distance to -distance as scrollYProgress goes 0 -> 1
  const yRange = 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);

  // Optional horizontal sway
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, swayAmount, 0, -swayAmount, 0],
  );

  // Optional fade out
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    fadeOut ? [0, 1, 1, 0] : [1, 1, 1, 1],
  );

  // Scale (always called to satisfy hooks rules; defaults to identity)
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    scaleRange ?? [1, 1],
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        x: swayAmount !== 0 ? x : undefined,
        opacity: fadeOut ? opacity : undefined,
        scale: scaleRange ? scale : undefined,
      }}
    >
      {children}
    </motion.div>
  );
}
