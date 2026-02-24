"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { HeroSection } from "@/components/case-study/HeroSection";
import { MarqueeStrip } from "@/components/case-study/MarqueeStrip";
import { ComparisonBar } from "@/components/case-study/ComparisonBar";
import { MetricRing } from "@/components/case-study/MetricRing";
import { PersonaCard } from "@/components/case-study/PersonaCard";
import { InsightCard } from "@/components/case-study/InsightCard";
import { FlowStep } from "@/components/case-study/FlowStep";
import { Lightbox } from "@/components/case-study/Lightbox";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TextReveal } from "@/components/animation/TextReveal";
import { ImageClipReveal } from "@/components/animation/ImageClipReveal";
import type { SectionNavItem } from "@/components/case-study/SectionNav";

/* ─── Constants ──────────────────────────────────────────────── */

const ACCENT = "#0ea5e9";

const SECTIONS: SectionNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "story", label: "Story" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "solution", label: "Solution" },
  { id: "design", label: "Design" },
  { id: "reflection", label: "Reflection" },
];

const MARQUEE_ITEMS = [
  { icon: "\u{1F3C3}", text: "Community Recreation" },
  { icon: "\u{1F50D}", text: "Discovery:", value: "42% faster" },
  { icon: "\u{1F4AA}", text: "Confidence:", value: "+31%" },
  { icon: "\u{1F3AF}", text: "Filters:", value: "+54% usage" },
  { icon: "\u{1F465}", text: "6 People" },
  { icon: "\u{1F6E0}\uFE0F", text: "Figma \u00B7 Notion" },
  { icon: "\u{1F5D3}\uFE0F", text: "10 Weeks" },
];

/* ─── Component ──────────────────────────────────────────────── */

