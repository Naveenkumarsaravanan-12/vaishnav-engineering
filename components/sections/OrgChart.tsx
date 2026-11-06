"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Award, 
  UserCheck, 
  FileText, 
  ChevronRight, 
  Maximize2, 
  Grid3X3,
  Sparkles
} from "lucide-react";
import { WORKFORCE_STATS } from "@/data/portalData";
import { AnimatedBackground, Reveal } from "@/components/motion";

// Structured Department and Personnel Data
export interface DepartmentItem {
  id: string;
  name: string;
  iconType: "factory" | "quality" | "erection" | "planning" | "stores" | "accounts" | "safety" | "logistics";
  employees: string[];
}

export const ORG_CHART_DEPARTMENTS: DepartmentItem[] = [
  {
    id: "dept-1",
    name: "PRODUCTION & FABRICATION",
    iconType: "factory",
    employees: [
      "A PRADEEP KUMAR",
      "A. SATHISH KUMAR",
      "V. L. RAMESH KUMAR"
    ]
  },
  {
    id: "dept-2",
    name: "QUALITY & INSPECTION",
    iconType: "quality",
    employees: [
      "A GOPI"
    ]
  },
  {
    id: "dept-3",
    name: "PROJECTS & ERECTION",
    iconType: "erection",
    employees: [
      "A SARAVANAN"
    ]
  },
  {
    id: "dept-4",
    name: "PLANNING & PROJECT CONTROLS",
    iconType: "planning",
    employees: [
      "A SURESH"
    ]
  },
  {
    id: "dept-5",
    name: "PURCHASE & STORES",
    iconType: "stores",
    employees: [
      "S. RAJA RAJESHWARI"
    ]
  },
  {
    id: "dept-6",
    name: "ADMIN AND ACCOUNTS",
    iconType: "accounts",
    employees: [
      "UMAPATHI"
    ]
  },
  {
    id: "dept-7",
    name: "SAFETY & MAINTENANCE",
    iconType: "safety",
    employees: [
      "A. SUKUMAR",
      "A. MURUGANADHAM"
    ]
  },
  {
    id: "dept-8",
    name: "LOGISTICS",
    iconType: "logistics",
    employees: [
      "KRISHNAN"
    ]
  }
];

