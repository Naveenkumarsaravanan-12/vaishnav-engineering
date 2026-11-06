"use client";

import { useEffect, useRef, useState } from "react";
import {
  Compass,
  ChevronRight,
  ShieldCheck,
  ListFilter,
  X,
  FileCheck2,
  CheckCircle2
} from "lucide-react";
import { RDSO_SECTIONS_DIRECTORY } from "@/data/rdsoData";

interface RdsoNavProps {
  activeSection: string;
  onScrollToSection: (id: string) => void;
}

/**
 * Desktop & Tablet Vertical Sidebar Navigation
 * Occupies the left column (approx 260px desktop, 220px tablet) with independent vertical scrolling
 */
export function RdsoVerticalNav({ activeSection, onScrollToSection }: RdsoNavProps) {
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeIndex = RDSO_SECTIONS_DIRECTORY.findIndex((s) => s.id === activeSection);
  const currentSection = RDSO_SECTIONS_DIRECTORY[activeIndex >= 0 ? activeIndex : 0];

  // Keep active item in view inside the sidebar's scroll container
  useEffect(() => {
    if (activeSection && itemRefs.current[activeSection]) {
      const activeEl = itemRefs.current[activeSection];
      const container = scrollContainerRef.current;
      if (activeEl && container) {
        const elTop = activeEl.offsetTop;
        const elBottom = elTop + activeEl.clientHeight;
        const containerTop = container.scrollTop;
        const containerBottom = containerTop + container.clientHeight;

        if (elTop < containerTop || elBottom > containerBottom) {
          activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }
    }
  }, [activeSection]);

  return (
    <nav
      aria-label="RDSO 13 Compliance Sections Vertical Sidebar"
      className="w-full h-[calc(100vh-96px)] max-h-[850px] flex flex-col rounded-2xl bg-[#101820] border border-[#39434D]/80 shadow-2xl overflow-hidden select-none"
    >
      {/* Top Header Card */}
      <div className="p-3.5 sm:p-4 bg-gradient-to-b from-[#16202A] to-[#101820] border-b border-[#39434D]/70 shrink-0">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D6B36A] animate-pulse" />
            <span className="text-[10.5px] font-mono font-extrabold text-[#D6B36A] uppercase tracking-wider">
              RDSO Compliance
            </span>
          </div>
          <span className="font-mono text-[10px] font-bold text-[#101820] bg-[#D6B36A] px-2 py-0.5 rounded-full shadow-xs">
            {currentSection.number} / 13
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Compass className="h-4 w-4 text-[#D6B36A] shrink-0" />
          <h3 className="font-heading text-xs sm:text-sm font-bold text-white tracking-tight truncate">
            Sections Directory
          </h3>
        </div>
      </div>

      {/* Independent Scrollable 13 Sections List */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-2 sm:p-2.5 space-y-1 scrollbar-thin scrollbar-thumb-[#39434D] scrollbar-track-transparent"
      >
        {RDSO_SECTIONS_DIRECTORY.map((sec) => {
          const isActive = activeSection === sec.id;

          return (
            <button
              key={sec.id}
              ref={(el) => {
                itemRefs.current[sec.id] = el;
              }}
              type="button"
              onClick={() => onScrollToSection(sec.id)}
              className={`w-full text-left rounded-xl px-2.5 sm:px-3 py-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2.5 group relative ${
                isActive
                  ? "bg-[#D6B36A] text-[#101820] font-extrabold shadow-md shadow-[#D6B36A]/20 border border-[#D6B36A]"
                  : "bg-transparent text-[#9CA3AF] hover:text-white hover:bg-[#1A222A] border border-transparent"
              }`}
            >
              {/* Section Number Badge */}
              <span
                className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded shrink-0 transition-colors ${
                  isActive
                    ? "bg-[#101820]/15 text-[#101820] font-black"
                    : "bg-[#16202A] text-[#D6B36A] border border-[#39434D]/50 group-hover:border-[#D6B36A]/40"
                }`}
              >
                {sec.number}
              </span>

              {/* Section Title */}
              <span
                className={`truncate flex-1 leading-snug ${
                  isActive ? "text-[#101820] font-bold" : "text-[#C8D1D9] group-hover:text-white font-medium"
                }`}
                title={sec.title}
              >
                {sec.title}
              </span>

              {/* Active Selection Indicator Arrow */}
              {isActive && (
                <ChevronRight className="h-3.5 w-3.5 text-[#101820] shrink-0 ml-auto" />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Status Card */}
      <div className="p-3 bg-[#141C24] border-t border-[#39434D]/60 shrink-0 text-[11px]">
        <div className="flex items-center justify-between text-[#8C97A4] font-mono text-[10px]">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <CheckCircle2 className="h-3 w-3" />
            Verified Roster
          </span>
          <span className="text-[#D6B36A] font-bold">Part-A</span>
        </div>
      </div>
    </nav>
  );
}

/**
 * Mobile Collapsible Drawer Navigation (Active only on mobile screens < md)
 * Eliminates horizontal overflowing navigation bar on mobile
 */
export function RdsoMobileNav({ activeSection, onScrollToSection }: RdsoNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeIndex = RDSO_SECTIONS_DIRECTORY.findIndex((s) => s.id === activeSection);
  const currentSection = RDSO_SECTIONS_DIRECTORY[activeIndex >= 0 ? activeIndex : 0];

  return (
    <>
      {/* Sticky Mobile Bar below Navbar */}
      <div className="bg-[#101820]/95 backdrop-blur-md border-b border-[#39434D] px-4 py-2.5 shadow-lg flex items-center justify-between gap-3 select-none">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-mono text-xs font-bold text-[#101820] bg-[#D6B36A] px-2 py-0.5 rounded-md shrink-0 shadow-xs">
            SEC {currentSection.number}
          </span>
          <span className="text-xs font-bold text-white truncate">
            {currentSection.title}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 rounded-xl bg-[#202A33] px-3 py-1.5 text-xs font-bold text-[#D6B36A] border border-[#D6B36A]/40 shrink-0 hover:bg-[#2B3844] active:scale-95 transition cursor-pointer"
          aria-label="Open 13 sections navigation drawer"
        >
          <ListFilter className="h-3.5 w-3.5" />
          <span>Sections (13)</span>
        </button>
      </div>

      {/* Mobile Slide-up Drawer Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#101820]/80 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full sm:max-w-md max-h-[85vh] rounded-t-3xl sm:rounded-3xl bg-[#101820] border border-[#39434D] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 bg-[#16202A] border-b border-[#39434D]">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-[#D6B36A]" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">
                    RDSO Compliance Sections
                  </h4>
                  <p className="text-[11px] font-mono text-[#D6B36A]">
                    Select a section to navigate (1–13)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#202A33] text-white hover:bg-white hover:text-[#101820] transition cursor-pointer"
                aria-label="Close navigation drawer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Vertical List of All 13 Sections */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 max-h-[60vh]">
              {RDSO_SECTIONS_DIRECTORY.map((sec) => {
                const isActive = activeSection === sec.id;

                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => {
                      onScrollToSection(sec.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left rounded-xl px-3.5 py-3 text-xs font-semibold flex items-center justify-between gap-3 transition-colors ${
                      isActive
                        ? "bg-[#D6B36A] text-[#101820] font-extrabold shadow-md shadow-[#D6B36A]/20"
                        : "bg-[#16202A] text-[#E5E8EB] hover:bg-[#202A33] hover:text-[#D6B36A] border border-[#39434D]/40"
                    }`}
                  >
                    <span className="flex items-center gap-2.5 truncate">
                      <span
                        className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                          isActive
                            ? "bg-[#101820]/20 text-[#101820]"
                            : "bg-[#202A33] text-[#D6B36A]"
                        }`}
                      >
                        {sec.number}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </span>

                    {isActive ? (
                      <span className="text-[10px] font-mono font-bold uppercase bg-[#101820] text-[#D6B36A] px-2 py-0.5 rounded-full shrink-0">
                        Active
                      </span>
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 text-[#89939D] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Default export for backwards compatibility
export default RdsoVerticalNav;
