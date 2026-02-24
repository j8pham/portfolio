"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MagneticCard } from "@/components/animation/MagneticCard";

interface PersonaCardProps {
  /** Emoji avatar. */
  emoji: string;
  /** Name and age, e.g. "Paige, 22". */
  name: string;
  /** Role or life stage, e.g. "Early Career". */
  role: string;
  /** Quote or description. */
  quote: string;
  /** Index for stagger animation. */
  index?: number;
  className?: string;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PersonaCard({
  emoji,
  name,
  role,
  quote,
  index = 0,
  className,
}: PersonaCardProps) {
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
          rounded-2xl p-6 flex flex-col items-center text-center gap-3
          border border-white/[0.06] bg-white/[0.02]
          hover:border-white/[0.12] transition-colors duration-300
          ${className ?? ""}
        `}
        intensity={4}
      >
        {/* Emoji avatar */}
        <span className="text-4xl mb-1" aria-hidden="true">
          {emoji}
        </span>

        {/* Name */}
        <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary">
          {name}
        </h4>

        {/* Role badge */}
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "var(--cs-primary-soft, rgba(96, 165, 250, 0.1))",
            color: "var(--cs-primary, var(--color-accent))",
          }}
        >
          {role}
        </span>

        {/* Quote */}
        <p className="text-sm text-text-secondary leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </MagneticCard>
    </motion.div>
  );
}
