"use client";

import { useState } from "react";
import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { HeroSection } from "@/components/case-study/HeroSection";
import { MarqueeStrip } from "@/components/case-study/MarqueeStrip";
import { ComparisonBar } from "@/components/case-study/ComparisonBar";
import { InsightCard } from "@/components/case-study/InsightCard";
import { FlowStep } from "@/components/case-study/FlowStep";
import { Lightbox } from "@/components/case-study/Lightbox";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TextReveal } from "@/components/animation/TextReveal";
import { ImageClipReveal } from "@/components/animation/ImageClipReveal";
import type { SectionNavItem } from "@/components/case-study/SectionNav";
import Link from "next/link";

const ACCENT = "#14b8a6";

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
  { icon: "\u{1F3E5}", text: "Capstone Project" },
  { icon: "\u23F1\uFE0F", text: "Intake:", value: "\u2013127s per patient" },
  { icon: "\u2713", text: "Validation:", value: "100% clinical" },
  { icon: "\u{1F4CA}", text: "Data Errors:", value: "\u201330%" },
  { icon: "\u{1F465}", text: "4 Designers" },
  { icon: "\u{1F6E0}\uFE0F", text: "Figma" },
  { icon: "\u{1F5D3}\uFE0F", text: "6 Weeks" },
  { icon: "\u{1F49A}", text: "Patient Comfort:", value: "Improved" },
];

