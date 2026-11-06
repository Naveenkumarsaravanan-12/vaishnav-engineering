"use client";

import {
  Zap,
  ShieldCheck,
  Download,
  BatteryCharging,
  Factory,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Gauge,
  Activity,
  Receipt,
  Layers,
  Info
} from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_POWER_INFRASTRUCTURE } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";

interface Section11PowerInfrastructureProps {
  onOpenPdfModal: (docId: string) => void;
}

export default function Section11PowerInfrastructure({ onOpenPdfModal }: Section11PowerInfrastructureProps) {
  const { tangedcoConnection, tangedcoTariff, tangedcoBilling, loadCapacityDistinctionNote } = RDSO_POWER_INFRASTRUCTURE;

  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="11"
        title="Power Infrastructure & Heavy Utilities"
        description="High-tension electrical utility supply, sanctioned connected load allocations, and diesel generator backup systems supporting heavy continuous fabrication."
        statusBadge="250 kVA HT Sanctioned"
      />

      {/* 4 Cards Bento Grid for Power Infrastructure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Field 1: Power Demand */}
        <Reveal direction="up" delay={0.05}>
          <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-2 h-full flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                Sanctioned Demand
              </span>
              <h3 className="font-heading text-sm font-bold text-[#101820] mt-1">
                Power Demand
              </h3>
              <p className="font-mono text-xl font-black text-[#D6B36A] mt-2">
                {RDSO_POWER_INFRASTRUCTURE.powerDemand}
              </p>
            </div>
            <div className="pt-2 border-t border-[#39434D]/15 text-[11px] font-mono text-[#5C6670]">
              Units: <strong>kVA / kW</strong> verified
            </div>
          </div>
        </Reveal>

        {/* Field 2: Installed Power Supply */}
        <Reveal direction="up" delay={0.1}>
          <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-2 h-full flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                Electrical Specification
              </span>
              <h3 className="font-heading text-sm font-bold text-[#101820] mt-1">
                Installed Power Supply
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#101820] mt-2 leading-snug">
                {RDSO_POWER_INFRASTRUCTURE.installedPowerSupply}
              </p>
            </div>
            <div className="pt-2 border-t border-[#39434D]/15 text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-emerald-600" />
              Heavy HT Tariff Active
            </div>
          </div>
        </Reveal>

        {/* Field 3: Connected Load */}
        <Reveal direction="up" delay={0.15}>
          <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-2 h-full flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                Total Load Capacity
              </span>
              <h3 className="font-heading text-sm font-bold text-[#101820] mt-1">
                Connected Load
              </h3>
              <p className="font-mono text-xl font-black text-[#101820] mt-2">
                {RDSO_POWER_INFRASTRUCTURE.connectedLoad}
              </p>
            </div>
            <div className="pt-2 border-t border-[#39434D]/15 text-[11px] font-mono text-[#5C6670]">
              Powers 4 EOT Bays & SAW Rigs
            </div>
          </div>
        </Reveal>

        {/* Field 4: Power Source & DG Backup */}
        <Reveal direction="up" delay={0.2}>
          <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 shadow-xs space-y-2 h-full flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                Grid Feeder & Backup
              </span>
              <h3 className="font-heading text-sm font-bold text-[#101820] mt-1">
                Power Source & Backup
              </h3>
              <p className="text-xs text-[#5C6670] mt-1 leading-snug">
                Grid: <strong>TANGEDCO Industrial Feeder</strong>
              </p>
              <p className="text-xs font-mono font-bold text-[#D6B36A] mt-1">
                DG Backup: {RDSO_POWER_INFRASTRUCTURE.dgBackup}
              </p>
            </div>
            <div className="pt-2 border-t border-[#39434D]/15 text-[11px] font-mono text-[#89939D]">
              AMF Auto Switchover Panel
            </div>
          </div>
        </Reveal>
      </div>

      {/* Field 5: Supporting Documents & Utility Sanction */}
      <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-3">
          <h4 className="font-heading text-sm font-bold text-[#101820] flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#D6B36A]" />
            Power Sanction & Electrical Utility Supporting Documents
          </h4>
          <span className="text-xs font-mono text-[#89939D]">
            Official Sanction Order
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RDSO_POWER_INFRASTRUCTURE.supportingDocuments.map((doc, dIdx) => (
            <div
              key={dIdx}
              className="p-4 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 flex items-center justify-between gap-3"
            >
              <div className="space-y-0.5">
                <h5 className="font-heading text-xs sm:text-sm font-bold text-[#101820]">
                  {doc.title}
                </h5>
                <p className="text-xs text-[#5C6670]">{doc.authority}</p>
                <span className="font-mono text-[11px] text-[#D6B36A] font-bold block">{doc.ref}</span>
              </div>

              <div className="shrink-0">
                {doc.docUrl ? (
                  <button
                    type="button"
                    onClick={() => onOpenPdfModal("doc-8")}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-3 py-1.5 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Download className="h-3 w-3" />
                    <span>View Order</span>
                  </button>
                ) : (
                  <span className="font-mono text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    {doc.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMPORTANT LOAD CAPACITY DISTINCTION CALLOUT BANNER */}
      <Reveal direction="up" delay={0.1}>
        <div className="rounded-2xl border border-amber-300/40 bg-amber-50/50 p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 border border-amber-300/60">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-heading text-sm font-bold text-[#101820]">
                  Load Capacity Distinction & Verification Record
                </h4>
                <span className="font-mono text-[11px] font-bold text-amber-900 bg-amber-100/80 px-2.5 py-0.5 rounded border border-amber-300/70">
                  Audit Flag: Distinct Capacities Maintained
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C6670] leading-relaxed">
                {loadCapacityDistinctionNote}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-amber-200/60">
            <div className="p-3 rounded-xl bg-white/80 border border-amber-200/60 space-y-1">
              <span className="text-[11px] font-mono text-[#89939D] uppercase tracking-wider block">
                Primary Heavy Infrastructure Capacity
              </span>
              <p className="font-mono text-sm font-bold text-[#101820]">
                250 kVA Max Demand • 200 kW Sanctioned • 250 kVA Connected
              </p>
              <p className="text-[11px] text-[#5C6670]">
                Fabrication Bays 1–4, SAW tractors, 500T straightening press & continuous EOT craneage.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/80 border border-amber-200/60 space-y-1">
              <span className="text-[11px] font-mono text-[#89939D] uppercase tracking-wider block">
                TANGEDCO Active Utility Consumer Statement
              </span>
              <p className="font-mono text-sm font-bold text-[#D6B36A]">
                48 kW Sanctioned Load • 48 kW Temporarily Reduced Load
              </p>
              <p className="text-[11px] text-[#5C6670]">
                Live utility billing registration under Tariff LN3B – Industries (Non Metro).
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* NEW SUBSECTION: TANGEDCO ELECTRICITY CONNECTION DETAILS */}
      <Reveal direction="up" delay={0.15}>
        <div className="rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          {/* Subsection Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#39434D]/15 pb-5 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#D6B36A] uppercase tracking-wider">
                  Tamil Nadu Generation & Distribution Corporation (TANGEDCO)
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Service: {tangedcoConnection.serviceStatus}
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#101820]">
                TANGEDCO ELECTRICITY CONNECTION DETAILS
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6670]">
                Official utility account configuration, institutional administration codes & service specifications.
              </p>
            </div>

            {/* Bill Payment Status Card */}
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Receipt className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                  Bill Payment Status
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="font-mono text-base sm:text-lg font-black text-emerald-900">
                    Current Dues: {tangedcoBilling.currentDues}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                </div>
                <span className="text-[11px] text-emerald-700 block">
                  {tangedcoBilling.statusLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Connection Parameters Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#89939D] flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-[#D6B36A]" />
                Institutional Connection Parameters
              </h4>
              <span className="text-[11px] font-mono text-[#5C6670]">
                14 Verified Utility Fields
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Electricity Board */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Electricity Board
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoConnection.electricityBoard}
                </p>
              </div>

              {/* Region */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Region
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoConnection.region}
                </p>
              </div>

              {/* Circle */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Circle
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoConnection.circle}
                </p>
              </div>

              {/* Section */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Section
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoConnection.section}
                </p>
              </div>

              {/* Distribution */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Distribution
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoConnection.distribution}
                </p>
              </div>

              {/* Phase */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Phase
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoConnection.phase}
                </p>
              </div>

              {/* Sanctioned Load */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Sanctioned Load
                </span>
                <p className="font-mono text-sm font-bold text-[#D6B36A]">
                  {tangedcoConnection.sanctionedLoad}
                </p>
              </div>

              {/* Temporarily Reduced Load */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Temporarily Reduced Load
                </span>
                <p className="font-mono text-sm font-bold text-[#D6B36A]">
                  {tangedcoConnection.temporarilyReducedLoad}
                </p>
              </div>

              {/* Effective Date */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Effective Date
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoConnection.effectiveDate}
                </p>
              </div>

              {/* Service Status */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Service Status
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  {tangedcoConnection.serviceStatus}
                </span>
              </div>

              {/* Service Category */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Service Category
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoConnection.serviceCategory}
                </p>
              </div>

              {/* Consumer Rating */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Consumer Rating
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#101820] bg-amber-100/70 px-2.5 py-0.5 rounded border border-amber-300/60">
                  Rating: {tangedcoConnection.consumerRating}
                </span>
              </div>

              {/* Tariff Code (spans 2 cols on lg) */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1 lg:col-span-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Tariff Code
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoConnection.tariffCode}
                </p>
              </div>

              {/* Meter Number (spans 2 cols on lg) */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1 lg:col-span-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Meter Number
                </span>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-sm font-bold text-[#101820]">
                    {tangedcoConnection.meterNumber}
                  </p>
                  <span className="text-[10px] font-mono text-[#89939D] bg-white px-2 py-0.5 rounded border border-[#39434D]/15">
                    Privacy Redacted
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ELECTRICITY TARIFF DETAILS CARD */}
          <div className="rounded-2xl border border-[#39434D]/15 bg-[#F5F3EE] p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#39434D]/15 pb-3 gap-2">
              <div className="space-y-0.5">
                <h4 className="font-heading text-sm sm:text-base font-bold text-[#101820] flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-[#D6B36A]" />
                  ELECTRICITY TARIFF DETAILS
                </h4>
                <p className="text-xs text-[#5C6670]">
                  Active billing slabs, industrial fixed charges & statutory electricity tax computation
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#101820] bg-white px-3 py-1 rounded-lg border border-[#39434D]/15 shrink-0 self-start sm:self-auto">
                Tariff: LN3B
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* First slab */}
              <div className="p-4 rounded-xl bg-white border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  First Slab Rate
                </span>
                <p className="font-mono text-base font-bold text-[#101820]">
                  {tangedcoTariff.firstSlab}
                </p>
                <p className="text-[11px] text-[#5C6670]">Primary energy consumption bracket</p>
              </div>

              {/* Second slab */}
              <div className="p-4 rounded-xl bg-white border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Second Slab Rate
                </span>
                <p className="font-mono text-base font-bold text-[#101820]">
                  {tangedcoTariff.secondSlab}
                </p>
                <p className="text-[11px] text-[#5C6670]">Extended industrial energy consumption</p>
              </div>

              {/* Fixed Cost */}
              <div className="p-4 rounded-xl bg-white border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Fixed Cost
                </span>
                <p className="font-mono text-base font-bold text-[#101820]">
                  {tangedcoTariff.fixedCost}
                </p>
                <p className="text-[11px] text-[#5C6670]">Monthly recurring demand charge</p>
              </div>

              {/* Welding Charges */}
              <div className="p-4 rounded-xl bg-white border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Welding Charges
                </span>
                <p className="font-mono text-base font-bold text-[#D6B36A]">
                  {tangedcoTariff.weldingCharges}
                </p>
                <p className="text-[11px] text-[#5C6670]">High-current welding surcharge</p>
              </div>

              {/* BPSC */}
              <div className="p-4 rounded-xl bg-white border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  BPSC (Late Payment Surcharge)
                </span>
                <p className="font-mono text-base font-bold text-emerald-800">
                  {tangedcoTariff.bpsc}
                </p>
                <p className="text-[11px] text-[#5C6670]">Zero arrears penalty record</p>
              </div>

              {/* Electricity Tax */}
              <div className="p-4 rounded-xl bg-white border border-[#39434D]/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Electricity Tax
                </span>
                <p className="font-mono text-sm font-bold text-[#101820]">
                  {tangedcoTariff.electricityTax}
                </p>
                <p className="text-[11px] text-[#5C6670]">Statutory energy cess on consumption</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-[#89939D]">
              <Info className="h-3.5 w-3.5 text-[#D6B36A] shrink-0" />
              <span>
                Values transcribed verbatim from official TANGEDCO consumer billing assessment. Personal identifiers redacted in compliance with data privacy directives.
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
