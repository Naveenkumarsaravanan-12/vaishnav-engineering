"use client";

import { useState } from "react";
import Link from "next/link";
import { Building, CheckCircle2, Download, Calendar } from "lucide-react";
import PdfViewerModal from "@/components/audit/PdfViewerModal";
import { COMPANY_DETAILS, PORTAL_DOCUMENTS, AuditDoc } from "@/data/portalData";
import { AnimatedBackground, Reveal, SectionDivider } from "@/components/motion";

export default function CompanyRegistrationPage() {
  const [selectedDoc, setSelectedDoc] = useState<AuditDoc | null>(null);

  const getDoc = (id: string) => PORTAL_DOCUMENTS.find((d) => d.id === id) || null;

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* Header Banner */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-2xs overflow-hidden">
        <AnimatedBackground variant="steel-lines" theme="light" opacity={0.55} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 shadow-2xs">
                  <Building className="h-3.5 w-3.5 text-[#C6A66B]" /> TAB 1: Company Details → Statutory Registrations
                </span>
                <h1 className="font-heading mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Statutory Firm Registration Cards
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Statutory registration documents and operating licenses required by Indian Railways & RDSO Joint Inspection Teams with certified validity dates.
                </p>
              </div>
            </Reveal>

            {/* Sub-tab Switcher */}
            <Reveal direction="right" delay={0.15}>
              <div className="flex rounded-xl border border-[#39434D]/20 bg-[#E5E8EB] p-1.5 gap-1 shadow-xs">
                <Link
                  href="/company"
                  className="rounded-lg px-4 py-2 text-xs font-medium text-[#5C6670] hover:text-[#20262D] hover:bg-white/80 transition-colors"
                >
                  1. Ownership Details
                </Link>
                <Link
                  href="/company/registration"
                  className="rounded-lg bg-[#101820] px-4 py-2 text-xs font-semibold text-[#C6A66B] border border-[#C6A66B]/30 shadow-xs"
                >
                  2. Firm Registration
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <Reveal direction="left" delay={0.05}>
          <p className="text-sm text-[#5C6670] max-w-3xl leading-relaxed font-normal">
            Inspectors can verify active registration numbers, statutory validity horizons, and download official verified PDF certificates directly into the inspection dossier below.
          </p>
        </Reveal>

        {/* 4 Cards Grid with Animated Background */}
        <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white/60 p-6 sm:p-8 shadow-sm">
          <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.45} />
          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Card 1: MSME */}
            <Reveal direction="up" delay={0.05}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-7 shadow-xs flex flex-col justify-between hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 transition-all duration-300 h-full">
                <div>
                  <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-3 mb-4">
                    <span className="rounded-full bg-[#E5E8EB] px-2.5 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20">
                      MSME Registered Enterprise
                    </span>
                    <span className="text-xs font-mono text-[#C6A66B] font-bold">Status: Active</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20262D]">MSME UDYAM Registration</h3>
                  <p className="mt-1 font-mono text-lg font-extrabold text-[#C6A66B]">{COMPANY_DETAILS.udyam}</p>
                  <p className="mt-2 text-xs text-[#5C6670] leading-relaxed font-normal">
                    Registered under Ministry of MSME, Govt of India, for medium manufacturing category in structural metal products.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#39434D]/15 flex items-center justify-between">
                  <span className="text-xs text-[#20262D] font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> Verified Certificate
                  </span>
                  <button
                    onClick={() => setSelectedDoc(getDoc("doc-4"))}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2 text-xs font-bold text-[#101820] shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    <Download className="h-3.5 w-3.5" /> Download MSME PDF
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Card 2: GST */}
            <Reveal direction="up" delay={0.12}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-7 shadow-xs flex flex-col justify-between hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 transition-all duration-300 h-full">
                <div>
                  <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-3 mb-4">
                    <span className="rounded-full bg-[#E5E8EB] px-2.5 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20">
                      GST Registration Document
                    </span>
                    <span className="text-xs font-mono text-[#C6A66B] font-bold">Status: Active</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20262D]">GSTIN Tax Registration</h3>
                  <p className="mt-1 font-mono text-lg font-extrabold text-[#C6A66B]">{COMPANY_DETAILS.gstin}</p>
                  <p className="mt-2 text-xs text-[#5C6670] leading-relaxed font-normal">
                    Goods and Services Tax Registration Certificate (Form REG-06) issued by Commercial Taxes Dept, Tamil Nadu.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#39434D]/15 flex items-center justify-between">
                  <span className="text-xs text-[#20262D] font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> Verified Active Record
                  </span>
                  <button
                    onClick={() => setSelectedDoc(getDoc("doc-5"))}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2 text-xs font-bold text-[#101820] shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    <Download className="h-3.5 w-3.5" /> Download GST PDF
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Card 3: PAN */}
            <Reveal direction="up" delay={0.18}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-7 shadow-xs flex flex-col justify-between hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 transition-all duration-300 h-full">
                <div>
                  <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-3 mb-4">
                    <span className="rounded-full bg-[#E5E8EB] px-2.5 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20">
                      Income Tax Registration
                    </span>
                    <span className="text-xs font-mono text-[#C6A66B] font-bold">Status: Valid</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20262D]">Company PAN Card</h3>
                  <p className="mt-1 font-mono text-lg font-extrabold text-[#C6A66B]">{COMPANY_DETAILS.pan}</p>
                  <p className="mt-2 text-xs text-[#5C6670] leading-relaxed font-normal">
                    Permanent Account Number card registered with Income Tax Department, Government of India.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#39434D]/15 flex items-center justify-between">
                  <span className="text-xs text-[#20262D] font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> Verified Document
                  </span>
                  <button
                    onClick={() => setSelectedDoc(getDoc("doc-5"))}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2 text-xs font-bold text-[#101820] shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    <Download className="h-3.5 w-3.5" /> Download PAN PDF
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Factory Licence (Highlight Validity!) */}
            <Reveal direction="up" delay={0.24}>
              <div className="rounded-2xl border-2 border-[#C6A66B] bg-white p-7 shadow-xs flex flex-col justify-between relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 bg-[#101820] text-[#C6A66B] text-[10px] uppercase font-bold px-3 py-1 rounded-bl">
                  Inspectors Choice
                </div>

                <div>
                  <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-3 mb-4">
                    <span className="rounded-full bg-[#E5E8EB] px-2.5 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20">
                      Factory Licence & Operating Permit
                    </span>
                    <span className="text-xs font-mono text-[#C6A66B] font-bold">Active Sanction</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20262D]">Industrial Factory Operating Licence</h3>
                  <p className="mt-1 font-mono text-lg font-extrabold text-[#C6A66B]">{COMPANY_DETAILS.factoryLicence}</p>
                  
                  {/* Highlight Validity Box */}
                  <div className="mt-4 rounded-xl border border-[#C6A66B]/40 bg-[#F5F3EE] p-4 flex items-center justify-between shadow-2xs">
                    <div>
                      <span className="text-xs text-[#5C6670] font-medium">Licence Expiry / Validity Date:</span>
                      <p className="text-lg font-extrabold text-[#20262D] flex items-center gap-1.5 font-mono">
                        <Calendar className="h-4 w-4 text-[#C6A66B]" /> {COMPANY_DETAILS.factoryLicenceValidity}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#101820] px-3 py-1 text-xs font-bold text-[#C6A66B] border border-[#C6A66B]/40 shadow-xs">
                      VALID & CURRENT
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#39434D]/15 flex items-center justify-between">
                  <span className="text-xs text-[#89939D]">Sanctioned Power & Worker Strength</span>
                  <button
                    onClick={() => setSelectedDoc(getDoc("doc-3"))}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2 text-xs font-bold text-[#101820] shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    <Download className="h-3.5 w-3.5" /> Download Factory Licence PDF
                  </button>
                </div>
              </div>
            </Reveal>

          </div>
        </section>
      </div>

      <PdfViewerModal doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
    </div>
  );
}
