"use client";

import Image from "next/image";
import { Factory, MapPin, Maximize2, CheckCircle2, Cog, ZoomIn, Building2, Phone, Mail, Clock, FileText, Download, ExternalLink } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_FABRICATION_UNITS, FabricationUnitData } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";
import CustomPdfViewer from "@/components/ui/CustomPdfViewer";

interface Section02FabricationUnitsProps {
  onOpenLightbox?: (img: { url: string; title: string; category: string }) => void;
}

export default function Section02FabricationUnits({ onOpenLightbox }: Section02FabricationUnitsProps) {
  const currentUnit = RDSO_FABRICATION_UNITS[0];

  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="02"
        title="Fabrication Units & Infrastructure"
        description="Heavy structural bridge fabrication facility covering template drafting, CNC cutting, automated SAW welding, hydraulic straightening, SA 2.5 shot blasting, protective painting, and 61m trial assembly beds."
        statusBadge="Unit 1 Plant Verified"
        actionSlot={
          <div className="flex rounded-xl border border-[#39434D]/20 bg-[#E5E8EB] p-1">
            <span className="rounded-lg px-3.5 sm:px-4 py-1.5 text-xs font-bold bg-[#101820] text-[#D6B36A] shadow-xs">
              UNIT 1
            </span>
          </div>
        }
      />

      {/* Current Active Unit Master Showcase */}
      <div className="space-y-8">
        {/* Unit Summary Card */}
        <Reveal direction="up" delay={0.05}>
          <div className="rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-8 shadow-xs relative overflow-hidden space-y-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#39434D]/15 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#D6B36A] bg-[#101820] px-3 py-1 rounded-md">
                    {currentUnit.unitNumber}
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    Active Production Unit
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#101820]">
                  {currentUnit.unitName}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6670] max-w-3xl leading-relaxed font-normal">
                  {currentUnit.facilityDescription}
                </p>
              </div>

              <div className="space-y-2 text-right md:border-l md:border-[#39434D]/15 md:pl-6 shrink-0">
                <div>
                  <span className="text-[11px] font-mono text-[#89939D] block uppercase">Covered Workshop Area</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#101820]">{currentUnit.totalCoveredArea}</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#89939D] block uppercase">Craneage Capacity</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#D6B36A]">{currentUnit.craneCapacity}</span>
                </div>
              </div>
            </div>

            {/* Address Banner */}
            <div className="flex items-start gap-2.5 text-xs text-[#5C6670] bg-[#F5F3EE] p-4 rounded-2xl border border-[#39434D]/15">
              <MapPin className="h-4 w-4 text-[#D6B36A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#101820] font-sans">Full Postal Address: </strong>
                <span>{currentUnit.completeAddress}</span>
              </div>
            </div>

            {/* Registered Office & Contact Details (Integrated inside Unit 1) */}
            {currentUnit.id === "unit-1" && (
              <div className="pt-5 border-t border-[#39434D]/15 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#101820]">
                  <Building2 className="h-4 w-4 text-[#D6B36A]" />
                  <span>REGISTERED OFFICE & OFFICIAL CONTACT DETAILS</span>
                </div>

                {/* Registered Office Address */}
                <div className="p-4 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15 space-y-1">
                  <span className="text-[11px] font-mono text-[#89939D] uppercase block flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#D6B36A]" />
                    Registered Office Address
                  </span>
                  <p className="text-xs sm:text-[13px] font-medium text-[#101820] leading-relaxed">
                    Unit 1 - SF.No. 295/1 & 294/1A, Sembarayanallore Road, Sembarayanallore Village, Thiruvallam, Katpadi Taluk, Vellore Dist. – 632 519, Tamil Nadu, India.
                  </p>
                </div>

                {/* Official Contact Details: Phone & Email side-by-side on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15">
                    <span className="text-[11px] font-mono text-[#89939D] uppercase block flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-[#D6B36A]" />
                      Official Phone
                    </span>
                    <a
                      href="tel:+919789495144"
                      className="font-bold text-[#101820] hover:text-[#D6B36A] flex items-center gap-1.5 mt-1 transition-colors"
                    >
                      +91 97894 95144
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15">
                    <span className="text-[11px] font-mono text-[#89939D] uppercase block flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-[#D6B36A]" />
                      Official Email
                    </span>
                    <a
                      href="mailto:vaishnav.engg2009@gmail.com"
                      className="font-bold text-[#101820] hover:text-[#D6B36A] flex items-center gap-1.5 mt-1 transition-colors truncate"
                    >
                      <span className="truncate">vaishnav.engg2009@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Operating Hours below Contact Details */}
                <div className="p-3.5 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15 flex items-center gap-2.5 text-xs">
                  <Clock className="h-4 w-4 text-[#D6B36A] shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-[#89939D] uppercase mr-2">Operating Hours:</span>
                    <strong className="text-[#101820] font-mono">Monday – Saturday: 08:30 AM – 06:30 PM IST</strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* FACILITY & MACHINERY SPECIFICATIONS - Embedded PDF Document Viewer (Replaced 12 Facility Categories) */}
        <Reveal direction="up" delay={0.1}>
          <div className="rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            {/* Header Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#39434D]/15 pb-5 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#D6B36A] uppercase tracking-wider">
                    Official Production & Machinery Dossier
                  </span>
                  <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    RDSO Compliance Verified
                  </span>
                </div>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#101820]">
                  FACILITY & MACHINERY SPECIFICATIONS
                </h4>
                <p className="text-xs sm:text-sm text-[#5C6670] font-normal">
                  Complete technical dossier, machinery schedules, capacities & calibrated fabrication plant inventory
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="/docs/vaishnav-engineering-facility-machinery-formatted.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F5F3EE] hover:bg-[#E5E8EB] text-[#101820] px-4 py-2.5 text-xs font-bold transition-all border border-[#39434D]/15 cursor-pointer shadow-xs"
                >
                  <ExternalLink className="h-4 w-4 text-[#D6B36A]" />
                  <span>Open in New Tab</span>
                </a>
                <a
                  href="/docs/vaishnav-engineering-facility-machinery-formatted.pdf"
                  download="vaishnav-engineering-facility-machinery-formatted.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2.5 text-xs font-bold transition-all border border-[#D6B36A]/40 cursor-pointer shadow-xs"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Document Meta Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15 text-xs">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#101820] text-[#D6B36A] flex items-center justify-center shrink-0 shadow-xs">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-bold text-[#101820] block text-xs sm:text-sm">
                    Machinery & Facility Specification Dossier
                  </span>
                  <span className="text-[11px] font-mono text-[#5C6670]">
                    Official Plant Equipment & Technical Divisions Record • PDF (3.63 MB)
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                Verified Plant Record
              </span>
            </div>

            {/* Embedded Custom PDF Viewer */}
            <CustomPdfViewer
              src="/docs/vaishnav-engineering-facility-machinery-formatted.pdf"
              title="Vaishnav Engineering Facility & Machinery Specifications"
              height="h-[550px] sm:h-[650px] lg:h-[750px]"
            />
          </div>
        </Reveal>

        {/* SURFACE TESTER INVOICE DOCUMENTATION */}
        <Reveal direction="up" delay={0.15}>
          <div className="rounded-3xl border border-[#39434D]/20 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            {/* Header Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#39434D]/15 pb-5 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#D6B36A] uppercase tracking-wider">
                    Testing Equipment Procurement & Invoice
                  </span>
                  <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Official Tax Invoice
                  </span>
                </div>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#101820]">
                  SURFACE TESTER — TAX INVOICE & SPECIFICATIONS
                </h4>
                <p className="text-xs sm:text-sm text-[#5C6670] font-normal">
                  Commercial procurement tax invoice and technical specification documentation for Surface Roughness Tester
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="/docs/surface-tester-invoice.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F5F3EE] hover:bg-[#E5E8EB] text-[#101820] px-4 py-2.5 text-xs font-bold transition-all border border-[#39434D]/15 cursor-pointer shadow-xs"
                >
                  <ExternalLink className="h-4 w-4 text-[#D6B36A]" />
                  <span>Open in New Tab</span>
                </a>
                <a
                  href="/docs/surface-tester-invoice.pdf"
                  download="Surface-Tester-Invoice-Vaishnav-Engineering.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2.5 text-xs font-bold transition-all border border-[#D6B36A]/40 cursor-pointer shadow-xs"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Document Meta Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#F5F3EE] border border-[#39434D]/15 text-xs">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#101820] text-[#D6B36A] flex items-center justify-center shrink-0 shadow-xs">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-bold text-[#101820] block text-xs sm:text-sm">
                    Surface Roughness Tester — Commercial Invoice
                  </span>
                  <span className="text-[11px] font-mono text-[#5C6670]">
                    Verified Tax Invoice Dossier • Source: Surface tester - Invoice.pdf • PDF (423 KB)
                  </span>
                </div>
              </div>

              <a
                href="/docs/surface-tester-invoice.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold text-[#101820] bg-[#D6B36A] hover:bg-[#C4A055] px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#101820]" />
                <span>View Full PDF</span>
              </a>
            </div>

            {/* Embedded Custom PDF Viewer */}
            <CustomPdfViewer
              src="/docs/surface-tester-invoice.pdf"
              title="Surface Tester Invoice - Vaishnav Engineering"
              height="h-[550px] sm:h-[650px] lg:h-[750px]"
            />
          </div>
        </Reveal>

        {/* Machinery Details Table / Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-heading text-lg font-bold text-[#101820] flex items-center gap-2">
              <Cog className="h-5 w-5 text-[#D6B36A]" />
              Machinery & Equipment Details ({currentUnit.machinery.length} Verified Entries)
            </h4>
            <span className="text-xs font-mono text-[#89939D]">
              Calibrated & Commissioned
            </span>
          </div>

          <div className="rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-[#20262D]">
                <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                  <tr>
                    <th className="px-5 py-3.5">Machine / Equipment Name</th>
                    <th className="px-5 py-3.5">Category</th>
                    <th className="px-5 py-3.5">Qty</th>
                    <th className="px-5 py-3.5">Rated Capacity</th>
                    <th className="px-5 py-3.5">Make / Model</th>
                    <th className="px-5 py-3.5">Technical Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#39434D]/10 bg-white">
                  {currentUnit.machinery.map((m) => (
                    <tr key={m.id} className="hover:bg-[#F5F3EE] transition-colors">
                      <td className="px-5 py-3.5 font-bold text-[#101820]">
                        {m.name}
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#E5E8EB] text-[#101820] border border-[#39434D]/20">
                          {m.category}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-mono font-bold text-[#101820]">
                        {m.quantity}
                      </td>
                      <td className="px-5 py-3.5 font-mono font-bold text-[#D6B36A]">
                        {m.capacity}
                      </td>
                      <td className="px-5 py-3.5 text-xs text-[#5C6670]">
                        {m.make} / {m.model}
                      </td>
                      <td className="px-5 py-3.5 text-xs text-[#5C6670] max-w-xs leading-normal">
                        {m.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Facility Photographs Gallery */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-heading text-lg font-bold text-[#101820] flex items-center gap-2">
              <Maximize2 className="h-5 w-5 text-[#D6B36A]" />
              Facility & Machinery Photographs ({currentUnit.photographs.length} Photos)
            </h4>
            <span className="text-xs font-mono text-[#89939D]">
              Click to view high-resolution photo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentUnit.photographs.map((photo, pIdx) => (
              <div
                key={pIdx}
                onClick={() => onOpenLightbox && onOpenLightbox(photo)}
                className="group relative rounded-2xl overflow-hidden border border-[#39434D]/20 bg-[#101820] shadow-xs cursor-pointer hover:border-[#D6B36A] hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 rounded-full bg-[#101820]/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-bold text-[#D6B36A] border border-[#39434D]">
                    {photo.category}
                  </span>

                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-[#101820] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-3 w-3 text-[#D6B36A]" />
                    <span>Enlarge</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-heading text-xs sm:text-sm font-bold leading-tight drop-shadow-sm">
                      {photo.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

