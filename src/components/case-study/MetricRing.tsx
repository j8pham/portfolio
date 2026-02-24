"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

interface MetricRingProps {
  /** Displayed value (e.g. "100%", "+65%", "4.5/5"). */
  value: string;
  /** Label text shown below the ring. */
  label: string;
  /** Fill percentage of the ring (0-100). */
  percent?: number;
  /** Ring diameter in pixels. */
  size?: number;
  /** Ring stroke width. */
  strokeWidth?: number;
  /** Duration of the fill animation in seconds. */
  duration?: number;
  /** Also animate the numeric value counting up. */
  animateValue?: boolean;
  /** Numeric end value for counter animation (extracted from value if not provided). */
  numericValue?: number;
  /** Suffix for counter (e.g. "%", "s"). */
  suffix?: string;
  /** Prefix for counter (e.g. "+", "-"). */
  prefix?: string;
  className?: string;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function MetricRing({
  value,
  label,
  percent = 100,
  size = 80,
  strokeWidth = 3,
  duration = 1.6,
  animateValue = false,
  numericValue,
  suffix = "",
  prefix = "",
  className,
}: MetricRingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const radius = (size - strokeWidth * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const fillOffset = circumference - (percent / 100) * circumference;

  // Counter animation
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => {
    if (numericValue !== undefined) {
      if (Number.isInteger(numericValue)) return Math.round(v);
      return Number(v.toFixed(1));
    }
    return Math.round(v);
  });

  useEffect(() => {
    if (inView && animateValue && numericValue !== undefined) {
      animate(motionVal, numericValue, {
        duration,
        ease: easeOutExpo,
      });
    }
  }, [inView, animateValue, numericValue, duration, motionVal]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-2 text-center ${className ?? ""}`}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="absolute w-full h-full"
        >
          {/* Background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
          />
          {/* Fill ring */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--cs-primary, var(--color-accent))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              inView
                ? { strokeDashoffset: fillOffset }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration, ease: easeOutExpo }}
            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
          />
        </svg>

        {/* Value */}
        <span className="relative z-[1] text-lg font-bold text-text-primary">
          {animateValue && numericValue !== undefined ? (
            <>
              {prefix}
              <motion.span>{rounded}</motion.span>
              {suffix}
            </>
          ) : (
            value
          )}
        </span>
      </div>

      <span className="text-xs text-text-muted font-medium max-w-[120px]">
        {label}
      </span>
    </div>
  );
}
