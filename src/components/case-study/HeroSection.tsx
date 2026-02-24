"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

interface MetaItem {
  label: string;
  value: string;
}

interface TldrMetric {
  value: string;
  label: string;
  /** Fill percentage for the ring (0-100). */
  ringPercent?: number;
}

interface HeroSectionProps {
  /** Section id for scroll-to-section navigation. */
  sectionId?: string;
  /** Badge text, e.g. "Co-operators Design Jam 2025". */
  badge?: string;
  /** Badge icon emoji. */
  badgeIcon?: string;
  /** Estimated read time. */
  readTime?: string;
  /** Main hero title (can include JSX). */
  title: React.ReactNode;
  /** Subtitle / tagline. */
  tagline: string;
  /** Grid of meta info (Role, Timeline, Team, Tools). */
  meta: MetaItem[];
  /** Hero image. */
  heroImage?: {
    src: string;
    alt: string;
  };
  /** Caption under the hero image. */
  heroCaption?: string;
  /** TL;DR content text. */
  tldr?: string;
  /** TL;DR key metrics. */
  tldrMetrics?: TldrMetric[];
  /** Children rendered after the TL;DR (e.g. MarqueeStrip, scroll cue). */
  children?: React.ReactNode;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: easeOutExpo, delay },
});

export function HeroSection({
  sectionId = "overview",
  badge,
  badgeIcon,
  readTime,
  title,
  tagline,
  meta,
  heroImage,
  heroCaption,
  tldr,
  tldrMetrics,
  children,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for different layers
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const metaY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const metaOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={heroRef}
      id={sectionId}
      aria-labelledby="hero-title"
      className="relative min-h-screen flex flex-col items-center pt-32 pb-20 px-6 overflow-hidden"
    >
      <div className="max-w-[var(--width-max)] mx-auto w-full flex flex-col items-center">
        {/* Back button */}
        <motion.div {...fadeUp(0.05)} className="self-start mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Badge */}
        {badge && (
          <motion.div
            style={{ y: badgeY, opacity: badgeOpacity }}
            className="mb-6"
          >
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm"
            >
              {badgeIcon && (
                <span className="text-base" aria-hidden="true">
                  {badgeIcon}
                </span>
              )}
              <span className="font-medium text-text-secondary">{badge}</span>
              {readTime && (
                <>
                  <span className="text-text-muted" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-text-muted">{readTime}</span>
                </>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          id="hero-title"
          style={{ y: titleY, opacity: titleOpacity }}
          className="font-serif text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.15] tracking-tight text-center max-w-4xl mb-6"
        >
          <motion.span {...fadeUp(0.2)}>{title}</motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          style={{ y: taglineY, opacity: taglineOpacity }}
          className="text-lg md:text-xl text-text-secondary leading-relaxed text-center max-w-2xl mb-10"
        >
          <motion.span {...fadeUp(0.3)}>{tagline}</motion.span>
        </motion.p>

        {/* Meta grid */}
        <motion.div
          style={{ y: metaY, opacity: metaOpacity }}
          className="w-full max-w-2xl mb-16"
        >
          <motion.div
            {...fadeUp(0.4)}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {meta.map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <span className="block text-xs uppercase tracking-[0.15em] text-text-muted mb-1">
                  {item.label}
                </span>
                <span className="block text-sm font-medium text-text-primary">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero mockup */}
        {heroImage && (
          <motion.div
            style={{ y: mockupY, scale: mockupScale }}
            className="w-full max-w-4xl mb-8"
          >
            <motion.div {...fadeUp(0.5)} className="rounded-2xl overflow-hidden">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={1200}
                height={750}
                className="w-full h-auto"
                priority
              />
            </motion.div>
            {heroCaption && (
              <p className="text-center text-sm text-text-muted mt-3">
                {heroCaption}
              </p>
            )}
          </motion.div>
        )}

        {/* TL;DR */}
        {tldr && (
          <motion.div
            {...fadeUp(0.6)}
            className="w-full max-w-3xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg" aria-hidden="true">
                &#9889;
              </span>
              <span className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                TL;DR
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed mb-6">{tldr}</p>

            {tldrMetrics && tldrMetrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {tldrMetrics.map((metric) => (
                  <TldrMetricCard key={metric.label} metric={metric} />
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Additional children (marquee, scroll cue, etc.) */}
        {children}
      </div>
    </section>
  );
}

function TldrMetricCard({ metric }: { metric: TldrMetric }) {
  const ringPercent = metric.ringPercent ?? 100;
  const radius = 34;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (ringPercent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg viewBox="0 0 80 80" className="absolute w-full h-full">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="3"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="var(--cs-primary, var(--color-accent))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
          />
        </svg>
        <span className="relative z-[1] text-lg font-bold text-text-primary">
          {metric.value}
        </span>
      </div>
      <span className="text-xs text-text-muted font-medium">
        {metric.label}
      </span>
    </div>
  );
}
