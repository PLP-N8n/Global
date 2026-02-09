"use client";

import { SectionHeader, FadeIn } from "@/components/ui";
import { FAQ_ITEMS } from "@/lib/structured-data";

export function FAQ() {
  // Show 6 items in the visible section (all English + first Hindi)
  const visibleFAQs = FAQ_ITEMS.slice(0, 6);

  return (
    <section id="faq" className="section section-paper">
      <div className="container">
        <SectionHeader
          title="Frequently Asked Questions"
          titleHi="अक्सर पूछे जाने वाले प्रश्न"
          subtitle="Quick answers to common questions about our store, products, and services."
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {visibleFAQs.map((item, index) => {
            const isHindi = item.question.match(/[\u0900-\u097F]/);
            return (
              <FadeIn key={index} direction="up" delay={index * 50}>
                <details className="group rounded-xl border border-[var(--color-ink-900)]/10 bg-white/50 overflow-hidden">
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden"
                    lang={isHindi ? "hi" : undefined}
                  >
                    <span className={`text-base font-medium text-[var(--color-ink-900)] ${isHindi ? "hindi" : ""}`}>
                      {item.question}
                    </span>
                    <span
                      className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-[var(--color-ink-900)]/15 text-[var(--color-ink-500)] group-open:rotate-45 transition-transform duration-200"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 -mt-1">
                    <p
                      className={`text-sm leading-relaxed text-[var(--color-ink-600)] ${isHindi ? "hindi" : ""}`}
                      lang={isHindi ? "hi" : undefined}
                    >
                      {item.answer}
                    </p>
                  </div>
                </details>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
