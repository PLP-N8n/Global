"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ClockIcon,
  FadeIn,
} from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

// Store information
const PHONE_NUMBER = "+91-1234567890";
const WHATSAPP_NUMBER = "911234567890";
const STORE_ADDRESS = "Main Market, GT Road, Panipat, Haryana 132103";
const STORE_HOURS = "Mon-Sat: 10AM - 8PM | Sun: 11AM - 6PM";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const categories = [
  { label: "Mobile Phones", href: "#products" },
  { label: "Televisions", href: "#products" },
  { label: "Home Appliances", href: "#products" },
  { label: "Accessories", href: "#products" },
  { label: "Audio Equipment", href: "#products" },
];

/**
 * Footer Component
 *
 * A grounded, informative footer that reinforces trust.
 * Contains essential contact and location information.
 * Clear hierarchy and readable on all devices.
 *
 * Motion:
 * - Layered darker gradient background
 * - Brass accent line at top
 * - Link hover underline animations
 * - Column reveal on scroll
 */
export function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="bg-[var(--color-ink-900)] text-[var(--color-paper)] relative overflow-hidden">
      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent"
        aria-hidden="true"
      />

      {/* Layered darker gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink-800)] to-black"
        aria-hidden="true"
      />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1, 0)}
        >
          {/* Brand & About */}
          <motion.div className="lg:col-span-1" variants={staggerItem}>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-full overflow-hidden bg-black shadow-lg"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Image
                  src="/logo.jpeg"
                  alt="Global Telecom Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[var(--color-paper)]">
                  Global Telecom
                </h3>
                <span className="text-xs text-[var(--color-gold)] font-medium">
                  Electronics & Mobile Store
                </span>
              </div>
            </div>
            <p className="text-[var(--color-paper-500)] text-sm leading-relaxed mb-4">
              Your trusted electronics retailer in Panipat. Quality products, genuine service, and customer satisfaction since establishment.
            </p>
            <p className="text-[var(--color-gold-400)] text-sm leading-relaxed hindi">
              पानीपत में आपका विश्वसनीय इलेक्ट्रॉनिक्स स्टोर।
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-[var(--color-paper)] mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-paper-deep)] hover:text-[var(--color-paper)] transition-colors text-sm relative group inline-block"
                  >
                    {link.label}
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-[var(--color-paper)] mb-4 text-lg">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="text-[var(--color-paper-deep)] hover:text-[var(--color-paper)] transition-colors text-sm relative group inline-block"
                  >
                    {category.label}
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-[var(--color-paper)] mb-4 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-start gap-3 text-[var(--color-paper-deep)] hover:text-[var(--color-paper)] transition-colors group"
                  whileHover={shouldReduceMotion ? {} : { x: 2 }}
                >
                  <PhoneIcon size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{PHONE_NUMBER}</span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[var(--color-paper-deep)] hover:text-[#25D366] transition-colors group"
                  whileHover={shouldReduceMotion ? {} : { x: 2 }}
                >
                  <WhatsAppIcon size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">WhatsApp Us</span>
                </motion.a>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-paper-deep)]">
                <MapPinIcon size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">{STORE_ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-paper-deep)]">
                <ClockIcon size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">{STORE_HOURS}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-ink-light)] relative z-10">
        <div className="container mx-auto px-6 py-6">
          <FadeIn direction="up" delay={200}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-paper-deep)]">
              <p>
                &copy; {currentYear} Global Telecom. All rights reserved.
              </p>
              <p className="text-center md:text-right">
                Serving Panipat & surrounding areas with quality electronics.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
