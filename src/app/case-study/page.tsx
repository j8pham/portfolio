import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Study Template",
  description: "Case study template page.",
};

export default function CaseStudyTemplate() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-[1600px] mx-auto bg-bg rounded-[32px] relative overflow-hidden" style={{ padding: "3rem", boxShadow: "0 20px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)" }}>
        <ScrollReveal>
          <div className="pt-24 pb-8">
            <Link href="/" className="text-text-secondary text-sm hover:text-text-primary transition-colors mb-8 inline-block">← back to home</Link>
            <h1 className="font-serif text-[clamp(3rem,7vw,5rem)] font-normal leading-[1.1] tracking-tight mb-4">Case Study</h1>
            <p className="text-text-secondary text-xl max-w-2xl">This is the case study template page.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
