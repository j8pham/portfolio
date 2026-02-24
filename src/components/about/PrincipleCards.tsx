"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Principle {
  icon: string;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: "\uD83E\uDEF6",
    title: "be considerate",
    description:
      "show care for every person who uses your products. recognize exclusions and create inclusive experiences that make everyone feel welcome.",
  },
  {
    icon: "\uD83E\uDD1D",
    title: "build trust",
    description:
      "be genuine and transparent. show users and stakeholders that you act in their best interests, always prioritizing honesty in design decisions.",
  },
  {
    icon: "\u2728",
    title: "create consistency",
    description:
      "use familiar patterns to make experiences recognizable. help your teams achieve goals with less effort through systematic design approaches.",
  },
];

function PrincipleCard({
  principle,
  index,
}: {
  principle: Principle;
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setIsFlipped(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Only auto-unflip on desktop
    if (window.innerWidth > 768) {
      leaveTimeoutRef.current = setTimeout(() => {
        if (cardRef.current && !cardRef.current.matches(":hover")) {
          setIsFlipped(false);
        }
      }, 200);
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleFlip();
      }
    },
    [handleFlip],
  );

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        ease: easeOutExpo,
        delay: (index % 4) * 0.1,
      }}
    >
      <div
        ref={cardRef}
        className="relative h-[280px] md:h-[280px] sm:h-[220px] cursor-pointer"
        style={{ perspective: 1000 }}
        onClick={handleFlip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`${principle.title} principle - tap or hover to reveal details`}
      >
        {/* Card front */}
        <motion.div
          className="absolute inset-0 p-8 rounded-[32px] bg-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}
          animate={{
            rotateY: isFlipped ? -180 : 0,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.8,
            ease: easeOutExpo,
          }}
        >
          <span className="text-5xl mb-4" aria-hidden="true">
            {principle.icon}
          </span>
          <h3 className="font-serif text-[1.375rem] font-normal text-text-primary mb-2">
            {principle.title}
          </h3>
          <span className="text-xs text-text-muted uppercase tracking-[0.1em] mt-4 opacity-60">
            hover or tap me
          </span>
        </motion.div>

        {/* Card back */}
        <motion.div
          className="absolute inset-0 p-8 rounded-[32px] flex flex-col justify-center"
          style={{
            backfaceVisibility: "hidden",
            background:
              "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)",
            border: "1px solid rgba(96, 165, 250, 0.3)",
          }}
          animate={{
            rotateY: isFlipped ? 0 : 180,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.8,
            ease: easeOutExpo,
          }}
        >
          <p className="text-base text-white/95 leading-[1.8]">
            {principle.description}
          </p>
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute -inset-[2px] rounded-[34px] -z-10"
          style={{
            background:
              "linear-gradient(135deg, #60a5fa, #3b82f6, #38bdf8)",
            filter: "blur(8px)",
          }}
          animate={{ opacity: isFlipped ? 0.4 : 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

export function PrincipleCards() {
  return (
    <section className="py-16" aria-labelledby="principles-heading">
      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: easeOutExpo }}
      >
        <span
          className="inline-block text-xs text-accent uppercase tracking-[0.15em] mb-4 px-4 py-2 bg-accent-soft rounded-full"
          aria-hidden="true"
        >
          ✦ philosophy
        </span>
        <h2
          className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-text-primary mb-4"
          id="principles-heading"
        >
          my design principles
        </h2>
        <p className="text-base text-text-secondary max-w-[600px] mx-auto leading-[1.7]">
          i&apos;ve come up with my own design principles that guide me every
          day. hover to reveal what each one means to me.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {principles.map((principle, i) => (
          <PrincipleCard key={principle.title} principle={principle} index={i} />
        ))}
      </div>
    </section>
  );
}
