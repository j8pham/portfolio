"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { HeroSection } from "@/components/case-study/HeroSection";
import { MarqueeStrip } from "@/components/case-study/MarqueeStrip";
import { ComparisonBar } from "@/components/case-study/ComparisonBar";
import { FlowStep } from "@/components/case-study/FlowStep";
import { PersonaCard } from "@/components/case-study/PersonaCard";
import { InsightCard } from "@/components/case-study/InsightCard";
import { MetricRing } from "@/components/case-study/MetricRing";
import { Lightbox, LightboxImage } from "@/components/case-study/Lightbox";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TextReveal } from "@/components/animation/TextReveal";
import { ImageClipReveal } from "@/components/animation/ImageClipReveal";
import type { SectionNavItem } from "@/components/case-study/SectionNav";

const ACCENT_COLOR = "#3b82f6";

const sections: SectionNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "story", label: "Story" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "solution", label: "Solution" },
  { id: "design", label: "Design" },
  { id: "reflection", label: "Reflection" },
];

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const marqueeItems = [
  { icon: "\u{1F3D4}\uFE0F", text: "Design Jam 2025" },
  { icon: "\u2713", text: "Task Success:", value: "100%" },
  { icon: "\uD83D\uDCC8", text: "Projected lead quality:", value: "+65%" },
  { icon: "\uD83D\uDC65", text: "5 Designers" },
  { icon: "\uD83D\uDEE0\uFE0F", text: "Figma \u00B7 FigJam \u00B7 Miro" },
  { icon: "\u23F1\uFE0F", text: "1 Week Sprint" },
  { icon: "\uD83C\uDFAF", text: "Milestone-first planning" },
  { icon: "\uD83C\uDDE8\uD83C\uDDE6", text: "Co-operators Insurance" },
];

