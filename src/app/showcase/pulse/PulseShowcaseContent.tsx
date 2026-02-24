"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TextReveal } from "@/components/animation/TextReveal";
import { ImageClipReveal } from "@/components/animation/ImageClipReveal";
import { Lightbox, LightboxImage } from "@/components/case-study/Lightbox";

/* ── Shared style tokens ─────────────────────────────────── */
const accentTeal = "#14b8a6";
const accentTealSoft = "rgba(20, 184, 166, 0.1)";
const accentTealVivid = "#5eead4";

function ActLabel({ children, variant = "teal" }: { children: React.ReactNode; variant?: "teal" | "red" }) {
  const colorMap = {
    teal: { bg: accentTealSoft, text: accentTealVivid, border: "rgba(20,184,166,0.2)" },
    red: { bg: "rgba(239,68,68,0.1)", text: "#f87171", border: "rgba(239,68,68,0.2)" },
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
      <span className="text-4xl block mb-4 drop-shadow-[0_0_20px_rgba(45,212,191,0.2)]">{icon}</span>
      <div className="text-lg font-semibold text-slate-100 mb-1">{title}</div>
      <p className="text-sm text-slate-400 mt-1">{description}</p>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────── */
export function PulseShowcaseContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-200 overflow-x-hidden">
      {/* Back link */}
      <div className="max-w-[1100px] mx-auto px-6 pt-8">
        <Link
          href="/projects/pulse"
          className="text-slate-400 text-sm hover:text-white transition-colors inline-block"
        >
          ← back to Pulse
        </Link>
      </div>

      {/* ── Act I: Problem ─────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24 text-center" style={{ background: `radial-gradient(circle at 50% 50%, ${accentTealSoft} 0%, #0a0e1a 70%)` }}>
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <ActLabel>Act I: Problem</ActLabel>
            <SectionHeading>You walk into the ER at 11:30pm...</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <VisualCard className="mt-8 min-h-[400px] overflow-hidden">
              <div
                className="w-full h-[400px] bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/pulse%20showcase/unnamed.jpg')" }}
              />
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-xl md:text-2xl text-slate-200 font-serif leading-relaxed mt-10 max-w-[900px] mx-auto">
              &ldquo;Imagine you&#39;re walking into the ER late at night with
              someone you care about. You&#39;re scared, you don&#39;t know
              where to go, and everyone looks busy. There&#39;s no clear
              starting point. That&#39;s the moment we focused on.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── The Problem ────────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24" style={{ background: "linear-gradient(180deg, #0a0e1a 0%, rgba(239,68,68,0.05) 50%, #0a0e1a 100%)" }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <ActLabel variant="red">The Problem</ActLabel>
            <SectionHeading>The first 10 minutes are chaos</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <IconCard icon="&#128533;" title="Confused patient" description={'"Where do I go first?"'} />
                <IconCard icon="&#129327;" title="Overloaded nurse" description="Juggling care and admin" />
                <IconCard icon="&#128221;" title="Messy paperwork" description="Illegible and incomplete" />
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/[0.03] border-t-4 border-t-red-500">
              <p className="text-lg text-slate-300 leading-relaxed">
                We found that the <strong className="text-white">first 10 minutes</strong> after a
                patient arrives are often the most confusing. Patients don&#39;t
                know what to do, nurses juggle care and admin tasks, and
                important details are captured in a messy way.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Act II: Research & Insight ─────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24 bg-[#080b14]">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <ActLabel>Act II: Research &amp; Insight</ActLabel>
              <SectionHeading>Understanding the ER entry experience</SectionHeading>
              <p className="text-slate-400 text-lg leading-relaxed">
                We started by reading about ED overcrowding, then spoke with two
                healthcare professionals to ground our ideas. We mapped the
                journey from &ldquo;walk in&rdquo; to &ldquo;first interaction
                with staff,&rdquo; and looked for{" "}
                <strong className="text-white">friction points</strong> we could
                realistically improve.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="flex flex-col gap-4">
                {[
                  { num: "1", title: "Secondary Research", desc: "ED overcrowding statistics" },
                  { num: "2", title: "Expert Interviews", desc: "Conversations with 2 healthcare pros" },
                  { num: "3", title: "Mapping & Testing", desc: "Journey mapping friction points" },
                ].map((step) => (
                  <div key={step.num} className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.03]">
                    <div className="w-12 h-12 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/30 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <strong className="text-white block">{step.title}</strong>
                      <span className="text-slate-400 text-sm">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Role cards */}
          <ScrollReveal delay={0.15}>
            <VisualCard className="p-8 mt-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: "\uD83D\uDC65", title: "Team coordination", desc: "Led team of four designers" },
                  { icon: "\uD83D\uDD0D", title: "Field research", desc: "Facilitated research sessions" },
                  { icon: "\uD83D\uDCD0", title: "Service design", desc: "Led blueprinting workshops" },
                  { icon: "\uD83C\uDFA8", title: "Interaction design", desc: "Owned design direction" },
                  { icon: "\uD83D\uDD27", title: "Prototyping", desc: "Built prototypes" },
                  { icon: "\u2713", title: "Validation", desc: "Coordinated with healthcare pros" },
                ].map((card) => (
                  <div key={card.title} className="text-center p-4 rounded-2xl border border-white/5 bg-white/[0.03]">
                    <span className="text-3xl block mb-2">{card.icon}</span>
                    <div className="text-white font-semibold text-sm mb-1">{card.title}</div>
                    <p className="text-slate-400 text-xs">{card.desc}</p>
                  </div>
                ))}
              </div>
            </VisualCard>
          </ScrollReveal>

          {/* Paper to pixels */}
          <ScrollReveal delay={0.2}>
            <VisualCard className="p-8 mt-8">
              <div className="text-center mb-6">
                <h3 className="text-white text-2xl font-serif mb-1">From paper to pixels</h3>
                <p className="text-slate-400">Our prototyping journey</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/assets/images/pulse/pulse-paper-1.png", alt: "Paper Prototype 1" },
                  { src: "/assets/images/pulse/pulse-paper-2.png", alt: "Paper Prototype 2" },
                  { src: "/assets/images/pulse/pulse-paper-3.png", alt: "Paper Prototype 3" },
                  { src: "/assets/images/pulse/pulse-highfi-1.png", alt: "High Fidelity Prototype" },
                ].map((img) => (
                  <ImageClipReveal key={img.src} direction="bottom" className="rounded-2xl overflow-hidden">
                    <LightboxImage
                      src={img.src}
                      alt={img.alt}
                      onOpen={setLightboxSrc}
                      width={550}
                      height={400}
                      className="w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                  </ImageClipReveal>
                ))}
              </div>
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Journey Map ────────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24" style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0f172a 100%)" }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>Journey Map</ActLabel>
              <SectionHeading>The journey from &apos;door&apos; to &apos;first interaction&apos;</SectionHeading>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="flex justify-between items-center flex-wrap gap-4">
                {[
                  { icon: "\uD83D\uDEAA", text: "Enter" },
                  { icon: "\uD83D\uDC40", text: "Look around" },
                  { icon: "\u2753", text: "Ask or wait" },
                  { icon: "\uD83D\uDCCB", text: "Fill forms" },
                  { icon: "\uD83D\uDC69\u200D\u2695\uFE0F", text: "See nurse" },
                ].map((step, i) => (
                  <div key={step.text} className="flex items-center gap-4">
                    <div className="text-center p-4 rounded-2xl border border-white/5 bg-white/[0.03] min-w-[100px]">
                      <div className="text-2xl mb-1">{step.icon}</div>
                      <div className="text-white font-semibold text-sm">{step.text}</div>
                    </div>
                    {i < 4 && <span className="text-teal-400 text-xl">&#8594;</span>}
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-slate-400 italic">
                Wait... what happens here? Uncertainty at every step.
              </p>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex justify-center">
              <p className="border-l-[3px] border-teal-400 pl-6 text-lg text-slate-300 max-w-[700px]">
                The journey looks simple on paper, but in reality each step is
                full of uncertainty. The biggest gap: there&#39;s no{" "}
                <strong className="text-white">
                  clear, guided starting point
                </strong>{" "}
                that works for both patients and staff.
              </p>
            </div>
          </ScrollReveal>

          {/* Bodystorm images */}
          <ScrollReveal delay={0.2}>
            <VisualCard className="p-8 mt-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/assets/images/pulse/pulse-bodystorm-1.png", alt: "Bodystorm 1" },
                  { src: "/assets/images/pulse/pulse-bodystorm-2.png", alt: "Bodystorm 2" },
                ].map((img) => (
                  <ImageClipReveal key={img.src} direction="bottom" className="rounded-2xl overflow-hidden">
                    <LightboxImage
                      src={img.src}
                      alt={img.alt}
                      onOpen={setLightboxSrc}
                      width={550}
                      height={400}
                      className="w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                  </ImageClipReveal>
                ))}
              </div>
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Insights ───────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="right">
              <div className="flex flex-col gap-4">
                {[
                  "People are scared to bother staff with 'small' questions.",
                  "Forms come back incomplete or illegible.",
                  "Triage decisions are delayed by missing information.",
                ].map((quote) => (
                  <div
                    key={quote}
                    className="relative text-xl text-slate-100 font-light leading-relaxed p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/5"
                  >
                    <span className="absolute top-3 left-4 text-5xl text-teal-500/20 font-serif leading-none">&ldquo;</span>
                    <span className="relative z-10 pl-6">{quote}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <ActLabel>Key Insights</ActLabel>
              <SectionHeading>What we heard</SectionHeading>
              <p className="text-slate-400 text-lg leading-relaxed">
                From our research, three themes kept coming up: Patients are
                hesitant and overwhelmed. Forms are confusing and often
                incomplete. Staff lose time fixing that, instead of focusing on
                care. Those became the backbone for our{" "}
                <strong className="text-white">design direction</strong>.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Opportunity & Pillars ──────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 bg-[#0b101d]">
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <VisualCard className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start max-w-[900px] mx-auto">
                <div className="flex-1 min-w-[300px] text-left">
                  <ActLabel>Opportunity</ActLabel>
                  <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-tight mb-4 text-white">
                    Our opportunity and design pillars
                  </h2>
                  <p className="text-xl text-white leading-relaxed">
                    Create a{" "}
                    <strong>guided check-in experience</strong> that reduces
                    anxiety for patients and delivers clean, actionable
                    information for staff.
                  </p>
                </div>
                <div className="flex flex-col items-start flex-shrink-0">
                  {["Calm Under Pressure", "No One Left Guessing", "Help Staff Help Faster", "Accessible by Default"].map((pillar) => (
                    <span
                      key={pillar}
                      className="inline-block px-5 py-3 my-1 rounded-full font-semibold text-teal-400 border border-teal-500/30 bg-slate-900/80 shadow-lg"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-slate-300 text-center mt-8 max-w-[700px] mx-auto pt-6 border-t border-white/10">
              To stay focused, we defined four design pillars. We used them as a
              filter during every decision and iteration. If a screen didn&#39;t
              support these, we changed it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Act III: The Solution ──────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24" style={{ background: `radial-gradient(circle at 80% 20%, rgba(20,184,166,0.1) 0%, #0a0e1a 60%)` }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>Act III: The Solution</ActLabel>
              <SectionHeading>Pulse: a calmer way to check in</SectionHeading>
              <p className="text-slate-400 text-base max-w-[600px] mx-auto">
                Pulse is a check-in kiosk placed at the ER entrance. It guides
                patients through a short, focused flow, flags critical
                information for staff, and clearly tells patients what will
                happen next. Throughout the design process, we had to conform to{" "}
                <strong className="text-white">hospital standard design</strong>{" "}
                by following their simple design system and keeping it inline
                with their current systems.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <VisualCard className="p-8">
              <LightboxImage
                src="/assets/images/pulse/pulse-hero-mockup.png"
                alt="Pulse Kiosk Mockup"
                onOpen={setLightboxSrc}
                width={1100}
                height={700}
                className="w-full rounded-2xl"
              />
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pillar 1: Cognitive Load ───────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>Pillar 1</ActLabel>
              <SectionHeading>Reduce cognitive load</SectionHeading>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <ScrollReveal direction="left">
              <ul className="space-y-4">
                {["Large primary action for clarity", "Visible language options immediately", "Clear emergency bypass option"].map((item) => (
                  <li key={item} className="text-slate-300 text-lg flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold flex items-center justify-center flex-shrink-0">{"\u2713"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <video
                  src="/assets/images/pulse%20showcase/Showreel_-Mobile-screens-[remix].mp4"
                  className="w-full h-auto object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="max-w-[800px] mx-auto">
              <p className="text-slate-400 text-lg mb-4">
                To reduce cognitive load, the first screen had to be{" "}
                <strong className="text-white">obvious and reassuring</strong>.
              </p>
              <ul className="space-y-2 text-slate-400">
                {[
                  "One dominant action for clarity",
                  "Visible language options immediately available",
                  "Clear line for life-threatening cases to never block urgent care",
                  "Simple, high-contrast layout for stressed and tired people",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-teal-400">{"\u2713"}</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pillar 2: Status & Next Steps ──────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24 bg-[#0b101d]">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="right" delay={0.1}>
              <ImageClipReveal direction="left">
                <LightboxImage
                  src="/assets/images/pulse/pulse-screen-confirmation.png"
                  alt="Priority Screen"
                  onOpen={setLightboxSrc}
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </ImageClipReveal>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <ActLabel>Pillar 2</ActLabel>
              <SectionHeading>Show status &amp; next steps</SectionHeading>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                To make sure{" "}
                <strong className="text-white">no one feels lost</strong>, every
                step shows progress and next steps.
              </p>
              <ul className="space-y-2 text-slate-400">
                {[
                  "Shows where you are in the process",
                  "Questions broken into small chunks with plain language",
                  "Each screen focused on a single decision",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-teal-400">{"\u2713"}</span> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Pillar 3: Triage ───────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <ActLabel>Pillar 3</ActLabel>
              <SectionHeading>Structure info for triage</SectionHeading>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                For staff, we prioritized{" "}
                <strong className="text-white">structured information</strong>{" "}
                over generic form dumps.
              </p>
              <ul className="space-y-2 text-slate-400">
                {[
                  "Risk flags automatically tagged and surfaced",
                  "Critical symptoms like chest pain highlighted immediately",
                  "Integrates with existing triage tools for quick action",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-teal-400">{"\u2713"}</span> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <VisualCard className="p-6">
                <div className="bg-[#0f172a] p-5 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-teal-400 font-bold tracking-wide text-sm">TRIAGE DASHBOARD</span>
                    <span className="text-xs text-slate-500">LIVE FEED</span>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-red-500 mb-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-semibold text-sm">Patient #8049</span>
                      <span className="text-slate-300 text-xs">0 min ago</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">&#128681; Chest Pain</span>
                      <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-xs">&#9888;&#65039; Pain: 8/10</span>
                    </div>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 opacity-60">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-semibold text-sm">Patient #8048</span>
                      <span className="text-slate-300 text-xs">2 min ago</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">Flu Symptoms</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-slate-400 text-sm mt-4">
                  Data structured for immediate triage decision.
                </p>
              </VisualCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Pillar 4: Inclusive ─────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 bg-[#0b101d]">
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>Pillar 4</ActLabel>
              <SectionHeading>Inclusive by design</SectionHeading>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <IconCard icon="&#128070;" title="Large targets" description="Easy to tap for shaky hands" />
                <IconCard icon="&#127763;" title="High contrast" description="Readable in harsh lighting" />
                <IconCard icon="&#128483;&#65039;" title="Plain language" description="No confusing medical jargon" />
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 text-lg text-center mt-6 max-w-[800px] mx-auto">
              We designed with{" "}
              <strong className="text-white">
                accessibility as a starting point
              </strong>
              , not an add-on. Large targets, high contrast, and plain language
              support people who are older, in pain, or in a rush. We also had
              to conform to{" "}
              <strong className="text-white">hospital standard design</strong>{" "}
              by following their simple design system and keeping it inline with
              their current systems. In future iterations, I&#39;d push this
              further with screen reader support, height considerations for the
              physical kiosk, and more language options.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Act IV: Before & After ─────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 text-center" style={{ background: `radial-gradient(circle at 50% 50%, ${accentTealSoft} 0%, #0a0e1a 70%)` }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <ActLabel>Act IV: Results &amp; Iteration</ActLabel>
            <SectionHeading>How the pillars changed the design</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="opacity-50 border-2 border-dashed border-slate-600 p-6 rounded-2xl text-left">
                  <h3 className="text-slate-400 text-lg font-semibold mb-3">Before</h3>
                  <ul className="text-slate-400 list-disc pl-5 space-y-2 text-sm">
                    <li>Busy screens</li>
                    <li>Long paragraphs of text</li>
                    <li>Overwhelming options</li>
                  </ul>
                </div>
                <div className="border-2 border-teal-400 p-6 rounded-2xl bg-teal-500/5 text-left">
                  <h3 className="text-teal-400 text-lg font-semibold mb-3">After</h3>
                  <ul className="text-white space-y-2 text-sm">
                    <li>{"\u2713"} Simplified flows</li>
                    <li>{"\u2713"} Clear progress indicators</li>
                    <li>{"\u2713"} One question per screen</li>
                  </ul>
                </div>
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 text-lg mt-8 max-w-[800px] mx-auto">
              These pillars weren&#39;t just theory. In our first version, we
              tried to collect everything on one screen. When we evaluated it
              against reducing cognitive load and showing clear status, we
              realized it was <strong className="text-white">overwhelming</strong>. So we split the flow
              into smaller steps, added progress, and simplified the copy. Each
              iteration passed through the lens of: does this{" "}
              <strong className="text-white">reduce stress</strong> and help{" "}
              <strong className="text-white">staff act faster</strong>?
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Impact ─────────────────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <ActLabel>Impact</ActLabel>
              <SectionHeading>What we heard and why it matters</SectionHeading>
              <div className="border-l-4 border-amber-500 pl-6 py-4 rounded-r-2xl bg-gradient-to-r from-amber-500/5 to-transparent italic text-lg text-slate-300 leading-relaxed">
                When we showed this to healthcare professionals, they appreciated
                that the kiosk wasn&#39;t replacing their judgment, just
                reducing <strong className="text-white">admin noise</strong>.
                They liked the structured intake and emphasis on clarity. Even as
                a concept, we see potential for: cleaner data, less repeated
                questioning, and patients feeling more confident they&#39;re
                &ldquo;in the system&rdquo;.
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="flex flex-col gap-4">
                {[
                  "\"This doesn't replace my judgment, it just reduces the admin noise.\"",
                  "\"I like that the data comes in structured. No more bad handwriting.\"",
                ].map((quote) => (
                  <div
                    key={quote}
                    className="relative text-xl text-slate-100 font-light leading-relaxed p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/5"
                  >
                    <span className="absolute top-3 left-4 text-5xl text-teal-500/20 font-serif leading-none">&ldquo;</span>
                    <span className="relative z-10 pl-6">{quote}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Act V: Reflection ──────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 bg-[#080b14]">
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ActLabel>Act V: Reflection</ActLabel>
              <SectionHeading>Next steps if this were real</SectionHeading>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <IconCard icon="&#129514;" title="Usability testing" description="With real patients" />
                <IconCard icon="&#9855;" title="Deeper accessibility" description="Screen readers & height" />
                <IconCard icon="&#128268;" title="Integration" description="Connecting to hospital OS" />
              </div>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 text-lg text-center mt-6 max-w-[800px] mx-auto">
              If this were going live, my next steps would be: usability testing
              with real ER patients and caregivers, deeper accessibility work,
              and planning for edge cases like kiosk downtime or lineups. I&#39;m
              proud of the direction, but it&#39;s definitely not finished. I
              see it as a{" "}
              <strong className="text-white">strong starting point</strong> that
              needs <strong className="text-white">real-world testing</strong>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Results ────────────────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 text-center" style={{ background: `radial-gradient(circle at 50% 50%, ${accentTealSoft} 0%, #0a0e1a 70%)` }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <ActLabel>Results</ActLabel>
            <SectionHeading>What we achieved</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2 row-span-2 flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-4xl mb-3">&#9201;&#65039;</span>
                  <span className="text-3xl font-semibold text-slate-100">127 seconds</span>
                  <p className="text-slate-400 text-sm mt-1">Projected time saved per patient through automated data collection</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-3xl mb-2">&#9889;</span>
                  <span className="text-xl font-semibold text-slate-100">20-25%</span>
                  <p className="text-slate-400 text-xs mt-1">Faster intake</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-3xl mb-2">{"\u2713"}</span>
                  <span className="text-xl font-semibold text-slate-100">100%</span>
                  <p className="text-slate-400 text-xs mt-1">Healthcare validation</p>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-3xl mb-2">&#128202;</span>
                  <span className="text-xl font-semibold text-slate-100">30%</span>
                  <p className="text-slate-400 text-xs mt-1">Fewer errors</p>
                </div>
                <div className="col-span-2 md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/[0.03]">
                  <span className="text-3xl mb-2">&#128154;</span>
                  <span className="text-xl font-semibold text-slate-100">Improved patient comfort</span>
                  <p className="text-slate-400 text-sm mt-1">Through transparent wait times and neutral language</p>
                </div>
              </div>
            </VisualCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Closing ────────────────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 text-center" style={{ background: `radial-gradient(circle at 50% 50%, ${accentTealSoft} 0%, #0a0e1a 70%)` }}>
        <div className="max-w-[1100px] mx-auto w-full">
          <ScrollReveal>
            <ActLabel>Closing</ActLabel>
            <SectionHeading>Designing for less stress, more support</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VisualCard className="text-center max-w-[900px] mx-auto p-12 mb-10">
              <div className="text-7xl leading-none mb-3">&#129309;</div>
              <p className="text-white text-2xl font-semibold">Empathy + Efficiency</p>
            </VisualCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { title: "Care under pressure", desc: "I care about situations where people are already under pressure, and design can genuinely reduce that load." },
                { title: "Clarity first", desc: "The pillars I used here, specifically calm, clarity, helpful to staff, and accessible by default, are things I want to bring into other products too." },
                { title: "Real impact", desc: "This project solidified something for me: design can make a genuine difference when the stakes are real." },
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

      <Lightbox
        src={lightboxSrc}
        alt="Pulse showcase detail"
        onClose={() => setLightboxSrc(null)}
      />
    </div>
  );
}
