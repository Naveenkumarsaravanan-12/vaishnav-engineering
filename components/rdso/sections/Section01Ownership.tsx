"use client";

import { Building2, User, ShieldCheck } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_OWNERSHIP } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";
import OwnerPortraitBlock from "@/components/sections/OwnerPortraitBlock";

export default function Section01Ownership() {
  return (
    <div className="space-y-10">
      <RdsoSectionHeader
        number="01"
        category="COMPANY PROFILE"
        title="Ownership Details"
        description="Statutory ownership structure, executive leadership roster, incorporation timeline, and corporate charter particulars."
        statusBadge="RDSO Checklist Item #01"
      />

      {/* Board of Directors & Executive Management - Reusing Founder Profile */}
      <div className="space-y-4">
        <div className="border-b border-[#39434D]/15 pb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
            Leadership Profile
          </span>
          <h3 className="font-heading text-lg font-bold text-[#101820] flex items-center gap-2 mt-0.5">
            <User className="h-5 w-5 text-[#D6B36A]" />
            Board of Directors & Executive Management
          </h3>
        </div>

        {/* Reusing existing Founder Profile Component from Company Page */}
        <Reveal direction="up" delay={0.05}>
          <div className="rounded-3xl overflow-hidden">
            <OwnerPortraitBlock />
          </div>
        </Reveal>
      </div>

      {/* Statutory Constitution & Incorporation Records */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Statutory Constitution (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <Reveal direction="up" delay={0.08} className="h-full">
            <div className="h-full rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs hover:border-[#D6B36A] transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Statutory Constitution
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101820] flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#D6B36A]" />
                  {RDSO_OWNERSHIP.ownershipType}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5C6670] leading-relaxed">
                  Registered under the Ministry of MSME, Govt of India, and Commercial Taxes Department, Govt of Tamil Nadu as a proprietary industrial manufacturing enterprise.
                </p>
              </div>

              {/* Principal Proprietor */}
              <div className="pt-4 border-t border-[#39434D]/15 text-xs space-y-1 bg-[#F5F3EE] p-4 rounded-xl border border-[#39434D]/10">
                <span className="text-[11px] font-mono text-[#89939D] uppercase block">Principal Proprietor</span>
                <span className="font-heading text-sm sm:text-base font-bold text-[#101820] block">{RDSO_OWNERSHIP.proprietor}</span>
                <span className="text-[11px] text-[#5C6670] block">100% Sole Proprietary Ownership & Overall Management</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Statutory Registration Particulars & Charter Documents (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Reveal direction="up" delay={0.12}>
            <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-3">
                <span className="text-xs font-mono font-bold text-[#101820] uppercase flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#D6B36A]" />
                  Registration & Incorporation Particulars
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  Verified Records
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15">
                  <span className="text-[11px] font-mono text-[#89939D] block">Date of Incorporation</span>
                  <span className="font-mono font-bold text-[#101820] mt-1 block">
                    {RDSO_OWNERSHIP.registrationDetails.dateOfIncorporation}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15">
                  <span className="text-[11px] font-mono text-[#89939D] block">Date of Production</span>
                  <span className="font-mono font-bold text-[#101820] mt-1 block">
                    {RDSO_OWNERSHIP.registrationDetails.dateOfCommencement}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15">
                  <span className="text-[11px] font-mono text-[#89939D] block">Udyam Registration</span>
                  <span className="font-mono font-bold text-[#D6B36A] mt-1 block truncate">
                    {RDSO_OWNERSHIP.registrationDetails.udyamNumber}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15">
                  <span className="text-[11px] font-mono text-[#89939D] block">GST Registration</span>
                  <span className="font-mono font-bold text-[#101820] mt-1 block truncate">
                    {RDSO_OWNERSHIP.registrationDetails.gstin}
                  </span>
                </div>
              </div>

              {/* Memorandum & Partnership Deed Placeholders (Preserving Checklist Completeness) */}
              <div className="pt-3 border-t border-[#39434D]/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-[#F5F3EE] space-y-1.5">
                  <span className="text-[11px] font-bold font-heading text-[#101820] block">
                    Memorandum & Articles of Association (MoA / AoA)
                  </span>
                  <p className="text-[11px] text-[#5C6670] leading-relaxed">
                    {RDSO_OWNERSHIP.memorandumArticles.description}
                  </p>
                  <span className="text-[11px] font-mono text-[#89939D] block pt-1">
                    Information to be updated
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F3EE] space-y-1.5">
                  <span className="text-[11px] font-bold font-heading text-[#101820] block">
                    Partnership Deed / LLP Agreement
                  </span>
                  <p className="text-[11px] text-[#5C6670] leading-relaxed">
                    {RDSO_OWNERSHIP.partnershipDeed.description}
                  </p>
                  <span className="text-[11px] font-mono font-bold text-[#101820] block pt-1">
                    Not Applicable (Sole Proprietor)
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
