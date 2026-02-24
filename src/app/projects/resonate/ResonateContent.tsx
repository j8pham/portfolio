"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { HeroSection } from "@/components/case-study/HeroSection";
import { MarqueeStrip } from "@/components/case-study/MarqueeStrip";
import { ComparisonBar } from "@/components/case-study/ComparisonBar";
import { MetricRing } from "@/components/case-study/MetricRing";
import { FlowStep } from "@/components/case-study/FlowStep";
import { InsightCard } from "@/components/case-study/InsightCard";
import { Lightbox } from "@/components/case-study/Lightbox";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TextReveal } from "@/components/animation/TextReveal";
import { ImageClipReveal } from "@/components/animation/ImageClipReveal";
import type { SectionNavItem } from "@/components/case-study/SectionNav";

const ACCENT = "#a78bfa";

const sections: SectionNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "story", label: "Story" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "solution", label: "Solution" },
  { id: "design", label: "Design" },
  { id: "reflection", label: "Reflection" },
];

const marqueeItems = [
  { icon: "\uD83C\uDFA4", text: "Singing Practice" },
  { icon: "\uD83D\uDCC8", text: "Frequency:", value: "+46%" },
  { icon: "\uD83C\uDFAF", text: "Clarity:", value: "72%" },
  { icon: "\uD83D\uDCAA", text: "Confidence:", value: "+34%" },
  { icon: "\uD83D\uDC65", text: "6 Members" },
  { icon: "\uD83D\uDEE0\uFE0F", text: "Figma" },
  { icon: "\uD83D\uDCC5", text: "Sept \u2013 Dec 2023" },
  { icon: "\uD83C\uDFB5", text: "Habit Formation" },
];

