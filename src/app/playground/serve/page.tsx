import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TextReveal } from "@/components/animation/TextReveal";
import { ImageClipReveal } from "@/components/animation/ImageClipReveal";

export const metadata: Metadata = {
  title: "SERVE Volleyball Club | Jason Pham",
  description:
    "SERVE Volleyball Club - Marketing & Content Strategy Case Study. Growing followers by 1,258 and increasing average views by 230% through systematic content testing.",
};

export default function ServePage() {
  return (
    <div className="min-h-screen p-6">
      <div
        className="max-w-[1600px] mx-auto bg-bg rounded-[32px] relative overflow-hidden"
        style={{
          padding: "3rem",
          boxShadow:
            "0 20px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",
          // @ts-expect-error CSS custom properties
          "--cs-primary": "#f59e0b",
          "--cs-primary-soft": "rgba(245, 158, 11, 0.1)",
          "--cs-primary-glow": "rgba(245, 158, 11, 0.3)",
        }}
      >
        {/* ── Hero ─────────────────────────────────────────────── */}
        <ScrollReveal>
          <div className="pt-24 pb-8">
            <Link
              href="/about"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors mb-8 inline-block"
            >
              ← back to playground
            </Link>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm px-4 py-2 bg-[var(--cs-primary-soft)] rounded-full font-medium text-amber-400 border border-amber-400/20">
                marketing strategy
              </span>
              <span className="text-text-muted text-sm">
                winter 2024 -- fall 2025
              </span>
            </div>

            <TextReveal className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.1] tracking-tight mb-6">
              building a social-first volleyball community
            </TextReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-text-secondary text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            leading marketing strategy for serve volleyball club through three
            academic terms, testing content approaches, and growing engagement
            across instagram through data-driven iteration.
          </p>
        </ScrollReveal>

        {/* Meta grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "timeline", value: "winter 2024 -- fall 2025" },
              { label: "role", value: "marketing lead" },
              { label: "platform", value: "instagram (reels-first)" },
              { label: "tools", value: "instagram insights, figma" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <span className="text-xs uppercase tracking-widest text-text-muted block mb-1">
                  {item.label}
                </span>
                <span className="text-sm text-text-primary font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Hero image */}
        <ScrollReveal delay={0.25}>
          <ImageClipReveal direction="bottom" className="rounded-2xl overflow-hidden mb-12">
            <Image
              src="/assets/images/branding/SERVE.png"
              alt="serve volleyball club branding"
              width={1600}
              height={900}
              className="w-full h-auto"
              priority
            />
          </ImageClipReveal>
        </ScrollReveal>

        {/* TL;DR */}
        <ScrollReveal delay={0.1}>
          <div className="p-6 md:p-8 rounded-2xl border border-amber-400/20 bg-[var(--cs-primary-soft)] mb-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">&#9889;</span>
              <span className="text-sm font-bold uppercase tracking-widest text-amber-400">
                TL;DR
              </span>
            </div>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              led marketing strategy for a student-run volleyball club,{" "}
              <strong className="text-text-primary">
                growing followers by 1,258
              </strong>{" "}
              and{" "}
              <strong className="text-text-primary">
                increasing average views by 230%
              </strong>{" "}
              through systematic content testing, human-first storytelling, and
              performance-driven iteration across three academic terms.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "+1,258", label: "followers gained" },
                { value: "+230%", label: "views increase" },
                { value: "2M+", label: "peak reel views" },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <span className="block text-2xl md:text-3xl font-bold text-amber-400 font-serif">
                    {m.value}
                  </span>
                  <span className="text-xs text-text-muted">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── 01: The Challenge ────────────────────────────────── */}
        <ScrollReveal>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              01 -- the challenge
            </span>
            <TextReveal className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-tight mt-2 mb-4">
              strong in-person, invisible online
            </TextReveal>
            <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
              serve had great energy on the court, but its social presence
              wasn&#39;t capturing the club&#39;s competitive credibility or
              community personality.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Before */}
            <div className="p-6 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">&#128533;</span>
                <h3 className="text-sm font-bold uppercase tracking-widest text-red-400">
                  before
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "inconsistent growth and engagement",
                  "content leaning too promotional",
                  "no stable visual or content system",
                  "knowledge loss between exec transitions",
                  "brand identity unclear",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-text-secondary text-sm pl-5 relative before:content-['✗'] before:absolute before:left-0 before:text-red-400 before:font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Goals */}
            <div className="p-6 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">&#10024;</span>
                <h3 className="text-sm font-bold uppercase tracking-widest text-green-400">
                  goals
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "grow followers and reach consistently",
                  "improve engagement quality",
                  "humanize the club brand",
                  "test and validate content direction",
                  "build a system future leads could inherit",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-text-secondary text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="border-l-[3px] border-amber-400 rounded-r-xl bg-white/[0.02] p-6 mb-20">
            <p className="font-serif text-xl leading-relaxed text-text-primary">
              &ldquo;the goal wasn&#39;t just growth&mdash;it was{" "}
              <strong className="text-amber-400">
                clarity, consistency, and long-term impact
              </strong>{" "}
              that could survive team changes.&rdquo;
            </p>
          </div>
        </ScrollReveal>

        {/* ── 02: The Strategy ─────────────────────────────────── */}
        <ScrollReveal>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              02 -- the strategy
            </span>
            <TextReveal className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-tight mt-2 mb-4">
              test, learn, adapt -- three terms of evolution
            </TextReveal>
            <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
              rather than guessing what would work, we ran a structured 3-term
              experiment testing different content positioning while staying
              human-first.
            </p>
          </div>
        </ScrollReveal>

        {/* Content Pillars */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-serif text-2xl mb-2 text-text-primary">
            human-first content pillars
          </h3>
          <p className="text-text-secondary mb-6">
            we shifted from announcements to stories, showing the people and
            personality behind the club.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              {
                icon: "\uD83D\uDC65",
                title: "real people",
                desc: "execs and members as authentic personalities, not just names on a poster",
              },
              {
                icon: "\uD83C\uDFAC",
                title: "behind-the-scenes",
                desc: "candid moments, humor, and the everyday energy that makes serve feel alive",
              },
              {
                icon: "\uD83C\uDF89",
                title: "event energy",
                desc: "capturing the excitement and community vibe from sessions and tournaments",
              },
              {
                icon: "\uD83C\uDFC6",
                title: "competitive highlights",
                desc: "showcasing skill, intensity, and the club\u2019s performance credibility",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-amber-400/30 transition-all group"
              >
                <span className="text-3xl block mb-3">{pillar.icon}</span>
                <h4 className="text-base font-semibold text-text-primary mb-2">
                  {pillar.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Three-Term Timeline */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-serif text-2xl mb-2 text-text-primary">
            three-term content evolution
          </h3>
          <p className="text-text-secondary mb-8">
            each term tested a different content approach. here&#39;s what we
            learned:
          </p>

          <div className="space-y-6 mb-12">
            {[
              {
                num: 1,
                term: "winter 2024 -- fun & casual",
                title: "attract new and beginner players",
                result:
                  "strong early engagement, but performance declined toward end of term",
                learning:
                  "too one-dimensional\u2014novelty wore off quickly",
                emoji: "\uD83D\uDCA1",
              },
              {
                num: 2,
                term: "spring/summer 2024 -- casual\u2013semi competitive mix",
                title: "balance approachability with skill",
                result:
                  "slower start, but engagement improved by end of term",
                learning:
                  "iteration within the term mattered more than initial direction\u2014variation and pacing helped recover audience interest",
                emoji: "\uD83D\uDCA1",
              },
              {
                num: 3,
                term: "fall 2024 -- competitive focus",
                title: "establish credibility and performance identity",
                result:
                  "strongest overall engagement and reach across all three terms",
                learning:
                  "competitive positioning resonated most while still allowing lighter content moments",
                emoji: "\u2728",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="relative pl-16 md:pl-20"
              >
                {/* Badge */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/30">
                  {item.num}
                </div>
                <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-amber-400/30 transition-all">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    {item.term}
                  </span>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">
                    <strong>result:</strong> {item.result}
                  </p>
                  <p className="text-sm text-text-muted italic pt-3 border-t border-white/5">
                    {item.emoji} learning: {item.learning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="p-6 rounded-xl border border-amber-400/20 bg-[var(--cs-primary-soft)] mb-20">
            <h4 className="text-sm font-semibold text-amber-400 mb-2 flex items-center gap-2">
              <span>&#128202;</span> performance-led iteration
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              using instagram insights, we tracked views per reel, engagement
              patterns, and follower growth. content formats were adjusted in
              real time, and visual systems were designed in figma to keep output
              consistent despite rotating team members.
            </p>
          </div>
        </ScrollReveal>

        {/* ── 03: The Results ──────────────────────────────────── */}
        <ScrollReveal>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              03 -- the results
            </span>
            <TextReveal className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-tight mt-2 mb-4">
              from inconsistent to unstoppable
            </TextReveal>
            <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
              three terms of testing, iterating, and refining delivered
              measurable growth and created a sustainable content system.
            </p>
          </div>
        </ScrollReveal>

        {/* Key metrics */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "\uD83D\uDC65", value: "+1,258", label: "followers gained" },
              { icon: "\uD83D\uDCC8", value: "100+", label: "consistent likes" },
              { icon: "\uD83D\uDC40", value: "3K \u2192 10K", label: "avg views per post" },
              { icon: "\uD83D\uDE80", value: "+230%", label: "views increase" },
            ].map((m) => (
              <div
                key={m.label}
                className="text-center p-5 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <span className="text-2xl block mb-2">{m.icon}</span>
                <span className="block text-2xl font-bold text-amber-400 font-serif">
                  {m.value}
                </span>
                <span className="text-xs text-text-muted">{m.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Growth chart */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-serif text-2xl mb-4 text-text-primary">
            engagement growth over time
          </h3>
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex items-end justify-center gap-6 md:gap-10 h-[320px] mb-12">
            {[
              { height: "27%", value: "~3K", label: "before\n(avg)" },
              { height: "45%", value: "~5K", label: "term 1\n(peak)" },
              { height: "64%", value: "~8K", label: "term 2\n(end)" },
              { height: "82%", value: "~10K", label: "term 3\n(consistent)" },
            ].map((bar) => (
              <div
                key={bar.label}
                className="flex flex-col items-center justify-end h-full"
              >
                <div className="relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-text-primary whitespace-nowrap">
                    {bar.value}
                  </span>
                  <div
                    className="w-12 md:w-14 rounded-t-lg bg-gradient-to-t from-amber-500 to-amber-500/60 shadow-lg shadow-amber-500/30"
                    style={{ height: bar.height, minHeight: "40px" }}
                  />
                </div>
                <span className="text-xs text-text-muted text-center mt-3 whitespace-pre-line">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Viral breakthrough */}
        <ScrollReveal delay={0.1}>
          <div className="p-8 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-[var(--cs-primary-soft)] to-amber-500/5 text-center mb-12">
            <span className="text-5xl block mb-4">&#128293;</span>
            <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">
              viral breakthrough
            </h3>
            <p className="text-text-secondary text-base mb-6">
              two reels reached exceptional viral performance
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="p-4 rounded-xl bg-white/[0.03]">
                <span className="block text-3xl md:text-4xl font-serif text-amber-400 mb-1">
                  500K+
                </span>
                <span className="text-xs text-text-muted">
                  first viral reel
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03]">
                <span className="block text-3xl md:text-4xl font-serif text-amber-400 mb-1">
                  2M+
                </span>
                <span className="text-xs text-text-muted">
                  peak viral reel
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Engagement quality */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-serif text-2xl mb-4 text-text-primary">
            engagement quality improved
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="p-6 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">&#128201;</span>
                <h3 className="text-sm font-bold uppercase tracking-widest text-red-400">
                  before strategy
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "inconsistent 50\u2013100 likes per post",
                  "unpredictable engagement patterns",
                  "trend-dependent performance",
                  "high variance between posts",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-text-secondary text-sm pl-5 relative before:content-['✗'] before:absolute before:left-0 before:text-red-400 before:font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">&#128200;</span>
                <h3 className="text-sm font-bold uppercase tracking-widest text-green-400">
                  after strategy
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "consistent 100+ likes per post",
                  "predictable engagement baseline",
                  "quality interactions scaled with reach",
                  "stable performance across content types",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-text-secondary text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* ── 04: Reflection ───────────────────────────────────── */}
        <ScrollReveal>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              04 -- reflection
            </span>
            <TextReveal className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-tight mt-2 mb-4">
              what worked, what didn&#39;t, and why it mattered
            </TextReveal>
          </div>
        </ScrollReveal>

        {/* Key takeaways */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-serif text-2xl mb-4 text-text-primary">
            key takeaways
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: "\u2705",
                title: "show people, not just events",
                desc: "human-first storytelling made the account feel social rather than promotional",
              },
              {
                icon: "\uD83D\uDD04",
                title: "iterate within terms, not between them",
                desc: "mid-term pivots led to stronger end results\u2014waiting for the next term would have been too slow",
              },
              {
                icon: "\uD83D\uDCCA",
                title: "let data guide creative decisions",
                desc: "instagram insights revealed what resonated, allowing us to double down on what worked",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h4 className="text-base font-semibold text-text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* What didn't work */}
        <ScrollReveal delay={0.1}>
          <div className="border-l-[3px] border-red-500 rounded-r-xl bg-red-500/5 p-6 mb-8">
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              what didn&#39;t work (and why that helped)
            </h4>
            <ul className="space-y-3">
              {[
                "purely casual content lacked long-term depth",
                "early mixed positioning needed refinement through testing",
                'these "failures" became signals for the next iteration, not setbacks',
              ].map((item) => (
                <li
                  key={item}
                  className="text-text-secondary text-sm pl-5 relative"
                >
                  <span className="absolute left-0 text-red-400">
                    &#8594;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Impact beyond metrics */}
        <ScrollReveal delay={0.1}>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] mb-8">
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              impact beyond metrics
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "\uD83E\uDD1D", text: "stronger community connection" },
                {
                  icon: "\uD83C\uDFAF",
                  text: "clearer brand direction for future execs",
                },
                {
                  icon: "\uD83D\uDCDA",
                  text: "easier onboarding for new team members",
                },
                {
                  icon: "\uD83D\uDD04",
                  text: "repeatable system, not one-off wins",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="p-4 rounded-xl bg-white/[0.02]"
                >
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <span className="text-sm text-text-secondary">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Final takeaway */}
        <ScrollReveal delay={0.1}>
          <div className="p-8 md:p-10 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-[var(--cs-primary-soft)] to-amber-500/5 text-center mb-16">
            <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
              final takeaway
            </h3>
            <p className="text-lg leading-relaxed text-text-secondary max-w-[720px] mx-auto">
              the biggest gains came from{" "}
              <strong className="text-amber-400">staying flexible</strong>. the
              ability to recognize fatigue, pivot mid-term, and double down on
              what worked turned experimentation into real growth.{" "}
              <strong className="text-text-primary">
                competitive clarity, paired with human storytelling, ultimately
                delivered the strongest results.
              </strong>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