export default function PulseContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <CaseStudyLayout
      projectSlug="pulse"
      accentColor={ACCENT}
      sections={sections}
    >
      {/* ── Hero ────────────────────────────────────────────── */}
      <HeroSection
        sectionId="overview"
        badge="GBDA301 \u00B7 Capstone Project"
        badgeIcon="\u{1F3E5}"
        readTime="8 min read"
        title={
          <>
            Calming{" "}
            <span style={{ color: ACCENT }}>Emergency Room Chaos</span>, One
            Check-in at a Time
          </>
        }
        tagline="A self-triage kiosk that shortens intake, keeps patients informed, and gives nurses the context they need to focus on care."
        meta={[
          { label: "Role", value: "Lead Product Designer" },
          { label: "Timeline", value: "6 Weeks" },
          { label: "Team", value: "4 Designers" },
          { label: "Tools", value: "Figma, Miro" },
        ]}
        heroImage={{
          src: "/assets/images/pulse/pulse-hero-mockup.png",
          alt: "Pulse kiosk interface mockup",
        }}
        heroCaption="Pulse kiosk interface in a hospital setting"
        tldr="Emergency departments asked for relief at the first touchpoint. We delivered a self-triage kiosk that respects patient anxiety, speeds up intake, and gives clinicians structured insight. Two healthcare professionals confirmed feasibility for hospital pilot testing."
        tldrMetrics={[
          {
            value: "127s",
            label: "Time Saved (Field Observation)",
            ringPercent: 80,
          },
          {
            value: "2/2",
            label: "Clinical Feasibility Confirmed",
            ringPercent: 100,
          },
          {
            value: "30%",
            label: "Fewer Data Errors",
            ringPercent: 70,
          },
        ]}
      >
        <MarqueeStrip items={marqueeItems} speed={35} className="mt-10" />

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2 mt-12 animate-bounce">
          <span className="text-xs text-text-muted uppercase tracking-widest">
            Scroll to explore
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-text-muted"
          >
            <path d="M8 4v12M4 12l4 4 4-4" />
          </svg>
        </div>
      </HeroSection>

      {/* ── 01 Story ────────────────────────────────────────── */}
      <section
        id="story"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                01
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
                The Story
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl">
            <TextReveal className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 font-serif italic">
              The project started with a simple question: why does checking into an emergency room feel like entering a black hole?
            </TextReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  Patients arrive scared and in pain. They fill out paper forms. They wait with no idea
                  when they&apos;ll be seen. Meanwhile, nurses juggle multiple systems, re-enter data, and get
                  pulled away by interruptions before they can finish a single intake.
                </p>
                <p>
                  Everyone loses. Patients feel abandoned. Staff burn out. Critical information slips
                  through the cracks. We set out to change that dynamic by designing a{" "}
                  <span style={{ color: ACCENT }} className="font-medium">self-triage system</span>{" "}
                  that collects{" "}
                  <span style={{ color: ACCENT }} className="font-medium">standardized data</span>{" "}
                  quickly, provides{" "}
                  <span style={{ color: ACCENT }} className="font-medium">transparent feedback</span>{" "}
                  to patients, and integrates into{" "}
                  <span style={{ color: ACCENT }} className="font-medium">existing workflows</span>.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <blockquote className="mt-10 pl-6 border-l-2 border-white/10">
                <p className="text-lg italic text-text-secondary leading-relaxed">
                  &ldquo;I just want to know someone sees me. Even a number in a queue would help.&rdquo;
                </p>
                <cite className="block mt-2 text-sm text-text-muted not-italic">
                  &mdash; ER Patient, Field Interview
                </cite>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 02 Challenge ────────────────────────────────────── */}
      <section
        id="challenge"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                02
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
                The Challenge
              </h2>
            </div>
          </ScrollReveal>

          {/* HMW Statement */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 mb-14 max-w-3xl">
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] mb-3 block"
                style={{ color: ACCENT }}
              >
                How Might We
              </span>
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-serif">
                Reduce intake friction while keeping patients informed and giving nurses actionable
                context&mdash;all without adding complexity to an already chaotic environment?
              </p>
            </div>
          </ScrollReveal>

          {/* Pain Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: "\u23F1\uFE0F",
                title: "Manual Data Entry",
                desc: "Adding 127 seconds per patient while nurses babysit forms instead of checking vitals.",
              },
              {
                icon: "\u{1F5FA}\uFE0F",
                title: "No Visibility",
                desc: "Patients have no idea where they stand in the queue, increasing anxiety and perceived wait times.",
              },
              {
                icon: "\u{1F500}",
                title: "Inconsistent Prioritization",
                desc: "Manual symptom recording leads to variability between staff members and shifts.",
              },
              {
                icon: "\u{1F310}",
                title: "Communication Barriers",
                desc: "Language differences and stress make it hard to articulate symptoms under pressure.",
              },
            ].map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full hover:border-white/[0.12] transition-colors duration-300">
                  <span className="text-2xl mb-3 block" aria-hidden="true">
                    {point.icon}
                  </span>
                  <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary mb-2">
                    {point.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Design Principles */}
          <ScrollReveal>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              Design Principles
            </h3>
          </ScrollReveal>

          <div className="space-y-6 max-w-3xl">
            {[
              {
                num: "01",
                title: "Clarity Under Stress",
                desc: "Every interaction must work in poor lighting, high noise, and split-second urgency.",
              },
              {
                num: "02",
                title: "Universal Accessibility",
                desc: "Language, mobility, and visual impairments can\u2019t be barriers to care.",
              },
              {
                num: "03",
                title: "Trust Before Data",
                desc: "Earn patient confidence before asking for sensitive information.",
              },
            ].map((goal, i) => (
              <ScrollReveal key={goal.num} delay={i * 0.1}>
                <div className="flex gap-5 items-start">
                  <span
                    className="text-sm font-bold shrink-0 mt-1"
                    style={{ color: ACCENT }}
                  >
                    {goal.num}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary mb-1">
                      {goal.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {goal.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Research ─────────────────────────────────────── */}
      <section
        id="research"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                03
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
                Research &amp; Discovery
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary leading-relaxed max-w-3xl mb-14">
              We started by <strong className="text-text-primary">mapping the patient journey</strong> and
              talking to healthcare professionals to understand where{" "}
              <strong className="text-text-primary">the system breaks down</strong> and where design could make a difference.
            </p>
          </ScrollReveal>

          {/* Research Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: "\u{1F3E5}",
                title: "Field Observation",
                desc: "Walked the floor, timed every handoff, and catalogued stress points across a full shift.",
                stat: "127s",
                statLabel: "Added per patient from manual entry (timed in field)",
              },
              {
                icon: "\u{1F5E3}\uFE0F",
                title: "Stakeholder Mapping",
                desc: "Mapped patients, triage nurses, and clerks together to close handoff gaps that spark hallway fire drills.",
                stat: "3",
                statLabel: "Journey maps created",
              },
              {
                icon: "\u2713",
                title: "Clinical Validation",
                desc: "ER nurses and physicians pressure-tested safety checks, escalation paths, and documentation.",
                stat: "2/2",
                statLabel: "Healthcare pros confirmed pilot feasibility",
              },
              {
                icon: "\u{1F4CA}",
                title: "Data Analysis",
                desc: "Analyzed wait time data and error rates to identify the highest-impact intervention points.",
                stat: "30%",
                statLabel: "Reduction in data errors",
              },
            ].map((method, i) => (
              <ScrollReveal key={method.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full hover:border-white/[0.12] transition-colors duration-300 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl" aria-hidden="true">
                      {method.icon}
                    </span>
                    <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary">
                      {method.title}
                    </h4>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                    {method.desc}
                  </p>
                  <div
                    className="rounded-lg p-3"
                    style={{ background: "var(--cs-primary-soft, rgba(20, 184, 166, 0.1))" }}
                  >
                    <span
                      className="text-xl font-bold block"
                      style={{ color: ACCENT }}
                    >
                      {method.stat}
                    </span>
                    <span className="text-xs text-text-muted">
                      {method.statLabel}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Why These Methods */}
          <ScrollReveal>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              Why These Methods
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-4xl">
            {[
              {
                icon: "\u{1F3E5}",
                title: "Field Observation",
                desc: "Reading about ER workflows wasn\u2019t enough. We needed to feel the chaos firsthand to design for it authentically.",
              },
              {
                icon: "\u{1F5E3}\uFE0F",
                title: "Stakeholder Mapping",
                desc: "Different roles experience the same process differently. Joint mapping revealed friction invisible to individual interviews.",
              },
              {
                icon: "\u2713",
                title: "Clinical Validation",
                desc: "Healthcare design requires clinical sign-off. Early validation prevented costly pivots later.",
              },
              {
                icon: "\u{1F4CA}",
                title: "Data Analysis",
                desc: "Quantitative data helped prioritize which pain points had the biggest impact on patient experience.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-3 items-start">
                  <span className="text-lg shrink-0" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Key Insights */}
          <ScrollReveal>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              Key Insights
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InsightCard
              number="Insight 01"
              title="Documentation Over Care"
              body="Nurses are documentation machines. Freeing their hands means more face-to-face care time."
              quote="I spend more time on forms than on patients."
              index={0}
            />
            <InsightCard
              number="Insight 02"
              title="Opacity Breeds Anxiety"
              body="Simple queue visibility transforms the emotional experience."
              quote="I don\u2019t know what\u2019s happening. Am I forgotten?"
              index={1}
            />
            <InsightCard
              number="Insight 03"
              title="Information Doesn\u2019t Travel"
              body="Structured data capture prevents redundant interrogation."
              quote="Every nurse asks me the same questions."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ── 04 Solution ─────────────────────────────────────── */}
      <section
        id="solution"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                04
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
                The Solution
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mb-14">
              <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
                A Guided Check-in That Works for Everyone
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Pulse is a self-triage kiosk that collects symptoms through an accessible interface,
                provides real-time queue updates, and delivers structured data to clinical staff.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution Flow */}
          <div className="space-y-12 mb-20 max-w-4xl">
            <FlowStep
              number={1}
              title="Language Selection"
              description="English, French, and additional languages break down communication barriers from the first tap."
              rationale="Solving: Communication barriers for diverse patient populations"
              onImageClick={setLightboxSrc}
            />
            <FlowStep
              number={2}
              title="Health Card Integration"
              description="Quick card scan pulls patient info automatically, reducing manual data entry."
              rationale="Solving: 127 seconds of manual entry per patient"
              onImageClick={setLightboxSrc}
            />
            <FlowStep
              number={3}
              title="Symptom Grid"
              description="Icon-based selection with plain language labels makes complex medical communication accessible."
              rationale="Solving: Inconsistent symptom recording across staff"
              onImageClick={setLightboxSrc}
            />
            <FlowStep
              number={4}
              title="Pain Assessment"
              description="Visual face scale makes pain communication universal, avoiding subjective language."
              rationale="Solving: Language and cultural barriers in pain expression"
              onImageClick={setLightboxSrc}
            />
            <FlowStep
              number={5}
              title="Queue Tracking"
              description="QR code on printed ticket links to live queue updates for continuous visibility."
              rationale="Solving: Patient anxiety from lack of visibility"
              onImageClick={setLightboxSrc}
            />
          </div>

          {/* Key Screens Showcase */}
          <ScrollReveal>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
              Key Screens
            </h3>
            <p className="text-text-secondary leading-relaxed mb-10 max-w-3xl">
              Every screen was optimized for the worst conditions: poor lighting, high stress, and split-second decision making.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/assets/images/pulse/pulse-screen-language.png",
                alt: "Language selection screen",
                title: "Language Selection",
                desc: "Large, clear options with visual icons ensure patients from any background can start confidently.",
              },
              {
                src: "/assets/images/pulse/pulse-screen-card-scan.png",
                alt: "Card scan screen",
                title: "Health Card Scan",
                desc: "Animated illustration shows exactly where to insert the card, with manual entry always visible.",
              },
              {
                src: "/assets/images/pulse/pulse-screen-symptoms.png",
                alt: "Symptom selection screen",
                title: "Symptom Selection",
                desc: "Icon grid with plain language labels lets patients communicate complex symptoms quickly.",
              },
              {
                src: "/assets/images/pulse/pulse-screen-pain.png",
                alt: "Pain assessment screen",
                title: "Pain Assessment",
                desc: "Simple slider with visual face scale makes pain communication universal.",
              },
              {
                src: "/assets/images/pulse/pulse-screen-confirmation.png",
                alt: "Confirmation screen",
                title: "Review & Confirm",
                desc: "Clear summary of entered information with easy edit access before finalizing.",
              },
              {
                src: "/assets/images/pulse/pulse-screen-ticket.png",
                alt: "Ticket screen",
                title: "Queue Access",
                desc: "Printed ticket includes QR code for live queue tracking with neutral, calming language.",
              },
            ].map((screen, i) => (
              <ScrollReveal key={screen.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-colors duration-300">
                  <ImageClipReveal direction="bottom" delay={i * 0.05}>
                    <button
                      type="button"
                      className="w-full cursor-zoom-in"
                      onClick={() => setLightboxSrc(screen.src)}
                    >
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </button>
                  </ImageClipReveal>
                  <div className="p-5">
                    <h4 className="font-serif text-base font-normal tracking-tight text-text-primary mb-1">
                      {screen.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {screen.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Design Process ───────────────────────────────── */}
      <section
        id="design"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                05
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
                Design Process
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary leading-relaxed max-w-3xl mb-14">
              We iterated through multiple rounds of testing to ensure Pulse worked in the high-stress,
              high-stakes environment of an emergency department.
            </p>
          </ScrollReveal>

          {/* Phase 01: Bodystorming */}
          <div className="space-y-20">
            <ScrollReveal>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: ACCENT }}
                  >
                    Phase 01
                  </span>
                  <h4 className="font-serif text-xl font-normal tracking-tight text-text-primary">
                    Physical Exploration (Bodystorming)
                  </h4>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
                  We physically acted out the check-in process, tapping through mock screens, scanning
                  health cards, and printing tickets. This hands-on exploration revealed critical issues
                  that traditional wireframing would have missed.
                </p>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-text-primary mb-3">What We Learned</h5>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-text-muted shrink-0 mt-0.5">&bull;</span>
                      Progress indicators were essential to reduce anxiety
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-text-muted shrink-0 mt-0.5">&bull;</span>
                      Card-scan icons looked like static graphics, not interactive elements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-text-muted shrink-0 mt-0.5">&bull;</span>
                      Standing height affected screen visibility for different users
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ImageClipReveal direction="left">
                    <button
                      type="button"
                      className="w-full cursor-zoom-in rounded-xl overflow-hidden"
                      onClick={() => setLightboxSrc("/assets/images/pulse/pulse-bodystorm-1.png")}
                    >
                      <Image
                        src="/assets/images/pulse/pulse-bodystorm-1.png"
                        alt="Bodystorming session"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </button>
                  </ImageClipReveal>
                  <ImageClipReveal direction="right" delay={0.15}>
                    <button
                      type="button"
                      className="w-full cursor-zoom-in rounded-xl overflow-hidden"
                      onClick={() => setLightboxSrc("/assets/images/pulse/pulse-bodystorm-2.png")}
                    >
                      <Image
                        src="/assets/images/pulse/pulse-bodystorm-2.png"
                        alt="Physical prototype testing"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </button>
                  </ImageClipReveal>
                </div>
              </div>
            </ScrollReveal>

            {/* Phase 02: Paper Prototyping */}
            <ScrollReveal>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: ACCENT }}
                  >
                    Phase 02
                  </span>
                  <h4 className="font-serif text-xl font-normal tracking-tight text-text-primary">
                    Paper Prototyping
                  </h4>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
                  Paper prototypes let us simulate the flow and observe real user behavior without
                  investing in high-fidelity design. Low stakes meant faster iteration.
                </p>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-text-primary mb-3">What We Learned</h5>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-text-muted shrink-0 mt-0.5">&bull;</span>
                      Step confirmations and back buttons needed to be prominent
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-text-muted shrink-0 mt-0.5">&bull;</span>
                      Text contrast was critical for accessibility
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-text-muted shrink-0 mt-0.5">&bull;</span>
                      Emergency bypass button needed high visibility
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <ImageClipReveal direction="bottom">
                    <button
                      type="button"
                      className="w-full cursor-zoom-in rounded-xl overflow-hidden"
                      onClick={() => setLightboxSrc("/assets/images/pulse/pulse-paper-1.png")}
                    >
                      <Image
                        src="/assets/images/pulse/pulse-paper-1.png"
                        alt="Paper prototype iteration"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </button>
                  </ImageClipReveal>
                  <ImageClipReveal direction="bottom" delay={0.1}>
                    <button
                      type="button"
                      className="w-full cursor-zoom-in rounded-xl overflow-hidden"
                      onClick={() => setLightboxSrc("/assets/images/pulse/pulse-paper-2.png")}
                    >
                      <Image
                        src="/assets/images/pulse/pulse-paper-2.png"
                        alt="Paper prototype refinement"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </button>
                  </ImageClipReveal>
                  <ImageClipReveal direction="bottom" delay={0.2}>
                    <button
                      type="button"
                      className="w-full cursor-zoom-in rounded-xl overflow-hidden"
                      onClick={() => setLightboxSrc("/assets/images/pulse/pulse-paper-3.png")}
                    >
                      <Image
                        src="/assets/images/pulse/pulse-paper-3.png"
                        alt="Paper prototype detail"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </button>
                  </ImageClipReveal>
                </div>
              </div>
            </ScrollReveal>

            {/* Phase 03: High-Fidelity Prototype */}
            <ScrollReveal>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: ACCENT }}
                  >
                    Phase 03
                  </span>
                  <h4 className="font-serif text-xl font-normal tracking-tight text-text-primary">
                    High-Fidelity Prototype
                  </h4>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
                  Using Figma, we built a complete interactive system. We translated findings into a
                  cohesive visual language designed for high-stress moments: soft blues, high contrast,
                  and minimal text with audio and visual confirmation cues.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ImageClipReveal direction="left">
                    <button
                      type="button"
                      className="w-full cursor-zoom-in rounded-xl overflow-hidden"
                      onClick={() => setLightboxSrc("/assets/images/pulse/pulse-wireframes-all.png")}
                    >
                      <Image
                        src="/assets/images/pulse/pulse-wireframes-all.png"
                        alt="Complete wireframe overview"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </button>
                  </ImageClipReveal>
                  <ImageClipReveal direction="right" delay={0.15}>
                    <button
                      type="button"
                      className="w-full cursor-zoom-in rounded-xl overflow-hidden"
                      onClick={() => setLightboxSrc("/assets/images/pulse/pulse-design-system.png")}
                    >
                      <Image
                        src="/assets/images/pulse/pulse-design-system.png"
                        alt="Design system"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </button>
                  </ImageClipReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Prototype Embed */}
          <ScrollReveal className="mt-20">
            <div className="max-w-4xl">
              <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
                Try It Yourself
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Walk through Pulse from language selection to ticket printing. Notice how every interaction is designed for clarity under stress.
              </p>

              <div className="rounded-2xl overflow-hidden border border-white/[0.08] aspect-[4/3] mb-4">
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrDhhhJYZFhx36mYOtMzHHb%2FGBDA301-Project%3Fnode-id%3D60-13%26viewport%3D-125%252C108%252C0.1%26t%3DF26k1xNxapY4eI68-0%26scaling%3Dcontain%26content-scaling%3Dfixed%26starting-point-node-id%3D60%253A13"
                  className="w-full h-full"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  title="Pulse interactive prototype"
                />
              </div>

              <a
                href="https://www.figma.com/proto/rDhhhJYZFhx36mYOtMzHHb/GBDA301-Project?node-id=60-13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: ACCENT }}
              >
                Open full prototype
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 06 Reflection ───────────────────────────────────── */}
      <section
        id="reflection"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                06
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
                Reflection &amp; Impact
              </h2>
            </div>
          </ScrollReveal>

          {/* Outcome Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "\u26A1", value: "127s", label: "Time Saved Per Patient (Field Observation)" },
              { icon: "\u2713", value: "2/2", label: "Clinical Feasibility Confirmed" },
              { icon: "\u{1F4CA}", value: "30%", label: "Fewer Data Errors" },
              { icon: "\u{1F49A}", value: "Improved", label: "Patient Comfort" },
            ].map((outcome, i) => (
              <ScrollReveal key={outcome.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center hover:border-white/[0.12] transition-colors duration-300">
                  <span className="text-2xl mb-2 block" aria-hidden="true">
                    {outcome.icon}
                  </span>
                  <span
                    className="text-2xl md:text-3xl font-bold block mb-1"
                    style={{ color: ACCENT }}
                  >
                    {outcome.value}
                  </span>
                  <span className="text-xs text-text-muted">
                    {outcome.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Comparison Bars */}
          <div className="space-y-8 mb-16 max-w-3xl">
            <ScrollReveal>
              <ComparisonBar
                label="Intake Time"
                beforePercent={100}
                afterPercent={75}
                beforeLabel="~8 min manual"
                afterLabel="~6 min with Pulse"
                badge="25% faster"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ComparisonBar
                label="Data Entry Errors"
                beforePercent={100}
                afterPercent={70}
                beforeLabel="Paper forms"
                afterLabel="Structured digital"
                badge="\u201330% errors"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ComparisonBar
                label="Queue Visibility"
                beforePercent={20}
                afterPercent={95}
                beforeLabel="Zero transparency"
                afterLabel="Real-time updates"
                badge="Full visibility"
              />
            </ScrollReveal>
          </div>

          {/* What I Learned */}
          <ScrollReveal>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              What I Learned
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "\u{1F3AF}",
                title: "Context is Everything",
                desc: "Successful service design happens where digital experiences meet real-world behavior. What works in a coffee shop will never fly in an emergency room. Bodystorming revealed issues that wouldn\u2019t have surfaced in traditional wireframing.",
              },
              {
                icon: "\u{1F91D}",
                title: "Stakeholder Alignment",
                desc: "Healthcare design requires clinical sign-off at every stage. Building relationships with nurses and physicians early prevented costly pivots and ensured feasibility.",
              },
              {
                icon: "\u{1F4C8}",
                title: "Stress-Test Everything",
                desc: "Every design decision had to account for stress, poor lighting, mobility constraints, and split-second urgency. Designing for the worst case meant the average case felt effortless.",
              },
            ].map((learning, i) => (
              <ScrollReveal key={learning.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full hover:border-white/[0.12] transition-colors duration-300">
                  <span className="text-2xl mb-3 block" aria-hidden="true">
                    {learning.icon}
                  </span>
                  <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary mb-2">
                    {learning.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {learning.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* If We Continued... (Next Steps) */}
          <ScrollReveal>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-3xl" aria-hidden="true">
                  {"\u{1F52E}"}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-normal tracking-tight mb-1">
                    If We Continued...
                  </h3>
                  <p className="text-sm text-text-muted">Where this project could go next</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    num: "01",
                    title: "Comprehensive Accessibility Testing",
                    desc: "Validate the kiosk for mobility and visual impairments to ensure truly universal access.",
                    tagIcon: "\u267F",
                    tag: "Inclusion",
                  },
                  {
                    num: "02",
                    title: "Staff Dashboard with AI Forecasts",
                    desc: "Build predictive analytics for crowding trends so nurses can anticipate surges.",
                    tagIcon: "\u{1F4CA}",
                    tag: "Analytics",
                  },
                  {
                    num: "03",
                    title: "Hospital System Integration",
                    desc: "Test data pipelines with existing EMR systems to enable seamless clinical workflows.",
                    tagIcon: "\u{1F517}",
                    tag: "Integration",
                  },
                  {
                    num: "04",
                    title: "Extended ED Pilot",
                    desc: "Deploy in a real emergency department with diverse patient populations for longitudinal validation.",
                    tagIcon: "\u{1F3E5}",
                    tag: "Pilot",
                  },
                ].map((step, i) => (
                  <ScrollReveal key={step.num} delay={i * 0.08}>
                    <div className="flex gap-4 items-start">
                      <span
                        className="text-sm font-bold shrink-0 mt-0.5"
                        style={{ color: ACCENT }}
                      >
                        {step.num}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed mb-2">
                          {step.desc}
                        </p>
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{
                            background: "var(--cs-primary-soft, rgba(20, 184, 166, 0.1))",
                            color: ACCENT,
                          }}
                        >
                          <span aria-hidden="true">{step.tagIcon}</span>
                          {step.tag}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Footer Navigation ───────────────────────────────── */}
      <footer className="py-16 px-6 border-t border-white/[0.06]">
        <div className="max-w-[var(--width-max)] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/projects/syf"
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] transition-all duration-300"
            >
              <span className="text-xs text-text-muted uppercase tracking-wider">
                Previous Project
              </span>
              <span className="block font-serif text-xl font-normal tracking-tight text-text-primary mt-1 group-hover:translate-x-1 transition-transform duration-300">
                Secure Your Future
              </span>
            </Link>
            <Link
              href="/projects/relocate"
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] transition-all duration-300 text-right"
            >
              <span className="text-xs text-text-muted uppercase tracking-wider">
                Next Project
              </span>
              <span className="block font-serif text-xl font-normal tracking-tight text-text-primary mt-1 group-hover:translate-x-1 transition-transform duration-300">
                Relocate
              </span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <Lightbox
        src={lightboxSrc}
        alt="Pulse case study image"
        onClose={() => setLightboxSrc(null)}
      />
    </CaseStudyLayout>
  );
}
