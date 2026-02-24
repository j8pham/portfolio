"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MagneticCard } from "@/components/animation/MagneticCard";

interface InsightCardProps {
  /** Insight number label (e.g. "Insight 1"). */
  number?: string;
  /** Insight title. */
  title: string;
  /** Insight body text. */
  body: string;
  /** Optional user quote that supports this insight. */
  quote?: string;
  /** Attribution for the quote. */
  quoteAttribution?: string;
  /** Design implication text. */
  implication?: string;
  /** Icon emoji or string. */
  icon?: string;
  /** Index for stagger animation. */
  index?: number;
  className?: string;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function InsightCard({
  number,
  title,
  body,
  quote,
  quoteAttribution,
  implication,
  icon,
  index = 0,
  className,
}: InsightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: easeOutExpo, delay: index * 0.1 }}
    >
      <MagneticCard
        className={`
          rounded-2xl p-6 md:p-8 flex flex-col gap-4
          border border-white/[0.06] bg-white/[0.02]
          hover:border-white/[0.12] transition-colors duration-300
          ${className ?? ""}
        `}
        intensity={3}
      >
        {/* Header */}
        <div className="flex items-start gap-3">
          {icon && (
            <span className="text-2xl shrink-0" aria-hidden="true">
              {icon}
            </span>
          )}
          <div>
            {number && (
              <span
                className="text-xs font-bold uppercase tracking-wider mb-1 block"
                style={{ color: "var(--cs-primary, var(--color-accent))" }}
              >
                {number}
              </span>
            )}
            <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary">
              {title}
            </h4>
          </div>
        </div>

        {/* Body */}
        <p className="text-sm text-text-secondary leading-relaxed">{body}</p>

        {/* Quote */}
        {quote && (
          <div className="relative pl-4 border-l-2 border-white/[0.08]">
            <p className="text-sm italic text-text-muted leading-relaxed">
              &ldquo;{quote}&rdquo;
            </p>
            {quoteAttribution && (
              <span className="text-xs text-text-muted mt-1 block">
                {quoteAttribution}
              </span>
            )}
          </div>
        )}

        {/* Design implication */}
        {implication && (
          <div
            className="text-xs rounded-lg px-3 py-2"
            style={{
              background: "var(--cs-primary-soft, rgba(96, 165, 250, 0.1))",
            }}
          >
            <strong
              style={{ color: "var(--cs-primary, var(--color-accent))" }}
            >
              Design implication:
            </strong>{" "}
            <span className="text-text-secondary">{implication}</span>
          </div>
        )}
      </MagneticCard>
    </motion.div>
  );
}
