"use client";

import { HardHat, ShieldCheck, CheckCircle2, AlertTriangle, Wind, Eye } from "lucide-react";
import { AnimatedBackground, Reveal, Counter, SectionDivider } from "@/components/motion";

export default function SafetyPage() {
  const safetyProtocols = [
    {
      icon: HardHat,
      title: "Mandatory Workshop PPE Protocol",
      category: "Personal Safety",
      description: "Strict 100% compliance policy requiring ISI-approved safety helmets, steel-toe heavy safety boots, high-visibility reflective vests, and ear protection across all active workshop bays.",
      standards: "IS 2925 / EN 397 Compliant",
    },
    {
      icon: Wind,
      title: "Automatic Fume Extraction Systems",
      category: "Environmental Health",
      description: "Dedicated overhead high-volume industrial fume extraction hoods and scrubbers installed over all Submerged Arc (SAW) and continuous MIG welding lines to maintain clean ambient air.",
      standards: "CPCB & OSHA Standard Compliant",
    },
    {
      icon: Eye,
      title: "Eye & Face Flash Protection",
      category: "Welder Protection",
      description: "Auto-darkening electronic welding shields (DIN 9-13 shade) and ultraviolet-blocking curtains for all automated plasma cutting and robotic weld cells.",
      standards: "EN 175 / ANSI Z87.1",
    },
    {
      icon: AlertTriangle,
      title: "Heavy Crane Lifting Envelope Protocols",
      category: "Material Handling",
      description: "Certified slingers and visual signalmen supervise all 25 MT EOT crane girder movements. Heavy lifting zones demarcated with audio-visual warning sirens and clearance gates.",
      standards: "Factories Act 1948 Section 29",
    },
  ];

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* Header Banner with Subtle Gradient Flow */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-xs overflow-hidden">
        <AnimatedBackground variant="gradient-flow" theme="light" opacity={0.5} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3 shadow-2xs">
                  <HardHat className="h-4 w-4 text-[#C6A66B]" /> Environment, Health & Safety (EHS)
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Zero-Accident Safety Standards & Workshop Protocols
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Stringent industrial safety culture protecting human capital, certified crane operations, automatic fume abatement, and statutory DISH compliance.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <span className="rounded-full bg-[#101820] px-4 py-2 text-xs font-mono font-bold text-[#C6A66B] border border-[#C6A66B]/30 shadow-2xs shrink-0 uppercase tracking-wider">
                Zero Lost-Time Incidents (100% Audited)
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Key Metrics Bar with Blueprint Grid */}
        <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white/70 p-6 sm:p-8 shadow-sm">
          <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.35} />
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Reveal direction="up" delay={0.05}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-8 shadow-sm text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C6A66B]" />
                <span className="text-xs font-mono text-[#89939D] uppercase tracking-wider block mb-1 font-bold">Safety Record</span>
                <p className="font-heading text-4xl sm:text-5xl font-extrabold text-[#C6A66B]">
                  <Counter to={1250} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm text-[#5C6670] font-semibold mt-2">Consecutive Safe Working Days</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.12}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-8 shadow-sm text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#101820]" />
                <span className="text-xs font-mono text-[#89939D] uppercase tracking-wider block mb-1 font-bold">EHS Training</span>
                <p className="font-heading text-4xl sm:text-5xl font-extrabold text-[#101820]">
                  <Counter to={100} suffix="%" />
                </p>
                <p className="text-xs sm:text-sm text-[#5C6670] font-semibold mt-2">Artisan Induction & Periodic Drills</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.18}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-8 shadow-sm text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#202A33]" />
                <span className="text-xs font-mono text-[#89939D] uppercase tracking-wider block mb-1 font-bold">Audit Status</span>
                <p className="font-heading text-4xl sm:text-5xl font-extrabold text-[#202A33]">Certified</p>
                <p className="text-xs sm:text-sm text-[#5C6670] font-semibold mt-2">Directorate of Industrial Safety (DISH)</p>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionDivider label="STANDARDS & WORKSHOP PROTOCOLS" />

        {/* Safety Cards Grid */}
        <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white/60 p-6 sm:p-8 shadow-sm">
          <AnimatedBackground variant="steel-lines" theme="light" opacity={0.35} />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyProtocols.map((protocol, idx) => {
              const Icon = protocol.icon;
              return (
                <Reveal key={idx} direction="up" delay={idx * 0.08}>
                  <div
                    className="rounded-3xl border border-[#39434D]/20 bg-white p-8 sm:p-9 shadow-sm hover:border-[#C6A66B] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-14 w-14 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#C6A66B] shadow-2xs group-hover:scale-105 transition-transform">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20">
                          {protocol.category}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-bold text-[#20262D] mb-3 group-hover:text-[#C6A66B] transition-colors">
                        {protocol.title}
                      </h3>
                      <p className="text-sm text-[#5C6670] leading-relaxed mb-6 font-normal">
                        {protocol.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#39434D]/15 flex items-center justify-between text-xs font-mono text-[#20262D]">
                      <span className="font-bold text-[#89939D]">STANDARD:</span>
                      <span className="font-bold text-[#C6A66B]">{protocol.standards}</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Compliance Assurance Box */}
        <Reveal direction="up" delay={0.1}>
          <section className="relative overflow-hidden rounded-3xl border border-[#39434D] bg-[#101820] text-[#F8F7F2] p-8 sm:p-12 shadow-xl hover:border-[#C6A66B]/60 transition-colors">
            <AnimatedBackground variant="gradient-flow" theme="dark" opacity={0.65} />
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C6A66B] font-bold uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4 text-[#C6A66B]" /> STATUTORY HEALTH & SAFETY ACCREDITATION
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F8F7F2] tracking-tight">
                  Audited Under Directorate of Industrial Safety & Health
                </h3>
                <p className="text-sm text-[#89939D] leading-relaxed font-normal">
                  Our Katpadi manufacturing works operates under full statutory licensing (TN/FL/CHE/2026/8841) with on-site first aid facilities, certified medical officer surveillance, and comprehensive emergency fire safety systems.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2.5 rounded-2xl bg-[#202A33] px-6 py-4 border border-[#C6A66B]/40 text-xs font-mono text-[#C6A66B] shadow-md backdrop-blur-md">
                <CheckCircle2 className="h-5 w-5 text-[#C6A66B] shrink-0" />
                <span className="font-bold uppercase tracking-wider">DISH Inspection Cleared</span>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
