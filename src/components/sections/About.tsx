"use client";

import { FadeIn } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="section-ink">
      <div className="container py-16 md:py-20 lg:py-24">
        {/* Portraits row */}
        <FadeIn direction="up" className="flex justify-center gap-8 md:gap-12 mb-12 md:mb-16">
          {[
            { src: "/images/tarun-saluja.jpg", name: "Tarun Saluja", role: "Founder" },
            { src: "/images/sunny.jpg", name: "Sunny", role: "Owner" },
          ].map((person) => (
            <div key={person.name} className="flex flex-col items-center gap-4">
              <div className="relative w-48 h-64 md:w-60 md:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={person.src}
                  alt={`${person.name}, ${person.role} of Global Telecom`}
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[var(--color-ink-900)]/50 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="text-center">
                <p className="text-base md:text-lg font-semibold text-white tracking-tight">
                  {person.name}
                </p>
                <p className="text-xs md:text-sm text-[var(--color-gold-400)] tracking-wide uppercase">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* About Content */}
        <FadeIn direction="up" delay={150}>
          <div className="max-w-2xl mx-auto text-center">
            {/* Accent line */}
            <div className="w-16 h-[2px] bg-[var(--color-gold-400)] mb-6 mx-auto" />

            <h2 className="text-3xl md:text-4xl font-semibold text-display tracking-tight text-white mb-3">
              Who We Are
            </h2>

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
    </section>
  );
}
