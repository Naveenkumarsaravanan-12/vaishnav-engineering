"use client";

import React from "react";
import Container from "@/components/layout/container";

export default function ProductsPage() {
  return (
    <section className="bg-[#f8fafc] text-slate-900 min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="bg-white py-24 border-b border-slate-200">
        <Container>
          <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight text-[#0f172a]">
            Business <span className="text-[#0f2b48]">Verticals.</span>
          </h1>
          
          <p className="text-center mt-4 text-[#0f2b48] max-w-lg mx-auto uppercase tracking-widest text-xs font-mono font-bold">
            Engineering Excellence Across Sectors
          </p>
        </Container>
      </div>

      {/* CONTENT SECTIONS */}
      <Container className="py-20">
        <div className="space-y-32">
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
  return (
    <div className="relative group">
      {/* Background Watermark */}
      <div className="absolute -top-10 -left-10 text-[150px] font-black text-slate-900/[0.04] select-none pointer-events-none font-mono">
        {number}
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#0f172a]">{title}</h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mb-6 font-normal">{desc}</p>
        
        {/* Adaptive Stat Box */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-w-md">
          <div className="bg-white p-6 flex flex-col items-center">
            <span className="text-3xl font-extrabold text-[#0f2b48]">100%</span>
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mt-1">Precision</span>
          </div>
          <div className="bg-white p-6 flex flex-col items-center">
            <span className="text-3xl font-extrabold text-emerald-700">RDSO</span>
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mt-1">Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
