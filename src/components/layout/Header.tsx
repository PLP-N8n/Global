"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, PhoneIcon, WhatsAppIcon, MenuIcon, XIcon } from "@/components/ui";
import { STORE } from "@/lib/constants";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Shop", href: "#shop" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Trust", href: "#trust" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 300);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "header-surface shadow-[0_8px_24px_rgba(11,12,16,0.08)]"
          : "header-transparent"
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-icon.png"
              alt="Global Telecom"
              className="w-9 h-9 md:w-10 md:h-10 object-contain"
            />
            <span className={`hidden sm:flex flex-col leading-none ${scrolled ? "text-[var(--color-ink-900)]" : "text-white"}`}>
              <span className="text-display text-lg md:text-xl font-semibold">Global <span className="text-brass">Telecom</span></span>
              <span className={`text-[10px] tracking-[0.22em] uppercase ${scrolled ? "text-[var(--color-ink-400)]" : "text-white/60"}`}>Panipat &middot; Electronics</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[11px] uppercase tracking-[0.22em] font-semibold transition-colors ${
                  scrolled
                    ? "text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              as="a"
              href={`tel:${STORE.phone}`}
              variant="primary"
              size="sm"
              icon={<PhoneIcon size={16} />}
              className={!scrolled ? "bg-white text-[var(--color-ink-900)] hover:bg-[var(--color-paper-200)]" : ""}
            >
              <span className="hidden lg:inline">Call</span>
            </Button>
            <Button
              as="a"
              href={`https://wa.me/${STORE.whatsapp}?text=Hi, I'm interested in your products.`}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              icon={<WhatsAppIcon size={16} />}
            >
              <span className="hidden lg:inline">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 -mr-2 rounded-full transition-colors ${
              scrolled ? "text-[var(--color-ink-900)] hover:bg-[rgba(11,12,16,0.06)]" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-[var(--color-ink-900)] z-40">
          <div className="flex items-center justify-between px-6 h-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-icon.png"
              alt="Global Telecom"
              className="w-9 h-9 object-contain"
            />
            <button
              type="button"
              className="p-2 -mr-2 text-white hover:bg-white/10 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XIcon size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 min-h-[calc(100vh-4rem)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-3xl font-semibold tracking-tight text-white hover:text-[var(--color-gold-400)] transition-colors text-display"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-6">
              <Button
                as="a"
                href={`tel:${STORE.phone}`}
                variant="primary"
                size="lg"
                icon={<PhoneIcon size={20} />}
                className="bg-[var(--color-paper-100)] text-[var(--color-ink-900)] hover:bg-[var(--color-paper-200)]"
              >
                Call
              </Button>
              <Button
                as="a"
                href={`https://wa.me/${STORE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon size={20} />}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
