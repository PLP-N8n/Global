"use client";

/**
 * About Section
 *
 * Tell the store's story with authenticity.
 * This is about establishing local roots and trust.
 *
 * Design: Warm, personal, but not overly casual.
 * "We're a real business with real people."
 */
export function About() {
  return (
    <section id="about" className="section section-deep">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual area */}
          <div className="order-2 lg:order-1">
            {/* Placeholder for store interior/team photo */}
            <div className="relative bg-[var(--color-paper)] rounded-lg overflow-hidden aspect-[4/3] shadow-md">
              {/* Decorative frame */}
              <div className="absolute inset-3 border border-[var(--color-brass)]/20 rounded" />

              {/* Image placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-[var(--color-paper-warm)] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[var(--color-ink-muted)]">
                    GT
                  </span>
                </div>
                <p className="text-[var(--color-ink-muted)] text-sm">
                  [Store Interior Photo]
                </p>
                <p className="text-[var(--color-ink-muted)] text-xs mt-1">
                  Replace with actual store image
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-ink)] mb-4">
              About Global Telecom
            </h2>
            <p className="text-xl text-[var(--color-brass)] font-medium hindi mb-6">
              ग्लोबल टेलीकॉम के बारे में
            </p>

            <div className="space-y-4 text-[var(--color-ink-light)] leading-relaxed">
              <p>
                Global Telecom has been serving the people of Panipat and surrounding
                areas for over 15 years. What started as a small mobile phone shop
                has grown into a trusted destination for all electronics needs.
              </p>

              <p>
                We believe in building lasting relationships with our customers.
                When you buy from us, you&apos;re not just making a purchase — you&apos;re
                becoming part of a community that values honesty, quality, and
                genuine service.
              </p>

              <p className="hindi text-[var(--color-ink-muted)]">
                हम अपने ग्राहकों के साथ स्थायी संबंध बनाने में विश्वास करते हैं।
                जब आप हमसे खरीदते हैं, तो आप सिर्फ खरीदारी नहीं कर रहे - आप एक
                परिवार का हिस्सा बन रहे हैं।
              </p>
            </div>

            {/* Store values */}
            <div className="mt-8 pt-8 border-t border-[var(--color-paper)]">
              <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-4">
                Our Promise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Quality", desc: "गुणवत्ता" },
                  { label: "Honesty", desc: "ईमानदारी" },
                  { label: "Service", desc: "सेवा" },
                  { label: "Value", desc: "मूल्य" },
                ].map((value) => (
                  <div
                    key={value.label}
                    className="bg-[var(--color-paper)] rounded-lg p-4"
                  >
                    <p className="font-semibold text-[var(--color-ink)]">
                      {value.label}
                    </p>
                    <p className="text-sm text-[var(--color-ink-muted)] hindi">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
