"use client";

import { Smartphone, Tv, Home, Headphones, ChevronRight } from "lucide-react";

interface ProductCategory {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  image: string;
  featured?: boolean;
}

const productCategories: ProductCategory[] = [
  {
    id: "mobiles",
    name: "Mobile Phones",
    nameHi: "मोबाइल फ़ोन",
    description: "Latest smartphones from premium brands",
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    items: ["Samsung Galaxy", "iPhone", "OnePlus", "Vivo", "Oppo", "Realme"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
  },
  {
    id: "televisions",
    name: "4K Televisions",
    nameHi: "टेलीविज़न",
    description: "Immersive viewing experience",
    icon: <Tv size={28} strokeWidth={1.5} />,
    items: ["Samsung QLED", "LG OLED", "Sony Bravia", "Mi TV", "OnePlus TV"],
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1200&q=80",
    featured: true,
  },
  {
    id: "appliances",
    name: "Home Appliances",
    nameHi: "घरेलू उपकरण",
    description: "Quality appliances for your home",
    icon: <Home size={28} strokeWidth={1.5} />,
    items: ["Refrigerators", "Washing Machines", "ACs", "Geysers"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: "audio",
    name: "Audio & Accessories",
    nameHi: "ऑडियो और एक्सेसरीज़",
    description: "Premium sound experience",
    icon: <Headphones size={28} strokeWidth={1.5} />,
    items: ["boAt", "JBL", "Sony", "Samsung Buds", "AirPods"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  },
];

export function Products() {
  const featuredProduct = productCategories.find(p => p.featured);
  const otherProducts = productCategories.filter(p => !p.featured);

  return (
    <section 
      id="products" 
      className="section bg-[var(--color-bg-deep)]"
      data-testid="products-section"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="overline mb-4 block">Our Collection</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] mb-4">
            Premium Products
          </h2>
          <p className="text-xl text-[var(--color-gold)] font-medium hindi mb-4">
            हमारे उत्पाद
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Explore our curated selection of premium electronics.
            All products come with manufacturer warranty and our service guarantee.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Large Card */}
          {featuredProduct && (
            <div 
              className="md:col-span-2 lg:col-span-2 relative group rounded-2xl overflow-hidden aspect-[2/1] min-h-[300px]"
              data-testid={`product-${featuredProduct.id}`}
            >
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/80 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="card-glass p-6 max-w-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[var(--color-gold)]/20 rounded-xl flex items-center justify-center text-[var(--color-gold)]">
                      {featuredProduct.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-[var(--color-primary)]">
                        {featuredProduct.name}
                      </h3>
                      <p className="text-sm text-[var(--color-gold)] hindi">
                        {featuredProduct.nameHi}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4">
                    {featuredProduct.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProduct.items.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-slate-100 text-[var(--color-text-muted)] px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Product Cards */}
          {otherProducts.map((category) => (
            <div
              key={category.id}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-white border border-slate-200 hover:border-[var(--color-gold)]/30 transition-all hover:shadow-xl"
              data-testid={`product-${category.id}`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col">
                <div className="w-14 h-14 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center text-[var(--color-gold)] mb-4 group-hover:bg-[var(--color-gold)] group-hover:text-white transition-colors duration-300">
                  {category.icon}
                </div>

                <h3 className="text-xl font-serif font-semibold text-[var(--color-primary)] mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-[var(--color-gold)] hindi mb-3">
                  {category.nameHi}
                </p>

                <p className="text-sm text-[var(--color-text-muted)] mb-4 flex-1">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category.items.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-slate-100 text-[var(--color-text-muted)] px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                  {category.items.length > 3 && (
                    <span className="text-xs text-[var(--color-text-light)]">
                      +{category.items.length - 3} more
                    </span>
                  )}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-colors group/link"
                >
                  Enquire Now
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[var(--color-text-muted)] text-sm">
            Can't find what you're looking for?{" "}
            <a
              href="#contact"
              className="text-[var(--color-gold)] font-medium hover:underline"
            >
              Contact us
            </a>{" "}
            and we'll help you find it.
          </p>
        </div>
      </div>
    </section>
  );
}
