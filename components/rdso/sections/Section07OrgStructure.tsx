"use client";

import { UserCheck, FileText, Eye } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_EMPLOYEE_ROSTER } from "@/data/rdsoData";
import OrgChart from "@/components/sections/OrgChart";
import { Reveal } from "@/components/motion";

interface Section07OrgStructureProps {
  onOpenPdfModal?: (docId: string) => void;
}

export default function Section07OrgStructure({ onOpenPdfModal }: Section07OrgStructureProps) {
  const doc1Url = "/documents/rdso/organisation-chart.pdf";
  const doc2Url = "/documents/rdso/management-reporting-structure.pdf";

  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="07"
        title="Organisation Structure & Key Personnel"
        description="Authoritative plant management hierarchy, departmental reporting structure, and certified technical staff roster meeting strict RDSO Part-A qualification guidelines."
        statusBadge="RDSO Qualified Hierarchy"
      />

      {/* Visual Organisation Chart matching Workforce Chart */}
      <OrgChart showTable={false} />

      {/* Mandatory Employee Details Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-heading text-base sm:text-lg font-bold text-[#101820] flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-[#D6B36A]" />
            Key Technical & Managerial Personnel Roster
          </h4>
          <span className="text-xs font-mono text-[#89939D]">
            Official Engineering Roll
          </span>
        </div>

        <div className="rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-[#20262D]">
              <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                <tr>
                  <th className="px-5 py-4 w-16">S.No</th>
                  <th className="px-5 py-4">Name</th>
                  <th className="px-5 py-4">Role</th>
                  <th className="px-5 py-4">Qualification</th>
                  <th className="px-5 py-4">Experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#39434D]/10 bg-white font-medium">
                {RDSO_EMPLOYEE_ROSTER.map((emp) => (
                  <tr key={emp.sNo} className="hover:bg-[#F5F3EE] transition-colors">
                    <td className="px-5 py-3.5 font-mono font-bold text-[#D6B36A]">{emp.sNo}</td>
                    <td className="px-5 py-3.5 font-bold text-[#101820] whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span>{emp.name}</span>
                        {emp.sNo === 1 && (
                          <span className="text-[10px] font-mono font-bold bg-[#101820] text-[#D6B36A] px-2 py-0.5 rounded">
                            Plant Head
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-[#101820] font-semibold">
                      {emp.role}
                    </td>
                    <td className="px-5 py-3.5 text-xs text-[#5C6670]">
                      {emp.qualification}
                    </td>
                    <td className="px-5 py-3.5 font-mono font-bold text-[#101820] whitespace-nowrap">
                      {emp.experience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ORGANISATION STRUCTURE & MANAGEMENT DOCUMENTS */}
      <Reveal direction="up" delay={0.1}>
        <div className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#39434D]/15 pb-4 gap-2">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D6B36A] block">
                Official Compliance Dossier & CAD Blueprint
              </span>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-[#101820] flex items-center gap-2 mt-0.5">
                <FileText className="h-5 w-5 text-[#D6B36A]" />
                ORGANISATION STRUCTURE & MANAGEMENT DOCUMENTS
              </h4>
            </div>
            <span className="text-xs font-mono font-semibold text-[#5C6670] bg-[#F5F3EE] border border-[#39434D]/15 px-3 py-1.5 rounded-lg w-fit">
              2 Audited Documents
            </span>
          </div>

          {/* Two PDF Cards Side by Side on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Organisation Chart */}
            <div className="rounded-3xl border border-[#39434D]/20 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-5 hover:border-[#D6B36A]/60 transition-all">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-[#39434D]/10 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#101820] text-[#D6B36A] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase bg-[#E5E8EB] text-[#101820] px-2 py-0.5 rounded">
                          DOC 01
                        </span>
                        <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                          Verified PDF
                        </span>
                      </div>
                      <h5 className="font-heading text-base sm:text-lg font-bold text-[#101820] mt-1">
                        Organisation Chart
                      </h5>
                      <p className="text-xs text-[#5C6670] mt-1 leading-relaxed">
                        AutoCAD 3D Technical Workflow, Plant Operational Hierarchy & Spatial Organization Blueprint
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenPdfModal?.("doc-13")}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2 text-xs font-bold transition-all border border-[#D6B36A]/40 shadow-xs cursor-pointer active:scale-95 shrink-0"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Preview Document</span>
                  </button>
                </div>

                {/* Clickable Card Body */}
                <div
                  onClick={() => onOpenPdfModal?.("doc-13")}
                  className="cursor-pointer rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15 p-5 space-y-3 group hover:border-[#D6B36A] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#101820] flex items-center gap-1.5">
                      <FileText className="h-4 w-4 text-[#D6B36A]" /> AutoCAD 3D Technical Drawing
                    </span>
                    <span className="font-mono text-[#89939D]">1.44 MB • PDF</span>
                  </div>
                  <p className="text-xs text-[#5C6670]">
                    Complete operational layout, equipment workflows, and supervisory tier structure.
                  </p>
                  <div className="pt-2 border-t border-[#39434D]/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#89939D]">Source: Auto Cad 3d Inv.pdf</span>
                    <span className="text-[#D6B36A] font-bold flex items-center gap-1 group-hover:underline">
                      <Eye className="h-3 w-3" /> Click to open PDF preview
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Management & Reporting Structure */}
            <div className="rounded-3xl border border-[#39434D]/20 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-5 hover:border-[#D6B36A]/60 transition-all">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-[#39434D]/10 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#101820] text-[#D6B36A] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase bg-[#E5E8EB] text-[#101820] px-2 py-0.5 rounded">
                          DOC 02
                        </span>
                        <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                          Verified PDF
                        </span>
                      </div>
                      <h5 className="font-heading text-base sm:text-lg font-bold text-[#101820] mt-1">
                        Management & Reporting Structure
                      </h5>
                      <p className="text-xs text-[#5C6670] mt-1 leading-relaxed">
                        Official Plant Leadership, Administrative Hierarchy & Departmental Reporting Matrix
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenPdfModal?.("doc-14")}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2 text-xs font-bold transition-all border border-[#D6B36A]/40 shadow-xs cursor-pointer active:scale-95 shrink-0"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Preview Document</span>
                  </button>
                </div>

                {/* Clickable Card Body */}
                <div
                  onClick={() => onOpenPdfModal?.("doc-14")}
                  className="cursor-pointer rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15 p-5 space-y-3 group hover:border-[#D6B36A] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#101820] flex items-center gap-1.5">
                      <FileText className="h-4 w-4 text-[#D6B36A]" /> Administrative & QA Matrix
                    </span>
                    <span className="font-mono text-[#89939D]">1.18 MB • PDF</span>
                  </div>
                  <p className="text-xs text-[#5C6670]">
                    Supervisory chain of command, quality assurance cell, welding coordinators, and safety heads.
                  </p>
                  <div className="pt-2 border-t border-[#39434D]/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#89939D]">Source: DOC-20260716-WA0001..pdf</span>
                    <span className="text-[#D6B36A] font-bold flex items-center gap-1 group-hover:underline">
                      <Eye className="h-3 w-3" /> Click to open PDF preview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
