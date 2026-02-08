"use client";

import { AnimatedCounter, SectionHeader, FadeIn, OptimizedImage } from "@/components/ui";

const stats = [
  { value: 15, suffix: "+", label: "Years of Trust", labelHi: "सालों का भरोसा" },
  { value: 12, suffix: "+", label: "Brands Available", labelHi: "ब्रांड्स उपलब्ध" },
  { value: 1000, suffix: "s", label: "Happy Customers", labelHi: "खुश ग्राहक" },
  { value: 100, suffix: "%", label: "Genuine Products", labelHi: "असली उत्पाद" },
];

const trustPoints = [
  {
    title: "Genuine products with proper bill",
    titleHi: "असली उत्पाद, बिल के साथ",
    description:
      "We sell original products with GST bill and official warranty.",
  },
  {
    title: "Local service and after-sales help",
    titleHi: "सेवा और सहायता",
    description:
      "If you face an issue, you can come back to the shop and we will help.",
  },
  {
    title: "Honest guidance in-store",
    titleHi: "ईमानदार सलाह",
    description:
      "We explain options clearly so you can choose what fits your budget.",
  },
  {
    title: "EMI and exchange options",
    titleHi: "ईएमआई और एक्सचेंज",
    description:
      "Ask us about EMI and exchange offers available on select products.",
  },
];

const shopImages = [
  {
    src: "/images/shop-front.jpg",
    alt: "Global Telecom shop front in Panipat",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/shop-interior.jpg",
    alt: "Inside view of Global Telecom store",
    span: "",
  },
  {
    src: "/images/shop-front-original.jpg",
    alt: "Global Telecom storefront, street view",
    span: "",
  },
];

export function Services() {
  return (
    <section id="trust" className="section section-paper">
      {/* Stats Counter Strip */}
      <div className="bg-[var(--color-paper-200)] border-y border-[rgba(11,12,16,0.08)]">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                labelBelow={stat.label}
                labelBelowHi={stat.labelHi}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Shop Gallery + Trust Points */}
      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: Image Tiles */}
          <FadeIn direction="left">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {shopImages.map((img) => (
                <div
                  key={img.src}
                  className={`relative overflow-hidden rounded-xl ${img.span} ${
                    img.span ? "min-h-[280px] md:min-h-[360px]" : "min-h-[140px] md:min-h-[170px]"
                  }`}
                >
                  <OptimizedImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={img.span
                      ? "(min-width: 1024px) 40vw, 90vw"
                      : "(min-width: 1024px) 20vw, 45vw"
                    }
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: Trust Points */}
          <div>
            <FadeIn direction="up">
              <SectionHeader
                title="Why Locals Trust Us"
                titleHi="स्थानीय लोग हम पर क्यों भरोसा करते हैं"
                align="left"
              />
            </FadeIn>

            <div className="space-y-6">
              {trustPoints.map((point, i) => (
                <FadeIn key={point.title} direction="up" delay={i * 80}>
                  <div className="flex gap-4 items-start">
                    {/* Number indicator */}
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-gold-100)] text-[var(--color-gold-700)] text-sm font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-ink-900)] tracking-tight mb-0.5 text-display leading-snug">
                        {point.title}
                      </h3>
                      <p className="text-xs text-[var(--color-ink-400)] hindi mb-1.5" lang="hi">
                        {point.titleHi}
                      </p>
                      <p className="text-sm text-[var(--color-ink-500)] leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
