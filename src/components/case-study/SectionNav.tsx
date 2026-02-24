"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SectionNavItem {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: SectionNavItem[];
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
const RADIUS = 16;
const CIRCUMFERENCE = RADIUS * 2 * Math.PI;

export function SectionNav({ sections }: SectionNavProps) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  const updateNav = useCallback(() => {
    if (sections.length === 0) return;

    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const viewportMid = scrollTop + viewportHeight * 0.4;

    // Determine visibility (show after hero)
    const heroEl = document.getElementById(sections[0]?.id);
    const heroHeight = heroEl?.offsetHeight ?? viewportHeight;
    setVisible(scrollTop > heroHeight * 0.5);

    // Find active section
    let newActiveIndex = 0;
    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(sections[i].id);
      if (!el) continue;
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (viewportMid >= top && viewportMid < bottom) {
        newActiveIndex = i;
      }
    }
    setActiveIndex(newActiveIndex);

    // Calculate progress within current section
    const currentEl = document.getElementById(sections[newActiveIndex]?.id);
    if (currentEl) {
      const sectionTop = currentEl.offsetTop;
      const sectionHeight = currentEl.offsetHeight;
      const scrollStart = sectionTop - viewportHeight * 0.3;
      const scrollEnd = sectionTop + sectionHeight - viewportHeight * 0.7;
      const progress = Math.max(
        0,
        Math.min(1, (scrollTop - scrollStart) / (scrollEnd - scrollStart)),
      );
      setSectionProgress(progress);
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();
    return () => window.removeEventListener("scroll", updateNav);
  }, [updateNav]);

  // Close expanded menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setExpanded(false);
  };

  const dashOffset = CIRCUMFERENCE - sectionProgress * CIRCUMFERENCE;

  if (sections.length === 0) return null;

  return (
    <nav
      ref={navRef}
      aria-label="Case study sections"
      className="fixed bottom-6 right-6 z-[1000] flex flex-row items-center transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Expanded section list */}
      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="absolute bottom-full right-0 mb-3 min-w-[180px] p-2 rounded-2xl border border-white/10 backdrop-blur-[20px] list-none flex flex-col gap-0.5"
            style={{
              background: "rgba(20, 20, 25, 0.98)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            {sections.map((section, i) => (
              <li key={section.id}>
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300
                    ${i === activeIndex ? "bg-[var(--cs-primary-soft,rgba(96,165,250,0.1))]" : "hover:bg-white/5"}
                  `}
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  <span
                    className={`
                      w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full shrink-0 transition-all duration-300
                      ${i === activeIndex
                        ? "text-bg"
                        : "bg-white/5 text-text-muted hover:bg-white/10 hover:text-text-secondary"
                      }
                    `}
                    style={
                      i === activeIndex
                        ? { background: "var(--cs-primary, var(--color-accent))", color: "var(--color-bg)" }
                        : undefined
                    }
                  >
                    {i}
                  </span>
                  <span
                    className={`
                      text-sm whitespace-nowrap transition-colors duration-300
                      ${i === activeIndex ? "text-text-primary font-semibold" : "text-text-muted font-medium"}
                    `}
                  >
                    {section.label}
                  </span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Main pill */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((prev) => !prev);
        }}
        className="flex items-center gap-3 rounded-full border border-white/10 backdrop-blur-[20px] transition-colors duration-300 hover:bg-white/5 cursor-pointer"
        style={{
          background: "rgba(20, 20, 25, 0.95)",
          padding: "10px 18px 10px 10px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
        aria-expanded={expanded}
        aria-label={`Section navigation: ${sections[activeIndex]?.label}`}
      >
        {/* Progress ring */}
        <div className="relative flex items-center justify-center w-11 h-11 shrink-0">
          <svg
            viewBox="0 0 40 40"
            className="absolute w-11 h-11"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="20"
              cy="20"
              r={RADIUS}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3"
            />
            <circle
              cx="20"
              cy="20"
              r={RADIUS}
              fill="none"
              stroke="var(--cs-primary, var(--color-accent))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              className="transition-[stroke-dashoffset] duration-400"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            />
          </svg>
          <span className="relative z-[1] text-sm font-bold text-text-primary tracking-tight">
            {activeIndex}
          </span>
        </div>

        {/* Current label */}
        <span className="text-[0.9375rem] font-semibold text-text-primary whitespace-nowrap max-w-[140px] overflow-hidden text-ellipsis hidden sm:inline">
          {sections[activeIndex]?.label}
        </span>

        {/* Expand chevron */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-text-muted shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </nav>
  );
}
