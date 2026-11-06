"use client";

import Image from "next/image";
import Container from "@/components/layout/container";

export default function ProjectsSection() {
  return (
    <section className="bg-[#f8fafc] text-slate-900 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-white pt-32 pb-32 border-b border-slate-200 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#0f2b48]" />
              <span className="text-[#0f2b48] text-xs font-bold uppercase tracking-[0.3em] font-mono">Portfolio</span>
              <div className="h-[1px] w-12 bg-[#0f2b48]" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#0f172a] leading-[0.95] tracking-tight mb-4">
              Featured <br className="hidden md:block" /><span className="text-[#0f2b48] font-semibold italic">Work.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Precision heavy fabrication, RDSO B1 girder engineering, and turnkey erection across India.
            </p>
          </div>
        </Container>
      </div>

      {/* 2. CASE STUDY SECTION */}
      <div className="py-20 md:py-28 overflow-hidden bg-[#f8fafc]">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative">
            
            {/* Structural Watermark */}
            <div className="absolute top-0 right-0 lg:-right-20 text-[180px] lg:text-[250px] font-black text-slate-900/[0.03] leading-none select-none z-0 pointer-events-none font-mono">
              01
            </div>
            
            {/* IMAGE CONTAINER */}
            <div className="w-full lg:w-[55%] relative z-10">
              <div className="absolute -inset-4 border border-[#0f2b48]/20 z-0 hidden sm:block translate-x-4 translate-y-4 rounded-2xl" />
              
              <div className="relative w-full aspect-[4/3] bg-white overflow-hidden rounded-2xl shadow-xl border border-slate-200">
                <Image 
                  src="/projects/bridge.jpeg" 
                  alt="Bowstring Arch Girder Construction" 
                  fill
                  priority
                  unoptimized 
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover z-30" 
                />
              </div>
            </div>

            {/* TEXT CONTAINER - Bowstring Girder */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center relative z-10">
              <div className="h-1 bg-[#0f2b48] w-full mb-6 rounded-full" />
              <span className="text-[#0f2b48] font-bold text-xs tracking-[0.25em] uppercase block mb-3 font-mono">
                01 // Railway Infrastructure
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-5 tracking-tight leading-tight">
                Bowstring Arch <br />Girder Deployment
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal mb-8">
                A high-precision engineering feat involving the fabrication and assembly of a heavy-duty bowstring girder. This structure was designed for a critical Railway Over Bridge (ROB) project, ensuring maximum load-bearing capacity and structural integrity across active rail lines.
              </p>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-b border-slate-200 py-6">
                <div>
                  <p className="text-[11px] font-bold text-slate-500 tracking-[0.15em] uppercase mb-1">Location</p>
                  <p className="font-bold text-[#0f172a]">Bangalore, KA</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 tracking-[0.15em] uppercase mb-1">Year</p>
                  <p className="font-bold text-[#0f172a]">2024</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 tracking-[0.15em] uppercase mb-1">Structure Type</p>
                  <p className="font-bold text-[#0f172a]">Open Web Arch</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 tracking-[0.15em] uppercase mb-1">Certification</p>
                  <p className="font-bold text-emerald-700">RDSO Standards</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>

    </section>
  );
}