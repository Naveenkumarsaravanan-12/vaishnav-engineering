"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, UserCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/portalData";
import { AnimatedBackground, Reveal, SectionDivider } from "@/components/motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* Executive Header Banner with Blueprint Grid */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-xs overflow-hidden">
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.55} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3 shadow-2xs">
                  <Phone className="h-4 w-4 text-[#C6A66B]" /> Official Audit Coordination Desk
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Plant Works & Inspector Inspection Desk
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Official coordination point for RDSO surveillance audits, railway division quality inspectors, third-party NDT verification, and client factory visits.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <span className="rounded-full bg-[#101820] px-4 py-2 text-xs font-mono font-bold text-[#C6A66B] border border-[#C6A66B]/30 shadow-2xs shrink-0 uppercase tracking-wider">
                RDSO Checklist Item #1 & #3 Verified
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Plant Address & Info */}
          <div className="space-y-6">
            <Reveal direction="left" delay={0.05}>
              <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-9 shadow-sm space-y-7 transition-all hover:shadow-xl hover:border-[#C6A66B]/50">
                <AnimatedBackground variant="steel-lines" theme="light" opacity={0.35} />
                
                <div className="relative z-10 space-y-7">
                  <div className="absolute -top-9 -left-9 -right-9 h-1.5 bg-gradient-to-r from-[#101820] via-[#C6A66B] to-[#39434D]" />
                  <h2 className="font-heading text-2xl font-bold text-[#20262D]">
                    Vaishnav Engineering Manufacturing Works
                  </h2>

                  <div className="space-y-6 text-sm text-[#20262D]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F5F3EE] text-[#C6A66B] border border-[#39434D]/20 shadow-2xs">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-bold text-[#20262D] block text-base">Registered Factory & Works:</span>
                        <p className="leading-relaxed text-[#5C6670] mt-1">{COMPANY_DETAILS.registeredAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F5F3EE] text-[#C6A66B] border border-[#39434D]/20 shadow-2xs">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-bold text-[#20262D] block text-base">Direct Telephone Lines:</span>
                        <a
                          href="tel:+919789495144"
                          className="font-mono text-[#C6A66B] font-bold hover:underline block mt-1 text-base"
                        >
                          {COMPANY_DETAILS.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F5F3EE] text-[#C6A66B] border border-[#39434D]/20 shadow-2xs">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-bold text-[#20262D] block text-base">RDSO Audit Email Desk:</span>
                        <a
                          href="mailto:vaishnav.engg2009@gmail.com"
                          className="font-mono text-[#C6A66B] hover:underline block mt-1 font-bold"
                        >
                          {COMPANY_DETAILS.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* Key Personnel Cards */}
            <Reveal direction="left" delay={0.15}>
              <div className="rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-9 shadow-sm space-y-5">
                <h3 className="font-heading text-lg font-bold text-[#20262D] flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-[#C6A66B]" /> Key Personnel for Inspection Visits & Audits
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {COMPANY_DETAILS.directors.map((dir, idx) => (
                    <div key={idx} className="rounded-2xl border border-[#39434D]/20 bg-[#F5F3EE] p-5 hover:border-[#C6A66B] hover:shadow-md transition-all">
                      <p className="font-bold text-[#20262D] text-base">{dir.name}</p>
                      <p className="text-xs text-[#C6A66B] font-bold mt-0.5">{dir.role}</p>
                      <p className="text-xs text-[#89939D] mt-2 font-mono font-medium">{dir.qualification}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Audit Inquiry / Visitor Form */}
          <Reveal direction="right" delay={0.1}>
            <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white p-7 sm:p-9 shadow-sm h-full flex flex-col justify-between">
              <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.35} />
              
              <div className="relative z-10">
                <div className="absolute -top-9 -left-9 -right-9 h-1.5 bg-gradient-to-r from-[#101820] to-[#C6A66B]" />
                <h2 className="font-heading text-2xl font-bold text-[#20262D] mb-1.5">
                  Schedule RDSO / Client Inspection Visit
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6670] mb-8 font-normal">
                  Send prior notice for factory inspection, joint measurement, or document verification.
                </p>

                {submitted ? (
                  <div className="rounded-2xl border border-[#C6A66B]/30 bg-[#F5F3EE] p-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#101820] text-[#C6A66B] shadow-md">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#20262D]">Inspection Notice Submitted</h3>
                    <p className="text-sm text-[#5C6670] max-w-md mx-auto leading-relaxed">
                      Our Quality Cell team will contact your office immediately to coordinate plant entry passes, PPE kits, and verification document folders.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#20262D] font-mono mb-1.5">
                        Inspector / Official Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Er. Full Name"
                        className="w-full rounded-xl border border-[#39434D]/25 bg-[#F5F3EE] p-3 text-sm text-[#20262D] placeholder-[#89939D] focus:border-[#C6A66B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C6A66B] transition shadow-2xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#20262D] font-mono mb-1.5">
                          Organisation / Dept
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="RDSO / Southern Railway / RVNL"
                          className="w-full rounded-xl border border-[#39434D]/25 bg-[#F5F3EE] p-3 text-sm text-[#20262D] placeholder-[#89939D] focus:border-[#C6A66B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C6A66B] transition shadow-2xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#20262D] font-mono mb-1.5">
                          Proposed Inspection Date
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full rounded-xl border border-[#39434D]/25 bg-[#F5F3EE] p-3 text-sm text-[#20262D] focus:border-[#C6A66B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C6A66B] transition shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#20262D] font-mono mb-1.5">
                        Inspection Purpose / Items to Audit
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Specify girder package, trial assembly inspection, or document review..."
                        className="w-full rounded-xl border border-[#39434D]/25 bg-[#F5F3EE] p-3 text-sm text-[#20262D] placeholder-[#89939D] focus:border-[#C6A66B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C6A66B] transition shadow-2xs"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] py-3.5 text-sm font-bold text-[#101820] transition shadow-md hover:shadow-lg cursor-pointer active:scale-95"
                    >
                      <Send className="h-4 w-4" /> Send Inspection Notice
                    </button>
                  </form>
                )}
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
