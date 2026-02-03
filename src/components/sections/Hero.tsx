"use client";

import { MessageCircle, Phone, ChevronRight, Sparkles } from "lucide-react";

const PHONE_NUMBER = "+91-1234567890";
const WHATSAPP_NUMBER = "911234567890";

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1651275666236-8ecf57b4c66e?crop=entropy&cs=srgb&fm=jpg&q=85')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/90 via-[var(--color-primary)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl animate-fade-in-up">
            {/* Overline */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="overline text-[var(--color-gold)]">Authorized Dealer</span>
              <span className="w-8 h-px bg-[var(--color-gold)]"></span>
              <span className="text-white/60 text-sm">Est. Panipat</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Premium
              <br />
              <span className="text-[var(--color-gold)]">Electronics</span>
              <br />
              for Modern Living
            </h1>

            {/* Hindi Tagline */}
            <p className="text-xl md:text-2xl text-white/80 mb-3 hindi font-medium">
              आधुनिक जीवन के लिए प्रीमियम इलेक्ट्रॉनिक्स
            </p>

            {/* Subtitle */}
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              Experience the finest collection of mobile phones, 4K televisions, 
              and home appliances. Genuine products with official warranty.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { label: "Genuine Products", labelHi: "असली उत्पाद" },
                { label: "Official Warranty", labelHi: "आधिकारिक वारंटी" },
                { label: "Expert Service", labelHi: "विशेषज्ञ सेवा" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[var(--color-gold)]" />
                  <span className="text-white text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold text-base px-8 py-4"
                data-testid="hero-whatsapp-btn"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
                Chat on WhatsApp
              </a>
              <a
                href="#products"
                className="btn btn-glass text-base px-8 py-4 text-white border-white/30 hover:bg-white/10"
                data-testid="hero-products-btn"
              >
                View Products
                <ChevronRight size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Right Content - Glass Card */}
          <div className="hidden lg:block">
            <div className="card-glass p-8 max-w-sm ml-auto animate-fade-in-up stagger-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[var(--color-gold)]/20 rounded-2xl flex items-center justify-center">
                  <Phone size={28} className="text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Visit Our Store</p>
                  <p className="font-serif font-semibold text-[var(--color-primary)]">Main Market, GT Road</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">Mon - Sat</span>
                  <span className="font-medium">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">Sunday</span>
                  <span className="font-medium">11:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Location</span>
                  <span className="font-medium">Panipat, Haryana</span>
                </div>
              </div>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn btn-primary w-full mt-6 justify-center"
                data-testid="hero-call-btn"
              >
                <Phone size={18} strokeWidth={1.5} />
                Call: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
