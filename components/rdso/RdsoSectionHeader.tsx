"use client";

import { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface RdsoSectionHeaderProps {
  number: string;
  title: string;
  description: string;
  category?: string;
  statusBadge?: string;
  isVerified?: boolean;
  actionSlot?: ReactNode;
  className?: string;
}

const RDSO_DEFAULT_CATEGORIES: Record<string, string> = {
  "01": "COMPANY PROFILE",
  "1": "COMPANY PROFILE",
  "02": "FABRICATION INFRASTRUCTURE",
  "2": "FABRICATION INFRASTRUCTURE",
  "03": "RDSO APPROVAL",
  "3": "RDSO APPROVAL",
  "04": "FIRM REGISTRATION",
  "4": "FIRM REGISTRATION",
  "05": "FACTORY LICENCE",
  "5": "FACTORY LICENCE",
  "06": "ISO 9001 CERTIFICATION",
  "6": "ISO 9001 CERTIFICATION",
  "07": "ORGANISATION STRUCTURE",
  "7": "ORGANISATION STRUCTURE",
  "08": "TESTING FACILITIES & NDT",
  "8": "TESTING FACILITIES & NDT",
  "09": "MANDATORY APPROVALS",
  "9": "MANDATORY APPROVALS",
  "10": "WORKFORCE & ARTISANS",
  "11": "POWER INFRASTRUCTURE",
  "12": "EXECUTED WORKS",
  "13": "WORKS IN HAND",
};

export default function RdsoSectionHeader({
  number,
  title,
  description,
  category,
  statusBadge = "RDSO Compliance Verified",
  isVerified = true,
  actionSlot,
  className = ""
}: RdsoSectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const formattedNumber = number.padStart(2, "0");
  const categoryLabel = category || RDSO_DEFAULT_CATEGORIES[formattedNumber] || "COMPLIANCE DOSSIER";

  return (
    <header
      className={`relative border-b border-[#39434D]/15 pb-6 sm:pb-8 mb-8 sm:mb-10 select-none ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6">
        
        {/* Main Editorial Heading Group */}
        <div className="space-y-3 max-w-4xl">
          
          {/* 1. Uppercase Section Number & Category Label + Audit Pill */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-[13px] tracking-[0.2em] uppercase">
              <span className="font-extrabold text-[#D6B36A]">{formattedNumber}</span>
              <span className="text-[#89939D]/50 font-semibold">/</span>
              <span className="font-semibold text-[#5C6670] tracking-[0.16em]">{categoryLabel}</span>
            </div>

            {/* Audit Status Badge */}
            {statusBadge && (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-mono font-bold border transition-colors ${
                  isVerified
                    ? "bg-white text-emerald-800 border-emerald-300 shadow-2xs"
                    : "bg-amber-50 text-amber-800 border-amber-300"
                }`}
              >
                {isVerified ? (
                  <>
                    <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                    <span>{statusBadge}</span>
                  </>
                ) : (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                    <span>{statusBadge}</span>
                  </>
                )}
              </span>
            )}
          </div>

          {/* 2. Prominent Bold Section Title */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold uppercase tracking-tight text-[#101820] leading-[1.15]">
            {title}
          </h2>

          {/* 3. Short Champagne-Gold Decorative Underline */}
          {shouldReduceMotion ? (
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-[#D6B36A] via-[#E2C785] to-[#D6B36A] rounded-full shadow-xs mt-3.5 mb-3.5" />
          ) : (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-[#D6B36A] via-[#E2C785] to-[#D6B36A] rounded-full shadow-xs mt-3.5 mb-3.5"
            />
          )}

          {/* 4. Supporting Subtitle Description */}
          <p className="text-xs sm:text-sm text-[#5C6670] leading-relaxed max-w-3xl font-normal pt-0.5">
            {description}
          </p>
        </div>

        {/* Action Slot on Right (Desktop/Tablet) or Below (Mobile) */}
        {actionSlot && (
          <div className="shrink-0 flex items-center lg:self-end pt-1 lg:pt-0">
            {actionSlot}
          </div>
        )}
      </div>
    </header>
  );
}
