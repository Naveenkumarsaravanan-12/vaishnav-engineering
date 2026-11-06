"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ShieldCheck, Download, ExternalLink, ArrowUp } from "lucide-react";
import RdsoHero from "@/components/rdso/RdsoHero";
import RdsoStickyNav from "@/components/rdso/RdsoStickyNav";
import Section01Ownership from "@/components/rdso/sections/Section01Ownership";
import Section02FabricationUnits from "@/components/rdso/sections/Section02FabricationUnits";
import Section03RdsoApproval from "@/components/rdso/sections/Section03RdsoApproval";
import Section04FirmRegistration from "@/components/rdso/sections/Section04FirmRegistration";
import Section05FactoryLicence from "@/components/rdso/sections/Section05FactoryLicence";
import Section06IsoCertification from "@/components/rdso/sections/Section06IsoCertification";
import Section07OrgStructure from "@/components/rdso/sections/Section07OrgStructure";
import Section08TestingFacilities from "@/components/rdso/sections/Section08TestingFacilities";
import Section09MandatoryApprovals from "@/components/rdso/sections/Section09MandatoryApprovals";
import Section10ArtisansWorkforce from "@/components/rdso/sections/Section10ArtisansWorkforce";
import Section11PowerInfrastructure from "@/components/rdso/sections/Section11PowerInfrastructure";
import Section12ExecutedWorks from "@/components/rdso/sections/Section12ExecutedWorks";
import Section13WorksInHand from "@/components/rdso/sections/Section13WorksInHand";
import PdfViewerModal from "@/components/audit/PdfViewerModal";
import { PORTAL_DOCUMENTS, AuditDoc } from "@/data/portalData";
import { RDSO_SECTIONS_DIRECTORY } from "@/data/rdsoData";

export default function RdsoPortalPage() {
  const [activeSection, setActiveSection] = useState<string>("sec-01");
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<{ url: string; title: string; category: string } | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll Spy Observer to track 13 compliance sections
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);

    const sectionIds = RDSO_SECTIONS_DIRECTORY.map((s) => s.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.2]
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const selectedDoc: AuditDoc | null = selectedDocId
    ? PORTAL_DOCUMENTS.find((d) => d.id === selectedDocId) || {
        id: selectedDocId,
        title: "Official Verification Record",
        category: "Approvals",
        version: "Active",
        validity: "Permanent",
        status: "Approved",
        issuingAuthority: "RDSO Lucknow, Ministry of Railways",
        fileSize: "PDF Document",
        fileUrl: "/docs/rdso-vendor-directory-certificate.pdf",
        description: "Official statutory record published by Vaishnav Engineering Quality Assurance Cell."
      }
    : null;

  return (
    <div className="bg-[#F5F3EE] text-[#20262D] min-h-screen pb-32 font-body selection:bg-[#D6B36A] selection:text-[#101820]">
      {/* 1. Hero Content */}
      <RdsoHero
        onOpenPdfModal={(docId) => setSelectedDocId(docId)}
        onScrollToSection={scrollToSection}
      />

      {/* 2. Sticky Sub-Navigation Bar */}
      <RdsoStickyNav
        activeSection={activeSection}
        onScrollToSection={scrollToSection}
      />

      {/* 3. Main 13 Compliance Sections Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-20 sm:space-y-28">
        {/* SECTION 01: OWNERSHIP DETAILS */}
        <section id="sec-01" className="scroll-mt-36">
          <Section01Ownership />
        </section>

        {/* SECTION 02: FABRICATION UNITS */}
        <section id="sec-02" className="scroll-mt-36">
          <Section02FabricationUnits
            onOpenLightbox={(img) => setLightboxImg(img)}
          />
        </section>

        {/* SECTION 03: RDSO APPROVAL DETAILS */}
        <section id="sec-03" className="scroll-mt-36">
          <Section03RdsoApproval
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
          />
        </section>

        {/* SECTION 04: FIRM REGISTRATION DETAILS */}
        <section id="sec-04" className="scroll-mt-36">
          <Section04FirmRegistration
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
          />
        </section>

        {/* SECTION 05: FACTORY LICENCE DETAILS */}
        <section id="sec-05" className="scroll-mt-36">
          <Section05FactoryLicence
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
          />
        </section>

        {/* SECTION 06: ISO 9001 CERTIFICATION */}
        <section id="sec-06" className="scroll-mt-36">
          <Section06IsoCertification
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
          />
        </section>

        {/* SECTION 07: ORGANISATION STRUCTURE */}
        <section id="sec-07" className="scroll-mt-36">
          <Section07OrgStructure />
        </section>

        {/* SECTION 08: TESTING FACILITIES */}
        <section id="sec-08" className="scroll-mt-36">
          <Section08TestingFacilities
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
            onOpenLightbox={(img) => setLightboxImg(img)}
          />
        </section>

        {/* SECTION 09: MANDATORY APPROVALS */}
        <section id="sec-09" className="scroll-mt-36">
          <Section09MandatoryApprovals
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
          />
        </section>

        {/* SECTION 10: ARTISANS AND WORKFORCE */}
        <section id="sec-10" className="scroll-mt-36">
          <Section10ArtisansWorkforce
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
          />
        </section>

        {/* SECTION 11: POWER INFRASTRUCTURE */}
        <section id="sec-11" className="scroll-mt-36">
          <Section11PowerInfrastructure
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
          />
        </section>

        {/* SECTION 12: EXECUTED WORKS — LAST FIVE YEARS */}
        <section id="sec-12" className="scroll-mt-36">
          <Section12ExecutedWorks
            onOpenLightbox={(img) => setLightboxImg(img)}
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
          />
        </section>

        {/* SECTION 13: WORKS IN HAND */}
        <section id="sec-13" className="scroll-mt-36">
          <Section13WorksInHand
            onOpenPdfModal={(docId) => setSelectedDocId(docId)}
          />
        </section>
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#101820] text-[#D6B36A] shadow-xl border border-[#D6B36A]/40 hover:bg-[#202A33] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Return to top"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Global PDF Viewer Modal */}
      <PdfViewerModal
        doc={selectedDoc}
        onClose={() => setSelectedDocId(null)}
      />

      {/* Global Image Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#101820]/95 backdrop-blur-md p-4 select-none"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-black border border-[#39434D] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-[#101820] px-6 py-4 border-b border-[#39434D]">
              <div>
                <span className="text-[11px] font-mono text-[#D6B36A] uppercase tracking-wider">
                  {lightboxImg.category}
                </span>
                <h3 className="font-heading text-base font-bold text-white mt-0.5">
                  {lightboxImg.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#202A33] text-white hover:bg-white hover:text-[#101820] transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0A1118]">
              <Image
                src={lightboxImg.url}
                alt={lightboxImg.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

