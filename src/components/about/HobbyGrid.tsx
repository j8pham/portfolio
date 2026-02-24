"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface HobbyProject {
  href: string;
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
}

const hobbyProjects: HobbyProject[] = [
  {
    href: "/playground/serve",
    image: "/assets/images/branding/SERVE.png",
    imageAlt: "uw serve promotional campaign visuals",
    tag: "branding",
    title: "uw serve redesign",
    description:
      "we rebuilt the club's branding from scratch and designed new and improved visuals and marketing strategies.",
  },
  {
    href: "/playground/magazine",
    image: "/assets/images/branding/GBDA101_A4_Magazine_Design_Final_JasonP-1-1.png",
    imageAlt: "magazine spread preview",
    tag: "editorial",
    title: "magazine editorial experiments",
    description:
      "this class project helped me explore and understand my design voice.",
  },
  {
    href: "/playground/posters",
    image: "/assets/images/branding/GBDA101_A2_Poster2_JasonP.png",
    imageAlt: "cinematic poster concept with vibrant gradients",
    tag: "poster design",
    title: "poster series",
    description:
      "cinematic mood posters exploring dramatic typographic studies.",
  },
];

function TiltCard({
  project,
  index,
}: {
  project: HobbyProject;
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [8, -8]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-8, 8]),
    springConfig,
  );

  // Shine effect
  const shineX = useTransform(mouseX, [0, 1], [0, 100]);
  const shineY = useTransform(mouseY, [0, 1], [0, 100]);
  const shineBackground = useTransform(
    [shineX, shineY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12) 0%, transparent 50%)`,
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        ease: easeOutExpo,
        delay: (index % 4) * 0.1,
      }}
    >
      <motion.a
        ref={cardRef}
        href={project.href}
        className="block relative text-inherit no-underline"
        style={{
          transformStyle: "preserve-3d",
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          transformPerspective: 1000,
        }}
        whileHover={reducedMotion ? {} : { y: -12 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image */}
        <div className="relative w-full aspect-square overflow-hidden rounded-[32px] bg-bg-elevated border border-white/[0.08]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover brightness-90 transition-all duration-600 group-hover:brightness-100 group-hover:scale-[1.08]"
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.9)] via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-400">
            <span className="inline-block text-[0.6875rem] uppercase tracking-[0.1em] text-accent px-3 py-1.5 bg-accent-soft rounded-full mb-2 w-fit">
              {project.tag}
            </span>
            <span className="text-sm text-text-primary font-medium">
              view project →
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-5">
          <h3 className="font-serif text-xl font-normal text-text-primary mb-2 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm leading-[1.7] text-text-secondary">
            {project.description}
          </p>
        </div>

        {/* Card shine overlay */}
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none rounded-[32px] overflow-hidden"
          style={{
            background: shineBackground,
          }}
        />
      </motion.a>
    </motion.div>
  );
}

export function HobbyGrid() {
  return (
    <section className="py-16" aria-labelledby="playground-heading">
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
          ✦ creative corner
        </span>
        <h2
          className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-text-primary mb-4"
          id="playground-heading"
        >
          welcome to my playground
        </h2>
        <p className="text-base text-text-secondary max-w-[600px] mx-auto leading-[1.7]">
          in my free time, i love experimenting with new ideas and pushing
          creative boundaries. here are some side projects i&apos;ve been
          working on.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto group">
        {hobbyProjects.map((project, i) => (
          <TiltCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
