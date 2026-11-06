"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Eye, ShieldCheck, Activity, Award } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  phase: number;
  speed: number;
  layer: "back" | "front";
}

interface OwnerAnimatedAvatarProps {
  className?: string;
  enableInteraction?: boolean;
}

export default function OwnerAnimatedAvatar({
  className = "",
  enableInteraction = true,
}: OwnerAnimatedAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // States
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);

  // Mouse tracking references for 60fps canvas loop
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isInside: false,
    tiltX: 0,
    tiltY: 0,
  });

  // Images cache
  const framesRef = useRef<HTMLImageElement[]>([]);
  const isVisibleRef = useRef(true);

  // Blink state machine refs
  const blinkStateRef = useRef({
    currentFrame: 0,
    isBlinking: false,
    step: 0,
    nextBlinkTime: 2500,
    lastStepTime: 0,
    isDoubleBlink: false,
  });

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Preload all 5 frames
  useEffect(() => {
    const frameUrls = [
      "/avatar/avatar_frame_0.png",
      "/avatar/avatar_frame_1.png",
      "/avatar/avatar_frame_2.png",
      "/avatar/avatar_frame_3.png",
      "/avatar/avatar_frame_4.png",
    ];

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    frameUrls.forEach((url, idx) => {
      const img = new window.Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        loadedImages[idx] = img;
        if (loadedCount === frameUrls.length) {
          framesRef.current = loadedImages;
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback to source image if frame failed
        const fallback = new window.Image();
        fallback.src = "/avatar/avatar_static_fallback.png";
        fallback.onload = () => {
          loadedCount++;
          loadedImages[idx] = fallback;
          if (loadedCount === frameUrls.length) {
            framesRef.current = loadedImages;
            setImagesLoaded(true);
          }
        };
      };
    });
  }, []);

  // IntersectionObserver to pause rendering when scrolled out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Main Canvas Animation Loop
  useEffect(() => {
    if (!imagesLoaded || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // Colors: Subtle champagne-gold and crisp white
    const goldPalette = [
      "rgba(198, 166, 107,",  // Brand gold
      "rgba(229, 201, 143,",  // Light champagne
      "rgba(247, 231, 206,",  // Pale gold shimmer
      "rgba(255, 255, 255,",  // Pure white
      "rgba(235, 240, 245,",  // Light platinum
    ];

    const initParticles = (w: number, h: number) => {
      const count = Math.min(Math.floor((w * h) / 3800), 120);
      const newParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        // Layer: 75% in the background, 25% in the foreground for true 3D spatial depth
        const layer = Math.random() < 0.75 ? "back" : "front";
        const x = Math.random() * w;
        const y = Math.random() * h;
        const color = goldPalette[Math.floor(Math.random() * goldPalette.length)];
        const size = layer === "front" ? Math.random() * 1.8 + 1.2 : Math.random() * 1.4 + 0.8;
        const baseAlpha = layer === "front" ? Math.random() * 0.45 + 0.35 : Math.random() * 0.35 + 0.15;

        newParticles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          size,
          color,
          alpha: baseAlpha,
          baseAlpha,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.35 + 0.15,
          layer,
        });
      }
      return newParticles;
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      particles = initParticles(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    let lastTime = performance.now();
    let breatheTime = 0;

    // Smooth head movement variables
    let smoothTiltX = 0;
    let smoothTiltY = 0;
    let smoothHeadShiftX = 0;
    let smoothHeadShiftY = 0;

    // Blink frames transition: 0 -> 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 1 -> 0
    const blinkSequence = [0, 1, 2, 3, 4, 3, 2, 1, 0];
    const frameDurations = [35, 35, 35, 50, 40, 35, 35, 35, 35]; // ms per transition step

    const render = (time: number) => {
      const dt = Math.min(time - lastTime, 64);
      lastTime = time;

      // Skip heavy calculation if not in viewport
      if (!isVisibleRef.current) {
        animId = requestAnimationFrame(render);
        return;
      }

      breatheTime += dt * 0.0015;

      // ----------------------------------------------------------------------
      // 1. UPDATE BLINK LOGIC
      // ----------------------------------------------------------------------
      const bState = blinkStateRef.current;
      if (!bState.isBlinking) {
        if (time >= bState.nextBlinkTime) {
          bState.isBlinking = true;
          bState.step = 0;
          bState.lastStepTime = time;
          bState.currentFrame = blinkSequence[0];
          setBlinkCount((prev) => prev + 1);
        }
      } else {
        const elapsed = time - bState.lastStepTime;
        const currentStepDuration = frameDurations[bState.step] || 40;

        if (elapsed >= currentStepDuration) {
          bState.step++;
          bState.lastStepTime = time;

          if (bState.step < blinkSequence.length) {
            bState.currentFrame = blinkSequence[bState.step];
          } else {
            // Blink finished
            bState.isBlinking = false;
            bState.currentFrame = 0;

            // Occasional natural double blink (25% probability)
            if (!bState.isDoubleBlink && Math.random() < 0.25) {
              bState.isDoubleBlink = true;
              bState.nextBlinkTime = time + 180 + Math.random() * 120; // Quick double blink
            } else {
              bState.isDoubleBlink = false;
              // Next standard blink in 3.2s to 6.2s
              bState.nextBlinkTime = time + 3200 + Math.random() * 3000;
            }
          }
        }
      }

      // ----------------------------------------------------------------------
      // 2. HEAD TILT & BREATHING SMOOTHING
      // ----------------------------------------------------------------------
      const mouse = mouseRef.current;
      let targetTiltX = 0;
      let targetTiltY = 0;
      let targetHeadShiftX = 0;
      let targetHeadShiftY = 0;

      if (mouse.isInside) {
        // Normalize mouse to [-1, 1] relative to avatar center
        const centerX = width * 0.5;
        const centerY = height * 0.52;
        const normX = Math.max(-1, Math.min(1, (mouse.x - centerX) / (width * 0.5)));
        const normY = Math.max(-1, Math.min(1, (mouse.y - centerY) / (height * 0.5)));

        targetTiltX = normX * 0.022; // ~1.2 deg
        targetTiltY = normY * 0.015;
        targetHeadShiftX = normX * 6.5;
        targetHeadShiftY = normY * 4.5;
      } else {
        // Gentle organic ambient sway when mouse is not hovering
        targetTiltX = Math.sin(breatheTime * 0.6) * 0.007;
        targetTiltY = Math.cos(breatheTime * 0.8) * 0.004;
        targetHeadShiftX = Math.sin(breatheTime * 0.5) * 2.2;
        targetHeadShiftY = Math.cos(breatheTime * 0.7) * 1.5;
      }

      // Exponential damping for lifelike inertia
      smoothTiltX += (targetTiltX - smoothTiltX) * 0.06;
      smoothTiltY += (targetTiltY - smoothTiltY) * 0.06;
      smoothHeadShiftX += (targetHeadShiftX - smoothHeadShiftX) * 0.06;
      smoothHeadShiftY += (targetHeadShiftY - smoothHeadShiftY) * 0.06;

      // Natural rhythmic breathing: chest & shoulders subtle vertical cycle
      const breatheOffsetY = Math.sin(breatheTime * 1.4) * 2.2;
      const breatheScale = 1.0 + Math.sin(breatheTime * 1.4) * 0.0035;

      // ----------------------------------------------------------------------
      // 3. CLEAR CANVAS & DRAW DARK LUXURY BACKGROUND
      // ----------------------------------------------------------------------
      ctx.clearRect(0, 0, width, height);

      // Deep dark industrial slate base
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        30,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.75
      );
      bgGrad.addColorStop(0, "#19222B");   // Subtle highlighted center
      bgGrad.addColorStop(0.55, "#101820"); // Deep navy-slate
      bgGrad.addColorStop(1, "#0A0F14");   // Ultra-deep vignette edge
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient gold rim backlight directly behind the avatar
      const rimGrad = ctx.createRadialGradient(
        width * 0.5 + smoothHeadShiftX * 0.5,
        height * 0.4 + smoothHeadShiftY * 0.5,
        40,
        width * 0.5,
        height * 0.45,
        Math.min(width, height) * 0.48
      );
      rimGrad.addColorStop(0, "rgba(198, 166, 107, 0.14)");
      rimGrad.addColorStop(0.6, "rgba(198, 166, 107, 0.03)");
      rimGrad.addColorStop(1, "rgba(198, 166, 107, 0.0)");
      ctx.fillStyle = rimGrad;
      ctx.fillRect(0, 0, width, height);

      // ----------------------------------------------------------------------
      // 4. DRAW BACKGROUND PARTICLES WITH MOUSE-REACTIVE PHYSICS
      // ----------------------------------------------------------------------
      const drawParticle = (p: Particle) => {
        // Slow natural drift
        p.originY -= p.speed * 0.55;
        p.originX += Math.sin(breatheTime + p.phase) * 0.25;

        // Wrap around edges
        if (p.originY < -10) p.originY = height + 10;
        if (p.originY > height + 10) p.originY = -10;
        if (p.originX < -10) p.originX = width + 10;
        if (p.originX > width + 10) p.originX = -10;

        // Interactive mouse reaction: spring-repulsion physics
        if (mouse.isInside) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 115; // Interaction influence radius

          if (dist < maxDist && dist > 0.1) {
            const force = (1 - dist / maxDist) * 3.8;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
          }
        }

        // Return force towards floating home anchor (Hooke's law with damping)
        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;
        p.vx += homeDx * 0.045;
        p.vy += homeDy * 0.045;
        p.vx *= 0.88; // Damping
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        // Subtle shimmering alpha pulsation
        const pulse = Math.sin(breatheTime * 2.2 + p.phase) * 0.15;
        const alpha = Math.max(0.05, Math.min(0.9, p.baseAlpha + pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${alpha})`;
        ctx.fill();
      };

      // Draw "back" layer particles
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].layer === "back") {
          drawParticle(particles[i]);
        }
      }

      // ----------------------------------------------------------------------
      // 5. DRAW LIFELIKE ANIMATED AVATAR WITH NATURAL BLINKING & TILT
      // ----------------------------------------------------------------------
      const currentImg = framesRef.current[bState.currentFrame] || framesRef.current[0];
      if (currentImg && currentImg.complete) {
        ctx.save();

        // Target placement: Centered, grounded at the bottom of the card
        const imgAspect = currentImg.width / currentImg.height;
        let drawWidth = width * 0.92;
        let drawHeight = drawWidth / imgAspect;

        // Keep proportionate on mobile / tall screens
        if (drawHeight > height * 0.98) {
          drawHeight = height * 0.98;
          drawWidth = drawHeight * imgAspect;
        }

        const posX = (width - drawWidth) * 0.5 + smoothHeadShiftX;
        const posY = height - drawHeight + breatheOffsetY + smoothHeadShiftY;

        // Apply natural pivot tilt around neck / chest center
        const pivotX = width * 0.5 + smoothHeadShiftX;
        const pivotY = height * 0.65 + breatheOffsetY;

        ctx.translate(pivotX, pivotY);
        ctx.rotate(smoothTiltX);
        ctx.scale(breatheScale, breatheScale);
        ctx.translate(-pivotX, -pivotY);

        // Draw avatar image frame with halftone dot integrity
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(currentImg, posX, posY, drawWidth, drawHeight);

        ctx.restore();
      }

      // ----------------------------------------------------------------------
      // 6. DRAW FOREGROUND PARTICLES (DRIVE OVER THE AVATAR FOR DEPTH)
      // ----------------------------------------------------------------------
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].layer === "front") {
          drawParticle(particles[i]);
        }
      }

      // Subtle bottom gradient fade to ground the avatar into the container
      const bottomFade = ctx.createLinearGradient(0, height - 60, 0, height);
      bottomFade.addColorStop(0, "rgba(16, 24, 32, 0)");
      bottomFade.addColorStop(1, "rgba(16, 24, 32, 0.85)");
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, height - 60, width, 60);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded, prefersReducedMotion]);

  // Mouse interaction event listeners
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableInteraction || prefersReducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isInside = true;
    },
    [enableInteraction, prefersReducedMotion]
  );

  const handleMouseEnter = useCallback(() => {
    mouseRef.current.isInside = true;
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.isInside = false;
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] rounded-3xl overflow-hidden border border-[#39434D]/40 bg-[#101820] shadow-2xl group select-none ${className}`}
    >
      {/* Reduced-Motion Static Fallback */}
      {prefersReducedMotion ? (
        <div className="relative w-full h-full flex items-end justify-center bg-[#101820] overflow-hidden">
          <Image
            src="/avatar/avatar_static_fallback.png"
            alt="Mr. R. Saravanan - Owner Halftone Portrait"
            width={700}
            height={700}
            className="w-auto h-[90%] object-contain object-bottom pointer-events-none"
            priority
          />
        </div>
      ) : (
        /* Real-time 60fps Canvas Avatar & Particle Field */
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair"
          title="Interactive Dotted Halftone Avatar - Move cursor to interact with particles and subtle head movement"
        />
      )}

      {/* Top HUD Badges */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#101820]/80 backdrop-blur-md px-3.5 py-1.5 border border-[#C6A66B]/40 text-[#C6A66B] text-[11px] font-mono font-bold tracking-wider shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A66B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6A66B]"></span>
          </span>
          LIFELIKE HALFTONE AVATAR
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#101820]/80 backdrop-blur-md px-3 py-1 border border-[#39434D]/50 text-[#89939D] text-[10px] font-mono">
          <Sparkles className="h-3 w-3 text-[#C6A66B]" />
          <span>Interactive Particles</span>
        </div>
      </div>

      {/* Bottom Floating Status Tag */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none text-xs">
        <div className="rounded-xl bg-[#101820]/85 backdrop-blur-md px-3.5 py-2 border border-[#39434D]/50 text-white shadow-lg">
          <p className="font-heading font-bold text-sm text-[#F8F7F2]">Mr. R. Saravanan</p>
          <p className="text-[11px] font-mono text-[#C6A66B] font-medium">Founder & Managing Director</p>
        </div>

        <div className="rounded-xl bg-[#101820]/85 backdrop-blur-md px-3 py-2 border border-[#C6A66B]/30 text-right shadow-lg">
          <span className="text-[10px] uppercase font-mono font-bold text-[#89939D] block">Natural Motion</span>
          <span className="text-[11px] font-mono text-[#C6A66B] font-semibold flex items-center gap-1">
            <Eye className="h-3 w-3 inline text-[#C6A66B]" /> Eyelid Blink Active
          </span>
        </div>
      </div>

      {/* Subtle Golden Vignette Border */}
      <div className="absolute inset-0 rounded-3xl border border-[#C6A66B]/20 pointer-events-none transition-colors duration-500 group-hover:border-[#C6A66B]/50" />
    </div>
  );
}
