"use client";

import Image from "next/image";
import { FlaskConical, Eye, CheckCircle2, ZoomIn, FileText } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_TESTING_FACILITIES } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";

interface Section08TestingFacilitiesProps {
  onOpenPdfModal: (docId: string) => void;
  onOpenLightbox?: (img: { url: string; title: string; category: string }) => void;
}

export default function Section08TestingFacilities({
  onOpenPdfModal,
  onOpenLightbox
}: Section08TestingFacilitiesProps) {
  // Only keep Outsourced testing facilities
  const outsourcedFacilities = RDSO_TESTING_FACILITIES.filter((f) =>
    f.facilityType.toLowerCase().includes("outsourced")
  );

  const testingDocUrl = "/docs/vaishnav-engineering-barath-scan-ndt-testing.pdf";

  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="08"
        title="Testing Facilities & Non-Destructive Testing (NDT)"
        description="Comprehensive testing capabilities covering dimensional metrology, spectrometer chemical testing, Charpy impact mechanical testing, and ASNT/AERB certified NDT (DPT, UT/PAUT, RT)."
        statusBadge="NABL & AERB Compliant"
        actionSlot={
          <div className="flex rounded-xl border border-[#39434D]/20 bg-[#E5E8EB] p-1">
            <span className="rounded-lg px-3.5 sm:px-4 py-1.5 text-xs font-bold bg-[#101820] text-[#D6B36A] shadow-xs">
              Outsourced
            </span>
          </div>
        }
      />

      {/* Distinction Summary Banner */}
      <Reveal direction="up" delay={0.05}>
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#39434D]/20 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D6B36A] text-[#101820] shrink-0">
              <FlaskConical className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-[#101820]">
                Outsourced NABL & AERB Testing
              </h4>
              <p className="text-xs text-[#5C6670] mt-0.5">
                Barath Metallurgical Lab (NABL #TC-16221) & AERB Industrial Radiography Approval
              </p>
            </div>
          </div>
          <span className="font-mono text-xs font-bold text-[#101820] bg-[#D6B36A] px-3 py-1 rounded-md shrink-0">
            3 Accreditations
          </span>
        </div>
      </Reveal>

      {/* Outsourced Facility Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outsourcedFacilities.map((facility, idx) => (
          <div
            key={facility.sNo}
            className="rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#D6B36A] hover:shadow-md transition-all"
          >
            <div className="space-y-4">
              {/* Header with Type & Accreditation Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#39434D]/15 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#101820] bg-[#E5E8EB] px-2.5 py-0.5 rounded">
                    CAT 0{idx + 1}
                  </span>
                  <span className="font-heading text-xs font-black uppercase text-[#D6B36A] tracking-wider">
                    {facility.testingType}
                  </span>
                </div>

                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  {facility.facilityType}
                </span>
              </div>

              {/* Facility Name & Description */}
              <div>
                <h4 className="font-heading text-lg font-bold text-[#101820] leading-snug">
                  {facility.facilityName}
                </h4>
                <p className="text-xs text-[#5C6670] mt-2 leading-relaxed font-normal">
                  {facility.description}
                </p>
              </div>

              {/* Equipment Details Field */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#39434D]/15 text-xs space-y-1">
                <span className="text-[10.5px] font-mono text-[#89939D] uppercase tracking-wider block">
                  Equipment Details & Models:
                </span>
                <p className="text-[#101820] font-medium leading-relaxed">
                  {facility.equipmentDetails}
                </p>
              </div>

              {/* Agency Name */}
              <div className="text-xs">
                <span className="text-[11px] font-mono text-[#89939D] uppercase block">Agency / Laboratory Name</span>
                <strong className="text-[#101820] font-semibold mt-0.5 block">{facility.laboratoryAgencyName}</strong>
              </div>

              {/* Optional Photograph Preview */}
              {facility.photographs.length > 0 && (
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-[#89939D] block mb-1.5">
                    Inspection Setup Photo:
                  </span>
                  <div
                    onClick={() =>
                      onOpenLightbox &&
                      onOpenLightbox({
                        url: facility.photographs[0],
                        title: facility.facilityName,
                        category: facility.testingType
                      })
                    }
                    className="relative h-28 w-full rounded-xl overflow-hidden border border-[#39434D]/20 cursor-pointer group"
                  >
                    <Image
                      src={facility.photographs[0]}
                      alt={facility.facilityName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold text-[#101820]">
                      <ZoomIn className="h-3 w-3 text-[#D6B36A]" />
                      <span>Enlarge Photo</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Supporting Document Link */}
            <div className="pt-3 border-t border-[#39434D]/15 flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-[#89939D] truncate max-w-[200px]">
                {facility.supportingDocument.title}
              </span>

              {facility.supportingDocument.docUrl ? (
                <button
                  type="button"
                  onClick={() => onOpenPdfModal("doc-6")}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-3 py-1.5 text-xs font-bold transition-all cursor-pointer"
                >
                  <Eye className="h-3 w-3" />
                  <span>View NABL Cert</span>
                </button>
              ) : (
                <span className="text-[11px] font-mono text-[#5C6670] bg-[#E5E8EB] px-2.5 py-1 rounded">
                  {facility.supportingDocument.ref}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* TESTING DOCUMENTATION - Click-to-Open Document Preview Card */}
      <Reveal direction="up" delay={0.1}>
        <div
          onClick={() => onOpenPdfModal("doc-15")}
          className="group cursor-pointer rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-7 shadow-xs hover:border-[#D6B36A] hover:shadow-md transition-all duration-300 space-y-4"
        >
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#39434D]/15 pb-4 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#D6B36A] uppercase tracking-wider">
                  Accreditation & Inspection Records
                </span>
                <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  NABL / TC-16221 Verified
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101820] group-hover:text-[#D6B36A] transition-colors">
                BARATH SCAN — TESTING & NDT DOCUMENTATION
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6670] font-normal">
                Technical Certificates, Testing Reports & Accreditation Documents
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenPdfModal("doc-15");
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2.5 text-xs font-bold transition-all border border-[#D6B36A]/40 shadow-xs cursor-pointer active:scale-95 shrink-0"
            >
              <Eye className="h-4 w-4" />
              <span>Preview Dossier</span>
            </button>
          </div>

          {/* Document Meta Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15 text-xs">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#101820] text-[#D6B36A] flex items-center justify-center shrink-0 shadow-xs">
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <span className="font-bold text-[#101820] block text-xs sm:text-sm">
                  Barath Scan NDT Testing & Inspection Dossier
                </span>
                <span className="text-[11px] font-mono text-[#5C6670]">
                  Official Metallurgical & Non-Destructive Testing Dossier • PDF (266 KB)
                </span>
              </div>
            </div>

            <span className="text-[#D6B36A] font-mono font-bold flex items-center gap-1 group-hover:underline">
              <Eye className="h-3.5 w-3.5" /> Click to open full PDF preview
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

