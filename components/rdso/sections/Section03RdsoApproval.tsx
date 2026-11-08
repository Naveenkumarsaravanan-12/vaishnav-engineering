"use client";

import { ShieldCheck, Award, Eye, Calendar, CheckCircle2, History, ExternalLink } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_APPROVAL_RECORDS } from "@/data/rdsoData";
import { RDSO_APPROVAL_INFO } from "@/data/portalData";
import { Reveal } from "@/components/motion";

interface Section03RdsoApprovalProps {
  onOpenPdfModal: (docId: string) => void;
}

export default function Section03RdsoApproval({ onOpenPdfModal }: Section03RdsoApprovalProps) {
  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="03"
        title="RDSO Approval Details"
        description="Official approval status accredited by Research Designs & Standards Organisation (RDSO), Director General (B&S), Ministry of Railways, Lucknow, Government of India."
        statusBadge="Part-A Approved Railway Vendor"
        actionSlot={
          <button
            type="button"
            onClick={() => onOpenPdfModal("doc-1")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2 text-xs font-bold border border-[#D6B36A]/40 shadow-xs transition-all cursor-pointer"
          >
            <Eye className="h-4 w-4" />
            <span>Preview RDSO Certificate</span>
          </button>
        }
      />

      {/* Hero Badge Banner */}
      <Reveal direction="up" delay={0.05}>
        <div className="rounded-2xl border border-[#39434D]/20 bg-gradient-to-r from-[#101820] to-[#202A33] text-white p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D6B36A] text-[#101820] shadow-md shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#D6B36A] uppercase tracking-wider block">
                Official Ministry of Railways Accreditation
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mt-0.5">
                Category-A Approved Bridge Fabrication Vendor
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-xs text-white/90 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              Valid Up To: <strong>30-Nov-2028</strong>
            </span>
            <span className="font-mono text-xs font-bold text-[#101820] bg-[#D6B36A] px-3 py-1.5 rounded-lg shadow-xs">
              Annual: 5,500 MT
            </span>
          </div>
        </div>
      </Reveal>

      {/* Mandatory Official Table Requirement */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-heading text-base sm:text-lg font-bold text-[#101820] flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#D6B36A]" />
            RDSO Approved Items Master Registry Table
          </h4>
          <span className="text-xs font-mono text-[#89939D]">
            Official RDSO Vendor Directory Record
          </span>
        </div>

        <div className="rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-[#20262D]">
              <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                <tr>
                  <th className="px-5 py-4 w-16">S.No</th>
                  <th className="px-5 py-4">Item Name</th>
                  <th className="px-5 py-4">Item Number</th>
                  <th className="px-5 py-4">Registration ID</th>
                  <th className="px-5 py-4">Annual Production Capacity</th>
                  <th className="px-5 py-4">Last Quality Audit</th>
                  <th className="px-5 py-4">Next Audit Due</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#39434D]/10 bg-white font-medium">
                {RDSO_APPROVAL_RECORDS.map((record) => (
                  <tr key={record.sNo} className="hover:bg-[#F5F3EE] transition-colors">
                    <td className="px-5 py-4 font-mono font-bold text-[#D6B36A]">{record.sNo}</td>
                    <td className="px-5 py-4 font-bold text-[#101820] max-w-xs">
                      <div className="space-y-1">
                        <p className="leading-snug">{record.itemName}</p>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                          {record.validityStatus}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-mono text-xs text-[#101820]">
                      <span className="bg-[#E5E8EB] px-2 py-1 rounded border border-[#39434D]/20 font-bold block truncate">
                        {record.itemNumber}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-mono font-bold text-[#D6B36A]">
                      {record.registrationId}
                    </td>
                    <td className="px-5 py-4 font-mono font-bold text-[#101820]">
                      {record.annualProductionCapacity}
                    </td>
                    <td className="px-5 py-4 font-mono text-[#5C6670]">
                      {record.lastQualityAudit}
                    </td>
                    <td className="px-5 py-4 font-mono font-bold text-emerald-700">
                      {record.nextAuditDue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Historical Audit Trail Timeline */}
      <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-3">
          <h4 className="font-heading text-sm font-bold text-[#101820] flex items-center gap-2">
            <History className="h-4 w-4 text-[#D6B36A]" />
            RDSO Joint Inspection Team Audit History & Renewal Track
          </h4>
          <span className="text-xs font-mono text-[#89939D]">
            3 Inspection Milestones
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RDSO_APPROVAL_INFO.auditHistory.map((hist, hIdx) => (
            <div key={hIdx} className="p-4 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#D6B36A] bg-[#101820] px-2.5 py-0.5 rounded">
                  {hist.year} Audit
                </span>
                <span className="text-[11px] font-mono text-emerald-700 font-bold">
                  Passed & Approved
                </span>
              </div>
              <h5 className="font-heading text-xs sm:text-[13px] font-bold text-[#101820] leading-snug">
                {hist.type}
              </h5>
              <div className="pt-2 border-t border-[#39434D]/10 text-[11px] text-[#5C6670] flex items-center justify-between">
                <span>Inspected by:</span>
                <strong className="text-[#101820] font-medium">{hist.inspector}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

