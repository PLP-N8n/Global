"use client";

import Link from "next/link";
import { STORE } from "@/lib/constants";

const footerLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Trust", href: "#trust" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink-900)] text-white">
      <div className="container py-10 md:py-12">
        {/* Row 1: Brand + Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-icon.png"
              alt="Global Telecom"
              className="w-8 h-8 object-contain"
            />
            <span className="text-display text-xl md:text-2xl font-semibold tracking-tight">
              Global <span className="text-brass">Telecom</span>
            </span>
          </span>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.22em] text-white/60 hover:text-white transition-colors font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Row 2: Copyright + Location */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} {STORE.name}. All rights reserved.</p>
          <p>Panipat, Haryana, India</p>
          <p>
            Built by{" "}
            <a
              href="https://rudradigital.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Rudra Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
