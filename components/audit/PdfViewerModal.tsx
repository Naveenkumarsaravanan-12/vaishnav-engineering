"use client";

import { useState } from "react";
import { X, Download, ShieldCheck, FileText, CheckCircle2, Calendar, ExternalLink } from "lucide-react";
import { AuditDoc } from "@/data/portalData";

interface PdfViewerModalProps {
  doc: AuditDoc | null;
  onClose: () => void;
}

export default function PdfViewerModal({ doc, onClose }: PdfViewerModalProps) {
  const [downloading, setDownloading] = useState(false);

  if (!doc) return null;

  const hasRealPdf = Boolean(doc.fileUrl) || doc.id === "doc-1" || doc.id === "doc-2" || doc.id === "doc-3" || doc.id === "doc-4" || doc.id === "doc-5" || doc.id === "doc-6" || doc.id === "doc-10";

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      if (hasRealPdf && doc.fileUrl) {
        const a = document.createElement("a");
        a.href = doc.fileUrl;
        a.download = doc.fileUrl.split("/").pop() || `${doc.id}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setDownloading(false);
        return;
      }
      const content = `RDSO AUDIT PORTAL OFFICIAL DOCUMENT VERIFICATION\n--------------------------------------------\nDocument Title: ${doc.title}\nCategory: ${doc.category}\nVersion/Reference: ${doc.version}\nValidity: ${doc.validity}\nIssuing Authority: ${doc.issuingAuthority}\nStatus: ${doc.status}\n\nThis is an official verification record generated for Vaishnav Engineering RDSO Audit Portal.`;
      const blob = new Blob([content], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${doc.id}-${doc.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      setDownloading(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101820]/90 p-3 sm:p-5 backdrop-blur-md">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#39434D]/30 bg-white shadow-2xl font-body flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#39434D]/15 bg-[#F5F3EE] px-6 sm:px-8 py-5">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-2xs">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101820] px-2.5 py-0.5 text-xs font-bold text-[#C6A66B] border border-[#C6A66B]/30">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C6A66B]" /> Audit Verified Evidence
              </span>
              <h3 className="font-heading mt-1 text-base sm:text-xl font-bold text-[#20262D] leading-snug">{doc.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5E8EB] hover:bg-[#101820] text-[#20262D] hover:text-[#F8F7F2] transition cursor-pointer border border-[#39434D]/20"
            title="Close Preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-white">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl border border-[#39434D]/15 bg-[#F5F3EE] p-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#89939D] font-mono">Category</p>
              <p className="mt-1 text-sm font-bold text-[#20262D]">{doc.category}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#89939D] font-mono">Ref / Version</p>
              <p className="mt-1 text-sm font-bold text-[#C6A66B] font-mono">{doc.version}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#89939D] font-mono">Validity Date</p>
              <p className="mt-1 text-sm font-bold text-[#20262D] flex items-center gap-1 font-mono">
                <Calendar className="h-3.5 w-3.5 text-[#C6A66B]" /> {doc.validity}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#89939D] font-mono">Audit Status</p>
              <p className="mt-1 text-sm font-bold text-[#C6A66B] flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> {doc.status}
              </p>
            </div>
          </div>

          {/* Document Preview Box */}
          <div className="rounded-2xl border border-[#39434D]/20 bg-white p-6 sm:p-7 shadow-xs">
            <div className="flex flex-wrap items-center justify-between border-b border-[#39434D]/15 pb-4 mb-5 gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#89939D] font-mono">Issuing Authority</p>
                <p className="text-base font-bold text-[#20262D]">{doc.issuingAuthority}</p>
              </div>
              <span className="rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs text-[#20262D] font-mono font-bold border border-[#39434D]/20">
                {doc.fileSize}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#5C6670] mb-6 font-normal">{doc.description}</p>

            {/* Real PDF Embedded Preview or Simulated Graphic */}
            {hasRealPdf ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#5C6670]">
                  <span className="flex items-center gap-1.5 text-[#20262D] font-bold">
                    <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" /> Live Document Preview
                  </span>
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#C6A66B] hover:text-[#20262D] font-bold hover:underline"
                  >
                    Open in New Tab <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#39434D]/20 bg-[#F5F3EE] shadow-inner h-[500px]">
                  <iframe
                    src={`${doc.fileUrl}#toolbar=1&navpanes=0`}
                    title={doc.title}
                    className="w-full h-full bg-white border-0"
                  />
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl border-2 border-dashed border-[#39434D]/30 bg-[#F5F3EE] p-8 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#C6A66B] border border-[#39434D]/20">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#89939D] font-mono font-bold">GOVERNMENT OF INDIA / RDSO AUDIT COMPLIANT</p>
                  <p className="font-heading text-lg font-bold text-[#20262D] mt-1">VAISHNAV ENGINEERING OFFICIAL RECORD</p>
                  <p className="text-xs text-[#5C6670] mt-1 font-mono">Reference: {doc.version} | Status: Verified Active</p>
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-[#20262D] bg-white px-4 py-2 rounded-full border border-[#39434D]/20 shadow-2xs font-medium">
                  <span>Valid Inspector Document Copy</span> • <span>Ready for immediate audit review</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-[#39434D]/15 bg-[#F5F3EE] px-6 sm:px-8 py-4.5">
          <button
            onClick={onClose}
            className="rounded-xl border border-[#39434D]/30 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#20262D] hover:bg-[#E5E8EB] transition cursor-pointer"
          >
            Close Preview
          </button>
          {hasRealPdf ? (
            <a
              href={doc.fileUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#101820] shadow-md transition active:scale-95"
            >
              <Download className="h-4 w-4" /> Download Official PDF ({doc.fileSize})
            </a>
          ) : (
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#101820] shadow-md disabled:opacity-50 transition cursor-pointer active:scale-95"
            >
              {downloading ? (
                <>Generating PDF Download...</>
              ) : (
                <>
                  <Download className="h-4 w-4" /> Download Official PDF ({doc.fileSize})
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
