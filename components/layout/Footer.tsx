import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { COMPANY_DETAILS, RDSO_APPROVAL_INFO } from "@/data/portalData";
import AnimatedBackground from "@/components/motion/AnimatedBackground";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#39434D] bg-[#101820] text-[#89939D] text-sm">
      <AnimatedBackground variant="gradient-flow" theme="dark" opacity={0.65} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Column 1: Company Profile */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3 shrink-0 select-none">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl shadow-xs bg-white p-1 border border-white/20 ring-1 ring-[#C6A66B]/30 flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="Vaishnav Engineering"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center shrink-0">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-heading text-base font-extrabold text-[#F8F7F2] tracking-tight whitespace-nowrap">
                    VAISHNAV
                  </span>
                  <span className="font-heading text-base font-extrabold text-[#C6A66B] tracking-tight whitespace-nowrap">
                    ENGINEERING
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-[#89939D] uppercase font-semibold whitespace-nowrap mt-1.5 leading-none">
                  RDSO Category-A Vendor
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#89939D] font-medium">
              RDSO-approved railway bridge fabrication and heavy engineering manufacturer. Supplying structural steel components, open web girders, and composite girders to Indian Railways.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-xl bg-[#202A33] px-3.5 py-1.5 text-xs font-semibold text-[#C6A66B] border border-[#39434D]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A66B]" /> 100% Audit Readiness
            </div>
          </div>

          {/* Column 2: Audit Navigation */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#F8F7F2] mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A66B]" />
              Inspection Portal Tabs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/rdso" className="text-[#C6A66B] font-semibold hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  ★ RDSO Information Portal (13 Secs)
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-[#89939D] hover:text-[#C6A66B] hover:translate-x-0.5 transition-all inline-block">
                  1. Ownership & Registration
                </Link>
              </li>
              <li>
                <Link href="/approvals/rdso" className="text-[#89939D] hover:text-[#C6A66B] hover:translate-x-0.5 transition-all inline-block">
                  2. RDSO & ISO Approvals
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-[#89939D] hover:text-[#C6A66B] hover:translate-x-0.5 transition-all inline-block">
                  3. Facility, Machines & Power
                </Link>
              </li>
              <li>
                <Link href="/workforce" className="text-[#89939D] hover:text-[#C6A66B] hover:translate-x-0.5 transition-all inline-block">
                  4. Org Chart & Artisans
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#89939D] hover:text-[#C6A66B] hover:translate-x-0.5 transition-all inline-block">
                  5. Executed Works & Works in Hand
                </Link>
              </li>
              <li>
                <Link href="/documents" className="text-[#89939D] hover:text-[#C6A66B] hover:translate-x-0.5 transition-all inline-block">
                  6. Document PDF Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: RDSO & Statutory Info */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#F8F7F2] mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A66B]" />
              Statutory & Compliance
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-[#89939D]">
              <li><span className="text-[#F8F7F2] font-semibold">RDSO Reg:</span> {RDSO_APPROVAL_INFO.registrationId}</li>
              <li><span className="text-[#F8F7F2] font-semibold">Item No:</span> {RDSO_APPROVAL_INFO.itemNo}</li>
              <li><span className="text-[#F8F7F2] font-semibold">UDYAM:</span> {COMPANY_DETAILS.udyam}</li>
              <li><span className="text-[#F8F7F2] font-semibold">GSTIN:</span> {COMPANY_DETAILS.gstin}</li>
              <li><span className="text-[#F8F7F2] font-semibold">CIN / Reg:</span> {COMPANY_DETAILS.cin}</li>
              <li><span className="text-[#F8F7F2] font-semibold">Licence:</span> {COMPANY_DETAILS.factoryLicence}</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3.5">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#F8F7F2] mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A66B]" />
              Works & Plant Location
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#89939D]">
              <MapPin className="h-4 w-4 shrink-0 text-[#C6A66B] mt-0.5" />
              <span className="leading-relaxed">{COMPANY_DETAILS.registeredAddress}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#89939D]">
              <Phone className="h-4 w-4 shrink-0 text-[#C6A66B]" />
              <a href="tel:+919789495144" className="hover:text-[#F8F7F2] transition-colors font-medium">{COMPANY_DETAILS.phone}</a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#89939D]">
              <Mail className="h-4 w-4 shrink-0 text-[#C6A66B]" />
              <a href="mailto:vaishnav.engg2009@gmail.com" className="hover:text-[#F8F7F2] transition-colors font-medium">{COMPANY_DETAILS.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#39434D] pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#89939D]">
          <p>© {new Date().getFullYear()} Vaishnav Engineering. All Rights Reserved. Heavy Infrastructure Fabrication.</p>
          <div className="flex gap-6">
            <Link href="/quality-policy" className="hover:text-[#C6A66B] transition-colors">Quality Policy</Link>
            <Link href="/safety" className="hover:text-[#C6A66B] transition-colors">Safety & EHS</Link>
            <Link href="/documents" className="hover:text-[#C6A66B] transition-colors">Document Vault</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
