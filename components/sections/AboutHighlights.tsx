"use client";

import { motion, type Variants } from "framer-motion";
import Container from "@/components/layout/container";

const items = [
  {
    title: "Decades of Industrial Growth",
    text: "Vaishnav Engineering is an established manufacturing organization on Jan 2009 at Katpadi Taluk, Vellore dist., Tamilnadu, India. We focus on Composite Girder Fabrication, Manufacturing of Equipment.",
  },
  {
    title: "Core Competencies",
    text: "With over a decade of experience, we have successfully completed numerous projects for Indian Railways, showcasing our expertise in delivering high-quality steel structures that meet stringent safety and performance standards.",
  },
  {
    title: "Commitment to Quality",
    text: "We are committed to maintaining the highest standards of quality in all our products and services, ensuring customer satisfaction and long-term partnerships.",
  },
];

// --- GPU ACCELERATED VARIANTS ---

// Controls the top line using scaleX instead of width (Eliminates layout lag)
const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 0.3, 
    transition: { 
      duration: 0.8, 
      delay: 0.3 + (i * 0.15), 
      ease: [0.25, 0.1, 0.25, 1],
    }
  }),
  hover: {
    scaleX: 1, // Replaces tailwind group-hover:w-full
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function AboutHighlights() {
  return (
    <section className="bg-[#fafafa] py-24 md:py-32">
      <Container>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {items.map((item, index) => (
            <motion.div
              key={index}
              custom={index} // Passes the index to the variants for staggered delays
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }} 
              // Removed Tailwind transitions/hovers to let Framer handle it natively
              className="relative bg-white p-10 md:p-12 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-sm will-change-transform"
            >
              
              {/* THE FIX: Hardware Accelerated Top Line (scaleX + origin-left) */}
              <motion.div 
                variants={lineVariants}
                className="absolute top-0 left-0 h-1 w-full bg-[#c26b6b] origin-left will-change-transform" 
              />
              
              <span className="text-[#c26b6b] font-bold text-[10px] tracking-[0.3em] uppercase block mb-6">
                {`0${index + 1} // System`}
              </span>

              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </Container>
    </section>
  );
}
