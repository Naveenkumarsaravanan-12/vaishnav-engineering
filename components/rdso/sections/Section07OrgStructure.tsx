"use client";

import { UserCheck } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_EMPLOYEE_ROSTER } from "@/data/rdsoData";
import OrgChart from "@/components/sections/OrgChart";

export default function Section07OrgStructure() {
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
    </div>
  );
}

