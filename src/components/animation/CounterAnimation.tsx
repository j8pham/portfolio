"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function CounterAnimation({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className,
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, {
        duration,
        ease: easeOutExpo,
      });
    }
  }, [inView, value, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
