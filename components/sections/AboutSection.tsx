"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function AboutSection() {
  return (
    <section className="bg-[#1a1a1a] py-24 md:py-12 overflow-hidden border-b border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-10 bg-[#c26b6b]" />
              <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#c26b6b]">
                About Us
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-white tracking-tighter">
              Building Bridges, <br />
              <span className="text-gray-500 font-light italic">Connecting Futures.</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg font-light">
              Welcome to Vaishnav Engineering. We are a leading railway fabrication and bridge construction company committed to excellence, innovation, and reliability. With years of industry experience, we specialize in designing and fabricating high-strength steel structures for railway infrastructure.
            </p>
          </motion.div>

          {/* RIGHT IMAGE - Clean, full color, no frame */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] z-10 overflow-hidden rounded-sm shadow-2xl bg-[#222]"
          >
            <Image
              src="/aboutus/about.jpeg"
              alt="Vaishnav Engineering Bridge Structure"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover scale-105 hover:scale-100 transition-transform duration-700 ease-out"
              priority
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}