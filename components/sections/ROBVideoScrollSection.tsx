"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  ShieldCheck,
  Play,
  Pause,
  RotateCcw,
  Compass,
  Maximize2,
  Minimize2,
  Eye,
  Sliders,
} from "lucide-react";
import AnimatedBackground from "@/components/motion/AnimatedBackground";

export interface ROBVideoMilestone {
  timeStart: number;
  timeEnd: number;
  stageNumber: string; // "01", "02", ... "12"
  shortTitle: string;
  title: string;
  category: string;
  spec: string;
  dwellLabel: string;
}

export const ROB_VIDEO_MILESTONES: ROBVideoMilestone[] = [
  {
    timeStart: 0.0,
    timeEnd: 0.83,
    stageNumber: "01",
    shortTitle: "Site Prep",
    title: "Track Corridor Demarcation & Soil Survey",
    category: "Phase 1: Substructure",
    spec: "RDSO Category-A alignment • Geotechnical ground survey clearance",
    dwellLabel: "Corridor Safety Envelope & Bedrock Piling Verified",
  },
  {
    timeStart: 0.83,
    timeEnd: 1.67,
    stageNumber: "02",
    shortTitle: "Rotary Piling",
    title: "Foundation Excavation & Cast-in-Situ Piling",
    category: "Phase 1: Substructure",
    spec: "1200mm Dia Bored Piles • M35 Grade Concrete",
    dwellLabel: "Hydraulic Rotary Rig Boring to Hard Bedrock",
  },
  {
    timeStart: 1.67,
    timeEnd: 2.50,
    stageNumber: "03",
    shortTitle: "Pile Caps",
    title: "Reinforced Pile Cap & Substructure Footings",
    category: "Phase 1: Substructure",
    spec: "Fe500D TMT Reinforcement • Monolithic Concrete Casting",
    dwellLabel: "Monolithic Pile Caps & Integrated Anchor Bolts Cast",
  },
  {
    timeStart: 2.50,
    timeEnd: 3.33,
    stageNumber: "04",
    shortTitle: "Pier Shuttering",
    title: "Pier Column Shuttering & Rebar Caging",
    category: "Phase 2: Heavy Pier Substructure",
    spec: "Heavy Modular Shuttering • Verticality tolerance ±3mm",
    dwellLabel: "Vertical Rebar Cages Plumb Aligned via Optical Theodolite",
  },
  {
    timeStart: 3.33,
    timeEnd: 4.17,
    stageNumber: "05",
    shortTitle: "Pier Columns",
    title: "Monolithic Pier Columns Cast & Cured",
    category: "Phase 2: Heavy Pier Substructure",
    spec: "M40 Self-Compacting Mix • 7.5m Clear Height",
    dwellLabel: "Self-Compacting Concrete Poured with Temperature Monitoring",
  },
  {
    timeStart: 4.17,
    timeEnd: 5.00,
    stageNumber: "06",
    shortTitle: "Pot Bearings",
    title: "Pier Cap Casting & Multi-Directional Pot Bearings",
    category: "Phase 2: Heavy Pier Substructure",
    spec: "Multi-Directional Pot Bearings • ±150mm Thermal Stroke",
    dwellLabel: "Elastomeric Pot Bearings & Plinth Seating Aligned",
  },
  {
    timeStart: 5.00,
    timeEnd: 5.83,
    stageNumber: "07",
    shortTitle: "Girder Launch",
    title: "RDSO Steel Girder Erection & Launching",
    category: "Phase 3: Superstructure Erection",
    spec: "IS 2062 E350/E450 BR Steel • 185-Tonne Crane Lift",
    dwellLabel: "185-Tonne Bowstring Girder Locked Over Railway Tracks",
  },
  {
    timeStart: 5.83,
    timeEnd: 6.67,
    stageNumber: "08",
    shortTitle: "Cross-Bracing",
    title: "Span Alignment & Diaphragm Cross-Bracing",
    category: "Phase 3: Superstructure Erection",
    spec: "Grade 10.9 HSFG Bolted Splices • Calibrated Torque Tension",
    dwellLabel: "High-Strength Friction Grip Bolting on Lateral Diaphragms",
  },
  {
    timeStart: 6.67,
    timeEnd: 7.50,
    stageNumber: "09",
    shortTitle: "Deck Casting",
    title: "Composite Orthotropic Deck Slab Casting",
    category: "Phase 3: Superstructure Erection",
    spec: "22mm Welded Shear Studs • 32.5T Heavy Freight Axle Rating",
    dwellLabel: "Drawn-Arc Shear Studs Welded for Composite Action",
  },
  {
    timeStart: 7.50,
    timeEnd: 8.33,
    stageNumber: "10",
    shortTitle: "Parapets & Road",
    title: "Bituminous Mastic Wearing Coat & Crash Barriers",
    category: "Phase 4: Deck Installation & Commissioning",
    spec: "IRC:83 Parapet Crash Rating • 65mm High-Density Asphalt",
    dwellLabel: "Crash-Tested W-Beam Parapets & Anti-Skid Wearing Layer",
  },
  {
    timeStart: 8.33,
    timeEnd: 9.17,
    stageNumber: "11",
    shortTitle: "Thermal Spray",
    title: "Protective Thermal Spray & Overhead Electrification",
    category: "Phase 4: Deck Installation & Commissioning",
    spec: "RDSO M&C/PCN/102 • 150µm Zinc Thermal Spray Coating",
    dwellLabel: "Zinc Thermal Spray Barrier & Railway Catenary Guards Installed",
  },
  {
    timeStart: 9.17,
    timeEnd: 10.00,
    stageNumber: "12",
    shortTitle: "Load Test",
    title: "Static/Dynamic Load Testing & Commissioning",
    category: "Phase 4: Deck Installation & Commissioning",
    spec: "L/1200 Deflection Verified • Indian Railways RDSO Certified",
    dwellLabel: "Completed 72m Railway Over Bridge Trial Certified",
  },
];

