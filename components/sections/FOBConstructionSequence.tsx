"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  HardHat,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Compass,
} from "lucide-react";
import AnimatedBackground from "@/components/motion/AnimatedBackground";

export interface FOBStage {
  stageNumber: string; // "01", "02", ... "12"
  title: string;
  category: string;
  subtitle: string;
  spec: string;
  image: string;
  image2k: string;
  image1080: string;
  fallbackPng: string;
}

export const FOB_STAGES: FOBStage[] = [
  {
    stageNumber: "01",
    title: "Site Demarcation & Track Corridor Preparation",
    category: "Phase 1: Substructure",
    subtitle: "Geotechnical ground survey, soil bearing validation, and track corridor clearance under controlled railway block protection.",
    spec: "RDSO Category-A alignment • Soil bearing capacity: 240 kN/m²",
    image: "/fob-stages/2k/01.webp",
    image2k: "/fob-stages/2k/01.webp",
    image1080: "/fob-stages/1080p/01.webp",
    fallbackPng: "/fob-stages/01_site_preparation.png",
  },
  {
    stageNumber: "02",
    title: "Foundation Excavation & Cast-in-Situ Piling",
    category: "Phase 1: Substructure",
    subtitle: "Hydraulic rotary rig boring of 1200mm dia pile foundations down to sound bedrock with bentonite slurry stabilization.",
    spec: "1200mm Dia Bored Piles • M35 Grade Concrete",
    image: "/fob-stages/2k/02.webp",
    image2k: "/fob-stages/2k/02.webp",
    image1080: "/fob-stages/1080p/02.webp",
    fallbackPng: "/fob-stages/02_foundation_begins.png",
  },
  {
    stageNumber: "03",
    title: "Reinforced Pile Cap & Substructure Footings",
    category: "Phase 1: Substructure",
    subtitle: "Casting monolithic reinforced concrete pile caps with integrated anchor bolt clusters and electrical grounding terminals.",
    spec: "Fe500D TMT Reinforcement • 100% Ultrasonic Testing",
    image: "/fob-stages/2k/03.webp",
    image2k: "/fob-stages/2k/03.webp",
    image1080: "/fob-stages/1080p/03.webp",
    fallbackPng: "/fob-stages/03_foundation_complete.png",
  },
  {
    stageNumber: "04",
    title: "Pier Column Shuttering & Rebar Caging",
    category: "Phase 2: Piers & Substructure",
    subtitle: "Precision alignment of heavy modular steel shuttering and crane erection of vertical rebar cages per IRS Concrete Bridge Code.",
    spec: "Heavy Modular Shuttering • Verticality tolerance: ±3mm",
    image: "/fob-stages/2k/04.webp",
    image2k: "/fob-stages/2k/04.webp",
    image1080: "/fob-stages/1080p/04.webp",
    fallbackPng: "/fob-stages/04_piers_begin.png",
  },
  {
    stageNumber: "05",
    title: "Monolithic Pier Columns Cast & Cured",
    category: "Phase 2: Piers & Substructure",
    subtitle: "Continuous pour of self-compacting M40 concrete columns with controlled temperature curing to eliminate micro-cracking.",
    spec: "M40 Self-Compacting Mix • 7.5m Clear Height",
    image: "/fob-stages/2k/05.webp",
    image2k: "/fob-stages/2k/05.webp",
    image1080: "/fob-stages/1080p/05.webp",
    fallbackPng: "/fob-stages/05_piers_complete.png",
  },
  {
    stageNumber: "06",
    title: "Heavy Pier Caps & Pot Bearing Pedestals",
    category: "Phase 2: Piers & Substructure",
    subtitle: "Casting cantilevered pier caps and precision seating of multi-directional elastomeric pot bearings with seismic shear keys.",
    spec: "Multi-Directional Pot Bearings • ±150mm Thermal Stroke",
    image: "/fob-stages/2k/06.webp",
    image2k: "/fob-stages/2k/06.webp",
    image1080: "/fob-stages/1080p/06.webp",
    fallbackPng: "/fob-stages/06_pier_caps.png",
  },
  {
    stageNumber: "07",
    title: "RDSO Steel Girder Erection & Launching",
    category: "Phase 3: Superstructure Launch",
    subtitle: "Mobilizing heavy rail crane gantries to lift and launch shop-fabricated composite steel plate girders across the track spans.",
    spec: "IS 2062 E350/E450 BR Steel • 120-Tonne Crane Lift",
    image: "/fob-stages/2k/07.webp",
    image2k: "/fob-stages/2k/07.webp",
    image1080: "/fob-stages/1080p/07.webp",
    fallbackPng: "/fob-stages/07_girders_begin.png",
  },
  {
    stageNumber: "08",
    title: "Span Alignment & Diaphragm Cross-Bracing",
    category: "Phase 3: Superstructure Launch",
    subtitle: "High-strength friction grip (HSFG) bolting of cross-frames, transverse diaphragms, and lateral aerodynamic wind bracings.",
    spec: "Grade 10.9 HSFG Bolted Splices • Calibrated Torque Tension",
    image: "/fob-stages/2k/08.webp",
    image2k: "/fob-stages/2k/08.webp",
    image1080: "/fob-stages/1080p/08.webp",
    fallbackPng: "/fob-stages/08_girders_complete.png",
  },
  {
    stageNumber: "09",
    title: "Composite Orthotropic Deck Slab Casting",
    category: "Phase 4: Deck Engineering",
    subtitle: "Drawn-arc shear stud welding on top flanges followed by reinforced concrete composite deck casting and curing.",
    spec: "22mm Welded Shear Studs • 32.5T Heavy Freight Axle Rating",
    image: "/fob-stages/2k/09.webp",
    image2k: "/fob-stages/2k/09.webp",
    image1080: "/fob-stages/1080p/09.webp",
    fallbackPng: "/fob-stages/09_deck_construction.png",
  },
  {
    stageNumber: "10",
    title: "Bituminous Mastic Wearing Coat & Crash Barriers",
    category: "Phase 4: Deck Engineering",
    subtitle: "Application of 65mm high-density asphaltic wearing course and installation of crash-tested W-beam railway parapet barriers.",
    spec: "IRC:83 Parapet Crash Rating • Anti-Skid Profile",
    image: "/fob-stages/2k/10.webp",
    image2k: "/fob-stages/2k/10.webp",
    image1080: "/fob-stages/1080p/10.webp",
    fallbackPng: "/fob-stages/10_road_surface.png",
  },
  {
    stageNumber: "11",
    title: "Protective Thermal Spray & Overhead Electrification",
    category: "Phase 5: Finishing & Commissioning",
    subtitle: "150µm zinc thermal spray corrosion barrier with 3-coat polyurethane topcoat, railway catenary guards, and LED lighting masts.",
    spec: "RDSO M&C/PCN/102 • 25-Year Corrosion Protection",
    image: "/fob-stages/2k/11.webp",
    image2k: "/fob-stages/2k/11.webp",
    image1080: "/fob-stages/1080p/11.webp",
    fallbackPng: "/fob-stages/11_finishing.png",
  },
  {
    stageNumber: "12",
    title: "Static/Dynamic Load Testing & Commissioning",
    category: "Phase 5: Finishing & Commissioning",
    subtitle: "Rigorous static train loading and dynamic vibration telemetry validation confirming deflection within L/1200 railway standards.",
    spec: "L/1200 Deflection Verified • Indian Railways RDSO Certified",
    image: "/fob-stages/2k/12.webp",
    image2k: "/fob-stages/2k/12.webp",
    image1080: "/fob-stages/1080p/12.webp",
    fallbackPng: "/fob-stages/12_completion.png",
  },
];

