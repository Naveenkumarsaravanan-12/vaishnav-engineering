"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown, Play, Pause, RotateCcw, Sliders, Maximize2, Minimize2 } from "lucide-react";
import AnimatedBackground from "@/components/motion/AnimatedBackground";

const TOTAL_HERO_FRAMES = 120;
const FRAME_BASE_PATH = "/frames/hero/frame_";

export default function CinematicBridgeScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Direct DOM refs for zero React re-render high-frequency updates
  const stageCounterRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const headerOverlayRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const bottomBlendRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const floatingControlsRef = useRef<HTMLDivElement>(null);

  // 1. Engineering Intro Typography Refs (First Animation Overlays)
  const introMsg1Ref = useRef<HTMLDivElement>(null);
  const introMsg2Ref = useRef<HTMLDivElement>(null);
  const introMsg3Ref = useRef<HTMLDivElement>(null);

  // 2. Cinematic Chapter Title Transition Refs (Hero -> ROB Boundary)
  const transitionDarkOverlayRef = useRef<HTMLDivElement>(null);
  const transitionSweepBeamRef = useRef<HTMLDivElement>(null);
  const transitionGoldDividerRef = useRef<HTMLDivElement>(null);
  const transitionChapterTitleRef = useRef<HTMLDivElement>(null);
  const transitionEyebrowRef = useRef<HTMLDivElement>(null);
  const transitionMainTitleRef = useRef<HTMLHeadingElement>(null);
  const transitionSubTitleRef = useRef<HTMLDivElement>(null);
  const transitionTaglineRef = useRef<HTMLParagraphElement>(null);

  // Animation & Scroll State
  const targetProgressRef = useRef<number>(0);
  const smoothedProgressRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const isAutoPlayingRef = useRef<boolean>(false);
  const autoplayLastTimeRef = useRef<number>(0);
  const currentDrawnFrameRef = useRef<number>(-1);

  // Image Cache & Loading State
  const framesCacheRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_HERO_FRAMES).fill(null));
  const loadedMapRef = useRef<boolean[]>(new Array(TOTAL_HERO_FRAMES).fill(false));
  const [initialFrameLoaded, setInitialFrameLoaded] = useState<boolean>(false);
  const [totalLoadedCount, setTotalLoadedCount] = useState<number>(0);

  // React UI controls state
  const [isPlayingAuto, setIsPlayingAuto] = useState<boolean>(false);
  const [fitMode, setFitMode] = useState<"cover" | "contain">("contain");
  const fitModeRef = useRef<"cover" | "contain">("contain");
  fitModeRef.current = fitMode;

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  // Check for prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
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
   * High-Performance Canvas Draw Routine with Proportional Scaling & High-DPI
   */
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Resolve target image or find nearest loaded neighbor to guarantee ZERO blank frames
    let img: HTMLImageElement | null = null;
    if (loadedMapRef.current[frameIndex] && framesCacheRef.current[frameIndex]) {
      img = framesCacheRef.current[frameIndex];
    } else {
      // Find nearest loaded frame
      for (let dist = 1; dist < TOTAL_HERO_FRAMES; dist++) {
        const left = frameIndex - dist;
        const right = frameIndex + dist;
        if (left >= 0 && loadedMapRef.current[left] && framesCacheRef.current[left]) {
          img = framesCacheRef.current[left];
          break;
        }
        if (right < TOTAL_HERO_FRAMES && loadedMapRef.current[right] && framesCacheRef.current[right]) {
          img = framesCacheRef.current[right];
          break;
        }
      }
    }

    if (!img) return;

    // Viewport dimensions
    const displayW = canvas.clientWidth;
    const displayH = canvas.clientHeight;
    if (displayW <= 0 || displayH <= 0) return;

    // Set canvas internal resolution with DPR clamp to 2.0 for maximum sharpness without memory bloat
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const targetW = Math.round(displayW * dpr);
    const targetH = Math.round(displayH * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Proportional scaling math
    const imgW = img.naturalWidth || 1920;
    const imgH = img.naturalHeight || 1080;
    const imgRatio = imgW / imgH;
    const canvasRatio = targetW / targetH;

    let renderW: number;
    let renderH: number;
    let offsetX: number;
    let offsetY: number;

    const currentFit = fitModeRef.current;

    if (currentFit === "cover") {
      if (canvasRatio > imgRatio) {
        renderW = targetW;
        renderH = targetW / imgRatio;
        offsetX = 0;
        offsetY = (targetH - renderH) / 2;
      } else {
        renderH = targetH;
        renderW = targetH * imgRatio;
        offsetX = (targetW - renderW) / 2;
        offsetY = 0;
      }
    } else {
      // "contain" - pristine full frame presentation without cropping bridge details
      if (canvasRatio > imgRatio) {
        renderH = targetH;
        renderW = targetH * imgRatio;
        offsetX = (targetW - renderW) / 2;
        offsetY = 0;
      } else {
        renderW = targetW;
        renderH = targetW / imgRatio;
        offsetX = 0;
        offsetY = (targetH - renderH) / 2;
      }
    }

    // Fill background with deep engineering navy
    ctx.fillStyle = "#101820";
    ctx.fillRect(0, 0, targetW, targetH);

    // Render crisp 1080p frame onto GPU surface
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    currentDrawnFrameRef.current = frameIndex;
  }, []);

  /**
   * Redraw current frame when container is resized or fitMode changes
   */
  useEffect(() => {
    const handleResize = () => {
      if (currentDrawnFrameRef.current >= 0) {
        drawFrame(currentDrawnFrameRef.current);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  // Redraw when fitMode changes
  useEffect(() => {
    if (currentDrawnFrameRef.current >= 0) {
      drawFrame(currentDrawnFrameRef.current);
    }
  }, [fitMode, drawFrame]);

  /**
   * Multi-Phase Progressive Image Preloader:
   * Phase 1: Frame 1 loaded & decoded immediately for instant visual hero display
   * Phase 2: Milestone stride frames (every 6th frame) for rapid scroll coverage
   * Phase 3: Background queue for remaining frames with idle microtasks
   */
  useEffect(() => {
    let isCancelled = false;

    const loadSingleImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        if (framesCacheRef.current[index] && loadedMapRef.current[index]) {
          resolve(framesCacheRef.current[index]!);
          return;
        }

        const img = new Image();
        const frameNum = String(index + 1).padStart(3, "0");
        img.src = `${FRAME_BASE_PATH}${frameNum}.webp`;

        img.onload = () => {
          if (isCancelled) return;
          // Asynchronously decode image on background thread before attaching
          if (typeof img.decode === "function") {
            img
              .decode()
              .then(() => {
                if (isCancelled) return;
                framesCacheRef.current[index] = img;
                loadedMapRef.current[index] = true;
                setTotalLoadedCount((prev) => prev + 1);
                resolve(img);
              })
              .catch(() => {
                framesCacheRef.current[index] = img;
                loadedMapRef.current[index] = true;
                setTotalLoadedCount((prev) => prev + 1);
                resolve(img);
              });
          } else {
            framesCacheRef.current[index] = img;
            loadedMapRef.current[index] = true;
            setTotalLoadedCount((prev) => prev + 1);
            resolve(img);
          }
        };

        img.onerror = (err) => {
          if (isCancelled) return;
          reject(err);
        };
      });
    };

    // Phase 1: Priority load Frame 0 (First Paint)
    loadSingleImage(0)
      .then(() => {
        if (isCancelled) return;
        setInitialFrameLoaded(true);
        drawFrame(0);

        // Phase 2: Load key milestone stride frames across the entire sequence
        const strideIndices: number[] = [];
        for (let i = 0; i < TOTAL_HERO_FRAMES; i += 6) {
          if (i !== 0) strideIndices.push(i);
        }
        if (strideIndices[strideIndices.length - 1] !== TOTAL_HERO_FRAMES - 1) {
          strideIndices.push(TOTAL_HERO_FRAMES - 1);
        }

        return Promise.all(strideIndices.map((idx) => loadSingleImage(idx)));
      })
      .then(() => {
        if (isCancelled) return;

        // Phase 3: Background chunked loading of all remaining intermediate frames
        const remaining: number[] = [];
        for (let i = 0; i < TOTAL_HERO_FRAMES; i++) {
          if (!loadedMapRef.current[i]) {
            remaining.push(i);
          }
        }

        // Process remaining in batches of 4 to prevent network or CPU starvation
        let batchIdx = 0;
        const processNextBatch = () => {
          if (isCancelled || batchIdx >= remaining.length) return;
          const chunk = remaining.slice(batchIdx, batchIdx + 4);
          batchIdx += 4;

          Promise.all(chunk.map((idx) => loadSingleImage(idx))).finally(() => {
            if (!isCancelled) {
              if (typeof window !== "undefined" && "requestIdleCallback" in window) {
                // @ts-ignore
                window.requestIdleCallback(processNextBatch, { timeout: 100 });
              } else {
                setTimeout(processNextBatch, 16);
              }
            }
          });
        };

        processNextBatch();
      })
      .catch(() => {});

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  /**
   * Ultra-Smooth, Zero-Latency Scroll & RequestAnimationFrame Loop
   */
  useEffect(() => {
    if (reducedMotion) return;

    let isRunning = true;

    // Passive scroll listener: synchronous, lightweight calculation
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

    // Synchronized Direct DOM Overlays Update
    const updateOverlays = (progress: number) => {
      // 1. Initial Header Overlay Fade
      if (headerOverlayRef.current) {
        const fade = Math.max(0, 1 - progress * 5.0);
        headerOverlayRef.current.style.opacity = String(fade);
        headerOverlayRef.current.style.transform = `translateY(-${progress * 35}px)`;
        headerOverlayRef.current.style.pointerEvents = fade > 0.05 ? "auto" : "none";
      }

      // 2. Scroll Hint Fade
      if (scrollHintRef.current) {
        const hintFade = Math.max(0, 1 - progress * 10.0);
        scrollHintRef.current.style.opacity = String(hintFade);
      }

      // Helper for trapezoidal progress window [start, peakIn, peakOut, end]
      const calcMessageState = (p: number, start: number, peakIn: number, peakOut: number, end: number) => {
        if (p < start || p > end) {
          return { opacity: 0, translateY: 14, visible: false };
        }
        if (p < peakIn) {
          const t = (p - start) / (peakIn - start);
          return { opacity: t, translateY: (1 - t) * 14, visible: true };
        }
        if (p <= peakOut) {
          return { opacity: 1, translateY: 0, visible: true };
        }
        const t = (end - p) / (end - peakOut);
        return { opacity: t, translateY: -(1 - t) * 14, visible: true };
      };

      // 3. Message 1: “ENGINEERING CONNECTIONS” (0.20 to 0.38)
      if (introMsg1Ref.current) {
        const m1 = calcMessageState(progress, 0.20, 0.25, 0.33, 0.38);
        introMsg1Ref.current.style.opacity = String(m1.opacity);
        introMsg1Ref.current.style.transform = `translateY(${m1.translateY}px)`;
        introMsg1Ref.current.style.display = m1.visible ? "block" : "none";
      }

      // 4. Message 2: “STRENGTH IN EVERY SPAN” (0.41 to 0.59)
      if (introMsg2Ref.current) {
        const m2 = calcMessageState(progress, 0.41, 0.46, 0.54, 0.59);
        introMsg2Ref.current.style.opacity = String(m2.opacity);
        introMsg2Ref.current.style.transform = `translateY(${m2.translateY}px)`;
        introMsg2Ref.current.style.display = m2.visible ? "block" : "none";
      }

      // 5. Message 3: “CONNECTING TOMORROW” (0.62 to 0.80)
      if (introMsg3Ref.current) {
        const m3 = calcMessageState(progress, 0.62, 0.67, 0.75, 0.80);
        introMsg3Ref.current.style.opacity = String(m3.opacity);
        introMsg3Ref.current.style.transform = `translateY(${m3.translateY}px)`;
        introMsg3Ref.current.style.display = m3.visible ? "block" : "none";
      }

      // ==================== CINEMATIC TITLE TRANSITION (EXIT PHASE) ====================
      // Sequence starts at progress 0.83 up to 1.00
      const exitT = Math.max(0, Math.min(1, (progress - 0.83) / 0.17));

      // Phase 1: Canvas slow subtle scale & controlled dimming (maintaining visual continuity)
      if (canvasContainerRef.current) {
        const scale = 1 - exitT * 0.035;
        canvasContainerRef.current.style.transform = `scale(${scale}) translateZ(0)`;
        canvasContainerRef.current.style.opacity = String(Math.max(0.25, 1 - exitT * 0.75));
      }

      // Fade out floating controls
      if (floatingControlsRef.current) {
        const controlsOpacity = Math.max(0, 1 - exitT * 2.8);
        floatingControlsRef.current.style.opacity = String(controlsOpacity);
        floatingControlsRef.current.style.pointerEvents = exitT > 0.25 ? "none" : "auto";
      }

      // Phase 2: Controlled darkening effect over frame
      if (transitionDarkOverlayRef.current) {
        const darkOpacity = Math.min(0.92, exitT * 1.1);
        transitionDarkOverlayRef.current.style.opacity = String(darkOpacity);
      }

      // Phase 3: Restrained champagne-gold light sweep beam across frame
      if (transitionSweepBeamRef.current) {
        const sweepProgress = Math.max(0, Math.min(1, (exitT - 0.10) / 0.70));
        const sweepX = (sweepProgress * 150) - 25;
        const sweepOpacity = Math.sin(sweepProgress * Math.PI) * 0.75;
        transitionSweepBeamRef.current.style.opacity = String(sweepOpacity);
        transitionSweepBeamRef.current.style.transform = `translateX(${sweepX}%)`;
      }

      // Phase 4: Champagne-gold center divider line
      if (transitionGoldDividerRef.current) {
        const lineProgress = Math.max(0, Math.min(1, (exitT - 0.22) / 0.65));
        transitionGoldDividerRef.current.style.width = `${lineProgress * 100}%`;
        transitionGoldDividerRef.current.style.opacity = String(Math.min(1, lineProgress * 1.8));
      }

      // Phase 5: Chapter Title Container & Elements
      if (transitionChapterTitleRef.current) {
        const titleOpacity = Math.max(0, Math.min(1, (exitT - 0.18) / 0.78));
        transitionChapterTitleRef.current.style.opacity = String(titleOpacity);
      }

      // Eyebrow reveal: “VAISHNAV ENGINEERING PRESENTS”
      if (transitionEyebrowRef.current) {
        const ebT = Math.max(0, Math.min(1, (exitT - 0.18) / 0.32));
        transitionEyebrowRef.current.style.opacity = String(ebT);
        transitionEyebrowRef.current.style.transform = `translateY(${(1 - ebT) * 12}px)`;
      }

      // Main Title reveal: “ROB BRIDGE”
      if (transitionMainTitleRef.current) {
        const mtT = Math.max(0, Math.min(1, (exitT - 0.28) / 0.35));
        transitionMainTitleRef.current.style.opacity = String(mtT);
        transitionMainTitleRef.current.style.transform = `translateY(${(1 - mtT) * 22}px)`;
      }

      // Secondary Title reveal: “CONCEPT TO COMPLETION”
      if (transitionSubTitleRef.current) {
        const stT = Math.max(0, Math.min(1, (exitT - 0.38) / 0.35));
        transitionSubTitleRef.current.style.opacity = String(stT);
        transitionSubTitleRef.current.style.transform = `translateY(${(1 - stT) * 16}px)`;
      }

      // Supporting Tagline reveal: “The Engineering Behind Every Span”
      if (transitionTaglineRef.current) {
        const tlT = Math.max(0, Math.min(1, (exitT - 0.50) / 0.35));
        transitionTaglineRef.current.style.opacity = String(tlT);
        transitionTaglineRef.current.style.transform = `translateY(${(1 - tlT) * 10}px)`;
      }

      // Bottom Blend Gradient (into #080C10)
      if (bottomBlendRef.current) {
        const blendOpacity = Math.max(0, Math.min(1, (progress - 0.82) * 5.5));
        bottomBlendRef.current.style.opacity = String(blendOpacity);
      }
    };

    // 60fps / 120fps hardware-synced animation tick
    const tick = (now: number) => {
      if (!isRunning) return;

      if (!isAutoPlayingRef.current) {
        const diff = targetProgressRef.current - smoothedProgressRef.current;
        const absDiff = Math.abs(diff);

        if (absDiff > 0.0001) {
          // Fast, responsive, low-latency scrub (eliminates sluggish lag)
          const damping = absDiff > 0.1 ? 0.35 : absDiff > 0.01 ? 0.28 : 0.22;
          smoothedProgressRef.current += diff * damping;

          if (absDiff < 0.0005) {
            smoothedProgressRef.current = targetProgressRef.current;
          }

          // Smooth clamped progress calculation
          const progress = smoothedProgressRef.current;

          // 120 Hero Disassembly frames scrub smoothly across 0.00 to 0.80
          // leaving 0.80 to 0.83 for the completed exploded structure to hold naturally
          // and 0.83 to 1.00 for the cinematic title transition
          const heroScrubProgress = Math.min(1, Math.max(0, progress / 0.80));
          const frameIndex = Math.min(TOTAL_HERO_FRAMES - 1, Math.max(0, Math.round(heroScrubProgress * (TOTAL_HERO_FRAMES - 1))));

          // Draw frame if index changed
          if (frameIndex !== currentDrawnFrameRef.current) {
            drawFrame(frameIndex);
          }

          // Direct DOM Progress Bar Update (reflects full hero section travel)
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
          }

          // Direct DOM Stage Counter Update
          if (stageCounterRef.current) {
            if (progress >= 0.80) {
              stageCounterRef.current.textContent = `FRAME 120 / ${TOTAL_HERO_FRAMES} • EXPLODED`;
            } else {
              stageCounterRef.current.textContent = `FRAME ${String(frameIndex + 1).padStart(3, "0")} / ${TOTAL_HERO_FRAMES}`;
            }
          }

          // Update all typography and transition overlays directly
          updateOverlays(progress);
        }
      } else {
        // Continuous Autoplay Mode at 24fps
        if (!autoplayLastTimeRef.current) {
          autoplayLastTimeRef.current = now;
        }
        const delta = (now - autoplayLastTimeRef.current) / 1000;
        const advanceRate = 1 / 10.0; // 10.0 seconds total duration

        let nextProgress = targetProgressRef.current + delta * advanceRate;
        if (nextProgress >= 1) {
          nextProgress = 1;
          setIsPlayingAuto(false);
          isAutoPlayingRef.current = false;
        }

        autoplayLastTimeRef.current = now;
        targetProgressRef.current = nextProgress;
        smoothedProgressRef.current = nextProgress;

        const heroScrubProgress = Math.min(1, Math.max(0, nextProgress / 0.80));
        const frameIndex = Math.min(TOTAL_HERO_FRAMES - 1, Math.max(0, Math.round(heroScrubProgress * (TOTAL_HERO_FRAMES - 1))));
        if (frameIndex !== currentDrawnFrameRef.current) {
          drawFrame(frameIndex);
        }

        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${nextProgress * 100}%`;
        }
        if (stageCounterRef.current) {
          if (nextProgress >= 0.80) {
            stageCounterRef.current.textContent = `FRAME 120 / ${TOTAL_HERO_FRAMES} • EXPLODED`;
          } else {
            stageCounterRef.current.textContent = `FRAME ${String(frameIndex + 1).padStart(3, "0")} / ${TOTAL_HERO_FRAMES}`;
          }
        }

        updateOverlays(nextProgress);
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
  }, [drawFrame, reducedMotion]);

  // Toggle Auto-play
  const toggleAutoPlay = () => {
    if (isPlayingAuto) {
      setIsPlayingAuto(false);
      isAutoPlayingRef.current = false;
    } else {
      if (targetProgressRef.current >= 0.99) {
        targetProgressRef.current = 0;
        smoothedProgressRef.current = 0;
      }
      autoplayLastTimeRef.current = performance.now();
      setIsPlayingAuto(true);
      isAutoPlayingRef.current = true;
    }
  };

  // Reset to Start
  const resetToTop = () => {
    if (isPlayingAuto) {
      setIsPlayingAuto(false);
      isAutoPlayingRef.current = false;
    }
    if (containerRef.current) {
      window.scrollTo({ top: containerRef.current.offsetTop - 72, behavior: "smooth" });
    }
    targetProgressRef.current = 0;
    smoothedProgressRef.current = 0;
    if (canvasContainerRef.current) {
      canvasContainerRef.current.style.transform = "scale(1) translateZ(0)";
      canvasContainerRef.current.style.opacity = "1";
    }
    if (floatingControlsRef.current) {
      floatingControlsRef.current.style.opacity = "1";
      floatingControlsRef.current.style.pointerEvents = "auto";
    }
    if (transitionDarkOverlayRef.current) transitionDarkOverlayRef.current.style.opacity = "0";
    if (transitionGoldDividerRef.current) {
      transitionGoldDividerRef.current.style.width = "0%";
      transitionGoldDividerRef.current.style.opacity = "0";
    }
    if (transitionSweepBeamRef.current) transitionSweepBeamRef.current.style.opacity = "0";
    if (transitionChapterTitleRef.current) transitionChapterTitleRef.current.style.opacity = "0";
    if (bottomBlendRef.current) bottomBlendRef.current.style.opacity = "0";
    if (introMsg1Ref.current) introMsg1Ref.current.style.display = "none";
    if (introMsg2Ref.current) introMsg2Ref.current.style.display = "none";
    if (introMsg3Ref.current) introMsg3Ref.current.style.display = "none";
    if (headerOverlayRef.current) {
      headerOverlayRef.current.style.opacity = "1";
      headerOverlayRef.current.style.transform = "translateY(0)";
      headerOverlayRef.current.style.pointerEvents = "auto";
    }
    if (scrollHintRef.current) scrollHintRef.current.style.opacity = "1";
    drawFrame(0);
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
    <div
      ref={containerRef}
      id="cinematic-bridge-scroll-container"
      className="relative w-full bg-[#101820] z-10"
      style={{ height: reducedMotion ? "100vh" : "380vh" }}
      aria-label="RDSO 3D Bowstring Steel Girder Disassembly Animation"
    >
      {/* ==================== STICKY CINEMATIC VIEWPORT ==================== */}
      <div
        ref={viewportRef}
        className="sticky top-18 sm:top-[72px] h-[calc(100vh-4.5rem)] sm:h-[calc(100dvh-72px)] w-full overflow-hidden flex items-center justify-center bg-[#101820]"
      >
        {/* Animated Background Layers: Gradient Flow & Micro Rivet Particles */}
        <AnimatedBackground variant="gradient-flow" theme="dark" opacity={0.35} />
        <AnimatedBackground variant="particles" theme="dark" opacity={0.3} />

        {/* Subtle Engineering Grid Backdrop */}
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-20 z-5" />

        {/* Ambient Dark Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-15"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(16,24,32,0) 45%, rgba(16,24,32,0.75) 100%)",
          }}
        />

        {/* ==================== 1. FULL-RESOLUTION 1080P CANVAS (ZERO-SEEK HARDWARE ACCELERATION) ==================== */}
        <div
          ref={canvasContainerRef}
          className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden z-10 will-change-transform"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full block pointer-events-none select-none transition-transform duration-150"
            style={{
              backgroundColor: "#101820",
              transform: "translateZ(0)",
              imageRendering: "-webkit-optimize-contrast",
            }}
          />

          {/* Minimal Initial Loader before Frame 1 arrives */}
          {!initialFrameLoaded && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#101820] text-[#F8F7F2]">
              <div className="h-10 w-10 rounded-full border-2 border-[#39434D] border-t-[#C6A66B] animate-spin mb-3" />
              <span className="text-xs font-mono tracking-widest text-[#C6A66B] uppercase font-semibold">
                Loading Full-HD 1080p 3D Disassembly Model...
              </span>
            </div>
          )}
        </div>

        {/* CAD Reticles at Viewport Corners */}
        <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#D6B36A]/75 pointer-events-none z-25" />
        <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#D6B36A]/75 pointer-events-none z-25" />
        <div className="absolute bottom-6 left-4 w-5 h-5 border-b-2 border-l-2 border-[#D6B36A]/75 pointer-events-none z-25" />
        <div className="absolute bottom-6 right-4 w-5 h-5 border-b-2 border-r-2 border-[#D6B36A]/75 pointer-events-none z-25" />

        {/* ==================== 2. SUBTLE NON-INTRUSIVE HEADER OVERLAY ==================== */}
        <div
          ref={headerOverlayRef}
          className="absolute top-8 left-6 sm:left-12 z-25 pointer-events-none transition-opacity duration-300 max-w-xl will-change-opacity"
          style={{ opacity: 1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#101820]/85 px-3.5 py-1 text-xs font-mono text-[#D6B36A] border border-[#D6B36A]/45 backdrop-blur-md mb-3 font-semibold shadow-md">
            <span className="h-2 w-2 rounded-full bg-[#D6B36A] animate-pulse" />
            <span className="text-[#D6B36A] font-semibold text-shadow-subtle" style={{ color: "#D6B36A" }}>
              RDSO-APPROVED BOWSTRING STEEL GIRDER
            </span>
          </div>
          <h1
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.1] text-shadow-cinematic"
            style={{ color: "#FFFFFF" }}
          >
            <span className="text-[#FFFFFF]" style={{ color: "#FFFFFF" }}>Cinematic</span>{" "}
            <span className="text-[#FFFFFF]" style={{ color: "#FFFFFF" }}>Engineering</span>{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#D6B36A]" style={{ color: "#D6B36A" }}>Disassembly Model</span>
          </h1>
          <p
            className="mt-3 text-xs sm:text-sm md:text-base text-[#E5E7EB] font-normal leading-relaxed text-shadow-subtle max-w-lg"
            style={{ color: "#E5E7EB" }}
          >
            Scroll down to explore precision-engineered railway sub-assemblies conforming to Indian Railways IRS B1 standards.
          </p>
        </div>

        {/* ==================== 3. SUBTLE SCROLL-DOWN HINT ==================== */}
        <div
          ref={scrollHintRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-25 pointer-events-none flex flex-col items-center gap-1.5 transition-opacity duration-300 will-change-opacity"
          style={{ opacity: 1 }}
        >
          <span
            className="text-[11px] font-mono tracking-widest text-[#E5E7EB] uppercase font-bold text-shadow-subtle"
            style={{ color: "#E5E7EB" }}
          >
            Scroll to Disassemble
          </span>
          <ChevronDown className="h-4 w-4 text-[#D6B36A] animate-bounce" />
        </div>

        {/* ==================== 4. DISCREET FLOATING STATUS & CONTROLS ==================== */}
        <div
          ref={floatingControlsRef}
          className="absolute bottom-6 right-6 sm:right-10 z-25 pointer-events-auto flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101820]/90 backdrop-blur-xl border border-[#39434D]/80 shadow-2xl transition-opacity duration-200 will-change-opacity"
        >
          {/* Direct DOM Stage Counter */}
          <span
            ref={stageCounterRef}
            className="text-[11px] font-mono font-bold text-[#FFFFFF] tabular-nums select-none tracking-wide text-shadow-subtle"
          >
            FRAME 001 / {TOTAL_HERO_FRAMES}
          </span>

          <span className="h-3 w-px bg-[#39434D]" />

          {/* Autoplay Toggle Button */}
          <button
            type="button"
            onClick={toggleAutoPlay}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#202A33] hover:bg-[#D6B36A] text-[#FFFFFF] hover:text-[#101820] transition-all cursor-pointer"
            aria-label={isPlayingAuto ? "Pause Animation" : "Auto-play Animation"}
            title={isPlayingAuto ? "Pause" : "Play continuous animation"}
          >
            {isPlayingAuto ? <Pause className="h-3 w-3 fill-current" /> : <Play className="h-3 w-3 fill-current ml-0.5" />}
          </button>

          {/* Reset Button */}
          <button
            type="button"
            onClick={resetToTop}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#202A33] hover:bg-[#D6B36A] text-[#E5E7EB] hover:text-[#101820] transition-all cursor-pointer"
            aria-label="Reset to First Frame"
            title="Reset to Top"
          >
            <RotateCcw className="h-3 w-3" />
          </button>

          <span className="h-3 w-px bg-[#39434D]" />

          {/* Fit Toggle (Cover / Contain) */}
          <button
            type="button"
            onClick={() => setFitMode(fitMode === "cover" ? "contain" : "cover")}
            className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#202A33] hover:bg-[#D6B36A] text-[#E5E7EB] hover:text-[#101820] text-[10px] font-mono font-bold transition-all cursor-pointer"
            title={fitMode === "cover" ? "Switch to Contain (Full Frame)" : "Switch to Cover (Full Viewport Fill)"}
          >
            <Sliders className="h-2.5 w-2.5" />
            <span className="uppercase">{fitMode}</span>
          </button>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center justify-center h-6 w-6 rounded-full bg-[#202A33] hover:bg-[#D6B36A] text-[#E5E7EB] hover:text-[#101820] transition-all cursor-pointer"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
          </button>
        </div>

        {/* Minimal Progress Line along bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#202A33] z-20 overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#202A33] via-[#D6B36A] to-[#E2C785] will-change-transform"
            style={{ width: "0%" }}
          />
        </div>

        {/* ==================== 5. ENGINEERING INTRO TYPOGRAPHY OVERLAYS ==================== */}
        {/* Positioned cleanly away from bridge details in lower-left negative space */}
        <div className="absolute bottom-14 sm:bottom-20 left-6 sm:left-12 lg:left-20 z-25 pointer-events-none max-w-xl">
          {/* Message 1 */}
          <div
            ref={introMsg1Ref}
            className="px-6 py-4 rounded-xl border-l-2 border-[#D6B36A] will-change-transform will-change-opacity shadow-2xl"
            style={{
              display: "none",
              opacity: 0,
              background:
                "linear-gradient(90deg, rgba(8,12,16,0.80) 0%, rgba(8,12,16,0.42) 65%, transparent 100%)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6B36A]" />
              <span className="text-[10.5px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[#F5F1E8] uppercase text-shadow-subtle" style={{ color: "#F5F1E8" }}>
                01 // HEAVY INFRASTRUCTURE
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] uppercase tracking-[0.06em] leading-tight text-shadow-cinematic" style={{ color: "#FFFFFF" }}>
              <span className="text-[#FFFFFF]" style={{ color: "#FFFFFF" }}>ENGINEERING</span>{" "}
              <span className="text-[#D6B36A]" style={{ color: "#D6B36A" }}>CONNECTIONS</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-body text-[#E5E7EB] font-normal tracking-wide leading-relaxed text-shadow-subtle" style={{ color: "#E5E7EB" }}>
              Built on precision. Designed for generations.
            </p>
          </div>

          {/* Message 2 */}
          <div
            ref={introMsg2Ref}
            className="px-6 py-4 rounded-xl border-l-2 border-[#D6B36A] will-change-transform will-change-opacity shadow-2xl"
            style={{
              display: "none",
              opacity: 0,
              background:
                "linear-gradient(90deg, rgba(8,12,16,0.80) 0%, rgba(8,12,16,0.42) 65%, transparent 100%)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6B36A]" />
              <span className="text-[10.5px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[#F5F1E8] uppercase text-shadow-subtle" style={{ color: "#F5F1E8" }}>
                02 // LOAD CAPACITY &amp; METROLOGY
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] uppercase tracking-[0.06em] leading-tight text-shadow-cinematic" style={{ color: "#FFFFFF" }}>
              <span className="text-[#FFFFFF]" style={{ color: "#FFFFFF" }}>STRENGTH IN</span>{" "}
              <span className="text-[#D6B36A]" style={{ color: "#D6B36A" }}>EVERY SPAN</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-body text-[#E5E7EB] font-normal tracking-wide leading-relaxed text-shadow-subtle" style={{ color: "#E5E7EB" }}>
              Precision steelwork. Reliable infrastructure.
            </p>
          </div>

          {/* Message 3 */}
          <div
            ref={introMsg3Ref}
            className="px-6 py-4 rounded-xl border-l-2 border-[#D6B36A] will-change-transform will-change-opacity shadow-2xl"
            style={{
              display: "none",
              opacity: 0,
              background:
                "linear-gradient(90deg, rgba(8,12,16,0.80) 0%, rgba(8,12,16,0.42) 65%, transparent 100%)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6B36A]" />
              <span className="text-[10.5px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[#F5F1E8] uppercase text-shadow-subtle" style={{ color: "#F5F1E8" }}>
                03 // STRATEGIC RAIL NETWORKS
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] uppercase tracking-[0.06em] leading-tight text-shadow-cinematic" style={{ color: "#FFFFFF" }}>
              <span className="text-[#D6B36A]" style={{ color: "#D6B36A" }}>CONNECTING</span>{" "}
              <span className="text-[#FFFFFF]" style={{ color: "#FFFFFF" }}>TOMORROW</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-body text-[#E5E7EB] font-normal tracking-wide leading-relaxed text-shadow-subtle" style={{ color: "#E5E7EB" }}>
              Building the infrastructure that moves India forward.
            </p>
          </div>
        </div>

        {/* ==================== 6. CINEMATIC CHAPTER TITLE TRANSITION (HERO EXIT) ==================== */}
        {/* Controlled darkening effect over frame */}
        <div
          ref={transitionDarkOverlayRef}
          className="absolute inset-0 pointer-events-none z-22 opacity-0 will-change-opacity"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(16,24,32,0.72) 0%, rgba(8,12,16,0.92) 55%, #080C10 100%)",
          }}
        />

        {/* Champagne-Gold Restrained Horizontal Light Sweep */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 pointer-events-none z-23 overflow-hidden">
          <div
            ref={transitionSweepBeamRef}
            className="w-1/2 h-full opacity-0 will-change-transform will-change-opacity"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(214,179,106,0.15) 35%, rgba(255,255,255,0.45) 50%, rgba(214,179,106,0.15) 65%, transparent 100%)",
            }}
          />
        </div>

        {/* Cinematic Chapter Title Content */}
        <div
          ref={transitionChapterTitleRef}
          className="absolute inset-0 z-24 pointer-events-none flex flex-col items-center justify-center px-6 text-center will-change-opacity"
          style={{ opacity: 0 }}
        >
          {/* Eyebrow: VAISHNAV ENGINEERING PRESENTS, small uppercase champagne gold */}
          <div
            ref={transitionEyebrowRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101820]/85 border border-[#D6B36A]/50 backdrop-blur-md mb-4 sm:mb-5 shadow-xl will-change-transform will-change-opacity"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6B36A] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.3em] text-[#D6B36A] uppercase text-shadow-subtle" style={{ color: "#D6B36A" }}>
              VAISHNAV ENGINEERING PRESENTS
            </span>
          </div>

          {/* Main Title: Large, bold, pure white */}
          <h2
            ref={transitionMainTitleRef}
            className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.14em] text-[#FFFFFF] uppercase leading-none will-change-transform will-change-opacity text-shadow-cinematic"
            style={{ color: "#FFFFFF" }}
          >
            <span className="text-[#FFFFFF]" style={{ color: "#FFFFFF" }}>ROB BRIDGE</span>
          </h2>

          {/* Champagne-Gold Divider Line with Shimmer */}
          <div className="w-full max-w-md my-4 sm:my-5 flex items-center justify-center">
            <div
              ref={transitionGoldDividerRef}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-[#D6B36A] to-transparent will-change-transform will-change-opacity"
              style={{
                width: "0%",
                opacity: 0,
                boxShadow: "0 0 16px rgba(214,179,106,0.6), 0 0 32px rgba(214,179,106,0.25)",
              }}
            />
          </div>

          {/* Secondary Title: Champagne gold (#D6B36A), medium-bold, with refined letter spacing */}
          <div
            ref={transitionSubTitleRef}
            className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.22em] text-[#D6B36A] uppercase leading-tight will-change-transform will-change-opacity text-shadow-subtle"
            style={{ color: "#D6B36A" }}
          >
            CONCEPT TO COMPLETION
          </div>

          {/* Supporting Tagline: Warm ivory (#F5F1E8) */}
          <p
            ref={transitionTaglineRef}
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-body tracking-[0.16em] text-[#F5F1E8] uppercase font-medium max-w-lg will-change-transform will-change-opacity text-shadow-subtle"
            style={{ color: "#F5F1E8" }}
          >
            The Engineering Behind Every Span
          </p>
        </div>

        {/* Smooth Dark Charcoal Blend matching ROB Construction Sequence (#101820 -> #080C10) */}
        <div
          ref={bottomBlendRef}
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-23 will-change-opacity"
          style={{
            opacity: 0,
            background: "linear-gradient(to bottom, rgba(16,24,32,0) 0%, rgba(8,12,16,0.85) 60%, #080C10 100%)",
          }}
        />
      </div>
    </div>
  );
}
