import Image from "next/image";
import Link from "next/link";
import { projects, comingSoonProjects } from "@/data/projects";
import { BlobDecor } from "@/components/shared/BlobDecor";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export default function Home() {
  const syf = projects.find((p) => p.slug === "syf")!;
  const resonate = projects.find((p) => p.slug === "resonate")!;
  const relocate = projects.find((p) => p.slug === "relocate")!;
  const pulse = projects.find((p) => p.slug === "pulse")!;

  return (
    <div className="min-h-screen p-6 overflow-x-hidden">
      <div
        className="max-w-[1600px] mx-auto bg-bg rounded-[32px] relative overflow-hidden"
        style={{
          padding: "3rem 3rem 2rem",
          boxShadow:
            "0 20px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        <BlobDecor />

        {/* Header */}
        <header className="pt-48 pb-8 relative z-[1]">
          <ScrollReveal>
            <h1 className="font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-normal leading-[1.2] tracking-tight pl-[0.1em]">
              i&apos;m{" "}
              <span
                className="italic bg-clip-text"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-accent-blue))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 4s ease infinite",
                }}
              >
                jason
              </span>
              , a product designer
              <br />
              with engineering roots.
            </h1>
          </ScrollReveal>
        </header>

        {/* Bento Grid */}
        <div
          className="grid grid-cols-5 gap-6 relative z-[1]"
        >
          {/* Featured Large - SYF */}
          <ScrollReveal className="col-span-3 row-span-2" delay={0.1}>
            <Link
              href={syf.href}
              className="block relative rounded-[32px] overflow-hidden bg-bg-elevated h-full min-h-[500px] group transition-all duration-500"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div className="absolute inset-0 overflow-hidden bg-black/30">
                <Image
                  src={syf.heroImage}
                  alt={syf.heroAlt}
                  fill
                  className="object-cover transition-transform duration-800 group-hover:scale-[1.08]"
                  priority
                />
              </div>
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.9) 100%)",
                }}
              />
              <div className="relative z-[2] flex flex-col justify-end h-full p-12 text-white">
                <span className="text-[0.8125rem] uppercase tracking-[0.15em] font-bold opacity-90 mb-0.5">
                  {syf.label}
                </span>
                <h2 className="font-serif text-[4rem] font-normal tracking-tight leading-[1.1] mb-1">
                  {syf.title}
                </h2>
                <p className="text-[1.25rem] leading-[1.2] opacity-95 max-w-[90%]">
                  {syf.description}
                </p>
                <div className="flex gap-3.5 flex-wrap mt-6">
                  {syf.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-5 py-2.5 bg-white/15 backdrop-blur-[10px] rounded-full font-semibold border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Resonate - Tall */}
          <ScrollReveal className="col-span-2 row-span-2" delay={0.2}>
            <ProjectCard project={resonate} />
          </ScrollReveal>

          {/* About Me Card */}
          <ScrollReveal className="col-span-2 row-span-2" delay={0.3}>
            <div
              className="rounded-[32px] p-10 flex flex-col min-h-[500px] h-full"
              style={{
                background:
                  "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <div
                  className="text-[2.5rem] leading-none inline-block"
                  style={{ animation: "starTwinkle 3s ease-in-out infinite" }}
                >
                  ✦
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-[10px] rounded-full border border-white/20">
                  <span
                    className="text-xl inline-block"
                    style={{ animation: "wave 2.5s ease-in-out infinite" }}
                  >
                    👋
                  </span>
                  <span className="text-sm font-semibold text-white">
                    nice to see you
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-[2.75rem] font-normal tracking-tight leading-[1.1] text-white mb-2">
                about me
              </h2>

              <p className="text-[1.125rem] text-white/90 leading-[1.6] mb-6">
                i used to be an engineering student who kept asking:
                <br />
                <span className="bg-white/20 px-1 rounded">
                  who is this for?
                </span>{" "}
                <span className="bg-white/20 px-1 rounded">
                  why does it work this way?
                </span>
                <br />
                <br />
                that curiosity led me to product design, where i combine
                structured problem solving with real user research to build
                things that actually make sense for people.
              </p>

              <div className="flex flex-col gap-3 mb-6">
                <HighlightItem icon="💼" label="previously" text="ux design intern @ ontario mto" />
                <HighlightItem icon="🎓" label="education" text="gbda @ university of waterloo" />
                <HighlightItem icon="🎵" label="vibes" text="r&b, design, volleyball & caffeine" />
              </div>

              <div className="mb-4">
                <p className="text-sm text-white/80 mb-2">i believe in:</p>
                <div className="flex flex-wrap gap-2">
                  {["🫶 being considerate", "🤝 building trust", "✨ creating consistency"].map((p) => (
                    <span key={p} className="text-sm px-3 py-1.5 bg-white/15 rounded-full border border-white/20 font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-auto">
                <Link
                  href="/about"
                  className="text-white font-semibold hover:opacity-80 transition-opacity"
                >
                  learn more →
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Relocate - Wide */}
          <ScrollReveal className="col-span-3 row-span-1" delay={0.15}>
            <ProjectCard project={relocate} />
          </ScrollReveal>

          {/* Pulse - Medium */}
          <ScrollReveal className="col-span-2 row-span-1" delay={0.2}>
            <ProjectCard project={pulse} />
          </ScrollReveal>

          {/* Coming Soon Cards */}
          {comingSoonProjects.map((proj, i) => (
            <ScrollReveal key={proj.slug} className="col-span-1 row-span-1" delay={0.1 + i * 0.05}>
              <div
                className="rounded-[32px] p-6 flex flex-col items-center justify-center bg-bg-elevated border border-white/[0.06] h-full min-h-[200px]"
              >
                <div className="w-full h-32 rounded-2xl overflow-hidden mb-4 bg-black/20">
                  <Image
                    src={proj.thumbnail}
                    alt={proj.thumbnailAlt}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-[1.75rem] font-normal tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-text-muted text-sm">coming soon</p>
              </div>
            </ScrollReveal>
          ))}

          {/* Contact Card */}
          <ScrollReveal className="col-span-4 row-span-1" delay={0.1}>
            <div
              className="rounded-[32px] p-10 flex flex-row items-center justify-between gap-12 min-h-[350px] relative overflow-hidden border border-white/[0.06]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(37,99,235,0.08) 100%)",
              }}
            >
              <div
                className="absolute -top-1/2 -right-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-[1]">
                <h2 className="font-serif text-[2.75rem] font-normal tracking-tight leading-[1.1] mb-2">
                  let&apos;s connect
                </h2>
                <p className="text-[1.125rem] text-text-secondary leading-[1.6]">
                  if you&apos;re working on something interesting,
                  <br />
                  i&apos;d love to hear about it.
                </p>
              </div>
              <div className="flex gap-4 relative z-[1]">
                <SocialLink href="mailto:pham.jason@outlook.com" label="email">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/pham-jason/"
                  label="linkedin"
                  external
                  fill
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </SocialLink>
                <SocialLink
                  href="https://x.com/jaedrms"
                  label="twitter"
                  external
                  fill
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </SocialLink>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={project.href}
      className="block rounded-[32px] overflow-hidden bg-bg-elevated border border-white/[0.06] h-full min-h-[350px] group transition-all duration-500 hover:border-white/[0.12]"
    >
      <div className="h-[60%] overflow-hidden bg-black/20">
        <Image
          src={project.heroImage}
          alt={project.heroAlt}
          width={800}
          height={500}
          className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-105"
        />
      </div>
      <div className="p-8 flex flex-col gap-0">
        <span className="text-[0.8125rem] uppercase tracking-[0.15em] font-bold text-white/90">
          {project.label}
        </span>
        <h2 className="font-serif text-[2.75rem] font-normal tracking-tight leading-[1.1] mb-2">
          {project.title}
        </h2>
        <p className="text-[1.125rem] text-text-secondary leading-[1.6]">
          {project.description}
        </p>
        <div className="flex gap-3.5 flex-wrap mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-5 py-2.5 bg-white/15 backdrop-blur-[10px] rounded-full font-semibold border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function HighlightItem({ icon, label, text }: { icon: string; label: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <span className="text-xs uppercase tracking-wider text-white/60 block">
          {label}
        </span>
        <span className="text-sm text-white/90">{text}</span>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
  external,
  fill,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
  fill?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-12 h-12 flex items-center justify-center rounded-full border border-white/[0.08] hover:border-white/20 hover:bg-white/5 transition-all"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill ? "currentColor" : "none"}
        stroke={fill ? undefined : "currentColor"}
        strokeWidth={fill ? undefined : 2}
        className="text-text-secondary"
      >
        {children}
      </svg>
    </a>
  );
}
