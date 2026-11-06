"use client";

import { Award, Download, CheckCircle2, ShieldCheck, Calendar, FileText } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import RdsoPlaceholder from "@/components/rdso/RdsoPlaceholder";
import { RDSO_MANDATORY_APPROVALS, MandatoryApprovalItem } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";

interface Section09MandatoryApprovalsProps {
  onOpenPdfModal: (docId: string) => void;
}

export default function Section09MandatoryApprovals({ onOpenPdfModal }: Section09MandatoryApprovalsProps) {
  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="09"
        title="Mandatory Approvals & Accreditations"
        description="Statutory testing accreditations, radiation safety clearances, and non-destructive examination certifications mandated by RDSO and Indian Railways."
        statusBadge="NABL / AERB / ASNT Validated"
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-heading text-base sm:text-lg font-bold text-[#101820] flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#D6B36A]" />
            Mandatory Approvals Registry Table
          </h4>
          <span className="text-xs font-mono text-[#89939D]">
            Official Compliance Roster
          </span>
        </div>

        <div className="rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-[#20262D]">
              <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                <tr>
                  <th className="px-5 py-4 w-14">S.No</th>
                  <th className="px-5 py-4">Approval Name</th>
                  <th className="px-5 py-4">Issuing Authority</th>
                  <th className="px-5 py-4">Registration / Cert #</th>
                  <th className="px-5 py-4">Issue Date</th>
                  <th className="px-5 py-4">Expiry Date</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4 text-right">Supporting Doc</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#39434D]/10 bg-white font-medium">
                {RDSO_MANDATORY_APPROVALS.map((item) => {
                  if (!item.isVerified) {
                    return (
                      <tr key={item.sNo} className="bg-[#F5F3EE]/40 text-[#89939D]">
                        <td className="px-5 py-4 font-mono">{item.sNo}</td>
                        <td className="px-5 py-4 italic text-[#5C6670]">{item.approvalName}</td>
                        <td className="px-5 py-4 text-xs">{item.issuingAuthority}</td>
                        <td className="px-5 py-4"><RdsoPlaceholder label="Information to be updated" /></td>
                        <td className="px-5 py-4"><RdsoPlaceholder label="Information to be updated" /></td>
                        <td className="px-5 py-4"><RdsoPlaceholder label="Information to be updated" /></td>
                        <td className="px-5 py-4">
                          <span className="font-mono text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {item.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <RdsoPlaceholder label="Pending" />
                        </td>
                      </tr>
                    );
                  }

                  return (
                    <tr key={item.sNo} className="hover:bg-[#F5F3EE] transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-[#D6B36A]">{item.sNo}</td>
                      <td className="px-5 py-4 font-bold text-[#101820]">
                        <div className="space-y-0.5">
                          <p>{item.approvalName}</p>
                          <span className="text-[11px] font-mono text-[#D6B36A] block">Mandatory RDSO Compliance</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-xs text-[#5C6670] max-w-[200px] leading-snug">
                        {item.issuingAuthority}
                      </td>
                      <td className="px-5 py-4 font-mono font-bold text-[#101820]">
                        <span className="bg-[#E5E8EB] px-2 py-1 rounded border border-[#39434D]/20 text-xs">
                          {item.registrationNumber}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-mono text-xs text-[#5C6670]">
                        {item.issueDate}
                      </td>
                      <td className="px-5 py-4 font-mono font-bold text-emerald-700 text-xs">
                        {item.expiryDate}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                          {item.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        {item.supportingDocument.docUrl ? (
                          <button
                            type="button"
                            onClick={() => onOpenPdfModal(item.sNo === 1 ? "doc-6" : item.sNo === 4 ? "doc-3" : "doc-1")}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-3 py-1.5 text-xs font-bold transition-all cursor-pointer"
                          >
                            <Download className="h-3 w-3" />
                            <span>PDF</span>
                          </button>
                        ) : (
                          <span className="font-mono text-[11px] text-[#89939D] bg-[#F5F3EE] px-2 py-1 rounded">
                            {item.supportingDocument.ref}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

