"use client";

import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#1a1a1a] pb-10 pt-20 text-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
          <div className="flex max-w-[380px] flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/logo.jpeg"
                alt="Vaishnav Engineering Logo"
                width={60}
                height={60}
                className="rounded-sm object-cover"
              />
              <span className="text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
                Vaishnav Engineering
              </span>
            </div>
            <p className="max-w-[340px] text-sm leading-relaxed text-gray-400">
              Certified fabrication for Indian Railway infrastructure, structural steel works, and heavy engineering execution from workshop to site.
            </p>
          </div>

          <div className="grid w-full max-w-[520px] grid-cols-1 gap-10 text-gray-300 sm:grid-cols-2">
            <div className="flex flex-col space-y-4 text-sm font-medium">
              <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-white">Company</h4>
              <Link href="/about" className="footer-link transition hover:text-[#c26b6b]">
                About Us
              </Link>
              <Link href="/services" className="footer-link transition hover:text-[#c26b6b]">
                Products & Services
              </Link>
              <Link href="/projects" className="footer-link transition hover:text-[#c26b6b]">
                Projects
              </Link>
            </div>

            <div className="flex flex-col space-y-4 text-sm font-medium">
              <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-white">Support</h4>
              <Link href="/contact" className="footer-link transition hover:text-[#c26b6b]">
                Contact Us
              </Link>
              <Link href="/privacy" className="footer-link transition hover:text-[#c26b6b]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-xs text-gray-400 md:text-left">
            Copyright {new Date().getFullYear()} Vaishnav Engineering. All rights reserved.
          </p>

          <div className="flex justify-center gap-4 md:justify-end">
            <a href="#" className="social-icon rounded-full border border-white/10 p-2 text-gray-300 transition hover:border-[#c26b6b] hover:bg-[#c26b6b] hover:text-white" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="social-icon rounded-full border border-white/10 p-2 text-gray-300 transition hover:border-[#c26b6b] hover:bg-[#c26b6b] hover:text-white" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="social-icon rounded-full border border-white/10 p-2 text-gray-300 transition hover:border-[#c26b6b] hover:bg-[#c26b6b] hover:text-white" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
