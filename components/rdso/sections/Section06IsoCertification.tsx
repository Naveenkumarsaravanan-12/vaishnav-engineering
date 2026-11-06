"use client";

import { Award, Download, Calendar, CheckCircle2, FileCheck2, ExternalLink } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_ISO_CERTIFICATION } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";

interface Section06IsoCertificationProps {
  onOpenPdfModal: (docId: string) => void;
}

export default function Section06IsoCertification({ onOpenPdfModal }: Section06IsoCertificationProps) {
  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="06"
        title="ISO 9001:2015 Quality Management System"
        description="Comprehensive quality assurance systems, surveillance audit records, and internal audit compliance certifying heavy structural bridge fabrication and erections."
        statusBadge="Certified & Active to Nov 2029"
        actionSlot={
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={RDSO_ISO_CERTIFICATION.certificatePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white hover:bg-[#F5F3EE] text-[#101820] px-3.5 py-2 text-xs font-bold border border-[#39434D]/20 shadow-xs transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-[#D6B36A]" />
              <span>View Certificate</span>
            </a>
            <a
              href={RDSO_ISO_CERTIFICATION.certificatePdfUrl}
              download="vaishnav-engineering-iso-9001-certificate.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2 text-xs font-bold border border-[#D6B36A]/40 shadow-xs transition-all cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Download Certificate</span>
            </a>
          </div>
        }
      />

      {/* ISO Highlights Banner */}
      <Reveal direction="up" delay={0.05}>
        <div className="rounded-3xl border border-[#39434D]/20 bg-gradient-to-r from-[#101820] via-[#16202A] to-[#202A33] text-white p-6 sm:p-8 shadow-sm relative overflow-hidden space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#39434D]/60 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6B36A] text-[#101820] shadow-md shrink-0">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-[#D6B36A] uppercase tracking-wider block">
                  International Quality Standard
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-white mt-0.5">
                  IS/ISO 9001:2015 Certified Organization
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs text-white/90 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
                Valid To: <strong>{RDSO_ISO_CERTIFICATION.certificateValidity}</strong>
              </span>
              <span className="font-mono text-xs font-bold text-[#101820] bg-[#D6B36A] px-3.5 py-1.5 rounded-xl shadow-xs">
                BIS / NABCB
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#89939D] uppercase tracking-wider block">
              Certified Scope of Activities:
            </span>
            <p className="font-mono text-xs sm:text-sm text-[#F5F1E8] font-bold tracking-wide leading-relaxed bg-[#101820] p-4 rounded-xl border border-[#39434D]/80">
              {RDSO_ISO_CERTIFICATION.scopeOfCertification}
            </p>
          </div>
        </div>
      </Reveal>

      {/* 8 Required Fields Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Field 1: Certifying Body */}
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-mono text-[#89939D] uppercase block">Certifying Body</span>
          <p className="font-heading text-base font-bold text-[#101820] mt-1">{RDSO_ISO_CERTIFICATION.certifyingBody}</p>
          <span className="text-[11px] text-[#5C6670] block">Accredited by NABCB</span>
        </div>

        {/* Field 2: Certificate Number */}
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-mono text-[#89939D] uppercase block">Licence / Certificate Number</span>
          <p className="font-mono text-sm font-black text-[#D6B36A] mt-1">{RDSO_ISO_CERTIFICATION.certificateNumber}</p>
          <span className="text-[11px] text-[#5C6670] block">Bureau of Indian Standards</span>
        </div>

        {/* Field 3: Certification Date */}
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-mono text-[#89939D] uppercase block">Certification Date</span>
          <p className="font-mono text-xs font-bold text-[#101820] mt-1 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#D6B36A]" />
            {RDSO_ISO_CERTIFICATION.certificationDate}
          </p>
          <span className="text-[11px] text-[#5C6670] block">Cycle Inception</span>
        </div>

        {/* Field 4: Certificate Validity */}
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-mono text-[#89939D] uppercase block">Certificate Validity</span>
          <p className="font-mono text-xs font-bold text-emerald-700 mt-1 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-emerald-600" />
            {RDSO_ISO_CERTIFICATION.certificateValidity}
          </p>
          <span className="text-[11px] text-[#5C6670] block">Current 3-Year Triennium</span>
        </div>

        {/* Field 5: Certification Audit */}
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-mono text-[#89939D] uppercase block">Certification Audit</span>
          <p className="font-mono text-xs font-bold text-[#101820] mt-1">{RDSO_ISO_CERTIFICATION.lastSurveillanceAudit}</p>
          <span className="text-[11px] text-emerald-700 font-medium block">Audited & Certified</span>
        </div>

        {/* Field 6: Last Internal Audit */}
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-mono text-[#89939D] uppercase block">Last Internal Audit</span>
          <p className="font-mono text-xs font-bold text-[#101820] mt-1">{RDSO_ISO_CERTIFICATION.lastInternalAudit}</p>
          <span className="text-[11px] text-[#5C6670] block">Conducted by QA Review Cell</span>
        </div>

        {/* Field 7: Audit Status */}
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-mono text-[#89939D] uppercase block">QMS Audit Status</span>
          <p className="font-heading text-xs font-bold text-emerald-700 mt-1 flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Active & Compliant
          </p>
          <span className="text-[11px] text-[#5C6670] block">Zero Non-Conformances</span>
        </div>

        {/* Field 8: Certificate PDF Action */}
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs flex flex-col justify-between">
          <span className="text-[11px] font-mono text-[#89939D] uppercase block">Certificate PDF</span>
          <div className="flex items-center gap-2 mt-2">
            <a
              href={RDSO_ISO_CERTIFICATION.certificatePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] py-2 text-xs font-bold transition-all"
            >
              <ExternalLink className="h-3 w-3" />
              <span>View</span>
            </a>
            <a
              href={RDSO_ISO_CERTIFICATION.certificatePdfUrl}
              download="vaishnav-engineering-iso-9001-certificate.pdf"
              className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#D6B36A] hover:bg-[#C6A66B] text-[#101820] py-2 text-xs font-bold transition-all shadow-xs"
            >
              <Download className="h-3 w-3" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Live Certificate Preview Box */}
      <Reveal direction="up" delay={0.1}>
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between border-b border-[#39434D]/15 pb-4 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="h-5 w-5 text-[#D6B36A]" />
                <h4 className="font-heading text-base font-bold text-[#101820]">
                  Official ISO 9001:2015 Licence Document Preview
                </h4>
              </div>
              <p className="text-xs text-[#5C6670] mt-0.5">
                Bureau of Indian Standards (BIS) • Licence No. {RDSO_ISO_CERTIFICATION.certificateNumber} • {RDSO_ISO_CERTIFICATION.certificateFileSize}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={RDSO_ISO_CERTIFICATION.certificatePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#F5F3EE] hover:bg-[#E5E8EB] text-[#101820] px-3.5 py-1.5 text-xs font-bold transition-colors border border-[#39434D]/15"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#D6B36A]" />
                <span>Open in New Tab</span>
              </a>
              <a
                href={RDSO_ISO_CERTIFICATION.certificatePdfUrl}
                download="vaishnav-engineering-iso-9001-certificate.pdf"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#D6B36A] hover:bg-[#C6A66B] text-[#101820] px-3.5 py-1.5 text-xs font-bold transition-colors shadow-xs"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#39434D]/20 bg-[#F5F3EE] shadow-inner h-[600px] w-full">
            <iframe
              src={`${RDSO_ISO_CERTIFICATION.certificatePdfUrl}#toolbar=1&navpanes=0`}
              title="Vaishnav Engineering IS/ISO 9001:2015 Certificate"
              className="w-full h-full bg-white border-0"
            />
          </div>
        </div>
      </Reveal>

      {/* Internal Audit Compliance Details Banner */}
      <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-3">
          <h4 className="font-heading text-sm font-bold text-[#101820] flex items-center gap-2">
            <FileCheck2 className="h-4 w-4 text-[#D6B36A]" />
            Internal Audit Compliance Details & Quality Systems Verification
          </h4>
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
            100% QAP Compliance
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#5C6670] leading-relaxed font-normal">
          {RDSO_ISO_CERTIFICATION.internalAuditComplianceDetails}
        </p>
      </div>
    </div>
  );
}
