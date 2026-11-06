"use client";

import { ReactNode } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion";

interface RdsoSectionHeaderProps {
  number: string;
  title: string;
  description: string;
  statusBadge?: string;
  isVerified?: boolean;
  actionSlot?: ReactNode;
}

export default function RdsoSectionHeader({
  number,
  title,
  description,
  statusBadge = "RDSO Compliance Verified",
  isVerified = true,
  actionSlot
}: RdsoSectionHeaderProps) {
  return (
    <div className="border-b border-[#39434D]/20 pb-5 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <Reveal direction="left" delay={0.05}>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-black tracking-widest text-[#101820] bg-gradient-to-r from-[#D6B36A] to-[#C6A66B] px-2.5 py-0.5 rounded-md shadow-2xs">
              SECTION {number}
            </span>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-mono font-bold border ${
                isVerified
                  ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                  : "bg-amber-50 text-amber-800 border-amber-300"
              }`}
            >
              {isVerified ? (
                <>
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  <span>{statusBadge}</span>
                </>
              ) : (
                <>
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>{statusBadge}</span>
                </>
              )}
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#101820]">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-[#5C6670] max-w-3xl leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </Reveal>

      {actionSlot && (
        <Reveal direction="right" delay={0.1}>
          <div className="shrink-0">{actionSlot}</div>
        </Reveal>
      )}
    </div>
  );
}

