"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Sparkles } from "lucide-react";

export interface NavSectionItem {
  id: string;
  label: string;
  shortLabel?: string;
}

interface SectionNavProps {
  sections: NavSectionItem[];
  badgeText?: string;
}

export default function SectionNav({
  sections,
  badgeText = "Section Directory",
}: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    if (sections.length === 0) return;
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      aria-label="Section directory"
      className="sticky top-18 sm:top-[72px] z-30 bg-[#101820]/95 backdrop-blur-md border-b border-[#39434D]/70 py-2.5 sm:py-3 shadow-md transition-all"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#89939D] uppercase tracking-wider shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#C6A66B]" />
            Jump To:
          </span>

          {/* Scrollable pill row on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 w-full md:w-auto">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`shrink-0 rounded-xl px-3.5 sm:px-4 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "bg-[#C6A66B] text-[#101820] font-bold shadow-sm shadow-[#C6A66B]/30 ring-1 ring-[#C6A66B]"
                      : "bg-[#202A33]/80 text-[#89939D] hover:text-[#F8F7F2] hover:bg-[#202A33] border border-[#39434D]/40"
                  }`}
                >
                  <span className="hidden sm:inline">{sec.label}</span>
                  <span className="inline sm:hidden">{sec.shortLabel || sec.label}</span>
                  {isActive && <ChevronRight className="h-3.5 w-3.5 text-[#101820]" />}
                </button>
              );
            })}
          </div>

          {/* Indicator */}
          {badgeText && (
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#C6A66B] shrink-0 font-bold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{badgeText}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