/**
 * Smooth monotonic mapping from scroll progress (0..1) to video timestamp (0..duration)
 * Integrates:
 * 1. Steady dynamic construction movement across each stage
 * 2. Dedicated visual observation pause/plateau (55% to 85% of stage track)
 * 3. Gentle, gradual cubic easing transitions between consecutive stages
 */
function mapProgressToVideoTime(progress: number, duration: number): number {
  if (progress <= 0) return 0;
  if (progress >= 1) return duration;

  const totalStages = ROB_VIDEO_MILESTONES.length;
  const stageInterval = 1 / totalStages; // 0.25 per stage
  const currentStageIdx = Math.min(totalStages - 1, Math.floor(progress / stageInterval));

  // Local progress within this stage (0.0 to 1.0)
  const u = (progress - currentStageIdx * stageInterval) / stageInterval;

  const stageDuration = duration / totalStages;
  const stageStartTime = currentStageIdx * stageDuration;

  let localTimeFraction: number;

  if (u < 0.55) {
    // Action phase (0% to 55% of stage scroll): smooth ease-out progress across 0% -> 82% of stage action
    const tNorm = u / 0.55;
    const eased = 1 - Math.pow(1 - tNorm, 2.5);
    localTimeFraction = eased * 0.82;
  } else if (u < 0.85) {
    // Observation Dwell Plateau (55% to 85% of stage scroll):
    // Micro-motion slow-down giving visitors ample time to examine the structural details
    const tNorm = (u - 0.55) / 0.3;
    localTimeFraction = 0.82 + tNorm * 0.08;
  } else {
    // Exit transition phase (85% to 100% of stage scroll):
    // Smooth, gradual acceleration curve into the consecutive stage
    const tNorm = (u - 0.85) / 0.15;
    const smooth = tNorm * tNorm * (3 - 2 * tNorm);
    localTimeFraction = 0.9 + smooth * 0.1;
  }

  const resultTime = stageStartTime + localTimeFraction * stageDuration;
  return Math.max(0, Math.min(duration, resultTime));
}

