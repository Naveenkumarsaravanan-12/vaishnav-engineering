"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  RotateCcw,
  Layers,
  Activity,
  CheckCircle2,
  HardHat,
  Building2,
  Gauge,
  Cpu,
  ArrowRight,
  Grid3X3,
  SlidersHorizontal,
  Compass,
  FileCheck,
  Maximize2,
  Sparkles,
  Award,
  Flame,
  Search,
  Wrench,
  Truck
} from "lucide-react";

export interface FabricationStageData {
  step: string;
  number: number;
  title: string;
  category: "Engineering & CAD" | "Material & Preparation" | "Fabrication & Welding" | "Quality Audit & Testing" | "Surface & Dispatch";
  badgeColor: string;
  badgeBorder: string;
  description: string;
  detailedNotes: string;
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  keyMilestone: string;
}

export const FABRICATION_STAGES: FabricationStageData[] = [
  {
    step: "01",
    number: 1,
    title: "APPROVED DRAWINGS",
    category: "Engineering & CAD",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Engineer studies railway girder fabrication drawings and BOM.",
    detailedNotes: "Comprehensive structural shop drawing analysis, bill of materials (BOM) cross-verification, and weldment joint schedules conforming to RDSO Class-B1 standards prior to shop floor plate allotment.",
    metrics: [
      { label: "Drawing Standard", value: "RDSO / IRS B1 Spec", highlight: true },
      { label: "Approval Authority", value: "Chief Bridge Engineer" },
      { label: "Material BOM", value: "IS 2062 E250 / E350 BR" },
      { label: "Quality Audit Plan", value: "Approved QAP Dossier" },
    ],
    keyMilestone: "Engineering drawings and cutting layouts cleared by Indian Railways RDSO"
  },
  {
    step: "02",
    number: 2,
    title: "MATERIAL INSPECTION",
    category: "Material & Preparation",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Steel plates arrive and are checked for grade, thickness and certificates.",
    detailedNotes: "Receipt verification of primary high-tensile structural steel plates. 100% heat number matching against Mill Test Certificates (MTC), ultrasonic lamination checks, and digital micrometer thickness audits.",
    metrics: [
      { label: "Steel Specification", value: "IS 2062 Grade E250", highlight: true },
      { label: "Calibrated Gauge", value: "25 mm Plate Thickness" },
      { label: "Heat Traceability", value: "Heat No: 7B432 MTC" },
      { label: "Lamination Testing", value: "100% Ultrasonic Pass" },
    ],
    keyMilestone: "Raw steel chemistry and mechanical properties validated against IRS B1"
  },
  {
    step: "03",
    number: 3,
    title: "MARKING & NESTING",
    category: "Material & Preparation",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Dimensions are marked and cutting layouts prepared.",
    detailedNotes: "Computerized nesting algorithms generate maximum material yield layouts. Optical theodolite and calibrated steel tape dimensions inscribed with permanent hard punch identification stamps.",
    metrics: [
      { label: "Marking Tolerance", value: "±0.5 mm Calibrated", highlight: true },
      { label: "Nesting Algorithm", value: "CNC High Yield Ratio" },
      { label: "Shrinkage Allowance", value: "Weld Contraction Factored" },
      { label: "Part Serialization", value: "Hard Punch Stamped" },
    ],
    keyMilestone: "Full plate geometry inscribed with thermal cutting compensation"
  },
  {
    step: "04",
    number: 4,
    title: "CNC CUTTING",
    category: "Material & Preparation",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Plates are cut using CNC oxy-fuel or plasma cutting machines.",
    detailedNotes: "Multi-torch CNC oxy-fuel profile gantry cutting machine executing contour cuts with automated height sensor tracking to eliminate edge bevel distortion and maintain squareness.",
    metrics: [
      { label: "Cutting Machine", value: "CNC Gantry Multi-Torch", highlight: true },
      { label: "Cutting Method", value: "Oxy-Fuel / Plasma Arc" },
      { label: "Edge Kerf Quality", value: "ISO 9013 Class 2" },
      { label: "Thermal Tolerance", value: "±1.0 mm True Edge" },
    ],
    keyMilestone: "Clean profile plate sections sheared with metallurgical precision"
  },
  {
    step: "05",
    number: 5,
    title: "EDGE PREPARATION",
    category: "Fabrication & Welding",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Bevels are prepared (V/X groove) and edges are ground smooth.",
    detailedNotes: "Mechanical edge planer creating uniform 45° single-V and double-V weld grooves. Full edge dressing removing micro-slag, oxidation, and heat-affected zones (HAZ).",
    metrics: [
      { label: "Groove Profile", value: "Single/Double V-Groove", highlight: true },
      { label: "Bevel Angle", value: "45° / 60° Calibrated" },
      { label: "Root Face Depth", value: "2.0 mm Uniform" },
      { label: "Surface Finish", value: "Ra < 12.5 µm Ground" },
    ],
    keyMilestone: "Weld root preparation inspected and certified for complete penetration"
  },
  {
    step: "06",
    number: 6,
    title: "TACK WELDING & FIT-UP",
    category: "Fabrication & Welding",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Flange and web plates are assembled in jigs and tack welded.",
    detailedNotes: "Precision hydraulic clamping fixtures lock top flange, bottom flange, and vertical web into rigid alignment. Qualified welders deposit staggered low-hydrogen tack welds with preheat monitoring.",
    metrics: [
      { label: "Fit-Up Fixture", value: "Hydraulic Assembly Jig", highlight: true },
      { label: "Preheat Temp", value: "120°C - 150°C Controlled" },
      { label: "Tack Electrode", value: "AWS E7018 Low-H2" },
      { label: "Squareness Check", value: "±1.5 mm Dial Indicator" },
    ],
    keyMilestone: "I-Girder geometry assembled with zero camber distortion in rigid jig"
  },
  {
    step: "07",
    number: 7,
    title: "SUBMERGED ARC WELDING",
    category: "Fabrication & Welding",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Flange-to-web joints are welded using automatic SAW.",
    detailedNotes: "Twin-wire Submerged Arc Welding (SAW) portal tractor laying continuous full-penetration butt and fillet weld beads under protective granular flux blanket.",
    metrics: [
      { label: "Welding Process", value: "Automatic SAW (121)", highlight: true },
      { label: "Welding Wire", value: "EH-14 / Flux F7A2" },
      { label: "Current & Voltage", value: "650A / 32V Direct Arc" },
      { label: "Travel Speed", value: "450 mm/min Continuous" },
    ],
    keyMilestone: "Continuous deep-penetration flange-to-web weld bead deposited"
  },
  {
    step: "08",
    number: 8,
    title: "STIFFENER FABRICATION",
    category: "Fabrication & Welding",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Vertical and bearing stiffeners are fitted and welded.",
    detailedNotes: "Intermediate transverse web stiffeners and heavy load-bearing end stiffeners positioned under high-tensile torque clamps, welded symmetrically to counteract residual stress.",
    metrics: [
      { label: "Stiffener Type", value: "Intermediate & Bearing", highlight: true },
      { label: "Welding Method", value: "FCAW / SMAW Symmetrical" },
      { label: "Weld Size", value: "8 mm Fillet Continuous" },
      { label: "Perpendicularity", value: "90° ± 0.5° Checked" },
    ],
    keyMilestone: "Vertical stiffener web reinforcement locked for torsional stability"
  },
  {
    step: "09",
    number: 9,
    title: "NON-DESTRUCTIVE TESTING",
    category: "Quality Audit & Testing",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Welds undergo ultrasonic (UT) and magnetic particle testing (MPT).",
    detailedNotes: "Level II certified NDT inspectors conduct 100% digital ultrasonic examination on butt welds and fluorescent magnetic particle testing on fillet welds to detect internal discontinuities.",
    metrics: [
      { label: "Testing Methods", value: "100% UT & MPT Passed", highlight: true },
      { label: "NDE Inspector", value: "ASNT / ISNT Level II" },
      { label: "Acceptance Level", value: "IRS B1 / AWS D1.5 Code" },
      { label: "Defect Deflection", value: "Zero Reject Record" },
    ],
    keyMilestone: "100% NDT clearance certificate issued by third-party railway inspector"
  },
  {
    step: "10",
    number: 10,
    title: "TRIAL ASSEMBLY",
    category: "Quality Audit & Testing",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "All girder segments are assembled in the shop for alignment check.",
    detailedNotes: "Full span shop layout on level bed. Precision electronic total station checks overall camber curve, span length, diagonal squareness, and splice bolt hole alignment.",
    metrics: [
      { label: "Span Camber", value: "+45 mm Parabolic Verified", highlight: true },
      { label: "Splice Alignment", value: "100% Drift Pin Clearance" },
      { label: "Diagonal Tolerance", value: "±2.0 mm Overall Span" },
      { label: "Survey System", value: "Leica Electronic Total Stn" },
    ],
    keyMilestone: "Bridge camber profile and splice joints certified ready for site erection"
  },
  {
    step: "11",
    number: 11,
    title: "SURFACE PREPARATION & PAINTING",
    category: "Surface & Dispatch",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Girders are shot blasted (Sa 2.5) and painted with epoxy & PU.",
    detailedNotes: "Automated enclosed shot-blasting chamber creates Sa 2.5 white-metal profile. Immediate application of inorganic zinc silicate primer, epoxy intermediate, and UV-resistant aliphatic PU topcoat.",
    metrics: [
      { label: "Blast Standard", value: "ISO 8501-1 Sa 2.5", highlight: true },
      { label: "Blast Profile", value: "50 - 75 µm Angular Anchor" },
      { label: "Coating System", value: "Zinc + Epoxy + PU (3-Coat)" },
      { label: "Total DFT", value: "250 µm Calibrated Gauge" },
    ],
    keyMilestone: "Anti-corrosion coating system guaranteed for 25-year structural service"
  },
  {
    step: "12",
    number: 12,
    title: "FINAL INSPECTION & DISPATCH",
    category: "Surface & Dispatch",
    badgeColor: "text-[#7F011F] bg-[#F8F4EC]",
    badgeBorder: "border-[#EAE3D2]",
    description: "Final client inspection, stamping, and dispatch to railway site.",
    detailedNotes: "RDSO / Indian Railways inspecting officer issues formal IC (Inspection Certificate). Girders match-marked, heavy-lift rigged, and secured onto multi-axle hydraulic trailers for site transport.",
    metrics: [
      { label: "Dispatch Clearance", value: "RDSO IC Issued & Stamped", highlight: true },
      { label: "Transport Carrier", value: "Hydraulic Multi-Axle Pull" },
      { label: "Fastener Package", value: "HSFG 10.9 Bolts Encased" },
      { label: "Destination Yard", value: "Indian Railways Project Site" },
    ],
    keyMilestone: "Finished bridge girder dispatched with complete quality dossier"
  }
];

