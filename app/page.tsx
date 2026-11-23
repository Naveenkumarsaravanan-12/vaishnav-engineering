"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  ArrowRight,
  Zap,
  Building,
  Download,
  FileText,
  Compass,
  ChevronRight,
  Gauge,
  Factory,
  Wrench,
  Sparkles,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ROBVideoScrollSection from "@/components/sections/ROBVideoScrollSection";
import { PROJECTS_DATA, RDSO_APPROVAL_INFO } from "@/data/portalData";
import { AnimatedBackground, Reveal, SectionDivider } from "@/components/motion";

export default function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const coreVerticals = [
    {
      title: "Railway Bridge Fabrication",
      badge: "RDSO Approved Part-A",
      desc: "Composite plate girders, open-web through trusses, and bowstring arches fabricated strictly per IRS B1-2001 standards.",
      stats: "5,500 MT / Year Capacity",
      icon: Compass,
      link: "/services"
    },
    {
      title: "Structural Steel Engineering",
      badge: "ISO 9001:2015",
      desc: "Heavy industrial columns, roof trusses, crane gantries, and power plant framing with robotic submerged arc welding.",
      stats: "50-Tonne EOT Lifting",
      icon: Building,
      link: "/services"
    },
    {
      title: "Industrial Gates & Dampers",
      badge: "Power & Process Ready",
      desc: "Custom engineered heavy slide gates, guillotine dampers, and louver systems ensuring 99.9% fluid sealing reliability.",
      stats: "200+ Operational Units",
      icon: Gauge,
      link: "/services"
    },
    {
      title: "Precision CNC Metrology",
      badge: "NABL Verified",
      desc: "CNC multi-torch oxy-fuel profiling up to 100mm, automated plate drilling, and 500-tonne hydraulic beam straightening.",
      stats: "±0.01mm Precision Tolerance",
      icon: Wrench,
      link: "/services"
    }
  ];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadModalOpen(false);
    }, 2000);
  };

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen selection:bg-[#C6A66B] selection:text-[#101820] font-body">
      {/* ---------------- 1. RDSO RAILWAY BRIDGE HERO (CINEMATIC 3D EXPLODED SCROLLER) ---------------- */}
      <HeroSection />

      {/* ---------------- 2. RDSO 72M BOWSTRING GIRDER ROB ERECTION (SCROLL-CONTROLLED MP4 VIDEO) ---------------- */}
      <ROBVideoScrollSection />

      {/* SECTION DIVIDER */}
      <SectionDivider number="VERTICA" label="Heavy Industrial Competencies" />

      {/* ---------------- 3. CORE MANUFACTURING VERTICALS (DARK SECTION - MIDNIGHT NAVY & CHARCOAL) ---------------- */}
      <section className="relative py-20 md:py-28 px-6 sm:px-12 md:px-20 border-t border-[#39434D] bg-[#101820] text-[#F8F7F2] overflow-hidden">
        {/* Animated Steel Lines Background */}
        <AnimatedBackground variant="steel-lines" theme="dark" opacity={0.55} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal direction="left">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#202A33] px-3.5 py-1 text-xs font-mono font-bold text-[#C6A66B] border border-[#39434D] mb-3">
                  <Factory className="h-3.5 w-3.5 text-[#C6A66B]" /> CORE COMPETENCIES & CAPABILITIES
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F8F7F2]">
                  Heavy Industrial Business Verticals
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C6A66B] hover:text-[#D8B97E] transition-colors group"
              >
                Explore Full Engineering Capabilities <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreVerticals.map((vert, idx) => {
              const Icon = vert.icon;
              return (
                <Reveal key={idx} direction="scale" delay={idx * 0.09}>
                  <div className="rounded-2xl border border-[#39434D] bg-[#202A33] p-7 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 rounded-xl bg-[#101820] border border-[#39434D] flex items-center justify-center text-[#C6A66B] shadow-xs group-hover:bg-[#C6A66B] group-hover:text-[#101820] transition-colors duration-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-[#C6A66B] bg-[#101820] px-2.5 py-0.5 rounded-full border border-[#C6A66B]/30">
                          {vert.badge}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-[#F8F7F2] mb-2 leading-snug group-hover:text-[#C6A66B] transition-colors">
                        {vert.title}
                      </h3>
                      <p className="text-xs text-[#89939D] leading-relaxed mb-6 font-normal">
                        {vert.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#39434D]/60">
                      <span className="text-xs font-mono font-bold text-[#C6A66B] block mb-2">
                        {vert.stats}
                      </span>
                      <Link
                        href={vert.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F8F7F2] group-hover:text-[#C6A66B] transition-colors"
                      >
                        View Specifications <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider number="PROJECTS" label="Landmark Railway Infrastructure" />

      {/* ---------------- 4. FEATURED RAILWAY INFRASTRUCTURE INSTALLATIONS (LIGHT SECTION - SOFT STEEL GREY) ---------------- */}
      <section className="relative py-20 md:py-28 px-6 sm:px-12 md:px-20 border-t border-[#39434D]/20 bg-[#E5E8EB] text-[#20262D] overflow-hidden">
        {/* Animated Floating Shapes Background */}
        <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.6} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal direction="left">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3">
                  <Sparkles className="h-3.5 w-3.5 text-[#C6A66B]" /> RECENTLY EXECUTED RAILWAY WORKS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Flagship Railway Projects
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#20262D] hover:text-[#C6A66B] transition-colors group"
              >
                View 5-Year Execution Log & Works in Hand <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROJECTS_DATA.map((project, idx) => (
              <Reveal key={project.id} direction="scale" delay={idx * 0.1}>
                <div className="rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 flex flex-col group h-full">
                  <div className="relative h-60 w-full bg-[#101820] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 left-3 bg-[#101820]/90 text-[#C6A66B] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md backdrop-blur-xs border border-[#C6A66B]/30 shadow-xs">
                      {project.tonnage}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#202A33] text-[#F8F7F2] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-[#39434D] shadow-xs">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#C6A66B] uppercase block mb-1">
                        {project.client} • {project.year}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-[#20262D] mb-2 leading-snug group-hover:text-[#C6A66B] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#5C6670] leading-relaxed mb-4 font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#39434D]/15 flex items-center justify-between text-xs font-mono text-[#89939D]">
                      <span>SPAN: {project.spanDetails}</span>
                      <Link
                        href="/projects"
                        className="text-[#20262D] hover:text-[#C6A66B] font-bold flex items-center gap-1 transition-colors"
                      >
                        Details <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider number="QUALITY" label="Regulatory Compliance & Audits" />

      {/* ---------------- 5. RDSO INSPECTION READY FABRICATION (LIGHT SECTION - WARM IVORY) ---------------- */}
      <section className="relative py-20 md:py-28 px-6 sm:px-12 md:px-20 border-t border-[#39434D]/20 bg-[#F5F3EE] text-[#20262D] overflow-hidden">
        {/* Animated Blueprint Grid Background */}
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.6} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <Reveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#20262D] leading-tight mb-4">
                RDSO Inspection-Ready Fabrication
              </h2>
              <p className="text-[#5C6670] text-sm sm:text-base leading-relaxed font-normal">
                Certified for Indian Railways infrastructure. Complete traceability from steel mill test certificates to final trial erection.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Reveal direction="scale" delay={0.08}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-8 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 h-full">
                <div className="h-12 w-12 rounded-xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#C6A66B] mb-6 shadow-xs">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#20262D] mb-2">RDSO Vendor Approval</h3>
                <p className="text-xs font-mono text-[#C6A66B] font-bold mb-4">Reg ID: {RDSO_APPROVAL_INFO.registrationId}</p>
                <p className="text-sm text-[#5C6670] leading-relaxed mb-6 font-normal">
                  Registered under Indian Railways Research Designs and Standards Organisation for fabrication of Open Web and Bowstring Steel Girders.
                </p>
                <div className="text-xs font-mono text-[#89939D] pt-4 border-t border-[#39434D]/15">
                  IRS B1-2001 & BS-110 Compliant
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal direction="scale" delay={0.16}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-8 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 h-full">
                <div className="h-12 w-12 rounded-xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#C6A66B] mb-6 shadow-xs">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#20262D] mb-2">ISO 9001:2015 QMS</h3>
                <p className="text-xs font-mono text-[#C6A66B] font-bold mb-4">Cert: QA-ISO-9001-VE</p>
                <p className="text-sm text-[#5C6670] leading-relaxed mb-6 font-normal">
                  End-to-end quality management protocol covering raw material validation, robotic welding surveillance, and corrosion thermal spray.
                </p>
                <div className="text-xs font-mono text-[#89939D] pt-4 border-t border-[#39434D]/15">
                  Audited & Re-certified Annually
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal direction="scale" delay={0.24}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-8 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 h-full">
                <div className="h-12 w-12 rounded-xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#202A33] mb-6 shadow-xs">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#20262D] mb-2">Vellore Fabrication Yard</h3>
                <p className="text-xs font-mono text-[#20262D] font-bold mb-4">Thiruvalam Plant</p>
                <p className="text-sm text-[#5C6670] leading-relaxed mb-6 font-normal">
                  Heavy lifting overhead gantry cranes (25T), automatic CNC plasma cutters, and dedicated trial assembly beds for spans up to 120 meters.
                </p>
                <div className="text-xs font-mono text-[#89939D] pt-4 border-t border-[#39434D]/15">
                  Rail & Highway Linked Yard
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- 6. FINAL CALL TO ACTION (DEEP MIDNIGHT NAVY & CHAMPAGNE GOLD) ---------------- */}
      <section className="relative py-20 md:py-28 px-6 sm:px-12 md:px-20 bg-[#F5F3EE] overflow-hidden">
        <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.5} />

        <div className="relative z-10 max-w-5xl mx-auto rounded-3xl bg-[#101820] text-[#F8F7F2] p-10 sm:p-16 border border-[#39434D] text-center shadow-2xl overflow-hidden">
          {/* Animated Background inside CTA */}
          <AnimatedBackground variant="gradient-flow" theme="dark" opacity={0.8} />

          <div className="relative z-10">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#101820] px-4 py-1.5 text-xs font-mono text-[#C6A66B] border border-[#C6A66B]/40 mb-6 font-bold shadow-xs">
                <Zap className="h-3.5 w-3.5 text-[#C6A66B]" /> TENDER & ENGINEERING CONSULTATION
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F7F2] mb-6 leading-tight">
                Ready to Integrate Vaishnav Bowstring Girders?
              </h2>
            </Reveal>

            <Reveal direction="left" delay={0.14}>
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#89939D] leading-relaxed mb-10 font-normal">
                Request comprehensive fabrication drawings, structural weight estimations, and RDSO audit evidence dossiers for upcoming railway and highway tenders.
              </p>
            </Reveal>

            <Reveal direction="scale" delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setDownloadModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-7 py-4 text-sm font-bold text-[#101820] shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
                >
                  <Download className="h-4 w-4 text-[#101820]" />
                  <span>Download Technical Dossier (PDF)</span>
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#202A33] hover:bg-[#101820] px-7 py-4 text-sm font-semibold text-[#F8F7F2] border border-[#39434D] transition-transform hover:-translate-y-0.5"
                >
                  <span>Contact Chief Structural Engineer</span>
                  <ArrowRight className="h-4 w-4 text-[#C6A66B]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- 7. DOWNLOAD DOSSIER MODAL ---------------- */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101820]/80 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl border border-[#39434D]/30 bg-white p-8 shadow-2xl text-left text-[#20262D] animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-[#89939D] hover:text-[#20262D] text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#C6A66B]">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#20262D]">Bowstring Girder Dossier</h4>
                <p className="text-xs text-[#89939D] font-mono">VE-BG-TECH-2026.PDF (14.2 MB)</p>
              </div>
            </div>

            {downloadSuccess ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#C6A66B] mx-auto mb-3" />
                <p className="font-heading text-[#20262D] font-bold">Dossier Download Initiated!</p>
                <p className="text-xs text-[#89939D] mt-1">Thank you for your interest in Vaishnav Engineering.</p>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#5C6670] uppercase mb-1 font-bold">
                    Designation / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chief Bridge Engineer, Indian Railways"
                    className="w-full rounded-xl bg-[#F5F3EE] border border-[#39434D]/30 px-4 py-2.5 text-sm text-[#20262D] placeholder-[#89939D] focus:outline-none focus:border-[#C6A66B] focus:ring-1 focus:ring-[#C6A66B] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#5C6670] uppercase mb-1 font-bold">
                    Official Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="engineer@railways.gov.in"
                    className="w-full rounded-xl bg-[#F5F3EE] border border-[#39434D]/30 px-4 py-2.5 text-sm text-[#20262D] placeholder-[#89939D] focus:outline-none focus:border-[#C6A66B] focus:ring-1 focus:ring-[#C6A66B] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] py-3 text-sm font-bold text-[#101820] transition-all shadow-md cursor-pointer"
                >
                  Confirm & Download Technical Dossier
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
