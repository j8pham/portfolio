"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ComparisonBarProps {
  label: string;
  /** Percentage for the "before" bar (0-100). */
  beforePercent: number;
  /** Percentage for the "after" bar (0-100). */
  afterPercent: number;
  /** Label for the before state. */
  beforeLabel: string;
  /** Label for the after state. */
  afterLabel: string;
  /** Badge text, e.g. "Projected +65%". */
  badge?: string;
  className?: string;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ComparisonBar({
  label,
  beforePercent,
  afterPercent,
  beforeLabel,
  afterLabel,
  badge,
  className,
}: ComparisonBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-3 ${className ?? ""}`}
    >
      {/* Labels row */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-text-primary">
          {label}
        </span>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-text-muted">{beforeLabel}</span>
          <span className="text-text-secondary font-medium">{afterLabel}</span>
          {badge && (
            <span
              className="px-2 py-0.5 rounded-full text-[0.6875rem] font-bold border"
              style={{
                background: "var(--cs-primary-soft, rgba(96, 165, 250, 0.1))",
                borderColor: "var(--cs-primary, var(--color-accent))",
                color: "var(--cs-primary, var(--color-accent))",
              }}
            >
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Bar track */}
      <div className="relative h-6 rounded-full bg-white/[0.04] overflow-hidden">
        {/* Before bar */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: "rgba(255, 255, 255, 0.08)" }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${beforePercent}%` } : { width: "0%" }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
        />

        {/* After bar */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--cs-primary, #60a5fa), var(--cs-primary-glow, rgba(96, 165, 250, 0.35)))`,
          }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${afterPercent}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.4 }}
        />
      </div>
    </div>
  );
}
