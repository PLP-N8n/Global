"use client";

import { Shield, Truck, Headphones, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Genuine Products",
    titleHi: "असली उत्पाद",
    description:
      "All products sourced directly from authorized distributors. Every item comes with manufacturer warranty and GST bill.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    titleHi: "होम डिलीवरी",
    description:
      "Free delivery within Panipat city limits. Safe packaging and careful handling of all electronics.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    titleHi: "बिक्री के बाद सेवा",
    description:
      "We stand behind every product we sell. Get help with warranty claims, servicing, and product support.",
  },
];

const benefits = [
  "GST billing on all purchases",
  "Price match with authorized dealers",
  "Easy EMI options available",
  "Exchange offers on select products",
  "Expert product guidance",
];

export function Services() {
  return (
    <section 
      id="services" 
      className="section bg-[var(--color-bg-deep)]"
      data-testid="services-section"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="overline mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[var(--color-gold)] font-medium hindi mb-4">
            हमें क्यों चुनें
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            More than just a store — we're your trusted electronics partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card card-gold-border text-center hover:shadow-xl"
              data-testid={`service-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-[var(--color-gold)]/10 rounded-2xl flex items-center justify-center">
                <service.icon size={28} className="text-[var(--color-gold)]" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-serif font-semibold text-[var(--color-primary)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--color-gold)] hindi mb-4">
                {service.titleHi}
              </p>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="card-glass p-8 md:p-12 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-primary)] mb-6">
                Shop with Confidence
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-[var(--color-text-muted)]"
                  >
                    <CheckCircle
                      size={20}
                      className="text-[var(--color-gold)] flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-gold)]/20">
                <p className="text-5xl font-serif font-bold text-[var(--color-gold)] mb-2">
                  15+
                </p>
                <p className="text-[var(--color-text-muted)]">
                  Years of Trust
                  <br />
                  <span className="hindi text-sm">विश्वास के वर्ष</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
