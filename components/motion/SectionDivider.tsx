"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface SectionDividerProps {
  number?: string;
  label?: string;
  className?: string;
}

export default function SectionDivider({ number, label, className = "" }: SectionDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative py-8 md:py-12 overflow-hidden ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
        <motion.div
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originX: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#39434D]/50 to-[#C6A66B]/60 flex-1"
        />

        <div className="inline-flex items-center gap-2 rounded-full bg-[#101820] border border-[#C6A66B]/40 px-4 py-1.5 text-xs font-mono font-bold text-[#C6A66B] shadow-xs shrink-0">
          <span className="text-[#C6A66B]">✦</span>
          {number && <span className="text-[#F8F7F2]">{number}</span>}
          {label && <span className="uppercase tracking-wider text-[#C6A66B]">{label}</span>}
          <span className="text-[#C6A66B]">✦</span>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px bg-gradient-to-l from-transparent via-[#39434D]/50 to-[#C6A66B]/60 flex-1"
        />
      </div>
    </div>
  );
}
