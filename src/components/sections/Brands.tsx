"use client";

const brands = [
  { name: "Samsung", category: "Mobile, TV, Appliances" },
  { name: "Apple", category: "Mobile, Accessories" },
  { name: "LG", category: "TV, Appliances" },
  { name: "Sony", category: "TV, Audio" },
  { name: "OnePlus", category: "Mobile, TV" },
  { name: "Vivo", category: "Mobile" },
  { name: "Oppo", category: "Mobile" },
  { name: "Mi (Xiaomi)", category: "Mobile, TV" },
  { name: "boAt", category: "Audio" },
  { name: "JBL", category: "Audio" },
  { name: "Havells", category: "Appliances" },
  { name: "Realme", category: "Mobile, Audio" },
];

export function Brands() {
  return (
    <section 
      id="brands" 
      className="section bg-[var(--color-bg)]"
      data-testid="brands-section"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="overline mb-4 block">Authorized Partners</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] mb-4">
            Brands We Carry
          </h2>
          <p className="text-xl text-[var(--color-gold)] font-medium hindi mb-4">
            हमारे ब्रांड्स
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Official authorized dealer for leading electronics brands.
            All products are 100% genuine with official warranty.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group bg-white rounded-xl p-6 text-center border border-slate-200 hover:border-[var(--color-gold)]/50 hover:shadow-lg transition-all duration-300 card-gold-border"
              data-testid={`brand-${brand.name.toLowerCase().replace(/[^a-z]/g, '')}`}
            >
              {/* Brand Initial */}
              <div className="w-14 h-14 mx-auto mb-3 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-[var(--color-gold)]/10 transition-colors">
                <span className="text-2xl font-serif font-bold text-[var(--color-text-muted)] group-hover:text-[var(--color-gold)] transition-colors">
                  {brand.name.charAt(0)}
                </span>
              </div>

              {/* Brand Name */}
              <h3 className="font-semibold text-[var(--color-primary)] mb-1 text-sm">
                {brand.name}
              </h3>

              {/* Category */}
              <p className="text-xs text-[var(--color-text-light)]">
                {brand.category}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 glass px-8 py-4 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[var(--color-text-muted)]">
              Authorized Dealer • Genuine Products • Official Warranty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
