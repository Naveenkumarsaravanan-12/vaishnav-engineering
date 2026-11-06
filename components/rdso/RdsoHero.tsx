"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Calendar, Award, FileText, ArrowDown, Download, CheckCircle2, Factory } from "lucide-react";
import { Reveal, AnimatedBackground, Counter } from "@/components/motion";
import { RDSO_APPROVAL_INFO } from "@/data/portalData";

interface RdsoHeroProps {
  onOpenPdfModal: (docId: string) => void;
  onScrollToSection: (id: string) => void;
}

export default function RdsoHero({ onOpenPdfModal, onScrollToSection }: RdsoHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1118] via-[#101820] to-[#141E28] text-white pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#39434D]/80">
      {/* Precision Blueprint Grid and Metallic Background Effect */}
      <AnimatedBackground variant="blueprint-grid" theme="dark" opacity={0.25} />

      {/* Decorative Gold Radial Glow in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D6B36A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Badge */}
        <Reveal direction="down" delay={0.05}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#202A33] px-4 py-1.5 text-xs sm:text-[13px] font-mono font-bold text-[#D6B36A] border border-[#D6B36A]/30 shadow-md">
              <span className="h-2 w-2 rounded-full bg-[#D6B36A] animate-pulse" />
              RDSO TECHNICAL INFORMATION & COMPLIANCE
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101820]/90 px-3 py-1 text-xs font-mono text-[#E5E7EB] border border-[#39434D]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#D6B36A]" /> Verified Official Audit Repository
            </span>
          </div>
        </Reveal>

        {/* Hero Title and Subheadings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <Reveal direction="left" delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                RDSO INFORMATION
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#D6B36A] tracking-tight">
                Engineering Capabilities. Verified Documentation.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <p className="text-base sm:text-lg text-[#E5E7EB] max-w-3xl font-normal leading-relaxed text-balance">
                Explore our fabrication infrastructure, technical capabilities, quality systems, approvals and project experience.
              </p>
            </Reveal>

            {/* Quick Action Buttons */}
            <Reveal direction="up" delay={0.25}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onScrollToSection("sec-01")}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D6B36A] to-[#C6A66B] hover:from-[#E2C785] hover:to-[#D6B36A] text-[#101820] px-5 py-3 text-xs sm:text-sm font-extrabold shadow-lg shadow-[#D6B36A]/20 transition-all cursor-pointer active:scale-95"
                >
                  <ArrowDown className="h-4 w-4" />
                  <span>Explore 13 Compliance Sections</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenPdfModal("doc-1")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#202A33] hover:bg-[#2B3844] text-[#F5F1E8] hover:text-white px-5 py-3 text-xs sm:text-sm font-bold border border-[#D6B36A]/40 transition-all cursor-pointer"
                >
                  <Download className="h-4 w-4 text-[#D6B36A]" />
                  <span>Download RDSO Certificate (PDF)</span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Hero High-Impact Credentials Card */}
          <div className="lg:col-span-4">
            <Reveal direction="right" delay={0.2}>
              <div className="rounded-3xl border border-[#39434D] bg-[#202A33]/90 backdrop-blur-md p-6 sm:p-7 shadow-2xl relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6B36A]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-[#39434D] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-xl bg-white p-1 border border-white/20 shadow-xs flex items-center justify-center shrink-0">
                      <Image
                        src="/logo/rdso-logo.webp"
                        alt="RDSO Official Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D6B36A]">Government Accredited</span>
                      <p className="font-heading text-sm font-bold text-white">RDSO Part-A Approved</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-500/40 px-2.5 py-0.5 text-xs font-mono font-bold">
                    Active
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-[#39434D]/50">
                    <span className="text-[#89939D]">Registration ID:</span>
                    <span className="font-mono font-bold text-white">{RDSO_APPROVAL_INFO.registrationId}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-[#39434D]/50">
                    <span className="text-[#89939D]">Annual Production:</span>
                    <span className="font-mono font-bold text-[#D6B36A]">{RDSO_APPROVAL_INFO.annualCapacity}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-[#39434D]/50">
                    <span className="text-[#89939D]">Validity Horizon:</span>
                    <span className="font-mono font-bold text-white flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-[#D6B36A]" /> 30-Nov-2028
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#89939D]">Certifying Body:</span>
                    <span className="font-medium text-white truncate max-w-[190px]">RDSO B&S Wing, Lucknow</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#39434D]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#D6B36A]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Ministry of Railways
                    </span>
                    <span>100% Audit Verified</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 4 Bottom Quick Credential Highlights */}
        <Reveal direction="up" delay={0.3}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-[#39434D]/60">
            <div className="rounded-2xl border border-[#39434D]/60 bg-[#101820]/80 p-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">Statutory Status</span>
              <p className="font-heading font-extrabold text-white text-sm sm:text-base mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#D6B36A]" /> Approved Part-A
              </p>
              <span className="text-[11px] text-[#89939D] mt-0.5 block">Open Web & Composite</span>
            </div>

            <div className="rounded-2xl border border-[#39434D]/60 bg-[#101820]/80 p-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">Annual Capacity</span>
              <p className="font-heading font-extrabold text-[#D6B36A] text-sm sm:text-base mt-1 font-mono">
                5,500 MT / Annum
              </p>
              <span className="text-[11px] text-[#89939D] mt-0.5 block">Heavy Railway Girders</span>
            </div>

            <div className="rounded-2xl border border-[#39434D]/60 bg-[#101820]/80 p-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">Quality System</span>
              <p className="font-heading font-extrabold text-white text-sm sm:text-base mt-1 flex items-center gap-1.5">
                <Award className="h-4 w-4 text-[#D6B36A]" /> ISO 9001:2015
              </p>
              <span className="text-[11px] text-[#89939D] mt-0.5 block">DBS Certified (To Sep 2026)</span>
            </div>

            <div className="rounded-2xl border border-[#39434D]/60 bg-[#101820]/80 p-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">Fabrication Units</span>
              <p className="font-heading font-extrabold text-white text-sm sm:text-base mt-1 flex items-center gap-1.5">
                <Factory className="h-4 w-4 text-[#D6B36A]" /> 1 Active Plant
              </p>
              <span className="text-[11px] text-[#89939D] mt-0.5 block">Katpadi / Vellore, TN</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

