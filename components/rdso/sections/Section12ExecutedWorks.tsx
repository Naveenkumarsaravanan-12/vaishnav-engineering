"use client";

import { useState, useEffect } from "react";
import {
  HardHat,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ExternalLink,
  Download,
  Eye,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from "lucide-react";
import RdsoSectionHeader from "@/components/rdso/RdsoSectionHeader";
import { RDSO_EXECUTED_WORKS } from "@/data/rdsoData";
import { Reveal } from "@/components/motion";

interface Section12ExecutedWorksProps {
  onOpenLightbox?: (img: { url: string; title: string; category: string }) => void;
  onOpenPdfModal?: (docId: string) => void;
}

export default function Section12ExecutedWorks({ onOpenLightbox, onOpenPdfModal }: Section12ExecutedWorksProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [zoom, setZoom] = useState<number>(100);
  const projectDocUrl = "/docs/vaishnav-engineering-completed-projects-details.pdf";

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
        number="12"
        title="EXECUTED WORKS & SUPPLIES"
        description="A comprehensive record of completed railway bridge girders, composite Road Over Bridges (ROBs), and bowstring steel spans successfully fabricated and inspected by RDSO & SR/FIU."
        statusBadge="7 Completed Projects Verified"
        actionSlot={
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleOpenViewer}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white hover:bg-[#F5F3EE] text-[#101820] px-3.5 py-2 text-xs font-bold border border-[#39434D]/20 shadow-xs transition-all cursor-pointer"
            >
              <Eye className="h-3.5 w-3.5 text-[#D6B36A]" />
              <span>VIEW DOCUMENT</span>
            </button>
            <a
              href={projectDocUrl}
              download="vaishnav-engineering-completed-projects-details.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-[#101820] hover:bg-[#202A33] text-[#D6B36A] px-4 py-2 text-xs font-bold border border-[#D6B36A]/40 shadow-xs transition-all cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>
        }
      />

      <Reveal direction="up" delay={0.05}>
        <div className="space-y-4">
          {/* Section Sub-Header & Summary Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#39434D]/15 pb-4 gap-3">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                Official Completed Bridge Fabrication Register
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101820] flex items-center gap-2 mt-0.5">
                <HardHat className="h-5 w-5 text-[#D6B36A]" />
                COMPLETED PROJECT DETAILS OF VAISHNAV ENGINEERING
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#101820] bg-[#F5F3EE] px-3.5 py-1.5 rounded-lg border border-[#39434D]/15">
                Total Completed Works: <strong className="text-[#D6B36A]">7 Completed Projects</strong>
              </span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                RDSO / FIU Inspected
              </span>
            </div>
          </div>

          {/* Structured 5-Column Engineering Project Table */}
          <div className="rounded-2xl border border-[#39434D]/20 bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-[#20262D]">
                <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                  <tr>
                    <th className="px-5 py-4 w-16 text-center font-mono">S.No</th>
                    <th className="px-6 py-4 w-56 min-w-[200px]">Name of Contractor</th>
                    <th className="px-6 py-4 min-w-[360px] sm:min-w-[460px] lg:min-w-[560px]">Name of Work</th>
                    <th className="px-5 py-4 w-32 min-w-[120px] text-center font-mono">No. of Spans</th>
                    <th className="px-6 py-4 w-40 min-w-[140px] text-center">Inspection Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#39434D]/10 bg-white font-medium">
                  {RDSO_EXECUTED_WORKS.map((project, idx) => (
                    <tr
                      key={project.sNo}
                      className={`transition-colors hover:bg-[#F5F3EE] ${
                        idx % 2 === 1 ? "bg-[#FAF8F5]" : "bg-white"
                      }`}
                    >
                      {/* S.No */}
                      <td className="px-5 py-4 font-mono font-bold text-[#D6B36A] text-center align-top">
                        {project.sNo}
                      </td>

                      {/* Name of Contractor */}
                      <td className="px-6 py-4 font-bold text-[#101820] align-top">
                        <span className="block font-heading text-sm text-[#101820]">
                          {project.contractor}
                        </span>
                      </td>

                      {/* Name of Work (Natural wrap, fully readable, high contrast) */}
                      <td className="px-6 py-4 text-xs sm:text-[13px] text-[#20262D] leading-relaxed align-top font-normal">
                        <p className="max-w-3xl">
                          {project.nameOfWork}
                        </p>
                      </td>

                      {/* No. of Spans */}
                      <td className="px-5 py-4 text-center align-top whitespace-nowrap">
                        <span className="inline-block px-3 py-1 rounded-md bg-[#F5F3EE] border border-[#39434D]/15 font-mono text-xs font-bold text-[#101820]">
                          {project.noOfSpans}
                        </span>
                      </td>

                      {/* Inspection Agency */}
                      <td className="px-6 py-4 text-center align-top whitespace-nowrap">
                        {project.inspectionAgency === "RDSO" ? (
                          <span className="inline-flex items-center gap-1 font-mono text-xs font-bold bg-[#101820] text-[#D6B36A] px-3 py-1 rounded-md border border-[#D6B36A]/30 shadow-2xs">
                            <CheckCircle2 className="h-3 w-3 text-[#D6B36A]" />
                            RDSO
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 font-mono text-xs font-bold bg-[#F5F3EE] text-[#101820] px-3 py-1 rounded-md border border-[#39434D]/20 shadow-2xs">
                            <CheckCircle2 className="h-3 w-3 text-[#5C6670]" />
                            {project.inspectionAgency}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Official Document Card — Placed Immediately Below Table */}
          <div className="rounded-2xl border border-[#39434D]/20 bg-white p-5 sm:p-6 shadow-xs transition-all hover:border-[#D6B36A]/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#101820] text-[#D6B36A] border border-[#D6B36A]/30 shadow-md">
                  <FileText className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#89939D] block">
                    Official Projects Register • PDF (787 KB)
                  </span>
                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#101820]">
                    COMPLETED PROJECT DETAILS — OFFICIAL DOCUMENT
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C6670]">
                    View the official completed project details document of Vaishnav Engineering.
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

                <a
                  href={projectDocUrl}
                  download="vaishnav-engineering-completed-projects-details.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F5F3EE] hover:bg-[#E5E8EB] text-[#101820] px-4 py-2.5 text-xs sm:text-sm font-bold border border-[#39434D]/20 transition-all shadow-2xs active:scale-95"
                >
                  <Download className="h-4 w-4 text-[#D6B36A]" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Dedicated PDF Viewer Modal Overlay (Click-To-Open) */}
      {isViewerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Completed Project Details PDF Viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
          onClick={() => setIsViewerOpen(false)}
        >
          <div
            className="relative flex flex-col w-full h-[95vh] max-w-6xl bg-white rounded-2xl md:rounded-3xl border border-[#39434D]/30 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#101820] border-b border-[#39434D]/30 text-white shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-9 w-9 rounded-xl bg-[#202A33] text-[#D6B36A] flex items-center justify-center shrink-0 border border-[#D6B36A]/30">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-[#F8F7F2] truncate">
                    Completed Project Details of VAISHNAV ENGG.
                  </h4>
                  <span className="text-[11px] font-mono text-[#D6B36A] block truncate">
                    Official Inspection & Track Record Document • RDSO & SR/FIU
                  </span>
                </div>
              </div>

              {/* Viewer Utility Controls & Close */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center bg-[#202A33] rounded-lg border border-[#39434D]/40 p-0.5">
                  <button
                    type="button"
                    onClick={() => setZoom((prev) => Math.max(70, prev - 10))}
                    className="p-1.5 text-[#F8F7F2] hover:text-[#D6B36A] rounded hover:bg-[#101820] transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="px-2 text-xs font-mono text-[#D6B36A] min-w-[45px] text-center">
                    {zoom}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoom((prev) => Math.min(150, prev + 10))}
                    className="p-1.5 text-[#F8F7F2] hover:text-[#D6B36A] rounded hover:bg-[#101820] transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoom(100)}
                    className="p-1.5 text-[#89939D] hover:text-[#F8F7F2] rounded hover:bg-[#101820] transition-colors border-l border-[#39434D]/40"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Open In New Tab */}
                <a
                  href={projectDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-[#202A33] hover:bg-[#2d3a46] text-[#F8F7F2] px-3 py-1.5 text-xs font-semibold border border-[#39434D]/40 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-[#D6B36A]" />
                  <span>Open in Tab</span>
                </a>

                {/* Direct Download in Modal */}
                <a
                  href={projectDocUrl}
                  download="vaishnav-engineering-completed-projects-details.pdf"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#D6B36A] hover:bg-[#c4a159] text-[#101820] px-3 py-1.5 text-xs font-bold transition-all shadow-xs"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsViewerOpen(false)}
                  className="p-1.5 rounded-lg bg-[#202A33] hover:bg-red-900/60 text-[#F8F7F2] hover:text-red-200 border border-[#39434D]/40 transition-colors cursor-pointer ml-1"
                  title="Close (Esc)"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF Canvas */}
            <div className="relative flex-1 w-full bg-[#39434D]/10 overflow-auto flex items-center justify-center p-1 sm:p-3">
              <div
                className="w-full h-full bg-white shadow-lg transition-transform duration-150 origin-top rounded-xl overflow-hidden"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: "top center",
                  height: zoom > 100 ? `${zoom}%` : "100%"
                }}
              >
                <iframe
                  src={`${projectDocUrl}#toolbar=1&navpanes=0&view=FitH`}
                  title="Official Completed Projects Details Document"
                  className="w-full h-full border-0 bg-white"
                />
              </div>
            </div>

            {/* Modal Footer with Quick Helper */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#F5F3EE] border-t border-[#39434D]/15 text-xs text-[#5C6670] shrink-0">
              <span className="font-mono text-[11px]">
                Showing 7 Completed Bridge Projects • Press <kbd className="px-1.5 py-0.5 bg-white border border-[#39434D]/20 rounded text-[10px] text-[#101820] font-bold">Esc</kbd> to close
              </span>
              <span className="font-mono text-[11px] text-[#101820] font-bold">
                Vaishnav Engineering RDSO Compliance
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
