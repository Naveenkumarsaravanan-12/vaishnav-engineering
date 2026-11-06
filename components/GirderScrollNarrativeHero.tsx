"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function GirderScrollNarrativeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState<number>(0);
  const [isPreloading, setIsPreloading] = useState<boolean>(true);
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const totalFrames = 12;

  // Preload all 12 4K WebP frames into memory
  useEffect(() => {
    let isMounted = true;
    const loadedImgs: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const pad = String(i).padStart(2, "0");
      const img = new Image();
      img.src = `/enhanced_pro/${pad}.webp`;
      img.onload = () => {
        if (!isMounted) return;
        count++;
        setImagesLoaded(count);
        if (count === totalFrames) {
          setIsPreloading(false);
        }
      };
      img.onerror = () => {
        // Fallback to jpg if needed
        img.src = `/enhanced_pro/${pad}_enhanced.jpg`;
        count++;
        setImagesLoaded(count);
        if (count === totalFrames) {
          setIsPreloading(false);
        }
      };
      loadedImgs.push(img);
    }

    setImages(loadedImgs);

    return () => {
      isMounted = false;
    };
  }, []);

  // Framer Motion useScroll hook tracking container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Draw current frame to canvas using aspect-ratio 'contain'
  const renderFrameToCanvas = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !images[frameIndex]) return;

      const img = images[frameIndex];
      if (!img.complete || img.naturalWidth === 0) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Deep, clean cinematic backdrop
      ctx.fillStyle = "#05070B";
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // Subtle ambient radial glow behind the product
      const gradient = ctx.createRadialGradient(
        displayWidth / 2,
        displayHeight / 2,
        displayWidth * 0.05,
        displayWidth / 2,
        displayHeight / 2,
        displayWidth * 0.5
      );
      gradient.addColorStop(0, "rgba(0, 214, 255, 0.05)");
      gradient.addColorStop(0.5, "rgba(127, 1, 31, 0.04)");
      gradient.addColorStop(1, "rgba(5, 7, 11, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // Calculate 'contain' metrics to fit 3840x3410 frame completely without cropping
      const hRatio = displayWidth / img.naturalWidth;
      const vRatio = displayHeight / img.naturalHeight;
      const ratio = Math.min(hRatio, vRatio);

      // Maximize frame size while leaving a subtle breathing margin
      const finalRatio = ratio * 0.985;

      const drawWidth = img.naturalWidth * finalRatio;
      const drawHeight = img.naturalHeight * finalRatio;
      const shiftX = (displayWidth - drawWidth) / 2;
      const shiftY = (displayHeight - drawHeight) / 2;

      // Draw 4K frame
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, shiftX, shiftY, drawWidth, drawHeight);

      ctx.restore();
    },
    [images]
  );

  // Sync scroll with frame index (0 to 11) smoothly
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (latest) => {
      if (!isPlaying) {
        const rawFrame = Math.min(totalFrames - 1, Math.floor(latest * totalFrames));
        setCurrentFrame(rawFrame);
        renderFrameToCanvas(rawFrame);
      }
    });

    return () => unsub();
  }, [scrollYProgress, isPlaying, renderFrameToCanvas]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      renderFrameToCanvas(currentFrame);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentFrame, renderFrameToCanvas]);

  // Initial draw once loaded
  useEffect(() => {
    if (!isPreloading && images.length > 0) {
      renderFrameToCanvas(currentFrame);
    }
  }, [isPreloading, images, currentFrame, renderFrameToCanvas]);

  // Auto-play interval support
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        const next = (prev + 1) % totalFrames;
        renderFrameToCanvas(next);
        return next;
      });
    }, 2400);

    return () => clearInterval(interval);
  }, [isPlaying, renderFrameToCanvas]);

  return (
    <div
      ref={containerRef}
      id="narrative-hero-scroller"
      className="relative w-full bg-[#05070B]"
      style={{ height: "400vh" }}
    >
      {/* ==================== STICKY FULL-VIEWPORT CANVAS ==================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#05070B]">
        
        {/* Subtle Background Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 214, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(127, 1, 31, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Cinematic Rim Light / Radial Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_55%,rgba(5,7,11,0.85)_100%)]" />

        {/* Hardware-Accelerated 4K Viewport Canvas - 100% Unobstructed */}
        <canvas
          ref={canvasRef}
          className="relative z-0 h-full w-full object-contain pointer-events-none"
        />

        {/* Clean Minimalist Preloader Overlay */}
        {isPreloading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#05070B]">
            <div className="relative w-12 h-12 mb-3">
              <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              <div className="absolute inset-0 rounded-full border-2 border-t-[#00D6FF] border-r-[#7F011F] animate-spin" />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#00D6FF] font-semibold">
              {imagesLoaded}/{totalFrames}
            </span>
          </div>
        )}

        {/* ==================== ULTRA-CLEAN FLOATING CONTROLS (NO WORDS OVERLAYING THE IMAGE) ==================== */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex items-center gap-4 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-opacity hover:opacity-100 opacity-80">
          
          {/* Icon-Only Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[#00D6FF] transition cursor-pointer"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5 fill-current" /> : <Play className="h-3.5 w-3.5 fill-current ml-0.5" />}
          </button>

          {/* Minimal Timeline Scrubber */}
          <div className="w-48 sm:w-64 flex items-center">
            <input
              type="range"
              min="0"
              max={totalFrames - 1}
              step="1"
              value={currentFrame}
              onChange={(e) => {
                setIsPlaying(false);
                const f = Number(e.target.value);
                setCurrentFrame(f);
                renderFrameToCanvas(f);
              }}
              className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-[#00D6FF]"
              aria-label="Frame scrubber"
            />
          </div>

          {/* Minimal Frame Counter (Numbers only) */}
          <span className="text-xs font-mono font-bold text-white/80 tabular-nums">
            {String(currentFrame + 1).padStart(2, "0")} / {String(totalFrames).padStart(2, "0")}
          </span>
        </div>

        {/* Minimal Subtle Vertical Dots on the Right Edge (No words) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-2.5 pointer-events-auto opacity-40 hover:opacity-100 transition-opacity">
          {Array.from({ length: totalFrames }).map((_, idx) => {
            const isActive = idx === currentFrame;
            return (
              <button
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentFrame(idx);
                  renderFrameToCanvas(idx);
                  if (containerRef.current) {
                    const containerTop = containerRef.current.offsetTop;
                    const containerHeight = containerRef.current.offsetHeight;
                    const target = containerTop + (idx / (totalFrames - 1)) * (containerHeight - window.innerHeight);
                    window.scrollTo({ top: target, behavior: "smooth" });
                  }
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-2 h-5 bg-[#00D6FF] shadow-sm shadow-[#00D6FF]/50"
                    : "w-2 h-2 bg-white/30 hover:bg-white/70"
                }`}
                aria-label={`Frame ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
}
