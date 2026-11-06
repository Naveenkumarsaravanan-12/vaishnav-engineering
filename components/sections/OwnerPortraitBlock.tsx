"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

export default function OwnerPortraitBlock() {
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger entrance once when scrolled into view
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  // Motion variants for smooth, subtle entrance animation
  const portraitVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.15, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-3xl border border-[#D6A64F]/40 bg-gradient-to-br from-[#071B2D] via-[#0B2942] to-[#071B2D] text-white py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 shadow-2xl"
    >
      {/* Subtle Railway Bridge Background Asset with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/projects/bridge-1.png"
          alt="Railway Bridge Infrastructure Background"
          fill
          className="object-cover object-center opacity-12 mix-blend-luminosity scale-105"
          priority
        />
        {/* Soft Radial Vignette for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/95 via-transparent to-[#071B2D]/85" />
      </div>

      {/* Elegant Corner Geometric Gold Accents */}
      <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-[#D6A64F]/70 pointer-events-none" />
      <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-[#D6A64F]/70 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-[#D6A64F]/70 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-[#D6A64F]/70 pointer-events-none" />

      {/* Subtle Metallic Corner Diagonal Glows */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D6A64F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#0B2942]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Grid: 2 Columns on Desktop */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Managing Director Portrait with Champagne-Gold Border        */}
          {/* ========================================================================= */}
          <motion.div
            variants={portraitVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
              {/* Outer Subtle Gold Halo on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D6A64F] to-[#F0BF68] opacity-25 blur-sm group-hover:opacity-40 transition duration-500" />

              {/* Portrait Container with Thin Champagne-Gold Border & Subtle Radius */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-2xl border-2 border-[#D6A64F] bg-[#071B2D] overflow-hidden shadow-2xl shadow-black/80 ring-1 ring-[#F0BF68]/30">
                <Image
                  src="/owner-portrait.jpeg"
                  alt="MR. R. SARAVANAN - Founder / Managing Director"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                />
                {/* Subtle bottom gradient vignette to blend with frame */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071B2D]/80 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Leadership Information & Typography                        */}
          {/* ========================================================================= */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            {/* Header: Name & Designation */}
            <div className="space-y-3">
              {/* Name: "MR. R." in White & "SARAVANAN" in Champagne Gold */}
              <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.15]">
                <span className="text-white">MR. R. </span>
                <span className="text-[#D6A64F] bg-gradient-to-r from-[#D6A64F] via-[#F0BF68] to-[#D6A64F] bg-clip-text text-transparent">
                  SARAVANAN
                </span>
              </h2>

              {/* Designation: FOUNDER / MANAGING DIRECTOR */}
              <div className="space-y-2.5">
                <p className="text-sm sm:text-base lg:text-[17px] font-mono font-semibold tracking-[0.18em] text-[#D9E0E7] uppercase">
                  FOUNDER / MANAGING DIRECTOR
                </p>
                {/* Short Champagne-Gold Horizontal Accent Line */}
                <div className="w-20 h-1 bg-gradient-to-r from-[#D6A64F] to-[#F0BF68] rounded-full" />
              </div>
            </div>

            {/* Company Biography with exact text & highlighted spans */}
            <p className="text-[#D9E0E7] text-base sm:text-lg lg:text-[19px] leading-[1.65] font-normal max-w-2xl">
              Established in <span className="text-[#D6A64F] font-semibold">2009</span>, Vaishnav Engineering has built its expertise in railway bridge fabrication and structural steel engineering. Achieving <span className="text-[#D6A64F] font-semibold">RDSO certification in 2015</span> marked an important milestone in the company&apos;s journey, strengthening its commitment to quality, precision, and dependable railway infrastructure solutions.
            </p>

            {/* Premium Outlined Official Mail ID Button */}
            <div className="pt-2">
              <a
                href="mailto:vaishnav.engg2009@gmail.com"
                className="inline-flex items-center gap-2.5 rounded-xl border border-[#D6A64F] bg-transparent px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-[#D6A64F] shadow-md shadow-black/30 hover:bg-gradient-to-r hover:from-[#D6A64F] hover:to-[#F0BF68] hover:text-[#071B2D] hover:shadow-lg hover:shadow-[#D6A64F]/25 transition-all duration-300 group cursor-pointer active:scale-98"
                title="Send email to vaishnav.engg2009@gmail.com"
              >
                <Mail className="w-4 h-4 text-[#D6A64F] group-hover:text-[#071B2D] transition-colors shrink-0" />
                <span className="font-mono tracking-tight sm:tracking-normal">vaishnav.engg2009@gmail.com</span>
                <ArrowRight className="w-4 h-4 text-[#D6A64F] group-hover:text-[#071B2D] transition-all duration-200 group-hover:translate-x-1 shrink-0" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
