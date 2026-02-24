"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const typingWords = [
  "product designer",
  "volleyball player",
  "creative thinker",
  "problem solver",
  "celcius addict",
  "professional sidequester",
  "tft addict",
];

const catMessages = [
  "meow!",
  "purr~",
  "zzz...",
  "*stretch*",
  "nya~",
  "(=^・ω・^=)",
];

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const catParallaxY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // Polaroid tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 100, damping: 25 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [5, -5]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-5, 5]),
    springConfig,
  );

  const handlePolaroidMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handlePolaroidMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Typing animation
  const [displayText, setDisplayText] = useState("product designer");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = typingWords[0].length;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const currentWord = typingWords[wordIndex];

      if (isDeleting) {
        charIndex--;
        setDisplayText(currentWord.substring(0, charIndex));
      } else {
        charIndex++;
        setDisplayText(currentWord.substring(0, charIndex));
      }

      let delay: number;
      if (!isDeleting && charIndex === currentWord.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typingWords.length;
        delay = 500;
      } else {
        delay = isDeleting ? 50 : 100;
      }

      timeout = setTimeout(tick, delay);
    }

    timeout = setTimeout(tick, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Cat easter egg
  const [catMessage, setCatMessage] = useState<string | null>(null);
  const catClickCount = useRef(0);
  const catMessageTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleCatClick = useCallback(() => {
    catClickCount.current++;
    const idx =
      catClickCount.current <= catMessages.length
        ? catClickCount.current - 1
        : Math.floor(Math.random() * catMessages.length);
    setCatMessage(catMessages[idx]);

    if (catMessageTimeout.current) clearTimeout(catMessageTimeout.current);
    catMessageTimeout.current = setTimeout(() => setCatMessage(null), 2000);
  }, []);

  return (
    <header
      ref={heroRef}
      className="min-h-screen flex items-center py-16 pb-24 relative z-[1]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-center w-full">
        {/* Hero Text */}
        <div className="max-w-[700px] order-2 md:order-1 text-center md:text-left">
          {/* Greeting pill */}
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/[0.03] border border-white/[0.08] rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
          >
            <span
              className="text-2xl inline-block"
              style={{ animation: "wave 2.5s ease-in-out infinite" }}
              aria-hidden="true"
            >
              👋
            </span>
            <span className="text-[0.9375rem] text-text-secondary tracking-wide">
              nice to see you
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.15] mb-6">
            <motion.span
              className="block text-text-secondary text-[0.6em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.4 }}
            >
              once again, i&apos;m
            </motion.span>
            <motion.span
              className="inline-block italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.6 }}
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent), var(--color-accent-blue))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
                animation: "gradientShift 5s ease-in-out infinite",
              }}
            >
              jason
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            className="text-[clamp(1.0625rem,2vw,1.375rem)] leading-[1.8] text-text-secondary mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.8 }}
          >
            i love learning about{" "}
            <span className="text-accent relative">
              human stories
              <motion.span
                className="absolute bottom-[-2px] left-0 w-full h-[2px]"
                style={{
                  background: "linear-gradient(90deg, #60a5fa, #38bdf8)",
                  transformOrigin: "left",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.6,
                  ease: easeOutExpo,
                  delay: 1.2,
                }}
              />
            </span>{" "}
            and letting them guide every pixel, prototype, and conversation.
          </motion.p>

          {/* Scroll hint */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 1 }}
          >
            <span className="text-xs text-text-muted uppercase tracking-[0.15em]">
              scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-white/[0.08] rounded-xl relative overflow-hidden">
              <motion.span
                className="absolute left-1/2 -translate-x-1/2 w-1 h-2 bg-accent rounded-sm"
                animate={
                  reducedMotion
                    ? {}
                    : {
                        top: ["6px", "20px", "6px"],
                        opacity: [1, 0.5, 1],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ top: 6 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Polaroid Stack */}
        <motion.div
          className="relative order-1 md:order-2 w-full max-w-[240px] md:max-w-none mx-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.6 }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="relative w-full max-w-[340px] mx-auto"
            style={{
              aspectRatio: "3/4",
              y: reducedMotion ? 0 : parallaxY,
            }}
            onMouseMove={handlePolaroidMouseMove}
            onMouseLeave={handlePolaroidMouseLeave}
          >
            {/* Back card */}
            <motion.div
              className="absolute inset-0 rounded-[4px]"
              style={{
                background:
                  "linear-gradient(135deg, #0f0f12 0%, #18181b 100%)",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.3), 0 8px 40px rgba(0,0,0,0.2)",
                zIndex: 1,
                rotate: -8,
                x: -20,
                y: 10,
              }}
              whileHover={{ rotate: -12, x: -35, y: 15 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
            />
            {/* Mid card */}
            <motion.div
              className="absolute inset-0 rounded-[4px]"
              style={{
                background:
                  "linear-gradient(135deg, #141418 0%, #1c1c20 100%)",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.3), 0 8px 40px rgba(0,0,0,0.2)",
                zIndex: 2,
                rotate: 4,
                x: 15,
                y: -5,
              }}
              whileHover={{ rotate: 8, x: 25, y: -10 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
            />
            {/* Main card */}
            <motion.div
              className="absolute inset-0 rounded-[4px] p-3 pb-[50px] cursor-pointer bg-[#1e1e24] border border-white/[0.08]"
              style={{
                zIndex: 3,
                rotate: -2,
                rotateX: reducedMotion ? 0 : rotateX,
                rotateY: reducedMotion ? 0 : rotateY,
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.3), 0 8px 40px rgba(0,0,0,0.2)",
              }}
              whileHover={{
                rotate: 0,
                scale: 1.02,
                boxShadow:
                  "0 8px 30px rgba(0,0,0,0.2), 0 15px 60px rgba(96,165,250,0.15)",
              }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
            >
              <div className="w-full aspect-square overflow-hidden bg-[#0a0a0a] rounded-sm">
                <Image
                  src="/assets/images/branding/profile-portrait.jpg"
                  alt="jason - profile picture"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-left transition-all duration-500"
                  style={{
                    filter: "saturate(1.1) contrast(1.05)",
                    transitionTimingFunction:
                      "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  priority
                />
              </div>
              {/* Caption with typing text */}
              <div className="absolute bottom-[42px] left-3 right-3 h-[38px] flex items-center justify-center text-center">
                <span
                  className="text-lg text-white/70 tracking-wide"
                  style={{ fontFamily: "var(--font-caveat), 'Comic Sans MS', cursive" }}
                  aria-live="polite"
                >
                  {displayText}
                  <span
                    className="ml-[1px] text-white/70"
                    style={{
                      animation: "blink 1s step-end infinite",
                    }}
                  >
                    |
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Cat peeking */}
          <motion.div
            className="absolute -bottom-[30px] -left-[40px] w-[clamp(80px,12vw,120px)] z-10 cursor-pointer md:block hidden"
            style={{ y: reducedMotion ? 0 : catParallaxY }}
            whileHover={{ y: -10, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCatClick}
            role="button"
            aria-label="pet the cat"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCatClick();
              }
            }}
          >
            <motion.div
              animate={
                reducedMotion
                  ? {}
                  : { y: [0, -8, 0] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/images/branding/sleepycat-256x256.png"
                alt=""
                width={120}
                height={120}
                className="w-full"
                style={{
                  filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))",
                }}
                aria-hidden="true"
              />
            </motion.div>
            {/* Mini zzz */}
            <div className="absolute -top-[5px] -right-[5px] flex gap-[1px]">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="font-bold text-accent"
                  style={{ fontSize: 8 + i * 2 }}
                  animate={
                    reducedMotion
                      ? { opacity: 1 }
                      : {
                          opacity: [0, 1, 0],
                          y: [0, -10, -20],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  z
                </motion.span>
              ))}
            </div>
            {/* Cat message bubble */}
            <AnimatePresence>
              {catMessage && (
                <motion.div
                  className="absolute bottom-[calc(100%+5px)] left-1/2 bg-[rgba(8,8,10,0.95)] text-accent px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-white/[0.08] z-20"
                  style={{ backdropFilter: "blur(10px)" }}
                  initial={{
                    opacity: 0,
                    x: "-50%",
                    y: 10,
                    scale: 0.8,
                  }}
                  animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: "-50%",
                    y: -10,
                  }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                >
                  {catMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
