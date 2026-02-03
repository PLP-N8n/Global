"use client";

import {
  Button,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/ui";

const PHONE_NUMBER = "+91-1234567890";
const WHATSAPP_NUMBER = "911234567890";
const STORE_ADDRESS = "Main Market, GT Road, Panipat, Haryana 132103";
const STORE_HOURS = {
  weekdays: "Monday - Saturday: 10:00 AM - 8:00 PM",
  sunday: "Sunday: 11:00 AM - 6:00 PM",
};

/**
 * Contact Section
 *
 * The goal: drive walk-ins, calls, and WhatsApp enquiries.
 * Make it extremely easy to take action.
 *
 * Design: Clear CTAs, large tap targets, no friction.
 */
export function Contact() {
  return (
    <section id="contact" className="section bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-paper)] mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-[var(--color-brass-light)] font-medium hindi mb-6">
              संपर्क करें
            </p>

            <p className="text-[var(--color-paper-deep)] leading-relaxed mb-8 max-w-md">
              Have questions about a product? Want to check availability?
              Reach out to us — we&apos;re here to help.
            </p>

            {/* Contact methods */}
            <div className="space-y-6 mb-10">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-ink-light)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon size={24} className="text-[var(--color-paper)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-paper)] mb-1">
                    Call Us
                  </p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-[var(--color-paper-deep)] hover:text-[var(--color-paper)] transition-colors text-lg"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-whatsapp)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-paper)] mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-paper-deep)] hover:text-[#25D366] transition-colors text-lg"
                  >
                    Message Us
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-ink-light)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon size={24} className="text-[var(--color-paper)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-paper)] mb-1">
                    Visit Us
                  </p>
                  <p className="text-[var(--color-paper-deep)]">
                    {STORE_ADDRESS}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-ink-light)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClockIcon size={24} className="text-[var(--color-paper)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-paper)] mb-1">
                    Store Hours
                  </p>
                  <p className="text-[var(--color-paper-deep)] text-sm">
                    {STORE_HOURS.weekdays}
                    <br />
                    {STORE_HOURS.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as="a"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I would like to enquire about your products.`}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon size={22} />}
              >
                WhatsApp Now
              </Button>
              <Button
                as="a"
                href={`tel:${PHONE_NUMBER}`}
                variant="call"
                size="lg"
                icon={<PhoneIcon size={22} />}
              >
                Call Now
              </Button>
            </div>
          </div>

          {/* Map/Location area */}
          <div className="flex flex-col">
            {/* Map placeholder */}
            <div className="flex-1 bg-[var(--color-ink-light)] rounded-lg overflow-hidden min-h-[300px] relative">
              {/* This would be replaced with an actual Google Maps embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPinIcon
                  size={48}
                  className="text-[var(--color-paper-deep)] mb-4"
                />
                <p className="text-[var(--color-paper-deep)] text-sm mb-2">
                  [Google Maps Embed]
                </p>
                <p className="text-[var(--color-paper-deep)] text-xs">
                  Main Market, GT Road
                  <br />
                  Panipat, Haryana 132103
                </p>
              </div>
            </div>

            {/* Directions link */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[var(--color-ink-light)] hover:bg-[var(--color-ink-muted)] text-[var(--color-paper)] px-6 py-3 rounded-lg transition-colors text-sm font-medium"
            >
              <MapPinIcon size={18} />
              Get Directions on Google Maps
            </a>
          </div>
        </div>

        {/* Hindi CTA */}
        <div className="mt-12 pt-8 border-t border-[var(--color-ink-light)] text-center">
          <p className="text-lg text-[var(--color-paper-deep)] hindi">
            किसी भी प्रश्न के लिए हमें कॉल करें या WhatsApp करें।
            <br />
            हम आपकी सेवा में हाज़िर हैं।
          </p>
        </div>
      </div>
    </section>
  );
}
