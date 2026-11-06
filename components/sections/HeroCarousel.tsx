"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/projects/bridge-1.png",
    title: "Railway Bowstring Arch Bridge",
    details: "High-precision fabrication and erection of RDSO-compliant open web bowstring steel girders across active railway lines.",
  },
  {
    src: "/projects/bridge-2.png",
    title: "Navigational Channel Girder Launching",
    details: "Heavy bowstring arch steel girder assembly and launching engineered for demanding waterway infrastructure spans.",
  },
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
      className="relative min-h-[520px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md md:h-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(15,23,42,0.4))]" />

      <div className="absolute inset-0">
        <Image
          src={slides[safeIndex].src}
          alt={slides[safeIndex].title}
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.15),rgba(15,23,42,0.45))]" />
      </div>

      <div className="absolute left-6 top-6 z-20 max-w-xl rounded-2xl border border-[#E2E8F0] bg-white/95 p-6 backdrop-blur-xl md:left-10 md:top-10 md:p-8 shadow-xl">
        <p className="mb-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B6B8F]">Project Archive</p>
        <h4 className="font-heading mb-3 text-2xl font-extrabold tracking-tight text-[#102A43] md:text-3xl">{slides[safeIndex].title}</h4>
        <p className="max-w-md text-xs leading-relaxed text-[#64748B] md:text-sm font-normal">{slides[safeIndex].details}</p>
      </div>

      <div className="absolute inset-y-0 left-4 z-20 hidden items-center md:flex">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white/90 text-[#102A43] backdrop-blur-md hover:bg-[#102A43] hover:text-white transition-colors cursor-pointer shadow-md"
        >
          <ChevronLeft size={18} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 z-20 hidden items-center md:flex">
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white/90 text-[#102A43] backdrop-blur-md hover:bg-[#102A43] hover:text-white transition-colors cursor-pointer shadow-md"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-20 space-y-3 rounded-2xl border border-[#E2E8F0] bg-white/95 p-4 backdrop-blur-xl md:bottom-8 md:left-auto md:right-10 md:w-[430px] md:space-y-3.5 md:p-5 shadow-xl">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            onClick={() => setIndex(i)}
            aria-label={`View slide ${i + 1}`}
            className="group block w-full text-left cursor-pointer"
          >
            <div className="flex justify-between text-xs font-semibold text-[#263746] md:text-sm">
              <span className="text-[#3B6B8F] font-mono font-bold">{String(i + 1).padStart(2, "0")}</span>
              <span className="pl-4 group-hover:text-[#102A43] transition-colors">{slide.title}</span>
            </div>

            <div className="relative mt-2 h-[2px] overflow-hidden bg-[#E2E8F0] rounded-full">
              <div
                className="absolute left-0 top-0 h-full bg-[#102A43]"
                style={{ width: safeIndex === i ? "100%" : "0%" }}
              />
            </div>

            {safeIndex === i && (
              <p className="mt-2 text-[11px] text-[#64748B] md:text-xs font-normal">
                {slide.details}
              </p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