export default function RelocateContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <CaseStudyLayout
      projectSlug="relocate"
      accentColor={ACCENT}
      sections={SECTIONS}
    >
      {/* ── Lightbox (global) ──────────────────────────────── */}
      <Lightbox
        src={lightboxSrc}
        alt="Enlarged view"
        onClose={() => setLightboxSrc(null)}
      />

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <HeroSection
        sectionId="overview"
        badge="GBDA210 \u00B7 Academic Project"
        badgeIcon="\u{1F3C3}"
        readTime="7 min read"
        title={
          <>
            From{" "}
            <span style={{ color: ACCENT }}>PDF Schedules</span> to
            Confident Bookings
          </>
        }
        tagline="Finding a swim class shouldn't require downloading a PDF. I led research, strategy, and product design to redesign municipal recreation discovery."
        meta={[
          { label: "Role", value: "PM & UX Designer" },
          { label: "Timeline", value: "10 Weeks" },
          { label: "Team", value: "6 People" },
          { label: "Tools", value: "Figma, Notion" },
        ]}
        heroImage={{
          src: "/assets/images/relocate/relocate-hero.png",
          alt: "Relocate platform mockups showing discovery and booking",
        }}
        heroCaption="Relocate mobile app interface showing discovery and booking"
        tldr="Legacy portals, outdated PDFs, and calling facilities for basic info created slow decision-making and accessibility barriers. We redesigned the experience around three personas\u2014explorers, planners, and athletes\u2014so residents move from confusion to clarity and hesitation to confidence. Usability testing showed faster discovery and higher booking confidence versus legacy portals."
        tldrMetrics={[
          { value: "42%", label: "Faster Discovery (Testing)", ringPercent: 42 },
          { value: "Projected", label: "+31% Booking Confidence", ringPercent: 31 },
          { value: "Projected", label: "+54% Filter Usage", ringPercent: 54 },
        ]}
      >
        {/* Marquee strip */}
        <MarqueeStrip
          items={MARQUEE_ITEMS}
          direction="right"
          speed={35}
          className="mt-8 border-y border-white/[0.06] py-4"
        />

        {/* Scroll cue */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-xs tracking-widest uppercase text-text-muted">
            Scroll to explore
          </span>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </HeroSection>

      {/* ══════════════════════════════════════════════════════
          01 \u2013 THE STORY
      ══════════════════════════════════════════════════════ */}
      <section
        id="story"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                01
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                The Story
              </h2>
            </div>
          </ScrollReveal>

          {/* Lead text */}
          <ScrollReveal delay={0.1}>
            <TextReveal className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mb-10">
              Recreation, Rediscovered. Legacy portals, outdated PDFs, and calling facilities for basic information created slow decisions and uncertainty about what was actually available.
            </TextReveal>
          </ScrollReveal>

          {/* Narrative */}
          <ScrollReveal delay={0.15}>
            <div className="max-w-3xl space-y-5 text-text-secondary leading-relaxed mb-10">
              <p>
                Our research surfaced the real-life challenges:{" "}
                <span className="text-text-primary font-medium">legacy portals</span> with
                outdated information,{" "}
                <span className="text-text-primary font-medium">PDF schedules</span> that
                required downloads just to see availability, and{" "}
                <span className="text-text-primary font-medium">phone calls to facilities</span>{" "}
                for basics. That created friction at every step of discovery and booking.
              </p>
              <p>
                Residents told us they needed clarity\u2014availability, accessibility details,
                costs, and schedule confidence. They wanted to know what was nearby without
                navigating redundant forms or downloading files.
              </p>
              <p>
                Our goal became clear: make recreation discovery fast, accessible, and
                confidence-building. A platform that turns confusion into clarity and hesitation
                into confidence.
              </p>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.2}>
            <blockquote className="relative pl-6 border-l-2 border-white/[0.08] max-w-2xl mb-12">
              <p className="text-lg italic text-text-secondary leading-relaxed">
                &ldquo;I just want to know if the pool is open before I drive across town.&rdquo;
              </p>
              <cite className="block mt-2 text-sm text-text-muted not-italic">
                \u2014 Survey Respondent
              </cite>
            </blockquote>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
              {[
                { value: "50+", label: "Survey responses gathered" },
                { value: "10+", label: "In-depth interviews" },
                { value: "4", label: "Municipal portals audited" },
              ].map((stat) => (
                <MetricRing
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  percent={100}
                  size={80}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 \u2013 THE CHALLENGE
      ══════════════════════════════════════════════════════ */}
      <section
        id="challenge"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: "#ef4444" }}
              >
                02
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                The Challenge
              </h2>
            </div>
          </ScrollReveal>

          {/* HMW Statement */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 mb-14">
              <span
                className="text-xs font-bold uppercase tracking-wider block mb-3"
                style={{ color: "#ef4444" }}
              >
                How Might We
              </span>
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-serif">
                Help residents discover, plan, and book recreational activities without
                navigating legacy portals, downloading PDFs, or calling facilities directly?
              </p>
            </div>
          </ScrollReveal>

          {/* Pain Points */}
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: "\u{1F9FC}",
                  title: "Maintenance Blind Spots",
                  desc: "Facility upkeep updates lived on social media or PDF bulletins, forcing users to gamble on availability every visit.",
                },
                {
                  icon: "\u{1F9ED}",
                  title: "Navigation Sprawl",
                  desc: "Legacy IA forced people through redundant forms and unclear labels, especially painful on mobile.",
                },
                {
                  icon: "\u{1F4C5}",
                  title: "Planning Overhead",
                  desc: "Comparing schedules meant juggling tabs, PDFs, and phone calls before any slot could be confirmed.",
                },
                {
                  icon: "\u267F",
                  title: "Accessibility Gaps",
                  desc: "Filters for accessibility, cost, and language were missing, limiting participation for families and newcomers.",
                },
              ].map((pain, i) => (
                <ScrollReveal key={pain.title} delay={0.1 + i * 0.08}>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full">
                    <span className="text-2xl mb-3 block" aria-hidden="true">
                      {pain.icon}
                    </span>
                    <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary mb-2">
                      {pain.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {pain.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Personas */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-2">
              Who We Designed For
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl">
              These personas kept us focused on real needs instead of the wish list
              municipalities usually bring to the table.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <PersonaCard
              emoji="\u{1F5FA}\uFE0F"
              name="Peter"
              role="The Explorer"
              quote="Wants to try new activities, discover what's nearby, and browse visual schedules or maps."
              index={0}
            />
            <PersonaCard
              emoji="\u{1F4DD}"
              name="Lisa"
              role="The Planner"
              quote="Needs clarity\u2014availability, accessibility details, costs, and schedule confidence."
              index={1}
            />
            <PersonaCard
              emoji="\u{1F3C0}"
              name="Timmy"
              role="The Athlete"
              quote="Focuses on routine and staying up-to-date. Needs fast access to alerts and timely change notifications."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 \u2013 RESEARCH & DISCOVERY
      ══════════════════════════════════════════════════════ */}
      <section
        id="research"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                03
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                Research &amp; Discovery
              </h2>
            </div>
          </ScrollReveal>

          {/* Intro */}
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mb-14">
              To understand the real-life challenges residents face, we ran a rigorous
              mixed-methods research process. It revealed both user-facing and
              municipal-facing challenges and gave us a holistic view of the recreation
              ecosystem.
            </p>
          </ScrollReveal>

          {/* Why These Methods */}
          <ScrollReveal delay={0.15}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-6">
              Why These Methods
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: "\u{1F4CB}",
                title: "Listen Widely",
                desc: "We needed breadth fast across many facilities and user types. Surveys gave us patterns in booking behavior and decision-making that shaped where to go deeper. Diary studies would have been richer but we didn't have the timeline.",
              },
              {
                icon: "\u{1F50D}",
                title: "Map the System",
                desc: "Portal audits let us compare apples to apples across municipalities. We chose portal audits over competitive analysis because the real benchmark was existing government tools, not commercial apps.",
              },
              {
                icon: "\u{1F9EA}",
                title: "Prototype Fast",
                desc: "Low-fidelity testing reduced attachment to ideas and got honest feedback before we invested in polish. For a 10-week project with multiple stakeholders, fast cycles kept everyone aligned.",
              },
              {
                icon: "\u{1F465}",
                title: "Test and Refine",
                desc: "Interviews uncovered emotional drivers and pain points that survey data alone couldn't reveal\u2014especially around accessibility and trust in \u201Cyour bookings\u201D vs. templates.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl" aria-hidden="true">
                      {item.icon}
                    </span>
                    <h4 className="font-medium text-text-primary">{item.title}</h4>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Key Insights */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              What Users Taught Us
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InsightCard
              number="Insight 01"
              title="Hidden Map View"
              body="Problem: Poor discoverability of a critical exploration tool. Opportunity: Make the map/list toggle prominent and intuitive so explorers can switch views instantly."
              quote="The map is hidden. I didn't know I could switch views."
              index={0}
            />
            <InsightCard
              number="Insight 02"
              title="State Confusion"
              body="Problem: Users couldn't trust what they were seeing. Opportunity: Persistent state and clear labeling (\u201CYour Bookings\u201D) to build confidence and eliminate ambiguity."
              quote="Is this my schedule or a template?"
              index={1}
            />
            <InsightCard
              number="Insight 03"
              title="Buried Filters"
              body="Problem: Filters lived in an overflow menu, making them hard to find. Opportunity: Surface filters next to search for faster refinement and higher engagement."
              quote="Filters are the most useful thing\u2014why are they hidden?"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 \u2013 THE SOLUTION
      ══════════════════════════════════════════════════════ */}
      <section
        id="solution"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                04
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                The Solution
              </h2>
            </div>
          </ScrollReveal>

          {/* Overview */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
              Features That Emerged From Research
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-3xl mb-10">
              We focused on the four that had the biggest impact on our personas. For Peter
              (Explorer), discovery and map; for Lisa (Planner), visual schedules and clear
              &ldquo;your bookings&rdquo; state; for Timmy (Athlete), timely alerts and
              facility status.
            </p>
          </ScrollReveal>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "\u{1F3DF}\uFE0F",
                title: "Facility Status",
                desc: "Live maintenance banners keep visitors informed before they leave home.",
                persona: "For: Everyone",
              },
              {
                icon: "\u{1F50D}",
                title: "Smart Search & Map",
                desc: "Search by facility, activity, or neighborhood. Map and list toggle surfaced so explorers like Peter can switch views instantly.",
                persona: "For: Peter (Explorer)",
              },
              {
                icon: "\u{1F5D3}\uFE0F",
                title: "Visual Schedules",
                desc: "Color-coded availability, bookings, and closures. Addresses Lisa's need for clarity and schedule confidence.",
                persona: "For: Lisa (Planner)",
              },
              {
                icon: "\u{1F9E9}",
                title: "Inclusive Filters",
                desc: "Filter by cost, mobility access, and language. Placed next to search after testing showed hidden filters were a major pain point.",
                persona: "For: Accessibility & discovery",
              },
              {
                icon: "\u{1F514}",
                title: "Timely Alerts",
                desc: "Notifications for schedule updates, bookings, and maintenance. For Timmy and other routine-focused users.",
                persona: "For: Timmy (Athlete)",
              },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={0.08 + i * 0.06}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full flex flex-col">
                  <span className="text-2xl mb-3" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                    {feature.desc}
                  </p>
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full w-fit"
                    style={{
                      background: "var(--cs-primary-soft)",
                      color: "var(--cs-primary)",
                    }}
                  >
                    {feature.persona}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary leading-relaxed max-w-3xl mt-8">
              Additional scope we designed but deprioritized for the MVP: guided onboarding,
              city dashboard analytics, and inline feedback loops for municipalities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          05 \u2013 DESIGN PROCESS
      ══════════════════════════════════════════════════════ */}
      <section
        id="design"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                05
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                Design Process
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mb-14">
              From rough sketches to tested prototypes, we moved fast but kept research
              artifacts visible so every iteration stayed grounded.
            </p>
          </ScrollReveal>

          {/* Phase 01: Paper Prototypes */}
          <FlowStep
            number={1}
            title="Paper Prototypes"
            description="Quick pen and paper explorations helped us test flows without getting attached to pixels. We could iterate three times in one session."
            image={{
              src: "/assets/images/relocate/relocate-paper-1.jpg",
              alt: "Paper prototype sketches",
            }}
            onImageClick={setLightboxSrc}
            className="mb-16"
          />

          {/* Phase 02: Low-Fi Wireframes */}
          <FlowStep
            number={2}
            title="Low-Fi Wireframes"
            description="Clickable wireframes walked users through filters, search, and discovery. Grayscale kept feedback focused on flow, not aesthetics."
            image={{
              src: "/assets/images/relocate/relocate-wireframe.png",
              alt: "Low-fi wireframes",
            }}
            reverse
            onImageClick={setLightboxSrc}
            className="mb-16"
          />

          {/* Phase 03: High-Fidelity Screens */}
          <div className="mb-16">
            <FlowStep
              number={3}
              title="High-Fidelity Screens"
              description="Polished UI with a bright palette and bold typography we scoped after testing. Color and spacing were tuned for outdoor use on mobile."
              image={{
                src: "/assets/images/relocate/relocate-highfi-screens.png",
                alt: "High-fi screens",
              }}
              onImageClick={setLightboxSrc}
            />
            {/* Additional hi-fi image */}
            <ScrollReveal delay={0.2} className="mt-8">
              <ImageClipReveal direction="bottom" className="rounded-2xl overflow-hidden">
                <button
                  type="button"
                  className="cursor-zoom-in w-full"
                  onClick={() =>
                    setLightboxSrc("/assets/images/relocate/relocate-screen-mockups.png")
                  }
                >
                  <Image
                    src="/assets/images/relocate/relocate-screen-mockups.png"
                    alt="Screen mockups"
                    width={1200}
                    height={750}
                    className="w-full h-auto"
                  />
                </button>
              </ImageClipReveal>
            </ScrollReveal>
          </div>

          {/* Prototype embed */}
          <ScrollReveal delay={0.15}>
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
                Walk the Relocate Prototype
              </h3>
              <p className="text-text-secondary mb-6">
                Preview the end-to-end experience, from discovery to booking confirmation.
              </p>

              <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] aspect-[16/10]">
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlkE5bh37HtcuFfzTDGtYZo%2FMilestones%3Fnode-id%3D564-7535%26viewport%3D4821%252C1430%252C0.47%26t%3DzOvQ3z3UyxL9Eypr-0%26scaling%3Dcontain%26content-scaling%3Dfixed%26starting-point-node-id%3D564%253A7535"
                  className="w-full h-full border-0"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  title="Relocate Figma Prototype"
                />
              </div>

              <a
                href="https://www.figma.com/proto/lkE5bh37HtcuFfzTDGtYZo/Milestones?node-id=564-7535"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: ACCENT }}
              >
                Open full prototype
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          06 \u2013 REFLECTION & IMPACT
      ══════════════════════════════════════════════════════ */}
      <section
        id="reflection"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-widest"
                style={{ color: ACCENT }}
              >
                06
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                Reflection &amp; Impact
              </h2>
            </div>
          </ScrollReveal>

          {/* Personal reflection quote */}
          <ScrollReveal delay={0.1}>
            <blockquote className="relative pl-6 border-l-2 max-w-3xl mb-14" style={{ borderColor: ACCENT }}>
              <p className="text-lg md:text-xl italic text-text-secondary leading-relaxed">
                &ldquo;Designing Relocate taught me how deeply municipal systems affect everyday
                routines. I learned to balance user needs, government constraints, accessibility
                considerations, legacy system limitations, and multi-persona journeys.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          {/* Impact Metrics */}
          <ScrollReveal delay={0.15}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-2">
              Impact Metrics
            </h3>
            <p className="text-text-secondary mb-8">
              From moderated usability testing and comparative task analysis vs. legacy portals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: "\u23F1\uFE0F",
                value: "42%",
                label: "Faster Activity Discovery",
                desc: "Faster discovery of relevant activities compared to legacy municipal portals in task-based testing.",
                percent: 42,
              },
              {
                icon: "\u2705",
                value: "Projected",
                label: "+31% Booking Confidence",
                desc: "User-reported confidence when deciding to book (Likert-scale, post-test).",
                percent: 31,
              },
              {
                icon: "\u{1F50D}",
                value: "Projected",
                label: "+54% Filter Usage",
                desc: "Filter interaction in testing after surfacing filters alongside search.",
                percent: 54,
              },
            ].map((metric, i) => (
              <ScrollReveal key={metric.label} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">
                  <span className="text-2xl block mb-3" aria-hidden="true">
                    {metric.icon}
                  </span>
                  <MetricRing
                    value={metric.value}
                    label={metric.label}
                    percent={metric.percent}
                    size={96}
                    strokeWidth={3}
                  />
                  <p className="text-sm text-text-secondary leading-relaxed mt-4">
                    {metric.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* How We Measured Impact */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
              How We Measured Impact
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-3xl mb-10">
              Because Relocate was a new product concept, impact was measured through moderated
              usability testing and comparative task analysis, informed by existing municipal
              workflows.
            </p>
          </ScrollReveal>

          {/* Measurement timeline steps */}
          <div className="space-y-8 mb-14 max-w-3xl">
            <FlowStep
              number={1}
              title="Baseline Benchmarking"
              description="We audited 4 existing municipal recreation portals and timed how long common tasks took \u2014 finding an activity, checking availability, and completing a booking. These benchmarks became our \u201Cbefore\u201D metrics."
              rationale="4 portals audited \u00B7 Task timing \u00B7 Heuristic evaluation"
            />
            <FlowStep
              number={2}
              title="Moderated Usability Testing"
              description="Participants completed identical tasks on our Relocate prototype and rated their experience across three dimensions: clarity of information, ease of decision-making, and confidence in completing a booking."
              rationale="10 participants \u00B7 Think-aloud protocol \u00B7 Likert-scale ratings"
            />
            <FlowStep
              number={3}
              title="Comparative Task Analysis"
              description="We compared task completion times and success rates between legacy portals and Relocate. Filter engagement was measured by tracking how often participants interacted with the surfaced filter UI vs. the hidden overflow menus of existing tools."
              rationale="Time-on-task \u00B7 Success rate \u00B7 Filter interaction logs"
            />
          </div>

          {/* Result box */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 max-w-3xl mb-14">
              <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary mb-3">
                Result
              </h4>
              <p className="text-text-secondary leading-relaxed mb-3">
                Testing showed that Relocate significantly reduced friction in discovery,
                improved clarity around scheduling and availability, and increased user
                confidence when booking recreational activities.
              </p>
              <p className="text-sm text-text-muted italic">
                All metrics reflect projected outcomes based on usability testing and research
                insights.
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison Bars */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8 max-w-3xl mb-16">
              <ComparisonBar
                label="Activity Discovery Time"
                beforePercent={100}
                afterPercent={58}
                beforeLabel="Legacy portals"
                afterLabel="Relocate"
                badge="42% faster"
              />
              <ComparisonBar
                label="Booking Confidence"
                beforePercent={50}
                afterPercent={81}
                beforeLabel="Hesitant, unsure"
                afterLabel="Confident, informed"
                badge="+31% increase"
              />
              <ComparisonBar
                label="Filter Engagement"
                beforePercent={30}
                afterPercent={84}
                beforeLabel="Hidden filters"
                afterLabel="Surfaced alongside search"
                badge="+54% usage"
              />
            </div>
          </ScrollReveal>

          {/* What I Learned */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              What I Learned
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "\u{1F5E3}\uFE0F",
                title: "User Voices Drive Decisions",
                desc: "Sharing verbatim quotes persuaded stakeholders to prioritize accessibility and inclusive programming early. Real words cut through opinion.",
              },
              {
                icon: "\u{1F504}",
                title: "Weekly Workshops Scale Understanding",
                desc: "Weekly workshops raised shared understanding and sped up critique cycles, making each iteration sharper than the last.",
              },
              {
                icon: "\u{1F3AF}",
                title: "Personas Keep Scope Tight",
                desc: "When scope creep threatened, returning to Peter, Lisa, and Timmy helped us say no to features that didn't serve real needs.",
              },
            ].map((learning, i) => (
              <ScrollReveal key={learning.title} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full">
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

          {/* If We Continued... / Next Steps */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className="text-3xl" aria-hidden="true">
                  {"\u{1F52E}"}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-normal tracking-tight">
                    If We Continued...
                  </h3>
                  <p className="text-text-muted text-sm">The roadmap ahead</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6 max-w-3xl">
            <FlowStep
              number={1}
              title="Municipal Data Pilot"
              description="Partner with a real city to test data integration and validate the platform in production."
              rationale="\u{1F3DB}\uFE0F Pilot"
            />
            <FlowStep
              number={2}
              title="Administrator Dashboard"
              description="Build the city-facing dashboard so program administrators can track engagement and demand."
              rationale="\u{1F4CA} Analytics"
            />
            <FlowStep
              number={3}
              title="ADA-Compliant Navigation Patterns"
              description="Iterate on accessibility filters and navigation patterns based on user feedback to cover more needs and edge cases."
              rationale="\u267F Inclusion"
            />
            <FlowStep
              number={4}
              title="Deeper Personalization"
              description="Predictive scheduling based on interests and partnerships with local community groups to enhance discovery."
              rationale="\u{1F3AF} Personalization"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER NAVIGATION
      ══════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.06] px-6 py-16">
        <div className="max-w-[var(--width-max)] mx-auto grid grid-cols-2 gap-6">
          <Link
            href="/projects/pulse"
            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
          >
            <span className="text-xs uppercase tracking-widest text-text-muted block mb-2">
              Previous Project
            </span>
            <span className="font-serif text-xl md:text-2xl text-text-primary group-hover:text-white transition-colors">
              Pulse
            </span>
          </Link>
          <Link
            href="/projects/resonate"
            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 text-right transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
          >
            <span className="text-xs uppercase tracking-widest text-text-muted block mb-2">
              Next Project
            </span>
            <span className="font-serif text-xl md:text-2xl text-text-primary group-hover:text-white transition-colors">
              Resonate
            </span>
          </Link>
        </div>
      </footer>
    </CaseStudyLayout>
  );
}