// Helper to render high-precision industrial SVG icons for departments
function renderDeptIcon(type: DepartmentItem["iconType"]) {
  switch (type) {
    case "factory":
      return (
        <svg className="w-5 h-5 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "quality":
      return (
        <svg className="w-5 h-5 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "erection":
      return (
        <svg className="w-5 h-5 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M6 21V4l13 3M6 9l13-2M6 14l9-1.5M19 7v6m-3 0h6m-3 0v4m-2 0h4" />
        </svg>
      );
    case "planning":
      return (
        <svg className="w-5 h-5 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l2 2 4-4" />
        </svg>
      );
    case "stores":
      return (
        <svg className="w-5 h-5 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "accounts":
      return (
        <svg className="w-5 h-5 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="8" y1="6" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="14" x2="16" y2="18" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 10h4m-4 3h4m-3 3h3" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "safety":
      return (
        <svg className="w-5 h-5 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 18h20M5 18a7 7 0 0114 0M12 4v4m-3 3h6" />
        </svg>
      );
    case "logistics":
      return (
        <svg className="w-5 h-5 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8h3l3 4v4h-2" />
        </svg>
      );
  }
}

export interface OrgChartProps {
  showTable?: boolean;
  className?: string;
}

export default function OrgChart({ showTable = true, className = "" }: OrgChartProps = {}) {
  const [viewMode, setViewMode] = useState<"panoramic" | "grid">("panoramic");

  return (
    <div className={`${showTable ? "space-y-12" : ""} font-body ${className}`}>
      {/* 
        ========================================================================
        RECREATED EXECUTIVE VAISHNAV ENGINEERING ORGANISATION CHART
        ========================================================================
      */}
      <section className="relative overflow-hidden rounded-3xl border-2 border-[#C9A04F]/60 bg-white shadow-2xl">
        {/* Subtle Background Texture */}
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.25} />

        {/* 
          1. HEADER WITH INDUSTRIAL BACKGROUND PHOTOGRAPHY & GOLD DIAGONAL ACCENTS
        */}
        <div className="relative z-10 border-b border-[#C9A04F]/30 bg-white overflow-hidden">
          {/* Industrial Corner Background Photos with subtle white gradient overlays */}
          <div className="absolute top-0 left-0 w-80 sm:w-96 h-full pointer-events-none opacity-20 overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src="/infrastructure/cnc-cutting.png" 
                alt="Factory Machinery" 
                fill 
                className="object-cover object-left-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white" />
            </div>
          </div>

          <div className="absolute top-0 right-0 w-80 sm:w-96 h-full pointer-events-none opacity-20 overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src="/projects/bridge-1.png" 
                alt="Railway Bridge Fabrication" 
                fill 
                className="object-cover object-right-top"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white" />
            </div>
          </div>

          {/* Gold Diagonal Decorative Accent Lines */}
          <div className="absolute top-0 left-72 sm:left-88 w-1 h-24 bg-gradient-to-b from-[#C9A04F] to-transparent transform -skew-x-12 opacity-60 hidden md:block" />
          <div className="absolute top-0 right-72 sm:right-88 w-1 h-24 bg-gradient-to-b from-[#C9A04F] to-transparent transform skew-x-12 opacity-60 hidden md:block" />

          {/* Header Bar Content */}
          <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Left: Branded Logo & Tagline */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-2xl bg-white p-1 border-2 border-[#C9A04F] shadow-md ring-2 ring-[#C9A04F]/30 flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="Vaishnav Engineering Logo"
                  width={60}
                  height={60}
                  className="h-full w-full object-contain rounded-xl"
                  priority
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#092B49]">
                    VAISHNAV ENGINEERING
                  </h2>
                </div>
                <p className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#C9A04F] uppercase mt-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A04F]" /> BUILDING STRONGER CONNECTIONS
                </p>
              </div>
            </div>

            {/* Right: Three Industry Descriptors */}
            <div className="flex flex-col md:items-end justify-center border-l-2 md:border-l-0 md:border-r-2 border-[#C9A04F] pl-4 md:pl-0 md:pr-4 py-1">
              <span className="font-mono text-[10.5px] sm:text-[11.5px] font-extrabold tracking-[0.14em] text-[#092B49] uppercase leading-tight">
                RAILWAY BRIDGE FABRICATION
              </span>
              <span className="font-mono text-[10.5px] sm:text-[11.5px] font-extrabold tracking-[0.14em] text-[#061F35] uppercase mt-1 leading-tight">
                STRUCTURAL STEEL FABRICATION
              </span>
              <span className="font-mono text-[10.5px] sm:text-[11.5px] font-extrabold tracking-[0.14em] text-[#C9A04F] uppercase mt-1 leading-tight">
                BRIDGE ERECTION | GATES & DAMPERS
              </span>
            </div>
          </div>

          {/* Sub-toolbar with View Switcher & Mobile Scroll Hint */}
          <div className="bg-[#F0F1F2]/80 border-t border-[#C9A04F]/20 px-5 sm:px-8 py-2.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-[#092B49] font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C9A04F] animate-pulse" />
              <span className="font-mono font-bold uppercase tracking-wider text-[11px] text-[#092B49]">
                RDSO Approved Corporate Hierarchy
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#5C6670] hidden sm:inline">View Mode:</span>
              <button
                onClick={() => setViewMode("panoramic")}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "panoramic"
                    ? "bg-[#092B49] text-[#D8B56C] shadow-xs"
                    : "bg-white text-[#5C6670] hover:text-[#092B49] border border-[#E2E5E8]"
                }`}
                title="Full 8-Column Panoramic Chart"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Panoramic</span> Chart
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#092B49] text-[#D8B56C] shadow-xs"
                    : "bg-white text-[#5C6670] hover:text-[#092B49] border border-[#E2E5E8]"
                }`}
                title="Adaptive Multi-Column Grid"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Adaptive</span> Grid
              </button>
            </div>
          </div>
        </div>

        {/* 
          2. MAIN CHART WORKSPACE: TOP-LEVEL MANAGEMENT & 8 DEPARTMENTS
        */}
        <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-white via-[#FCFCFD] to-[#F7F8F9]">
          
          {/* Scrollable container for Panoramic view on smaller screens */}
          <div className={viewMode === "panoramic" ? "overflow-x-auto pb-6" : ""}>
            <div className={viewMode === "panoramic" ? "min-w-[1140px] px-4" : "w-full"}>
              
              {/* ============================================================ */}
              {/* TOP MANAGEMENT HIERARCHY (MANAGING DIRECTOR & GENERAL MANAGER) */}
              {/* ============================================================ */}
              <div className="flex flex-col items-center justify-center pt-4">
                
                {/* 1. MANAGING DIRECTOR CARD */}
                <Reveal direction="down" delay={0.05}>
                  <div className="relative pt-6 group">
                    {/* Overlapping Circular Gold-Framed Profile Icon */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-b from-[#092B49] to-[#061F35] border-2 border-[#C9A04F] ring-4 ring-[#D8B56C]/30 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l1.2 2h2.8l-2 1.8 1 2.7L12 7l-3 1.5 1-2.7-2-1.8h2.8z" />
                      </svg>
                    </div>

                    {/* Deep Navy Rounded Card */}
                    <div className="w-[300px] sm:w-[330px] rounded-2xl bg-gradient-to-b from-[#092B49] to-[#061F35] border-2 border-[#C9A04F] p-5 pt-8 text-center shadow-xl shadow-[#092B49]/15 group-hover:border-[#D8B56C] group-hover:shadow-2xl transition-all duration-300">
                      <p className="text-white font-heading font-extrabold tracking-widest text-xs sm:text-[13px] uppercase">
                        MANAGING DIRECTOR
                      </p>

                      {/* Gold Gradient Nameplate with Dark Navy Text */}
                      <div className="mt-2.5 rounded-lg bg-gradient-to-r from-[#D8B56C] via-[#C9A04F] to-[#D8B56C] py-2 px-4 shadow-md border border-[#FFF8E7]/50">
                        <p className="text-[#061F35] font-heading font-black text-sm sm:text-base tracking-wider uppercase">
                          R SARAVANAN
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Vertical Gold Connector: MD to GM with Arrowhead */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-7 bg-[#C9A04F]" />
                  <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-[#C9A04F]" />
                </div>

                {/* 2. GENERAL MANAGER CARD */}
                <Reveal direction="down" delay={0.12}>
                  <div className="relative pt-5 group">
                    {/* Circular Profile Icon */}
                    <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-gradient-to-b from-[#092B49] to-[#061F35] border-2 border-[#C9A04F] ring-3 ring-[#D8B56C]/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-5 h-5 text-[#D8B56C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>

                    {/* Slightly smaller deep navy card */}
                    <div className="w-[270px] sm:w-[295px] rounded-2xl bg-gradient-to-b from-[#092B49] to-[#061F35] border-2 border-[#C9A04F] p-4 pt-7 text-center shadow-lg shadow-[#092B49]/15 group-hover:border-[#D8B56C] transition-all duration-300">
                      <p className="text-white font-heading font-bold tracking-widest text-xs uppercase">
                        GENERAL MANAGER
                      </p>

                      {/* Gold Nameplate */}
                      <div className="mt-2 rounded-lg bg-gradient-to-r from-[#D8B56C] via-[#C9A04F] to-[#D8B56C] py-1.5 px-3 shadow-md border border-[#FFF8E7]/50">
                        <p className="text-[#061F35] font-heading font-extrabold text-sm tracking-wide uppercase">
                          T MURUGAN
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Connector from GM leading to Distribution Line */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-[#C9A04F]" />
                </div>
              </div>

              {/* ============================================================ */}
              {/* CONTINUOUS HORIZONTAL GOLD DISTRIBUTION LINE & 8 DROP LINES  */}
              {/* ============================================================ */}
              {viewMode === "panoramic" ? (
                /* Desktop/Panoramic Precision SVG Distribution Matrix */
                <div className="relative w-full h-12 pointer-events-none select-none">
                  <svg className="w-full h-full" viewBox="0 0 1000 48" preserveAspectRatio="none">
                    <defs>
                      <marker
                        id="gold-arrow"
                        markerWidth="6"
                        markerHeight="6"
                        refX="3"
                        refY="3"
                        orient="auto"
                      >
                        <path d="M0,0 L6,3 L0,6 Z" fill="#C9A04F" />
                      </marker>
                    </defs>

                    {/* Vertical stem from General Manager to horizontal bus */}
                    <line x1="500" y1="0" x2="500" y2="16" stroke="#C9A04F" strokeWidth="2.5" />

                    {/* Central Gold Distribution Node */}
                    <circle cx="500" cy="16" r="3.5" fill="#D8B56C" stroke="#092B49" strokeWidth="1.5" />

                    {/* Continuous Horizontal Bus Line spanning from column 1 center (6.25%) to column 8 center (93.75%) */}
                    <line x1="62.5" y1="16" x2="937.5" y2="16" stroke="#C9A04F" strokeWidth="2.5" strokeLinecap="round" />

                    {/* 8 Vertical Drop Lines with Downward Arrowheads ending right above each department card's top icon */}
                    {/* Column 1 Center: 62.5 */}
                    <line x1="62.5" y1="16" x2="62.5" y2="44" stroke="#C9A04F" strokeWidth="2" markerEnd="url(#gold-arrow)" />
                    {/* Column 2 Center: 187.5 */}
                    <line x1="187.5" y1="16" x2="187.5" y2="44" stroke="#C9A04F" strokeWidth="2" markerEnd="url(#gold-arrow)" />
                    {/* Column 3 Center: 312.5 */}
                    <line x1="312.5" y1="16" x2="312.5" y2="44" stroke="#C9A04F" strokeWidth="2" markerEnd="url(#gold-arrow)" />
                    {/* Column 4 Center: 437.5 */}
                    <line x1="437.5" y1="16" x2="437.5" y2="44" stroke="#C9A04F" strokeWidth="2" markerEnd="url(#gold-arrow)" />
                    {/* Column 5 Center: 562.5 */}
                    <line x1="562.5" y1="16" x2="562.5" y2="44" stroke="#C9A04F" strokeWidth="2" markerEnd="url(#gold-arrow)" />
                    {/* Column 6 Center: 687.5 */}
                    <line x1="687.5" y1="16" x2="687.5" y2="44" stroke="#C9A04F" strokeWidth="2" markerEnd="url(#gold-arrow)" />
                    {/* Column 7 Center: 812.5 */}
                    <line x1="812.5" y1="16" x2="812.5" y2="44" stroke="#C9A04F" strokeWidth="2" markerEnd="url(#gold-arrow)" />
                    {/* Column 8 Center: 937.5 */}
                    <line x1="937.5" y1="16" x2="937.5" y2="44" stroke="#C9A04F" strokeWidth="2" markerEnd="url(#gold-arrow)" />
                  </svg>
                </div>
              ) : (
                /* Adaptive Grid Mode Central Divider */
                <div className="w-full flex items-center justify-center my-6">
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#C9A04F] to-transparent" />
                  <span className="px-4 text-[11px] font-mono font-bold uppercase tracking-widest text-[#C9A04F] bg-white border border-[#C9A04F]/40 rounded-full py-0.5 shadow-2xs">
                    Reporting Departments (8 Key Divisions)
                  </span>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#C9A04F] to-transparent" />
                </div>
              )}

              {/* ============================================================ */}
              {/* EIGHT DEPARTMENT CARDS (EXACT ORDER & SPECIFICATIONS)       */}
              {/* ============================================================ */}
              <div 
                className={
                  viewMode === "panoramic"
                    ? "grid grid-cols-8 gap-3 xl:gap-3.5 pt-2 items-stretch"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 items-stretch"
                }
              >
                {ORG_CHART_DEPARTMENTS.map((dept, idx) => (
                  <Reveal key={dept.id} direction="up" delay={0.06 * (idx + 1)}>
                    <div className="h-full flex flex-col pt-6 relative group">
                      {/* Overlapping Circular Gold-Framed Icon */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-gradient-to-b from-[#092B49] to-[#061F35] border-2 border-[#C9A04F] ring-3 ring-[#D8B56C]/30 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#D8B56C] transition-all duration-300">
                        {renderDeptIcon(dept.iconType)}
                      </div>

                      {/* Main Department Card */}
                      <div className="flex-1 flex flex-col rounded-xl border border-[#C9A04F] bg-white shadow-md hover:shadow-xl hover:border-[#D8B56C] transition-all duration-300 overflow-hidden min-h-[260px] group-hover:-translate-y-1">
                        {/* Dark Navy-Blue Header with Subtle Gradients */}
                        <div className="bg-gradient-to-b from-[#092B49] to-[#061F35] px-2 sm:px-2.5 pt-7 pb-3 text-center border-b border-[#C9A04F]/40 min-h-[66px] flex items-center justify-center">
                          <h3 
                            className="department-title font-heading font-extrabold text-[10.5px] sm:text-[11px] xl:text-[11.5px] text-[#FFFFFF] tracking-wide uppercase leading-tight line-clamp-2"
                            style={{ color: "#FFFFFF" }}
                          >
                            {dept.name}
                          </h3>
                        </div>

                        {/* White / Near-White Body with Centered Light-Gray Nameplates */}
                        <div className="p-2 sm:p-2.5 bg-white flex-1 flex flex-col justify-center gap-2">
                          {dept.employees.map((emp, empIdx) => (
                            <div
                              key={empIdx}
                              className="rounded-lg bg-[#F0F1F2] border border-[#E2E5E8] p-2 text-center shadow-2xs hover:bg-[#EAECEF] hover:border-[#C9A04F]/50 transition-colors"
                            >
                              <p className="font-heading font-extrabold text-[#092B49] text-[10.5px] sm:text-[11px] xl:text-[11.5px] tracking-tight leading-snug">
                                {emp}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Panoramic Scroll Notice for Narrow Viewports */}
          {viewMode === "panoramic" && (
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#5C6670] font-mono lg:hidden">
              <ChevronRight className="w-4 h-4 text-[#C9A04F] animate-pulse" />
              <span>Scroll horizontally to view all 8 departments and full reporting bus</span>
              <ChevronRight className="w-4 h-4 text-[#C9A04F] animate-pulse" />
            </div>
          )}
        </div>

        {/* 
          3. WIDE NAVY AND GOLD FOOTER AT BOTTOM OF ORG CHART
        */}
        <div className="relative z-10 border-t-2 border-[#C9A04F] bg-gradient-to-r from-[#061F35] via-[#092B49] to-[#061F35] text-white p-6 sm:p-8 overflow-hidden">
          {/* Subtle Railway Locomotive / Industrial Steel Background Asset */}
          <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-luminosity overflow-hidden">
            <Image 
              src="/projects/bridge.jpeg" 
              alt="Heavy Steel Erection" 
              fill 
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Left Side: 4 Core Capabilities with Generous Letter Spacing */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#D8B56C] font-mono text-xs font-bold uppercase tracking-widest mb-1.5">
                <span className="w-2.5 h-0.5 bg-[#D8B56C]" />
                <span>Vaishnav Standard of Engineering</span>
              </div>
              <p className="font-heading font-black tracking-[0.25em] text-sm sm:text-base lg:text-lg text-white uppercase leading-relaxed">
                ENGINEERING
              </p>
              <p className="font-heading font-black tracking-[0.25em] text-sm sm:text-base lg:text-lg text-white uppercase leading-relaxed">
                FABRICATION
              </p>
              <p className="font-heading font-black tracking-[0.25em] text-sm sm:text-base lg:text-lg text-white uppercase leading-relaxed">
                ERECTION
              </p>
              <p className="font-heading font-black tracking-[0.25em] text-sm sm:text-base lg:text-lg text-[#D8B56C] uppercase leading-relaxed">
                EXCELLENCE
              </p>
            </div>

            {/* Right Side: Champagne-Gold Information Panel with Exact Mandatory Text */}
            <div className="rounded-xl border border-[#C9A04F] bg-gradient-to-r from-[#D8B56C]/15 via-[#C9A04F]/25 to-[#D8B56C]/15 p-4 sm:p-5 max-w-xl shadow-lg backdrop-blur-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-[#C9A04F] text-[#061F35] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <FileText className="w-4 h-4" />
              </div>

              <div className="space-y-1">
                <p className="font-sans text-xs sm:text-[13px] text-white/95 leading-relaxed font-normal">
                  <strong className="text-[#D8B56C] font-bold">Note: </strong>
                  This is a proposed organization chart.
                </p>
                <p className="font-sans text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                  The structure, positions and reporting lines may be updated based on management decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        TECHNICAL KEY PERSONNEL & INSPECTOR ROSTER TABLE (PRESERVED)
        ========================================================================
      */}
      {showTable && (
        <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white shadow-sm p-2 sm:p-4">
          <AnimatedBackground variant="steel-lines" theme="light" opacity={0.35} />
          
          <div className="relative z-10 rounded-2xl overflow-hidden border border-[#39434D]/15 bg-white">
            <div className="border-b border-[#39434D]/15 bg-[#F5F3EE] px-7 py-5 flex flex-wrap items-center justify-between gap-3">
              <Reveal direction="left" delay={0.05}>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#20262D] flex items-center gap-2.5">
                  <Award className="h-5 w-5 text-[#C6A66B]" /> Key Technical Staff & Inspector Roster
                </h4>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <span className="text-xs text-[#89939D] font-mono bg-[#E5E8EB] px-3 py-1 rounded-full border border-[#39434D]/20">
                  RDSO Inspection Sheet Item #7 & #8
                </span>
              </Reveal>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#20262D]">
                <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                  <tr>
                    <th className="px-6 py-4">Staff Name</th>
                    <th className="px-6 py-4">Designation / Role</th>
                    <th className="px-6 py-4">Technical Qualification</th>
                    <th className="px-6 py-4">Experience</th>
                    <th className="px-6 py-4">Certificate / Reg #</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#39434D]/10 bg-white">
                  {WORKFORCE_STATS.weldersDetail.map((person, idx) => (
                    <tr key={idx} className="hover:bg-[#F5F3EE] transition-colors">
                      <td className="px-6 py-4 font-bold text-[#20262D] flex items-center gap-2.5">
                        <UserCheck className="h-4 w-4 text-[#C6A66B]" /> {person.name}
                      </td>
                      <td className="px-6 py-4 text-[#C6A66B] font-bold">{person.role}</td>
                      <td className="px-6 py-4 text-[#5C6670] font-medium">{person.qualification}</td>
                      <td className="px-6 py-4 text-[#20262D] font-bold">{person.experience}</td>
                      <td className="px-6 py-4 font-mono text-xs text-[#89939D] font-bold">{person.certNo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
