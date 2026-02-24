"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface TimelineEntry {
  year: string;
  date: string;
  title: string;
  company: string;
  notes?: string[];
}

const timelineEntries: TimelineEntry[] = [
  {
    year: "2024",
    date: "september 2024 - december 2025",
    title: "ux design intern",
    company: "ontario mto",
  },
  {
    year: "2023",
    date: "september 2023 - fall 2027",
    title: "university of waterloo",
    company: "global business and digital arts",
    notes: [
      "uw cube \u2013 vice president",
      "uw/ux \u2013 mentor",
      "uw blueprint \u2013 content strategist",
      "uw uxr hub \u2013 director of r&d",
      "uw serve \u2013 promo lead",
      "osu!waterloo \u2013 vice president",
    ],
  },
  {
    year: "2022",
    date: "august 2022 - april 2023",
    title: "it co-op student",
    company: "shared services canada",
  },
  {
    year: "2020",
    date: "september 2020 - april 2023",
    title: "university of guelph",
    company: "computer engineering",
    notes: ["transferred into gbda @ uw"],
  },
];

function TimelineItem({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  return (
    <motion.div
      className="relative pb-12 last:pb-0"
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        ease: easeOutExpo,
        delay: (index % 4) * 0.1,
      }}
    >
      {/* Marker dot */}
      <div className="absolute -left-12 md:-left-12 top-2 -translate-x-1/2 z-[2]">
        <motion.span
          className="block w-3.5 h-3.5 bg-bg border-[3px] border-accent rounded-full"
          whileHover={{
            scale: 1.2,
            backgroundColor: "var(--color-accent)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card */}
      <motion.div
        className="p-6 bg-white/[0.03] border border-white/[0.08] rounded-[24px]"
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderColor: "rgba(96, 165, 250, 0.3)",
          x: 8,
        }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
      >
        <span className="text-xs text-text-muted uppercase tracking-[0.05em]">
          {entry.date}
        </span>
        <h3 className="font-serif text-[1.375rem] font-normal text-text-primary mt-2 mb-1">
          {entry.title}
        </h3>
        <p className="text-base text-text-secondary">{entry.company}</p>

        {entry.notes && entry.notes.length > 0 && (
          <ul className="mt-4 pl-5 list-none text-sm text-text-muted">
            {entry.notes.map((note) => (
              <li
                key={note}
                className="relative pl-3 mb-1 leading-[1.6] before:content-['→'] before:absolute before:left-[-1rem] before:text-accent"
              >
                {note}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16" aria-labelledby="experience-heading">
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
          ✦ journey
        </span>
        <h2
          className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-text-primary mb-4"
          id="experience-heading"
        >
          experiences
        </h2>
        <p className="text-base text-text-secondary max-w-[600px] mx-auto leading-[1.7]">
          here&apos;s what i&apos;ve been up to lately. enjoy reminiscing down
          memory lane with me 🫶
        </p>
      </motion.div>

      {/* Timeline */}
      <div
        ref={containerRef}
        className="relative max-w-[700px] mx-auto pl-12"
      >
        {/* Background line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/[0.08]"
          aria-hidden="true"
        />

        {/* Progress line */}
        <motion.div
          className="absolute left-0 top-0 w-[2px]"
          style={{
            height: reducedMotion ? "100%" : progressHeight,
            background:
              "linear-gradient(to bottom, var(--color-accent), var(--color-accent-blue))",
          }}
          aria-hidden="true"
        />

        {timelineEntries.map((entry, i) => (
          <TimelineItem key={entry.year} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
