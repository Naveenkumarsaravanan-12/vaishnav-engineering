"use client";

import { useState } from "react";
import Container from "@/components/layout/container";
import { Users, X, Award, Briefcase, CheckCircle2 } from "lucide-react";
import { AnimatedBackground, Reveal } from "@/components/motion";

const team = [
  {
    name: "Ravi Kumar",
    role: "Managing Director",
    bio: "Over 25 years of experience in heavy railway infrastructure development, RDSO regulatory liaison, and structural engineering leadership.",
  },
  {
    name: "Arun Prakash",
    role: "Head of Engineering",
    bio: "Leads engineering teams delivering high-precision bridge girder fabrication, automated SAW lines, and IRS B1 compliance.",
  },
  {
    name: "Meena Subramanian",
    role: "Geotechnical Specialist",
    bio: "Expert in soil mechanics, bridge foundation engineering, and structural foundation integrity.",
  },
  {
    name: "Karthik Raj",
    role: "Precision Manufacturing Lead",
    bio: "Specialist in CNC multi-torch plate profiling, automatic nesting algorithms, and high-tolerance plate drilling.",
  },
  {
    name: "Vikram Nair",
    role: "Project Manager",
    bio: "Ensures milestone timelines, site delivery schedules, and turnkey bridge erection operations.",
  },
  {
    name: "Sanjay Patel",
    role: "Structural Engineer",
    bio: "Designs and oversees complex structural calculations, bowstring arch geometry, and full-scale shop trial assembly.",
  },
];

export default function TeamSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* HERO BAR WITH GRADIENT FLOW */}
      <div className="relative py-16 sm:py-20 bg-[#101820] text-white border-b border-[#39434D] overflow-hidden">
        <AnimatedBackground variant="gradient-flow" theme="dark" opacity={0.65} />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Reveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C6A66B]/15 px-4 py-1.5 text-xs font-mono font-bold text-[#C6A66B] border border-[#C6A66B]/30 backdrop-blur-md uppercase tracking-wider shadow-xs">
                <Users className="h-4 w-4" /> Leadership & Specialists
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F2] tracking-tight">
                Engineering Leadership Team
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="text-sm sm:text-base text-[#89939D] font-normal leading-relaxed">
                Senior engineering specialists, AWS certified welding supervisors, and project managers steering heavy railway infrastructure execution.
              </p>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* TEAM GRID WITH FLOATING SHAPES */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <AnimatedBackground variant="floating-shapes" theme="light" opacity={0.4} />
        <Container className="relative z-10">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={i} direction="up" delay={i * 0.08}>
                <div
                  onClick={() => setActive(i)}
                  className="cursor-pointer border border-[#39434D]/20 hover:border-[#C6A66B] bg-white rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  {/* AVATAR / BADGE AREA */}
                  <div className="relative h-56 bg-[#E5E8EB] flex items-center justify-center text-[#20262D] border-b border-[#39434D]/20 overflow-hidden">
                    <div className="h-20 w-20 rounded-2xl bg-[#101820] border border-[#C6A66B]/30 flex items-center justify-center text-[#C6A66B] font-heading font-extrabold text-2xl group-hover:scale-110 transition-transform shadow-2xs">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-[#101820]/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                      <span className="text-[#101820] text-xs font-bold bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2 rounded-full shadow-lg">
                        View Profile Details
                      </span>
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="p-6 sm:p-7 text-center">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#20262D] group-hover:text-[#C6A66B] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#C6A66B] text-xs sm:text-sm mt-1 font-bold font-mono">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#5C6670] mt-3 line-clamp-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* MODAL */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#101820]/90 backdrop-blur-md p-4"
          onClick={() => setActive(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-[#39434D]/30 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl p-7 sm:p-10 relative space-y-6 animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#E5E8EB] hover:bg-[#101820] text-[#20262D] hover:text-[#F8F7F2] transition cursor-pointer border border-[#39434D]/20"
              title="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-[#101820] border border-[#C6A66B]/40 flex items-center justify-center text-[#C6A66B] font-heading font-extrabold text-2xl">
                {team[active].name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#20262D]">
                  {team[active].name}
                </h2>
                <p className="text-[#C6A66B] text-sm font-bold font-mono mt-0.5">
                  {team[active].role}
                </p>
              </div>
            </div>

            <p className="text-[#5C6670] leading-relaxed font-normal text-sm sm:text-base bg-[#F5F3EE] p-5 rounded-2xl border border-[#39434D]/20">
              {team[active].bio}
            </p>

            <div className="flex items-center justify-between pt-2 text-xs font-mono text-[#20262D] font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" /> RDSO Qualified Technical Personnel
              </span>
              <button
                onClick={() => setActive(null)}
                className="bg-[#C6A66B] hover:bg-[#D8B97E] text-[#101820] px-5 py-2.5 rounded-xl font-bold cursor-pointer shadow-xs transition"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
