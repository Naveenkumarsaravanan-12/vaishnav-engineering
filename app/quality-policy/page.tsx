"use client";

import { Award, ShieldCheck, CheckCircle2, FileCheck, Layers, Gauge } from "lucide-react";
import { AnimatedBackground, Reveal, SectionDivider } from "@/components/motion";

export default function QualityPolicyPage() {
  const qualityPillars = [
    {
      title: "Raw Material Traceability",
      description: "Every steel plate, angle, and structural section (IS 2062 E250/E350) carries certified Manufacturer Test Certificates (MTC) with 100% heat number and ladle analysis tracking from mill to completed bridge girder.",
      icon: Layers,
    },
    {
      title: "WPS & PQR Compliance",
      description: "Welding procedures adhere rigorously to AWS D1.5 and IRS B1 codes. Welding operators undergo regular qualification tests evaluated by RDSO and certified ASNT Level III inspectors.",
      icon: ShieldCheck,
    },
    {
      title: "Metrology & Gauge Calibration",
      description: "All in-house measuring instruments, digital verniers, micrometers, coating thickness gauges, and Krautkramer ultrasonic flaw detectors are calibrated annually by NABL-accredited test laboratories.",
      icon: Gauge,
    },
    {
      title: "Full Pre-Assembly Erection",
      description: "Trial assembly of completed bridge spans on our dedicated full-scale trial yard bed guarantees zero-interference fit-up before shot blasting, primer application, and site dispatch.",
      icon: FileCheck,
    },
  ];

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* Header Banner with Bridge Silhouette */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-xs overflow-hidden">
        <AnimatedBackground variant="bridge-silhouette" theme="light" opacity={0.55} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3 shadow-2xs">
                  <Award className="h-4 w-4 text-[#C6A66B]" /> Corporate Quality Statement
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Quality Assurance Policy & Zero-Defect Mandate
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Institutional quality governance guaranteeing full structural integrity, AWS D1.5 welding adherence, and zero-defect railway infrastructure delivery.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <span className="rounded-full bg-[#101820] px-4 py-2 text-xs font-mono font-bold text-[#C6A66B] border border-[#C6A66B]/30 shadow-2xs shrink-0 uppercase tracking-wider">
                ISO 9001:2015 & RDSO B1 Certified
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Core Statement Card */}
        <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white p-8 sm:p-12 shadow-sm space-y-7 transition-all hover:shadow-xl hover:border-[#C6A66B]/50">
          <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.4} />
          
          <div className="relative z-10 space-y-7">
            <div className="absolute -top-8 -left-8 -right-8 h-1.5 bg-gradient-to-r from-[#101820] via-[#C6A66B] to-[#39434D]" />

            <Reveal direction="left" delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 shadow-2xs">
                <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" /> EXECUTIVE QUALITY DECLARATION
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <blockquote className="rounded-2xl border-l-4 border-[#C6A66B] bg-[#F5F3EE] p-6 sm:p-8 text-[#20262D] text-base sm:text-lg font-medium leading-relaxed italic shadow-inner">
                &quot;Vaishnav Engineering is unyieldingly committed to designing, fabricating, and delivering heavy railway steel structures and bridge girders that strictly satisfy Indian Railways RDSO B&S specifications, ISO 9001:2015 Quality Management System standards, and individual contract requirements. We achieve zero-defect production through rigorous raw material heat traceability, calibrated metrology, 100% weld non-destructive testing, and continuous process audit.&quot;
              </blockquote>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <div className="flex flex-wrap items-center justify-between pt-5 border-t border-[#39434D]/15 text-xs font-mono text-[#89939D] gap-2">
                <span>APPROVED BY: <strong className="text-[#20262D]">MANAGING DIRECTOR & CHIEF QUALITY ENGINEER</strong></span>
                <span className="text-[#C6A66B] font-bold uppercase tracking-wider">RE-CERTIFIED 2026</span>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionDivider label="FOUR QUALITY PILLARS OF EXCELLENCE" />

        {/* 4 Pillars Grid with Steel Lines */}
        <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white/60 p-6 sm:p-8 shadow-sm">
          <AnimatedBackground variant="steel-lines" theme="light" opacity={0.4} />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={idx} direction="up" delay={idx * 0.08}>
                  <div className="rounded-3xl border border-[#39434D]/20 bg-white p-8 shadow-sm hover:border-[#C6A66B] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full">
                    <div>
                      <div className="h-14 w-14 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#C6A66B] mb-6 shadow-2xs group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-[#20262D] mb-3 group-hover:text-[#C6A66B] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#5C6670] leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
