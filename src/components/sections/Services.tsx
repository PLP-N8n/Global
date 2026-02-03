"use client";

import { ShieldIcon, TruckIcon, CheckCircleIcon } from "@/components/ui";

interface Service {
  icon: React.ReactNode;
  title: string;
  titleHi: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <ShieldIcon size={28} />,
    title: "Genuine Products",
    titleHi: "असली उत्पाद",
    description:
      "All products are sourced directly from authorized distributors. Every item comes with manufacturer warranty and GST bill.",
  },
  {
    icon: <TruckIcon size={28} />,
    title: "Home Delivery",
    titleHi: "होम डिलीवरी",
    description:
      "Free delivery within Panipat city limits. Safe packaging and careful handling of all electronics.",
  },
  {
    icon: <CheckCircleIcon size={28} />,
    title: "After-Sales Support",
    titleHi: "बिक्री के बाद सेवा",
    description:
      "We stand behind every product we sell. Get help with warranty claims, servicing, and product support.",
  },
];

/**
 * Services Section
 *
 * Communicate the value-adds that make this a trustworthy shop.
 * Focus on practical benefits, not marketing speak.
 *
 * Design: Clear, direct communication. No fluff.
 */
export function Services() {
  return (
    <section id="services" className="section bg-[var(--color-paper)]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-ink)] mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-[var(--color-brass)] font-medium hindi mb-3">
            हमें क्यों चुनें
          </p>
          <p className="text-[var(--color-ink-light)] leading-relaxed">
            More than just a store — we&apos;re your local electronics partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 bg-[var(--color-brass)]/10 rounded-full flex items-center justify-center text-[var(--color-brass)]">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--color-brass)] hindi mb-3">
                {service.titleHi}
              </p>

              {/* Description */}
              <p className="text-[var(--color-ink-muted)] leading-relaxed text-sm max-w-sm mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="mt-16 bg-[var(--color-paper-warm)] rounded-lg p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[var(--color-ink)] mb-4">
                Shop with Confidence
              </h3>
              <ul className="space-y-3">
                {[
                  "GST billing on all purchases",
                  "Price match with authorized dealers",
                  "Easy EMI options available",
                  "Exchange offers on select products",
                  "Expert product guidance",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-[var(--color-ink-light)]"
                  >
                    <CheckCircleIcon
                      size={18}
                      className="text-[var(--color-success)] flex-shrink-0"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-right">
              <div className="inline-block bg-white rounded-lg p-6 shadow-sm">
                <p className="text-4xl font-serif font-bold text-[var(--color-brass)] mb-2">
                  15+
                </p>
                <p className="text-[var(--color-ink-muted)] text-sm">
                  Years of Trust
                  <br />
                  <span className="hindi">विश्वास के वर्ष</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
