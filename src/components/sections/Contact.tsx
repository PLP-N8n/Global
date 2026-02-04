"use client";

import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";

const PHONE_NUMBER = "+91 98126 33000";
const WHATSAPP_NUMBER = "919812633000";
const STORE_ADDRESS = "Barsat Rd, near Pahwa Sweets, Ansals Sushant City, Noorwala, Panipat, Haryana 132103";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.123456789!2d76.96!3d29.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGlobal%20Telecom!5e0!3m2!1sen!2sin!4v1234567890";
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/7XaNqPsxR5quucRb7";
const STORE_HOURS = {
  weekdays: "Monday - Saturday: 10:00 AM - 8:00 PM",
  sunday: "Sunday: 11:00 AM - 6:00 PM",
};

export function Contact() {
  return (
    <section
      id="contact"
      className="section bg-[var(--color-primary)] text-white relative overflow-hidden"
      data-testid="contact-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="overline text-[var(--color-gold)] mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-[var(--color-gold)] font-medium hindi mb-6">
              संपर्क करें
            </p>

            <p className="text-slate-300 leading-relaxed mb-10 max-w-md">
              Have questions about a product? Want to check availability?
              Reach out to us — we're here to help.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-10">
              {/* Phone */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-start gap-4 group"
                data-testid="contact-phone"
              >
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-gold)] transition-colors">
                  <Phone size={24} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Call Us</p>
                  <p className="text-slate-300 group-hover:text-white transition-colors text-lg">
                    {PHONE_NUMBER}
                  </p>
                  <p className="text-xs text-slate-500 hindi mt-1">अभी कॉल करें</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
                data-testid="contact-whatsapp"
              >
                <div className="w-14 h-14 bg-[#25D366]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle size={24} className="text-[#25D366] group-hover:text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">WhatsApp</p>
                  <p className="text-slate-300 group-hover:text-[#25D366] transition-colors">
                    Message Us Anytime
                  </p>
                  <p className="text-xs text-slate-500 hindi mt-1">WhatsApp पर संपर्क करें</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-[var(--color-gold)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Visit Us</p>
                  <p className="text-slate-300">{STORE_ADDRESS}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-[var(--color-gold)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Store Hours</p>
                  <p className="text-slate-300 text-sm">
                    {STORE_HOURS.weekdays}
                    <br />
                    {STORE_HOURS.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I would like to enquire about your products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-base px-8"
                data-testid="contact-whatsapp-btn"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
                WhatsApp Now
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn text-base px-8 bg-white text-[var(--color-primary)] hover:bg-slate-100"
                data-testid="contact-call-btn"
              >
                <Phone size={20} strokeWidth={1.5} />
                Call Now
              </a>
            </div>
          </div>

          {/* Map Area */}
          <div className="flex flex-col">
            {/* Google Maps Embed */}
            <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.5!2d76.96!3d29.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda5d0e62fad1%3A0x8a0c7d3b4e5f6a7b!2sGlobal%20Telecom!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Telecom Location - Panipat"
                className="absolute inset-0"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto glass-dark p-4 rounded-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[var(--color-primary)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-white text-sm">Global Telecom</p>
                    <p className="text-xs text-slate-400">Ansals Sushant City, Panipat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Link */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl transition-colors"
              data-testid="contact-directions"
            >
              <Navigation size={18} strokeWidth={1.5} />
              Get Directions on Google Maps
            </a>
          </div>
        </div>

        {/* Hindi CTA */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-lg text-slate-300 hindi">
            किसी भी प्रश्न के लिए हमें कॉल करें या WhatsApp करें।
            <br />
            हम आपकी सेवा में हाज़िर हैं।
          </p>
        </div>
      </div>
    </section>
  );
}
