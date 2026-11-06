"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export type BackgroundVariant = 
  | "blueprint-grid"
  | "steel-lines"
  | "floating-shapes"
  | "particles"
  | "gradient-flow"
  | "bridge-silhouette";

interface AnimatedBackgroundProps {
  variant: BackgroundVariant;
  theme?: "dark" | "light";
  className?: string;
  opacity?: number; // Optional override for fine-tuning
}

export default function AnimatedBackground({
  variant,
  theme = "light",
  className = "",
  opacity,
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // IntersectionObserver to pause heavy background rendering when off-screen
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Parallax scroll reaction (subtle, disabled on mobile or reduced motion)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion || isMobile ? [0, 0] : [-25, 25]
  );

  const isDark = theme === "dark";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      data-animated-bg={variant}
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      style={{ opacity: opacity !== undefined ? opacity : 1 }}
    >
      <motion.div
        style={{ y: parallaxY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        {variant === "blueprint-grid" && (
          <BlueprintGridVariant isDark={isDark} shouldReduceMotion={shouldReduceMotion} isVisible={isVisible} />
        )}

        {variant === "steel-lines" && (
          <SteelLinesVariant isDark={isDark} shouldReduceMotion={shouldReduceMotion} isVisible={isVisible} />
        )}

        {variant === "floating-shapes" && (
          <FloatingShapesVariant isDark={isDark} shouldReduceMotion={shouldReduceMotion} isMobile={isMobile} />
        )}

        {variant === "particles" && (
          <ParticlesCanvasVariant isDark={isDark} shouldReduceMotion={shouldReduceMotion} isVisible={isVisible} isMobile={isMobile} />
        )}

        {variant === "gradient-flow" && (
          <GradientFlowVariant isDark={isDark} shouldReduceMotion={shouldReduceMotion} isVisible={isVisible} />
        )}

        {variant === "bridge-silhouette" && (
          <BridgeSilhouetteVariant isDark={isDark} shouldReduceMotion={shouldReduceMotion} />
        )}
      </motion.div>
    </div>
  );
}

// ============================================================================
// 1. BLUEPRINT GRID VARIANT (Drifting grid with pulsing gold intersection nodes)
// ============================================================================
function BlueprintGridVariant({ isDark, shouldReduceMotion, isVisible }: { isDark: boolean; shouldReduceMotion: boolean | null; isVisible: boolean }) {
  const gridLineColor = isDark ? "rgba(57, 67, 77, 0.28)" : "rgba(57, 67, 77, 0.12)";
  const nodeColor = isDark ? "#C6A66B" : "#B89656";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Drifting Grid Lines */}
      <div
        className={`absolute -inset-[100px] w-[calc(100%+200px)] h-[calc(100%+200px)] ${
          !shouldReduceMotion && isVisible ? "animate-grid-drift" : ""
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridLineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridLineColor} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Pulsing Gold Nodes at Key Intersections */}
      <div className="absolute inset-0 flex justify-around items-around pointer-events-none">
        {[
          { top: "20%", left: "15%", delay: "0s" },
          { top: "35%", left: "75%", delay: "1.2s" },
          { top: "65%", left: "30%", delay: "2.4s" },
          { top: "80%", left: "85%", delay: "0.8s" },
          { top: "50%", left: "55%", delay: "1.8s" },
        ].map((node, i) => (
          <div
            key={i}
            className={`absolute h-2 w-2 rounded-full ${
              !shouldReduceMotion && isVisible ? "animate-pulse" : ""
            }`}
            style={{
              top: node.top,
              left: node.left,
              backgroundColor: nodeColor,
              boxShadow: `0 0 10px ${nodeColor}`,
              animationDelay: node.delay,
              opacity: isDark ? 0.6 : 0.45,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// 2. STEEL LINES VARIANT (Structural beams & diagonals sliding/fading)
// ============================================================================
function SteelLinesVariant({ isDark, shouldReduceMotion, isVisible }: { isDark: boolean; shouldReduceMotion: boolean | null; isVisible: boolean }) {
  const lineColor = isDark ? "rgba(198, 166, 107, 0.15)" : "rgba(57, 67, 77, 0.12)";
  const beamColor = isDark ? "rgba(57, 67, 77, 0.35)" : "rgba(198, 166, 107, 0.16)";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden opacity-90">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`steel-truss-${isDark ? "dark" : "light"}`} width="180" height="180" patternUnits="userSpaceOnUse">
            <line x1="0" y1="90" x2="180" y2="90" stroke={beamColor} strokeWidth="1.5" />
            <line x1="0" y1="0" x2="180" y2="180" stroke={lineColor} strokeWidth="1" strokeDasharray="6 4" />
            <line x1="180" y1="0" x2="0" y2="180" stroke={lineColor} strokeWidth="1" strokeDasharray="6 4" />
            <circle cx="90" cy="90" r="3" fill={isDark ? "#C6A66B" : "#39434D"} opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#steel-truss-${isDark ? "dark" : "light"})`} />
      </svg>

      {/* Floating horizontal and diagonal highlight rays */}
      {!shouldReduceMotion && isVisible && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6A66B]/10 to-transparent animate-beam-sweep"
          style={{ transform: "rotate(-25deg) scale(1.6)" }}
        />
      )}
    </div>
  );
}

