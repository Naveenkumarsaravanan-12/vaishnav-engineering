"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Layers,
  Activity,
  CheckCircle2,
  ArrowRight,
  Zap,
  Building,
  Download,
  FileText,
  Compass,
  ChevronRight,
  Gauge,
  Cpu,
  Factory,
  Wrench,
  Sparkles,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ROBVideoScrollSection from "@/components/sections/ROBVideoScrollSection";
import { PROJECTS_DATA, RDSO_APPROVAL_INFO } from "@/data/portalData";
import { AnimatedBackground, Reveal, Counter, SectionDivider } from "@/components/motion";

export default function Home() {
  const [activeSpecTab, setActiveSpecTab] = useState<"arch" | "deck" | "hangers" | "bearings">("arch");
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const specData = {
    arch: {
      title: "Parabolic Arch Rib System",
      code: "VE-ARCH-450",
      description: "Curved welded hollow box sections fabricated from high-tensile structural steel (IS 2062 E450 BR). Designed to carry primary compressive loads with parabolic curvature optimized to eliminate bending moments under uniform railway loading.",
      specs: [
        { label: "Steel Specification", value: "IS 2062 E450 BR" },
        { label: "Yield Strength (Fy)", value: "450 - 540 MPa" },
        { label: "Welding Code", value: "AWS D1.5 / IRS B1" },
        { label: "NDE Examination", value: "100% Ultrasonic & Radiography" },
      ]
    },
    deck: {
      title: "Orthotropic Steel Deck & Box Girders",
      code: "VE-DECK-32T",
      description: "Continuous welded longitudinal and transverse stiffened floor beams. Provides ultra-high torsional rigidity to withstand 32.5-tonne heavy freight axle impacts with minimal dynamic deflection.",
      specs: [
        { label: "Design Axle Capacity", value: "32.5 Tonnes (DFC Heavy)" },
        { label: "Max Dynamic Deflection", value: "L / 1200 Max" },
        { label: "Surface Protection", value: "150µm Zinc Thermal Spray" },
        { label: "Design Life Expectancy", value: "100+ Years" },
      ]
    },
    hangers: {
      title: "High-Tensile Suspender Rods & Ties",
      code: "VE-SUSP-120",
      description: "Pre-tensioned vertical suspender cables equipped with forged spherical sockets and zinc filler protection. Maintains balanced tensile force distribution across every meter of the track deck.",
      specs: [
        { label: "Cable Tensile Strength", value: "1,770 - 1,860 MPa" },
        { label: "Fatigue Stress Range", value: "UIC-774-3R Class S" },
        { label: "Socket Termination", value: "Hot-Cast Resin Zinc Alloy" },
        { label: "Vibration Dampers", value: "Tuned Stockbridge Installed" },
      ]
    },
    bearings: {
      title: "Spherical & Pot Elastomeric Bearings",
      code: "VE-BEAR-POT",
      description: "Multi-directional PTFE/stainless steel sliding pot bearings configured to accommodate longitudinal bridge expansion, transverse seismic movements, and micro-rotations under high-speed passage.",
      specs: [
        { label: "Vertical Capacity", value: "Up to 3,500 Tonnes" },
        { label: "Longitudinal Stroke", value: "±150 mm Movement" },
        { label: "Rotational Freedom", value: "0.03 Radians 3-Axis" },
        { label: "Standard Compliance", value: "IRC:83 (Part III) / BS 5400" },
      ]
    }
  };

  const coreVerticals = [
    {
      title: "Railway Bridge Fabrication",
      badge: "RDSO Approved Part-A",
      desc: "Composite plate girders, open-web through trusses, and bowstring arches fabricated strictly per IRS B1-2001 standards.",
      stats: "5,500 MT / Year Capacity",
      icon: Compass,
      link: "/services"
    },
    {
      title: "Structural Steel Engineering",
      badge: "ISO 9001:2015",
      desc: "Heavy industrial columns, roof trusses, crane gantries, and power plant framing with robotic submerged arc welding.",
      stats: "50-Tonne EOT Lifting",
      icon: Building,
      link: "/services"
    },
    {
      title: "Industrial Gates & Dampers",
      badge: "Power & Process Ready",
      desc: "Custom engineered heavy slide gates, guillotine dampers, and louver systems ensuring 99.9% fluid sealing reliability.",
      stats: "200+ Operational Units",
      icon: Gauge,
      link: "/services"
    },
    {
      title: "Precision CNC Metrology",
      badge: "NABL Verified",
      desc: "CNC multi-torch oxy-fuel profiling up to 100mm, automated plate drilling, and 500-tonne hydraulic beam straightening.",
      stats: "±0.01mm Precision Tolerance",
      icon: Wrench,
      link: "/services"
    }
  ];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadModalOpen(false);
    }, 2000);
  };

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen selection:bg-[#C6A66B] selection:text-[#101820] font-body">
      {/* ---------------- 1. RDSO RAILWAY BRIDGE HERO (CINEMATIC 3D EXPLODED SCROLLER) ---------------- */}
      <HeroSection />

      {/* ---------------- 2. RDSO 72M BOWSTRING GIRDER ROB ERECTION (SCROLL-CONTROLLED MP4 VIDEO) ---------------- */}
      <ROBVideoScrollSection />

      {/* ---------------- 3. TECHNICAL SPECIFICATIONS & BLUEPRINT (LIGHT SECTION - WARM IVORY) ---------------- */}
      <section id="specifications" className="relative z-20 py-20 md:py-28 px-6 sm:px-12 md:px-20 border-t border-[#39434D]/20 bg-[#F5F3EE] text-[#20262D] overflow-hidden">
        {/* Animated Blueprint Background */}
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.65} />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono text-[#20262D] border border-[#39434D]/30 mb-4 font-bold shadow-xs">
                  <Compass className="h-3.5 w-3.5 text-[#C6A66B]" /> ARCHITECTURAL DISASSEMBLY & METRICS
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#20262D] leading-tight">
                  Sub-Assembly Engineering Specs
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <p className="max-w-md text-sm sm:text-base text-[#5C6670] leading-relaxed font-normal">
                Every component fabricated in our Chennai heavy engineering plant conforms to rigorous Indian Railways RDSO B1 standards.
              </p>
            </Reveal>
          </div>

          {/* Key Metrics Quick Bar with Animated Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            <Reveal direction="scale" delay={0.05}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs hover:-translate-y-1 hover:border-[#C6A66B] hover:shadow-xl hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 group">
                <span className="text-xs font-mono text-[#89939D] uppercase tracking-widest block mb-1 font-semibold">Clear Span</span>
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20262D] group-hover:text-[#C6A66B] transition-colors">
                  <Counter to={120} suffix="m" />
                </p>
                <p className="text-xs text-[#C6A66B] mt-2 font-mono font-bold">Single-Span Launch</p>
              </div>
            </Reveal>

            <Reveal direction="scale" delay={0.12}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs hover:-translate-y-1 hover:border-[#C6A66B] hover:shadow-xl hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 group">
                <span className="text-xs font-mono text-[#89939D] uppercase tracking-widest block mb-1 font-semibold">Axle Capacity</span>
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20262D] group-hover:text-[#C6A66B] transition-colors">
                  32.5T
                </p>
                <p className="text-xs text-[#C6A66B] mt-2 font-mono font-bold">DFC Heavy Corridor</p>
              </div>
            </Reveal>

            <Reveal direction="scale" delay={0.19}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs hover:-translate-y-1 hover:border-[#C6A66B] hover:shadow-xl hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 group">
                <span className="text-xs font-mono text-[#89939D] uppercase tracking-widest block mb-1 font-semibold">Steel Yield</span>
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20262D] group-hover:text-[#C6A66B] transition-colors">
                  <Counter to={540} suffix=" MPa" />
                </p>
                <p className="text-xs text-[#C6A66B] mt-2 font-mono font-bold">IS 2062 E450 BR</p>
              </div>
            </Reveal>

            <Reveal direction="scale" delay={0.26}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 shadow-xs hover:-translate-y-1 hover:border-[#C6A66B] hover:shadow-xl hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 group">
                <span className="text-xs font-mono text-[#89939D] uppercase tracking-widest block mb-1 font-semibold">Audit Status</span>
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-[#C6A66B] group-hover:text-[#B5955A] transition-colors">RDSO</p>
                <p className="text-xs text-[#20262D] mt-2 font-mono font-bold">Approved Vendor</p>
              </div>
            </Reveal>
          </div>

          {/* Interactive Specification Explorer Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tab Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {(
                [
                  { id: "arch", label: "01. Parabolic Arch Rib", icon: Layers },
                  { id: "deck", label: "02. Orthotropic Deck Box", icon: Activity },
                  { id: "hangers", label: "03. Suspender Cables & Ties", icon: Cpu },
                  { id: "bearings", label: "04. Pot & Spherical Bearings", icon: Gauge },
                ] as const
              ).map((tab) => {
                const Icon = tab.icon;
                const isActive = activeSpecTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSpecTab(tab.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#101820] border-[#C6A66B] text-[#F8F7F2] shadow-md font-semibold ring-1 ring-[#C6A66B]/30"
                        : "bg-white border-[#39434D]/20 text-[#20262D] hover:border-[#C6A66B]/60 hover:bg-[#E5E8EB]/50 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`h-4 w-4 ${isActive ? "text-[#C6A66B]" : "text-[#89939D]"}`} />
                      <span className="text-sm font-semibold tracking-tight">{tab.label}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? "rotate-90 text-[#C6A66B]" : "text-[#89939D]"}`} />
                  </button>
                );
              })}

              <div className="mt-4 p-5 rounded-2xl border border-[#39434D]/20 bg-white text-xs font-mono text-[#5C6670] space-y-2.5 shadow-xs">
                <div className="text-[#20262D] font-bold uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#C6A66B]" />
                  Quality Assurance Standards
                </div>
                <div>• Radiographic test on all butt welds</div>
                <div>• Ultrasonic examination on all tension joints</div>
                <div>• Trial erection in Chennai yard prior to dispatch</div>
              </div>
            </div>

            {/* Active Tab Content Card */}
            <Reveal direction="scale" delay={0.15} className="lg:col-span-8">
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-8 sm:p-10 shadow-md text-[#20262D] relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-5 mb-6">
                  <div>
                    <span className="text-xs font-mono text-[#C6A66B] uppercase tracking-widest font-bold">
                      Part ID: {specData[activeSpecTab].code}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[#20262D] mt-1">
                      {specData[activeSpecTab].title}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-[#C6A66B]" />
                  </div>
                </div>

                <p className="text-[#5C6670] text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  {specData[activeSpecTab].description}
                </p>

                {/* Data Table */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specData[activeSpecTab].specs.map((item, idx) => (
                    <div key={idx} className="rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 p-4 hover:border-[#C6A66B]/50 transition-colors">
                      <span className="text-xs font-mono text-[#89939D] uppercase block mb-1 font-semibold">
                        {item.label}
                      </span>
                      <span className="font-heading text-base font-bold text-[#20262D] tracking-tight">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#39434D]/15 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[#89939D]">
                    STANDARD: IRS BRIDGE RULES / UIC 774-3R
                  </span>
                  <button
                    onClick={() => setDownloadModalOpen(true)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#C6A66B] hover:text-[#B5955A] transition-colors cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Full Part Blueprint</span>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider number="VERTICA" label="Heavy Industrial Competencies" />

      {/* ---------------- 3. CORE MANUFACTURING VERTICALS (DARK SECTION - MIDNIGHT NAVY & CHARCOAL) ---------------- */}
      <section className="relative py-20 md:py-28 px-6 sm:px-12 md:px-20 border-t border-[#39434D] bg-[#101820] text-[#F8F7F2] overflow-hidden">
        {/* Animated Steel Lines Background */}
        <AnimatedBackground variant="steel-lines" theme="dark" opacity={0.55} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal direction="left">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#202A33] px-3.5 py-1 text-xs font-mono font-bold text-[#C6A66B] border border-[#39434D] mb-3">
                  <Factory className="h-3.5 w-3.5 text-[#C6A66B]" /> CORE COMPETENCIES & CAPABILITIES
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F8F7F2]">
                  Heavy Industrial Business Verticals
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C6A66B] hover:text-[#D8B97E] transition-colors group"
              >
                Explore Full Engineering Capabilities <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreVerticals.map((vert, idx) => {
              const Icon = vert.icon;
              return (
                <Reveal key={idx} direction="scale" delay={idx * 0.09}>
                  <div className="rounded-2xl border border-[#39434D] bg-[#202A33] p-7 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 rounded-xl bg-[#101820] border border-[#39434D] flex items-center justify-center text-[#C6A66B] shadow-xs group-hover:bg-[#C6A66B] group-hover:text-[#101820] transition-colors duration-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-[#C6A66B] bg-[#101820] px-2.5 py-0.5 rounded-full border border-[#C6A66B]/30">
                          {vert.badge}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-[#F8F7F2] mb-2 leading-snug group-hover:text-[#C6A66B] transition-colors">
                        {vert.title}
                      </h3>
                      <p className="text-xs text-[#89939D] leading-relaxed mb-6 font-normal">
                        {vert.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#39434D]/60">
                      <span className="text-xs font-mono font-bold text-[#C6A66B] block mb-2">
                        {vert.stats}
                      </span>
                      <Link
                        href={vert.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F8F7F2] group-hover:text-[#C6A66B] transition-colors"
                      >
                        View Specifications <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider number="PROJECTS" label="Landmark Railway Infrastructure" />

      {/* ---------------- 4. FEATURED RAILWAY INFRASTRUCTURE INSTALLATIONS (LIGHT SECTION - SOFT STEEL GREY) ---------------- */}
      <section className="relative py-20 md:py-28 px-6 sm:px-12 md:px-20 border-t border-[#39434D]/20 bg-[#E5E8EB] text-[#20262D] overflow-hidden">
        {/* Animated Floating Shapes Background */}
        <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.6} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal direction="left">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3">
                  <Sparkles className="h-3.5 w-3.5 text-[#C6A66B]" /> RECENTLY EXECUTED RAILWAY WORKS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Flagship Railway Projects
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#20262D] hover:text-[#C6A66B] transition-colors group"
              >
                View 5-Year Execution Log & Works in Hand <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROJECTS_DATA.map((project, idx) => (
              <Reveal key={project.id} direction="scale" delay={idx * 0.1}>
                <div className="rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 flex flex-col group h-full">
                  <div className="relative h-60 w-full bg-[#101820] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 left-3 bg-[#101820]/90 text-[#C6A66B] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md backdrop-blur-xs border border-[#C6A66B]/30 shadow-xs">
                      {project.tonnage}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#202A33] text-[#F8F7F2] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-[#39434D] shadow-xs">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#C6A66B] uppercase block mb-1">
                        {project.client} • {project.year}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-[#20262D] mb-2 leading-snug group-hover:text-[#C6A66B] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#5C6670] leading-relaxed mb-4 font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#39434D]/15 flex items-center justify-between text-xs font-mono text-[#89939D]">
                      <span>SPAN: {project.spanDetails}</span>
                      <Link
                        href="/projects"
                        className="text-[#20262D] hover:text-[#C6A66B] font-bold flex items-center gap-1 transition-colors"
                      >
                        Details <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider number="QUALITY" label="Regulatory Compliance & Audits" />

      {/* ---------------- 5. RDSO INSPECTION READY FABRICATION (LIGHT SECTION - WARM IVORY) ---------------- */}
      <section className="relative py-20 md:py-28 px-6 sm:px-12 md:px-20 border-t border-[#39434D]/20 bg-[#F5F3EE] text-[#20262D] overflow-hidden">
        {/* Animated Blueprint Grid Background */}
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.6} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <Reveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#20262D] leading-tight mb-4">
                RDSO Inspection-Ready Fabrication
              </h2>
              <p className="text-[#5C6670] text-sm sm:text-base leading-relaxed font-normal">
                Certified for Indian Railways infrastructure. Complete traceability from steel mill test certificates to final trial erection.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Reveal direction="scale" delay={0.08}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-8 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 h-full">
                <div className="h-12 w-12 rounded-xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#C6A66B] mb-6 shadow-xs">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#20262D] mb-2">RDSO Vendor Approval</h3>
                <p className="text-xs font-mono text-[#C6A66B] font-bold mb-4">Reg ID: {RDSO_APPROVAL_INFO.registrationId}</p>
                <p className="text-sm text-[#5C6670] leading-relaxed mb-6 font-normal">
                  Registered under Indian Railways Research Designs and Standards Organisation for fabrication of Open Web and Bowstring Steel Girders.
                </p>
                <div className="text-xs font-mono text-[#89939D] pt-4 border-t border-[#39434D]/15">
                  IRS B1-2001 & BS-110 Compliant
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal direction="scale" delay={0.16}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-8 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 h-full">
                <div className="h-12 w-12 rounded-xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#C6A66B] mb-6 shadow-xs">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#20262D] mb-2">ISO 9001:2015 QMS</h3>
                <p className="text-xs font-mono text-[#C6A66B] font-bold mb-4">Cert: QA-ISO-9001-VE</p>
                <p className="text-sm text-[#5C6670] leading-relaxed mb-6 font-normal">
                  End-to-end quality management protocol covering raw material validation, robotic welding surveillance, and corrosion thermal spray.
                </p>
                <div className="text-xs font-mono text-[#89939D] pt-4 border-t border-[#39434D]/15">
                  Audited & Re-certified Annually
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal direction="scale" delay={0.24}>
              <div className="rounded-2xl border border-[#39434D]/20 bg-white p-8 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#C6A66B] hover:ring-1 hover:ring-[#C6A66B]/30 transition-all duration-300 h-full">
                <div className="h-12 w-12 rounded-xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#202A33] mb-6 shadow-xs">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#20262D] mb-2">Vellore Fabrication Yard</h3>
                <p className="text-xs font-mono text-[#20262D] font-bold mb-4">Thiruvalam Plant</p>
                <p className="text-sm text-[#5C6670] leading-relaxed mb-6 font-normal">
                  Heavy lifting overhead gantry cranes (25T), automatic CNC plasma cutters, and dedicated trial assembly beds for spans up to 120 meters.
                </p>
                <div className="text-xs font-mono text-[#89939D] pt-4 border-t border-[#39434D]/15">
                  Rail & Highway Linked Yard
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- 6. FINAL CALL TO ACTION (DEEP MIDNIGHT NAVY & CHAMPAGNE GOLD) ---------------- */}
      <section className="relative py-20 md:py-28 px-6 sm:px-12 md:px-20 bg-[#F5F3EE] overflow-hidden">
        <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.5} />

        <div className="relative z-10 max-w-5xl mx-auto rounded-3xl bg-[#101820] text-[#F8F7F2] p-10 sm:p-16 border border-[#39434D] text-center shadow-2xl overflow-hidden">
          {/* Animated Background inside CTA */}
          <AnimatedBackground variant="gradient-flow" theme="dark" opacity={0.8} />

          <div className="relative z-10">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#101820] px-4 py-1.5 text-xs font-mono text-[#C6A66B] border border-[#C6A66B]/40 mb-6 font-bold shadow-xs">
                <Zap className="h-3.5 w-3.5 text-[#C6A66B]" /> TENDER & ENGINEERING CONSULTATION
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F7F2] mb-6 leading-tight">
                Ready to Integrate Vaishnav Bowstring Girders?
              </h2>
            </Reveal>

            <Reveal direction="left" delay={0.14}>
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#89939D] leading-relaxed mb-10 font-normal">
                Request comprehensive fabrication drawings, structural weight estimations, and RDSO audit evidence dossiers for upcoming railway and highway tenders.
              </p>
            </Reveal>

            <Reveal direction="scale" delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setDownloadModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-7 py-4 text-sm font-bold text-[#101820] shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
                >
                  <Download className="h-4 w-4 text-[#101820]" />
                  <span>Download Technical Dossier (PDF)</span>
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#202A33] hover:bg-[#101820] px-7 py-4 text-sm font-semibold text-[#F8F7F2] border border-[#39434D] transition-transform hover:-translate-y-0.5"
                >
                  <span>Contact Chief Structural Engineer</span>
                  <ArrowRight className="h-4 w-4 text-[#C6A66B]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- 7. DOWNLOAD DOSSIER MODAL ---------------- */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101820]/80 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl border border-[#39434D]/30 bg-white p-8 shadow-2xl text-left text-[#20262D] animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-[#89939D] hover:text-[#20262D] text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-[#F5F3EE] border border-[#39434D]/20 flex items-center justify-center text-[#C6A66B]">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#20262D]">Bowstring Girder Dossier</h4>
                <p className="text-xs text-[#89939D] font-mono">VE-BG-TECH-2026.PDF (14.2 MB)</p>
              </div>
            </div>

            {downloadSuccess ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#C6A66B] mx-auto mb-3" />
                <p className="font-heading text-[#20262D] font-bold">Dossier Download Initiated!</p>
                <p className="text-xs text-[#89939D] mt-1">Thank you for your interest in Vaishnav Engineering.</p>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#5C6670] uppercase mb-1 font-bold">
                    Designation / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chief Bridge Engineer, Indian Railways"
                    className="w-full rounded-xl bg-[#F5F3EE] border border-[#39434D]/30 px-4 py-2.5 text-sm text-[#20262D] placeholder-[#89939D] focus:outline-none focus:border-[#C6A66B] focus:ring-1 focus:ring-[#C6A66B] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#5C6670] uppercase mb-1 font-bold">
                    Official Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="engineer@railways.gov.in"
                    className="w-full rounded-xl bg-[#F5F3EE] border border-[#39434D]/30 px-4 py-2.5 text-sm text-[#20262D] placeholder-[#89939D] focus:outline-none focus:border-[#C6A66B] focus:ring-1 focus:ring-[#C6A66B] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] py-3 text-sm font-bold text-[#101820] transition-all shadow-md cursor-pointer"
                >
                  Confirm & Download Technical Dossier
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
