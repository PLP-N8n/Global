"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Card,
  CardContent,
  SmartphoneIcon,
  TvIcon,
  HeadphonesIcon,
  TruckIcon,
  ChevronRightIcon,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
  IconContainer,
} from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

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
    icon: <SmartphoneIcon size={28} />,
    items: ["Samsung", "Vivo", "Oppo", "Realme", "OnePlus", "iPhone"],
  },
  {
    id: "televisions",
    name: "Televisions",
    nameHi: "टेलीविज़न",
    description: "LED, Smart TVs, and home entertainment systems",
    icon: <TvIcon size={28} />,
    items: ["Samsung", "LG", "Sony", "Mi", "OnePlus", "TCL"],
  },
  {
    id: "appliances",
    name: "Home Appliances",
    nameHi: "घरेलू उपकरण",
    description: "Quality appliances for your home needs",
    icon: <TruckIcon size={28} />,
    items: ["Refrigerators", "Washing Machines", "ACs", "Fans", "Geysers"],
  },
  {
    id: "accessories",
    name: "Accessories",
    nameHi: "एक्सेसरीज़",
    description: "Mobile accessories, earphones, and more",
    icon: <HeadphonesIcon size={28} />,
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
 *
 * Motion:
 * - Cards wrapped in StaggerContainer for sequential reveal
 * - Icon containers with gradient backgrounds
 * - Brass accent line at card top on hover
 * - Pill-shaped badges for items
 */
export function Products() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="products" className="section bg-[var(--color-paper)] section-layered">
      <div className="container mx-auto px-6">
        {/* Section Header with animation */}
        <SectionHeader
          title="What We Offer"
          titleHi="हमारे उत्पाद"
          subtitle="Browse our wide selection of electronics and home appliances. All products come with manufacturer warranty and our service guarantee."
          showDecorative
        />

        {/* Product Categories Grid with stagger animation */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1, 0)}
        >
          {productCategories.map((category) => (
            <motion.div key={category.id} variants={staggerItem}>
              <Card
                variant="default"
                padding="lg"
                hover
                className="group h-full relative overflow-hidden"
              >
                {/* Brass accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <CardContent>
                  {/* Icon with gradient background */}
                  <IconContainer
                    size="md"
                    variant="gradient"
                    className="mb-4 group-hover:bg-gradient-to-br group-hover:from-[var(--color-gold-500)] group-hover:to-[var(--color-gold-600)] group-hover:text-white transition-all duration-300"
                    animate
                  >
                    {category.icon}
                  </IconContainer>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[var(--color-gold)] hindi mb-3">
                    {category.nameHi}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-ink-muted)] mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Pill-shaped badges for items */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.items.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="badge-pill"
                      >
                        {item}
                      </span>
                    ))}
                    {category.items.length > 4 && (
                      <span className="badge-pill badge-pill-brass">
                        +{category.items.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-colors group/link"
                  >
                    Enquire Now
                    <ChevronRightIcon
                      size={16}
                      className="ml-1 group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[var(--color-ink-muted)] text-sm">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#contact"
              className="text-[var(--color-gold)] font-medium hover:underline"
            >
              Contact us
            </a>{" "}
            and we&apos;ll help you find it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