// ============================================================================
// 3. FLOATING SHAPES VARIANT (Soft blurred navy and champagne blobs)
// ============================================================================
function FloatingShapesVariant({ isDark, shouldReduceMotion, isMobile }: { isDark: boolean; shouldReduceMotion: boolean | null; isMobile: boolean }) {
  const blob1 = isDark ? "rgba(198, 166, 107, 0.12)" : "rgba(198, 166, 107, 0.10)";
  const blob2 = isDark ? "rgba(32, 42, 51, 0.45)" : "rgba(229, 232, 235, 0.70)";
  const blob3 = isDark ? "rgba(16, 24, 32, 0.60)" : "rgba(245, 243, 238, 0.60)";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Blob 1 */}
      <div
        className={`absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full filter blur-3xl ${
          !shouldReduceMotion ? "animate-blob-slow" : ""
        }`}
        style={{ backgroundColor: blob1 }}
      />

      {/* Blob 2 */}
      <div
        className={`absolute top-1/3 -right-20 w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full filter blur-3xl ${
          !shouldReduceMotion ? "animate-blob-reverse" : ""
        }`}
        style={{ backgroundColor: blob2, animationDelay: "2s" }}
      />

      {/* Blob 3 (Desktop only) */}
      {!isMobile && (
        <div
          className={`absolute -bottom-24 left-1/3 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full filter blur-3xl ${
            !shouldReduceMotion ? "animate-blob-slow" : ""
          }`}
          style={{ backgroundColor: blob3, animationDelay: "4s" }}
        />
      )}
    </div>
  );
}

// ============================================================================
// 4. PARTICLES CANVAS VARIANT (Small rivets and dots drifting upward with links)
// ============================================================================
function ParticlesCanvasVariant({
  isDark,
  shouldReduceMotion,
  isVisible,
  isMobile,
}: {
  isDark: boolean;
  shouldReduceMotion: boolean | null;
  isVisible: boolean;
  isMobile: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Particle count: 32 on desktop, 12 on mobile for peak performance
    const count = isMobile ? 12 : 30;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.4 + 0.2,
    }));

    const dotColor = isDark ? "198, 166, 107" : "57, 67, 77";

    const render = () => {
      // Pause if off-screen or tab hidden
      if (!isVisible || document.visibilityState === "hidden") {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw & update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX;

        // Wrap around edges
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${dotColor}, ${0.15 * (1 - dist / 85)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [shouldReduceMotion, isVisible, isDark, isMobile]);

  if (shouldReduceMotion) {
    return <div className="absolute inset-0 bg-[#C6A66B]/5" />;
  }

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// ============================================================================
// 5. GRADIENT FLOW VARIANT (Slow smooth shifting aurora glow)
// ============================================================================
function GradientFlowVariant({ isDark, shouldReduceMotion, isVisible }: { isDark: boolean; shouldReduceMotion: boolean | null; isVisible: boolean }) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className={`absolute -inset-[50%] w-[200%] h-[200%] ${
          !shouldReduceMotion && isVisible ? "animate-gradient-shift" : ""
        }`}
        style={{
          background: isDark
            ? `radial-gradient(circle at 30% 30%, rgba(198, 166, 107, 0.12) 0%, transparent 40%),
               radial-gradient(circle at 75% 70%, rgba(32, 42, 51, 0.40) 0%, transparent 50%),
               radial-gradient(circle at 50% 50%, rgba(16, 24, 32, 0.50) 0%, transparent 60%)`
            : `radial-gradient(circle at 25% 25%, rgba(198, 166, 107, 0.08) 0%, transparent 45%),
               radial-gradient(circle at 80% 75%, rgba(229, 232, 235, 0.65) 0%, transparent 50%),
               radial-gradient(circle at 50% 50%, rgba(245, 243, 238, 0.50) 0%, transparent 55%)`,
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}

// ============================================================================
// 6. BRIDGE SILHOUETTE VARIANT (SVG truss / girder outline drawing on scroll)
// ============================================================================
function BridgeSilhouetteVariant({ isDark, shouldReduceMotion }: { isDark: boolean; shouldReduceMotion: boolean | null }) {
  const strokeColor = isDark ? "rgba(198, 166, 107, 0.22)" : "rgba(57, 67, 77, 0.16)";
  const bottomColor = isDark ? "rgba(198, 166, 107, 0.12)" : "rgba(198, 166, 107, 0.20)";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex items-end opacity-80 pointer-events-none">
      <svg
        className="w-full h-40 sm:h-56 md:h-64 object-cover"
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Bottom Rail / Tie */}
        <line x1="0" y1="180" x2="1200" y2="180" stroke={strokeColor} strokeWidth="3" />
        <line x1="0" y1="190" x2="1200" y2="190" stroke={bottomColor} strokeWidth="1.5" />

        {/* Top Arch / Chord of Bowstring Truss */}
        <motion.path
          d="M 50 180 Q 300 20 600 20 Q 900 20 1150 180"
          stroke={strokeColor}
          strokeWidth="2.5"
          fill="none"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />

        {/* Vertical and Diagonal Truss Members */}
        {[
          { x: 150, y: 140 },
          { x: 250, y: 90 },
          { x: 350, y: 55 },
          { x: 450, y: 35 },
          { x: 550, y: 25 },
          { x: 650, y: 25 },
          { x: 750, y: 35 },
          { x: 850, y: 55 },
          { x: 950, y: 90 },
          { x: 1050, y: 140 },
        ].map((pt, idx) => (
          <g key={idx}>
            {/* Vertical Hanger */}
            <line x1={pt.x} y1={pt.y} x2={pt.x} y2="180" stroke={strokeColor} strokeWidth="1.2" strokeDasharray="3 3" />
            {/* Cross Brace */}
            {idx % 2 === 0 && idx < 9 && (
              <line x1={pt.x} y1={pt.y} x2={pt.x + 100} y2="180" stroke={strokeColor} strokeWidth="0.8" opacity="0.6" />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
