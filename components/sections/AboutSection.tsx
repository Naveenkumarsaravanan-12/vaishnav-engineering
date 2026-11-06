"use client";

import Image from "next/image";
import Container from "@/components/layout/container";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedBackground, Reveal } from "@/components/motion";

export default function AboutSection() {
  return (
    <section className="bg-[#F5F3EE] py-20 md:py-28 overflow-hidden border-b border-[#39434D]/20 relative">
      <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.55} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3EE]/95 via-[#F5F3EE]/90 to-[#E5E8EB]/50 pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <Reveal direction="left" delay={0.05}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C6A66B]/15 px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#C6A66B]/40 shadow-2xs">
                <ShieldCheck className="h-4 w-4 text-[#C6A66B]" /> RDSO Approved Railway Infrastructure Partner
              </div>

              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-[#20262D] tracking-tight">
                Building Bridges, <br />
                <span className="text-[#C6A66B] font-semibold italic">Connecting Futures.</span>
              </h2>

              <p className="text-[#5C6670] text-base md:text-lg leading-relaxed max-w-lg font-normal">
                Welcome to Vaishnav Engineering. We are a premier RDSO Part-A approved railway fabrication and steel bridge construction organization committed to unyielding metallurgical precision, zero-defect welding, and high-strength infrastructure delivery across India.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/company"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#101820] shadow-sm hover:shadow-md transition active:scale-95"
                >
                  Explore Corporate Profile <ArrowRight className="h-4 w-4 text-[#101820]" />
                </Link>
                <Link
                  href="/approvals/rdso"
                  className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-[#E5E8EB] border border-[#39434D]/30 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#20262D] shadow-2xs hover:shadow-sm transition active:scale-95"
                >
                  Inspect Credentials
                </Link>
              </div>
            </div>
          </Reveal>

          {/* RIGHT IMAGE - Clean, full color, architectural card */}
          <Reveal direction="right" delay={0.15}>
            <div className="relative w-full h-[340px] md:h-[460px] lg:h-[500px] z-10 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl bg-[#202A33] border border-[#39434D]/30 group transition-all duration-500">
              <Image
                src="/aboutus/about.jpeg"
                alt="Vaishnav Engineering Bridge Structure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-[#101820]/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-xl bg-[#C6A66B] px-3 py-1 text-xs font-mono font-bold text-[#101820] shadow-xs">
                  RDSO B&S Certified
                </span>
                <p className="font-heading text-lg font-bold mt-2 text-[#F8F7F2]">Heavy Bowstring Girder Erection</p>
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}