"use client";

import Container from "@/components/layout/container";
import { Award, ShieldCheck, Factory, CheckCircle2 } from "lucide-react";
import { AnimatedBackground, Reveal } from "@/components/motion";

const items = [
  {
    title: "Decades of Industrial Growth",
    text: "Vaishnav Engineering is an established manufacturing organization on Jan 2009 at Katpadi Taluk, Vellore dist., Tamilnadu, India. We focus on Composite Girder Fabrication, Manufacturing of Railway Infrastructure Equipment.",
    icon: Factory,
  },
  {
    title: "Core Competencies",
    text: "With over a decade of continuous performance, we have successfully completed numerous landmark projects for Indian Railways, showcasing unmatched expertise in delivering high-strength steel structures meeting IRS B1-2001 and AWS D1.5 codes.",
    icon: ShieldCheck,
  },
  {
    title: "Commitment to Quality",
    text: "We are committed to maintaining the highest standards of quality through ISO 9001:2015 processes, 100% weld non-destructive testing, and accredited third-party NABL laboratory surveillance.",
    icon: Award,
  },
];

export default function AboutHighlights() {
  return (
    <section className="relative bg-[#E5E8EB] py-20 md:py-28 border-b border-[#39434D]/20 overflow-hidden">
      <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.45} />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} direction="up" delay={index * 0.1}>
                <div className="relative bg-white p-8 md:p-10 border border-[#39434D]/20 shadow-sm rounded-3xl group hover:shadow-xl hover:border-[#C6A66B]/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#101820] to-[#C6A66B]" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#C6A66B] shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[#C6A66B] font-bold text-xs font-mono tracking-wider uppercase">
                        {`0${index + 1} // PRECISION`}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl font-extrabold text-[#20262D] mb-3 tracking-tight group-hover:text-[#C6A66B] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-[#5C6670] leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#39434D]/15 flex items-center gap-1.5 text-xs font-mono text-[#20262D] font-bold">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> RDSO Audited Benchmark
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
