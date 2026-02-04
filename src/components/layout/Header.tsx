"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const PHONE_NUMBER = "+91-1234567890";
const WHATSAPP_NUMBER = "911234567890";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar */}
      <div className={`transition-all duration-300 ${scrolled ? "h-0 overflow-hidden" : "h-auto"}`}>
        <div className="bg-[var(--color-primary)] text-white">
          <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors"
                data-testid="header-phone-link"
              >
                <Phone size={14} strokeWidth={1.5} />
                <span className="hidden sm:inline">{PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                data-testid="header-whatsapp-link"
              >
                <MessageCircle size={14} strokeWidth={1.5} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-xs">
              <span className="overline">Authorized Dealer</span>
              <span className="mx-2">•</span>
              <span>Panipat, Haryana</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" data-testid="logo-link">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-[var(--color-gold)] font-bold text-lg md:text-xl font-serif">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-[var(--color-primary)] leading-tight">
                Global Telecom
              </span>
              <span className="text-xs text-[var(--color-text-light)] hidden sm:block tracking-wide">
                Premium Electronics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-slate-100 rounded-full transition-all font-medium text-sm"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="btn btn-outline text-sm px-5 py-2"
              data-testid="header-call-btn"
            >
              <Phone size={16} strokeWidth={1.5} />
              <span className="hidden lg:inline">Call Now</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm px-5 py-2"
              data-testid="header-whatsapp-btn"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[var(--color-primary)] hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 animate-fade-in bg-white">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-slate-50 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-3 mt-4 pt-4 border-t border-slate-200">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn btn-outline flex-1 justify-center"
                data-testid="mobile-call-btn"
              >
                <Phone size={18} /> Call
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp flex-1 justify-center"
                data-testid="mobile-whatsapp-btn"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
