export interface NavItem {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  {
    href: "/",
    icon: "/assets/images/branding/material-symbols--home-rounded.svg",
    label: "home",
  },
  {
    href: "/about",
    icon: "/assets/images/branding/tdesign--user-filled.svg",
    label: "about",
  },
  {
    href: "https://drive.google.com/file/d/1RXjXUH__8_vRfP1VKTAQRSbV79DXHlTY/view?usp=sharing",
    icon: "/assets/images/branding/mingcute--paper-fill.svg",
    label: "resume",
    external: true,
  },
  {
    href: "mailto:pham.jason@outlook.com",
    icon: "/assets/images/branding/iconoir--send-mail-solid(1).svg",
    label: "contact",
  },
];
