"use client";

import React, { useRef } from "react";
import Container from "@/components/layout/container";
import { motion, useInView } from "framer-motion";

export default function ProductsPage() {
  return (
    // bg-white for light, dark:bg-zinc-950 for dark
    <section className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500 min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-32 border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Business <span className="text-[#c26b6b]">Verticals.</span>
          </motion.h1>
          
          <p className="text-center mt-6 text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto uppercase tracking-widest text-[10px] font-bold">
            Engineering Excellence Across Sectors
          </p>
        </Container>
      </div>

      {/* CONTENT SECTIONS */}
      <Container className="py-24">
        <div className="space-y-40">
          <DetailBlock 
            title="Steel Fabrication" 
            number="01" 
            desc="High-quality structural steel processing with 1000MT+ inventory."
          />
          <DetailBlock 
            title="Bridge Construction" 
            number="02" 
            desc="Specializing in Bowstring Girders and Railway Over Bridges."
          />
        </div>
      </Container>
    </section>
  );
}

type DetailBlockProps = {
  title: string;
  number: string;
  desc: string;
};

function DetailBlock({ title, number, desc }: DetailBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="relative group">
      {/* Background Watermark */}
      <div className="absolute -top-10 -left-10 text-[150px] font-black text-zinc-100 dark:text-white/[0.02] select-none pointer-events-none transition-colors">
        {number}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mb-8">{desc}</p>
        
        {/* Adaptive Stat Box */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <div className="bg-white dark:bg-zinc-900 p-8 flex flex-col items-center">
            <span className="text-3xl font-bold text-[#c26b6b]">100%</span>
            <span className="text-[10px] uppercase tracking-tighter text-zinc-400">Precision</span>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 flex flex-col items-center">
            <span className="text-3xl font-bold text-[#c26b6b]">RDSO</span>
            <span className="text-[10px] uppercase tracking-tighter text-zinc-400">Certified</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
