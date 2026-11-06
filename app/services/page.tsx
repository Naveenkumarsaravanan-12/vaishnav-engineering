"use client";

import React, { useRef } from "react";
import Container from "@/components/layout/container";
import {
  AnimatedBackground,
  Reveal,
  Counter,
  SectionDivider,
  SectionNav,
  BackgroundVariant,
} from "@/components/motion";

// --- CUSTOM SVG COMPONENTS ---
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
    <circle cx="12" cy="9" r="9" />
    <path d="M12 7v5l3 2" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
  </svg>
);

interface ProductStat {
  value: string;
  label: string;
  num?: number;
  prefix?: string;
  suffix?: string;
}

interface ProductItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  bgVariant: BackgroundVariant;
  stats: ProductStat[];
}

const products: ProductItem[] = [
  {
    id: "railway-bridge",
    title: "Railway Bridge Fabrication",
    icon: <RailwayBridgeIcon />,
    description: "Specialized in RDSO-certified fabrication of composite plate girders and open web girders. We ensure high-tensile strength, automated SAW welding, and precision camber geometry for critical Indian Railway corridors.",
    bgVariant: "bridge-silhouette",
    stats: [
      { value: "RDSO", label: "Class-A Certified" },
      { value: "5000MT+", label: "Steel Processed", num: 5000, suffix: "MT+" },
      { value: "100%", label: "UT/RT Quality Pass", num: 100, suffix: "%" },
    ],
  },
  {
    id: "structural-steel",
    title: "Structural Steel Fabrication",
    icon: <StructuralSteelIcon />,
    description: "Expert solutions for heavy industrial sheds, power plant structures, and complex factory layouts. Our fabrication process follows strict ISO standards for durability, wind loading, and seismic endurance.",
    bgVariant: "steel-lines",
    stats: [
      { value: "15+", label: "Years Experience", num: 15, suffix: "+" },
      { value: "10 Acre", label: "Fabrication Yard", num: 10, suffix: " Acre" },
      { value: "Direct", label: "Material Sourcing" },
    ],
  },
  {
    id: "gates-dampers",
    title: "Gates and Dampers",
    icon: <GatesDampersIcon />,
    description: "Custom design and manufacturing of heavy-duty industrial gates and dampers for power plants and process industries, focusing on high-integrity fluid control, zero leakage, and extreme thermal resilience.",
    bgVariant: "floating-shapes",
    stats: [
      { value: "200+", label: "Units Installed", num: 200, suffix: "+" },
      { value: "Custom", label: "Design Ready" },
      { value: "99.9%", label: "Sealing Efficiency" },
    ],
  },
  {
    id: "precision",
    title: "Precision Engineering",
    icon: <PrecisionIcon />,
    description: "Advanced machining of specialized equipment components for the Energy, Oil, and Gas sectors with micron-level accuracy using high-end CNC technology and calibrated metrology inspection.",
    bgVariant: "blueprint-grid",
    stats: [
      { value: "0.001mm", label: "Tolerance Level" },
      { value: "Tier-1", label: "Vendor Status" },
      { value: "CNC", label: "Advanced Facility" },
    ],
  },
];

