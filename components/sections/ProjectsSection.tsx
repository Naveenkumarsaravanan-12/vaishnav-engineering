"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function ProjectsSection() {
  return (
    <section className="bg-[#fafafa] min-h-screen">
      
      {/* 1. BLACK HERO SECTION */}
      <div className="bg-[#1a1a1a] pt-40 pb-40 border-b border-white/5 relative overflow-hidden">
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#c26b6b]" />
              <span className="text-[#c26b6b] text-[10px] font-bold uppercase tracking-[0.3em]">Portfolio</span>
              <div className="h-[1px] w-12 bg-[#c26b6b]" />
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              Featured <br className="hidden md:block" /><span className="text-gray-500 font-light italic">Work.</span>
            </h1>
          </motion.div>
        </Container>
      </div>

      {/* 2. CASE STUDY SECTION */}
      <div className="py-24 md:py-32 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center relative">
            
            {/* Structural Watermark */}
            <div className="absolute top-0 right-0 lg:-right-20 text-[180px] lg:text-[250px] font-black text-gray-100 leading-none select-none z-0 pointer-events-none">
              01
            </div>
            
            {/* IMAGE CONTAINER */}
            <div className="w-full lg:w-[55%] relative z-10">
              <div className="absolute -inset-4 border border-[#c26b6b]/30 z-0 hidden sm:block translate-x-6 translate-y-6" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[4/3] bg-[#333] overflow-hidden rounded-sm shadow-2xl border border-gray-200"
              >
                <Image 
                  src="/projects/bridge.jpeg" 
                  alt="Bowstring Arch Girder Construction" 
                  fill
                  priority
                  unoptimized 
                  className="object-cover z-30 transition-all duration-700 hover:scale-105" 
                />
              </motion.div>
            </div>

            {/* TEXT CONTAINER - Updated for Bowstring Girder */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[45%] flex flex-col justify-center relative z-10"
            >
              <div className="h-1 bg-[#c26b6b] w-full mb-8" />
              <span className="text-[#c26b6b] font-bold text-[10px] tracking-[0.3em] uppercase block mb-4">
                01 // Railway Infrastructure
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Bowstring Arch <br />Girder Deployment
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light mb-10">
                A high-precision engineering feat involving the fabrication and assembly of a heavy-duty bowstring girder. This structure was designed for a critical Railway Over Bridge (ROB) project, ensuring maximum load-bearing capacity and structural integrity across active rail lines.
              </p>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-b border-gray-200 py-8">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">Location</p>
                  <p className="font-semibold text-[#1a1a1a]">Bangalore, KA</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">Year</p>
                  <p className="font-semibold text-[#1a1a1a]">2024</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">Structure Type</p>
                  <p className="font-semibold text-[#1a1a1a]">Open Web Arch</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">Certification</p>
                  <p className="font-semibold text-[#1a1a1a]">RDSO Standards</p>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </div>

    </section>
  );
}