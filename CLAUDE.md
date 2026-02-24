# CLAUDE.md

## Project Overview

UX portfolio site for Jason Pham — a product designer's portfolio built with Next.js, Tailwind CSS, and Framer Motion. Dark editorial aesthetic with rich scroll-driven animations.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, static export for GitHub Pages)
- **Tailwind CSS v4** (utility-first, `@theme inline` config in globals.css)
- **Framer Motion** (scroll reveals, parallax, page transitions, 3D hover effects)
- **next/font/google** — Instrument Serif (headings), Manrope (body)
- Deployed via **GitHub Pages** with GitHub Actions (static export to `out/`)

## Commands

```bash
npm run dev     # Start dev server (http://localhost:3000)
npm run build   # Production build → out/ directory (static export)
npm run lint    # ESLint
```

## Project Structure

```
src/
  app/
    layout.tsx              # Root layout: fonts, metadata, CatNav, Footer
    page.tsx                # Home (bento grid)
    globals.css             # Tailwind theme, design tokens, keyframes
    about/page.tsx
    projects/{syf,pulse,resonate,relocate}/page.tsx
    playground/{serve,magazine,posters}/page.tsx
    showcase/{pulse,syf}/page.tsx
    case-study/page.tsx
  components/
    layout/                 # CatNav, Footer, PageTransitionWrapper, SkipLink
    shared/                 # BlobDecor, SectionHeader, ProjectCard, SocialLinks
    home/                   # BentoGrid, FeaturedProject, AboutCard, ContactCard
    about/                  # HeroSection, Timeline, PrincipleCards, HobbyGrid
    case-study/             # CaseStudyLayout, SectionNav, HeroSection, MetricRing, etc.
    animation/              # ScrollReveal, MagneticCard, ParallaxLayer, CounterAnimation, etc.
  data/
    projects.ts             # Project metadata (slug, accent color, tags, images)
    navigation.ts           # Nav items for CatNav
  hooks/
    useReducedMotion.ts     # prefers-reduced-motion
    useScrollProgress.ts    # Scroll percentage
    useMousePosition.ts     # Mouse tracking for hover effects
  lib/
    fonts.ts                # next/font/google config
public/
  assets/images/            # Images organized by project: syf/, pulse/, resonate/, etc.
  CNAME                     # Custom domain: jaedesigns.ca
```

## Design Tokens (globals.css)

```
--color-bg: #171718          --color-accent: #60a5fa
--color-bg-elevated: #111114 --color-accent-blue: #3b82f6
--color-text-primary: #f4f4f5   --color-accent-dark: #2563eb
--color-text-secondary: #a1a1aa --color-accent-darker: #1d4ed8
--color-text-muted: #71717a
--font-serif / --font-sans   --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)
```

Per-project accent colors via `--cs-primary` on CaseStudyLayout:
- SYF: `#3b82f6` (blue) | Pulse: `#14b8a6` (teal) | Resonate: `#a78bfa` (violet)

## Key Patterns

- **Navigation**: CatNav — radial cat menu with sleeping/awake states, quick nav pills on scroll, Framer Motion AnimatePresence for menu items
- **Page Transitions**: PageTransitionWrapper — AnimatePresence keyed to pathname, 420ms ease-out-expo
- **Scroll Reveals**: `<ScrollReveal>` component — useInView + motion.div, fade-up with configurable direction/delay
- **Parallax**: ParallaxLayer — useScroll + useTransform for multi-speed layers
- **3D Hover**: MagneticCard — useMotionValue + useSpring for rotateX/rotateY on mousemove
- **Counters**: CounterAnimation — useMotionValue + animate() triggered by useInView
- **Accessibility**: SkipLink, ARIA labels, keyboard trap in CatNav, useReducedMotion hook, MotionConfig provider
- **Theming**: Tailwind @theme inline in globals.css, per-project --cs-primary in CaseStudyLayout

## Design Philosophy

This portfolio embodies a refined dark-theme editorial aesthetic — atmospheric, confident, and intentionally crafted. Every design decision should feel purposeful, never generic.

### Aesthetic Direction
- **Tone**: Luxury-editorial meets warm personality. The dark canvas (#171718) creates depth; accent blue (#60a5fa) provides energy. The cat mascot and playful copy add warmth to a refined presentation.
- **Typography**: Instrument Serif for headings delivers editorial gravitas. Manrope for body text provides clean legibility. Never introduce generic system fonts — the typographic pairing IS the personality.
- **Color Discipline**: The palette is intentionally narrow. --color-bg, --color-accent, and the zinc scale do all the work. Per-project accent colors add variety within case studies without breaking cohesion.

### Motion & Interaction Principles
- **Orchestrated reveals over scattered effects**: Page loads use staggered fade-in via ScrollReveal delays. One cohesive entrance is worth more than ten random hover effects.
- **Parallax with restraint**: Multi-layer parallax in heroes at subtle speeds. Never make parallax the focus — it should feel natural.
- **Magnetic interactions signal interactivity**: 3D card tilts (perspective 800px, 3-8deg rotation) communicate "this is clickable." Disable on touch devices and reduced motion.
- **The ease-out-expo curve is canonical**: `[0.16, 1, 0.3, 1]` is the project's signature easing. Use it for all meaningful transitions.

### What to Avoid
- Generic AI aesthetics: no Inter/Roboto, no purple-on-white gradients, no cookie-cutter card layouts
- Gratuitous animation: every animation must earn its presence. If removing it doesn't diminish the experience, remove it.
- Breaking the dark theme: all additions must work on #171718 backgrounds. Test contrast ratios (4.5:1 body, 3:1 large text).

## Guidelines

- Follow the Design Philosophy — visual polish and intentionality are paramount for a UX designer's portfolio
- Use Tailwind utility classes; avoid CSS modules or inline styles unless truly necessary
- Framer Motion for all animations — type easing arrays as `[number, number, number, number]`
- Server Components by default; `"use client"` only where interactivity is needed
- Respect `prefers-reduced-motion` — use the useReducedMotion hook or MotionConfig
- Keep images under `public/assets/images/{project-name}/`
- Static export: no server-side features (no API routes, no middleware, no dynamic routes)
