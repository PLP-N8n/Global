"use client";

import { Button, PhoneIcon, WhatsAppIcon, FadeIn } from "@/components/ui";
import { STORE } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="section section-ink">
      <div className="container">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <div className="w-16 h-[2px] bg-[var(--color-gold-400)] mb-6 mx-auto" />
            <h2 className="text-5xl md:text-7xl font-semibold text-display tracking-tight text-white mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-white/70 hindi" lang="hi">
              हमें यहाँ पाएं
            </p>
          </div>
        </FadeIn>

        {/* Massive CTAs */}
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              as="a"
              href={`tel:${STORE.phone}`}
              variant="gold"
              size="lg"
              icon={<PhoneIcon size={22} />}
              className="text-lg px-10"
            >
              Call {STORE.phone}
            </Button>
            <Button
              as="a"
              href={`https://wa.me/${STORE.whatsapp}?text=Hi, I want directions to your shop.`}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon size={22} />}
              className="text-lg px-10"
            >
              WhatsApp Us
            </Button>
          </div>
        </FadeIn>

        {/* Info Grid */}
        <FadeIn direction="up">
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold mb-2">Address</p>
              <p className="text-white/70 text-sm leading-relaxed">{STORE.address}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold mb-2">Hours</p>
              <p className="text-white/70 text-sm">{STORE.hours}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold mb-2">Social</p>
              <div className="flex justify-center gap-4">
                <a
                  href={STORE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </a>
                <a
                  href={STORE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Google Maps - Full bleed */}
        <div className="overflow-hidden -mx-6 md:-mx-8 rounded-[0.9rem] border border-white/10">
          <iframe
            title="Global Telecom on Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(STORE.mapCoords)}&output=embed`}
            className="w-full h-[400px] md:h-[500px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