export function SYFContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <CaseStudyLayout
      projectSlug="syf"
      accentColor={ACCENT_COLOR}
      sections={sections}
    >
      {/* ─── HERO ─── */}
      <HeroSection
        sectionId="overview"
        badge="Co-operators Design Jam 2025"
        badgeIcon={"\u{1F3D4}\uFE0F"}
        readTime="6 min read"
        title={
          <>
            Turning{" "}
            <span style={{ color: ACCENT_COLOR }}>Financial Anxiety</span> Into{" "}
            <span className="text-blue-300">Confident Planning</span>
          </>
        }
        tagline="In one week, I redesigned how Canadians plan for life milestones with Co-operators. The result: a milestone planner that builds trust before asking for details."
        meta={[
          { label: "Role", value: "Lead UX Designer" },
          { label: "Timeline", value: "1 Week Sprint" },
          { label: "Team", value: "5 Designers" },
          { label: "Tools", value: "Figma, FigJam, Miro" },
        ]}
        heroImage={{
          src: "/assets/images/syf/syf-hero-mockup.png",
          alt: "Secure Your Future milestone planner mockup",
        }}
        heroCaption="Secure Your Future milestone planner interface"
        tldr="We flipped the script: start with life goals, not policy questions. In usability testing, 100% of participants completed the full flow; comparative analysis suggested a projected improvement in lead quality versus the existing product-first portal."
        tldrMetrics={[
          {
            value: "100%",
            label: "Task Success (Testing)",
            ringPercent: 100,
          },
          {
            value: "+65%",
            label: "Projected Lead Quality",
            ringPercent: 80,
          },
          {
            value: "5",
            label: "Pilot Teams",
            ringPercent: 16,
          },
        ]}
      >
        {/* Marquee strip */}
        <MarqueeStrip
          items={marqueeItems}
          speed={40}
          className="mt-10 border-t border-b border-white/[0.06] py-4"
        />

        {/* Scroll cue */}
        <motion.div
          className="flex flex-col items-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: easeOutExpo }}
        >
          <span className="text-xs text-text-muted tracking-widest uppercase">
            Scroll to explore
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-text-muted/60 to-transparent"
            animate={{ scaleY: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </HeroSection>

      {/* ─── STORY ─── */}
      <section
        id="story"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT_COLOR }}
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
            <div className="max-w-3xl mb-10">
              <TextReveal className="text-xl md:text-2xl text-text-secondary leading-relaxed font-serif italic">
                Most Canadians feel overwhelmed by financial planning. We reframed the process around life moments so folks can imagine a future version of themselves before anyone talks numbers.
              </TextReveal>
            </div>
          </ScrollReveal>

          {/* Narrative */}
          <ScrollReveal delay={0.15}>
            <div className="max-w-3xl space-y-5 mb-12">
              <p className="text-text-secondary leading-relaxed">
                People don&apos;t wake up thinking &ldquo;I need insurance.&rdquo; They think about buying a home,
                starting a family, or retiring comfortably. Traditional financial planning forced them
                to speak a{" "}
                <span className="font-semibold text-text-primary">foreign language</span> first.{" "}
                <span className="font-semibold text-text-primary">Product-first portals</span> led with
                policy questions before users even understood how coverage supported their lives.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I led the concept-to-prototype journey: research synthesis, experience mapping, and
                interaction design. The team collaborated on flows and visuals; my focus was making
                a planner that{" "}
                <span className="font-semibold text-text-primary">earns trust</span> before it asks for details.
              </p>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.2}>
            <blockquote className="relative pl-6 border-l-2 max-w-2xl mb-14" style={{ borderColor: ACCENT_COLOR }}>
              <p className="text-lg md:text-xl font-serif italic text-text-primary leading-relaxed">
                &ldquo;Users don&apos;t plan by product. They plan by life event.&rdquo;
              </p>
              <cite className="block mt-2 text-sm text-text-muted not-italic">
                &mdash; Team Insight
              </cite>
            </blockquote>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-2">
                <MetricRing
                  value="30%"
                  label="of Canadians are underinsured"
                  percent={30}
                  animateValue
                  numericValue={30}
                  suffix="%"
                />
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl font-bold text-text-primary">1 in 3</span>
                  <span className="text-xs text-text-muted font-medium max-w-[120px]">
                    feel confident about finances
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl font-bold text-text-primary">7 days</span>
                  <span className="text-xs text-text-muted font-medium max-w-[120px]">
                    to design, test &amp; deliver
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CHALLENGE ─── */}
      <section
        id="challenge"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: "#ef4444" }}
              >
                02
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                The Challenge
              </h2>
            </div>
          </ScrollReveal>

          {/* HMW */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mb-14">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  color: "#ef4444",
                }}
              >
                How Might We
              </span>
              <p className="font-serif text-2xl md:text-3xl text-text-primary leading-snug">
                Help Canadians feel confident about financial planning by starting with their
                dreams instead of intimidating policy jargon?
              </p>
            </div>
          </ScrollReveal>

          {/* Problem visual */}
          <ScrollReveal delay={0.15}>
            <ImageClipReveal className="rounded-2xl overflow-hidden mb-3 max-w-4xl mx-auto">
              <LightboxImage
                src="/assets/images/syf/syf-solution-flow.png"
                alt="Complete user flow from landing to personalized plan"
                onOpen={setLightboxSrc}
                width={1200}
                height={600}
              />
            </ImageClipReveal>
            <p className="text-center text-sm text-text-muted mb-14">
              Research data revealing the financial literacy gap across demographics
            </p>
          </ScrollReveal>

          {/* Pain points */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: "\uD83D\uDCDA",
                  title: "Too Much Jargon",
                  body: "Portals led with policy questions before users understood how coverage supported their lives. The language felt cold and transactional.",
                },
                {
                  icon: "\uD83C\uDFAF",
                  title: "No Personalization",
                  body: "Dense terminology and long forms chipped away at confidence before value was visible. Everyone got the same experience, regardless of goals.",
                },
                {
                  icon: "\u2744\uFE0F",
                  title: "Cold Handoffs",
                  body: "Advisors received little context about users\u2019 dreams and priorities, so outreach felt generic instead of tailored and empathetic.",
                },
              ].map((pain, i) => (
                <InsightCard
                  key={pain.title}
                  icon={pain.icon}
                  title={pain.title}
                  body={pain.body}
                  index={i}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Before/After approach comparison */}
          <ScrollReveal delay={0.25}>
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
                From Product-First to Milestone-First
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
                We moved from leading with policy questions to leading with life goals. The visual below captures the shift our research and design supported.
              </p>
              <ImageClipReveal className="rounded-2xl overflow-hidden mb-3 max-w-4xl mx-auto">
                <LightboxImage
                  src="/assets/images/syf/syf-problem-stats.png"
                  alt="Research data showing the financial literacy gap"
                  onOpen={setLightboxSrc}
                  width={1200}
                  height={600}
                />
              </ImageClipReveal>
              <p className="text-center text-sm text-text-muted">
                Left: product-first portals &middot; Right: our milestone-first approach
              </p>
            </div>
          </ScrollReveal>

          {/* Design Pillars */}
          <ScrollReveal delay={0.3}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              Design Pillars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "\uD83C\uDF04",
                  title: "Start With Goals",
                  body: "Users pick the milestones they care about. Their priorities lead, not ours.",
                },
                {
                  icon: "\uD83E\uDDED",
                  title: "Guide With Clarity",
                  body: "Plain language and visual timelines make progress tangible without overwhelming.",
                },
                {
                  icon: "\uD83E\uDD1D",
                  title: "Empower Advisors",
                  body: "Goal context travels with every lead so follow-up feels informed and empathetic.",
                },
              ].map((pillar, i) => (
                <InsightCard
                  key={pillar.title}
                  icon={pillar.icon}
                  title={pillar.title}
                  body={pillar.body}
                  index={i}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── RESEARCH ─── */}
      <section
        id="research"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: "#60a5fa" }}
              >
                03
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                Research &amp; Discovery
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary leading-relaxed max-w-3xl mb-10 text-lg">
              We talked to Canadians across life stages and worked with Co-operators advisors
              to understand what makes financial planning feel approachable.
            </p>
          </ScrollReveal>

          {/* Research visual */}
          <ScrollReveal delay={0.15}>
            <ImageClipReveal className="rounded-2xl overflow-hidden mb-3 max-w-4xl mx-auto">
              <LightboxImage
                src="/assets/images/syf/syf-research.png"
                alt="Research and discovery synthesis"
                onOpen={setLightboxSrc}
                width={1200}
                height={600}
              />
            </ImageClipReveal>
            <p className="text-center text-sm text-text-muted mb-14">
              Research and discovery
            </p>
          </ScrollReveal>

          {/* Research stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              <MetricRing
                value="30%"
                label="Of Canadians are underinsured"
                percent={30}
                animateValue
                numericValue={30}
                suffix="%"
              />
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-3xl font-bold text-text-primary">1 in 3</span>
                <span className="text-xs text-text-muted font-medium max-w-[120px]">
                  Feel confident about finances
                </span>
              </div>
              <MetricRing
                value="70%"
                label="Expect mobile-first simplicity"
                percent={70}
                animateValue
                numericValue={70}
                suffix="%"
              />
            </div>
          </ScrollReveal>

          {/* Personas */}
          <ScrollReveal delay={0.25}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
              Three Personas Guided Our Decisions
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-3xl mb-8">
              Paige (early career), Farah (mid-career), and Irene (pre-retirement) shaped where we put emphasis: quick clarity for Farah, gentle onboarding for Paige, and reassurance for Irene.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PersonaCard
              emoji={"\uD83D\uDC69\u200D\uD83C\uDF93"}
              name="Paige, 22"
              role="Early Career"
              quote="I just need someone to explain where to start."
              index={0}
            />
            <PersonaCard
              emoji={"\uD83D\uDC69\u200D\uD83D\uDCBC"}
              name="Farah, 39"
              role="Mid-Career"
              quote="I'm juggling goals and I need clarity fast."
              index={1}
            />
            <PersonaCard
              emoji={"\uD83D\uDC75"}
              name="Irene, 62"
              role="Pre-Retirement"
              quote="I want reassurance I've saved enough."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section
        id="solution"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT_COLOR }}
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
            <div className="max-w-3xl mb-10">
              <h3 className="font-serif text-2xl font-normal tracking-tight mb-4">
                Five Screens That Translate Dreams Into Action
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Each step was designed to build trust before asking for commitment. For Paige we kept
                the welcome and goal picker simple; for Farah we made the timeline and next steps fast
                to scan; for Irene we emphasized clear summaries and one-tap advisor booking.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution flow overview image */}
          <ScrollReveal delay={0.15}>
            <ImageClipReveal className="rounded-2xl overflow-hidden mb-3 max-w-4xl mx-auto">
              <LightboxImage
                src="/assets/images/syf/syf-approach-comparison.png"
                alt="Product-first vs milestone-first approach comparison"
                onOpen={setLightboxSrc}
                width={1200}
                height={600}
              />
            </ImageClipReveal>
            <p className="text-center text-sm text-text-muted mb-16">
              End-to-end user flow &mdash; from welcome screen to personalized action plan
            </p>
          </ScrollReveal>

          {/* Flow steps */}
          <div className="space-y-16 md:space-y-24">
            <FlowStep
              number={1}
              title="A Warm Welcome, Not a Sales Pitch"
              description="The mountain path hints at steady growth and the journey ahead. A single &quot;Get Started&quot; button invites people in without pushing products."
              rationale="UX Principle: Reduce cognitive load by offering one clear action"
              image={{
                src: "/assets/images/syf/syf-landing-hero.png",
                alt: "Landing page with mountain illustration",
              }}
              onImageClick={setLightboxSrc}
            />

            <FlowStep
              number={2}
              title="Pick What Matters to You"
              description="Users choose up to three milestones that matter most: buying a home, planning retirement, starting a family. The interface adapts instantly."
              rationale="UX Principle: Personalization increases engagement and relevance"
              image={{
                src: "/assets/images/syf/syf-goal-selection.png",
                alt: "Goal selection interface",
              }}
              reverse
              onImageClick={setLightboxSrc}
            />

            <FlowStep
              number={3}
              title="Map Your Future"
              description="A visual, interactive timeline transforms abstract ambitions into tangible plans. Drag-and-drop chips map to age ranges, making the future feel real."
              rationale="UX Principle: Visual feedback makes abstract concepts concrete"
              image={{
                src: "/assets/images/syf/syf-timeline-builder.png",
                alt: "Timeline builder interface",
              }}
              onImageClick={setLightboxSrc}
            />

            <FlowStep
              number={4}
              title="From Goals to Actionable Steps"
              description="Each milestone expands into practical next steps, educational resources, and relevant offerings. One tap books an advisor with all context attached."
              rationale="UX Principle: Progressive disclosure reduces overwhelm"
              image={{
                src: "/assets/images/syf/syf-plan-summary.png",
                alt: "Personalized plan summary",
              }}
              reverse
              onImageClick={setLightboxSrc}
            />
          </div>
        </div>
      </section>

      {/* ─── DESIGN ─── */}
      <section
        id="design"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT_COLOR }}
              >
                05
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                Design Process
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary leading-relaxed max-w-3xl mb-10 text-lg">
              Every element was designed to feel warm, approachable, and trustworthy.
              The visual system balances the gravitas of financial planning with the optimism of life goals.
            </p>
          </ScrollReveal>

          {/* Design system image */}
          <ScrollReveal delay={0.15}>
            <ImageClipReveal className="rounded-2xl overflow-hidden mb-3 max-w-5xl mx-auto">
              <LightboxImage
                src="/assets/images/syf/syf-design-system-full.png"
                alt="Complete design system overview"
                onOpen={setLightboxSrc}
                width={1400}
                height={800}
              />
            </ImageClipReveal>
            <p className="text-center text-sm text-text-muted mb-16">
              Complete design system &mdash; from principles to production
            </p>
          </ScrollReveal>

          {/* Prototype */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
                Experience the Full Flow
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Walk through from milestone onboarding to tailored plan summaries.
              </p>

              {/* Figma embed */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] mb-6 aspect-[16/10]">
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fu3BQavf3MBRNbzncgwzsph%2FUX-UI-Design-Jam-Group-3%3Fnode-id%3D179-1509%26viewport%3D403%252C551%252C0.04%26t%3DsvmEi5LHozqqLpzx-0%26scaling%3Dcontain%26content-scaling%3Dfixed%26starting-point-node-id%3D179%253A1509"
                  className="w-full h-full border-0"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  title="SYF Figma prototype"
                />
              </div>

              <a
                href="https://www.figma.com/proto/u3BQavf3MBRNbzncgwzsph/UX-UI-Design-Jam-Group-3?node-id=179-1509"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: ACCENT_COLOR }}
              >
                Open full prototype
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── REFLECTION ─── */}
      <section
        id="reflection"
        className="py-24 md:py-32 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-[var(--width-max)] mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: ACCENT_COLOR }}
              >
                06
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight">
                Reflection &amp; Impact
              </h2>
            </div>
          </ScrollReveal>

          {/* Comparison bars */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8 mb-20">
              <ComparisonBar
                label="Lead Completion Rate"
                beforePercent={35}
                afterPercent={90}
                beforeLabel="Static forms"
                afterLabel="Interactive planner"
                badge="Projected +65%"
              />
              <ComparisonBar
                label="Task Success"
                beforePercent={40}
                afterPercent={100}
                beforeLabel="High abandonment"
                afterLabel="100% completion"
                badge="Full success"
              />
              <ComparisonBar
                label="Advisor Context"
                beforePercent={15}
                afterPercent={85}
                beforeLabel="Minimal from forms"
                afterLabel="Goal-based narratives"
                badge="Rich context"
              />
            </div>
          </ScrollReveal>

          {/* How We Measured Impact */}
          <ScrollReveal delay={0.15}>
            <div className="mb-20">
              <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
                How We Measured Impact
              </h3>
              <p className="text-text-secondary leading-relaxed mb-10 max-w-3xl">
                In one sprint week, we validated our approach through rapid iterative testing.
              </p>

              {/* Measurement timeline */}
              <div className="space-y-8 mb-10">
                {[
                  {
                    icon: "\uD83D\uDCCB",
                    title: "Baseline Benchmarking",
                    description:
                      "Mapped existing Co-operators portal metrics: form completion rates, drop-off points, and advisor feedback on lead quality.",
                    tags: ["\uD83D\uDCCA Funnel analysis", "\uD83D\uDCAC Advisor interviews"],
                  },
                  {
                    icon: "\uD83E\uDDEA",
                    title: "Moderated Usability Testing",
                    description:
                      "Ran 3 rounds of task-based testing with 5 participants each, observing milestone selection, timeline building, and plan review.",
                    tags: ["\uD83D\uDC64 15 participants", "\uD83C\uDFAF Task-based", "\u23F1\uFE0F Think-aloud"],
                  },
                  {
                    icon: "\uD83D\uDCC8",
                    title: "Comparative Analysis",
                    description:
                      "Compared our prototype's completion and confidence metrics against the baseline to quantify the milestone-first advantage.",
                    tags: ["\u2705 100% task success", "\uD83D\uDCCA Projected lead quality", "\uD83D\uDE0A High confidence"],
                  },
                ].map((step, i) => (
                  <ScrollReveal key={step.title} delay={i * 0.1}>
                    <div className="flex gap-5">
                      <div
                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg border"
                        style={{
                          background: "var(--cs-primary-soft, rgba(59, 130, 246, 0.1))",
                          borderColor: ACCENT_COLOR,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary">
                          {step.title}
                        </h4>
                        <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-full"
                              style={{
                                background: "var(--cs-primary-soft, rgba(59, 130, 246, 0.1))",
                                color: ACCENT_COLOR,
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

              {/* Key finding */}
              <ScrollReveal delay={0.35}>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 max-w-3xl">
                  <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary mb-3">
                    Key Finding
                  </h4>
                  <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-3">
                    Users who started with milestones completed the full flow 100% of the time versus high abandonment on the product-first portal. In advisor feedback during the sprint, leads were described as having 2&ndash;3&times; more context for meaningful conversations.
                  </p>
                  <p className="text-xs text-text-muted italic">
                    Metrics based on usability testing within the design jam sprint. Production validation would require A/B testing at scale.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* What I Learned */}
          <ScrollReveal delay={0.2}>
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              What I Learned
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <InsightCard
                icon={"\uD83C\uDFAF"}
                title="Start With Goals, Not Products"
                body="Leading with milestones instead of insurance jargon turned intimidation into aspiration. People don't plan by policy; they plan by life event."
                index={0}
              />
              <InsightCard
                icon={"\uD83E\uDD1D"}
                title="Bridge Digital and Human"
                body="The best digital tools don't replace advisors. They prepare users to have better conversations, and context travels with every lead."
                index={1}
              />
              <InsightCard
                icon={"\uD83D\uDCC8"}
                title="Measure What Matters"
                body='The projected lift in lead quality from testing gave us a signal that milestone-first planning works. User quotes like "It finally makes sense" reminded us why we built it.'
                index={2}
              />
            </div>
          </ScrollReveal>

          {/* Reflection insight grid */}
          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <InsightCard
                icon={"\uD83E\uDDE0"}
                title="Empathy Over Efficiency"
                body="Speed matters, but not at the cost of understanding. Framing questions around life events made users feel heard, not processed."
                index={0}
              />
              <InsightCard
                icon={"\uD83D\uDD17"}
                title="Context is Currency"
                body="The real innovation wasn't the UI \u2014 it was passing rich goal context to advisors. In sprint feedback, advisors said they could skip the \u201Cwhat do you care about?\u201D opener and go straight to relevant options. We didn\u2019t validate that at scale, but it pointed to where the value lived."
                index={1}
              />
              <InsightCard
                icon={"\u26A1"}
                title="Constraints Sharpen Focus"
                body="A one-week sprint forced us to ruthlessly prioritize. We shipped a complete concept because we said no to nice-to-haves early."
                index={2}
              />
              <InsightCard
                icon={"\uD83C\uDF31"}
                title="Design for Growth"
                body="The milestone architecture is inherently extensible. New life events slot in without redesigning the core flow."
                index={3}
              />
            </div>
          </ScrollReveal>

          {/* Key takeaway */}
          <ScrollReveal delay={0.3}>
            <div
              className="rounded-2xl p-8 md:p-10 mb-20 text-center max-w-3xl mx-auto border"
              style={{
                background: "var(--cs-primary-soft, rgba(59, 130, 246, 0.1))",
                borderColor: "rgba(59, 130, 246, 0.2)",
              }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: ACCENT_COLOR }}
              >
                Key Takeaway
              </span>
              <blockquote className="font-serif text-xl md:text-2xl text-text-primary leading-relaxed italic">
                &ldquo;The best financial tools don&apos;t start with money &mdash; they start with the life you want to live.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Next steps */}
          <ScrollReveal delay={0.35}>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl" aria-hidden="true">{"\uD83D\uDD2E"}</span>
                <div>
                  <h3 className="font-serif text-2xl font-normal tracking-tight">
                    If We Continued...
                  </h3>
                  <p className="text-text-muted text-sm mt-1">
                    Where the journey leads next
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    number: "01",
                    title: "Expand Milestone Library",
                    desc: "Add more life events based on user feedback\u2014from business ownership to parental care.",
                    tag: "Content",
                    tagIcon: "\uD83C\uDFAF",
                  },
                  {
                    number: "02",
                    title: "Advisor Context Dashboard",
                    desc: "Build a dashboard that gives advisors rich context before every call, improving conversion.",
                    tag: "B2B",
                    tagIcon: "\uD83D\uDCBC",
                  },
                  {
                    number: "03",
                    title: "A/B Test Timeline Interactions",
                    desc: "Experiment with different timeline builder interactions to optimize engagement and completion.",
                    tag: "Experimentation",
                    tagIcon: "\uD83E\uDDEA",
                  },
                  {
                    number: "04",
                    title: "AI Milestone Recommendations",
                    desc: "Explore AI-powered suggestions that predict which milestones matter based on user context.",
                    tag: "AI/ML",
                    tagIcon: "\uD83E\uDD16",
                  },
                ].map((step, i) => (
                  <ScrollReveal key={step.number} delay={i * 0.08}>
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] transition-colors duration-300">
                      <div className="flex gap-4">
                        <span
                          className="text-sm font-bold shrink-0"
                          style={{ color: ACCENT_COLOR }}
                        >
                          {step.number}
                        </span>
                        <div className="flex flex-col gap-2">
                          <h4 className="font-serif text-lg font-normal tracking-tight text-text-primary">
                            {step.title}
                          </h4>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {step.desc}
                          </p>
                          <span
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full w-fit mt-1"
                            style={{
                              background: "var(--cs-primary-soft, rgba(59, 130, 246, 0.1))",
                              color: ACCENT_COLOR,
                            }}
                          >
                            {step.tagIcon} {step.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FOOTER NAV ─── */}
      <footer className="border-t border-white/[0.04] px-6 py-16">
        <div className="max-w-[var(--width-max)] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="/projects/resonate"
            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] transition-all duration-300 flex flex-col gap-1"
          >
            <span className="text-xs text-text-muted uppercase tracking-wider">
              Previous Project
            </span>
            <span className="font-serif text-xl text-text-primary group-hover:translate-x-1 transition-transform duration-300">
              Resonate
            </span>
          </a>
          <a
            href="/projects/pulse"
            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] transition-all duration-300 flex flex-col gap-1 text-right"
          >
            <span className="text-xs text-text-muted uppercase tracking-wider">
              Next Project
            </span>
            <span className="font-serif text-xl text-text-primary group-hover:translate-x-1 transition-transform duration-300">
              Pulse
            </span>
          </a>
        </div>
      </footer>

      {/* Lightbox */}
      <Lightbox
        src={lightboxSrc}
        alt="Enlarged project image"
        onClose={() => setLightboxSrc(null)}
      />
    </CaseStudyLayout>
  );
}
