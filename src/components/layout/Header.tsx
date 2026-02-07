"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Button, PhoneIcon, WhatsAppIcon, MenuIcon, XIcon } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/motion";

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
 *
 * Motion:
 * - Scroll-triggered background blur/opacity change
 * - Nav link underline animation on hover
 * - Mobile menu slide-down with staggered items
 * - Logo subtle hover effect
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Handle scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-paper)]/95 backdrop-blur-md shadow-sm"
          : "bg-[var(--color-paper)]"
      } border-b border-[var(--color-paper-deep)]`}
    >
      {/* Top bar with contact info - Black & Gold theme */}
      <div className="bg-[var(--color-ink-900)] text-[var(--color-paper)]">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors"
              whileHover={shouldReduceMotion ? {} : { x: 2 }}
            >
              <PhoneIcon size={14} />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
            </motion.a>
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              whileHover={shouldReduceMotion ? {} : { x: 2 }}
            >
              <WhatsAppIcon size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </motion.a>
          </div>
          <div className="text-[var(--color-gold-400)] text-xs sm:text-sm font-medium">
            <span>Panipat, Haryana</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with subtle hover effect */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-[var(--color-ink-900)] flex items-center justify-center shadow-lg"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Image
                src="/logo.jpeg"
                alt="Global Telecom Logo"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-[var(--color-ink)] leading-tight">
                Global Telecom
              </span>
              <span className="text-xs text-[var(--color-gold)] hidden sm:block font-medium">
                Electronics & Mobile Store
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with underline animation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-[var(--color-ink-light)] hover:text-[var(--color-ink)] rounded-md transition-colors font-medium group"
              >
                {link.label}
                {/* Underline animation - Gold accent */}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
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
          <motion.button
            type="button"
            className="lg:hidden p-2 -mr-2 text-[var(--color-ink)] hover:bg-[var(--color-paper-warm)] rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation with slide-down and stagger */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-[var(--color-paper-deep)] overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <motion.div
                className="flex flex-col gap-1"
                variants={staggerContainer(0.05, 0)}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={staggerItem}>
                    <Link
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
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-3 mt-4 pt-4 border-t border-[var(--color-paper-deep)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
