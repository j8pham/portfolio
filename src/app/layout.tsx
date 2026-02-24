import type { Metadata } from "next";
import { instrumentSerif, manrope, caveat } from "@/lib/fonts";
import { CatNav } from "@/components/layout/CatNav";
import { SkipLink } from "@/components/layout/SkipLink";
import { Footer } from "@/components/layout/Footer";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Jason Pham",
    default: "Jason Pham | Product Designer",
  },
  description:
    "Product Designer crafting intuitive, user-centered experiences",
  icons: {
    icon: "/assets/images/branding/sleepycat-256x256.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} ${caveat.variable}`}
    >
      <body>
        <SkipLink />
        <CatNav />
        <PageTransitionWrapper>
          <main id="main">
            {children}
          </main>
        </PageTransitionWrapper>
        <Footer />
      </body>
    </html>
  );
}
