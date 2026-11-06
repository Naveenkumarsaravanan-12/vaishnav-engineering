"use client";

import { useState } from "react";
import { ChevronDown, ListFilter, Compass } from "lucide-react";
import { RDSO_SECTIONS_DIRECTORY } from "@/data/rdsoData";

interface RdsoStickyNavProps {
  activeSection: string;
  onScrollToSection: (id: string) => void;
}

export default function RdsoStickyNav({ activeSection, onScrollToSection }: RdsoStickyNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentSection = RDSO_SECTIONS_DIRECTORY.find((s) => s.id === activeSection) || RDSO_SECTIONS_DIRECTORY[0];

  return (
    <nav
      aria-label="RDSO 13 Compliance Sections Navigator"
      className="sticky top-18 sm:top-[72px] z-30 bg-[#101820]/95 backdrop-blur-md border-b border-[#39434D] py-2.5 sm:py-3 shadow-lg transition-all"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Label on left */}
          <div className="hidden xl:flex items-center gap-2 text-xs font-mono font-bold text-[#E5E7EB] uppercase tracking-wider shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#D6B36A] animate-pulse" />
            <Compass className="h-3.5 w-3.5 text-[#D6B36A]" />
            <span>Sections (1-13):</span>
          </div>

          {/* Desktop & Tablet: Horizontal Scrollable Pills */}
          <div className="hidden md:flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 w-full xl:w-auto">
            {RDSO_SECTIONS_DIRECTORY.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => onScrollToSection(sec.id)}
                  className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "bg-[#D6B36A] text-[#101820] font-extrabold shadow-sm shadow-[#D6B36A]/30 ring-1 ring-[#D6B36A]"
                      : "bg-[#202A33]/80 text-[#89939D] hover:text-white hover:bg-[#202A33] border border-[#39434D]/60"
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isActive ? "text-[#101820]" : "text-[#D6B36A]"}`}>
                    {sec.number}
                  </span>
                  <span>{sec.title}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile View: Quick Dropdown Button & Current Section display */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#D6B36A] bg-[#202A33] px-2 py-0.5 rounded-md border border-[#39434D]">
                SEC {currentSection.number}
              </span>
              <span className="text-xs font-bold text-white truncate max-w-[200px]">
                {currentSection.title}
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-1.5 rounded-lg bg-[#202A33] px-3 py-1.5 text-xs font-bold text-[#D6B36A] border border-[#D6B36A]/30"
              aria-label="Toggle all 13 sections menu"
            >
              <ListFilter className="h-3.5 w-3.5" />
              <span>Jump To</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${mobileMenuOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#39434D] max-h-72 overflow-y-auto space-y-1.5 pb-2">
            {RDSO_SECTIONS_DIRECTORY.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    onScrollToSection(sec.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left rounded-lg px-3 py-2 text-xs font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-[#D6B36A] text-[#101820] font-bold"
                      : "text-[#E5E7EB] hover:bg-[#202A33] hover:text-[#D6B36A]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[11px] opacity-75">{sec.number}.</span>
                    <span>{sec.title}</span>
                  </span>
                  {isActive && <span className="text-[10px] font-mono font-bold uppercase">Active</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

