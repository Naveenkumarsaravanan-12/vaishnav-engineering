"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X } from "lucide-react";
import QuickAuditDrawer from "@/components/audit/QuickAuditDrawer";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [auditDrawerOpen, setAuditDrawerOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "RDSO", href: "/rdso" },
    { name: "Company", href: "/company" },
    { name: "Services", href: "/services" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Approvals", href: "/approvals" },
    { name: "Workforce", href: "/workforce" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Documents", href: "/documents" },
  ];

  return (
    <>
      {/* Main Navigation Bar - Deep Midnight Navy (#101820) with Metallic Grey Border (#39434D) & Champagne Gold Highlights */}
      <header className="sticky top-0 z-40 bg-[#101820]/95 backdrop-blur-md border-b border-[#39434D]/90 shadow-md">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 sm:h-[72px] items-center gap-4 xl:gap-6 w-full">
            
            {/* Logo and Brand Title - Extreme left branding group */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group select-none py-1">
              {/* Logo Icon Square */}
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl shadow-xs bg-white p-1 border border-white/20 ring-1 ring-[#C6A66B]/30 group-hover:ring-[#C6A66B] transition-all duration-200 flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="Vaishnav Engineering Logo"
                  width={46}
                  height={46}
                  className="h-full w-full object-contain rounded-lg"
                  priority
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center shrink-0">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-heading text-base sm:text-lg font-black tracking-tight text-[#F8F7F2] group-hover:text-[#C6A66B] transition-colors whitespace-nowrap">
                    VAISHNAV
                  </span>
                  <span className="font-heading text-base sm:text-lg font-black tracking-tight text-[#C6A66B] whitespace-nowrap">
                    ENGINEERING
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links - starts immediately after branding with clean consistent gap */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 ml-2 xl:ml-4 min-w-0">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold tracking-tight whitespace-nowrap transition-all duration-150 ${
                      isActive
                        ? "bg-[#202A33] text-[#C6A66B] shadow-xs border border-[#C6A66B]/40 ring-1 ring-[#C6A66B]/20"
                        : "text-[#89939D] hover:text-[#D6B36A] hover:bg-[#202A33]/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Far-right side of navigation bar - Official RDSO Logo */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
              <Link 
                href="/rdso"
                title="RDSO Approved Vendor - Research Designs & Standards Organisation"
                className="flex items-center rounded-xl p-0.5 group select-none transition-all duration-200"
              >
                <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-xl shadow-xs bg-white p-1 border border-white/20 ring-1 ring-[#C6A66B]/40 group-hover:ring-[#C6A66B] transition-all duration-200 flex items-center justify-center">
                  <Image
                    src="/logo/rdso-logo.webp"
                    alt="RDSO Logo - Research Designs & Standards Organisation"
                    width={44}
                    height={44}
                    className="h-full w-full object-contain rounded-lg"
                    priority
                  />
                </div>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="rounded-lg p-2 text-[#89939D] hover:text-[#F8F7F2] hover:bg-[#202A33] lg:hidden cursor-pointer transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="border-b border-[#39434D] bg-[#101820] px-4 py-4 space-y-1.5 lg:hidden shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#202A33] text-[#C6A66B] border border-[#C6A66B]/30"
                      : "text-[#89939D] hover:bg-[#202A33]/60 hover:text-[#D6B36A]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#39434D]">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setAuditDrawerOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4B87D] to-[#C6A66B] hover:from-[#E2C790] hover:to-[#D4B87D] py-3 text-sm font-bold text-[#101820] shadow-md shadow-[#C6A66B]/25 cursor-pointer"
              >
                <Zap className="h-4 w-4 text-[#101820]" /> Open 30-Sec Audit Finder
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Audit Drawer Modal */}
      <QuickAuditDrawer isOpen={auditDrawerOpen} onClose={() => setAuditDrawerOpen(false)} />
    </>
  );
}
