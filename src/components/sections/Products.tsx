"use client";

import {
  Card,
  CardContent,
  SmartphoneIcon,
  TvIcon,
  HeadphonesIcon,
  TruckIcon,
  ChevronRightIcon,
} from "@/components/ui";

interface ProductCategory {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

const productCategories: ProductCategory[] = [
  {
    id: "mobiles",
    name: "Mobile Phones",
    nameHi: "मोबाइल फ़ोन",
    description: "Latest smartphones from all major brands",
    icon: <SmartphoneIcon size={32} />,
    items: ["Samsung", "Vivo", "Oppo", "Realme", "OnePlus", "iPhone"],
  },
  {
    id: "televisions",
    name: "Televisions",
    nameHi: "टेलीविज़न",
    description: "LED, Smart TVs, and home entertainment systems",
    icon: <TvIcon size={32} />,
    items: ["Samsung", "LG", "Sony", "Mi", "OnePlus", "TCL"],
  },
  {
    id: "appliances",
    name: "Home Appliances",
    nameHi: "घरेलू उपकरण",
    description: "Quality appliances for your home needs",
    icon: <TruckIcon size={32} />,
    items: ["Refrigerators", "Washing Machines", "ACs", "Fans", "Geysers"],
  },
  {
    id: "accessories",
    name: "Accessories",
    nameHi: "एक्सेसरीज़",
    description: "Mobile accessories, earphones, and more",
    icon: <HeadphonesIcon size={32} />,
    items: ["Earphones", "Chargers", "Cases", "Power Banks", "Speakers"],
  },
];

/**
 * Products Section
 *
 * Showcase product categories with clear, honest presentation.
 * Not a catalog - an introduction to what the store offers.
 *
 * Design: Familiar but not generic cards, clear hierarchy.
 */
export function Products() {
  return (
    <section id="products" className="section bg-[var(--color-paper)]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-ink)] mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-[var(--color-brass)] font-medium hindi mb-3">
            हमारे उत्पाद
          </p>
          <p className="text-[var(--color-ink-light)] leading-relaxed">
            Browse our wide selection of electronics and home appliances.
            All products come with manufacturer warranty and our service guarantee.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <Card
              key={category.id}
              variant="default"
              padding="lg"
              hover
              className="group"
            >
              <CardContent>
                {/* Icon */}
                <div className="w-14 h-14 bg-[var(--color-paper-warm)] rounded-lg flex items-center justify-center mb-4 text-[var(--color-brass)] group-hover:bg-[var(--color-brass)] group-hover:text-white transition-colors duration-300">
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-[var(--color-brass)] hindi mb-3">
                  {category.nameHi}
                </p>

                {/* Description */}
                <p className="text-sm text-[var(--color-ink-muted)] mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Items list */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.items.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-[var(--color-paper-warm)] text-[var(--color-ink-light)] px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                  {category.items.length > 4 && (
                    <span className="text-xs text-[var(--color-ink-muted)] px-2 py-1">
                      +{category.items.length - 4} more
                    </span>
                  )}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-[var(--color-brass)] hover:text-[var(--color-brass-dark)] transition-colors group/link"
                >
                  Enquire Now
                  <ChevronRightIcon
                    size={16}
                    className="ml-1 group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-[var(--color-ink-muted)] text-sm">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#contact"
              className="text-[var(--color-brass)] font-medium hover:underline"
            >
              Contact us
            </a>{" "}
            and we&apos;ll help you find it.
          </p>
        </div>
      </div>
    </section>
  );
}