export default function ROBVideoScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Direct DOM references for zero React re-render overhead on high-frequency scroll ticks
  const progressBarRef = useRef<HTMLDivElement>(null);
  const stageBadgeRef = useRef<HTMLSpanElement>(null);
  const stageTitleRef = useRef<HTMLSpanElement>(null);
  const timeDisplayRef = useRef<HTMLSpanElement>(null);
  const percentDisplayRef = useRef<HTMLSpanElement>(null);
  const dwellIndicatorRef = useRef<HTMLDivElement>(null);
  const dwellTextRef = useRef<HTMLSpanElement>(null);
  const stagePillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Cinematic Steel Reveal Transition Refs (ROB Entrance)
  const entranceMaskRef = useRef<HTMLDivElement>(null);
  const entranceGoldLineRef = useRef<HTMLDivElement>(null);
  const entranceLightSweepRef = useRef<HTMLDivElement>(null);
  const entranceChapterTitleRef = useRef<HTMLDivElement>(null);
  const hudContainerRef = useRef<HTMLDivElement>(null);
  const bottomStagePillsRef = useRef<HTMLDivElement>(null);

  // Smooth seeking and scrub state
  const targetProgressRef = useRef<number>(0);
  const smoothedProgressRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const pendingSeekTimeRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const activeMilestoneIndexRef = useRef<number>(0);
  const isAutoPlayingRef = useRef<boolean>(false);
  const videoDurationRef = useRef<number>(10.0);

  // React UI state
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [activeStagePill, setActiveStagePill] = useState<number>(0);
  const [fitMode, setFitMode] = useState<"cover" | "contain">("cover");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mq.matches);
      const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);

  // Track fullscreen changes
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  /**
   * Update HUD Elements directly via DOM refs (0 React re-renders)
   */
  const updateHUD = useCallback((milestoneIndex: number) => {
    const milestone = ROB_VIDEO_MILESTONES[milestoneIndex] || ROB_VIDEO_MILESTONES[0];

    if (stageBadgeRef.current) {
      stageBadgeRef.current.textContent = `STAGE ${milestone.stageNumber} / 12`;
    }
    if (stageTitleRef.current) {
      stageTitleRef.current.textContent = `${milestone.shortTitle}`;
    }
    if (dwellTextRef.current) {
      dwellTextRef.current.textContent = milestone.dwellLabel;
    }

    setActiveStagePill(milestoneIndex);
  }, []);

  /**
   * Safe seek dispatcher that avoids overwhelming browser video decode queue
   */
  const dispatchSeek = useCallback((targetTime: number) => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) return;

    const clampedTime = Math.max(0, Math.min(videoDurationRef.current, targetTime));

    if (!video.seeking && !isSeekingRef.current) {
      if (Math.abs(video.currentTime - clampedTime) > 0.012) {
        isSeekingRef.current = true;
        video.currentTime = clampedTime;
      }
    } else {
      pendingSeekTimeRef.current = clampedTime;
    }
  }, []);

  /**
   * Video Seeked event listener - unblocks queue and processes pending seek
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleSeeked = () => {
      isSeekingRef.current = false;
      if (pendingSeekTimeRef.current !== null) {
        const nextTime = pendingSeekTimeRef.current;
        pendingSeekTimeRef.current = null;
        if (Math.abs(video.currentTime - nextTime) > 0.012) {
          isSeekingRef.current = true;
          video.currentTime = nextTime;
        }
      }
    };

    const handleSeeking = () => {
      isSeekingRef.current = true;
    };

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        videoDurationRef.current = video.duration;
      }
      setVideoLoaded(true);
      // Prime first frame on GPU
      video.currentTime = 0.001;
      video.pause();
      updateHUD(0);
    };

    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("seeking", handleSeeking);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("seeking", handleSeeking);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [updateHUD]);

  /**
   * High-performance Scroll Tracking & Smooth Interpolation Loop
   * Full-screen 100vw x 100vh viewport with 680vh scroll track
   */
  useEffect(() => {
    if (reducedMotion) return;

    let isRunning = true;

    const onScroll = () => {
      if (isAutoPlayingRef.current) return;
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const navbarOffset = 72; // aligns with sticky navbar top
      const scrollableDistance = container.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const currentScroll = -rect.top + navbarOffset;
      const progress = Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);
      targetProgressRef.current = progress;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    // Dedicated RequestAnimationFrame smooth lerp loop
    const tick = () => {
      if (!isRunning) return;

      if (!isAutoPlayingRef.current) {
        const diff = targetProgressRef.current - smoothedProgressRef.current;
        const absDiff = Math.abs(diff);

        if (absDiff > 0.0001) {
          // Velvety GSAP-style weighted scrub
          const damping = absDiff > 0.15 ? 0.11 : absDiff > 0.03 ? 0.08 : 0.06;
          smoothedProgressRef.current += diff * damping;

          const progress = smoothedProgressRef.current;
          
          // Map smoothed progress through our monotonic dwell-plateau timing curve
          const targetTime = mapProgressToVideoTime(progress, videoDurationRef.current);

          // Dispatch video seek
          dispatchSeek(targetTime);

          // Update Progress Bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
          }

          // Update Time & Percent HUD
          if (timeDisplayRef.current) {
            timeDisplayRef.current.textContent = `00:0${targetTime.toFixed(1)}s / 00:${videoDurationRef.current.toFixed(1)}s`;
          }
          if (percentDisplayRef.current) {
            percentDisplayRef.current.textContent = `${Math.round(progress * 100)}%`;
          }

          // Check if current progress is in an observation dwell zone (50% to 86% of stage)
          const totalStages = ROB_VIDEO_MILESTONES.length;
          const stageInterval = 1 / totalStages;
          const currentStage = Math.min(totalStages - 1, Math.floor(progress / stageInterval));
          const localU = (progress - currentStage * stageInterval) / stageInterval;
          const isDwellZone = localU >= 0.50 && localU <= 0.86;

          if (dwellIndicatorRef.current) {
            dwellIndicatorRef.current.style.opacity = isDwellZone ? "1" : "0";
            dwellIndicatorRef.current.style.transform = isDwellZone ? "translateY(0)" : "translateY(6px)";
          }

          // ==================== CINEMATIC STEEL REVEAL (ROB ENTRANCE) ====================
          // Smooth handover from the Hero exit: progress 0.00 to 0.08
          const entranceT = Math.min(1, Math.max(0, progress / 0.08));

          // 1. Cinematic Chapter Title Overlay: smooth opacity fade and graceful upward lift
          if (entranceChapterTitleRef.current) {
            const titleOpacity = Math.max(0, 1 - entranceT * 1.35);
            entranceChapterTitleRef.current.style.opacity = String(titleOpacity);
            entranceChapterTitleRef.current.style.transform = `translateY(-${entranceT * 28}px)`;
            entranceChapterTitleRef.current.style.display = titleOpacity > 0.01 ? "flex" : "none";
          }

          // 2. Entrance Mask (soft dark-to-steel veil lifting as ROB scene settles)
          if (entranceMaskRef.current) {
            const maskOpacity = Math.max(0, 1 - entranceT);
            entranceMaskRef.current.style.opacity = String(maskOpacity);
            entranceMaskRef.current.style.pointerEvents = maskOpacity > 0.1 ? "auto" : "none";
          }

          // 3. Video subtle entrance scale settle (1.02 -> 1.00)
          if (videoRef.current) {
            const videoScale = 1.02 - entranceT * 0.02;
            videoRef.current.style.transform = `scale(${videoScale}) translateZ(0)`;
          }

          // 4. Champagne-Gold Sweep Line completion (starts at 100% width and recedes gracefully)
          if (entranceGoldLineRef.current) {
            const lineOpacity = Math.max(0, 1 - entranceT * 1.4);
            const lineWidth = Math.max(0, 100 - entranceT * 35);
            entranceGoldLineRef.current.style.opacity = String(lineOpacity);
            entranceGoldLineRef.current.style.width = `${lineWidth}%`;
          }

          // 5. Subtle Steel Sweep Light Reflection concluding across boundary
          if (entranceLightSweepRef.current) {
            const sweepOpacity = Math.max(0, (1 - entranceT * 1.5) * 0.55);
            const sweepX = entranceT * 100;
            entranceLightSweepRef.current.style.opacity = String(sweepOpacity);
            entranceLightSweepRef.current.style.transform = `translateX(${sweepX}%)`;
          }

          // 6. Floating HUD & Stage Pills graceful fade-in
          if (hudContainerRef.current) {
            const hudOpacity = Math.max(0, Math.min(1, (entranceT - 0.40) / 0.55));
            hudContainerRef.current.style.opacity = String(hudOpacity);
          }
          if (bottomStagePillsRef.current) {
            const pillsOpacity = Math.max(0, Math.min(1, (entranceT - 0.50) / 0.50));
            bottomStagePillsRef.current.style.opacity = String(pillsOpacity);
          }

          // Determine Active Milestone
          if (currentStage !== activeMilestoneIndexRef.current) {
            activeMilestoneIndexRef.current = currentStage;
            updateHUD(currentStage);
          }
        }
      } else {
        // Auto-play mode active
        const video = videoRef.current;
        if (video) {
          const progress = video.currentTime / videoDurationRef.current;
          smoothedProgressRef.current = progress;
          targetProgressRef.current = progress;

          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress * 100}%`;
          }
          if (timeDisplayRef.current) {
            timeDisplayRef.current.textContent = `00:0${video.currentTime.toFixed(1)}s / 00:${videoDurationRef.current.toFixed(1)}s`;
          }
          if (percentDisplayRef.current) {
            percentDisplayRef.current.textContent = `${Math.round(progress * 100)}%`;
          }

          const entranceT = Math.min(1, Math.max(0, progress / 0.08));
          if (entranceChapterTitleRef.current) {
            const titleOpacity = Math.max(0, 1 - entranceT * 1.35);
            entranceChapterTitleRef.current.style.opacity = String(titleOpacity);
            entranceChapterTitleRef.current.style.transform = `translateY(-${entranceT * 28}px)`;
            entranceChapterTitleRef.current.style.display = titleOpacity > 0.01 ? "flex" : "none";
          }
          if (entranceMaskRef.current) {
            const maskOpacity = Math.max(0, 1 - entranceT);
            entranceMaskRef.current.style.opacity = String(maskOpacity);
            entranceMaskRef.current.style.pointerEvents = maskOpacity > 0.1 ? "auto" : "none";
          }
          if (hudContainerRef.current) {
            const hudOpacity = Math.max(0, Math.min(1, (entranceT - 0.40) / 0.55));
            hudContainerRef.current.style.opacity = String(hudOpacity);
          }
          if (bottomStagePillsRef.current) {
            const pillsOpacity = Math.max(0, Math.min(1, (entranceT - 0.50) / 0.50));
            bottomStagePillsRef.current.style.opacity = String(pillsOpacity);
          }

          let activeIndex = 0;
          for (let i = 0; i < ROB_VIDEO_MILESTONES.length; i++) {
            if (video.currentTime >= ROB_VIDEO_MILESTONES[i].timeStart && video.currentTime <= ROB_VIDEO_MILESTONES[i].timeEnd) {
              activeIndex = i;
              break;
            }
          }
          if (activeIndex !== activeMilestoneIndexRef.current) {
            activeMilestoneIndexRef.current = activeIndex;
            updateHUD(activeIndex);
          }

          if (video.ended) {
            setIsAutoPlaying(false);
            isAutoPlayingRef.current = false;
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      isRunning = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [dispatchSeek, reducedMotion, updateHUD]);

  // Jump to specific milestone stage smoothly
  const jumpToStage = (stageIndex: number) => {
    if (isAutoPlaying) {
      videoRef.current?.pause();
      setIsAutoPlaying(false);
      isAutoPlayingRef.current = false;
    }

    const container = containerRef.current;
    if (!container) return;

    // Center of dwell observation plateau for this stage
    const totalStages = ROB_VIDEO_MILESTONES.length;
    const targetP = (stageIndex + 0.65) / totalStages;
    const scrollableDistance = container.offsetHeight - window.innerHeight;
    const targetScrollY = container.offsetTop - 72 + targetP * scrollableDistance;

    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  // Toggle Auto-Play Preview
  const toggleAutoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isAutoPlaying) {
      video.pause();
      setIsAutoPlaying(false);
      isAutoPlayingRef.current = false;
    } else {
      if (video.ended || video.currentTime >= videoDurationRef.current - 0.1) {
        video.currentTime = 0;
      }
      video
        .play()
        .then(() => {
          setIsAutoPlaying(true);
          isAutoPlayingRef.current = true;
        })
        .catch(() => {
          // Playback blocked or failed
        });
    }
  };

  // Reset to Start
  const resetToTop = () => {
    if (isAutoPlaying) {
      videoRef.current?.pause();
      setIsAutoPlaying(false);
      isAutoPlayingRef.current = false;
    }
    if (containerRef.current) {
      const topPos = containerRef.current.offsetTop - 72;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
    targetProgressRef.current = 0;
    if (entranceChapterTitleRef.current) {
      entranceChapterTitleRef.current.style.opacity = "1";
      entranceChapterTitleRef.current.style.transform = "translateY(0)";
      entranceChapterTitleRef.current.style.display = "flex";
    }
    if (entranceMaskRef.current) entranceMaskRef.current.style.opacity = "1";
    if (entranceGoldLineRef.current) {
      entranceGoldLineRef.current.style.opacity = "1";
      entranceGoldLineRef.current.style.width = "100%";
    }
    if (videoRef.current) videoRef.current.style.transform = "scale(1.02) translateZ(0)";
    if (hudContainerRef.current) hudContainerRef.current.style.opacity = "0";
    if (bottomStagePillsRef.current) bottomStagePillsRef.current.style.opacity = "0";
    dispatchSeek(0);
  };

  // Toggle Fullscreen Mode
  const toggleFullscreen = () => {
    if (!viewportRef.current) return;
    if (!document.fullscreenElement) {
      if (viewportRef.current.requestFullscreen) {
        viewportRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="rob-erection-sequence"
      className={`relative w-full bg-[#080C10] text-[#F8F7F2] select-none z-20 ${
        reducedMotion ? "" : "-mt-[calc(100vh-4.5rem)] sm:-mt-[calc(100dvh-72px)]"
      }`}
      style={{
        // 600vh provides smooth, deliberate cinematic scroll-scrubbing with observation pauses across all 12 stages
        height: reducedMotion ? "auto" : "600vh",
      }}
      aria-label="RDSO 72M Bowstring Girder ROB 12-Stage Erection Sequence"
    >
      {/* ==================== PINNED CINEMATIC FULL-SCREEN VIEWPORT ==================== */}
      <div
        ref={viewportRef}
        className={
          reducedMotion
            ? "relative w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            : "sticky top-18 sm:top-[72px] h-[calc(100vh-4.5rem)] sm:h-[calc(100dvh-72px)] w-full overflow-hidden bg-[#080C10]"
        }
      >
        {/* Subtle Ambient Engineering Backdrops */}
        <AnimatedBackground variant="gradient-flow" theme="dark" opacity={0.2} />
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-15 z-5" />

        {/* Ambient Dark Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-15"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(8,12,16,0) 50%, rgba(8,12,16,0.7) 100%)",
          }}
        />

        {/* ==================== 1. FULL-PAGE PROPORTIONALLY SCALED VIDEO ==================== */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-[#080C10] z-10">
          <video
            ref={videoRef}
            src="/videos/rob_erection.mp4"
            preload="auto"
            muted
            playsInline
            // @ts-ignore webkit-playsinline standard attribute for iOS Safari
            webkit-playsinline="true"
            disablePictureInPicture
            disableRemotePlayback
            className={`w-full h-full pointer-events-none select-none transition-all duration-300 ${
              fitMode === "cover" ? "object-cover object-center" : "object-contain object-center"
            }`}
            style={{
              backgroundColor: "#080C10",
              transform: "scale(1.02) translateZ(0)",
              imageRendering: "-webkit-optimize-contrast",
            }}
          />

          {/* Initial Loader while video buffers */}
          {!videoLoaded && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#080C10] text-[#FFFFFF]">
              <div className="h-10 w-10 rounded-full border-2 border-[#39434D] border-t-[#D6B36A] animate-spin mb-3" />
              <span className="text-xs font-mono tracking-widest text-[#D6B36A] uppercase font-semibold text-shadow-subtle">
                Buffering Full-Screen ROB Erection Sequence...
              </span>
            </div>
          )}
        </div>

        {/* ==================== CINEMATIC STEEL REVEAL (ROB ENTRANCE) ==================== */}
        {/* Entrance Veil Mask: Soft dark-to-steel gradient that smoothly lifts */}
        <div
          ref={entranceMaskRef}
          className={`absolute inset-0 pointer-events-none z-22 will-change-opacity ${
            reducedMotion ? "hidden" : ""
          }`}
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(32,42,51,0.65) 0%, rgba(16,24,32,0.95) 55%, #080C10 100%)",
            opacity: 1,
          }}
        />

        {/* ==================== CINEMATIC CHAPTER TITLE ENTRANCE OVERLAY ==================== */}
        <div
          ref={entranceChapterTitleRef}
          className={`absolute inset-0 z-24 pointer-events-none flex flex-col items-center justify-center px-6 text-center will-change-transform will-change-opacity ${
            reducedMotion ? "hidden" : ""
          }`}
          style={{ opacity: 1 }}
        >
          {/* Eyebrow: VAISHNAV ENGINEERING PRESENTS, small uppercase champagne gold */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101820]/85 border border-[#D6B36A]/50 backdrop-blur-md mb-4 sm:mb-5 shadow-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6B36A] animate-pulse" />
            <span
              className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.3em] text-[#D6B36A] uppercase text-shadow-subtle"
              style={{ color: "#D6B36A" }}
            >
              VAISHNAV ENGINEERING PRESENTS
            </span>
          </div>

          {/* Main Title: Large, bold, pure white */}
          <h2
            className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.14em] text-[#FFFFFF] uppercase leading-none text-shadow-cinematic"
            style={{ color: "#FFFFFF" }}
          >
            <span className="text-[#FFFFFF]" style={{ color: "#FFFFFF" }}>ROB BRIDGE</span>
          </h2>

          {/* Champagne-Gold Divider Line with Shimmer */}
          <div className="w-full max-w-md my-4 sm:my-5 flex items-center justify-center">
            <div
              ref={entranceGoldLineRef}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-[#D6B36A] to-transparent will-change-transform will-change-opacity"
              style={{
                width: "100%",
                opacity: 1,
                boxShadow: "0 0 16px rgba(214,179,106,0.6), 0 0 32px rgba(214,179,106,0.25)",
              }}
            />
          </div>

          {/* Secondary Title: Champagne gold (#D6B36A), medium-bold, with refined letter spacing */}
          <div
            className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.22em] text-[#D6B36A] uppercase leading-tight text-shadow-subtle"
            style={{ color: "#D6B36A" }}
          >
            CONCEPT TO COMPLETION
          </div>

          {/* Supporting Tagline: Warm ivory (#F5F1E8) */}
          <p
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-body tracking-[0.16em] text-[#F5F1E8] uppercase font-medium max-w-lg text-shadow-subtle"
            style={{ color: "#F5F1E8" }}
          >
            The Engineering Behind Every Span
          </p>
        </div>

        {/* Horizontal Light Sweep concluding its travel */}
        <div
          className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 pointer-events-none z-23 overflow-hidden ${
            reducedMotion ? "hidden" : ""
          }`}
        >
          <div
            ref={entranceLightSweepRef}
            className="w-1/2 h-full will-change-transform will-change-opacity"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(214,179,106,0.10) 30%, rgba(255,255,255,0.35) 50%, rgba(214,179,106,0.10) 70%, transparent 100%)",
              opacity: 0.5,
              transform: "translateX(0%)",
            }}
          />
        </div>

        {/* Precision CAD Corner Reticles across Full Viewport */}
        <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#D6B36A]/75 pointer-events-none z-25" />
        <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#D6B36A]/75 pointer-events-none z-25" />
        <div className="absolute bottom-6 left-4 w-5 h-5 border-b-2 border-l-2 border-[#D6B36A]/75 pointer-events-none z-25" />
        <div className="absolute bottom-6 right-4 w-5 h-5 border-b-2 border-r-2 border-[#D6B36A]/75 pointer-events-none z-25" />

        {/* ==================== 2. FLOATING TOP HUD (NON-INTRUSIVE GLASS OVERLAY) ==================== */}
        <div
          ref={hudContainerRef}
          className="absolute inset-x-0 top-0 z-25 pointer-events-none transition-opacity duration-200 will-change-opacity"
          style={{ opacity: 0 }}
        >
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-3 pointer-events-none">
            {/* Left: Engineering Badge & Phase Indicator */}
            <div className="flex items-center gap-2 pointer-events-auto">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101820]/90 border border-[#39434D]/80 backdrop-blur-md shadow-xl">
                <Compass className="h-3.5 w-3.5 text-[#D6B36A]" />
                <span
                  className="text-[10.5px] font-mono tracking-widest text-[#D6B36A] uppercase font-bold hidden sm:inline text-shadow-subtle"
                  style={{ color: "#D6B36A" }}
                >
                  RDSO IRS B1
                </span>
                <span className="h-1 w-1 rounded-full bg-[#E5E7EB]/40 hidden sm:inline" />
                <span
                  ref={stageBadgeRef}
                  className="text-xs font-mono font-extrabold text-[#FFFFFF] tracking-wider text-shadow-subtle"
                  style={{ color: "#FFFFFF" }}
                >
                  STAGE 01 / 12
                </span>
                <span className="h-1 w-1 rounded-full bg-[#D6B36A] animate-pulse" />
                <span
                  ref={stageTitleRef}
                  className="text-xs font-heading font-bold text-[#D6B36A] tracking-tight hidden md:inline text-shadow-subtle"
                  style={{ color: "#D6B36A" }}
                >
                  Site Prep
                </span>
              </div>
            </div>

            {/* Center: Observation Dwell Indicator (Floats into view during observation plateaus) */}
            <div
              ref={dwellIndicatorRef}
              className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101820]/90 border border-[#D6B36A]/70 backdrop-blur-md shadow-xl transition-all duration-300 opacity-0 translate-y-1.5 pointer-events-auto"
            >
              <Eye className="h-3.5 w-3.5 text-[#D6B36A]" />
              <span
                ref={dwellTextRef}
                className="text-[11px] font-mono font-semibold text-[#F5F1E8] tracking-wide text-shadow-subtle"
                style={{ color: "#F5F1E8" }}
              >
                Corridor Safety Envelope & Bedrock Piling Verified
              </span>
            </div>

            {/* Right: 12-Stage Quick Jump Navigator */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#101820]/90 border border-[#39434D]/80 backdrop-blur-md shadow-xl pointer-events-auto overflow-x-auto max-w-[280px] sm:max-w-none">
              {ROB_VIDEO_MILESTONES.map((m, idx) => {
                const isActive = activeStagePill === idx;
                return (
                  <button
                    key={m.stageNumber}
                    type="button"
                    onClick={() => jumpToStage(idx)}
                    ref={(el) => {
                      stagePillRefs.current[idx] = el;
                    }}
                    className={`flex items-center justify-center min-w-[24px] sm:min-w-[26px] h-6 px-1 rounded-md text-[10px] sm:text-[10.5px] font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#D6B36A] text-[#101820] shadow-sm font-black"
                        : "text-[#E5E7EB] hover:text-[#FFFFFF] hover:bg-[#202A33]/80"
                    }`}
                    style={{
                      color: isActive ? "#101820" : "#E5E7EB",
                    }}
                    title={`Stage ${m.stageNumber}: ${m.title}`}
                  >
                    <span>{m.stageNumber}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Engineering Yard Watermark (Top Right Sub-badge) */}
          <div className="absolute top-16 right-4 pointer-events-none hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0A0E13]/85 border border-[#39434D]/60 backdrop-blur-xs text-[9.5px] font-mono text-[#D6B36A] font-semibold tracking-wider text-shadow-subtle" style={{ color: "#D6B36A" }}>
            <ShieldCheck className="h-3 w-3 text-[#D6B36A]" />
            VAISHNAV 72M BOWSTRING GIRDER ROB ERECTION (12 STAGES)
          </div>

          {/* Live Video Timecode (Top Left Sub-badge) */}
          <div className="absolute top-16 left-4 pointer-events-none hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-[#0A0E13]/85 border border-[#39434D]/60 backdrop-blur-xs text-[10px] font-mono text-[#FFFFFF] font-semibold text-shadow-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6B36A] animate-ping" />
            <span ref={timeDisplayRef} style={{ color: "#FFFFFF" }}>00:00.0s / 00:10.0s</span>
            <span className="text-[#E5E7EB]/40">|</span>
            <span ref={percentDisplayRef} className="text-[#D6B36A] font-bold" style={{ color: "#D6B36A" }}>
              0%
            </span>
          </div>
        </div>

        {/* ==================== 3. FLOATING BOTTOM CONTROLS BAR (STREAMLINED & ELEGANT) ==================== */}
        <div
          ref={bottomStagePillsRef}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-25 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101820]/90 border border-[#39434D]/80 backdrop-blur-md shadow-2xl transition-opacity duration-200 will-change-opacity"
          style={{ opacity: 0 }}
        >
          {/* Play / Pause Toggle */}
          <button
            type="button"
            onClick={toggleAutoPlay}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#202A33] hover:bg-[#D6B36A] text-[#FFFFFF] hover:text-[#101820] text-xs font-mono font-bold transition-all cursor-pointer"
            style={{ color: "#FFFFFF" }}
            title={isAutoPlaying ? "Pause Video" : "Auto-Play Video"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="h-3 w-3" />
                <span>PAUSE</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3" />
                <span>PLAY</span>
              </>
            )}
          </button>

          <span className="h-3.5 w-px bg-[#39434D]" />

          {/* Reset to Start */}
          <button
            type="button"
            onClick={resetToTop}
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#202A33] hover:bg-[#D6B36A] text-[#E5E7EB] hover:text-[#101820] text-xs font-mono transition-all cursor-pointer"
            style={{ color: "#E5E7EB" }}
            title="Reset to Top"
          >
            <RotateCcw className="h-3 w-3" />
            <span className="hidden sm:inline">RESET</span>
          </button>

          <span className="h-3.5 w-px bg-[#39434D]" />

          {/* Fit Mode Toggle: COVER vs CONTAIN */}
          <button
            type="button"
            onClick={() => setFitMode(fitMode === "cover" ? "contain" : "cover")}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#202A33] hover:bg-[#D6B36A] text-[#E5E7EB] hover:text-[#101820] text-xs font-mono font-bold transition-all cursor-pointer"
            style={{ color: "#E5E7EB" }}
            title={fitMode === "cover" ? "Switch to Contain (Full Frame)" : "Switch to Cover (Full Viewport Fill)"}
          >
            <Sliders className="h-3 w-3" />
            <span className="uppercase">{fitMode}</span>
          </button>

          <span className="h-3.5 w-px bg-[#39434D]" />

          {/* Native Fullscreen Expand */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center justify-center h-6 w-6 rounded-full bg-[#202A33] hover:bg-[#D6B36A] text-[#E5E7EB] hover:text-[#101820] transition-all cursor-pointer"
            style={{ color: "#E5E7EB" }}
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
          </button>

          <span className="h-3.5 w-px bg-[#39434D] hidden md:inline" />

          {/* Scroll Scrub Guidance */}
          <div
            className="hidden md:flex items-center gap-1 text-[10px] font-mono text-[#E5E7EB] font-medium text-shadow-subtle pr-1"
            style={{ color: "#E5E7EB" }}
          >
            <span>↕ SCROLL TO SCRUB</span>
          </div>
        </div>

        {/* Precision Progress Line along Bottom Viewport Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#141C24] z-30 overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#202A33] via-[#D6B36A] to-[#E2C785] will-change-transform"
            style={{ width: "0%" }}
          />
        </div>
      </div>

      {/* Seamless Bottom Edge Transition into Specifications */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-30"
        style={{
          background: "linear-gradient(to bottom, rgba(16,24,32,0) 0%, #101820 100%)",
        }}
      />
    </section>
  );
}
