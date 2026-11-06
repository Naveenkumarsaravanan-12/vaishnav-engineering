"use client";

import { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Calendar, 
  Download, 
  CheckCircle2, 
  History, 
  Award, 
  FileCheck, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import PdfViewerModal from "@/components/audit/PdfViewerModal";
import { 
  Reveal, 
  Counter, 
  SectionDivider, 
  AnimatedBackground 
} from "@/components/motion";
import { 
  RDSO_APPROVAL_INFO, 
  ISO_INFO, 
  THIRD_PARTY_APPROVALS, 
  PORTAL_DOCUMENTS, 
  AuditDoc 
} from "@/data/portalData";

export default function RdsoApprovalPage() {
  const [selectedDoc, setSelectedDoc] = useState<AuditDoc | null>(null);
  const [activeSection, setActiveSection] = useState<string>("rdso");

  const rdsoDoc = PORTAL_DOCUMENTS.find((d) => d.id === "doc-1") || PORTAL_DOCUMENTS[0];
  const isoDoc = PORTAL_DOCUMENTS.find((d) => d.id === "doc-2") || PORTAL_DOCUMENTS[1];
  const nablDoc = PORTAL_DOCUMENTS.find((d) => d.id === "doc-6") || PORTAL_DOCUMENTS[5];

  // Thin Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll Spy using IntersectionObserver
  useEffect(() => {
    const sectionIds = ["rdso", "iso", "third-party"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0, 0.25],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const navSections = [
    { id: "rdso", label: "1. RDSO Approval", shortLabel: "1. RDSO" },
    { id: "iso", label: "2. ISO 9001:2015", shortLabel: "2. ISO 9001" },
    { id: "third-party", label: "3. Third-Party Approvals (NABL/AERB/ASNT)", shortLabel: "3. Third-Party" },
  ];

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-32 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* TOP HERO BANNER */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-xs overflow-hidden">
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.5} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3 shadow-2xs">
                  <ShieldCheck className="h-4 w-4 text-[#C6A66B]" /> TAB 2: Approvals & Certifications
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  RDSO Official Vendor Approval Status
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Category-A Approved Bridge Fabrication Vendor accredited by Research Designs & Standards Organisation, Ministry of Railways, Government of India.
                </p>
              </div>
            </Reveal>

            {/* Quick Hero Badges */}
            <Reveal direction="right" delay={0.15}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-[#101820] p-3 sm:p-4 rounded-2xl border border-[#39434D]/60 shadow-md">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#202A33] border border-[#C6A66B]/30 text-xs font-mono font-bold text-[#F8F7F2]">
                  <span className="h-2 w-2 rounded-full bg-[#C6A66B] animate-pulse" />
                  RDSO Part-A Approved
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#202A33] border border-[#39434D] text-xs font-mono text-[#89939D]">
                  <Calendar className="h-3.5 w-3.5 text-[#C6A66B]" /> Valid to Nov 2028
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#202A33] border border-[#39434D] text-xs font-mono text-[#89939D]">
                  <Award className="h-3.5 w-3.5 text-[#C6A66B]" /> ISO 9001:2015
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STICKY SECTION NAVIGATOR (PILL STYLE - DOCKS BELOW NAVBAR) */}
      <nav 
        aria-label="Section directory"
        className="sticky top-18 sm:top-[72px] z-30 bg-[#101820]/95 backdrop-blur-md border-b border-[#39434D]/70 py-2.5 sm:py-3 shadow-md transition-all"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#89939D] uppercase tracking-wider shrink-0">
              <span className="h-2 w-2 rounded-full bg-[#C6A66B]" />
              Directory Jump:
            </span>

            {/* Scrollable pill row on mobile */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 w-full md:w-auto">
              {navSections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`shrink-0 rounded-xl px-3.5 sm:px-4 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap active:scale-95 ${
                      isActive
                        ? "bg-[#C6A66B] text-[#101820] font-bold shadow-sm shadow-[#C6A66B]/30 ring-1 ring-[#C6A66B]"
                        : "bg-[#202A33]/80 text-[#89939D] hover:text-[#F8F7F2] hover:bg-[#202A33] border border-[#39434D]/40"
                    }`}
                  >
                    <span>{sec.label}</span>
                    {isActive && <ChevronRight className="h-3.5 w-3.5 text-[#101820]" />}
                  </button>
                );
              })}
            </div>

            {/* Indicator */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#C6A66B] shrink-0 font-bold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>RDSO / ISO / NABL Audit Registry</span>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTINUOUS CONTENT FLOW */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-14 space-y-16 md:space-y-24">

        {/* ========================================================
            SECTION 1: RDSO APPROVAL
           ======================================================== */}
        <section id="rdso" className="relative overflow-hidden rounded-3xl border border-[#39434D]/15 bg-white/40 p-6 sm:p-10 scroll-mt-36 sm:scroll-mt-40 space-y-8">
          <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.65} />
          <div className="relative z-10 space-y-8">
          {/* Section Header with Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#39434D]/15">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#101820] px-3.5 py-1 text-xs font-mono font-bold text-[#C6A66B] border border-[#C6A66B]/30 mb-2 shadow-xs">
                  <ShieldCheck className="h-4 w-4 text-[#C6A66B]" /> SECTION 01: RDSO APPROVAL
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#20262D] tracking-tight">
                  Research Designs & Standards Organisation
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6670] mt-1 font-normal">
                  Ministry of Railways, Government of India • Category-A Approved Steel Bridge Fabrication Vendor
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C6A66B]/15 px-4 py-1.5 text-xs font-mono font-bold text-[#20262D] border border-[#C6A66B]/40 shadow-2xs shrink-0">
                <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" /> Part-A Approved Vendor
              </span>
            </Reveal>
          </div>

          {/* Main Status Card */}
          <Reveal direction="scale" delay={0.15}>
            <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-10 shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B]/80 hover:ring-1 hover:ring-[#C6A66B]/30 group">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#101820] via-[#C6A66B] to-[#39434D]" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F3EE] text-[#C6A66B] border border-[#39434D]/20 shadow-xs group-hover:scale-105 transition-transform">
                    <ShieldCheck className="h-8 w-8 text-[#C6A66B]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#C6A66B] font-bold uppercase tracking-wider block">
                      Accreditation Body
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#20262D]">
                      Approved Railway Steel Fabricator
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101820] px-4 py-1.5 text-xs font-bold text-[#C6A66B] border border-[#C6A66B]/30 shadow-2xs font-mono uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" /> RDSO Category-A Vendor
                </span>
              </div>

              {/* 4 Technical Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl border border-[#39434D]/15 bg-[#F5F3EE] p-6 font-mono text-xs">
                <div>
                  <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Registration ID</span>
                  <span className="text-base font-extrabold text-[#20262D] mt-1 block">{RDSO_APPROVAL_INFO.registrationId}</span>
                </div>
                <div>
                  <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">RDSO Item No</span>
                  <span className="text-base font-extrabold text-[#C6A66B] mt-1 block">{RDSO_APPROVAL_INFO.itemNo}</span>
                </div>
                <div>
                  <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Approved Product</span>
                  <span className="text-[#20262D] font-bold mt-1 block">{RDSO_APPROVAL_INFO.approvedProduct}</span>
                </div>
                <div>
                  <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Annual Capacity</span>
                  <span className="text-base font-extrabold text-[#C6A66B] mt-1 block">
                    <Counter to={5500} suffix=" MT / Annum" />
                  </span>
                </div>
              </div>

              {/* Audit Dates Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 flex items-center justify-between shadow-2xs">
                  <div>
                    <span className="text-xs text-[#5C6670] font-medium">Last RDSO Surveillance Audit:</span>
                    <p className="text-base font-bold text-[#20262D] flex items-center gap-2 mt-1 font-mono">
                      <Calendar className="h-4 w-4 text-[#C6A66B]" /> {RDSO_APPROVAL_INFO.lastAuditDate}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20 font-mono">
                    PASSED
                  </span>
                </div>

                <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 flex items-center justify-between shadow-2xs">
                  <div>
                    <span className="text-xs text-[#5C6670] font-medium">Next Scheduled Audit:</span>
                    <p className="text-base font-bold text-[#20262D] flex items-center gap-2 mt-1 font-mono">
                      <Calendar className="h-4 w-4 text-[#C6A66B]" /> {RDSO_APPROVAL_INFO.nextAuditDate}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#101820] px-3.5 py-1 text-xs font-bold text-[#C6A66B] border border-[#C6A66B]/30 font-mono">
                    VALID
                  </span>
                </div>
              </div>

              {/* Download Official PDF Action */}
              <div className="mt-8 pt-6 border-t border-[#39434D]/15 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#5C6670] font-medium">
                  Certifying Authority: <strong className="text-[#20262D] font-bold">{RDSO_APPROVAL_INFO.certifyingOfficer}</strong>
                </span>
                <button
                  onClick={() => setSelectedDoc(rdsoDoc)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#101820] transition shadow-md cursor-pointer active:scale-95"
                >
                  <Download className="h-4 w-4 text-[#101820]" /> Download Official RDSO Certificate PDF
                </button>
              </div>
            </div>
          </Reveal>

          {/* Audit History Timeline Table */}
          <Reveal direction="up" delay={0.2}>
            <div className="rounded-3xl border border-[#39434D]/20 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="border-b border-[#39434D]/15 bg-[#F5F3EE] px-7 py-5 flex items-center justify-between flex-wrap gap-3">
                <h3 className="font-heading text-lg font-bold text-[#20262D] flex items-center gap-2.5">
                  <History className="h-5 w-5 text-[#C6A66B]" /> RDSO Audit History & Inspection Logs
                </h3>
                <span className="text-xs font-mono text-[#C6A66B] font-bold uppercase tracking-wider bg-[#101820] px-3 py-1 rounded-full border border-[#C6A66B]/30">
                  RDSO Quality Directorate
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-[#20262D]">
                  <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                    <tr>
                      <th className="px-6 py-4">Audit Year</th>
                      <th className="px-6 py-4">Inspection Type</th>
                      <th className="px-6 py-4">Inspecting Agency / Wing</th>
                      <th className="px-6 py-4">Audit Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#39434D]/10 bg-white font-body">
                    {RDSO_APPROVAL_INFO.auditHistory.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#F5F3EE] transition-colors">
                        <td className="px-6 py-4 font-mono font-bold text-[#C6A66B]">
                          <Counter to={parseInt(item.year)} />
                        </td>
                        <td className="px-6 py-4 font-semibold text-[#20262D]">{item.type}</td>
                        <td className="px-6 py-4 text-[#5C6670] font-medium">{item.inspector}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5E8EB] px-3 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> {item.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          </div>
        </section>

        {/* SECTION DIVIDER 1 -> 2 */}
        <SectionDivider number="SECTION 02" label="ISO 9001:2015 Quality Management System" />

        {/* ========================================================
            SECTION 2: ISO 9001:2015
           ======================================================== */}
        <section id="iso" className="relative overflow-hidden rounded-3xl border border-[#39434D]/15 bg-white/40 p-6 sm:p-10 scroll-mt-36 sm:scroll-mt-40 space-y-8">
          <AnimatedBackground variant="steel-lines" theme="light" opacity={0.5} />
          <div className="relative z-10 space-y-8">
          {/* Section Header with Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#39434D]/15">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#101820] px-3.5 py-1 text-xs font-mono font-bold text-[#C6A66B] border border-[#C6A66B]/30 mb-2 shadow-xs">
                  <Award className="h-4 w-4 text-[#C6A66B]" /> SECTION 02: ISO 9001:2015
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#20262D] tracking-tight">
                  ISO Quality Management System
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6670] mt-1 font-normal">
                  Internationally accredited Quality Management System standard ensuring systematic process control, traceability, and continuous quality improvement.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C6A66B]/15 px-4 py-1.5 text-xs font-mono font-bold text-[#20262D] border border-[#C6A66B]/40 shadow-2xs shrink-0">
                <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" /> {ISO_INFO.status}
              </span>
            </Reveal>
          </div>

          {/* ISO Details Card */}
          <Reveal direction="scale" delay={0.15}>
            <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-10 shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B]/80 hover:ring-1 hover:ring-[#C6A66B]/30 space-y-8 group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#101820] via-[#C6A66B] to-[#39434D]" />

              <div className="flex flex-wrap items-center justify-between border-b border-[#39434D]/15 pb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F3EE] text-[#C6A66B] border border-[#39434D]/20 shadow-xs group-hover:scale-105 transition-transform">
                    <Award className="h-8 w-8 text-[#C6A66B]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] font-mono block">
                      Quality System Standard
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#20262D]">{ISO_INFO.standard}</h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101820] px-4 py-1.5 text-xs font-bold text-[#C6A66B] border border-[#C6A66B]/30 shadow-2xs font-mono uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" /> {ISO_INFO.status}
                </span>
              </div>

              {/* 4 Technical Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl border border-[#39434D]/15 bg-[#F5F3EE] p-6 font-mono text-xs">
                <div>
                  <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Certificate No</span>
                  <span className="text-base font-extrabold text-[#20262D] mt-1 block">{ISO_INFO.certificateNo}</span>
                </div>
                <div>
                  <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Certifying Body</span>
                  <span className="text-base font-extrabold text-[#C6A66B] mt-1 block">{ISO_INFO.certifyingBody}</span>
                </div>
                <div>
                  <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Issue Date</span>
                  <span className="text-sm text-[#20262D] font-bold mt-1 block">{ISO_INFO.issueDate}</span>
                </div>
                <div>
                  <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Expiry Date</span>
                  <span className="text-base font-extrabold text-[#C6A66B] mt-1 block">{ISO_INFO.expiryDate}</span>
                </div>
              </div>

              {/* Scope Box */}
              <div className="rounded-2xl border border-[#39434D]/15 bg-[#F5F3EE] p-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#89939D] font-mono flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-[#C6A66B]" /> Certified Audit Scope
                </span>
                <p className="text-sm text-[#5C6670] leading-relaxed font-normal">{ISO_INFO.scope}</p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#39434D]/15 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#5C6670] font-medium">
                  Last Surveillance Audit: <strong className="text-[#20262D] font-bold">{ISO_INFO.lastSurveillanceAudit}</strong>
                </span>
                <button
                  onClick={() => setSelectedDoc(isoDoc)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#101820] transition shadow-md cursor-pointer active:scale-95"
                >
                  <Download className="h-4 w-4 text-[#101820]" /> Download ISO 9001 Certificate PDF
                </button>
              </div>
            </div>
          </Reveal>
          </div>
        </section>

        {/* SECTION DIVIDER 2 -> 3 */}
        <SectionDivider number="SECTION 03" label="Third-Party Statutory Clearances (NABL / AERB / ASNT)" />

        {/* ========================================================
            SECTION 3: THIRD-PARTY APPROVALS
           ======================================================== */}
        <section id="third-party" className="relative overflow-hidden rounded-3xl border border-[#39434D]/15 bg-white/40 p-6 sm:p-10 scroll-mt-36 sm:scroll-mt-40 space-y-8">
          <AnimatedBackground variant="gradient-flow" theme="light" opacity={0.65} />
          <div className="relative z-10 space-y-8">
          {/* Section Header with Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#39434D]/15">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#101820] px-3.5 py-1 text-xs font-mono font-bold text-[#C6A66B] border border-[#C6A66B]/30 mb-2 shadow-xs">
                  <ShieldCheck className="h-4 w-4 text-[#C6A66B]" /> SECTION 03: THIRD-PARTY APPROVALS
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#20262D] tracking-tight">
                  NABL, AERB & ASNT Statutory Clearances
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6670] mt-1 font-normal">
                  Independent third-party laboratory accreditations, radiation safety approvals, and certified non-destructive testing (NDT) personnel as mandated by RDSO bridge specifications.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C6A66B]/15 px-4 py-1.5 text-xs font-mono font-bold text-[#20262D] border border-[#C6A66B]/40 shadow-2xs shrink-0">
                <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" /> 100% NDT & Calibration Compliant
              </span>
            </Reveal>
          </div>

          {/* 3 Dedicated Approval Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1: NABL */}
            <Reveal direction="scale" delay={0.1}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C6A66B]" />
                <div>
                  <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-4 mb-5">
                    <span className="rounded-full bg-[#E5E8EB] px-3 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20 font-mono">
                      NABL Accredited Partner
                    </span>
                    <span className="text-xs font-mono text-[#C6A66B] font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Active
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20262D] group-hover:text-[#C6A66B] transition-colors">
                    NABL Metallurgical Testing Lab
                  </h3>
                  <p className="mt-2 text-xs font-mono text-[#C6A66B] font-bold">{THIRD_PARTY_APPROVALS[0].partner}</p>
                  <p className="mt-3.5 text-xs sm:text-sm text-[#5C6670] leading-relaxed font-normal">
                    {THIRD_PARTY_APPROVALS[0].scope}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#39434D]/15 flex items-center justify-between gap-2">
                  <span className="text-xs text-[#20262D] font-bold flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="h-4 w-4 text-[#C6A66B] shrink-0" /> ISO/IEC 17025
                  </span>
                  <button
                    onClick={() => setSelectedDoc(nablDoc)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2.5 text-xs font-bold text-[#101820] transition shadow-sm cursor-pointer active:scale-95"
                  >
                    <Download className="h-3.5 w-3.5 text-[#101820]" /> Preview PDF
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Card 2: AERB */}
            <Reveal direction="scale" delay={0.2}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#101820]" />
                <div>
                  <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-4 mb-5">
                    <span className="rounded-full bg-[#E5E8EB] px-3 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20 font-mono">
                      Atomic Energy Reg Board
                    </span>
                    <span className="text-xs font-mono text-[#C6A66B] font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Valid
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20262D] group-hover:text-[#C6A66B] transition-colors">
                    AERB Radiation Safety Clearance
                  </h3>
                  <p className="mt-2 text-xs font-mono text-[#C6A66B] font-bold">{THIRD_PARTY_APPROVALS[1].partner}</p>
                  <p className="mt-3.5 text-xs sm:text-sm text-[#5C6670] leading-relaxed font-normal">
                    {THIRD_PARTY_APPROVALS[1].scope}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#39434D]/15 flex items-center justify-between gap-2">
                  <span className="text-xs text-[#20262D] font-bold flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="h-4 w-4 text-[#C6A66B] shrink-0" /> Radiation Active
                  </span>
                  <button
                    onClick={() => setSelectedDoc(nablDoc)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2.5 text-xs font-bold text-[#101820] transition shadow-sm cursor-pointer active:scale-95"
                  >
                    <Download className="h-3.5 w-3.5 text-[#101820]" /> Preview PDF
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Card 3: ASNT */}
            <Reveal direction="scale" delay={0.3}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C6A66B]" />
                <div>
                  <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-4 mb-5">
                    <span className="rounded-full bg-[#E5E8EB] px-3 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20 font-mono">
                      ASNT NDT Certification
                    </span>
                    <span className="text-xs font-mono text-[#C6A66B] font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Certified
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20262D] group-hover:text-[#C6A66B] transition-colors">
                    ASNT Level II / III Personnel
                  </h3>
                  <p className="mt-2 text-xs font-mono text-[#C6A66B] font-bold">{THIRD_PARTY_APPROVALS[2].partner}</p>
                  <p className="mt-3.5 text-xs sm:text-sm text-[#5C6670] leading-relaxed font-normal">
                    {THIRD_PARTY_APPROVALS[2].scope}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#39434D]/15 flex items-center justify-between gap-2">
                  <span className="text-xs text-[#20262D] font-bold flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="h-4 w-4 text-[#C6A66B] shrink-0" /> 
                    <Counter to={12} suffix=" Certified Staff" />
                  </span>
                  <button
                    onClick={() => setSelectedDoc(nablDoc)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2.5 text-xs font-bold text-[#101820] transition shadow-sm cursor-pointer active:scale-95"
                  >
                    <Download className="h-3.5 w-3.5 text-[#101820]" /> Preview PDF
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
          </div>
        </section>

      </div>

      {/* PDF VIEWER MODAL */}
      <PdfViewerModal doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
    </div>
  );
}
