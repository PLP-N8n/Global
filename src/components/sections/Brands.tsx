"use client";

interface Brand {
  name: string;
  category: string;
}

const brands: Brand[] = [
  { name: "Samsung", category: "Mobile, TV, Appliances" },
  { name: "Vivo", category: "Mobile" },
  { name: "Oppo", category: "Mobile" },
  { name: "Realme", category: "Mobile, Audio" },
  { name: "OnePlus", category: "Mobile, TV" },
  { name: "Apple", category: "Mobile, Accessories" },
  { name: "LG", category: "TV, Appliances" },
  { name: "Sony", category: "TV, Audio" },
  { name: "Mi (Xiaomi)", category: "Mobile, TV, Accessories" },
  { name: "boAt", category: "Audio, Accessories" },
  { name: "JBL", category: "Audio" },
  { name: "Havells", category: "Appliances" },
];

/**
 * Brands Section
 *
 * Showcase brand partnerships to establish legitimacy.
 * "We carry real brands" = trust signal.
 *
 * Design: Clean grid, no flashy logos animation.
 * Let the brand names speak for themselves.
 */
export function Brands() {
  return (
    <section id="brands" className="section section-warm">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-ink)] mb-4">
            Brands We Carry
          </h2>
          <p className="text-xl text-[var(--color-brass)] font-medium hindi mb-3">
            हमारे ब्रांड्स
          </p>
          <p className="text-[var(--color-ink-light)] leading-relaxed">
            Authorized dealer for leading electronics brands.
            All products are 100% genuine with official warranty.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg p-6 text-center border border-[var(--color-paper-deep)] hover:border-[var(--color-brass)]/30 hover:shadow-sm transition-all duration-200"
            >
              {/* Brand initial/placeholder */}
              <div className="w-12 h-12 mx-auto mb-3 bg-[var(--color-paper-deep)] rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-[var(--color-ink-muted)]">
                  {brand.name.charAt(0)}
                </span>
              </div>

              {/* Brand name */}
              <h3 className="font-semibold text-[var(--color-ink)] mb-1">
                {brand.name}
              </h3>

              {/* Category */}
              <p className="text-xs text-[var(--color-ink-muted)]">
                {brand.category}
              </p>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="text-center mt-10 pt-8 border-t border-[var(--color-paper-deep)]">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-[var(--color-success)] rounded-full" />
            <span className="text-sm font-medium text-[var(--color-ink-light)]">
              Authorized Dealer &bull; Genuine Products &bull; Official Warranty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
