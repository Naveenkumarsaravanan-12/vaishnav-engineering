"use client";

import { useState, useEffect } from "react";
import { Users, ShieldCheck, FileText, Eye, X, ZoomIn, ZoomOut, RotateCcw, ExternalLink } from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_STAFF_DETAILS } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";
import CustomPdfViewer from "@/components/ui/CustomPdfViewer";

interface Section10ArtisansWorkforceProps {
  onOpenPdfModal?: (docId: string) => void;
}

export default function Section10ArtisansWorkforce({ onOpenPdfModal }: Section10ArtisansWorkforceProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [zoom, setZoom] = useState<number>(100);
  const staffDocUrl = "/docs/vaishnav-engineering-staff-details.pdf";

  // Prevent background scrolling and handle Escape key when modal is open
  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsViewerOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isViewerOpen]);

  const handleOpenViewer = () => {
    setZoom(100);
    setIsViewerOpen(true);
  };

  return (
    <div className="space-y-8">
      <RdsoSectionHeader
        number="10"
        category="WORKFORCE & ARTISANS"
        title="Staff Details of Vaishnav Engineering"
        description="Comprehensive technical roster and workforce muster roll spanning management, engineering, quality control, operations, and skilled plant operatives."
        statusBadge="31 Technical Staff Verified"
        actionSlot={
          <button
            type="button"
            onClick={handleOpenViewer}
            className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2 text-xs font-bold border border-[#D6B36A]/40 shadow-xs transition-all cursor-pointer active:scale-95"
          >
            <Eye className="h-4 w-4" />
            <span>PREVIEW DOCUMENT</span>
          </button>
        }
      />

      {/* Main Staff Details Card */}
      <Reveal direction="up" delay={0.05}>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#39434D]/15 pb-4 gap-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                Official Technical Roster
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101820] flex items-center gap-2 mt-0.5">
                <Users className="h-5 w-5 text-[#D6B36A]" />
                STAFF DETAILS OF VAISHNAV ENGG.
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#101820] bg-[#F5F3EE] px-3 py-1 rounded-lg border border-[#39434D]/15">
                Total Strength: <strong className="text-[#D6B36A]">{RDSO_STAFF_DETAILS.length} Personnel</strong>
              </span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Verified
              </span>
            </div>
          </div>

          {/* Professional 5-Column Responsive Employee Information Table */}
          <div className="rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-[#20262D]">
                <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                  <tr>
                    <th className="px-5 py-4 w-16 text-center font-mono">S.No</th>
                    <th className="px-6 py-4 min-w-[180px]">Name</th>
                    <th className="px-6 py-4 min-w-[170px]">Designation</th>
                    <th className="px-6 py-4 min-w-[160px]">Qualification</th>
                    <th className="px-6 py-4 min-w-[130px] text-center font-mono">Experience</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#39434D]/10 bg-white font-medium">
                  {RDSO_STAFF_DETAILS.map((staff, idx) => (
                    <tr
                      key={staff.sNo}
                      className={`transition-colors hover:bg-[#F5F3EE] ${
                        idx % 2 === 1 ? "bg-[#FAF8F5]" : "bg-white"
                      }`}
                    >
                      <td className="px-5 py-3.5 font-mono font-bold text-[#D6B36A] text-center">
                        {staff.sNo}
                      </td>
                      <td className="px-6 py-3.5 font-bold text-[#101820] whitespace-nowrap">
                        {staff.name}
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap">
                        <span className="font-semibold text-[#101820]">
                          {staff.designation}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap font-mono text-xs text-[#5C6670]">
                        {staff.qualification}
                      </td>
                      <td className="px-6 py-3.5 font-mono font-bold text-[#101820] text-center whitespace-nowrap">
                        <span className="inline-block px-3 py-1 rounded-md bg-[#F5F3EE] border border-[#39434D]/15 text-xs font-bold text-[#101820]">
                          {staff.experience}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Professional Click-To-Open Document Card (No permanently visible embed) */}
      <Reveal direction="up" delay={0.08}>
        <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 sm:p-7 shadow-xs hover:border-[#D6B36A] transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#101820] text-[#D6B36A] border border-[#D6B36A]/30 shadow-md">
                <FileText className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                  Official Technical Document • PDF (780 KB)
                </span>
                <h4 className="font-heading text-base sm:text-lg font-bold text-[#101820]">
                  STAFF DETAILS OF VAISHNAV ENGG.
                </h4>
                <p className="text-xs sm:text-sm text-[#5C6670]">
                  View the official staff details document.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-2 sm:pt-0">
              <button
                type="button"
                onClick={handleOpenViewer}
                className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-5 py-2.5 text-xs sm:text-sm font-bold border border-[#D6B36A]/40 shadow-sm transition-all cursor-pointer active:scale-95"
              >
                <Eye className="h-4 w-4" />
                <span>VIEW DOCUMENT</span>
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Dedicated PDF Viewer Modal Overlay (Click-To-Open) */}
      {isViewerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="staff-doc-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#101820]/90 p-3 sm:p-5 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsViewerOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-[#39434D]/30 bg-white shadow-2xl font-body flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#39434D]/15 bg-[#F5F3EE] px-5 sm:px-8 py-4 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#101820] text-[#D6B36A] border border-[#D6B36A]/30 shadow-2xs shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#101820] px-2.5 py-0.5 text-[11px] font-bold text-[#D6B36A] border border-[#D6B36A]/30 font-mono">
                      <ShieldCheck className="h-3 w-3 text-[#D6B36A]" /> Verified Record
                    </span>
                    <span className="text-[11px] font-mono text-[#89939D]">780 KB • PDF</span>
                  </div>
                  <h3 id="staff-doc-modal-title" className="font-heading text-base sm:text-lg font-bold text-[#101820] mt-0.5">
                    STAFF DETAILS OF VAISHNAV ENGG.
                  </h3>
                </div>
              </div>

              {/* Controls: Zoom In, Zoom Out, Reset, Open in New Tab, Close */}
              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center gap-1 rounded-xl bg-white border border-[#39434D]/20 px-2 py-1 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setZoom((z) => Math.max(z - 15, 60))}
                    className="p-1 rounded-md text-[#5C6670] hover:text-[#101820] hover:bg-[#F5F3EE] transition cursor-pointer"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="text-xs font-mono font-bold text-[#101820] px-1 min-w-[45px] text-center">
                    {zoom}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoom((z) => Math.min(z + 15, 200))}
                    className="p-1 rounded-md text-[#5C6670] hover:text-[#101820] hover:bg-[#F5F3EE] transition cursor-pointer"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoom(100)}
                    className="p-1 rounded-md text-[#89939D] hover:text-[#101820] hover:bg-[#F5F3EE] transition ml-1 cursor-pointer"
                    title="Reset Zoom (100%)"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>

                <a
                  href={staffDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 rounded-xl border border-[#39434D]/20 bg-white px-3 py-1.5 text-xs font-bold text-[#101820] hover:bg-[#F5F3EE] transition shadow-2xs"
                  title="Open in new browser tab"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-[#D6B36A]" />
                  <span>New Tab</span>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsViewerOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5E8EB] hover:bg-[#101820] text-[#101820] hover:text-[#F8F7F2] transition cursor-pointer border border-[#39434D]/20"
                  title="Close Viewer (Esc)"
                  aria-label="Close Viewer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Document Body: Custom Canvas PDF Display without browser toolbar */}
            <div className="flex-1 overflow-auto bg-[#20262D] p-2 sm:p-4 min-h-[500px] max-h-[75vh] flex justify-center">
              <CustomPdfViewer
                src={staffDocUrl}
                title="STAFF DETAILS OF VAISHNAV ENGG. - Official PDF Document"
                height="h-[72vh] min-h-[500px]"
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-between border-t border-[#39434D]/15 bg-[#F5F3EE] px-5 sm:px-8 py-3.5">
              <button
                type="button"
                onClick={() => setIsViewerOpen(false)}
                className="rounded-xl border border-[#39434D]/30 bg-white px-5 py-2 text-xs sm:text-sm font-bold text-[#20262D] hover:bg-[#E5E8EB] transition cursor-pointer"
              >
                Close Viewer (Esc)
              </button>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Verified Personnel Roll</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
