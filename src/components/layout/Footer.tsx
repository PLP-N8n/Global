import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const PHONE_NUMBER = "+91-1234567890";
const WHATSAPP_NUMBER = "911234567890";
const STORE_ADDRESS = "Barsat Rd, near Pahwa Sweets, Ansals Sushant City, Noorwala, Panipat, Haryana 132103";
const STORE_HOURS = "Mon-Sat: 10AM - 8PM | Sun: 11AM - 6PM";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const categories = [
  { label: "Mobile Phones", href: "#products" },
  { label: "4K Televisions", href: "#products" },
  { label: "Home Appliances", href: "#products" },
  { label: "Audio Equipment", href: "#products" },
  { label: "Accessories", href: "#products" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white" data-testid="footer">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--color-gold)] rounded-xl flex items-center justify-center">
                <span className="text-[var(--color-primary)] font-bold text-xl font-serif">G</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">Global Telecom</h3>
                <span className="overline text-[var(--color-gold)]">Since Establishment</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Panipat's most trusted destination for premium electronics. 
              Quality products, genuine service, and customer satisfaction.
            </p>
            <p className="text-slate-500 text-sm hindi">
              पानीपत में प्रीमियम इलेक्ट्रॉनिक्स के लिए आपका विश्वसनीय स्थान।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[var(--color-gold)] transition-colors text-sm"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-white mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="text-slate-400 hover:text-[var(--color-gold)] transition-colors text-sm"
                    data-testid={`footer-cat-${category.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  data-testid="footer-phone"
                >
                  <Phone size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-[var(--color-gold)]" />
                  <span className="text-sm">{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 hover:text-[#25D366] transition-colors"
                  data-testid="footer-whatsapp"
                >
                  <MessageCircle size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-[var(--color-gold)]" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-[var(--color-gold)]" />
                <span className="text-sm">{STORE_ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-[var(--color-gold)]" />
                <span className="text-sm">{STORE_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {currentYear} Global Telecom. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-gold)] rounded-full"></span>
              Serving Panipat & surrounding areas with premium electronics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
