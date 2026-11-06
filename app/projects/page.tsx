"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { HardHat, Calendar, CheckCircle2, Clock, MapPin, X, Maximize2, ChevronLeft, ChevronRight, ZoomIn, LayoutGrid, Columns2, ShieldCheck } from "lucide-react";
import { PROJECTS_DATA, EXECUTED_WORKS_LOG, WORKS_IN_HAND, ProjectItem } from "@/data/portalData";
import { AnimatedBackground, Reveal, SectionDivider } from "@/components/motion";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"top10" | "executed" | "current">("top10");
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);
  const [layoutMode, setLayoutMode] = useState<"dossier" | "grid">("dossier");

  const navigateLightbox = useCallback((direction: number) => {
    if (!lightboxProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === lightboxProject.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    setLightboxProject(PROJECTS_DATA[nextIndex]);
  }, [lightboxProject]);

  useEffect(() => {
    if (!lightboxProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxProject(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxProject, navigateLightbox]);

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* Header Banner with Floating Shapes Background */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-xs overflow-hidden">
        <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.55} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3 shadow-2xs">
                  <HardHat className="h-4 w-4 text-[#C6A66B]" /> TAB 7: Projects & Execution Track Record
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Railway Infrastructure Projects Portfolio
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Field-proven portfolio of heavy steel bowstring arches, composite plate girders, and open-web railway overbridges fabricated for Indian Railways and national infrastructure authorities.
                </p>
              </div>
            </Reveal>

            {/* Sub-tab Switcher */}
            <Reveal direction="right" delay={0.15}>
              <div className="flex flex-wrap rounded-2xl border border-[#39434D]/20 bg-[#E5E8EB] p-1.5 gap-1 shrink-0 shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab("top10")}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "top10"
                      ? "bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-sm"
                      : "text-[#5C6670] hover:text-[#20262D] hover:bg-white"
                  }`}
                >
                  1. Top Projects
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("executed")}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "executed"
                      ? "bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-sm"
                      : "text-[#5C6670] hover:text-[#20262D] hover:bg-white"
                  }`}
                >
                  2. Executed Works (5 Yrs)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("current")}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "current"
                      ? "bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-sm"
                      : "text-[#5C6670] hover:text-[#20262D] hover:bg-white"
                  }`}
                >
                  3. Works in Hand (Active Progress)
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* TAB 1: TOP PROJECTS */}
        {activeTab === "top10" && (
          <div className="space-y-8">
            {/* View Switcher Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#39434D]/15 pb-5">
              <Reveal direction="left" delay={0.05}>
                <div>
                  <p className="font-heading text-lg font-bold text-[#20262D] flex items-center gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-[#C6A66B]" /> Major Executed Heavy Steel Bridges & Rail Structures
                  </p>
                  <p className="text-xs text-[#5C6670] mt-1 font-normal">
                    Click or touch any project photo to inspect full high-resolution engineering details
                  </p>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.1}>
                <div className="flex items-center gap-1.5 bg-white border border-[#39434D]/20 rounded-2xl p-1.5 text-xs shadow-xs">
                  <span className="text-[#89939D] px-2 font-mono text-[11px] hidden sm:inline uppercase tracking-wider">Layout:</span>
                  <button
                    type="button"
                    onClick={() => setLayoutMode("dossier")}
                    className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 font-bold transition cursor-pointer ${
                      layoutMode === "dossier"
                        ? "bg-[#101820] text-[#C6A66B] shadow-xs"
                        : "text-[#5C6670] hover:text-[#20262D]"
                    }`}
                    title="Widescreen Dossier View"
                  >
                    <Columns2 className="h-3.5 w-3.5" />
                    <span>Panoramic Showcase</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLayoutMode("grid")}
                    className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 font-bold transition cursor-pointer ${
                      layoutMode === "grid"
                        ? "bg-[#101820] text-[#C6A66B] shadow-xs"
                        : "text-[#5C6670] hover:text-[#20262D]"
                    }`}
                    title="Balanced 2-Column Grid View"
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                    <span>2-Column Grid</span>
                  </button>
                </div>
              </Reveal>
            </div>

            {/* 1. PANORAMIC DOSSIER VIEW */}
            {layoutMode === "dossier" && (
              <div className="space-y-8">
                {PROJECTS_DATA.map((p, idx) => (
                  <Reveal key={p.id} direction="up" delay={(idx % 6) * 0.08}>
                    <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#C6A66B] hover:shadow-xl hover:-translate-y-1">
                      <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.35} />
                      
                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                        {/* Photo Showcase Frame (7 cols) */}
                        <div className="lg:col-span-7">
                          <div
                            onClick={() => setLightboxProject(p)}
                            className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#101820] cursor-pointer group/img border border-[#39434D]/20 shadow-xs select-none"
                            title="Touch to view enlarged photo"
                          >
                            <img
                              src={p.image}
                              alt={p.title}
                              className="h-full w-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/80 via-transparent to-transparent pointer-events-none" />

                            {/* Top-Left: Status HUD */}
                            <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-full bg-[#101820]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#39434D] text-[#F8F7F2] text-xs font-bold shadow-xs">
                              <span className="h-2 w-2 rounded-full bg-[#C6A66B] animate-pulse" />
                              <span>{p.status}</span>
                            </div>

                            {/* Top-Right: Interactive Zoom Cue */}
                            <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 border border-[#39434D]/20 text-[#20262D] text-xs font-bold shadow-xs group-hover:bg-[#101820] group-hover:text-[#F8F7F2] transition-all">
                              <ZoomIn className="h-3.5 w-3.5 text-[#C6A66B]" />
                              <span>Enlarge</span>
                            </div>

                            {/* Bottom-Left: Location */}
                            <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-xs text-[#F8F7F2] font-medium bg-[#101820]/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#39434D]">
                              <MapPin className="h-3.5 w-3.5 text-[#C6A66B]" />
                              <span>{p.location}</span>
                            </div>

                            {/* Bottom-Right: Tonnage */}
                            <div className="absolute bottom-3.5 right-3.5 rounded-xl bg-[#C6A66B] px-3.5 py-1.5 text-xs font-mono font-bold text-[#101820] shadow-sm">
                              {p.tonnage}
                            </div>
                          </div>
                        </div>

                        {/* Technical Dossier (5 cols) */}
                        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                          <div>
                            <div className="flex items-center justify-between text-xs font-mono text-[#89939D] mb-2.5">
                              <span className="text-[#C6A66B] font-bold tracking-wider">PROJECT 0{idx + 1}</span>
                              <span className="rounded-lg bg-[#E5E8EB] px-2.5 py-1 text-[11px] text-[#20262D] border border-[#39434D]/20 font-bold">
                                RDSO B&S Compliant
                              </span>
                            </div>

                            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#20262D] tracking-tight leading-snug">
                              {p.title}
                            </h3>

                            <p className="mt-3 text-xs sm:text-sm text-[#5C6670] leading-relaxed font-normal">
                              {p.description}
                            </p>
                          </div>

                          {/* Specification Bento Grid */}
                          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15 p-4.5 text-xs font-mono shadow-2xs">
                            <div>
                              <span className="text-[11px] text-[#89939D] block font-sans font-medium uppercase tracking-wider">Client Authority</span>
                              <span className="font-bold text-[#20262D] truncate block mt-1">{p.client}</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-[#89939D] block font-sans font-medium uppercase tracking-wider">Completion Year</span>
                              <span className="font-bold text-[#20262D] block mt-1">{p.year}</span>
                            </div>
                            <div className="col-span-2 pt-2.5 border-t border-[#39434D]/15">
                              <span className="text-[11px] text-[#89939D] block font-sans font-medium uppercase tracking-wider">Span Specification</span>
                              <span className="font-bold text-[#C6A66B] block leading-tight mt-1">{p.spanDetails}</span>
                            </div>
                          </div>

                          {/* Action Bar */}
                          <div className="pt-3 flex items-center justify-between gap-3 border-t border-[#39434D]/15">
                            <span className="text-xs font-mono text-[#20262D] flex items-center gap-1.5 font-bold">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C6A66B]" /> RDSO Inspected & Passed
                            </span>

                            <button
                              type="button"
                              onClick={() => setLightboxProject(p)}
                              className="inline-flex items-center gap-1.5 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2.5 text-xs font-bold text-[#101820] shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
                            >
                              <Maximize2 className="h-3.5 w-3.5" />
                              <span>Inspect 4K Photo</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>
            )}

            {/* 2. BALANCED 2-COLUMN GRID VIEW */}
            {layoutMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {PROJECTS_DATA.map((p, idx) => (
                  <Reveal key={p.id} direction="up" delay={(idx % 6) * 0.08}>
                    <div
                      className="rounded-3xl border border-[#39434D]/20 bg-white overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#C6A66B] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                    >
                      <div>
                        {/* Standardized 16:9 Aspect Ratio Frame */}
                        <div
                          onClick={() => setLightboxProject(p)}
                          className="relative aspect-[16/9] w-full bg-[#101820] overflow-hidden cursor-pointer group/img select-none border-b border-[#39434D]/20"
                          title="Touch to view enlarged photo"
                        >
                          <img
                            src={p.image}
                            alt={p.title}
                            className="h-full w-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/80 via-transparent to-transparent pointer-events-none" />

                          {/* Status */}
                          <span className="absolute top-3.5 left-3.5 rounded-full bg-[#101820]/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#F8F7F2] border border-[#39434D]">
                            <CheckCircle2 className="h-3.5 w-3.5 inline mr-1 text-[#C6A66B]" /> {p.status}
                          </span>

                          {/* Touch pill */}
                          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20 shadow-xs group-hover:bg-[#101820] group-hover:text-[#F8F7F2] transition-all">
                            <ZoomIn className="h-3.5 w-3.5 text-[#C6A66B]" />
                            <span>Tap to zoom</span>
                          </div>

                          {/* Tonnage */}
                          <span className="absolute bottom-3.5 right-3.5 rounded-xl bg-[#C6A66B] px-3.5 py-1 text-xs font-mono font-bold text-[#101820] shadow-xs">
                            {p.tonnage}
                          </span>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 sm:p-7 space-y-4">
                          <div className="min-h-[58px]">
                            <span className="text-[11px] font-mono text-[#C6A66B] font-bold block mb-1">PROJECT 0{idx + 1}</span>
                            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#20262D] leading-snug">{p.title}</h3>
                          </div>

                          <p className="text-xs sm:text-sm text-[#5C6670] leading-relaxed min-h-[48px] line-clamp-3 font-normal">
                            {p.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-[#F5F3EE] p-4 text-xs font-mono border border-[#39434D]/15 shadow-2xs">
                            <div>
                              <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Client:</span>
                              <span className="font-bold text-[#20262D] truncate block mt-0.5">{p.client}</span>
                            </div>
                            <div>
                              <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Year:</span>
                              <span className="font-bold text-[#20262D] block mt-0.5">{p.year}</span>
                            </div>
                            <div className="col-span-2 pt-2 border-t border-[#39434D]/15">
                              <span className="text-[#89939D] block text-[11px] font-sans font-medium uppercase tracking-wider">Span Specification:</span>
                              <span className="font-bold text-[#C6A66B] block truncate mt-0.5">{p.spanDetails}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Locked Footer */}
                      <div className="p-6 sm:p-7 pt-0 border-t border-[#39434D]/15 mt-4 flex items-center justify-between text-xs text-[#5C6670]">
                        <span className="flex items-center gap-1.5 text-[#20262D] font-medium truncate">
                          <MapPin className="h-4 w-4 text-[#C6A66B] shrink-0" /> {p.location}
                        </span>
                        <button
                          type="button"
                          onClick={() => setLightboxProject(p)}
                          className="text-[#C6A66B] hover:text-[#20262D] font-bold flex items-center gap-1 cursor-pointer shrink-0 ml-2"
                        >
                          <span>Enlarge</span> <Maximize2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: EXECUTED WORKS LOG */}
        {activeTab === "executed" && (
          <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white shadow-sm p-2 sm:p-4">
            <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.35} />
            
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#39434D]/15 bg-white">
              <div className="border-b border-[#39434D]/15 bg-[#F5F3EE] px-7 py-5 flex items-center justify-between">
                <Reveal direction="left" delay={0.05}>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#20262D] flex items-center gap-2.5">
                    <Calendar className="h-5 w-5 text-[#C6A66B]" /> 5-Year Executed Projects Log (2021 - 2025)
                  </h3>
                </Reveal>
                <Reveal direction="right" delay={0.1}>
                  <span className="text-xs font-mono text-[#C6A66B] font-bold uppercase tracking-wider bg-[#101820] px-3 py-1 rounded-full border border-[#C6A66B]/30 shadow-2xs">
                    RDSO Inspection Requirement
                  </span>
                </Reveal>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-[#20262D]">
                  <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                    <tr>
                      <th className="px-6 py-4">Execution Year</th>
                      <th className="px-6 py-4">Railway Division / Client</th>
                      <th className="px-6 py-4">Spans / Structures Executed</th>
                      <th className="px-6 py-4">Tonnage Delivered</th>
                      <th className="px-6 py-4">Inspection Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#39434D]/10 bg-white">
                    {EXECUTED_WORKS_LOG.map((log, idx) => (
                      <tr key={idx} className="hover:bg-[#F5F3EE] transition-colors">
                        <td className="px-6 py-4 font-mono font-bold text-[#C6A66B]">{log.year}</td>
                        <td className="px-6 py-4 font-bold text-[#20262D]">{log.client}</td>
                        <td className="px-6 py-4 text-[#5C6670] font-medium">{log.spans}</td>
                        <td className="px-6 py-4 font-mono font-bold text-[#C6A66B]">{log.tonnage}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5E8EB] px-3 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: WORKS IN HAND */}
        {activeTab === "current" && (
          <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-10 shadow-sm space-y-8">
            <AnimatedBackground variant="steel-lines" theme="light" opacity={0.35} />
            
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between border-b border-[#39434D]/15 pb-6 gap-3">
                <Reveal direction="left" delay={0.05}>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#20262D] flex items-center gap-2.5">
                      <Clock className="h-5 w-5 text-[#C6A66B]" /> Active Works in Hand & Manufacturing Progress
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C6670] mt-1">Live fabrication progress tracking for current Railway Orders</p>
                  </div>
                </Reveal>
                <Reveal direction="right" delay={0.1}>
                  <span className="rounded-full bg-[#E5E8EB] px-4 py-1.5 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 uppercase tracking-wider">
                    3 Major Packages
                  </span>
                </Reveal>
              </div>

              <div className="space-y-6">
                {WORKS_IN_HAND.map((work, idx) => (
                  <Reveal key={idx} direction="up" delay={idx * 0.08}>
                    <div className="rounded-2xl border border-[#39434D]/20 bg-[#F5F3EE] p-6 sm:p-7 space-y-4 shadow-2xs hover:border-[#C6A66B] hover:shadow-md transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-xs text-[#C6A66B] font-bold uppercase tracking-wider font-mono">{work.client}</span>
                          <h4 className="font-heading text-lg sm:text-xl font-bold text-[#20262D] mt-1">{work.title}</h4>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-mono font-bold text-[#20262D]">{work.tonnage}</span>
                          <p className="text-xs text-[#5C6670] mt-0.5">Target: <strong className="text-[#20262D]">{work.expectedCompletion}</strong></p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono font-bold">
                          <span className="text-[#5C6670]">{work.status}</span>
                          <span className="text-[#20262D]">{work.progress}% Completed</span>
                        </div>
                        <div className="h-3.5 w-full rounded-full bg-[#E5E8EB] overflow-hidden shadow-inner">
                          <div
                            className="h-full bg-gradient-to-r from-[#101820] to-[#C6A66B] rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${work.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* FULLSCREEN PROJECT PHOTO LIGHTBOX CINEMA MODAL */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#101820]/90 backdrop-blur-md p-3 sm:p-5 md:p-8"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-white border border-[#39434D]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[96vh] font-body"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#39434D]/15 px-6 sm:px-8 py-5 bg-[#F5F3EE]">
              <div className="flex items-center gap-4 min-w-0">
                <span className="rounded-xl bg-[#C6A66B] px-3.5 py-1.5 text-xs font-mono font-bold text-[#101820] shrink-0 shadow-xs">
                  {lightboxProject.tonnage}
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#20262D] tracking-tight leading-snug truncate">
                    {lightboxProject.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#5C6670] mt-1">
                    <span className="font-semibold text-[#20262D]">{lightboxProject.client}</span>
                    <span>•</span>
                    <span>Year {lightboxProject.year}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-[#20262D] font-bold">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> {lightboxProject.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxProject(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5E8EB] hover:bg-[#101820] text-[#20262D] hover:text-[#F8F7F2] transition-all cursor-pointer border border-[#39434D]/20 shadow-xs ml-4"
                title="Close (Esc)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 min-h-[340px] sm:min-h-[480px] max-h-[66vh] sm:max-h-[70vh] bg-[#101820] flex items-center justify-center overflow-hidden p-3 sm:p-6">
              <img
                src={lightboxProject.image}
                alt={lightboxProject.title}
                className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl transition duration-300 select-none"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox(-1);
                }}
                className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 hover:bg-[#101820] text-[#101820] hover:text-[#C6A66B] border border-[#39434D]/20 backdrop-blur-xl shadow-lg transition duration-200 cursor-pointer hover:scale-105 active:scale-95"
                title="Previous Project (Left Arrow)"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox(1);
                }}
                className="absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 hover:bg-[#101820] text-[#101820] hover:text-[#C6A66B] border border-[#39434D]/20 backdrop-blur-xl shadow-lg transition duration-200 cursor-pointer hover:scale-105 active:scale-95"
                title="Next Project (Right Arrow)"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-[#39434D]/15 bg-[#F5F3EE] px-6 sm:px-8 py-5 space-y-4">
              {/* Specification Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                <div className="rounded-2xl bg-white border border-[#39434D]/20 p-3.5 shadow-xs">
                  <span className="text-[10px] uppercase text-[#89939D] block tracking-wider font-mono font-medium">Span Details</span>
                  <span className="font-bold text-[#20262D] truncate block mt-1 font-sans">{lightboxProject.spanDetails}</span>
                </div>
                <div className="rounded-2xl bg-white border border-[#39434D]/20 p-3.5 shadow-xs">
                  <span className="text-[10px] uppercase text-[#89939D] block tracking-wider font-mono font-medium">Client Authority</span>
                  <span className="font-bold text-[#20262D] truncate block mt-1 font-sans">{lightboxProject.client}</span>
                </div>
                <div className="rounded-2xl bg-white border border-[#39434D]/20 p-3.5 shadow-xs">
                  <span className="text-[10px] uppercase text-[#89939D] block tracking-wider font-mono font-medium">Erection Location</span>
                  <span className="font-bold text-[#20262D] truncate block mt-1 flex items-center gap-1 font-sans">
                    <MapPin className="h-3.5 w-3.5 text-[#C6A66B] shrink-0" /> {lightboxProject.location}
                  </span>
                </div>
                <div className="rounded-2xl bg-white border border-[#39434D]/20 p-3.5 shadow-xs">
                  <span className="text-[10px] uppercase text-[#89939D] block tracking-wider font-mono font-medium">Certification</span>
                  <span className="font-bold text-[#20262D] truncate block mt-1 flex items-center gap-1 font-sans">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#C6A66B] shrink-0" /> RDSO Approved
                  </span>
                </div>
              </div>

              {/* Engineering Description & Navigation hint */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#39434D]/15">
                <p className="text-xs sm:text-sm text-[#5C6670] font-normal leading-relaxed max-w-3xl">
                  {lightboxProject.description}
                </p>
                <span className="text-[11px] font-mono text-[#89939D] shrink-0">
                  Esc to close • ← / → navigate
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}