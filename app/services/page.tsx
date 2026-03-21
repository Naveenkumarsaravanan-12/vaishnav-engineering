"use client";

import React, { useRef } from "react";
import Container from "@/components/layout/container";
import { motion } from "framer-motion";

// --- CUSTOM SVG COMPONENTS (Kept intact, colors will adapt automatically) ---
const RailwayBridgeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h18M3 18h18M5 12v6M9 12v6M13 12v6M17 12v6M19 12v6" />
    <path d="M3 12c0-5 4-7 9-7s9 2 9 7" />
  </svg>
);

const StructuralSteelIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <path d="M4 12h16M12 4v16M4 4l16 16M20 4L4 20" />
  </svg>
);

const GatesDampersIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18v12H3zM3 12h18M8 6v12M16 6v12" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const PrecisionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
  </svg>
);

const products = [
  {
    id: "railway-bridge",
    title: "Railway Bridge Fabrication",
    icon: <RailwayBridgeIcon />,
    description: "Specialized in RDSO-certified fabrication of composite girders and open web girders. We ensure high-tensile strength and precision welding for critical railway infrastructure.",
    stats: [
      { value: "RDSO", label: "Class-A Certified" },
      { value: "5000MT+", label: "Steel Processed" },
      { value: "100%", label: "UT/RT Quality Pass" },
    ],
  },
  {
    id: "structural-steel",
    title: "Structural Steel Fabrication",
    icon: <StructuralSteelIcon />,
    description: "Expert solutions for heavy industrial sheds, power plant structures, and complex factory layouts. Our fabrication process follows strict ISO standards for durability.",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "10 Acre", label: "Fabrication Yard" },
      { value: "Direct", label: "Material Sourcing" },
    ],
  },
  {
    id: "gates-dampers",
    title: "Gates and Dampers",
    icon: <GatesDampersIcon />,
    description: "Custom design and manufacturing of heavy-duty industrial gates and dampers for power plants and process industries, focusing on fluid control and safety.",
    stats: [
      { value: "200+", label: "Units Installed" },
      { value: "Custom", label: "Design Ready" },
      { value: "99.9%", label: "Sealing Efficiency" },
    ],
  },
  {
    id: "precision",
    title: "Precision Engineering",
    icon: <PrecisionIcon />,
    description: "Advanced machining of specialized equipment components for the Energy, Oil, and Gas sectors with micron-level accuracy using high-end CNC technology.",
    stats: [
      { value: "0.001mm", label: "Tolerance Level" },
      { value: "Tier-1", label: "Vendor Status" },
      { value: "CNC", label: "Advanced Facility" },
    ],
  },
];

export default function ProductsPage() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth scroll logic
  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="bg-white text-[#1a1a1a] min-h-screen">
      
      {/* 1. TOP BUSINESS VERTICALS HERO (Deep Charcoal) */}
      <div className="bg-[#1a1a1a] pt-32 pb-40 border-b border-white/5 relative overflow-hidden">
        {/* Subtle Engineering Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#c26b6b]" />
              <span className="text-[#c26b6b] text-[10px] font-bold uppercase tracking-[0.3em]">
                Core Competencies
              </span>
              <div className="h-[1px] w-12 bg-[#c26b6b]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Business <span className="text-gray-500 font-light italic">Verticals.</span>
            </h1>
          </motion.div>

          {/* Interactive Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(index)}
                className="group relative bg-[#222222] border border-white/10 p-10 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-[#c26b6b] overflow-hidden rounded-sm"
              >
                {/* Hover Reveal Fill */}
                <div className="absolute inset-0 bg-[#c26b6b] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <div className="relative z-10 mb-6 text-gray-400 group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="relative z-10 text-sm tracking-widest uppercase font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </motion.button>
            ))}
          </div>
        </Container>
      </div>

      {/* 2. DETAIL SECTIONS */}
      <div className="py-24 md:py-32 bg-[#fafafa]">
        <Container>
          <div className="space-y-40">
            {products.map((item, index) => (
              <div
                key={index}
                ref={(el) => { sectionsRef.current[index] = el; }}
                className="scroll-mt-32" // Prevents sticky nav from covering title
              >
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <span className="text-[#c26b6b] text-[12px] font-bold tracking-[0.4em] uppercase block mb-4">
                    {`0${index + 1} // System`}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1a1a1a] tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light">
                    {item.description}
                  </p>
                </motion.div>

                {/* THE TRI-MERGED DATA BAR (Replaces the individual floating squares) */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-16 w-full bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-sm overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {item.stats.map((stat, i) => (
                      <div 
                        key={i} 
                        className="group flex flex-col items-center justify-center p-12 relative overflow-hidden bg-white hover:bg-[#1a1a1a] transition-colors duration-500"
                      >
                        {/* Top Accent Line on Hover */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#c26b6b] -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        
                        <h3 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-3 group-hover:text-white transition-colors duration-500">
                          {stat.value}
                        </h3>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-400 group-hover:text-[#c26b6b] transition-colors duration-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
