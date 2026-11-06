"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Building, Download, MapPin, Phone, Mail, ShieldCheck, Award } from "lucide-react";
import PdfViewerModal from "@/components/audit/PdfViewerModal";
import { COMPANY_DETAILS, PORTAL_DOCUMENTS, AuditDoc } from "@/data/portalData";
import { AnimatedBackground, Reveal, SectionDivider } from "@/components/motion";
import OwnerPortraitBlock from "@/components/sections/OwnerPortraitBlock";

export default function CompanyOwnershipPage() {
  const [selectedDoc, setSelectedDoc] = useState<AuditDoc | null>(null);

  const companyDocs = PORTAL_DOCUMENTS.filter(
    (d) => d.category === "Company" || d.id === "doc-3" || d.id === "doc-4" || d.id === "doc-5"
  );

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* Header Banner - Warm Ivory Architectural Surface with Deep Navy Accents */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-2xs overflow-hidden">
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.55} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 shadow-2xs">
                  <Building className="h-3.5 w-3.5 text-[#C6A66B]" /> TAB 1: Company Details (Matches RDSO Inspection Sheet)
                </span>
                <h1 className="font-heading mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Company Ownership & Statutory Profile
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Verified corporate registration credentials, registered office particulars, and authoritative ownership records under Ministry of Railways RDSO checklist items #1 & #3.
                </p>
              </div>
            </Reveal>

            {/* Sub-tab Switcher */}
            <Reveal direction="right" delay={0.15}>
              <div className="flex rounded-xl border border-[#39434D]/20 bg-[#E5E8EB] p-1.5 gap-1 shadow-xs">
                <Link
                  href="/company"
                  className="rounded-lg bg-[#101820] px-4 py-2 text-xs font-semibold text-[#C6A66B] border border-[#C6A66B]/30 shadow-xs"
                >
                  1. Ownership Details
                </Link>
                <Link
                  href="/company/registration"
                  className="rounded-lg px-4 py-2 text-xs font-medium text-[#5C6670] hover:text-[#20262D] hover:bg-white/80 transition-colors"
                >
                  2. Firm Registration
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* 1. Ownership & Owner's Details Section */}
        <section id="ownership" className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white shadow-sm p-4 sm:p-6 lg:p-8 space-y-8">
          <AnimatedBackground variant="steel-lines" theme="light" opacity={0.25} />
          
          <div className="relative z-10 space-y-8">
            {/* Section Header */}
            <div className="border-b border-[#39434D]/15 pb-5 flex flex-wrap items-center justify-between gap-3">
              <Reveal direction="left" delay={0.05}>
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#20262D] flex items-center gap-2.5">
                    <Building className="h-6 w-6 text-[#C6A66B]" /> 1. Company Ownership & Executive Leadership
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6670] mt-1 font-normal">
                    Authoritative Proprietor particulars, RDSO Technical Executive profile & corporate registration evidence
                  </p>
                </div>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <span className="text-xs font-mono text-[#C6A66B] bg-[#101820] px-3.5 py-1.5 rounded-full border border-[#C6A66B]/30 font-semibold shadow-2xs">
                  RDSO Checklist Item #1 & #3
                </span>
              </Reveal>
            </div>

            {/* Owner Details Animated Portrait Block */}
            <div className="rounded-3xl overflow-hidden">
              <OwnerPortraitBlock />
            </div>

            {/* Authoritative Field-Value Evidence Table (Preserved 100%) */}
            <div className="rounded-2xl overflow-hidden border border-[#39434D]/15 bg-white shadow-xs">
              <div className="border-b border-[#39434D]/15 bg-[#F5F3EE] px-6 py-3.5 flex items-center justify-between">
                <h3 className="font-heading text-sm font-bold text-[#20262D] flex items-center gap-2">
                  <Building className="h-4 w-4 text-[#C6A66B]" /> Registered Firm & Ownership Table Particulars
                </h3>
                <span className="text-[11px] font-mono text-[#89939D]">RDSO Master Dossier Match</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-[#20262D]">
                  <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                    <tr>
                      <th className="px-6 py-4 w-1/3">Field Requirement</th>
                      <th className="px-6 py-4">Authoritative Corporate Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#39434D]/10 bg-white">
                    <tr className="hover:bg-[#F5F3EE]/80 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#5C6670]">Company Legal Name</td>
                      <td className="px-6 py-4 font-bold text-[#20262D] text-base">{COMPANY_DETAILS.name}</td>
                    </tr>
                    <tr className="hover:bg-[#F5F3EE]/80 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#5C6670]">Managing Director & Proprietor</td>
                      <td className="px-6 py-4 font-bold text-[#20262D]">{COMPANY_DETAILS.directors[0].name}</td>
                    </tr>
                    <tr className="hover:bg-[#F5F3EE]/80 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#5C6670]">CIN / Registration No.</td>
                      <td className="px-6 py-4 font-mono font-bold text-[#C6A66B]">{COMPANY_DETAILS.cin}</td>
                    </tr>
                    <tr className="hover:bg-[#F5F3EE]/80 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#5C6670]">Enterprise Constitution / Type</td>
                      <td className="px-6 py-4 font-medium text-[#20262D]">{COMPANY_DETAILS.legalType}</td>
                    </tr>
                    <tr className="hover:bg-[#F5F3EE]/80 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#5C6670]">Registered Plant Address</td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-[#20262D] leading-relaxed">{COMPANY_DETAILS.registeredAddress}</p>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F5F3EE]/80 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#5C6670]">Official Contact Information</td>
                      <td className="px-6 py-4 space-y-1.5 text-xs">
                        <p className="flex items-center gap-2 text-[#20262D]">
                          <Phone className="h-3.5 w-3.5 text-[#C6A66B]" />
                          <a href="tel:+919789495144" className="hover:text-[#C6A66B] transition-colors font-medium font-mono">{COMPANY_DETAILS.phone}</a>
                        </p>
                        <p className="flex items-center gap-2 text-[#20262D]">
                          <Mail className="h-3.5 w-3.5 text-[#C6A66B]" />
                          <a href="mailto:vaishnav.engg2009@gmail.com" className="hover:text-[#C6A66B] transition-colors font-medium">{COMPANY_DETAILS.email}</a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider label="STATUTORY DOSSIER DOWNLOADS" />

        {/* 2. Downloads Section */}
        <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.4} />
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Reveal direction="left" delay={0.05}>
                <h3 className="font-heading text-xl font-bold text-[#20262D] flex items-center gap-2">
                  <Download className="h-5 w-5 text-[#C6A66B]" /> Ownership Downloads & Statutory Certificates
                </h3>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <span className="text-xs text-[#89939D] font-semibold font-mono bg-[#E5E8EB] px-3 py-1 rounded-full border border-[#39434D]/20">
                  PDF Copies for Inspector File
                </span>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {companyDocs.map((doc, idx) => (
                <Reveal key={doc.id} direction="up" delay={idx * 0.08}>
                  <div className="rounded-2xl border border-[#39434D]/20 bg-white/90 backdrop-blur-xs p-5 flex flex-col justify-between shadow-xs hover:border-[#C6A66B] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="rounded-full bg-[#E5E8EB] px-2.5 py-0.5 text-xs font-semibold text-[#20262D] border border-[#39434D]/20">
                          {doc.category}
                        </span>
                        <span className="text-xs font-mono text-[#C6A66B] font-bold">{doc.status}</span>
                      </div>
                      <h4 className="font-heading font-bold text-[#20262D] text-sm leading-snug">{doc.title}</h4>
                      <p className="mt-1 text-xs text-[#89939D] font-mono">{doc.version}</p>
                    </div>

                    <div className="mt-6 pt-3.5 border-t border-[#39434D]/15 flex items-center justify-between">
                      <span className="text-[11px] text-[#89939D] font-mono">{doc.fileSize}</span>
                      <button
                        onClick={() => setSelectedDoc(doc)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#C6A66B] hover:bg-[#D8B97E] px-3.5 py-1.5 text-xs font-bold text-[#101820] shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
                      >
                        <Download className="h-3.5 w-3.5" /> Preview PDF
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider label="PLANT LOCATION VERIFICATION" />

        {/* 3. Registered Address Location Map Block */}
        <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-8 shadow-sm">
          <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.35} />
          <div className="relative z-10 space-y-4">
            <Reveal direction="left" delay={0.05}>
              <h3 className="font-heading text-lg font-bold text-[#20262D] flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#C6A66B]" /> Plant Works & Registered Address Map Verification
              </h3>
            </Reveal>
            <Reveal direction="scale" delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-[#39434D]/20 bg-[#E5E8EB] h-72 sm:h-80 flex items-center justify-center text-[#5C6670] shadow-inner relative">
                <iframe
                  title="Vaishnav Engineering Location Map"
                  src="https://maps.google.com/maps?q=Unit+1+SF.No.+295%2F1%2C+S.N+Pudur+Village%2C+Thiruvalam%2C+Vellore+632519%2C+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <PdfViewerModal doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
    </div>
  );
}
