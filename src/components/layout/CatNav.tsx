"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/navigation";

const menuItemPositions = [
  { x: 8, y: 65 },
  { x: 8, y: 115 },
  { x: 8, y: 165 },
  { x: 8, y: 215 },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function CatNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    buttonRef.current?.focus();
  }, []);

  // Scroll detection for quick nav pills
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Keyboard handling
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }

      // Tab trap when menu is open
      if (isOpen && e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll("a");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          buttonRef.current?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          buttonRef.current?.focus();
        } else if (
          !e.shiftKey &&
          document.activeElement === buttonRef.current
        ) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none"
      aria-label="main navigation"
    >
      <div className="flex justify-between items-start w-full">
        {/* Cat Menu Hub */}
        <div className="relative pointer-events-auto m-4">
          {/* Cat Button */}
          <motion.button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            aria-expanded={isOpen}
            className="relative border-none rounded-full cursor-pointer p-0 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: isScrolled ? 48 : 56,
              height: isScrolled ? 48 : 56,
              background:
                "linear-gradient(135deg, rgba(50, 50, 58, 0.95) 0%, rgba(40, 40, 48, 0.95) 100%)",
              backdropFilter: "blur(20px)",
              border: `2px solid ${isOpen ? "var(--color-accent)" : "rgba(96, 165, 250, 0.4)"}`,
              boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 20px rgba(96,165,250,${isOpen ? "0.3" : "0.15"}), inset 0 1px 0 rgba(255,255,255,0.1)`,
              transition: "width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/assets/images/branding/sleepycat.png"
                alt=""
                width={isScrolled ? 36 : 44}
                height={isScrolled ? 36 : 44}
                className="object-contain transition-all duration-400"
                style={{
                  filter: isOpen ? "brightness(1.1)" : undefined,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* ZZZ Animation */}
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    className="absolute -top-2 -right-2 flex gap-0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="font-bold text-accent"
                        style={{ fontSize: 10 + i * 2 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          y: [0, -4, -8, -12],
                          x: [0, 2, 4, 8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      >
                        z
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tooltip */}
            {!isOpen && (
              <span className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-[rgba(8,8,10,0.95)] text-text-secondary text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300 border border-[var(--color-border)] group-hover:opacity-100 hover:opacity-0 peer-hover:opacity-100"
                style={{ display: isOpen ? 'none' : undefined }}
              >
                poke me!
              </span>
            )}
          </motion.button>

          {/* Radial Menu Items */}
          <div ref={menuRef} className="absolute top-0 left-0 w-0 h-0 z-[15]">
            <AnimatePresence>
              {isOpen &&
                navItems.map((item, index) => {
                  const pos = menuItemPositions[index];
                  const isExternal = item.external || item.href.startsWith("mailto:");
                  const LinkComponent = isExternal ? "a" : Link;
                  const linkProps = isExternal
                    ? {
                        href: item.href,
                        target: item.external ? "_blank" : undefined,
                        rel: item.external ? "noopener noreferrer" : undefined,
                      }
                    : { href: item.href };

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: pos.x,
                        y: pos.y,
                      }}
                      exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: easeOutExpo,
                        delay: index * 0.05,
                      }}
                      className="absolute top-0 left-0 z-20"
                    >
                      <LinkComponent
                        {...linkProps}
                        onClick={() => setTimeout(close, 100)}
                        className="h-11 px-4 pl-3 flex items-center gap-2.5 no-underline text-text-primary rounded-[22px] transition-all duration-300 hover:bg-gradient-to-br hover:from-accent hover:to-accent-blue hover:border-accent"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(30, 30, 35, 0.98) 0%, rgba(20, 20, 25, 0.98) 100%)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(96, 165, 250, 0.3)",
                          boxShadow:
                            "0 4px 16px rgba(0,0,0,0.3), 0 0 12px rgba(96,165,250,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
                        }}
                      >
                        <span className="flex items-center justify-center w-6 h-6 shrink-0">
                          <Image
                            src={item.icon}
                            alt=""
                            width={18}
                            height={18}
                            className="invert opacity-90"
                          />
                        </span>
                        <span className="text-[0.8125rem] font-semibold tracking-wide text-text-secondary">
                          {item.label}
                        </span>
                      </LinkComponent>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </div>

          {/* Backdrop */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-[5]"
                style={{
                  background: "rgba(8, 8, 10, 0.6)",
                  backdropFilter: "blur(4px)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={close}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Quick Nav Pills */}
        <motion.div
          className="flex gap-2 p-2 rounded-full pointer-events-auto m-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(30, 30, 35, 0.95) 0%, rgba(20, 20, 25, 0.95) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(96, 165, 250, 0.3)",
            boxShadow:
              "0 4px 24px rgba(0,0,0,0.3), 0 0 15px rgba(96,165,250,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
          initial={false}
          animate={{
            opacity: isScrolled ? 1 : 0,
            y: isScrolled ? 0 : -10,
            pointerEvents: isScrolled ? "auto" as const : "none" as const,
          }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          aria-hidden={!isScrolled}
        >
          {navItems.slice(1).map((item) => {
            const isExternal = item.external || item.href.startsWith("mailto:");
            const LinkComponent = isExternal ? "a" : Link;
            const linkProps = isExternal
              ? {
                  href: item.href,
                  target: item.external ? "_blank" : undefined,
                  rel: item.external ? "noopener noreferrer" : undefined,
                }
              : { href: item.href };

            return (
              <LinkComponent
                key={item.label}
                {...linkProps}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                tabIndex={isScrolled ? 0 : -1}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={18}
                  height={18}
                  className="invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </LinkComponent>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
}
