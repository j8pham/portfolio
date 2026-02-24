export interface Project {
  slug: string;
  title: string;
  label: string;
  description: string;
  tags: string[];
  heroImage: string;
  heroAlt: string;
  accentColor: string;
  accentColorSoft: string;
  href: string;
  gridClass: "featured-large" | "project-tall" | "project-wide" | "project-medium";
}

export interface ComingSoonProject {
  slug: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
}

export const projects: Project[] = [
  {
    slug: "syf",
    title: "Secure Your Future",
    label: "Featured Project",
    description:
      "Financial onboarding around life goals instead of product-first forms.",
    tags: ["Product Design", "User Research"],
    heroImage: "/assets/images/syf/syf-hero-mockup.png",
    heroAlt: "secure your future",
    accentColor: "#3b82f6",
    accentColorSoft: "rgba(59, 130, 246, 0.15)",
    href: "/projects/syf",
    gridClass: "featured-large",
  },
  {
    slug: "resonate",
    title: "Resonate",
    label: "Case Study",
    description:
      "Singing practice app that builds confidence through guided sessions and visible progress.",
    tags: ["Product Thinking", "Gamification"],
    heroImage: "/assets/images/resonate/Resonate%20Mockup.png",
    heroAlt: "resonate",
    accentColor: "#a78bfa",
    accentColorSoft: "rgba(167, 139, 250, 0.15)",
    href: "/projects/resonate",
    gridClass: "project-tall",
  },
  {
    slug: "relocate",
    title: "Relocate",
    label: "Case Study",
    description:
      "Municipal recreation discovery so residents can find and book activities without outdated portals.",
    tags: ["User Research", "Product Design"],
    heroImage: "/assets/images/relocate/relocate-hero.png",
    heroAlt: "relocate",
    accentColor: "#60a5fa",
    accentColorSoft: "rgba(96, 165, 250, 0.15)",
    href: "/projects/relocate",
    gridClass: "project-wide",
  },
  {
    slug: "pulse",
    title: "Pulse",
    label: "Case Study",
    description:
      "A self-triage kiosk that cuts ER intake time by 25% and keeps patients informed while they wait.",
    tags: ["Service Design", "Prototyping"],
    heroImage: "/assets/images/pulse/pulse-hero-mockup.png",
    heroAlt: "pulse",
    accentColor: "#14b8a6",
    accentColorSoft: "rgba(20, 184, 166, 0.15)",
    href: "/projects/pulse",
    gridClass: "project-medium",
  },
];

export const comingSoonProjects: ComingSoonProject[] = [
  {
    slug: "mto",
    title: "MTO",
    thumbnail: "/assets/images/mto/MTO%20Mockup.png",
    thumbnailAlt: "mto",
  },
  {
    slug: "azul",
    title: "Azul",
    thumbnail: "/assets/images/azul/iphone-multiple-screens-mockup.png",
    thumbnailAlt: "azul",
  },
];