export default function FOBConstructionSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Direct DOM references for 60/120fps zero-re-render scroll performance
  const imageRefs = useRef<(HTMLElement | null)[]>([]);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoryRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const specRef = useRef<HTMLSpanElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const activeDotFillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotContainerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const bottomBlendRef = useRef<HTMLDivElement>(null);

  // Cached layout metrics to eliminate forced reflows during scroll ticks
  const layoutRef = useRef({
    containerTop: 0,
    containerHeight: 0,
    viewportHeight: 0,
    scrollDistance: 0,
  });

  const lastActiveIndexRef = useRef<number>(0);
  const isTickingRef = useRef<boolean>(false);
  const isClickNavigatingRef = useRef<boolean>(false);

  // Reduced motion preference
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  // State for reduced motion manual interactive viewer
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  // Check for prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  /**
   * Preload & Pre-decode all 12 3K True-HD assets into GPU texture cache
   */
  useEffect(() => {
    FOB_STAGES.forEach((stage) => {
      const img = new window.Image();
      img.src = stage.image2k;
      if (typeof img.decode === "function") {
        img.decode().catch(() => {});
      }
    });
  }, []);

  /**
   * Measure & Cache Layout Geometry (never run during scroll ticks)
   */
  const updateLayoutMetrics = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollDistance = Math.max(1, containerHeight - viewportHeight);

    layoutRef.current = {
      containerTop,
      containerHeight,
      viewportHeight,
      scrollDistance,
    };
  }, []);

  /**
   * Update HUD & Text Content via Direct DOM with smooth micro-fade
   */
  const updateHUD = useCallback((index: number) => {
    const stage = FOB_STAGES[index];
    if (!stage) return;

    if (badgeRef.current) {
      badgeRef.current.textContent = `STAGE ${stage.stageNumber} / 12`;
    }
    if (titleRef.current) {
      titleRef.current.textContent = stage.title;
    }
    if (categoryRef.current) {
      categoryRef.current.textContent = stage.category.toUpperCase();
    }
    if (subtitleRef.current) {
      subtitleRef.current.textContent = stage.subtitle;
    }
    if (specRef.current) {
      specRef.current.textContent = stage.spec;
    }

    // Update 12-segment interactive timeline
    dotContainerRefs.current.forEach((btn, idx) => {
      const fillEl = activeDotFillRefs.current[idx];
      if (!btn || !fillEl) return;

      if (idx === index) {
        btn.setAttribute("aria-current", "step");
        btn.style.opacity = "1";
        btn.style.transform = "scaleY(1.15)";
        fillEl.style.width = "100%";
        fillEl.style.backgroundColor = "#C6A66B";
        fillEl.style.boxShadow = "0 0 10px rgba(198,166,107,0.7)";
      } else if (idx < index) {
        btn.removeAttribute("aria-current");
        btn.style.opacity = "0.75";
        btn.style.transform = "scaleY(1)";
        fillEl.style.width = "100%";
        fillEl.style.backgroundColor = "#5C6670";
        fillEl.style.boxShadow = "none";
      } else {
        btn.removeAttribute("aria-current");
        btn.style.opacity = "0.35";
        btn.style.transform = "scaleY(1)";
        fillEl.style.width = "0%";
        fillEl.style.backgroundColor = "transparent";
        fillEl.style.boxShadow = "none";
      }
    });
  }, []);

  /**
   * High-Performance 60FPS Scroll Handler with S-Curve Crossfade
   */
  useEffect(() => {
    if (reducedMotion) return;

    updateLayoutMetrics();

    const onScroll = () => {
      if (isTickingRef.current) return;
      isTickingRef.current = true;

      requestAnimationFrame(() => {
        isTickingRef.current = false;
        const { containerTop, scrollDistance } = layoutRef.current;
        if (scrollDistance <= 0) return;

        const currentScroll = window.scrollY - containerTop;
        const progress = Math.max(0, Math.min(1, currentScroll / scrollDistance));

        // Update continuous bottom gold progress bar
        if (progressLineRef.current) {
          progressLineRef.current.style.width = `${Math.max(2, progress * 100)}%`;
        }

        // Bottom blend gradient into next section (#specifications: warm ivory #F5F3EE)
        if (bottomBlendRef.current) {
          const blendProgress = Math.max(0, (progress - 0.94) / 0.06);
          bottomBlendRef.current.style.opacity = String(blendProgress);
        }

        // Map scroll progress across the 12 stages (0.00 to 11.00)
        const totalStages = FOB_STAGES.length;
        const floatStage = progress * (totalStages - 1);
        const baseIdx = Math.min(totalStages - 1, Math.floor(floatStage));
        const activeNominalIdx = Math.min(totalStages - 1, Math.round(floatStage));

        // Sync HUD text if stage milestone changed
        if (activeNominalIdx !== lastActiveIndexRef.current) {
          lastActiveIndexRef.current = activeNominalIdx;
          updateHUD(activeNominalIdx);
        }

        // Plateau hold + Smooth Cubic Hermite Crossfade
        const frac = floatStage - baseIdx; // 0.0 to 1.0 between baseIdx and baseIdx + 1

        // Pure True-HD Subpixel Alignment: zero blurring transforms
        let alpha1 = 1;
        let alpha2 = 0;
        let scale1 = 1.0;
        let scale2 = 1.0;

        if (baseIdx >= totalStages - 1) {
          alpha1 = 1;
          alpha2 = 0;
          scale1 = 1.004;
        } else {
          // Plateau window: hold image 100% razor-sharp for first 62% of scroll interval
          // Crossfade window: smooth cubic S-curve over remaining 38%
          if (frac < 0.62) {
            const holdProgress = frac / 0.62;
            alpha1 = 1.0;
            alpha2 = 0.0;
            scale1 = 1.0 + holdProgress * 0.003; // ultra-restrained documentary push to protect true pixel sharpness
            scale2 = 1.0;
          } else {
            const crossProgress = (frac - 0.62) / 0.38;
            // Cubic Hermite easing: 3t^2 - 2t^3
            const ease = crossProgress * crossProgress * (3 - 2 * crossProgress);
            alpha1 = 1.0 - ease;
            alpha2 = ease;
            scale1 = 1.003 + ease * 0.002;
            scale2 = 1.0 + ease * 0.002;
          }
        }

        // Apply styles directly to DOM elements for GPU hardware compositing
        for (let i = 0; i < totalStages; i++) {
          const el = imageRefs.current[i];
          if (!el) continue;

          if (i === baseIdx) {
            el.style.opacity = String(alpha1);
            el.style.transform = `scale(${scale1.toFixed(4)})`;
            el.style.visibility = alpha1 > 0.001 ? "visible" : "hidden";
            el.style.zIndex = "10";
          } else if (i === baseIdx + 1) {
            el.style.opacity = String(alpha2);
            el.style.transform = `scale(${scale2.toFixed(4)})`;
            el.style.visibility = alpha2 > 0.001 ? "visible" : "hidden";
            el.style.zIndex = "11";
          } else {
            el.style.opacity = "0";
            el.style.visibility = "hidden";
            el.style.transform = "scale(1)";
            el.style.zIndex = "1";
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateLayoutMetrics);
    window.addEventListener("orientationchange", updateLayoutMetrics);

    // Initial render
    onScroll();
    updateHUD(0);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateLayoutMetrics);
      window.removeEventListener("orientationchange", updateLayoutMetrics);
    };
  }, [reducedMotion, updateLayoutMetrics, updateHUD]);

  /**
   * Jump smoothly to a specific stage on timeline click
   */
  const scrollToStage = (stageIdx: number) => {
    if (reducedMotion) {
      setActiveStageIndex(stageIdx);
      return;
    }

    const { containerTop, scrollDistance } = layoutRef.current;
    if (scrollDistance <= 0 || !containerRef.current) return;

    isClickNavigatingRef.current = true;
    const targetFraction = stageIdx / (FOB_STAGES.length - 1);
    const targetScrollY = containerTop + targetFraction * scrollDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });

    setTimeout(() => {
      isClickNavigatingRef.current = false;
    }, 700);
  };

  return (
    <section
      ref={containerRef}
      id="fob-construction-sequence"
      className="relative w-full bg-[#0A0E13] text-[#F8F7F2] select-none"
      style={{
        // 480vh provides ~40vh of silky, deliberate scroll scrub per stage
        height: reducedMotion ? "auto" : "480vh",
      }}
      aria-label="Railway Bridge 12-Stage Cinematic Construction Sequence"
    >
      {/* ==================== PINNED CINEMATIC VIEWPORT ==================== */}
      <div
        ref={viewportRef}
        className={
          reducedMotion
            ? "relative w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            : "sticky top-18 sm:top-[72px] h-[calc(100vh-4.5rem)] w-full overflow-hidden flex flex-col justify-between bg-[#0A0E13]"
        }
      >
        {/* Subtle Ambient Engineering Backdrop */}
        <AnimatedBackground variant="gradient-flow" theme="dark" opacity={0.25} />
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-15" />

        {/* Ambient Vignette to draw eyes to bridge center */}
        <div
          className="absolute inset-0 pointer-events-none z-5"
          style={{
            background: "radial-gradient(ellipse at 50% 45%, rgba(10,14,19,0) 45%, rgba(10,14,19,0.85) 100%)",
          }}
        />

        {/* ==================== 1. TOP HEADER (SLIM & CRISP) ==================== */}
        <header className="relative z-20 w-full w-[94vw] max-w-[1720px] mx-auto px-2 sm:px-4 pt-3 sm:pt-4 pb-2 shrink-0">
          <div className="flex items-center justify-between gap-4 border-b border-[#39434D]/35 pb-2.5">
            
            {/* Left: Brand Category & RDSO Alignment Tag */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#141C24] border border-[#C6A66B]/40 text-[#C6A66B] shadow-inner">
                <HardHat className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#C6A66B] uppercase font-bold">
                    RDSO IRS B1-2001
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#89939D]" />
                  <span
                    ref={categoryRef}
                    className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#89939D] uppercase"
                  >
                    PHASE 1: SUBSTRUCTURE
                  </span>
                </div>
                <h2 className="font-heading text-sm sm:text-base md:text-lg font-bold text-[#F8F7F2] tracking-tight">
                  Foot Over Bridge (FOB) Construction Sequence
                </h2>
              </div>
            </div>

            {/* Right: Stage Counter Pill & Scrub Prompt */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#141C24]/90 border border-[#C6A66B]/50 backdrop-blur-md shadow-xs">
                <span className="h-2 w-2 rounded-full bg-[#C6A66B] animate-pulse" />
                <span
                  ref={badgeRef}
                  className="text-xs sm:text-sm font-mono font-extrabold text-[#F8F7F2] tracking-wider"
                >
                  STAGE 01 / 12
                </span>
              </div>
              <span className="hidden md:inline text-[11px] font-mono text-[#89939D] uppercase tracking-wide">
                Scroll to Assemble
              </span>
            </div>
          </div>
        </header>

        {/* ==================== 2. GRAND CINEMATIC STAGE VIEWPORT (DOMINATES VIEWPORT) ==================== */}
        <div className="relative z-15 flex-1 min-h-0 w-[94vw] max-w-[1720px] mx-auto px-1 sm:px-2 py-1 flex flex-col items-center justify-center">
          
          {/* Engineering CAD Frame: 90-95% screen width, expansive height */}
          <div className="relative w-full h-full max-h-[72vh] sm:max-h-[75vh] md:max-h-[77vh] rounded-2xl overflow-hidden border border-[#C6A66B]/35 bg-[#080C10] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95)] flex items-center justify-center">
            
            {/* Subtle Blueprint Grid inside canvas */}
            <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-20" />

            {/* Precision CAD Corner Reticles */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C6A66B]/80 pointer-events-none z-25" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C6A66B]/80 pointer-events-none z-25" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C6A66B]/80 pointer-events-none z-25" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C6A66B]/80 pointer-events-none z-25" />

            {/* Engineering Yard Watermark */}
            <div className="absolute top-3.5 right-4 z-25 pointer-events-none hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0A0E13]/80 border border-[#39434D]/50 backdrop-blur-xs text-[10px] font-mono text-[#C6A66B]/85 font-semibold tracking-wider">
              <ShieldCheck className="h-3 w-3 text-[#C6A66B]" />
              VAISHNAV FABRICATION YARD
            </div>

            {/* 12 Enhanced 2K High-Resolution Stage Frames */}
            {reducedMotion ? (
              // Reduced Motion Accessible Display
              <div className="relative w-full h-full flex items-center justify-center">
                <picture className="w-full h-full flex items-center justify-center">
                  <source srcSet={FOB_STAGES[activeStageIndex].image2k} type="image/webp" media="(min-width: 1024px)" />
                  <source srcSet={FOB_STAGES[activeStageIndex].image1080} type="image/webp" />
                  <img
                    src={FOB_STAGES[activeStageIndex].image2k}
                    alt={FOB_STAGES[activeStageIndex].title}
                    className="w-full h-full object-contain select-none"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      transform: "translateZ(0)",
                    }}
                  />
                </picture>
              </div>
            ) : (
              // Full Cinematic Scroll Crossfade Image Stack (3048x1512 3K Master Super-Resolution)
              FOB_STAGES.map((stage, idx) => (
                <div
                  key={stage.stageNumber}
                  ref={(el) => {
                    imageRefs.current[idx] = el;
                  }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none will-change-[opacity,transform]"
                  style={{
                    opacity: idx === 0 ? 1 : 0,
                    visibility: idx === 0 ? "visible" : "hidden",
                    transform: "translate3d(0, 0, 0) scale(1)",
                    zIndex: idx === 0 ? 10 : 1,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <picture className="w-full h-full flex items-center justify-center">
                    <source srcSet={stage.image2k} type="image/webp" media="(min-width: 1024px)" />
                    <source srcSet={stage.image1080} type="image/webp" />
                    <img
                      src={stage.image2k}
                      alt={stage.title}
                      loading={idx < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-contain pointer-events-none select-none"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        transform: "translateZ(0)",
                      }}
                    />
                  </picture>
                </div>
              ))
            )}

            {/* Glassmorphic Telemetry Overlay Bar Anchored at Bottom of Visual */}
            <div className="absolute bottom-0 left-0 right-0 z-25 bg-gradient-to-t from-[#080C10]/95 via-[#0A0E13]/85 to-transparent pt-8 pb-3 px-4 sm:px-6 md:px-8 border-t border-[#39434D]/30 backdrop-blur-xs flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3
                  ref={titleRef}
                  className="font-heading text-base sm:text-lg md:text-xl font-extrabold text-[#F8F7F2] tracking-tight truncate"
                >
                  {FOB_STAGES[reducedMotion ? activeStageIndex : 0].title}
                </h3>
                <p
                  ref={subtitleRef}
                  className="text-xs sm:text-sm text-[#89939D] mt-0.5 line-clamp-1 sm:line-clamp-2 font-normal"
                >
                  {FOB_STAGES[reducedMotion ? activeStageIndex : 0].subtitle}
                </p>
              </div>

              {/* Engineering Spec Badge */}
              <div className="shrink-0 flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-[#141C24]/90 border border-[#C6A66B]/40 flex items-center gap-2 text-xs font-mono text-[#E5C58A] shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B] shrink-0" />
                  <span ref={specRef} className="font-semibold truncate max-w-[280px] sm:max-w-none">
                    {FOB_STAGES[reducedMotion ? activeStageIndex : 0].spec}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== 3. 12-STAGE INTERACTIVE TIMELINE SCRUBBER ==================== */}
        <div className="relative z-20 w-[94vw] max-w-[1720px] mx-auto px-2 sm:px-4 pb-3 sm:pb-4 pt-1 shrink-0">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            {FOB_STAGES.map((st, i) => (
              <button
                key={st.stageNumber}
                ref={(el) => {
                  dotContainerRefs.current[i] = el;
                }}
                onClick={() => scrollToStage(i)}
                className="group relative flex-1 flex flex-col items-center py-1 cursor-pointer focus:outline-none transition-transform duration-200"
                aria-label={`Jump to Stage ${st.stageNumber}: ${st.title}`}
                title={`Stage ${st.stageNumber}: ${st.title}`}
              >
                {/* Segment Bar Container */}
                <div className="relative w-full h-1.5 sm:h-2 rounded-full bg-[#141C24] border border-[#39434D]/60 overflow-hidden group-hover:border-[#C6A66B] transition-colors">
                  {/* Active Fill Indicator */}
                  <div
                    ref={(el) => {
                      activeDotFillRefs.current[i] = el;
                    }}
                    className="absolute inset-0 h-full rounded-full transition-all duration-200"
                    style={{
                      width: (reducedMotion ? activeStageIndex : 0) >= i ? "100%" : "0%",
                      backgroundColor: (reducedMotion ? activeStageIndex : 0) === i ? "#C6A66B" : (reducedMotion ? activeStageIndex : 0) > i ? "#5C6670" : "transparent",
                    }}
                  />
                </div>

                {/* Stage number label (visible on desktop/tablet) */}
                <span className="hidden sm:inline-block text-[10px] font-mono text-[#89939D] group-hover:text-[#C6A66B] mt-1 font-semibold tracking-tighter">
                  {st.stageNumber}
                </span>
              </button>
            ))}
          </div>

          {/* Reduced Motion Controls */}
          {reducedMotion && (
            <div className="flex items-center justify-center gap-4 mt-3">
              <button
                onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeStageIndex === 0}
                className="px-4 py-2 rounded-lg bg-[#141C24] border border-[#39434D] text-xs font-mono disabled:opacity-40 flex items-center gap-1.5 hover:border-[#C6A66B] transition-colors"
              >
                <ChevronLeft className="h-4 w-4" /> Previous Stage
              </button>
              <span className="text-xs font-mono text-[#C6A66B] font-bold">
                {activeStageIndex + 1} / {FOB_STAGES.length}
              </span>
              <button
                onClick={() => setActiveStageIndex((prev) => Math.min(FOB_STAGES.length - 1, prev + 1))}
                disabled={activeStageIndex === FOB_STAGES.length - 1}
                className="px-4 py-2 rounded-lg bg-[#141C24] border border-[#39434D] text-xs font-mono disabled:opacity-40 flex items-center gap-1.5 hover:border-[#C6A66B] transition-colors"
              >
                Next Stage <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Minimal Continuous Progress Line along bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#141C24] z-25 overflow-hidden">
          <div
            ref={progressLineRef}
            className="h-full bg-gradient-to-r from-[#141C24] via-[#C6A66B] to-[#E5C58A] will-change-transform"
            style={{ width: "8%" }}
          />
        </div>

        {/* ==================== 4. SMOOTH BLEND GRADIENT INTO NEXT SECTION ==================== */}
        {/* Blends smoothly from dark studio charcoal to warm ivory #F5F3EE as Stage 12 completes */}
        <div
          ref={bottomBlendRef}
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-30 will-change-opacity"
          style={{
            opacity: 0,
            background: "linear-gradient(to bottom, rgba(10,14,19,0) 0%, rgba(245,243,238,0.85) 75%, #F5F3EE 100%)",
          }}
        />
      </div>
    </section>
  );
}
