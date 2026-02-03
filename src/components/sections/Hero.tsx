"use client";

import { Button, PhoneIcon, WhatsAppIcon, CheckCircleIcon } from "@/components/ui";

const PHONE_NUMBER = "+91-1234567890";
const WHATSAPP_NUMBER = "911234567890";

const trustPoints = [
  { text: "Authorized Dealer", textHi: "अधिकृत डीलर" },
  { text: "Genuine Products", textHi: "असली उत्पाद" },
  { text: "Expert Service", textHi: "विशेषज्ञ सेवा" },
];

/**
 * Hero Section
 *
 * The first impression - must establish trust within 5 seconds.
 * "This is a real, reliable shop that has been here for years."
 *
 * Design: Confident, grounded, not flashy or experimental.
 */
export function Hero() {
  return (
    <section className="relative bg-[var(--color-paper-warm)] overflow-hidden">
      {/* Subtle decorative element */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-ink) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-[var(--color-success)] rounded-full" />
              <span className="text-sm font-medium text-[var(--color-ink-light)]">
                Serving Panipat Since Establishment
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-ink)] leading-tight mb-4">
              Your Trusted
              <br />
              <span className="text-[var(--color-brass)]">Electronics</span> Store
            </h1>

            {/* Hindi tagline */}
            <p className="text-xl md:text-2xl text-[var(--color-ink-muted)] mb-2 hindi font-medium">
              आपका विश्वसनीय इलेक्ट्रॉनिक्स स्टोर
            </p>

            {/* Subtitle */}
            <p className="text-lg text-[var(--color-ink-light)] leading-relaxed mb-8 max-w-md">
              Quality mobile phones, televisions, home appliances, and accessories.
              Visit our store in Panipat or connect with us today.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustPoints.map((point) => (
                <div
                  key={point.text}
                  className="flex items-center gap-2 text-[var(--color-ink-light)]"
                >
                  <CheckCircleIcon
                    size={20}
                    className="text-[var(--color-success)]"
                  />
                  <span className="text-sm font-medium">{point.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as="a"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your products.`}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon size={22} />}
              >
                Chat on WhatsApp
              </Button>
              <Button
                as="a"
                href={`tel:${PHONE_NUMBER}`}
                variant="secondary"
                size="lg"
                icon={<PhoneIcon size={22} />}
              >
                Call Us Now
              </Button>
            </div>
          </div>

          {/* Visual/Image area */}
          <div className="relative lg:pl-8">
            {/* Placeholder for store image - replace with actual store photo */}
            <div className="relative bg-[var(--color-paper-deep)] rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-[var(--color-brass)]/20 rounded" />

              {/* Image placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-[var(--color-ink)] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[var(--color-paper)] font-bold text-3xl">G</span>
                </div>
                <p className="text-[var(--color-ink-muted)] text-sm">
                  [Store Photo]
                </p>
                <p className="text-[var(--color-ink-muted)] text-xs mt-1">
                  Replace with actual store image
                </p>
              </div>
            </div>

            {/* Floating info card */}
            <div className="absolute -bottom-4 -left-4 lg:left-0 bg-white rounded-lg shadow-md p-4 max-w-[200px]">
              <p className="text-sm font-semibold text-[var(--color-ink)] mb-1">
                Visit Our Store
              </p>
              <p className="text-xs text-[var(--color-ink-muted)]">
                Main Market, GT Road
                <br />
                Panipat, Haryana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
