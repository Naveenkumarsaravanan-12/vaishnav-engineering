"use client";

import { UserCheck, FileText, ExternalLink, Download } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_EMPLOYEE_ROSTER } from "@/data/rdsoData";
import OrgChart from "@/components/sections/OrgChart";
import { Reveal } from "@/components/motion";

export default function Section07OrgStructure() {
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
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={doc1Url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#F5F3EE] hover:bg-[#E5E8EB] text-[#101820] px-3.5 py-2 text-xs font-bold transition-all border border-[#39434D]/15 cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-[#D6B36A]" />
                    <span>Open in New Tab</span>
                  </a>
                  <a
                    href={doc1Url}
                    download="Organisation-Chart-Vaishnav-Engineering.pdf"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-3.5 py-2 text-xs font-bold transition-all border border-[#D6B36A]/40 cursor-pointer shadow-xs"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>

                {/* Embedded PDF Preview */}
                <div className="rounded-2xl overflow-hidden border border-[#39434D]/20 bg-[#F5F3EE] shadow-inner w-full h-[520px] sm:h-[600px]">
                  <iframe
                    src={`${doc1Url}#toolbar=1&navpanes=0&view=FitH`}
                    title="Organisation Chart - Vaishnav Engineering"
                    className="w-full h-full bg-white border-0"
                  />
                </div>
              </div>

              {/* Footer Meta */}
              <div className="pt-3 border-t border-[#39434D]/10 flex items-center justify-between text-[11px] font-mono text-[#89939D]">
                <span>Source: Auto Cad 3d Inv.pdf</span>
                <span className="text-[#101820] font-semibold">1.44 MB</span>
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
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={doc2Url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#F5F3EE] hover:bg-[#E5E8EB] text-[#101820] px-3.5 py-2 text-xs font-bold transition-all border border-[#39434D]/15 cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-[#D6B36A]" />
                    <span>Open in New Tab</span>
                  </a>
                  <a
                    href={doc2Url}
                    download="Management-Reporting-Structure-Vaishnav-Engineering.pdf"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-3.5 py-2 text-xs font-bold transition-all border border-[#D6B36A]/40 cursor-pointer shadow-xs"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>

                {/* Embedded PDF Preview */}
                <div className="rounded-2xl overflow-hidden border border-[#39434D]/20 bg-[#F5F3EE] shadow-inner w-full h-[520px] sm:h-[600px]">
                  <iframe
                    src={`${doc2Url}#toolbar=1&navpanes=0&view=FitH`}
                    title="Management & Reporting Structure - Vaishnav Engineering"
                    className="w-full h-full bg-white border-0"
                  />
                </div>
              </div>

              {/* Footer Meta */}
              <div className="pt-3 border-t border-[#39434D]/10 flex items-center justify-between text-[11px] font-mono text-[#89939D]">
                <span>Source: DOC-20260716-WA0001..pdf</span>
                <span className="text-[#101820] font-semibold">1.18 MB</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
