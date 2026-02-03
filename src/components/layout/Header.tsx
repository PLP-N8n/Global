"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, PhoneIcon, WhatsAppIcon, MenuIcon, XIcon } from "@/components/ui";

interface NavLink {
  label: string;
  labelHi?: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", labelHi: "होम", href: "/" },
  { label: "Products", labelHi: "उत्पाद", href: "#products" },
  { label: "Brands", labelHi: "ब्रांड्स", href: "#brands" },
  { label: "Services", labelHi: "सेवाएं", href: "#services" },
  { label: "About", labelHi: "हमारे बारे में", href: "#about" },
  { label: "Contact", labelHi: "संपर्क", href: "#contact" },
];

// Store contact information
const PHONE_NUMBER = "+91-1234567890"; // Replace with actual number
const WHATSAPP_NUMBER = "911234567890"; // Replace with actual number (without +)

/**
 * Header Component
 *
 * Clear, confident navigation that establishes trust immediately.
 * Avoids experimental navigation patterns.
 * Large tap targets for mobile accessibility.
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)] border-b border-[var(--color-paper-deep)]">
      {/* Top bar with contact info */}
      <div className="bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 hover:text-[var(--color-brass-light)] transition-colors"
            >
              <PhoneIcon size={14} />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
          <div className="text-[var(--color-paper-deep)] text-xs sm:text-sm">
            <span>Panipat, Haryana</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--color-ink)] rounded-lg flex items-center justify-center">
              <span className="text-[var(--color-paper)] font-bold text-lg md:text-xl">
                G
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-[var(--color-ink)] leading-tight">
                Global Telecom
              </span>
              <span className="text-xs text-[var(--color-ink-muted)] hidden sm:block">
                Electronics & Mobile Store
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[var(--color-ink-light)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-warm)] rounded-md transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              as="a"
              href={`tel:${PHONE_NUMBER}`}
              variant="call"
              size="sm"
              icon={<PhoneIcon size={18} />}
            >
              <span className="hidden lg:inline">Call Now</span>
            </Button>
            <Button
              as="a"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your products.`}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              icon={<WhatsAppIcon size={18} />}
            >
              <span className="hidden lg:inline">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-[var(--color-ink)] hover:bg-[var(--color-paper-warm)] rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--color-paper-deep)]">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-[var(--color-ink-light)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-warm)] rounded-md transition-colors font-medium flex justify-between items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  {link.labelHi && (
                    <span className="text-sm text-[var(--color-ink-muted)] font-normal">
                      {link.labelHi}
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <div className="flex gap-3 mt-4 pt-4 border-t border-[var(--color-paper-deep)]">
              <Button
                as="a"
                href={`tel:${PHONE_NUMBER}`}
                variant="call"
                size="md"
                fullWidth
                icon={<PhoneIcon size={20} />}
              >
                Call Now
              </Button>
              <Button
                as="a"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your products.`}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="md"
                fullWidth
                icon={<WhatsAppIcon size={20} />}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
