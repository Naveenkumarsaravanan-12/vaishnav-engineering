"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Search, Zap, ChevronRight, CheckCircle2 } from "lucide-react";
import { RDSO_CHECKLIST_MAPPING } from "@/data/portalData";
import { AnimatedBackground } from "@/components/motion";

interface QuickAuditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickAuditDrawer({ isOpen, onClose }: QuickAuditDrawerProps) {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const filteredItems = RDSO_CHECKLIST_MAPPING.filter(
    (item) =>
      item.requirement.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tabName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#101820]/80 backdrop-blur-md">
      <div className="flex h-full w-full max-w-xl flex-col bg-white border-l border-[#39434D]/30 text-[#20262D] shadow-2xl font-body animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#39434D]/15 bg-[#F5F3EE] px-7 py-5">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-xs">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-[#20262D] leading-tight">30-Second Audit Evidence Finder</h2>
              <p className="text-xs text-[#5C6670] mt-0.5">Direct links to all 11 RDSO Inspection Checklist items</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5E8EB] hover:bg-[#101820] text-[#20262D] hover:text-[#F8F7F2] transition cursor-pointer border border-[#39434D]/20"
            title="Close Drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-5 border-b border-[#39434D]/15 bg-white">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-[#89939D]" />
            <input
              type="text"
              placeholder="Search checklist item, certificate, machine, power..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-[#39434D]/25 bg-[#F5F3EE] py-3 pl-11 pr-4 text-xs sm:text-sm text-[#20262D] placeholder-[#89939D] focus:border-[#C6A66B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C6A66B] transition shadow-2xs"
            />
          </div>
        </div>

        {/* List of Checklist Items with subtle animated blueprint background */}
        <div className="relative flex-1 overflow-y-auto p-6 space-y-3 bg-[#F5F3EE]/60">
          <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.2} />
          
          <div className="relative z-10 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#89939D] mb-2 font-mono">
              Inspection Sheet Direct Navigation ({filteredItems.length} Checklist Items)
            </p>

            {filteredItems.map((item) => (
              <Link
                key={item.itemNo}
                href={item.href}
                onClick={onClose}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-[#39434D]/20 bg-white/95 backdrop-blur-xs p-4.5 transition-all duration-200 hover:border-[#C6A66B] hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#E5E8EB] text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20">
                    #{item.itemNo}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#20262D] group-hover:text-[#C6A66B] transition-colors leading-snug">
                      {item.requirement}
                    </h4>
                    <p className="mt-1 text-xs text-[#5C6670] flex items-center gap-1.5 font-medium">
                      <span className="font-mono text-[#C6A66B] font-semibold">{item.tabName}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#101820] px-2.5 py-0.5 text-xs font-bold text-[#C6A66B] border border-[#C6A66B]/30 shadow-2xs">
                    <CheckCircle2 className="h-3 w-3 text-[#C6A66B]" /> {item.status}
                  </span>
                  <ChevronRight className="h-4 w-4 text-[#89939D] group-hover:text-[#C6A66B] group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#39434D]/15 bg-white px-7 py-4.5 flex items-center justify-between text-xs text-[#5C6670]">
          <span>Vaishnav Engineering RDSO Audit Portal</span>
          <span className="text-[#20262D] font-bold flex items-center gap-1 font-mono">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> 100% Audit Readiness
          </span>
        </div>
      </div>
    </div>
  );
}
