"use client";

import Image from "next/image";
import { SectionHeader, FadeIn } from "@/components/ui";

interface ProductCard {
  id: string;
  name: string;
  nameHi: string;
  tagline: string;
  dark: boolean;
  bgImage: string;
  span?: string;
}

const productCards: ProductCard[] = [
  {
    id: "mobiles",
    name: "Mobile Phones",
    nameHi: "मोबाइल फोन",
    tagline: "Latest smartphones from top brands with warranty",
    dark: true,
    bgImage: "/images/product-mobiles.png",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "televisions",
    name: "Televisions",
    nameHi: "टेलीविज़न",
    tagline: "LED & Smart TVs for every budget",
    dark: false,
    bgImage: "/images/product-televisions.png",
  },
  {
    id: "appliances",
    name: "Home Appliances",
    nameHi: "घरेलू उपकरण",
    tagline: "Fridges, ACs, washing machines & more",
    dark: true,
    bgImage: "/images/product-appliances.png",
  },
  {
    id: "accessories",
    name: "Accessories",
    nameHi: "एक्सेसरीज़",
    tagline: "Chargers, earphones, cases & speakers",
    dark: false,
    bgImage: "/images/product-accessories.png",
  },
];

export function Products() {
  return (
    <section id="products" className="section section-paper">
      <div className="container">
        <SectionHeader
          title="What You Can Buy"
          titleHi="हमारे उत्पाद"
          subtitle="We keep everyday electronics in stock. Call or WhatsApp to check availability for a specific model."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {productCards.map((card) => {
            const color = card.dark
              ? "var(--color-paper-100)"
              : "var(--color-ink-900)";
            const kickerClass = card.dark ? "kicker-light" : "kicker-muted";
            const overlay = card.dark
              ? "rgba(11,12,16,0.7)"
              : "rgba(245,242,235,0.7)";

            return (
              <FadeIn key={card.id} direction="up">
                <div
                  className={`${card.span || ""} overflow-hidden rounded-2xl relative group min-h-[280px] md:min-h-[320px] flex items-center justify-center`}
                >
                  {/* Background image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.bgImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay for text readability */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: overlay }}
                    aria-hidden="true"
                  />

                  {/* Text content */}
                  <div className="relative z-10 p-7 md:p-8 text-center" style={{ color }}>
                    <p className={`kicker ${kickerClass} mb-2`}>
                      {card.id}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-display tracking-tight mb-1" style={{ color }}>
                      {card.name}
                    </h3>
                    <p className="text-sm opacity-70 hindi mb-2" lang="hi">
                      {card.nameHi}
                    </p>
                    <p className="text-sm opacity-70">
                      {card.tagline}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bajaj Finance EMI Badge */}
        <FadeIn direction="up">
          <div className="mt-8 flex items-center justify-center gap-4 p-4 surface-paper">
            <Image
              src="/images/bajaj-finance.jpg"
              alt="Bajaj Finance EMI available"
              width={120}
              height={40}
              className="object-contain"
            />
            <p className="text-sm text-[var(--color-ink-500)] font-medium">
              EMI options available via Bajaj Finance
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
