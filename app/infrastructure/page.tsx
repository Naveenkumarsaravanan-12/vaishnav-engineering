"use client";

import { useState } from "react";
import { Factory, Zap, CheckCircle2, X, ChevronRight, ZoomIn } from "lucide-react";
import { FACTORY_LAYOUT_SHOPS, MACHINERY_LIST, POWER_UTILITIES } from "@/data/portalData";
import { AnimatedBackground, Reveal, Counter, SectionDivider } from "@/components/motion";

export default function InfrastructurePage() {
  const [activeTab, setActiveTab] = useState<"layout" | "machinery" | "power">("layout");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [bay4Photo, setBay4Photo] = useState<"blasting" | "painting">("blasting");
  const [layoutViewMode, setLayoutViewMode] = useState<"4bays" | "5stages">("4bays");
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
    bay: string;
    subtitle: string;
    specs: string;
    description: string;
  } | null>(null);

  const categories = ["All", "Cutting", "Drilling", "Welding", "Straightening", "Surface Prep", "Painting", "Material Handling"];

  const filteredMachines = selectedCategory === "All"
    ? MACHINERY_LIST
    : MACHINERY_LIST.filter(m => m.category === selectedCategory);

  const BAYS_DATA = [
    {
      id: "bay-1",
      bayNumber: "BAY 1: CUTTING",
      process: "CNC Oxy & Plasma",
      equipment: "Koike Flexigraph CNC Plate Profiling",
      quantity: "2 Units CNC",
      capacity: "Up to 100mm Thick",
      photoUrl: "/infrastructure/cnc-cutting.png",
      tagColor: "border-[#39434D]/30 bg-[#101820]/90 text-[#F8F7F2]",
      accentBorder: "border-[#39434D]/20 hover:border-[#C6A66B]",
      description: "Automated multi-torch oxy-fuel and high-definition plasma cutting with computerized nesting software for bridge webs and flanges.",
    },
    {
      id: "bay-2",
      bayNumber: "BAY 2: DRILLING",
      process: "Heavy Radial & CNC Drills",
      equipment: "BOIS CNC Plate & HMT Radial Drills",
      quantity: "3 Units HMT",
      capacity: "Dia up to 80mm",
      photoUrl: "/infrastructure/drilling.png",
      tagColor: "border-[#39434D]/30 bg-[#101820]/90 text-[#F8F7F2]",
      accentBorder: "border-[#39434D]/20 hover:border-[#C6A66B]",
      description: "High-precision plate drilling rigs for girder splice joints, gusset plates, and heavy structural web connection holes.",
    },
    {
      id: "bay-3",
      bayNumber: "BAY 3: WELDING",
      process: "SAW & MIG Welding",
      equipment: "Heavy Beam SAW Tractor & Inverter MIG",
      quantity: "4 SAW + 12 MIG",
      capacity: "1000A / 600A Rig",
      photoUrl: "/infrastructure/cnc-welding.png",
      tagColor: "border-[#39434D]/30 bg-[#101820]/90 text-[#F8F7F2]",
      accentBorder: "border-[#39434D]/20 hover:border-[#C6A66B]",
      description: "Continuous submerged arc longitudinal flange-to-web welding and pulse MIG stiffener welding meeting AWS D1.5 railway standards.",
    },
    {
      id: "bay-4",
      bayNumber: "BAY 4: FINISHING",
      process: "Shot Blast & Painting",
      equipment: bay4Photo === "blasting" ? "SA 2.5 Abrasive Shot / Sand Blasting" : "High-Pressure Airless Spray Coating",
      quantity: "SA 2.5 Airless",
      capacity: "450 Bar Pump",
      photoUrl: bay4Photo === "blasting" ? "/infrastructure/sand-blasting.png" : "/infrastructure/painting.png",
      tagColor: "border-[#39434D]/30 bg-[#101820]/90 text-[#F8F7F2]",
      accentBorder: "border-[#39434D]/20 hover:border-[#C6A66B]",
      description: bay4Photo === "blasting"
        ? "Heavy girder abrasive blast chamber producing SA 2.5 near-white metal profile for maximum paint adhesion."
        : "Airless spray application of zinc phosphate primer and high-performance polyurethane protective topcoat.",
      hasDualPhoto: true,
    },
  ];

  const STAGES_5 = [
    {
      step: "01",
      bay: "Bay 1",
      name: "CNC Cutting",
      machine: "Koike Flexigraph CNC",
      capacity: "Plate up to 100mm",
      photoUrl: "/infrastructure/cnc-cutting.png",
      color: "border-[#39434D]/30 text-[#101820] bg-[#E5E8EB]",
      desc: "Computerized nesting & high-definition oxy-plasma profiling.",
    },
    {
      step: "02",
      bay: "Bay 2",
      name: "CNC Drilling",
      machine: "BOIS CNC Plate Rig",
      capacity: "Diameter up to 80mm",
      photoUrl: "/infrastructure/drilling.png",
      color: "border-[#39434D]/30 text-[#101820] bg-[#E5E8EB]",
      desc: "Precise pitch drilling for bridge splice and connection joints.",
    },
    {
      step: "03",
      bay: "Bay 3",
      name: "SAW Welding",
      machine: "Tractor SAW & MIG",
      capacity: "1000A Continuous",
      photoUrl: "/infrastructure/cnc-welding.png",
      color: "border-[#39434D]/30 text-[#101820] bg-[#E5E8EB]",
      desc: "Automatic submerged arc flange-to-web deep penetration welds.",
    },
    {
      step: "04",
      bay: "Bay 4",
      name: "Shot Blasting",
      machine: "SA 2.5 Blast Yard",
      capacity: "White Metal SA 2.5",
      photoUrl: "/infrastructure/sand-blasting.png",
      color: "border-[#39434D]/30 text-[#101820] bg-[#E5E8EB]",
      desc: "Abrasive blast cleaning to remove mill scale and create profile.",
    },
    {
      step: "05",
      bay: "Bay 4",
      name: "Airless Painting",
      machine: "Airless Spray Booth",
      capacity: "450 Bar Pressure",
      photoUrl: "/infrastructure/painting.png",
      color: "border-[#39434D]/30 text-[#101820] bg-[#E5E8EB]",
      desc: "Epoxy zinc phosphate primer & polyurethane protective coatings.",
    },
  ];

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* Header Banner */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-2xs overflow-hidden">
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.55} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 shadow-2xs">
                  <Factory className="h-3.5 w-3.5 text-[#C6A66B]" /> TAB 3: Manufacturing Facility
                </span>
                <h1 className="font-heading mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Factory Layout, Machinery & Power Infrastructure
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Comprehensive workshop layout, 4 dedicated overhead crane bays, heavy CNC machinery assets, and 250 kVA electrical infrastructure audited for RDSO Category-A manufacturing.
                </p>
              </div>
            </Reveal>

            {/* Sub-tab Navigation */}
            <Reveal direction="right" delay={0.15}>
              <div className="flex flex-wrap rounded-xl border border-[#39434D]/20 bg-[#E5E8EB] p-1.5 gap-1 shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab("layout")}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                    activeTab === "layout"
                      ? "bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-xs"
                      : "text-[#5C6670] hover:text-[#20262D] hover:bg-white/80"
                  }`}
                >
                  1. Factory Layout
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("machinery")}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                    activeTab === "machinery"
                      ? "bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-xs"
                      : "text-[#5C6670] hover:text-[#20262D] hover:bg-white/80"
                  }`}
                >
                  2. Machinery Cards
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("power")}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                    activeTab === "power"
                      ? "bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-xs"
                      : "text-[#5C6670] hover:text-[#20262D] hover:bg-white/80"
                  }`}
                >
                  3. Power Supply (250 kVA)
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* TAB 1: FACTORY LAYOUT */}
        {activeTab === "layout" && (
          <div className="space-y-12">
            {/* Visual Factory Plan Card */}
            <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-8 shadow-sm space-y-6">
              <AnimatedBackground variant="particles" theme="light" opacity={0.4} />
              
              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#39434D]/15 pb-5">
                  <Reveal direction="left" delay={0.05}>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#20262D] flex items-center gap-2">
                        <Factory className="h-5 w-5 text-[#C6A66B]" /> Integrated Workshop Layout & Bay Distribution
                      </h3>
                      <p className="text-xs text-[#5C6670] mt-1 font-normal">
                        Continuous linear material flow from Raw Steel Yard to Trial Assembly & Airless Painting Booth
                      </p>
                    </div>
                  </Reveal>
                  <Reveal direction="right" delay={0.1}>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#E5E8EB] px-3 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20">
                        4 Bays (24m Span)
                      </span>
                      <div className="flex items-center gap-1 bg-[#E5E8EB] border border-[#39434D]/20 rounded-xl p-1 text-xs">
                        <button
                          type="button"
                          onClick={() => setLayoutViewMode("4bays")}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                            layoutViewMode === "4bays" ? "bg-[#101820] text-[#C6A66B] shadow-xs" : "text-[#5C6670] hover:text-[#20262D]"
                          }`}
                        >
                          4 Bays
                        </button>
                        <button
                          type="button"
                          onClick={() => setLayoutViewMode("5stages")}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                            layoutViewMode === "5stages" ? "bg-[#101820] text-[#C6A66B] shadow-xs" : "text-[#5C6670] hover:text-[#20262D]"
                          }`}
                        >
                          5 Stages
                        </button>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Sequential Flow Banner */}
                <Reveal direction="up" delay={0.15}>
                  <div className="rounded-2xl border border-[#39434D]/20 bg-[#F5F3EE] p-3.5 overflow-x-auto shadow-inner">
                    <div className="flex items-center gap-2 min-w-max text-xs text-[#20262D] font-mono">
                      <span className="flex h-2 w-2 rounded-full bg-[#C6A66B] animate-pulse"></span>
                      <span className="font-bold text-[#101820] uppercase text-[11px] tracking-wider">Production Flowline:</span>
                      <span className="px-2.5 py-1 rounded-md bg-white text-[#20262D] border border-[#39434D]/20 font-semibold shadow-2xs">1. Cutting</span>
                      <ChevronRight className="h-3.5 w-3.5 text-[#89939D]" />
                      <span className="px-2.5 py-1 rounded-md bg-white text-[#20262D] border border-[#39434D]/20 font-semibold shadow-2xs">2. Drilling</span>
                      <ChevronRight className="h-3.5 w-3.5 text-[#89939D]" />
                      <span className="px-2.5 py-1 rounded-md bg-white text-[#20262D] border border-[#39434D]/20 font-semibold shadow-2xs">3. Welding</span>
                      <ChevronRight className="h-3.5 w-3.5 text-[#89939D]" />
                      <span className="px-2.5 py-1 rounded-md bg-white text-[#20262D] border border-[#39434D]/20 font-semibold shadow-2xs">4. Shot Blasting</span>
                      <ChevronRight className="h-3.5 w-3.5 text-[#89939D]" />
                      <span className="px-2.5 py-1 rounded-md bg-white text-[#20262D] border border-[#39434D]/20 font-semibold shadow-2xs">5. Airless Painting</span>
                      <ChevronRight className="h-3.5 w-3.5 text-[#89939D]" />
                      <span className="px-2.5 py-1 rounded-md bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 font-bold shadow-xs">Dispatch</span>
                    </div>
                  </div>
                </Reveal>

                {/* VIEW 1: 4 WORKSHOP BAYS GRID WITH REAL PHOTOS */}
                {layoutViewMode === "4bays" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {BAYS_DATA.map((bay, idx) => (
                      <Reveal key={bay.id} direction="up" delay={idx * 0.08}>
                        <div
                          className="group relative rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs transition-all duration-300 hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 flex flex-col justify-between h-full"
                        >
                          <div>
                            {/* Image Container with Zoom & Badge */}
                            <div
                              onClick={() => setLightboxImage({
                                url: bay.photoUrl,
                                title: bay.bayNumber,
                                bay: bay.process,
                                subtitle: bay.equipment,
                                specs: bay.capacity,
                                description: bay.description,
                              })}
                              className="relative h-44 sm:h-48 w-full bg-[#101820] overflow-hidden cursor-pointer"
                            >
                              <img
                                src={bay.photoUrl}
                                alt={`${bay.bayNumber} - ${bay.process}`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                              {/* Bay Badge on Top Left */}
                              <div className="absolute top-2.5 left-2.5">
                                <span className="rounded-lg px-2.5 py-1 text-xs font-mono font-bold bg-[#101820]/90 text-[#F8F7F2] border border-[#39434D] shadow-xs backdrop-blur-md">
                                  {bay.bayNumber}
                                </span>
                              </div>

                              {/* Quantity Badge on Top Right */}
                              <div className="absolute top-2.5 right-2.5">
                                <span className="rounded-lg bg-[#C6A66B] px-2 py-0.5 text-[10px] font-mono font-bold text-[#101820] shadow-xs backdrop-blur-md">
                                  {bay.quantity}
                                </span>
                              </div>

                              {/* Hover Zoom Hint */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                <span className="flex items-center gap-1 text-[11px] font-bold text-[#F8F7F2] bg-[#101820]/80 px-3 py-1.5 rounded-full border border-[#C6A66B]/30">
                                  <ZoomIn className="h-3.5 w-3.5 text-[#C6A66B]" /> View Photo
                                </span>
                              </div>

                              {/* Bay 4 Interactive Toggle */}
                              {bay.hasDualPhoto && (
                                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 bg-[#101820]/90 rounded-xl p-1 backdrop-blur-md border border-[#39434D]" onClick={(e) => e.stopPropagation()}>
                                  <button
                                    type="button"
                                    onClick={() => setBay4Photo("blasting")}
                                    className={`flex-1 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer text-center ${
                                      bay4Photo === "blasting"
                                        ? "bg-[#C6A66B] text-[#101820] shadow-xs"
                                        : "text-[#89939D] hover:text-[#F8F7F2] hover:bg-white/10"
                                    }`}
                                  >
                                    1. Shot Blasting
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setBay4Photo("painting")}
                                    className={`flex-1 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer text-center ${
                                      bay4Photo === "painting"
                                        ? "bg-[#C6A66B] text-[#101820] shadow-xs"
                                        : "text-[#89939D] hover:text-[#F8F7F2] hover:bg-white/10"
                                    }`}
                                  >
                                    2. Airless Painting
                                  </button>
                                </div>
                              )}
                            </div>

                            {/* Bay Card Text Details */}
                            <div className="p-4.5 space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="font-heading font-extrabold text-[#20262D] text-sm">{bay.process}</span>
                                <span className="text-[10px] font-mono text-[#89939D] font-semibold">{bay.capacity}</span>
                              </div>
                              <p className="text-xs text-[#5C6670] font-semibold leading-snug">{bay.equipment}</p>
                              <p className="text-[11px] text-[#89939D] leading-relaxed pt-1 line-clamp-2">{bay.description}</p>
                            </div>
                          </div>

                          {/* Bay 4 Dual Thumbnail Bar */}
                          {bay.hasDualPhoto ? (
                            <div className="px-4.5 pb-3.5 pt-0">
                              <div className="flex items-center gap-2 pt-2 border-t border-[#39434D]/15">
                                <button
                                  type="button"
                                  onClick={() => setBay4Photo("blasting")}
                                  className={`flex-1 flex items-center gap-1.5 p-1.5 rounded-lg border text-[10px] font-semibold transition cursor-pointer ${
                                    bay4Photo === "blasting" ? "border-[#C6A66B] bg-[#C6A66B]/10 text-[#20262D]" : "border-[#39434D]/20 text-[#89939D] hover:text-[#20262D]"
                                  }`}
                                >
                                  <img src="/infrastructure/sand-blasting.png" alt="Blasting" className="h-5 w-6 rounded object-cover" />
                                  <span className="truncate">Blasting</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setBay4Photo("painting")}
                                  className={`flex-1 flex items-center gap-1.5 p-1.5 rounded-lg border text-[10px] font-semibold transition cursor-pointer ${
                                    bay4Photo === "painting" ? "border-[#C6A66B] bg-[#C6A66B]/10 text-[#20262D]" : "border-[#39434D]/20 text-[#89939D] hover:text-[#20262D]"
                                  }`}
                                >
                                  <img src="/infrastructure/painting.png" alt="Painting" className="h-5 w-6 rounded object-cover" />
                                  <span className="truncate">Painting</span>
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="px-4.5 pb-3.5 pt-0">
                              <div className="flex items-center justify-between pt-2 border-t border-[#39434D]/15 text-[10px] font-mono text-[#20262D] font-bold">
                                <span className="flex items-center gap-1">
                                  <CheckCircle2 className="h-3 w-3 text-[#C6A66B]" /> Operational Bay
                                </span>
                                <span className="text-[#89939D]">24m Crane Span</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                )}

                {/* VIEW 2: 5 SEQUENTIAL PROCESS STAGES */}
                {layoutViewMode === "5stages" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {STAGES_5.map((stg, idx) => (
                      <Reveal key={stg.step} direction="up" delay={idx * 0.07}>
                        <div
                          onClick={() => setLightboxImage({
                            url: stg.photoUrl,
                            title: `${stg.bay} - Stage ${stg.step}: ${stg.name}`,
                            bay: stg.bay,
                            subtitle: stg.machine,
                            specs: stg.capacity,
                            description: stg.desc,
                          })}
                          className="group rounded-2xl border border-[#39434D]/20 hover:border-[#C6A66B] bg-white overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
                        >
                          <div>
                            <div className="relative h-36 w-full bg-[#101820] overflow-hidden">
                              <img
                                src={stg.photoUrl}
                                alt={`${stg.name} - ${stg.machine}`}
                                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                              />
                              <span className="absolute top-2 left-2 rounded-lg px-2 py-0.5 text-[10px] font-mono font-bold bg-[#101820]/90 text-[#F8F7F2] border border-[#39434D] backdrop-blur-md">
                                {stg.step}. {stg.bay}
                              </span>
                              <span className="absolute bottom-2 right-2 rounded-lg bg-[#101820]/80 px-2 py-0.5 text-[9px] font-mono text-[#C6A66B] border border-[#C6A66B]/30 backdrop-blur-sm">
                                {stg.capacity}
                              </span>
                            </div>
                            <div className="p-3.5 space-y-1">
                              <h4 className="font-heading font-bold text-[#20262D] text-xs">{stg.name}</h4>
                              <p className="text-[11px] text-[#C6A66B] font-mono font-bold">{stg.machine}</p>
                              <p className="text-[10px] text-[#89939D] leading-tight pt-1">{stg.desc}</p>
                            </div>
                          </div>
                          <div className="p-3.5 pt-0">
                            <span className="text-[10px] text-[#89939D] flex items-center justify-between border-t border-[#39434D]/15 pt-1.5 font-mono">
                              <span className="text-[#20262D] font-bold">Inspection Verified</span>
                              <ChevronRight className="h-3 w-3 text-[#C6A66B]" />
                            </span>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <SectionDivider label="WORKSHOP SHOP AREAS ALLOCATION" />

            {/* Shop Areas Table */}
            <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white shadow-sm p-2 sm:p-4">
              <AnimatedBackground variant="steel-lines" theme="light" opacity={0.35} />
              
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#39434D]/15 bg-white">
                <div className="border-b border-[#39434D]/15 bg-[#F5F3EE] px-6 py-4.5 flex flex-wrap items-center justify-between gap-2">
                  <Reveal direction="left" delay={0.05}>
                    <h3 className="font-heading text-base font-bold text-[#20262D]">Workshop Shop Areas & Technical Description</h3>
                  </Reveal>
                  <Reveal direction="right" delay={0.1}>
                    <span className="text-xs font-mono text-[#89939D] bg-[#E5E8EB] px-3 py-1 rounded-full border border-[#39434D]/20">
                      RDSO Inspection Requested Detail
                    </span>
                  </Reveal>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-[#20262D]">
                    <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                      <tr>
                        <th className="px-6 py-3.5 w-1/4">Shop Area</th>
                        <th className="px-6 py-3.5">Equipment & Operational Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#39434D]/10 bg-white">
                      {FACTORY_LAYOUT_SHOPS.map((shop, idx) => (
                        <tr key={idx} className="hover:bg-[#F5F3EE] transition">
                          <td className="px-6 py-4 font-bold text-[#20262D] flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#C6A66B] shrink-0" /> {shop.area}
                          </td>
                          <td className="px-6 py-4 text-[#5C6670] leading-relaxed">{shop.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: MACHINERY CARDS */}
        {activeTab === "machinery" && (
          <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white/70 p-6 sm:p-8 shadow-sm space-y-8">
            <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.45} />
            
            <div className="relative z-10 space-y-6">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-[#39434D]/20">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-xs"
                        : "bg-white text-[#5C6670] hover:text-[#20262D] border border-[#39434D]/20"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredMachines.map((m, idx) => (
                  <Reveal key={m.id} direction="up" delay={(idx % 12) * 0.05}>
                    <div className="rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C6A66B] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                      <div>
                        <div
                          onClick={() => setLightboxImage({
                            url: m.photoUrl,
                            title: m.name,
                            bay: m.category,
                            subtitle: `${m.make} - ${m.model}`,
                            specs: m.capacity,
                            description: m.description,
                          })}
                          className="relative h-44 w-full bg-[#101820] overflow-hidden cursor-pointer"
                        >
                          <img
                            src={m.photoUrl}
                            alt={m.name}
                            className="h-full w-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                          />
                          <span className="absolute top-2.5 right-2.5 rounded-lg bg-[#101820]/90 px-2.5 py-1 text-xs font-mono font-bold text-[#C6A66B] border border-[#C6A66B]/30 backdrop-blur-md">
                            {m.quantity}
                          </span>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                            <span className="flex items-center gap-1 text-[11px] font-bold text-[#F8F7F2] bg-[#101820]/80 px-3 py-1.5 rounded-full border border-[#C6A66B]/30">
                              <ZoomIn className="h-3.5 w-3.5 text-[#C6A66B]" /> Inspect
                            </span>
                          </div>
                        </div>

                        <div className="p-5 space-y-3">
                          <span className="inline-block rounded-full bg-[#E5E8EB] px-2.5 py-0.5 text-[10px] font-bold text-[#20262D] border border-[#39434D]/20 uppercase">
                            {m.category}
                          </span>
                          <h4 className="font-heading font-bold text-[#20262D] text-base leading-snug">{m.name}</h4>
                          <div className="space-y-1 text-xs font-mono text-[#20262D] bg-[#F5F3EE] p-3 rounded-xl border border-[#39434D]/15">
                            <p><strong className="text-[#89939D]">Capacity:</strong> {m.capacity}</p>
                            <p><strong className="text-[#89939D]">Model:</strong> {m.model}</p>
                            <p><strong className="text-[#89939D]">Make:</strong> {m.make}</p>
                          </div>
                          <p className="text-xs text-[#5C6670] leading-relaxed">{m.description}</p>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <span className="text-[11px] text-[#20262D] font-bold flex items-center gap-1 border-t border-[#39434D]/15 pt-3">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> Maintenance Log Audited
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: POWER SUPPLY & UTILITIES */}
        {activeTab === "power" && (
          <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-8 shadow-sm space-y-8">
            <AnimatedBackground variant="gradient-flow" theme="light" opacity={0.4} />
            
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between border-b border-[#39434D]/15 pb-5 gap-3">
                <Reveal direction="left" delay={0.05}>
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#101820] text-[#C6A66B] border border-[#39434D] shadow-xs">
                      <Zap className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] font-mono">Electrical Utility Infrastructure</span>
                      <h2 className="font-heading text-2xl font-bold text-[#20262D]">Power Supply & Backup Energy Systems</h2>
                    </div>
                  </div>
                </Reveal>
                <Reveal direction="right" delay={0.1}>
                  <span className="rounded-full bg-[#E5E8EB] px-3 py-1 text-xs font-bold text-[#20262D] border border-[#39434D]/20 font-mono">
                    TANGEDCO Sanctioned
                  </span>
                </Reveal>
              </div>

              {/* Visual Utility Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Reveal direction="up" delay={0.05}>
                  <div className="rounded-2xl border border-[#39434D]/20 bg-white/90 p-5 text-center shadow-xs hover:border-[#C6A66B] hover:shadow-md transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#89939D] font-mono">Connected Load</span>
                    <p className="font-heading mt-2 text-3xl font-extrabold text-[#20262D]">
                      <Counter to={250} suffix=" kVA" />
                    </p>
                    <p className="mt-1 text-xs text-[#89939D] font-mono">High Tension Sanction</p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.1}>
                  <div className="rounded-2xl border border-[#39434D]/20 bg-white/90 p-5 text-center shadow-xs hover:border-[#C6A66B] hover:shadow-md transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#89939D] font-mono">Installed Supply</span>
                    <p className="font-heading mt-2 text-2xl font-extrabold text-[#C6A66B]">{POWER_UTILITIES.installedSupply}</p>
                    <p className="mt-1 text-xs text-[#89939D] font-mono">3-Phase Industrial Tariff</p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.15}>
                  <div className="rounded-2xl border border-[#39434D]/20 bg-white/90 p-5 text-center shadow-xs hover:border-[#C6A66B] hover:shadow-md transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#89939D] font-mono">DG Generator Backup</span>
                    <p className="font-heading mt-2 text-3xl font-extrabold text-[#20262D]">
                      <Counter to={125} suffix=" kVA" />
                    </p>
                    <p className="mt-1 text-xs text-[#89939D] font-mono">Kirloskar Silent Generator</p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.2}>
                  <div className="rounded-2xl border border-[#39434D]/20 bg-white/90 p-5 text-center shadow-xs hover:border-[#C6A66B] hover:shadow-md transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#89939D] font-mono">Electricity Utility</span>
                    <p className="font-heading mt-2 text-lg font-extrabold text-[#20262D]">{POWER_UTILITIES.electricityBoard}</p>
                    <p className="mt-1 text-xs text-[#89939D] font-mono">Active Power Sanction Order</p>
                  </div>
                </Reveal>
              </div>

              <Reveal direction="up" delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#39434D]/15">
                  <div className="rounded-xl border border-[#39434D]/20 bg-[#F5F3EE] p-4.5">
                    <span className="text-xs font-bold text-[#89939D] font-mono">Industrial Water Supply:</span>
                    <p className="text-sm font-semibold text-[#20262D] mt-1">{POWER_UTILITIES.waterSupply}</p>
                  </div>
                  <div className="rounded-xl border border-[#39434D]/20 bg-[#F5F3EE] p-4.5">
                    <span className="text-xs font-bold text-[#89939D] font-mono">Crane Capacity Across Bays:</span>
                    <p className="text-sm font-semibold text-[#20262D] mt-1">{POWER_UTILITIES.craneCapacity}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}
      </div>

      {/* 4K FULLSCREEN LIGHTBOX INSPECTION MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#101820]/80 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border border-[#39434D]/30 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-5 sm:p-6 max-h-[92vh] flex flex-col font-body"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#39434D]/15 pb-3">
              <div>
                <span className="inline-block rounded-full px-2.5 py-0.5 text-xs font-mono font-bold bg-[#E5E8EB] text-[#20262D] border border-[#39434D]/20 mb-1">
                  {lightboxImage.bay}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#20262D] leading-tight">{lightboxImage.title}</h3>
                <p className="text-xs text-[#5C6670] mt-0.5">{lightboxImage.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E5E8EB] hover:bg-[#39434D] hover:text-white text-[#20262D] transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] max-h-[60vh] rounded-xl overflow-hidden bg-[#101820] flex items-center justify-center border border-[#39434D]/20">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Modal Footer Specs */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs border-t border-[#39434D]/15 font-mono">
              <div className="text-[#20262D]">
                <span className="text-[#89939D]">Capacity/Specs: </span>
                <span className="text-[#C6A66B] font-bold">{lightboxImage.specs}</span>
              </div>
              <p className="text-[#5C6670] text-xs font-sans max-w-xl text-right">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
