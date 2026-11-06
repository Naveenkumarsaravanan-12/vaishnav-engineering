"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ShieldCheck,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Factory,
  ArrowRight,
  Wrench,
  FileCheck
} from "lucide-react";
import { AnimatedBackground, Reveal, Counter, SectionDivider } from "@/components/motion";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  bayName: string;
  equipment: string;
  specs: string;
  description: string;
  url: string;
}

export default function GalleryPage() {
  const galleryImages: GalleryItem[] = [
    {
      id: "bay-1-cutting",
      title: "CNC Heavy Plate Profile Cutting & Edge Preparation",
      category: "Cutting (Bay 1)",
      bayName: "Cutting Shop • Bay 1",
      equipment: "Koike Flexigraph Multi-Torch CNC",
      specs: "Bed: 3m x 12m • Thickness up to 100mm • Automated Nesting",
      description: "Automated oxy-fuel and high-definition plasma plate cutting with computerized nesting software for bridge webs, flanges, and splice plates.",
      url: "/infrastructure/cnc-cutting.png"
    },
    {
      id: "bay-2-drilling",
      title: "Precision Radial & CNC Plate Drilling for Splice Joints",
      category: "Drilling (Bay 2)",
      bayName: "Drilling Shop • Bay 2",
      equipment: "BOIS CNC Plate & HMT RM-65 Radial Drills",
      specs: "Drilling Dia up to 80mm • Tolerances ±0.2mm • HSFG Bolting",
      description: "High-precision drilling rigs for bridge girder splice plates, web connection joints, and structural gussets with strict pitch tolerances.",
      url: "/infrastructure/drilling.png"
    },
    {
      id: "bay-3-welding",
      title: "Submerged Arc Welding (SAW) & Continuous Girder Fabrication",
      category: "Welding (Bay 3)",
      bayName: "Welding Bay • Bay 3",
      equipment: "Lincoln 1000A SAW Tractors & Fronius MIG",
      specs: "AWS D1.5 & IRS B1 Certified • Deep Flange-to-Web Penetration",
      description: "Heavy beam SAW tractor welders executing continuous, full-penetration fillet and butt welds on heavy railway bridge girder assemblies.",
      url: "/infrastructure/cnc-welding.png"
    },
    {
      id: "bay-4-blasting",
      title: "Automated SA 2.5 Abrasive Shot & Sand Blasting Chamber",
      category: "Surface Prep (Bay 4)",
      bayName: "Surface Prep • Bay 4",
      equipment: "Enclosed Girder Shot Blast Chamber",
      specs: "SA 2.5 Surface Roughness • Profile 40-60 µm • Zero Moisture",
      description: "Thorough removal of mill scale, rust, and oil residues prior to primer application, guaranteeing maximum paint adhesion under IRS standards.",
      url: "/infrastructure/sand-blasting.png"
    },
    {
      id: "bay-4-painting",
      title: "Airless Epoxy Zinc Phosphate Primer & Polyurethane Topcoat",
      category: "Painting (Bay 4)",
      bayName: "Coating Bay • Bay 4",
      equipment: "Graco 450-Bar High Pressure Airless Spray",
      specs: "Total DFT: 225 µm (3-Coat) • RDSO M&C/PCN/102 Compliant",
      description: "Controlled application of zinc-rich epoxy primer, micaceous iron oxide (MIO) intermediate, and UV-resistant aliphatic PU finish.",
      url: "/infrastructure/painting.png"
    },
    {
      id: "assembly-yard",
      title: "Full-Scale Railway Bowstring Girder Trial Assembly Floor",
      category: "Assembly Yard",
      bayName: "Trial Erection Yard",
      equipment: "Laser Alignment & Precision Camber Audit Floor",
      specs: "Spans: 30.5m to 61m • 100% Pre-Dispatch Fitment Guarantee",
      description: "Complete shop trial erection of open-web and bowstring arch spans to verify bolt hole alignments, cambers, and splice geometries.",
      url: "/projects/bridge.jpeg"
    },
    {
      id: "bridge-erection",
      title: "Railway Steel Bowstring Arch Bridge Erection & Launching",
      category: "Bridge Erection",
      bayName: "Site Launching Operation",
      equipment: "Heavy Crawler Cranes & Hydraulic Winch Track",
      specs: "Axle Load: 32.5T Heavy Freight • Night Mega-Block Launching",
      description: "Engineered site erection and incremental launching of massive railway overbridge (ROB) spans across active electrified railway corridors.",
      url: "/projects/bridge-1.png"
    },
    {
      id: "channel-bridge",
      title: "Navigational Channel Bowstring Steel Girder Span",
      category: "Waterway Span",
      bayName: "Heavy Infrastructure Span",
      equipment: "Composite Orthotropic Deck & Parabolic Box Ribs",
      specs: "Design Life: 100+ Years • Fatigue Class UIC-774-3R",
      description: "Completed open-web navigational channel bridge span engineered to withstand high wind loads, seismic forces, and continuous railway traffic.",
      url: "/projects/bridge-2.png"
    }
  ];

  const categories = [
    "All Facilities",
    "Cutting (Bay 1)",
    "Drilling (Bay 2)",
    "Welding (Bay 3)",
    "Surface Prep (Bay 4)",
    "Painting (Bay 4)",
    "Assembly Yard",
    "Bridge Erection",
    "Waterway Span"
  ];

  const [activeCategory, setActiveCategory] = useState("All Facilities");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filteredImages =
    activeCategory === "All Facilities"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const navigateLightbox = useCallback(
    (direction: number) => {
      if (!lightboxImage) return;
      const currentIndex = galleryImages.findIndex((img) => img.url === lightboxImage.url);
      if (currentIndex === -1) return;
      const nextIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
      setLightboxImage(galleryImages[nextIndex]);
    },
    [lightboxImage, galleryImages]
  );

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, navigateLightbox]);

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* 1. EXECUTIVE HEADER SECTION */}
      <section className="relative bg-white border-b border-[#39434D]/20 py-12 sm:py-16 shadow-xs overflow-hidden">
        <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.5} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div className="max-w-3xl">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3 shadow-2xs">
                  <ShieldCheck className="h-4 w-4 text-[#C6A66B]" />
                  <span className="tracking-wide uppercase text-[11px]">
                    RDSO Part-A Approved Manufacturing Facility
                  </span>
                </div>

                {/* Page Title */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#20262D] tracking-tight leading-tight">
                  Workshop Floor & Manufacturing Gallery
                </h1>

                {/* Subtitle */}
                <p className="mt-3 text-sm sm:text-base text-[#5C6670] leading-relaxed font-normal">
                  High-resolution photographic evidence of heavy plate profiling, CNC radial drilling, automated submerged arc welding (SAW), SA 2.5 abrasive blasting, and railway bridge trial assemblies.
                </p>
              </div>
            </Reveal>

            {/* Quick Plant Stats Row */}
            <Reveal direction="right" delay={0.15}>
              <div className="flex flex-wrap lg:flex-col gap-2.5 sm:gap-3 shrink-0">
                <div className="inline-flex items-center gap-2.5 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/20 px-4 py-2.5 text-xs font-semibold text-[#20262D] shadow-2xs hover:border-[#C6A66B] transition-colors">
                  <Factory className="h-4 w-4 text-[#C6A66B]" />
                  <span>
                    <strong className="text-[#101820]"><Counter to={5500} suffix=" MT" /></strong> / Annum RDSO Capacity
                  </span>
                </div>
                <div className="inline-flex items-center gap-2.5 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/20 px-4 py-2.5 text-xs font-semibold text-[#20262D] shadow-2xs hover:border-[#C6A66B] transition-colors">
                  <Wrench className="h-4 w-4 text-[#C6A66B]" />
                  <span>4 Workshop Bays (24m Span, 25T Cranes)</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 2. CATEGORY FILTER PILLS */}
          <div className="mt-10 pt-6 border-t border-[#39434D]/15 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? "bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-sm"
                      : "bg-white text-[#5C6670] border border-[#39434D]/20 hover:bg-[#F5F3EE] hover:text-[#20262D]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GALLERY PHOTO GRID */}
      <section className="relative overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 rounded-3xl p-6 sm:p-8 border border-[#39434D]/15 bg-white/60">
        <AnimatedBackground variant="steel-lines" theme="light" opacity={0.35} />
        
        <div className="relative z-10 space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm font-bold text-[#89939D] uppercase tracking-wider font-mono">
              Displaying {filteredImages.length} Inspection Verification Records
            </p>
            <span className="text-xs text-[#89939D] font-medium hidden sm:inline">Click any photograph to inspect full-size</span>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((img, idx) => (
              <Reveal key={img.id} direction="up" delay={(idx % 12) * 0.05}>
                <div
                  className="rounded-3xl border border-[#39434D]/20 bg-white shadow-sm hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
                >
                  <div>
                    {/* Image Container with Zoom Badge */}
                    <div
                      onClick={() => setLightboxImage(img)}
                      className="relative aspect-[16/10] w-full bg-[#101820] overflow-hidden cursor-pointer select-none border-b border-[#39434D]/20"
                      title="Click to view high-resolution photo"
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

                      {/* Top Left Bay Category Badge */}
                      <span className="absolute top-3.5 left-3.5 rounded-xl bg-[#101820]/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#C6A66B] shadow-xs border border-[#C6A66B]/30">
                        {img.category}
                      </span>

                      {/* Top Right Zoom Indicator */}
                      <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20 shadow-xs group-hover:bg-[#101820] group-hover:text-[#F8F7F2] transition-all">
                        <ZoomIn className="h-3.5 w-3.5 text-[#C6A66B] group-hover:text-[#C6A66B] transition-colors" />
                        <span>Zoom</span>
                      </div>

                      {/* Equipment Overlay at Bottom of Image */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 text-[#F8F7F2]">
                        <p className="text-xs font-mono font-medium drop-shadow-md truncate">
                          {img.equipment}
                        </p>
                      </div>
                    </div>

                    {/* Card Text Content */}
                    <div className="p-6">
                      {/* Bay Sub-heading */}
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C6A66B] block mb-1.5">
                        {img.bayName}
                      </span>

                      {/* Card Title */}
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#20262D] group-hover:text-[#C6A66B] transition-colors leading-snug line-clamp-2">
                        {img.title}
                      </h3>

                      {/* Technical Spec Snippet */}
                      <p className="text-xs font-mono text-[#20262D] mt-3 bg-[#F5F3EE] p-3 rounded-2xl border border-[#39434D]/15 shadow-2xs">
                        {img.specs}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#5C6670] mt-3 leading-relaxed line-clamp-2 font-normal">
                        {img.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Verification Bar */}
                  <div className="px-6 pb-6 pt-3 border-t border-[#39434D]/15 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#20262D] bg-[#E5E8EB] px-3 py-1 rounded-full border border-[#39434D]/20">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#C6A66B]" /> RDSO Audit Verified
                    </span>

                    <button
                      type="button"
                      onClick={() => setLightboxImage(img)}
                      className="text-xs font-bold text-[#20262D] hover:text-[#C6A66B] flex items-center gap-1 cursor-pointer transition active:scale-95"
                    >
                      Inspect <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform text-[#C6A66B]" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUDIT & QUALITY COMPLIANCE FOOTER NOTE */}
      <section className="relative overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 rounded-3xl p-7 sm:p-10 border border-[#39434D]/20 bg-white shadow-sm">
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.35} />
        
        <div className="relative z-10">
          <div className="absolute -top-10 -left-10 -right-10 h-1.5 bg-gradient-to-r from-[#101820] via-[#C6A66B] to-[#39434D]" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div className="max-w-2xl">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C6A66B] flex items-center gap-1.5 mb-2">
                  <FileCheck className="h-4 w-4" /> Comprehensive Quality Assurance Plan (QAP)
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#20262D]">
                  Manufacturing Rigor & NABL Laboratory Surveillance
                </h4>
                <p className="text-xs sm:text-sm text-[#5C6670] mt-2 leading-relaxed">
                  Every photograph in this archive represents live manufacturing activities verified under RDSO B&S guidelines, IRS B1-2001 (Welded Bridge Code), AWS D1.5 bridge welding specifications, and NABL accredited ultrasonic and radiographic testing.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="/approvals/rdso"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-5 py-3 text-xs sm:text-sm font-bold text-[#101820] shadow-md hover:shadow-lg transition active:scale-95"
                >
                  <ShieldCheck className="h-4 w-4" /> View RDSO Certificate
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. FULLSCREEN GALLERY LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#101820]/90 backdrop-blur-xl p-3 sm:p-5 md:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] border border-[#39434D]/30 font-body"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#39434D]/15 px-6 sm:px-8 py-5 bg-[#F5F3EE]">
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="rounded-xl bg-[#101820] text-[#C6A66B] px-3 py-1.5 text-xs font-mono font-bold shrink-0 uppercase border border-[#C6A66B]/30">
                  {lightboxImage.category}
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-base sm:text-xl font-bold text-[#20262D] truncate leading-snug">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-xs text-[#5C6670] font-mono mt-0.5 truncate">
                    {lightboxImage.equipment} • {lightboxImage.specs}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5E8EB] hover:bg-[#101820] text-[#20262D] hover:text-[#F8F7F2] transition cursor-pointer ml-3 border border-[#39434D]/20"
                title="Close (Esc)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 min-h-[320px] sm:min-h-[460px] max-h-[66vh] bg-[#101820] flex items-center justify-center overflow-hidden p-3 sm:p-6">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl select-none"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox(-1);
                }}
                className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 hover:bg-[#101820] text-[#101820] hover:text-[#C6A66B] border border-[#39434D]/20 shadow-xl transition cursor-pointer hover:scale-105 active:scale-95"
                title="Previous Photo (Left Arrow)"
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
                className="absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 hover:bg-[#101820] text-[#101820] hover:text-[#C6A66B] border border-[#39434D]/20 shadow-xl transition cursor-pointer hover:scale-105 active:scale-95"
                title="Next Photo (Right Arrow)"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Description Footer */}
            <div className="border-t border-[#39434D]/15 bg-white px-6 sm:px-8 py-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="max-w-2xl">
                  <span className="font-bold text-[#20262D] block mb-1">{lightboxImage.bayName}</span>
                  <p className="text-[#5C6670] leading-relaxed font-normal">{lightboxImage.description}</p>
                </div>
                <div className="text-[#89939D] font-mono text-[11px] shrink-0">
                  Press <kbd className="px-2 py-0.5 rounded bg-[#E5E8EB] border border-[#39434D]/20 text-[#20262D] font-bold">Esc</kbd> to close • <kbd className="px-2 py-0.5 rounded bg-[#E5E8EB] border border-[#39434D]/20 text-[#20262D] font-bold">←</kbd> <kbd className="px-2 py-0.5 rounded bg-[#E5E8EB] border border-[#39434D]/20 text-[#20262D] font-bold">→</kbd> to navigate
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
