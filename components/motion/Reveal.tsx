"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.55,
  className = "",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 30 };
      case "down":
        return { opacity: 0, y: -30 };
      case "left":
        return { opacity: 0, x: -30 };
      case "right":
        return { opacity: 0, x: 30 };
      case "scale":
        return { opacity: 0, scale: 0.95 };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  const getTarget = () => {
    switch (direction) {
      case "scale":
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getTarget()}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
