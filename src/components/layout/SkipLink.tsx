"use client";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed top-[-100px] left-1/2 -translate-x-1/2 z-[10000] bg-accent text-bg px-8 py-4 font-semibold text-sm no-underline rounded-b-[var(--radius-sm)] transition-[top] duration-300 ease-out focus:top-0 focus:outline-none"
    >
      skip to main content
    </a>
  );
}
