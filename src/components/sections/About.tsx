"use client";

import { CheckCircle } from "lucide-react";

export function About() {
  return (
    <section 
      id="about" 
      className="section bg-[var(--color-bg)]"
      data-testid="about-section"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1593784991251-92ded75ea290?w=800&q=80"
                alt="Premium Home Theater Setup at Global Telecom Panipat"
                className="w-full h-full object-cover"
              />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/40 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 lg:right-6 card-glass p-6 max-w-[180px]">
              <p className="text-4xl font-serif font-bold text-[var(--color-gold)] mb-1">15+</p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Years of Trust
                <br />
                <span className="hindi text-xs">विश्वास के वर्ष</span>
              </p>
            </div>

            {/* Decorative Gold Border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-[var(--color-gold)] rounded-tl-3xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="overline mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] mb-4">
              About Global Telecom
            </h2>
            <p className="text-xl text-[var(--color-gold)] font-medium hindi mb-6">
              ग्लोबल टेलीकॉम के बारे में
            </p>

            <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed mb-8">
              <p>
                Global Telecom has been serving the people of Panipat and surrounding
                areas for over 15 years. What started as a small mobile phone shop
                has grown into a trusted destination for all electronics needs.
              </p>
              <p>
                We believe in building lasting relationships with our customers.
                When you buy from us, you're not just making a purchase — you're
                becoming part of a community that values honesty, quality, and
                genuine service.
              </p>
              <p className="hindi text-[var(--color-text-light)]">
                हम अपने ग्राहकों के साथ स्थायी संबंध बनाने में विश्वास करते हैं।
                आप हमसे खरीदते हैं तो एक परिवार का हिस्सा बन जाते हैं।
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Quality", labelHi: "गुणवत्ता" },
                { label: "Honesty", labelHi: "ईमानदारी" },
                { label: "Service", labelHi: "सेवा" },
                { label: "Value", labelHi: "मूल्य" },
              ].map((value) => (
                <div
                  key={value.label}
                  className="flex items-center gap-3 p-4 bg-[var(--color-bg-deep)] rounded-xl border border-slate-200"
                  data-testid={`value-${value.label.toLowerCase()}`}
                >
                  <CheckCircle size={20} className="text-[var(--color-gold)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-[var(--color-primary)]">{value.label}</p>
                    <p className="text-xs text-[var(--color-text-light)] hindi">{value.labelHi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
