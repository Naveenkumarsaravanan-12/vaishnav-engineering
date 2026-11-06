"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatter?: (val: number) => string;
  className?: string;
}

export default function Counter({
  from = 0,
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  formatter,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(shouldReduceMotion ? to : from);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(to);
      return;
    }

    if (isInView) {
      let startTime: number | null = null;
      let animationFrameId: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.round(from + (to - from) * ease);
        setDisplayValue(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);

      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isInView, from, to, duration, shouldReduceMotion]);

  const formatted = formatter
    ? formatter(displayValue)
    : displayValue.toLocaleString("en-IN");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
