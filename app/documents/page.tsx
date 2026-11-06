"use client";

import { useState } from "react";
import { FileText, Download, Search, CheckCircle2 } from "lucide-react";
import PdfViewerModal from "@/components/audit/PdfViewerModal";
import { PORTAL_DOCUMENTS, AuditDoc } from "@/data/portalData";
import { AnimatedBackground, Reveal, Counter } from "@/components/motion";

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDoc, setSelectedDoc] = useState<AuditDoc | null>(null);

  const categories = ["All", "Company", "Approvals", "Quality", "Infrastructure"];

  const filteredDocs = PORTAL_DOCUMENTS.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.issuingAuthority.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.version.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-24 font-body selection:bg-[#C6A66B] selection:text-[#101820]">
      {/* Header Banner with Subtle Blueprint Grid */}
      <section className="relative border-b border-[#39434D]/20 bg-white py-12 sm:py-16 shadow-xs overflow-hidden">
        <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.35} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <Reveal direction="left" delay={0.05}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E8EB] px-3.5 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20 mb-3 shadow-2xs">
                  <FileText className="h-4 w-4 text-[#C6A66B]" /> TAB 8: Documents Library Vault
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#20262D]">
                  Searchable PDF Evidence Document Library
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#5C6670] max-w-2xl font-normal leading-relaxed">
                  Centralized statutory credentials, RDSO Part-A approvals, ISO certificates, calibrated equipment reports, and approved Quality Assurance Plans.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <span className="rounded-full bg-[#101820] px-4 py-2 text-xs font-mono font-bold text-[#C6A66B] border border-[#C6A66B]/30 shadow-2xs shrink-0 uppercase tracking-wider">
                <Counter to={PORTAL_DOCUMENTS.length} suffix=" Verified Records" />
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        {/* Search & Filter Controls */}
        <Reveal direction="up" delay={0.05}>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#39434D]/20 bg-white p-6 shadow-sm">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#101820] text-[#C6A66B] border border-[#C6A66B]/30 shadow-xs"
                      : "bg-[#E5E8EB] text-[#5C6670] hover:text-[#20262D] hover:bg-white border border-[#39434D]/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#89939D]" />
              <input
                type="text"
                placeholder="Search title, authority, or standard..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-[#39434D]/25 bg-[#F5F3EE] py-2.5 pl-10 pr-4 text-xs text-[#20262D] placeholder-[#89939D] focus:border-[#C6A66B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C6A66B] transition shadow-2xs"
              />
            </div>
          </div>
        </Reveal>

        {/* Central Document Vault Table */}
        <Reveal direction="up" delay={0.12}>
          <section className="relative overflow-hidden rounded-3xl border border-[#39434D]/20 bg-white shadow-sm">
            <AnimatedBackground variant="blueprint-grid" theme="light" opacity={0.25} />
            
            <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-left text-sm text-[#20262D]">
                <thead className="border-b border-[#39434D] bg-[#101820] text-xs font-bold uppercase tracking-wider text-[#F8F7F2]">
                  <tr>
                    <th className="px-6 py-4">Document Title & Authority</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Ref / Version</th>
                    <th className="px-6 py-4">Validity Date</th>
                    <th className="px-6 py-4">Audit Status</th>
                    <th className="px-6 py-4 text-right">PDF Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#39434D]/10 bg-white/90">
                  {filteredDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-[#F5F3EE] transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-[#20262D] text-sm leading-snug">{doc.title}</p>
                        <p className="text-xs text-[#5C6670] font-medium mt-1">{doc.issuingAuthority}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-[#E5E8EB] px-3 py-1 text-xs font-mono font-bold text-[#20262D] border border-[#39434D]/20">
                          {doc.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-[#89939D] font-semibold">{doc.version}</td>
                      <td className="px-6 py-4 font-mono text-xs text-[#20262D] font-bold">{doc.validity}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101820] px-3 py-1 text-xs font-bold text-[#C6A66B] border border-[#C6A66B]/30 shadow-2xs">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> {doc.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedDoc(doc)}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-[#C6A66B] hover:bg-[#D8B97E] px-4 py-2.5 text-xs font-bold text-[#101820] shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
                        >
                          <Download className="h-3.5 w-3.5" /> Preview PDF ({doc.fileSize})
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>
      </div>

      <PdfViewerModal doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
    </div>
  );
}
