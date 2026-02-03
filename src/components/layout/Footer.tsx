import Link from "next/link";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/ui";

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
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[var(--color-paper)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--color-ink)] font-bold text-lg">
                  G
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[var(--color-paper)]">
                  Global Telecom
                </h3>
              </div>
            </div>
            <p className="text-[var(--color-paper-deep)] text-sm leading-relaxed mb-4">
              Your trusted electronics retailer in Panipat. Quality products, genuine service, and customer satisfaction since establishment.
            </p>
            <p className="text-[var(--color-paper-deep)] text-sm leading-relaxed hindi">
              पानीपत में आपका विश्वसनीय इलेक्ट्रॉनिक्स स्टोर।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-paper)] mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-paper-deep)] hover:text-[var(--color-paper)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-[var(--color-paper)] mb-4 text-lg">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="text-[var(--color-paper-deep)] hover:text-[var(--color-paper)] transition-colors text-sm"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-[var(--color-paper)] mb-4 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-start gap-3 text-[var(--color-paper-deep)] hover:text-[var(--color-paper)] transition-colors"
                >
                  <PhoneIcon size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[var(--color-paper-deep)] hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-ink-light)]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-paper-deep)]">
            <p>
              &copy; {currentYear} Global Telecom. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Serving Panipat & surrounding areas with quality electronics.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