interface GirderFabricationHeroMotionProps {
  className?: string;
}

export default function GirderFabricationHeroMotion({ className = "" }: GirderFabricationHeroMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"cinematic" | "matrix">("cinematic");
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isPreloading, setIsPreloading] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(3200);

  const totalStages = FABRICATION_STAGES.length;

  // Preload all 12 4K WebP frames into browser cache
  useEffect(() => {
    let isMounted = true;
    let loaded = 0;

    for (let i = 1; i <= totalStages; i++) {
      const pad = String(i).padStart(2, "0");
      const img = new Image();
      img.src = `/enhanced_pro/${pad}.webp`;
      img.onload = () => {
        if (!isMounted) return;
        loaded++;
        setLoadedCount(loaded);
        if (loaded >= totalStages) {
          setIsPreloading(false);
        }
      };
      img.onerror = () => {
        if (!isMounted) return;
        loaded++;
        setLoadedCount(loaded);
        if (loaded >= totalStages) {
          setIsPreloading(false);
        }
      };
    }

    return () => {
      isMounted = false;
    };
  }, [totalStages]);

  // Framer Motion useScroll hook on container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Sync scroll progress with active stage (when user scrolls)
  useEffect(() => {
    if (isPreloading) return;

    const unsub = scrollYProgress.on("change", (latest) => {
      if (!isPlaying) {
        const calculatedIndex = Math.min(totalStages - 1, Math.floor(latest * totalStages));
        setActiveStage(calculatedIndex);
      }
    });

    return () => unsub();
  }, [isPreloading, scrollYProgress, isPlaying, totalStages]);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % totalStages);
    }, playbackSpeed);

    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed, totalStages]);

  // Navigation handlers
  const jumpToStage = useCallback((index: number) => {
    setIsPlaying(false);
    setActiveStage(Math.max(0, Math.min(totalStages - 1, index)));
  }, [totalStages]);

  const handleNext = useCallback(() => {
    setIsPlaying(false);
    setActiveStage((prev) => Math.min(totalStages - 1, prev + 1));
  }, [totalStages]);

  const handlePrev = useCallback(() => {
    setIsPlaying(false);
    setActiveStage((prev) => Math.max(0, prev - 1));
  }, []);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setActiveStage(0);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === " " && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const current = FABRICATION_STAGES[activeStage] || FABRICATION_STAGES[0];
  const currentPadded = String(activeStage + 1).padStart(2, "0");

  return (
    <div
      ref={containerRef}
      id="girder-fabrication-motion"
      className={`relative w-full bg-[#FDFBF7] text-[#2D2426] ${className}`}
    >
      {/* Architectural Sandstone Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(127, 1, 31, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(127, 1, 31, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Atmospheric Warmth */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[#F5EBD0]/50 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-[#7F011F]/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        
        {/* Top Header Card */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EAE3D2]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#7F011F]/10 px-3.5 py-1 text-xs font-mono font-bold text-[#7F011F] border border-[#7F011F]/25 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#7F011F] animate-pulse" />
              12-STAGE 4K MOTION TIMELAPSE
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8F4EC] px-3 py-1 text-xs font-mono font-bold text-[#2D2426] border border-[#EAE3D2]">
              RDSO CLASS-B1 APPROVED
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8F4EC] px-3 py-1 text-xs font-mono font-medium text-[#6B5E62] border border-[#EAE3D2]">
              IRS B1-2001 COMPLIANT
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Switcher */}
            <button
              onClick={() => setViewMode(viewMode === "cinematic" ? "matrix" : "cinematic")}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white hover:bg-[#F8F4EC] px-3.5 py-1.5 border border-[#EAE3D2] text-xs font-mono font-semibold text-[#2D2426] transition shadow-xs cursor-pointer"
            >
              {viewMode === "cinematic" ? (
                <>
                  <Grid3X3 className="h-3.5 w-3.5 text-[#7F011F]" />
                  <span>12-Stage Matrix</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal className="h-3.5 w-3.5 text-[#7F011F]" />
                  <span>Cinematic Motion</span>
                </>
              )}
            </button>

            {/* Stage Counter */}
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#EAE3D2] text-xs font-mono">
              <span className="text-[#6B5E62]">STAGE</span>
              <span className="text-[#7F011F] font-black text-sm">{current.step}</span>
              <span className="text-[#6B5E62]">/ 12</span>
            </div>
          </div>
        </div>

        {/* 12-Step Quick Jump Pill Bar in Architectural Sandstone */}
        <div className="mb-6 overflow-x-auto scrollbar-none py-1">
          <div className="flex items-center gap-1.5 min-w-max">
            {FABRICATION_STAGES.map((stg, idx) => {
              const isActive = idx === activeStage;
              const isPast = idx < activeStage;
              return (
                <button
                  key={stg.step}
                  onClick={() => {
                    if (viewMode === "matrix") setViewMode("cinematic");
                    jumpToStage(idx);
                  }}
                  className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                    isActive
                      ? "bg-[#7F011F] text-[#F5EBD0] border-[#7F011F] shadow-md font-bold scale-102"
                      : isPast
                      ? "bg-[#F8F4EC] text-[#2D2426] border-[#EAE3D2] hover:border-[#7F011F]/50"
                      : "bg-white text-[#6B5E62] border-[#EAE3D2] hover:border-[#7F011F]/40 hover:text-[#7F011F]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold ${
                      isActive ? "text-[#F5EBD0]" : isPast ? "text-[#7F011F]" : "text-[#8E7F84]"
                    }`}
                  >
                    {stg.step}
                  </span>
                  <span className="whitespace-nowrap text-[11px] font-medium tracking-tight">
                    {stg.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================== VIEWPORT AREA ===================== */}
        {viewMode === "cinematic" ? (
          /* CINEMATIC 4K HIGH FIDELITY STAGE IN CLEAN ARCHITECTURAL FRAME */
          <div className="rounded-3xl border border-[#EAE3D2] bg-white overflow-hidden shadow-xl shadow-stone-200/50">
            
            {/* Top Interactive Bar inside Stage */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-b border-[#EAE3D2] bg-[#FDFBF7]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase border bg-[#F8F4EC] text-[#7F011F] border-[#EAE3D2] shadow-xs">
                  <Activity className="h-3.5 w-3.5 text-[#7F011F]" />
                  {current.category}
                </span>
                <span className="text-sm sm:text-base font-bold text-[#2D2426] tracking-tight">
                  {current.title}
                </span>
              </div>

              {/* Stage Optics HUD */}
              <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-[#6B5E62]">
                <span className="flex items-center gap-1.5 text-[#7F011F] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7F011F] animate-pulse" />
                  3840×3410 4K UHD
                </span>
                <span className="text-[#EAE3D2]">|</span>
                <span className="text-[#2D2426]">IRS B1-2001 CODE</span>
                <span className="text-[#EAE3D2]">|</span>
                <span className="text-[#7F011F] font-bold">100% TRACEABLE</span>
              </div>
            </div>

            {/* Central 4K Frame Display (Studio dark screen keeps the 4K render diagram and banners razor sharp) */}
            <div className="relative w-full h-[52vh] sm:h-[62vh] md:h-[68vh] lg:h-[72vh] bg-[#0A0D14] flex items-center justify-center overflow-hidden">
              {/* Preloader overlay */}
              {isPreloading && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#FDFBF7]/95 backdrop-blur-sm">
                  <div className="w-10 h-10 border-2 border-[#EAE3D2] border-t-[#7F011F] rounded-full animate-spin mb-3" />
                  <span className="text-xs font-mono text-[#2D2426] font-bold">
                    Preloading 4K Frames ({loadedCount}/{totalStages})
                  </span>
                </div>
              )}

              {/* Hardware-Accelerated 4K Image Crossfade */}
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  <img
                    src={`/enhanced_pro/${currentPadded}.webp`}
                    alt={`Stage ${current.step}: ${current.title} - ${current.description}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                    className="select-none pointer-events-none drop-shadow-2xl"
                    loading="eager"
                    decoding="async"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Floating Quick Action Overlay on Frame */}
              <div className="absolute bottom-4 left-4 z-20 pointer-events-none max-w-lg hidden md:block">
                <div className="rounded-xl bg-white/95 backdrop-blur-md border border-[#EAE3D2] p-3 shadow-xl">
                  <div className="text-[11px] font-mono text-[#7F011F] font-bold uppercase mb-0.5">
                    Stage {current.step} Milestone
                  </div>
                  <p className="text-xs text-[#2D2426] font-medium leading-relaxed">
                    {current.keyMilestone}
                  </p>
                </div>
              </div>

              {/* Progress Bar Line atop bottom controls */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EAE3D2]/30 z-20">
                <div
                  className="h-full bg-gradient-to-r from-[#7F011F] via-[#9B0A2D] to-[#F5EBD0] transition-all duration-300"
                  style={{ width: `${((activeStage + 1) / totalStages) * 100}%` }}
                />
              </div>
            </div>

            {/* Bottom Telemetry HUD & Playback Deck */}
            <div className="p-4 sm:p-6 bg-[#FDFBF7] border-t border-[#EAE3D2]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Detailed Stage Info & Telemetry */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#F5EBD0] bg-[#7F011F] px-2 py-0.5 rounded shadow-xs">
                      STEP {current.step}
                    </span>
                    <span className="text-[#EAE3D2]">•</span>
                    <h4 className="text-base sm:text-lg font-black text-[#2D2426]">
                      {current.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6B5E62] leading-relaxed font-normal">
                    {current.detailedNotes}
                  </p>

                  {/* 4 Technical Parameter Pills in Clean Architectural White & Sand */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {current.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-white border border-[#EAE3D2] p-2.5 shadow-xs"
                      >
                        <span className="text-[10px] font-mono uppercase text-[#6B5E62] block truncate mb-0.5">
                          {m.label}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold truncate block ${
                            m.highlight ? "text-[#7F011F]" : "text-[#2D2426]"
                          }`}
                        >
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Interactive Scrubber & Controls */}
                <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
                  
                  {/* Range Scrubber with Ticks */}
                  <div className="rounded-2xl border border-[#EAE3D2] bg-white p-3.5 flex flex-col gap-2 shadow-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#6B5E62]">
                      <span>TIMELINE SCRUBBER</span>
                      <span className="text-[#7F011F] font-bold">
                        FRAME {activeStage + 1} OF 12
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max={totalStages - 1}
                      step="1"
                      value={activeStage}
                      onChange={(e) => jumpToStage(Number(e.target.value))}
                      className="w-full h-2 bg-[#EAE3D2] rounded-lg appearance-none cursor-pointer accent-[#7F011F]"
                    />

                    <div className="flex justify-between text-[9px] font-mono text-[#8E7F84] px-0.5">
                      <span>01 DRAWING</span>
                      <span>06 ASSEMBLY</span>
                      <span>12 DISPATCH</span>
                    </div>
                  </div>

                  {/* Playback Button Deck */}
                  <div className="flex items-center justify-between gap-2 rounded-2xl border border-[#EAE3D2] bg-white p-2.5 shadow-xs">
                    {/* Prev */}
                    <button
                      onClick={handlePrev}
                      disabled={activeStage === 0}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F4EC] hover:bg-[#F5EBD0] disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer text-[#2D2426]"
                      title="Previous Stage"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Play / Pause Primary Button */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition shadow-md shadow-[#7F011F]/20 cursor-pointer bg-[#7F011F] hover:bg-[#9B0A2D] text-[#F5EBD0]"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="h-4 w-4 fill-current" />
                          <span>PAUSE TIMELAPSE</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 fill-current" />
                          <span>PLAY 4K TIMELAPSE</span>
                        </>
                      )}
                    </button>

                    {/* Next */}
                    <button
                      onClick={handleNext}
                      disabled={activeStage === totalStages - 1}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F4EC] hover:bg-[#F5EBD0] disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer text-[#2D2426]"
                      title="Next Stage"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Reset */}
                    <button
                      onClick={handleReset}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F4EC] hover:bg-[#F5EBD0] transition cursor-pointer text-[#6B5E62] hover:text-[#7F011F]"
                      title="Restart from Stage 01"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        ) : (
          /* MATRIX / 12-STAGE GRID VIEW */
          <div className="rounded-3xl border border-[#EAE3D2] bg-white p-5 sm:p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EAE3D2]">
              <div>
                <h3 className="text-xl font-extrabold text-[#2D2426]">
                  Railway Girder Fabrication: Full 12-Stage Matrix
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E62] mt-1">
                  Click any stage to inspect the high-resolution 4K frame and technical parameters.
                </p>
              </div>

              <button
                onClick={() => setViewMode("cinematic")}
                className="inline-flex items-center gap-2 rounded-xl bg-[#7F011F] hover:bg-[#9B0A2D] px-4 py-2 text-xs font-mono font-bold text-[#F5EBD0] transition cursor-pointer shadow-md"
              >
                <span>Return to Motion View</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {FABRICATION_STAGES.map((stg, idx) => {
                const isSelected = idx === activeStage;
                const pad = String(idx + 1).padStart(2, "0");
                return (
                  <div
                    key={stg.step}
                    onClick={() => {
                      jumpToStage(idx);
                      setViewMode("cinematic");
                    }}
                    className={`group relative rounded-2xl border p-4 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#FBF1F3] border-[#7F011F] shadow-lg scale-102"
                        : "bg-[#FDFBF7] border-[#EAE3D2] hover:border-[#7F011F]/50 hover:bg-white hover:shadow-md"
                    }`}
                  >
                    {/* Thumbnail preview */}
                    <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-[#0A0D14]">
                      <img
                        src={`/enhanced_pro/${pad}.webp`}
                        alt={stg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute top-2 left-2 bg-[#7F011F] px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#F5EBD0] shadow-xs">
                        STAGE {stg.step}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#2D2426] mb-1 group-hover:text-[#7F011F] transition">
                      {stg.title}
                    </h4>

                    <p className="text-xs text-[#6B5E62] line-clamp-2 leading-relaxed mb-3">
                      {stg.description}
                    </p>

                    <div className="text-[10px] font-mono text-[#6B5E62] pt-2 border-t border-[#EAE3D2] flex items-center justify-between">
                      <span>{stg.metrics[0].label}</span>
                      <span className="text-[#7F011F] font-bold">{stg.metrics[0].value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
