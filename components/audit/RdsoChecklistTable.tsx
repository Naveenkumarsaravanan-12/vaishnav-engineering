"use client";

import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { RDSO_CHECKLIST_MAPPING } from "@/data/portalData";

export default function RdsoChecklistTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs font-body">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-4.5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102A43]/10 text-[#102A43] border border-[#102A43]/20">
            <ShieldCheck className="h-6 w-6 text-[#3B6B8F]" />
          </div>
          <div>
            <h3 className="font-heading text-base font-bold text-[#102A43]">RDSO Inspection Readiness Matrix</h3>
            <p className="text-xs text-[#64748B]">11 Category Deficiency Compliance Map (100% Audit Complete)</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
          Status: 11 / 11 Items Ready
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-[#263746]">
          <thead className="border-b border-[#E2E8F0] bg-[#F1F5F9] text-xs font-bold uppercase tracking-wider text-[#64748B]">
            <tr>
              <th className="px-6 py-3.5 w-16">Item #</th>
              <th className="px-6 py-3.5">Inspection Deficiency / Requirement</th>
              <th className="px-6 py-3.5">Audit Portal Evidence Tab</th>
              <th className="px-6 py-3.5">Audit Status</th>
              <th className="px-6 py-3.5 text-right">Direct Proof</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0] bg-white">
            {RDSO_CHECKLIST_MAPPING.map((row) => (
              <tr key={row.itemNo} className="hover:bg-[#F8FAFC] transition">
                <td className="px-6 py-4 font-mono font-bold text-[#3B6B8F]">#{row.itemNo}</td>
                <td className="px-6 py-4 font-semibold text-[#102A43]">{row.requirement}</td>
                <td className="px-6 py-4 text-[#263746]">
                  <span className="rounded-md bg-[#F1F5F9] px-2.5 py-1 font-mono text-xs text-[#263746] border border-[#E2E8F0]">
                    {row.tabName}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={row.href}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#102A43] hover:bg-[#1A3E61] px-3.5 py-1.5 text-xs font-semibold text-white transition shadow-xs"
                  >
                    View Proof <ArrowRight className="h-3 w-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
