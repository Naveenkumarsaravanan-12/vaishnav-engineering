"use client";

import { FileText, Eye, CheckCircle2 } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_FIRM_REGISTRATION } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";

interface Section04FirmRegistrationProps {
  onOpenPdfModal: (docId: string) => void;
}

export default function Section04FirmRegistration({ onOpenPdfModal }: Section04FirmRegistrationProps) {
  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="04"
        title="Firm Registration Details"
        description="Statutory industrial enterprise registration credentials, MSME UDYAM classification, GST registrations, and corporate governance compliance."
        statusBadge="MSME & GST Registered"
      />

      {/* Main Registration Identifier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Field 1: Company Registration Number */}
        <Reveal direction="up" delay={0.05}>
          <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs space-y-3 h-full flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                Entity Identifier
              </span>
              <h3 className="font-heading text-base font-bold text-[#101820] mt-1">
                Company Registration Number
              </h3>
              <p className="mt-2 font-mono text-base font-extrabold text-[#D6B36A]">
                {RDSO_FIRM_REGISTRATION.companyRegistrationNumber.regNumber}
              </p>
              <p className="text-xs text-[#5C6670] mt-1 font-normal">
                {RDSO_FIRM_REGISTRATION.companyRegistrationNumber.type}
              </p>
            </div>
            <div className="pt-3 border-t border-[#39434D]/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#89939D]">Status:</span>
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                {RDSO_FIRM_REGISTRATION.companyRegistrationNumber.status}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Field 2: MSME / Udyam Registration */}
        <Reveal direction="up" delay={0.1}>
          <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs space-y-3 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Ministry of MSME, Govt of India
                </span>
                <span className="font-mono text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Permanent
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-[#101820] mt-1">
                MSME / Udyam Registration
              </h3>
              <p className="mt-2 font-mono text-base font-black text-[#101820]">
                {RDSO_FIRM_REGISTRATION.msmeUdyamRegistration.udyamNumber}
              </p>
              <p className="text-xs text-[#5C6670] mt-1 font-normal">
                Activity: {RDSO_FIRM_REGISTRATION.msmeUdyamRegistration.majorActivity}
              </p>
            </div>
            <div className="pt-3 border-t border-[#39434D]/15 text-[11px] font-mono text-[#5C6670]">
              NIC: <strong>{RDSO_FIRM_REGISTRATION.msmeUdyamRegistration.nicCode}</strong>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Field 6: Supporting Documents */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-heading text-base sm:text-lg font-bold text-[#101820] flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#D6B36A]" />
            Official Supporting Documents ({RDSO_FIRM_REGISTRATION.supportingDocuments.length} Verified Dossiers)
          </h4>
          <span className="text-xs font-mono text-[#89939D]">
            Official Verification Records
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RDSO_FIRM_REGISTRATION.supportingDocuments.map((doc, dIdx) => (
            <div
              key={dIdx}
              className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#D6B36A] transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#101820] text-[#D6B36A] shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-heading text-sm font-bold text-[#101820] leading-snug">
                    {doc.title}
                  </h5>
                  <p className="text-xs font-mono text-[#D6B36A] font-semibold mt-0.5">{doc.ref}</p>
                  <p className="text-[11px] text-[#5C6670] mt-0.5">{doc.authority}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 sm:border-l sm:border-[#39434D]/15 sm:pl-4 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => onOpenPdfModal(dIdx === 0 ? "doc-4" : "doc-5")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-3.5 py-2 text-xs font-bold transition-all cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Inspect PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