export default function ResonateContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <CaseStudyLayout
      projectSlug="resonate"
      accentColor={ACCENT}
      sections={sections}
    >
      {/* ──────────────────── HERO ──────────────────── */}
      <HeroSection
        sectionId="overview"
        badge="BET350 \u00B7 Academic Project"
        badgeIcon="\uD83C\uDFA4"
        readTime="8 min read"
        title={
          <>
            When Practice Feels Like{" "}
            <span style={{ color: ACCENT }}>Progress</span>
          </>
        }
        tagline="A practice companion that helps new singers build confidence through structure, feedback, and visible improvement."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Timeline", value: "Sept \u2013 Dec 2023" },
          { label: "Team", value: "6 Members" },
          { label: "Tools", value: "Figma" },
        ]}
        heroImage={{
          src: "/assets/images/resonate/Resonate%20Mockup.png",
          alt: "Resonate App Mockup",
        }}
        heroCaption="The Resonate mobile app interface"
        tldr="Singers who want to improve often hit a wall: professional training is expensive, and free resources lack structure and feedback. Resonate reframes practice as a supportive daily routine that reduces overwhelm and makes progress visible. In testing, users reported clearer understanding of their improvement and more confidence to practice on their own."
        tldrMetrics={[
          {
            value: "72%",
            label: "Felt Clearer on Progress",
            ringPercent: 72,
          },
          {
            value: "Projected",
            label: "+46% Practice Frequency",
            ringPercent: 46,
          },
          {
            value: "Projected",
            label: "+34% Confidence",
            ringPercent: 34,
          },
        ]}
      >
        {/* Marquee */}
        <MarqueeStrip items={marqueeItems} speed={50} className="mt-8 mb-6" />

        {/* Scroll cue */}
        <ScrollReveal delay={0.8} className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-text-muted">
            Scroll to explore
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white/60"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </ScrollReveal>
      </HeroSection>

      {/* ──────────────────── STORY ──────────────────── */}
      <section
        id="story"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT }}
              >
                01
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-text-primary">
                The Story
              </h2>
            </div>
          </ScrollReveal>

          <TextReveal className="font-serif text-2xl md:text-3xl leading-relaxed text-text-primary max-w-3xl mb-8">
            The hardest part of learning to sing isn&apos;t hitting the right note. It&apos;s not knowing if you&apos;re getting better.
          </TextReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary leading-relaxed max-w-3xl text-[0.9375rem]">
              Many people love singing but quit because progress feels invisible. Professional
              training is expensive; online resources often lack structure and real feedback. We
              wanted to design a{" "}
              <span className="font-semibold" style={{ color: ACCENT }}>
                supportive daily routine
              </span>{" "}
              that reduces overwhelm, encourages habit formation, and helps singers see how far
              they&apos;ve come.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────── CHALLENGE ──────────────────── */}
      <section
        id="challenge"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT }}
              >
                02
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-text-primary">
                The Challenge
              </h2>
            </div>
          </ScrollReveal>

          {/* Problem statement */}
          <ScrollReveal delay={0.05}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 mb-12 max-w-3xl">
              <span
                className="text-xs font-bold uppercase tracking-wider mb-3 block"
                style={{ color: "#ef4444" }}
              >
                The Problem
              </span>
              <p className="font-serif text-xl md:text-2xl text-text-primary leading-relaxed">
                For beginner and amateur singers, improvement is difficult to measure and even
                harder to sustain.
              </p>
            </div>
          </ScrollReveal>

          {/* Confidence Cycle */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-3">
              The Confidence Cycle
            </h3>
            <p className="text-text-secondary text-[0.9375rem] mb-8">
              Research revealed a recurring cycle:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "\u2753", title: "Lack of Feedback", desc: "Uncertainty about progress" },
              { icon: "\uD83D\uDE30", title: "Low Confidence", desc: "Self-doubt and fear" },
              { icon: "\uD83D\uDCC9", title: "Inconsistent Practice", desc: "Habits break down" },
              { icon: "\uD83D\uDED1", title: "Minimal Improvement", desc: "Back to low confidence" },
            ].map((step, i) => (
              <ScrollReveal key={step.title} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center flex flex-col items-center gap-3 h-full">
                  <span className="text-3xl" aria-hidden="true">
                    {step.icon}
                  </span>
                  <h4 className="font-serif text-base font-normal text-text-primary">
                    {step.title}
                  </h4>
                  <p className="text-xs text-text-muted">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Problem Statement & Opportunity */}
          <div className="flex flex-col gap-6 max-w-3xl">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
                <span
                  className="text-xs font-bold uppercase tracking-wider mb-3 block"
                  style={{ color: ACCENT }}
                >
                  Problem Statement
                </span>
                <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                  Beginner and amateur singers lack an affordable, structured way to practice
                  consistently and receive feedback. Without visible progress, confidence drops and
                  practice habits disappear.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
                <span
                  className="text-xs font-bold uppercase tracking-wider mb-3 block"
                  style={{ color: ACCENT }}
                >
                  Opportunity
                </span>
                <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                  Design a guided, confidence-building practice system that supports habit formation
                  and makes vocal progress clear and reassuring.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ──────────────────── RESEARCH ──────────────────── */}
      <section
        id="research"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT }}
              >
                03
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-text-primary">
                Research &amp; Discovery
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-text-secondary leading-relaxed max-w-3xl mb-12 text-[0.9375rem]">
              To understand both emotional and behavioral barriers, we ran user interviews, surveys,
              and customer journey mapping to capture highs and lows throughout the learning process.
            </p>
          </ScrollReveal>

          {/* Primary Users */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-6">
              Primary Users
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 h-full">
                <span
                  className="text-xs font-bold tracking-wider mb-3 block"
                  style={{ color: ACCENT }}
                >
                  01
                </span>
                <h4 className="font-serif text-lg text-text-primary mb-2">Amateur Singers</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Want structured practice without hidden fees. Often self-taught. Motivated to
                  improve but unsure how.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 h-full">
                <span
                  className="text-xs font-bold tracking-wider mb-3 block"
                  style={{ color: ACCENT }}
                >
                  02
                </span>
                <h4 className="font-serif text-lg text-text-primary mb-2">Total Beginners</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Excited to learn but intimidated by where to start. Easily overwhelmed. Need
                  emotional safety and reassurance.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-3xl mb-16">
              Both groups share the same core needs: clarity, encouragement, structure, and visible
              progress.
            </p>
          </ScrollReveal>

          {/* Research Approach */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-6">
              Research Approach
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                num: "01",
                title: "User Interviews",
                desc: "To explore confidence, motivation, and practice habits.",
              },
              {
                num: "02",
                title: "Surveys",
                desc: "To identify broader patterns around consistency and tool usage.",
              },
              {
                num: "03",
                title: "Customer Journey Mapping",
                desc: "To visualize emotional highs and lows throughout the learning process.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 h-full">
                  <span
                    className="text-xs font-bold tracking-wider mb-3 block"
                    style={{ color: ACCENT }}
                  >
                    {item.num}
                  </span>
                  <h4 className="font-serif text-lg text-text-primary mb-2">{item.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-3xl mb-16">
              This approach helped uncover not only what users struggled with, but{" "}
              <strong className="text-text-primary">why they disengaged</strong>.
            </p>
          </ScrollReveal>

          {/* Key Insights */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-8">
              Key Insights
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <InsightCard
              number="Insight 01"
              title="Confidence Barrier"
              quote="I'm not good enough to sing in front of other people."
              quoteAttribution="Interview participant"
              body="Users struggled with confidence and needed a safe, private space to practice without judgment."
              index={0}
            />
            <InsightCard
              number="Insight 02"
              title="Invisible Progress"
              quote="I don't know if I'm getting better."
              quoteAttribution="Interview participant"
              body="Without visible progress indicators, users couldn't measure improvement and lost motivation to continue."
              index={1}
            />
            <InsightCard
              number="Insight 03"
              title="Tool Overload"
              quote="Existing tools overwhelm me."
              quoteAttribution="Survey respondent"
              body="Current solutions either lacked structure or provided too much information, creating decision fatigue."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ──────────────────── SOLUTION ──────────────────── */}
      <section
        id="solution"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT }}
              >
                04
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-text-primary">
                The Solution
              </h2>
            </div>
          </ScrollReveal>

          {/* Solution Strategy */}
          <ScrollReveal delay={0.05}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-3">
              Solution Strategy
            </h3>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-3xl mb-8">
              Resonate was built around three guiding principles:
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                num: "01",
                title: "Provide Structure",
                desc: 'Remove decision fatigue through guided exercises. Directly addresses the "I don\'t know what to practice" step in the confidence cycle.',
              },
              {
                num: "02",
                title: "Reinforce Habits",
                desc: 'Gentle motivation through streaks, badges, and reminders. Breaks the "inconsistent practice" loop.',
              },
              {
                num: "03",
                title: "Make Progress Visible",
                desc: 'Build confidence through clear progress tracking. Tackles the "I don\'t know if I\'m getting better" uncertainty.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 h-full">
                  <span
                    className="text-xs font-bold tracking-wider mb-3 block"
                    style={{ color: ACCENT }}
                  >
                    {item.num}
                  </span>
                  <h4 className="font-serif text-lg text-text-primary mb-2">{item.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-3xl mb-20">
              Together, these principles form a supportive learning loop that targets each point in
              the confidence cycle.
            </p>
          </ScrollReveal>

          {/* Core Experience - Daily Practice Loop */}
          <ScrollReveal delay={0.05}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-3">
              Core Experience &mdash; The Daily Practice Loop
            </h3>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-3xl mb-12">
              At the heart of Resonate is the daily guided practice session, designed to reduce
              friction and reinforce confidence.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-16 mb-20">
            <FlowStep
              number={1}
              title="Start a Daily Session"
              description="Users are guided into a focused exercise (pitch, range, or tone) without needing to decide what to practice."
              image={{
                src: "/assets/images/resonate/Goals%20-%20Main.png",
                alt: "Daily session start screen",
              }}
              onImageClick={setLightboxSrc}
            />
            <FlowStep
              number={2}
              title="Receive Automated Feedback"
              description="Pitch and tone analysis provide immediate, personalized insights without judgment."
              image={{
                src: "/assets/images/resonate/practice.png",
                alt: "Automated feedback screen",
              }}
              reverse
              onImageClick={setLightboxSrc}
            />
            <FlowStep
              number={3}
              title="Track Progress Over Time"
              description="Users compare past and present recordings to hear real improvement."
              image={{
                src: "/assets/images/resonate/progess.png",
                alt: "Progress tracking screen",
              }}
              onImageClick={setLightboxSrc}
            />
            <FlowStep
              number={4}
              title="Reinforce the Habit"
              description="Streaks, badges, and encouraging notifications motivate users to return daily."
              rationale="Result: This loop transforms practice from a stressful task into a reassuring routine."
              image={{
                src: "/assets/images/resonate/Skilltree.png",
                alt: "Habit reinforcement screen",
              }}
              reverse
              onImageClick={setLightboxSrc}
            />
          </div>

          {/* Key Features */}
          <ScrollReveal delay={0.05}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-8">
              Key Features
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Guided Exercises",
                desc: "Structured vocal warmups and drills with clear session goals. Reduces overwhelm for beginners.",
              },
              {
                title: "Automated Feedback",
                desc: "Pitch and tone analysis with accuracy indicators. Personalized insights without needing a teacher.",
              },
              {
                title: "Progress Tracking",
                desc: "Visual milestones, goal setting, and before/after recording comparisons.",
              },
              {
                title: "Gamification & Habit Support",
                desc: "Streaks and badges, daily reminders, and small wins that encourage consistency.",
              },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={0.1 + i * 0.06}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 h-full">
                  <h4 className="font-serif text-lg text-text-primary mb-2">{feature.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── DESIGN PROCESS ──────────────────── */}
      <section
        id="design"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT }}
              >
                05
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-text-primary">
                Design Process
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-3xl mb-12">
              Every design decision was filtered through one question:{" "}
              <em className="text-text-primary">
                &ldquo;Does this make the user feel more or less confident?&rdquo;
              </em>{" "}
              This constraint shaped everything from color choices to microcopy.
            </p>
          </ScrollReveal>

          {/* Is / Is Not */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 h-full">
                <h4 className="font-serif text-lg text-text-primary mb-4">The App Is</h4>
                <ul className="flex flex-col gap-3">
                  {[
                    "For building confidence through repetition",
                    "For providing simple, visual pitch matching",
                    'Meant for 5-minute "micro-practice" sessions',
                    "A private, judgment-free companion",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-text-secondary text-sm"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 h-full">
                <h4 className="font-serif text-lg text-text-primary mb-4">The App Is Not</h4>
                <ul className="flex flex-col gap-3">
                  {[
                    "A replacement for a professional vocal coach",
                    "A comprehensive music theory course",
                    "A social network for sharing performances",
                    "A tool for advanced singers",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-text-muted text-sm"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Design System */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-6">
              Design System
            </h3>
          </ScrollReveal>

          <ImageClipReveal direction="bottom" className="rounded-2xl overflow-hidden mb-3">
            <button
              type="button"
              onClick={() => setLightboxSrc("/assets/images/resonate/design%20system.png")}
              className="cursor-zoom-in w-full"
            >
              <img
                src="/assets/images/resonate/design%20system.png"
                alt="Resonate design system"
                className="w-full h-auto"
              />
            </button>
          </ImageClipReveal>
          <p className="text-center text-sm text-text-muted mb-16">
            Color palette and typography designed for calm, encouraging interactions
          </p>

          {/* Prototype */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-3">
              Experience It Yourself
            </h3>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-3xl mb-8">
              The best way to understand Resonate is to walk through the flow. Notice how every
              interaction is designed to encourage, not critique.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] mb-4 aspect-[16/10]">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWRYzjTBUWyrOSqyB0n17Jv%2Fhi-fi-showcase%3Fnode-id%3D3-1952%26viewport%3D499%252C379%252C0.13%26t%3D4at8Wy6ZvNI5Xbfu-0%26scaling%3Dcontain%26content-scaling%3Dfixed%26starting-point-node-id%3D3%253A1952"
                className="w-full h-full"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                title="Resonate Figma prototype"
              />
            </div>
            <div className="text-center">
              <a
                href="https://www.figma.com/proto/WRYzjTBUWyrOSqyB0n17Jv/hi-fi-showcase?node-id=3-1952"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: ACCENT }}
              >
                Open full prototype
                <span aria-hidden="true">&nearr;</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────── REFLECTION ──────────────────── */}
      <section
        id="reflection"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT }}
              >
                06
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-text-primary">
                Reflection &amp; Impact
              </h2>
            </div>
          </ScrollReveal>

          {/* Impact */}
          <ScrollReveal delay={0.05}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-3">
              Impact (Based on Usability Testing &amp; Research)
            </h3>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed mb-10">
              Projected and self-reported outcomes from prototype testing.
            </p>
          </ScrollReveal>

          {/* Outcome Metric Rings */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <MetricRing
              value="72%"
              label="Reported Clearer Understanding of Progress"
              percent={72}
              size={100}
              strokeWidth={4}
              animateValue
              numericValue={72}
              suffix="%"
            />
            <MetricRing
              value="Projected"
              label="+46% Weekly Practice Frequency"
              percent={46}
              size={100}
              strokeWidth={4}
            />
            <MetricRing
              value="Projected"
              label="+34% Confidence When Practicing Alone"
              percent={34}
              size={100}
              strokeWidth={4}
            />
          </div>

          {/* Comparison Bars */}
          <div className="flex flex-col gap-8 mb-8">
            <ComparisonBar
              label="Practice Frequency"
              beforePercent={35}
              afterPercent={81}
              beforeLabel="Inconsistent practice"
              afterLabel="Guided daily sessions"
              badge="+46% increase"
            />
            <ComparisonBar
              label="Progress Clarity"
              beforePercent={30}
              afterPercent={72}
              beforeLabel="Unclear improvement"
              afterLabel="Visual progress tracking"
              badge="72% clarity"
            />
            <ComparisonBar
              label="User Confidence"
              beforePercent={40}
              afterPercent={74}
              beforeLabel="Self-doubt, anxiety"
              afterLabel="Supported & motivated"
              badge="+34% increase"
            />
          </div>

          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-3xl mb-16">
              Resonate didn&apos;t just improve technique &mdash; it helped users feel supported,
              motivated, and confident while learning.
            </p>
          </ScrollReveal>

          {/* How We Measured Impact */}
          <ScrollReveal delay={0.05}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-3">
              How We Measured Impact
            </h3>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed mb-10 max-w-3xl">
              Because Resonate was a concept product, impact was evaluated through usability testing,
              behavioral observation, and self-reported feedback.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-8 mb-12 max-w-3xl">
            {[
              {
                icon: "\uD83E\uDDEA",
                title: "Prototype Usability Testing",
                desc: "Participants completed guided practice sessions using the Resonate prototype. We observed how easily they understood feedback, followed session structure, and whether they could identify improvement over time.",
                tags: ["Task completion", "Think-aloud", "Comprehension checks"],
              },
              {
                icon: "\uD83D\uDCC8",
                title: "Behavioral Signal Tracking",
                desc: "We tracked completion of daily practice sessions, streak engagement, and interaction with progress tracking features. These behaviors served as indicators of habit formation and sustained motivation.",
                tags: ["Session completion", "Streak retention", "Progress feature usage"],
              },
              {
                icon: "\uD83D\uDCAC",
                title: "Pre- & Post-Test Surveys",
                desc: "After testing, participants rated their confidence practicing independently, clarity of vocal progress, and motivation to continue. Ratings were collected using Likert-scale surveys before and after using the prototype.",
                tags: ["Likert-scale ratings", "Confidence scoring", "Motivation tracking"],
              },
            ].map((step, i) => (
              <ScrollReveal key={step.title} delay={0.1 + i * 0.08}>
                <div className="flex gap-5">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg border"
                    style={{
                      background: "var(--cs-primary-soft, rgba(167, 139, 250, 0.1))",
                      borderColor: ACCENT,
                    }}
                  >
                    {step.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-serif text-lg text-text-primary">{step.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.6875rem] font-medium px-2.5 py-1 rounded-full border"
                          style={{
                            background: "var(--cs-primary-soft, rgba(167, 139, 250, 0.1))",
                            borderColor: "rgba(167, 139, 250, 0.2)",
                            color: ACCENT,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Measurement Result */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 max-w-3xl mb-16">
              <h4 className="font-serif text-lg text-text-primary mb-3">Result</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Guided structure, visible progress, and automated feedback helped users practice more
                consistently, understand their improvement, and feel more confident while learning.
              </p>
              <p className="text-text-muted text-xs italic">
                All metrics reflect projected outcomes based on usability testing and research
                insights.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Reflection Quote */}
          <ScrollReveal delay={0.1}>
            <div
              className="rounded-2xl p-8 md:p-10 mb-16 border-l-4 max-w-3xl"
              style={{
                borderColor: ACCENT,
                background: "rgba(167, 139, 250, 0.04)",
              }}
            >
              <blockquote className="font-serif text-xl md:text-2xl text-text-primary leading-relaxed italic">
                &ldquo;Designing Resonate taught me that the hardest part of creative learning
                isn&apos;t the skill itself &mdash; it&apos;s the emotional weight of not knowing if
                you&apos;re improving. When we made progress visible, everything else
                followed.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>

          {/* What I Learned */}
          <ScrollReveal delay={0.05}>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-3">
              What I Learned
            </h3>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-3xl mb-8">
              Resonate reinforced how deeply emotional creative learning can be. Progress isn&apos;t
              just technical &mdash; it&apos;s psychological. These insights shaped how I think about
              designing for confidence.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: "\uD83E\uDE9E",
                title: "Confidence Is the Real Product",
                desc: "Users didn't just want to sing better \u2014 they wanted to feel like they were getting better. Visible progress and gentle encouragement mattered more than technical accuracy scores.",
              },
              {
                icon: "\uD83E\uDDE9",
                title: "Structure Reduces Anxiety",
                desc: 'When practice sessions were pre-structured, users reported less overwhelm and more willingness to return. Removing the "what should I do?" friction was transformative.',
              },
              {
                icon: "\uD83D\uDD01",
                title: "Small Loops Beat Big Goals",
                desc: "5-minute micro-practice sessions with instant feedback created stronger habits than ambitious 30-minute plans. Consistency beats intensity for beginners.",
              },
              {
                icon: "\uD83C\uDFA8",
                title: "Creative Tools Need Emotional Safety",
                desc: "Unlike productivity apps, creative tools carry vulnerability. Every piece of microcopy, every feedback tone had to feel encouraging \u2014 never judgmental.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={0.1 + i * 0.06}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 h-full">
                  <span className="text-2xl mb-3 block" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h4 className="font-serif text-lg text-text-primary mb-2">{card.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Key Takeaway */}
          <ScrollReveal delay={0.1}>
            <div
              className="rounded-2xl p-6 md:p-8 mb-16 text-center max-w-2xl mx-auto"
              style={{
                background: "var(--cs-primary-soft, rgba(167, 139, 250, 0.1))",
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-wider mb-3 block"
                style={{ color: ACCENT }}
              >
                Key Takeaway
              </span>
              <blockquote className="font-serif text-xl md:text-2xl text-text-primary">
                Designing for creativity means designing for confidence.
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Next Steps */}
          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl" aria-hidden="true">
                &#x1F52E;
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-text-primary">
                If Continued, I Would Explore:
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "Adaptive Practice Paths",
                desc: "Personalized learning journeys that adapt to each user's progress and vocal range.",
              },
              {
                num: "02",
                title: "Deeper Personalization Through AI",
                desc: "Advanced AI-driven feedback and exercise recommendations based on individual vocal characteristics.",
              },
              {
                num: "03",
                title: "Accessibility Support",
                desc: "Support for diverse vocal ranges and accessibility features for users with different needs.",
              },
              {
                num: "04",
                title: "Community-Based Encouragement",
                desc: "Safe, supportive community features that provide encouragement without triggering performance anxiety.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={0.1 + i * 0.06}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex gap-4 h-full">
                  <span
                    className="text-sm font-bold shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--cs-primary-soft, rgba(167, 139, 250, 0.1))",
                      color: ACCENT,
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-serif text-base text-text-primary mb-1">{step.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── FOOTER NAV ──────────────────── */}
      <footer className="px-6 pb-16">
        <div className="max-w-[var(--width-max)] mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/projects/relocate"
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 hover:border-white/[0.12] transition-all duration-300 block"
            >
              <span className="text-xs uppercase tracking-wider text-text-muted mb-2 block">
                Previous Project
              </span>
              <span className="font-serif text-xl text-text-primary group-hover:text-white transition-colors">
                Relocate
              </span>
            </Link>
            <Link
              href="/projects/syf"
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 hover:border-white/[0.12] transition-all duration-300 block text-right"
            >
              <span className="text-xs uppercase tracking-wider text-text-muted mb-2 block">
                Next Project
              </span>
              <span className="font-serif text-xl text-text-primary group-hover:text-white transition-colors">
                Secure Your Future
              </span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <Lightbox
        src={lightboxSrc}
        alt="Resonate project image"
        onClose={() => setLightboxSrc(null)}
      />
    </CaseStudyLayout>
  );
}
