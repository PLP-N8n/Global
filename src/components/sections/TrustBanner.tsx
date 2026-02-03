"use client";

import { Shield, Award, BadgeCheck } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "100% Genuine Products",
    titleHi: "असली उत्पाद",
    desc: "All products sourced from authorized distributors",
  },
  {
    icon: Award,
    title: "Authorized Dealer",
    titleHi: "अधिकृत डीलर",
    desc: "Official partner for leading electronics brands",
  },
  {
    icon: BadgeCheck,
    title: "Official Warranty",
    titleHi: "आधिकारिक वारंटी",
    desc: "Manufacturer warranty with GST billing",
  },
];

export function TrustBanner() {
  return (
    <section 
      className="bg-[var(--color-bg-deep)] border-y border-slate-200"
      data-testid="trust-banner"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="flex items-center gap-4 justify-center md:justify-start"
              data-testid={`trust-item-${index}`}
            >
              <div className="w-12 h-12 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon size={24} className="text-[var(--color-gold)]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold text-[var(--color-primary)]">
                  {item.title}
                </p>
                <p className="text-xs text-[var(--color-text-light)] hindi">
                  {item.titleHi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
