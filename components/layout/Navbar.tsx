"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/container";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products & Services", href: "/services" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 h-[75px] w-full border-b border-black/5 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-[75px] w-full items-center justify-between gap-4">
          
          {/* LEFT: LOGO */}
          <div className="min-w-0 flex items-center">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <Image
                src="/logo/logo.jpeg"
                alt="Company Logo"
                width={42}
                height={42}
                className="rounded-sm object-cover"
              />
              <span className="truncate text-base font-semibold text-black sm:text-lg md:text-xl">
                Vaishnav Engineering
              </span>
            </Link>
          </div>

          {/* RIGHT: LINKS + BUTTON + RDSO */}
          <div className="flex items-center gap-4 lg:gap-8">
            
            {/* DESKTOP NAV LINKS (Pushed to Right) */}
            <ul className="hidden items-center gap-6 text-sm font-medium text-black lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#c26b6b]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CONTACT US BUTTON */}
            <Link 
              href="/contact" 
              className="hidden rounded-sm bg-[#1a1a1a] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#c26b6b] md:block"
            >
              Contact Us
            </Link>

            {/* RDSO LOGO */}
            <Image
              src="/logo/rdso-logo.png"
              alt="RDSO Logo"
              width={45}
              height={45}
              className="hidden object-contain opacity-80 xl:block"
            />

            {/* MOBILE TOGGLE */}
            <button
              className="p-2 text-black lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <Container>
              <ul className="flex flex-col py-6 gap-6 text-base font-medium text-black">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={() => setMenuOpen(false)} className="transition hover:text-[#c26b6b]">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/contact" 
                    className="text-[#c26b6b] font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
