"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TextReveal } from "@/components/animation/TextReveal";
import { ImageClipReveal } from "@/components/animation/ImageClipReveal";
import { Lightbox, LightboxImage } from "@/components/case-study/Lightbox";

/* ── Shared style tokens ─────────────────────────────────── */
const accentBlue = "#3b82f6";
const accentBlueSoft = "rgba(59, 130, 246, 0.1)";
const accentBlueVivid = "#60a5fa";

function ActLabel({ children, variant = "blue" }: { children: React.ReactNode; variant?: "blue" | "red" | "amber" | "green" }) {
  const colorMap = {
    blue: { bg: accentBlueSoft, text: accentBlueVivid, border: "rgba(59,130,246,0.2)" },
    red: { bg: "rgba(239,68,68,0.1)", text: "#f87171", border: "rgba(239,68,68,0.2)" },
    amber: { bg: "rgba(245,158,11,0.1)", text: "#fbbf24", border: "rgba(245,158,11,0.2)" },
    green: { bg: "rgba(34,197,94,0.1)", text: "#4ade80", border: "rgba(34,197,94,0.2)" },
  };
  const c = colorMap[variant];
  return (
    <span
      className="inline-block text-xs uppercase tracking-[0.12em] font-semibold px-3 py-1 rounded-full mb-4"
      style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
    >
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <TextReveal className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-tight mb-6">
      {children}
    </TextReveal>
  );
}

function VisualCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`w-full rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-1 hover:border-white/10 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function IconCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.05] hover:-translate-y-1 transition-all">
      <span className="text-4xl block mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">{icon}</span>
      <div className="text-lg font-semibold text-slate-100 mb-1">{title}</div>
      <p className="text-sm text-slate-400 mt-1">{description}</p>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────── */
export function SYFShowcaseContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-200 overflow-x-hidden">
      {/* Back link */}
      <div className="max-w-[1100px] mx-auto px-6 pt-8">
        <Link
          href="/projects/syf"
          className="text-slate-400 text-sm hover:text-white transition-colors inline-block"
        >
          ← back to SYF
        </Link>
      </div>

      {/* ── Act I: The Moment ──────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24 text-center" style={{ background: `radial-gradient(circle at 50% 50%, ${accentBlueSoft} 0%, #0a0e1a 70%)` }}>
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <ActLabel>Act I: The Moment</ActLabel>
            <SectionHeading>You want to buy a house someday...</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <VisualCard className="p-8 mt-8 max-w-[700px] mx-auto">
              <LightboxImage
                src="/assets/images/syf/syf-confusion.png"
                alt="The confusion of traditional financial planning"
                onOpen={setLightboxSrc}
                width={700}
                height={450}
                className="w-full rounded-2xl"
              />
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-xl md:text-2xl text-slate-200 font-serif leading-relaxed mt-10 max-w-[900px] mx-auto">
              You&#39;re dreaming about a home, a family, maybe early
              retirement. So you go online to figure out how to get there. And
              the first thing you see? A wall of policy options and forms asking
              questions you don&#39;t understand. You close the tab. That&#39;s
              the moment we wanted to fix.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── My Role ────────────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24" style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #0f172a 100%)" }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <ActLabel>My Role</ActLabel>
                <SectionHeading>What I Owned</SectionHeading>
                <p className="text-slate-400 text-lg leading-relaxed">
                  As <strong className="text-white">Lead UX Designer</strong> on
                  a 5-person team during this one-week sprint, I drove the core
                  experience strategy and hands-on design execution.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <VisualCard className="p-8">
                <ul className="space-y-5">
                  {[
                    { title: "Led research synthesis", desc: "Facilitated affinity mapping session, distilled 5 contextual interviews into 3 personas and key insights" },
                    { title: "Designed the timeline interaction model", desc: "Created the drag-and-drop milestone builder\u2014the core differentiator of the experience" },
                    { title: "Ran usability testing", desc: "Moderated 6 usability sessions, synthesized findings, and iterated the prototype" },
                    { title: "Created high-fidelity screens", desc: "Designed landing, goal selection, and timeline screens in Figma" },
                    { title: "Presented to stakeholders", desc: "Delivered final presentation to Co-operators leadership and judges" },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#8594;</span>
                      <div>
                        <strong className="text-white block">{item.title}</strong>
                        <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </VisualCard>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-center">
              <p className="text-slate-400 text-sm">
                <strong className="text-blue-400">Team contributions:</strong>{" "}
                Two teammates focused on visual design system, one on competitor
                analysis, one on advisor-side journey mapping.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── The Problem ────────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24" style={{ background: "linear-gradient(180deg, #0a0e1a 0%, rgba(239,68,68,0.05) 50%, #0a0e1a 100%)" }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <ActLabel variant="red">The Problem</ActLabel>
            <SectionHeading>Nobody wakes up excited about insurance</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <IconCard icon="&#128218;" title="Jargon overload" description={'"What\u2019s a term vs whole life?"'} />
                <IconCard icon="&#127919;" title="One-size-fits-all" description="Everyone gets the same forms" />
                <IconCard icon="&#10052;&#65039;" title="Cold calls" description="Advisors know nothing about you" />
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/[0.03] border-t-4 border-t-red-500">
              <p className="text-lg text-slate-300 leading-relaxed">
                Most financial tools force you to learn their language before
                they&#39;ll help you. They ask about products before
                understanding your goals. And when an advisor finally calls,
                they&#39;re starting from scratch&mdash;no idea what you
                actually care about.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <VisualCard className="p-8 mt-8">
              <LightboxImage
                src="/assets/images/syf/syf-solution-flow.png"
                alt="The solution flow"
                onOpen={setLightboxSrc}
                width={1100}
                height={600}
                className="w-full rounded-2xl"
              />
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Act II: Discovery ──────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24 bg-[#080b14]">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <ActLabel>Act II: Discovery</ActLabel>
                <SectionHeading>Research with real people</SectionHeading>
                <p className="text-slate-400 text-lg leading-relaxed">
                  During a one-week design jam with Co-operators, I led the
                  research synthesis effort. Here&#39;s exactly how we uncovered
                  what makes financial planning feel so hard.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <VisualCard className="p-8">
                <h4 className="text-white text-lg font-semibold mb-4">Research Methods</h4>
                <ul className="space-y-4">
                  {[
                    { num: "5", title: "Contextual interviews", desc: "Ages 22\u201362, recruited via Co-operators partner network. 45min sessions focused on past financial planning experiences." },
                    { num: "3", title: "Advisor interviews", desc: "Co-operators financial advisors shared what makes qualified leads vs. cold contacts." },
                    { num: "1", title: "Affinity mapping session", desc: "I facilitated a 2-hour synthesis session using FigJam, clustering 47 data points into 6 themes." },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3 items-start">
                      <span className="bg-blue-500/20 text-blue-400 px-2.5 py-0.5 rounded-full text-xs flex-shrink-0">{item.num}</span>
                      <div>
                        <strong className="text-white block">{item.title}</strong>
                        <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </VisualCard>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <VisualCard className="p-8 mt-10">
              <LightboxImage
                src="/assets/images/syf/syf-research.png"
                alt="Research synthesis - affinity mapping and persona development"
                onOpen={setLightboxSrc}
                width={1100}
                height={600}
                className="w-full rounded-2xl"
              />
              <p className="text-center text-slate-400 text-sm mt-4">
                Affinity map from our synthesis session -- I clustered interview
                insights into themes that drove our persona development
              </p>
            </VisualCard>
          </ScrollReveal>

          {/* Personas */}
          <ScrollReveal delay={0.2}>
            <VisualCard className="p-8 mt-8">
              <div className="text-center mb-6">
                <h3 className="text-white text-2xl font-serif mb-1">Meet the people we designed for</h3>
                <p className="text-slate-400">Same anxiety, different life stages</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: "\uD83D\uDC69\u200D\uD83C\uDF93", name: "Paige, 22", quote: '"I don\u2019t even know what questions to ask."' },
                  { icon: "\uD83D\uDC69\u200D\uD83D\uDCBC", name: "Farah, 39", quote: '"I have a house, a kid, and zero time."' },
                  { icon: "\uD83D\uDC75", name: "Irene, 62", quote: '"Did I do enough? Is it too late?"' },
                ].map((p) => (
                  <div key={p.name} className="text-center p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.05] hover:-translate-y-1 transition-all">
                    <span className="text-3xl block mb-2">{p.icon}</span>
                    <div className="text-lg font-semibold text-slate-100">{p.name}</div>
                    <p className="text-sm text-slate-400 mt-1">{p.quote}</p>
                  </div>
                ))}
              </div>
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── The Insight ────────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24" style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0f172a 100%)" }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>The Insight</ActLabel>
              <SectionHeading>People think in life events, not policies</SectionHeading>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="flex justify-between items-center flex-wrap gap-4">
                {[
                  { icon: "\uD83D\uDCAD", text: '"I want a house"' },
                  { icon: "\uD83D\uDCCB", text: "Wall of forms" },
                  { icon: "\uD83D\uDE15", text: '"Wait, what?"' },
                  { icon: "\uD83D\uDEAA", text: "Gone" },
                ].map((step, i) => (
                  <div key={step.text} className="flex items-center gap-4">
                    <div className="text-center p-4 rounded-2xl border border-white/5 bg-white/[0.03] min-w-[120px]">
                      <div className="text-2xl mb-1">{step.icon}</div>
                      <div className="text-white font-semibold text-sm">{step.text}</div>
                    </div>
                    {i < 3 && <span className="text-blue-400 text-xl">&#8594;</span>}
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-slate-400 italic">
                This is how it usually goes. We wanted to flip it.
              </p>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex justify-center">
              <p className="border-l-[3px] border-blue-400 pl-6 text-lg text-slate-300 max-w-[700px]">
                The biggest realization:{" "}
                <strong className="text-white">
                  there was no human starting point
                </strong>
                . We decided to let people dream first&mdash;pick the life
                moments that matter to them&mdash;before asking any policy
                questions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── My Process ─────────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24" style={{ background: "linear-gradient(135deg, #0b101d 0%, #0a0e1a 100%)" }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>My Process</ActLabel>
              <SectionHeading>From insight to solution</SectionHeading>
              <p className="text-slate-400 text-lg max-w-[700px] mx-auto mt-2">
                Here&#39;s how I moved from messy research to polished screens
                in one week.
              </p>
            </div>
          </ScrollReveal>

          {/* Process timeline */}
          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { num: "1", day: "Day 1-2", title: "Research & synthesis", sub: "Interviews \u2192 Affinity map \u2192 Key insights", color: "blue" },
                  { num: "2", day: "Day 3", title: "Ideation & sketches", sub: "Crazy 8s \u2192 Concept voting \u2192 Paper wireframes", color: "blue" },
                  { num: "3", day: "Day 4-5", title: "Prototype & test", sub: "Mid-fi \u2192 Usability tests \u2192 Iteration", color: "blue" },
                  { num: "4", day: "Day 6-7", title: "Polish & present", sub: "High-fidelity \u2192 Final pitch", color: "green" },
                ].map((step) => (
                  <div key={step.num} className="text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold"
                      style={{
                        background: step.color === "green" ? "rgba(34,197,94,0.2)" : "rgba(59,130,246,0.2)",
                        color: step.color === "green" ? "#4ade80" : accentBlueVivid,
                      }}
                    >
                      {step.num}
                    </div>
                    <h4 className="text-white font-semibold mb-1">{step.day}</h4>
                    <p className="text-slate-400 text-sm">
                      {step.title}
                      <br />
                      <em className="text-xs">{step.sub}</em>
                    </p>
                  </div>
                ))}
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <VisualCard className="p-8 mt-8">
              <LightboxImage
                src="/assets/images/syf/syf-problem-stats.png"
                alt="The numbers behind the problem - research data that drove our process"
                onOpen={setLightboxSrc}
                width={1100}
                height={600}
                className="w-full rounded-2xl"
              />
              <p className="text-center text-slate-400 text-sm mt-4">
                Data points from research that shaped our design direction
              </p>
            </VisualCard>
          </ScrollReveal>

          {/* Key decision */}
          <ScrollReveal delay={0.2}>
            <VisualCard className="p-8 mt-8 border-l-4 !border-l-blue-400">
              <h4 className="text-blue-400 font-semibold mb-4">Key Decision Point: Day 3</h4>
              <p className="text-slate-300 mb-4">
                During ideation, I proposed the{" "}
                <strong className="text-white">drag-and-drop timeline concept</strong>.
                The team debated between three approaches:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                {[
                  { label: "Option A", title: "Wizard flow", desc: "Step-by-step questions. Safe but boring.", active: false },
                  { label: "Option B \u2713", title: "Visual timeline", desc: "Drag goals to ages. Tangible, memorable.", active: true },
                  { label: "Option C", title: "Chat interface", desc: "Conversational. High dev effort for sprint.", active: false },
                ].map((opt) => (
                  <div
                    key={opt.label}
                    className={`p-4 rounded-xl ${opt.active ? "bg-blue-500/10 border-2 border-blue-500/30" : "bg-white/[0.03] border border-white/10"}`}
                  >
                    <div className={`text-xs mb-1 ${opt.active ? "text-blue-400" : "text-slate-400"}`}>{opt.label}</div>
                    <strong className="text-white block">{opt.title}</strong>
                    <p className="text-slate-400 text-sm mt-1">{opt.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm">
                <strong className="text-white">Why I pushed for Option B:</strong>{" "}
                It made the abstract (future planning) feel concrete. Users could
                literally <em>see</em> their future on a timeline. The interaction
                itself communicated &ldquo;you&#39;re in control.&rdquo;
              </p>
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Heard ──────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="right">
              <div className="flex flex-col gap-4">
                {[
                  "\"I don\u2019t even know how to Google this stuff.\"",
                  "\"Why are they asking me things I don\u2019t understand yet?\"",
                  "\"The advisor called and had no idea what I actually wanted.\"",
                ].map((quote) => (
                  <div
                    key={quote}
                    className="relative text-xl text-slate-100 font-light leading-relaxed p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/5"
                  >
                    <span className="absolute top-3 left-4 text-5xl text-blue-500/20 font-serif leading-none">&ldquo;</span>
                    <span className="relative z-10 pl-6">{quote}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <ActLabel>What We Heard</ActLabel>
              <SectionHeading>Straight from research</SectionHeading>
              <p className="text-slate-400 text-lg leading-relaxed">
                Three patterns kept showing up: people felt stupid before they
                even started, the forms felt like tests, and advisors were
                calling blind. These became our north stars for what to fix.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Our Bet ────────────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24 bg-[#0b101d]">
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>Our Bet</ActLabel>
              <SectionHeading>What if we started with dreams?</SectionHeading>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8 mb-10">
              <div className="flex justify-center items-center flex-wrap gap-4">
                {[
                  { icon: "\uD83D\uDCAD", text: '"I want a house"', color: "blue" },
                  { icon: "\uD83D\uDDD3\uFE0F", text: "Map it out", color: "blue" },
                  { icon: "\uD83D\uDCCB", text: "Get a plan", color: "blue" },
                  { icon: "\uD83E\uDD1D", text: "Talk to someone who gets it", color: "green" },
                ].map((step, i) => (
                  <div key={step.text} className="flex items-center gap-3">
                    <div
                      className="text-center p-4 rounded-2xl border-2"
                      style={{
                        background: step.color === "green" ? "rgba(34,197,94,0.1)" : accentBlueSoft,
                        borderColor: step.color === "green" ? "rgba(34,197,94,0.3)" : "rgba(59,130,246,0.3)",
                      }}
                    >
                      <div className="text-3xl mb-1">{step.icon}</div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: step.color === "green" ? "#4ade80" : accentBlueVivid }}
                      >
                        {step.text}
                      </div>
                    </div>
                    {i < 3 && <span className="text-blue-400 text-2xl">&#8594;</span>}
                  </div>
                ))}
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: "\uD83C\uDFAF", title: "Goals First", desc: "Ask about dreams before asking about products. Let people see themselves in the plan." },
                { icon: "\uD83D\uDCAC", title: "Plain Language", desc: "No jargon. No intimidation. Speak like a helpful friend, not a textbook." },
                { icon: "\uD83E\uDD1D", title: "Warm Handoffs", desc: "When you talk to an advisor, they already know what matters to you. No cold calls." },
              ].map((pillar) => (
                <div key={pillar.title} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.03] border-t-4 border-t-blue-500">
                  <span className="text-4xl block mb-3">{pillar.icon}</span>
                  <div className="text-lg font-semibold text-blue-400 mb-2">{pillar.title}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-slate-300 text-center mt-10 max-w-[700px] mx-auto pt-6 border-t border-white/10">
              Every screen, every word had to pass one test:{" "}
              <strong className="text-white">
                does this help someone feel more confident about their future?
              </strong>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Act III: The Solution ──────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24" style={{ background: `radial-gradient(circle at 80% 20%, rgba(59,130,246,0.1) 0%, #0a0e1a 60%)` }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>Act III: The Solution</ActLabel>
              <SectionHeading>A planner that speaks human</SectionHeading>
              <p className="text-slate-400 text-base max-w-[600px] mx-auto">
                We built Secure Your Future&mdash;a tool that lets you pick the
                life moments you care about, see them on a timeline, and get a
                plan that actually makes sense. When you&#39;re ready to talk to
                someone, they already know your story.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <VisualCard className="p-8">
              <LightboxImage
                src="/assets/images/syf/syf-approach-comparison.png"
                alt="Before and after comparison"
                onOpen={setLightboxSrc}
                width={1100}
                height={600}
                className="w-full rounded-2xl"
              />
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Step 1: Welcome ────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>Step 1</ActLabel>
              <SectionHeading>A welcome that feels like a friend</SectionHeading>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <ScrollReveal direction="left">
              <ul className="space-y-4">
                {["No forms on the first screen", "Mountain imagery = journey, not transaction", 'One button: "Get Started"'].map((item) => (
                  <li key={item} className="text-slate-300 text-lg flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">{"\u2713"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <ImageClipReveal direction="right">
                <LightboxImage
                  src="/assets/images/syf/syf-landing-hero.png"
                  alt="Welcoming landing page"
                  onOpen={setLightboxSrc}
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </ImageClipReveal>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 text-lg max-w-[800px] mx-auto mb-6">
              The first screen sets the tone. We wanted it to feel like opening
              a door, not filling out paperwork.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Step 2: Milestones ─────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24 bg-[#0b101d]">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="right" delay={0.1}>
              <ImageClipReveal direction="left">
                <LightboxImage
                  src="/assets/images/syf/syf-goal-selection.png"
                  alt="Picking your life goals"
                  onOpen={setLightboxSrc}
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </ImageClipReveal>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <ActLabel>Step 2</ActLabel>
              <SectionHeading>Pick the milestones that matter to you</SectionHeading>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                House? Family? Retirement? Travel? You choose what&#39;s
                important. The tool adapts to you, not the other way around.
              </p>
              <ul className="space-y-2 text-slate-400">
                {["Select up to three life goals", "Each choice changes what comes next", "No wrong answers"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-blue-400">{"\u2713"}</span> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Step 3: Timeline ───────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <ActLabel>Step 3</ActLabel>
              <SectionHeading>See your future on a timeline</SectionHeading>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                Drag your goals onto a timeline. See when you want things to
                happen. Suddenly the future isn&#39;t so abstract&mdash;it&#39;s
                a plan you can actually picture.
              </p>
              <ul className="space-y-2 text-slate-400">
                {["Drag and drop to arrange", "Goals map to ages/timeframes", "Edit anytime\u2014it\u2019s your plan"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-blue-400">{"\u2713"}</span> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <ImageClipReveal direction="right">
                <LightboxImage
                  src="/assets/images/syf/syf-timeline-builder.png"
                  alt="Building your timeline"
                  onOpen={setLightboxSrc}
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </ImageClipReveal>
            </ScrollReveal>
          </div>

          {/* Decision rationale */}
          <ScrollReveal delay={0.15}>
            <VisualCard className="p-8 mt-10 border-t-[3px] !border-t-amber-500" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, transparent 100%)" }}>
              <h4 className="text-amber-500 font-semibold mb-4 text-sm">Decisions &amp; Trade-offs: Timeline Builder</h4>
              <div className="space-y-4">
                {[
                  { q: "Why drag-and-drop instead of dropdowns or a form?", a: 'Dropdowns feel like work; drag-and-drop feels like play. Users described the timeline as "fun" and "visual"\u2014emotions rarely associated with financial planning. The interaction model itself became a differentiator.' },
                  { q: "What about accessibility for drag-and-drop?", a: "This is a real trade-off. We spec\u2019d keyboard alternatives (arrow keys + Enter) but didn\u2019t implement them in the sprint. Given more time, I\u2019d prioritize ARIA live regions and keyboard navigation." },
                  { q: "Why limit to 3 goals?", a: "Research showed users with 4+ goals felt overwhelmed. Three felt manageable without feeling restrictive. We considered letting users add more later (progressive disclosure) but scoped it out for the sprint." },
                ].map((item) => (
                  <div key={item.q} className="flex gap-3 items-start">
                    <span className="text-amber-500 flex-shrink-0 font-semibold">Q:</span>
                    <p className="text-slate-400 text-sm">
                      <strong className="text-white block mb-0.5">{item.q}</strong>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Step 4: Plan & Advisor ─────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24 bg-[#0b101d]">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="right" delay={0.1}>
              <ImageClipReveal direction="left">
                <LightboxImage
                  src="/assets/images/syf/syf-plan-summary.png"
                  alt="Your personalized plan"
                  onOpen={setLightboxSrc}
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </ImageClipReveal>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <ActLabel>Step 4</ActLabel>
              <SectionHeading>Get a plan -- and a real conversation</SectionHeading>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                Your summary shows what you care about. When you book an
                advisor, they see it all&mdash;so the call isn&#39;t &ldquo;tell
                me about yourself&rdquo; but &ldquo;let&#39;s talk about buying
                that house.&rdquo;
              </p>
              <ul className="space-y-2 text-slate-400">
                {["Clear summary of your goals", "One tap to book an advisor", "They already know your story"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-blue-400">{"\u2713"}</span> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Design System ──────────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>The Details</ActLabel>
              <SectionHeading>Built on Co-operators&apos; design system</SectionHeading>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <LightboxImage
                src="/assets/images/syf/syf-design-system-full.png"
                alt="Design system components"
                onOpen={setLightboxSrc}
                width={1100}
                height={600}
                className="w-full rounded-2xl"
              />
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 text-lg text-center mt-6 max-w-[800px] mx-auto">
              This wasn&#39;t a blue-sky concept&mdash;we built it to fit right
              into Co-operators&#39; existing brand. Same colors, same
              typography, ready for real development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Act IV: Before & After ─────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 text-center" style={{ background: `radial-gradient(circle at 50% 50%, ${accentBlueSoft} 0%, #0a0e1a 70%)` }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <ActLabel>Act IV: What Changed</ActLabel>
            <SectionHeading>Before and after</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="opacity-50 border-2 border-dashed border-slate-600 p-6 rounded-2xl text-left">
                  <h3 className="text-slate-400 text-lg font-semibold mb-3">The old way</h3>
                  <ul className="text-slate-400 list-disc pl-5 space-y-2 text-sm">
                    <li>&ldquo;What policy do you need?&rdquo;</li>
                    <li>Walls of text and jargon</li>
                    <li>Cold calls from strangers</li>
                  </ul>
                </div>
                <div className="border-2 border-blue-500 p-6 rounded-2xl bg-blue-500/5 text-left">
                  <h3 className="text-blue-400 text-lg font-semibold mb-3">Our way</h3>
                  <ul className="text-white space-y-2 text-sm">
                    <li>{"\u2713"} &ldquo;What do you dream about?&rdquo;</li>
                    <li>{"\u2713"} Visual timeline you can touch</li>
                    <li>{"\u2713"} Advisors who know your story</li>
                  </ul>
                </div>
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 text-lg mt-8 max-w-[800px] mx-auto">
              We kept asking ourselves one question:{" "}
              <strong className="text-white">
                does this make someone feel more confident about their future?
              </strong>{" "}
              If not, we changed it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Feedback ───────────────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <ActLabel>The Feedback</ActLabel>
              <SectionHeading>It actually worked</SectionHeading>
              <div className="border-l-4 border-amber-500 pl-6 py-4 rounded-r-2xl bg-gradient-to-r from-amber-500/5 to-transparent italic text-lg text-slate-300 leading-relaxed">
                In testing, every single person completed the flow. Users said
                it &ldquo;finally makes sense.&rdquo; Advisors loved that they could see
                what mattered to someone before picking up the phone. In one
                week, we proved that{" "}
                <strong className="text-white">starting with dreams</strong>{" "}
                beats starting with products.
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="flex flex-col gap-4">
                {[
                  "\"Oh, this actually makes sense.\"",
                  "\"I wish all financial stuff was like this.\"",
                ].map((quote) => (
                  <div
                    key={quote}
                    className="relative text-xl text-slate-100 font-light leading-relaxed p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/5"
                  >
                    <span className="absolute top-3 left-4 text-5xl text-blue-500/20 font-serif leading-none">&ldquo;</span>
                    <span className="relative z-10 pl-6">{quote}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Act V: What's Next ─────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 bg-[#080b14]">
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>Act V: What&#39;s Next</ActLabel>
              <SectionHeading>If this went live</SectionHeading>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <IconCard icon="&#128218;" title="More milestones" description="Business, caregiving, education" />
                <IconCard icon="&#128188;" title="Advisor dashboard" description="See the full picture before calling" />
                <IconCard icon="&#129514;" title="Test & learn" description="Which interactions work best?" />
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 text-lg text-center mt-6 max-w-[800px] mx-auto">
              This was a one-week sprint, so there&#39;s plenty more to explore.
              But the core idea&mdash;let people dream first&mdash;that&#39;s the
              foundation for everything that comes next.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── The Numbers ────────────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 text-center" style={{ background: `radial-gradient(circle at 50% 50%, ${accentBlueSoft} 0%, #0a0e1a 70%)` }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <ActLabel>The Numbers</ActLabel>
            <SectionHeading>Validated results</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2 row-span-2 flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-4xl mb-3">&#128200;</span>
                  <span className="text-3xl font-semibold text-slate-100">+65%</span>
                  <p className="text-slate-400 text-sm mt-1">More qualified leads than traditional forms</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-3xl mb-2">{"\u2713"}</span>
                  <span className="text-xl font-semibold text-slate-100">100%</span>
                  <p className="text-slate-400 text-xs mt-1">Task completion</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-3xl mb-2">&#127956;&#65039;</span>
                  <span className="text-xl font-semibold text-slate-100">5 teams</span>
                  <p className="text-slate-400 text-xs mt-1">Ready to pilot</p>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-3xl mb-2">&#129309;</span>
                  <span className="text-xl font-semibold text-slate-100">Warm handoffs</span>
                  <p className="text-slate-400 text-xs mt-1">Advisors know you before they call</p>
                </div>
                <div className="col-span-2 md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-3xl mb-2">&#128154;</span>
                  <span className="text-xl font-semibold text-slate-100">&ldquo;It finally makes sense&rdquo;</span>
                  <p className="text-slate-400 text-sm mt-1">The best metric is how people feel</p>
                </div>
              </div>
            </VisualCard>
          </ScrollReveal>

          {/* Methodology */}
          <ScrollReveal delay={0.15}>
            <VisualCard className="p-8 mt-8 border-l-4 !border-l-blue-400 text-left">
              <h4 className="text-blue-400 font-semibold mb-4">How We Measured This</h4>
              <div className="space-y-4">
                {[
                  { title: "+65% Qualified Leads", desc: 'Comparative estimate based on advisor feedback. Advisors reviewed our prototype\u2019s output (goal context, timeline, priorities) vs. current form submissions. 3 advisors rated our leads as "significantly more actionable" in blind comparison.' },
                  { title: "100% Task Completion", desc: 'In moderated usability testing with 6 participants (ages 24\u201358), all 6 successfully completed the primary task: "Select your life goals, place them on a timeline, and book an advisor." Compared to our benchmark of 40% completion on Co-operators\u2019 existing form-based flow.' },
                  { title: "5 Pilot Teams", desc: "Post-presentation, 5 Co-operators regional teams expressed interest in piloting the concept with real users." },
                ].map((item) => (
                  <div key={item.title}>
                    <strong className="text-white">{item.title}</strong>
                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4 italic">
                Note: These are sprint-week validation metrics, not production
                data. A proper A/B test with statistical significance would be
                the next step.
              </p>
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What I Learned ─────────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 text-center" style={{ background: `radial-gradient(circle at 50% 50%, ${accentBlueSoft} 0%, #0a0e1a 70%)` }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <ActLabel>What I Learned</ActLabel>
            <SectionHeading>Making the complex feel simple</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="text-center max-w-[900px] mx-auto p-12 mb-10">
              <div className="text-7xl leading-none mb-3">&#127956;&#65039;</div>
              <p className="text-white text-2xl font-semibold">Dreams first. Details later.</p>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { title: "Meet people where they are", desc: "Nobody wants to learn insurance. They want to buy a house, retire early, take care of family. Start there." },
                { title: "Digital should help humans", desc: "The tool doesn\u2019t replace the advisor\u2014it makes the conversation better. Context is everything." },
                { title: "Confidence is the real metric", desc: '65% more leads is great. But "it finally makes sense" is the quote I\u2019ll remember.' },
              ].map((item) => (
                <div key={item.title} className="text-left p-6 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <h3 className="text-white text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Honest Reflection ──────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24" style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #0f172a 100%)" }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel variant="amber">Honest Reflection</ActLabel>
              <SectionHeading>Constraints &amp; What I&#39;d Do Differently</SectionHeading>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <VisualCard className="p-8 border-l-4 !border-l-red-500 h-full">
                <h4 className="text-red-400 font-semibold mb-4">Sprint Constraints</h4>
                <ul className="space-y-4">
                  {[
                    { title: "One week timeline", desc: "Limited time for iteration and comprehensive testing" },
                    { title: "Small sample size", desc: "6 usability participants isn\u2019t statistically significant" },
                    { title: "Prototype, not production", desc: "No real data integration or backend validation" },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3 items-start">
                      <span className="text-red-400">&#9888;</span>
                      <div>
                        <strong className="text-white block">{item.title}</strong>
                        <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </VisualCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <VisualCard className="p-8 border-l-4 !border-l-green-400 h-full">
                <h4 className="text-green-400 font-semibold mb-4">What I&#39;d Do With More Time</h4>
                <ul className="space-y-4">
                  {[
                    { title: "Accessibility audit", desc: "Keyboard navigation for drag-and-drop, screen reader testing" },
                    { title: "Quantitative validation", desc: "A/B test with 100+ users to validate lead quality claims" },
                    { title: "Edge cases", desc: "Users with complex situations (divorce, debt, multiple properties)" },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3 items-start">
                      <span className="text-green-400">&#8594;</span>
                      <div>
                        <strong className="text-white block">{item.title}</strong>
                        <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </VisualCard>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <VisualCard className="p-8 mt-8 bg-red-500/5 !border-red-500/20">
              <h4 className="text-red-400 font-semibold mb-3">Biggest Unvalidated Assumption</h4>
              <p className="text-slate-300 text-lg">
                We assumed{" "}
                <strong className="text-white">
                  goal context improves advisor conversion
                </strong>
                , but we didn&#39;t test the advisor side of the equation. Do
                advisors actually use this context? Does it change their
                approach? That&#39;s the next research question.
              </p>
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      <Lightbox
        src={lightboxSrc}
        alt="SYF showcase detail"
        onClose={() => setLightboxSrc(null)}
      />
    </div>
  );
}
