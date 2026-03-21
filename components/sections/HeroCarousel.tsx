"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/projects/bridge.jpeg",
    title: "Bridge Fabrication Yard",
    details: "Large bridge members prepared in the fabrication yard with controlled handling, sequencing, and structural accuracy.",
  },
  {
    src: "/carousel/Picture2.png",
    title: "Arch Girder Development",
    details: "Long-span curved members developed for railway and heavy infrastructure projects with workshop-level precision.",
  },
  {
    src: "/carousel/Picture3.png",
    title: "Fabrication and Staging",
    details: "Component staging, yard planning, and steel fabrication coordinated to support dependable project execution.",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const safeIndex = index >= 0 && index < slides.length ? index : 0;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (paused) {
      return undefined;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative min-h-[520px] w-full overflow-hidden rounded-sm border border-gray-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:h-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.02))]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={safeIndex}
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -120 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image src={slides[safeIndex].src} alt={slides[safeIndex].title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08),rgba(17,17,17,0.36))]" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute left-6 top-6 z-20 max-w-xl rounded-sm border border-white/20 bg-white/88 p-6 backdrop-blur-sm md:left-10 md:top-10 md:p-8">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.38em] text-[#c26b6b]">Project Archive</p>
        <h4 className="mb-3 text-3xl font-bold tracking-[-0.05em] text-[#1a1a1a] md:text-5xl">{slides[safeIndex].title}</h4>
        <p className="max-w-md text-sm leading-6 text-gray-600 md:text-base">{slides[safeIndex].details}</p>
      </div>

      <div className="absolute inset-y-0 left-4 z-20 hidden items-center md:flex">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/80 text-[#1a1a1a] backdrop-blur-sm transition hover:bg-[#1a1a1a] hover:text-white"
        >
          <ChevronLeft size={26} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 z-20 hidden items-center md:flex">
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/80 text-[#1a1a1a] backdrop-blur-sm transition hover:bg-[#1a1a1a] hover:text-white"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      <div className="absolute bottom-4 left-4 z-20 flex gap-3 md:hidden">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/85 text-[#1a1a1a] backdrop-blur-sm transition hover:bg-[#1a1a1a] hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/85 text-[#1a1a1a] backdrop-blur-sm transition hover:bg-[#1a1a1a] hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-20 space-y-3 rounded-sm border border-white/20 bg-white/88 p-4 backdrop-blur-sm md:bottom-8 md:left-auto md:right-10 md:w-[430px] md:space-y-4 md:p-5">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            onClick={() => setIndex(i)}
            aria-label={`View slide ${i + 1}`}
            className="group block w-full text-left"
          >
            <div className="flex justify-between text-xs font-medium text-[#1a1a1a] md:text-sm">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span className="pl-4">{slide.title}</span>
            </div>

            <div className="relative mt-2 h-[2px] overflow-hidden bg-gray-200">
              <motion.div
                className="absolute left-0 top-0 h-full bg-[#c26b6b]"
                animate={{ width: safeIndex === i ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {safeIndex === i && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-[11px] text-gray-600 md:text-xs"
              >
                {slide.details}
              </motion.p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
