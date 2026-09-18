"use client";

import React, { useState } from "react";
import Container from "@/components/layout/container";
import { motion, type Variants } from "framer-motion";

// --- CUSTOM SVG VECTORS ---
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

type DrawConfig = {
  d: number;
  dur?: number;
  o?: number;
};

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  val: string;
};

type AddressCardProps = {
  title: string;
  address: string;
};

type InputProps = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  onChange: (value: string) => void;
};

// --- 3D TIED-ARCH BRIDGE BLUEPRINT (Matches your photo) ---
const ArchBridgeBuilder = () => {
  const color = "#c26b6b";
  
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: DrawConfig) => ({
      pathLength: 1,
      opacity: custom.o ?? 0.7,
      transition: {
        pathLength: { delay: custom.d, duration: custom.dur ?? 1.5, ease: "easeOut" },
        opacity: { delay: custom.d, duration: 0.1 }
      }
    })
  };

  return (
    <div className="w-full max-w-[500px] aspect-video relative mx-auto lg:ml-auto">
      <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" className="drop-shadow-lg">
        
        {/* Stage 1: Pillars/Abutments */}
        <motion.rect x="30" y="160" width="30" height="30" stroke={color} strokeWidth="1.5" variants={draw} custom={{ d: 0.2 }} initial="hidden" animate="visible" />
        <motion.rect x="340" y="160" width="30" height="30" stroke={color} strokeWidth="1.5" variants={draw} custom={{ d: 0.4 }} initial="hidden" animate="visible" />

        {/* Stage 2: Dual Road Decks (Creating 3D perspective) */}
        <motion.line x1="10" y1="160" x2="390" y2="160" stroke={color} strokeWidth="2" variants={draw} custom={{ d: 1.0, dur: 1 }} initial="hidden" animate="visible" />
        <motion.line x1="30" y1="140" x2="410" y2="140" stroke={color} strokeWidth="1" variants={draw} custom={{ d: 1.2, dur: 1, o: 0.4 }} initial="hidden" animate="visible" />

        {/* Stage 3: Front Arch & Back Arch */}
        {/* Math curve: M 50 160 Q 200 -80 350 160 */}
        <motion.path d="M 50 160 Q 200 -80 350 160" stroke={color} strokeWidth="3" strokeLinecap="round" variants={draw} custom={{ d: 1.8, dur: 1.5, o: 1 }} initial="hidden" animate="visible" />
        <motion.path d="M 70 140 Q 220 -100 370 140" stroke={color} strokeWidth="1.5" strokeLinecap="round" variants={draw} custom={{ d: 2.0, dur: 1.5, o: 0.4 }} initial="hidden" animate="visible" />

        {/* Stage 4: Vertical Suspenders */}
        {[
          {x: 80, y: 117}, {x: 110, y: 83}, {x: 140, y: 59}, {x: 170, y: 45}, 
          {x: 200, y: 40}, {x: 230, y: 45}, {x: 260, y: 59}, {x: 290, y: 83}, {x: 320, y: 117}
        ].map((point, i) => (
          <motion.line 
            key={i} x1={point.x} y1={160} x2={point.x} y2={point.y} 
            stroke={color} strokeWidth="1" 
            variants={draw} custom={{ d: 2.8 + (i * 0.1), dur: 0.5, o: 0.8 }} initial="hidden" animate="visible" 
          />
        ))}

        {/* Stage 5: Top Cross-Bracing (Connecting the two arches) */}
        {[
          {x1: 110, y1: 83, x2: 130, y2: 63}, {x1: 140, y1: 59, x2: 160, y2: 39}, 
          {x1: 170, y1: 45, x2: 190, y2: 25}, {x1: 200, y1: 40, x2: 220, y2: 20}, 
          {x1: 230, y1: 45, x2: 250, y2: 25}, {x1: 260, y1: 59, x2: 280, y2: 39}, {x1: 290, y1: 83, x2: 310, y2: 63}
        ].map((line, i) => (
          <motion.line 
            key={`brace-${i}`} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} 
            stroke={color} strokeWidth="1.5" 
            variants={draw} custom={{ d: 3.8 + (i * 0.1), dur: 0.4, o: 0.6 }} initial="hidden" animate="visible" 
          />
        ))}

      </svg>
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const locations = [
    {
      title: "Unit 01",
      address:
        "SF.No. 296/1, S.N Pudur Village, Thiruvalam, Vellore Dist. - 632 519. Tamil Nadu, India.",
    },
    {
      title: "Unit 02",
      address:
        "S.F.No. 187/7, Puthur Road, Puttur, Vellore, Tamil Nadu, 632519",
    },
    {
      title: "Unit 03",
      address:
        "Survey No 72/1, 71/2B, Thiruvalam To Ponnai Road, Sripadanallore Bus Stop, Thenpalli Post, Sripadanallore, Vellore, Tamil Nadu, 632515",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="bg-white min-h-screen font-sans">
      
      {/* 1. BLACK HERO - ADAPTIVE LAYOUT */}
      <div className="bg-[#1a1a1a] pt-32 pb-24 md:pt-40 md:pb-32 border-b border-white/5 relative overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 relative z-10">
            
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:max-w-2xl text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 md:mb-8">
                <div className="h-[1px] w-8 md:w-12 bg-[#c26b6b]" />
                <span className="text-[#c26b6b] text-[10px] font-bold uppercase tracking-[0.3em]">
                  Client Relations & Support
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter mb-6 md:mb-8">
                Contact<br className="hidden md:block" /><span className="text-[#c26b6b]">Us.</span>
              </h1>

              <p className="text-gray-400 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Whether you are initiating a large-scale structural deployment, seeking precision mechanical components, or requiring geotechnical consultation, our engineering task force is ready to deliver.
              </p>
            </motion.div>
            
            {/* Hero Animation (Adaptive: Scales naturally, sits below text on mobile) */}
            <div className="w-full lg:w-1/2 opacity-30 lg:opacity-50">
               <ArchBridgeBuilder />
            </div>

          </div>
        </Container>
      </div>

      {/* 2. MAIN CONTENT GRID - Seamless Adaptive Layout */}
      <div className="py-20 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* LEFT: INFO SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-10"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">Our Locations</h2>
                <p className="text-gray-500 leading-relaxed text-base md:text-lg max-w-md">
                  Visit our engineering and fabrication locations across Vellore for project discussions, workshop coordination, and production support.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-2">
                {locations.map((location) => (
                  <AddressCard key={location.title} title={location.title} address={location.address} />
                ))}
              </div>

              <div className="space-y-6 pt-4">
                <ContactItem icon={<PhoneIcon />} label="Call" val="+91 97894 95144" />
                <ContactItem icon={<MailIcon />} label="Email" val="vaishnav.engg2009@gmail.com" />
              </div>
            </motion.div>

            {/* RIGHT: FORM SECTION (Border removed, floats cleanly) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 w-full max-w-[650px] lg:ml-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <Input label="FULL NAME" type="text" onChange={(v) => setFormData({...formData, name: v})} />
                  <Input label="EMAIL" type="email" onChange={(v) => setFormData({...formData, email: v})} />
                </div>
                <Input label="SUBJECT" type="text" onChange={(v) => setFormData({...formData, subject: v})} />
                
                <div className="group pt-2">
                  <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase block mb-1 transition-colors group-focus-within:text-[#c26b6b]">Message</label>
                  <textarea 
                    required
                    className="w-full py-2 border-b border-gray-200 outline-none focus:border-[#c26b6b] transition-all resize-none bg-transparent text-[#1a1a1a]" 
                    rows={4} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status !== "idle"}
                  className={`group relative w-full md:w-auto py-5 px-10 overflow-hidden transition-colors duration-500 mt-4 shadow-sm ${
                    status === "success" ? "bg-[#c26b6b]" : "bg-[#1a1a1a]"
                  }`}
                >
                  {status === "idle" && (
                    <div className="absolute top-0 left-0 h-full w-0 bg-[#c26b6b] transition-all duration-500 ease-out group-hover:w-full" />
                  )}

                  {status === "sending" && (
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute top-0 left-0 h-full bg-[#a85757]"
                    />
                  )}

                  <span className="relative z-10 text-white text-[11px] md:text-[12px] font-bold tracking-widest uppercase">
                    {status === "idle" && "Initiate Contact"}
                    {status === "sending" && "Transmitting..."}
                    {status === "success" && "Message Secured"}
                  </span>
                </button>
              </form>
            </motion.div>

          </div>
        </Container>
      </div>
    </section>
  );
}

// --- HELPER COMPONENTS ---

function ContactItem({ icon, label, val }: ContactItemProps) {
  return (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="p-3 bg-[#fdf2f2] rounded-full text-[#c26b6b] group-hover:bg-[#c26b6b] group-hover:text-white transition-colors duration-500 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-[#c26b6b] tracking-widest uppercase mb-1">{label}</p>
        <p className="font-medium text-[#1a1a1a] text-base md:text-lg">{val}</p>
      </div>
    </div>
  );
}

function AddressCard({ title, address }: AddressCardProps) {
  return (
    <div className="rounded-sm border border-gray-200 bg-[#fafafa] p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fdf2f2] text-[#c26b6b]">
          <MapPinIcon />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#c26b6b]">{title}</p>
          <p className="text-sm font-semibold text-[#1a1a1a]">Address</p>
        </div>
      </div>
      <p className="text-sm leading-7 text-gray-600">{address}</p>
    </div>
  );
}

function Input({ label, type, onChange }: InputProps) {
  return (
    <div className="group">
      <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase block mb-1 transition-colors group-focus-within:text-[#c26b6b]">{label}</label>
      <input 
        type={type}
        required
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-2 border-b border-gray-200 bg-transparent outline-none focus:border-[#c26b6b] transition-all text-[#1a1a1a]" 
      />
    </div>
  );
}
