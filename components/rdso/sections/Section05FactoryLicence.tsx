"use client";

import { ShieldCheck, Download, Calendar, MapPin, Building2, CheckCircle2, FileText, Users, Zap } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_FACTORY_LICENCE } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";

interface Section05FactoryLicenceProps {
  onOpenPdfModal: (docId: string) => void;
}

export default function Section05FactoryLicence({ onOpenPdfModal }: Section05FactoryLicenceProps) {
  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="05"
        title="Factory Licence Details"
        description="Official factory operating licence and statutory compliance clearance issued under the Factories Act, 1948 by the Directorate of Industrial Safety & Health."
        statusBadge="Valid & Active to Dec 2026"
        actionSlot={
          <button
            type="button"
            onClick={() => onOpenPdfModal("doc-3")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2 text-xs font-bold border border-[#D6B36A]/40 shadow-xs transition-all cursor-pointer"
          >
            <Download className="h-4 w-4" />
            <span>Download Factory Licence PDF</span>
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Key Fields (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <Reveal direction="up" delay={0.05}>
            <div className="rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-7 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between border-b border-[#39434D]/15 pb-4 gap-2">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                    Statutory Operating Clearance
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#101820] mt-0.5">
                    Industrial Operating Licence Credentials
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Status: {RDSO_FACTORY_LICENCE.status}
                </span>
              </div>

              {/* 4 Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                  <span className="text-[11px] font-mono text-[#89939D] uppercase block">Licence Number</span>
                  <span className="font-mono text-sm font-black text-[#D6B36A] block">
                    {RDSO_FACTORY_LICENCE.licenceNumber}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                  <span className="text-[11px] font-mono text-[#89939D] uppercase block">Issuing Authority</span>
                  <span className="font-bold text-[#101820] block leading-snug">
                    {RDSO_FACTORY_LICENCE.issuingAuthority}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                  <span className="text-[11px] font-mono text-[#89939D] uppercase block">Issue Date</span>
                  <span className="font-mono font-bold text-[#101820] flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#D6B36A]" />
                    {RDSO_FACTORY_LICENCE.issueDate}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                  <span className="text-[11px] font-mono text-[#89939D] uppercase block">Expiry Date / Horizon</span>
                  <span className="font-mono font-bold text-emerald-700 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                    {RDSO_FACTORY_LICENCE.expiryDate}
                  </span>
                </div>
              </div>

              {/* Factory Address Field */}
              <div className="p-4 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#101820]">
                  <MapPin className="h-3.5 w-3.5 text-[#D6B36A]" />
                  <span>LICENSED FACTORY PREMISES ADDRESS</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#5C6670] mt-1 leading-relaxed">
                  {RDSO_FACTORY_LICENCE.factoryAddress}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Sanctioned Capacity & Document Verification Card (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <Reveal direction="up" delay={0.1}>
            <div className="rounded-3xl border border-[#39434D]/20 bg-white p-6 shadow-xs space-y-5">
              <div className="border-b border-[#39434D]/15 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Sanctioned Plant Parameters
                </span>
                <h4 className="font-heading text-sm font-bold text-[#101820]">
                  Factory Strength & Power Allocations
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15">
                  <div className="flex items-center gap-2.5">
                    <Users className="h-4 w-4 text-[#D6B36A]" />
                    <span className="text-[#5C6670]">Sanctioned Workforce:</span>
                  </div>
                  <strong className="font-mono text-[#101820]">{RDSO_FACTORY_LICENCE.sanctionedWorkers}</strong>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15">
                  <div className="flex items-center gap-2.5">
                    <Zap className="h-4 w-4 text-[#D6B36A]" />
                    <span className="text-[#5C6670]">Sanctioned Power Load:</span>
                  </div>
                  <strong className="font-mono text-[#D6B36A]">{RDSO_FACTORY_LICENCE.sanctionedPower}</strong>
                </div>
              </div>

              {/* Document Download & Verification Box */}
              <div className="pt-2">
                <div className="rounded-2xl border border-[#39434D]/20 bg-[#101820] text-white p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#D6B36A] font-bold flex items-center gap-1.5">
                      <FileText className="h-4 w-4" />
                      Official Licence PDF
                    </span>
                    <span className="text-[11px] font-mono text-[#89939D]">{RDSO_FACTORY_LICENCE.licenceFileSize}</span>
                  </div>

                  <p className="text-xs text-[#E5E8EB] leading-relaxed">
                    Official Directorate of Industrial Safety & Health Renewal Order covering Unit-1 structural fabrication premises.
                  </p>

                  <button
                    type="button"
                    onClick={() => onOpenPdfModal("doc-3")}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D6B36A] to-[#C6A66B] hover:from-[#E2C785] hover:to-[#D6B36A] text-[#101820] py-2.5 text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>View Official Inspection Certificate (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