export default function ProductsPage() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const navSections = products.map((p, idx) => ({
    id: p.id,
    label: `${idx + 1}. ${p.title}`,
    shortLabel: p.title.split(" ")[0],
  }));

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      
      {/* 1. TOP BUSINESS VERTICALS HERO */}
      <section className="relative bg-white py-16 sm:py-20 border-b border-[#39434D]/20 overflow-hidden">
        <AnimatedBackground variant="steel-lines" theme="light" opacity={0.55} />
        <Container className="relative z-10">
          <div className="text-center mb-14">
            <Reveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-4 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6A66B]" />
                Core Competencies & Capabilities
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#20262D] tracking-tight font-heading">
                Business <span className="text-[#C6A66B] font-semibold italic">Verticals</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="mt-4 text-sm sm:text-base text-[#5C6670] max-w-2xl mx-auto font-normal leading-relaxed">
                Precision heavy engineering, RDSO-certified railway bridge fabrication, and large-scale industrial structural solutions engineered for national infrastructure.
              </p>
            </Reveal>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <Reveal key={index} direction="up" delay={0.1 + index * 0.08}>
                <button
                  type="button"
                  onClick={() => scrollToSection(index)}
                  className="group relative bg-white border border-[#39434D]/20 p-8 flex flex-col items-center justify-center text-center hover:border-[#C6A66B] hover:shadow-xl hover:-translate-y-1 overflow-hidden rounded-2xl shadow-xs cursor-pointer transition-all duration-300 w-full"
                >
                  {/* Hover Reveal Fill */}
                  <div className="absolute inset-0 bg-[#101820] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  
                  <div className="relative z-10 mb-5 text-[#C6A66B] group-hover:text-[#F8F7F2] transition-colors duration-200">
                    {item.icon}
                  </div>
                  <h3 className="relative z-10 text-xs tracking-wider uppercase font-bold text-[#20262D] group-hover:text-[#F8F7F2] leading-snug transition-colors duration-200 font-heading">
                    {item.title}
                  </h3>
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* STICKY SECTION NAVIGATOR */}
      <SectionNav sections={navSections} badgeText="Engineering Verticals" />

      {/* 2. DETAIL SECTIONS */}
      <div className="py-16 md:py-24">
        <Container>
          <div className="space-y-24 md:space-y-32">
            {products.map((item, index) => (
              <div
                key={index}
                id={item.id}
                ref={(el) => { sectionsRef.current[index] = el; }}
                className="scroll-mt-36"
              >
                {/* Product Card Container with Dedicated Animated Background */}
                <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white/70 backdrop-blur-xs p-8 sm:p-12 shadow-sm">
                  <AnimatedBackground variant={item.bgVariant} theme="light" opacity={0.4} />
                  
                  <div className="relative z-10 space-y-10">
                    {/* Text Content */}
                    <div className="text-center max-w-3xl mx-auto">
                      <Reveal direction="up" delay={0.05}>
                        <span className="text-[#C6A66B] text-xs font-bold tracking-[0.25em] uppercase block mb-3 font-mono">
                          {`0${index + 1} // Precision System`}
                        </span>
                      </Reveal>
                      <Reveal direction="up" delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-[#20262D] tracking-tight font-heading">
                          {item.title}
                        </h2>
                      </Reveal>
                      <Reveal direction="left" delay={0.15}>
                        <p className="text-[#5C6670] leading-relaxed text-base md:text-lg font-normal">
                          {item.description}
                        </p>
                      </Reveal>
                    </div>

                    {/* THE TRI-MERGED DATA BAR */}
                    <Reveal direction="up" delay={0.2}>
                      <div className="w-full bg-white border border-[#39434D]/20 shadow-sm rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#C6A66B]/50 transition-all duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#39434D]/15">
                          {item.stats.map((stat, i) => (
                            <div 
                              key={i} 
                              className="group flex flex-col items-center justify-center p-8 sm:p-10 relative overflow-hidden bg-white hover:bg-[#F5F3EE]/60 transition-colors"
                            >
                              {/* Top Accent Line */}
                              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C6A66B] via-[#D8B97E] to-[#C6A66B]" />
                              
                              <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-[#101820] mb-2 tracking-tight group-hover:text-[#C6A66B] transition-colors">
                                {stat.num !== undefined ? (
                                  <Counter to={stat.num} suffix={stat.suffix || ""} prefix={stat.prefix || ""} />
                                ) : (
                                  stat.value
                                )}
                              </h3>
                              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#89939D] font-mono">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </section>

                {index < products.length - 1 && (
                  <div className="mt-16 md:mt-20">
                    <SectionDivider label={`NEXT VERTICAL // 0${index + 2}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
