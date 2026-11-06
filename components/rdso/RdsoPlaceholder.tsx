"use client";

import { Clock, FileClock, ShieldAlert, UploadCloud } from "lucide-react";

interface RdsoPlaceholderProps {
  label?: string;
  subtext?: string;
  type?: "field" | "document" | "table-row" | "card";
  className?: string;
}

export default function RdsoPlaceholder({
  label = "Information to be updated",
  subtext = "Official record will be published following next quality audit cycle.",
  type = "field",
  className = ""
}: RdsoPlaceholderProps) {
  if (type === "document") {
    return (
      <div
        className={`rounded-2xl border border-dashed border-[#39434D]/30 bg-[#F5F3EE]/70 p-5 text-center space-y-2 select-none ${className}`}
      >
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#E5E8EB] text-[#5C6670] border border-[#39434D]/20">
          <UploadCloud className="h-5 w-5 text-[#89939D]" />
        </div>
        <p className="font-heading text-xs font-bold text-[#20262D]">{label}</p>
        <p className="text-[11px] text-[#5C6670] max-w-xs mx-auto leading-normal">{subtext}</p>
        <span className="inline-block font-mono text-[10px] text-[#89939D] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#39434D]/20">
          Verification Dossier Pending
        </span>
      </div>
    );
  }

  if (type === "card") {
    return (
      <div
        className={`rounded-2xl border border-dashed border-[#39434D]/25 bg-white/70 p-6 space-y-3 select-none ${className}`}
      >
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#89939D]">
          <Clock className="h-3.5 w-3.5 text-[#D6B36A]" />
          <span>SCHEDULED UPDATE</span>
        </div>
        <h4 className="font-heading text-sm font-bold text-[#20262D]">{label}</h4>
        <p className="text-xs text-[#5C6670] leading-relaxed">{subtext}</p>
        <div className="pt-2 border-t border-[#39434D]/10">
          <span className="font-mono text-[10px] text-[#89939D] uppercase tracking-wider bg-[#F5F3EE] px-2.5 py-1 rounded-md">
            Information to be updated
          </span>
        </div>
      </div>
    );
  }

  // Default: Field placeholder
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg bg-[#E5E8EB]/80 border border-[#39434D]/20 px-3 py-1.5 text-xs text-[#5C6670] select-none ${className}`}
      title="Field maintained for audit record; documentation to be updated"
    >
      <Clock className="h-3.5 w-3.5 text-[#D6B36A] shrink-0" />
      <span className="font-mono text-[11px] font-medium">{label}</span>
    </div>
  );
}

