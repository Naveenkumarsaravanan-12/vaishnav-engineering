"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Container from "@/components/layout/container";

function VisualHero({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const welcomeOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const welcomeScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);
  const headlineOpacity = useTransform(smoothProgress, [0.15, 0.4], [0, 1]);
  const headlineY = useTransform(smoothProgress, [0.15, 0.4], [20, 0]);

  return (
    <div className="sticky top-0 flex h-[calc(100vh-75px)] w-full items-center justify-center overflow-hidden bg-[#0d0d0d]">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#c26b6b 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(194,107,107,0.14),transparent)]" />

      <motion.div style={{ opacity: welcomeOpacity, scale: welcomeScale }} className="z-10 -translate-y-8 px-6 text-center will-change-transform md:-translate-y-10">
        <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.5em] text-[#c26b6b]">Est. 2009</span>
        <h1 className="text-5xl font-bold leading-[0.85] tracking-tighter text-white md:text-8xl">
          VAISHNAV <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
            ENGINEERING
          </span>
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: headlineOpacity, y: headlineY }}
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
      >
        <div className="-translate-y-8 md:-translate-y-10">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Building Stronger Bridges <br />
            <span className="text-2xl font-light italic text-[#c26b6b] md:text-5xl">for a Connected Future.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-white/65 md:text-base">
            Precision fabrication, railway bridge expertise, and heavy engineering execution delivered with workshop discipline and site-ready confidence.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const capabilities = [
  {
    num: "01",
    title: "Fabrication",
    desc: "Heavy structural steel members developed for infrastructure and industrial purpose.",
  },
  {
    num: "02",
    title: "ROB Specialist",
    desc: "Focused execution for railway over bridges and composite girder systems.",
  },
  {
    num: "03",
    title: "Gate Dampers",
    desc: "Mechanical systems built with precision, durability, and functional reliability.",
  },
  {
    num: "04",
    title: "Professional Girders",
    desc: "We make Bowstring Girders and other girders according to the requirements.",
  },
] as const;

const metrics = [
  { value: "50+", label: "Projects" },
  { value: "15yr", label: "Experience" },
  { value: "RDSO", label: "Focused" },
] as const;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#121212]">
      <section ref={containerRef} className="relative z-0 h-[100vh] md:h-[105vh]">
        <VisualHero containerRef={containerRef} />
      </section>

      <div className="relative z-50 -mt-[14vh] isolate bg-[#121212] md:-mt-[16vh]">
        <section className="pb-24">
          <Container>
            <div className="rounded-[28px] border border-white/8 bg-[#171717] shadow-[0_-20px_80px_rgba(0,0,0,0.45)]">
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-b border-white/6 p-8 md:p-12 lg:border-b-0 lg:border-r"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-px w-8 bg-[#c26b6b]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c26b6b]">Engineering Absolute</span>
                  </div>

                  <h2 className="text-4xl font-bold leading-[0.92] tracking-tighter text-white md:text-6xl">
                    Accuracy in <br />
                    <span className="font-light italic text-white/45">Millimeters.</span>
                  </h2>

                  <p className="mt-6 max-w-xl text-sm font-light leading-7 text-white/62 md:text-base">
                    Vaishnav Engineering brings fabrication expertise, structural understanding, and execution clarity to bridge systems, heavy engineering works, and industrial steel requirements.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {metrics.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/8 bg-[#1d1d1d] px-5 py-5">
                        <p className="text-3xl font-bold text-white">{item.value}</p>
                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-[#c26b6b]">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href="/services"
                      className="rounded-sm bg-[#c26b6b] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:bg-[#ae5c5c]"
                    >
                      View Services
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-sm border border-white/12 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:border-[#c26b6b] hover:text-[#c26b6b]"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-px bg-white/6 sm:grid-cols-2">
                  {capabilities.map((item) => (
                    <TechBox key={item.num} num={item.num} title={item.title} desc={item.desc} />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-28">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#c26b6b]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c26b6b]">Company Profile</span>
                </div>

                <h3 className="text-3xl font-bold leading-[1] tracking-tight text-white md:text-5xl">
                  Built to deliver <br />
                  <span className="font-light italic text-white/45">reliable structural work.</span>
                </h3>

                <p className="max-w-xl text-sm font-light leading-7 text-white/62 md:text-base">
                  From workshop fabrication to site-focused engineering support, our approach is centered on dependable output, clean detailing, and long-term structural performance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                <InfoPanel title="Bridge Systems" text="Composite girder fabrication and railway bridge members shaped for demanding project environments." />
                <InfoPanel title="Workshop Discipline" text="Process control, steel preparation, and fabrication workflows aligned to execution quality." />
                <InfoPanel title="Field Readiness" text="Outputs planned with erection sequence, handling practicality, and site conditions in mind." />
                <InfoPanel title="Engineering Support" text="A practical partner for structural production, coordination, and technical confidence." />
              </motion.div>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
}

function TechBox({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-[#1b1b1b] p-8">
      <p className="mb-3 text-[10px] font-bold tracking-widest text-[#c26b6b]">{num}</p>
      <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-white">{title}</p>
      <p className="mt-4 text-sm font-light leading-7 text-white/58">{desc}</p>
    </div>
  );
}

function InfoPanel({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#171717] p-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#c26b6b]">{title}</p>
      <p className="mt-4 text-sm font-light leading-7 text-white/62">{text}</p>
    </div>
  );
}
