"use client";

import { Users } from "lucide-react";
import OrgChart from "@/components/sections/OrgChart";
import { WORKFORCE_STATS } from "@/data/portalData";
import { AnimatedBackground, Reveal, Counter, SectionDivider } from "@/components/motion";

export default function WorkforcePage() {
  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* Header Banner with Floating Shapes Background */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-xs overflow-hidden">
        <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.55} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3 shadow-2xs">
                  <Users className="h-4 w-4 text-[#C6A66B]" /> TAB 5 & 6: Workforce & Organisation
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Technical Organisation & Qualified Workforce
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Certified structural fabrication workforce meeting strict RDSO Part-A guidelines, IS 7318 welder performance standards, and ASNT NDT inspector accreditations.
                </p>
              </div>
            </Reveal>


          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Quick Stat Counter Cards with Blueprint Grid */}
        <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white/70 p-6 sm:p-8 shadow-sm">
          <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.4} />
          
          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Reveal direction="up" delay={0.05}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-8 text-center shadow-sm hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#101820]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#89939D] font-mono">Skilled Production Staff</span>
                <p className="font-heading mt-3 text-4xl sm:text-5xl font-extrabold text-[#101820] group-hover:text-[#C6A66B] transition-colors">
                  <Counter to={WORKFORCE_STATS.artisans} />
                </p>
                <p className="mt-2 text-xs sm:text-sm text-[#5C6670] font-semibold">Skilled Artisans & Fabricators</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.12}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-8 text-center shadow-sm hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C6A66B]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#89939D] font-mono">RDSO Qualified Welders</span>
                <p className="font-heading mt-3 text-4xl sm:text-5xl font-extrabold text-[#C6A66B]">
                  <Counter to={WORKFORCE_STATS.welders} />
                </p>
                <p className="mt-2 text-xs sm:text-sm text-[#5C6670] font-semibold">Certified Welders (IS 7318 / AWS D1.5)</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.18}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-8 text-center shadow-sm hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#202A33]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#89939D] font-mono">NDT Inspector Strength</span>
                <p className="font-heading mt-3 text-4xl sm:text-5xl font-extrabold text-[#202A33] group-hover:text-[#C6A66B] transition-colors">
                  <Counter to={WORKFORCE_STATS.asntInspectors} />
                </p>
                <p className="mt-2 text-xs sm:text-sm text-[#5C6670] font-semibold">ASNT Level II / III Personnel</p>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionDivider label="ORGANISATIONAL HIERARCHY & PERSONNEL ROSTER" />

        {/* Interactive Organisation Chart & Roster */}
        <section>
          <OrgChart />
        </section>
      </div>
    </div>
  );
}
