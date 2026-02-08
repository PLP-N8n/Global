"use client";

import { FadeIn, OptimizedImage } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="section-ink">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left: Owner Photo — portrait crop, face + shoulders visible */}
        <FadeIn direction="left" className="relative min-h-[400px] lg:min-h-0 overflow-hidden rounded-none lg:rounded-r-[10px]">
          <OptimizedImage
            src="/images/owner.jpg"
            alt="Sunny, Founder & Owner of Global Telecom, Panipat"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_20%]"
          />
          {/* Right-edge gradient for smooth blend into dark panel */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-[var(--color-ink-900)] opacity-60"
            aria-hidden="true"
          />
          {/* Bottom vignette for depth */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[var(--color-ink-900)]/40 to-transparent"
            aria-hidden="true"
          />
        </FadeIn>

        {/* Right: About Content */}
        <div className="flex items-center">
          <FadeIn direction="up" delay={150}>
            <div className="p-8 md:p-12 lg:p-16 max-w-xl">
              {/* Accent line */}
              <div className="w-16 h-[2px] bg-[var(--color-gold-400)] mb-6" />

              <h2 className="text-3xl md:text-4xl font-semibold text-display tracking-tight text-white mb-3">
                Who We Are
              </h2>

              {/* Owner name — humanises the brand */}
              <p className="text-sm text-[var(--color-gold-400)] font-semibold tracking-wide mb-1">
                Sunny &mdash; Founder &amp; Owner
              </p>
              <div className="w-10 h-px bg-white/15 mb-5" />

              <p className="text-lg text-white/60 hindi mb-8" lang="hi">
                हम कौन हैं
              </p>

              <div className="space-y-5">
                <p className="text-white/75 leading-[1.8]">
                  We started as a small local mobile phone shop, built on word of mouth and honest
                  service. Over time, our customers trusted us not just for phones, but for TVs, home
                  appliances, accessories, and practical advice that actually helps people make the
                  right choice.
                </p>
                <p className="text-white/75 leading-[1.8]">
                  We believe buying technology should feel simple, transparent, and personal. That
                  means helping you choose what fits your needs and budget&nbsp;&mdash; not just what
                  looks good on a shelf.
                </p>
                <p className="text-white/75 leading-[1.8]">
                  And our relationship doesn&rsquo;t end at checkout. Whether it&rsquo;s setting up
                  your new device, helping with warranty support, or troubleshooting later,
                  we&rsquo;re here for the long run.
                </p>
                <p className="text-white/60 italic leading-[1.8]">
                  That&rsquo;s how local businesses grow&nbsp;&mdash; by standing behind what they
                  sell and the people they serve.
                </p>

                {/* Hindi section */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <p className="text-sm text-[var(--color-gold-400)] font-semibold tracking-wide hindi" lang="hi">
                    Sunny &mdash; संस्थापक एवं मालिक
                  </p>
                  <p className="text-white/60 leading-[1.8] hindi" lang="hi">
                    हमने एक छोटे मोबाइल फोन स्टोर के रूप में शुरुआत की थी, जहाँ भरोसा और अच्छी
                    सलाह ही हमारी पहचान थी। आज ग्राहक हम पर मोबाइल, टीवी, घरेलू उपकरण और सही
                    मार्गदर्शन के लिए भरोसा करते हैं।
                  </p>
                  <p className="text-white/60 leading-[1.8] hindi" lang="hi">
                    हम मानते हैं कि तकनीक खरीदना सरल, ईमानदार और व्यक्तिगत अनुभव होना चाहिए।
                    हमारा उद्देश्य आपको वही उत्पाद दिलाना है जो आपकी जरूरत और बजट के अनुसार
                    सही हो।
                  </p>
                  <p className="text-white/50 leading-[1.8] hindi" lang="hi">
                    खरीदारी के बाद भी हमारा साथ बना रहता है — चाहे वह नया फोन सेटअप करना हो,
                    वारंटी में मदद हो या बाद में किसी तरह की सहायता। यही तरीके से स्थानीय
                    व्यवसाय आगे बढ़ते हैं — अपने ग्राहकों के साथ खड़े रहकर।
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
