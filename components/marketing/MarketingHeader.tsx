"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Mobile App", href: "#mobile-app" },
];

export default function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
    <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-[32px] border border-[#EAECF0] bg-white/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
        <Link href="/" className="font-[Lora] text-xl font-bold text-[#4C1D95]">
          {SITE_NAME}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#697586] transition-colors hover:text-[#4C1D95]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-[#4C1D95] transition-colors hover:bg-purple-50"
          >
            Login
          </Link>
          <Link
            href="#mobile-app"
            className="rounded-lg bg-[linear-gradient(136deg,#4C1D95_0%,#7C3AED_100%)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5 text-[#2A3542]" /> : <Menu className="h-5 w-5 text-[#2A3542]" />}
        </button>
    </nav>
    </div>
  );
}
