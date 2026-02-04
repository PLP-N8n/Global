"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "911234567890";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your products.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
      aria-label="Chat on WhatsApp"
      data-testid="whatsapp-float"
    >
      <MessageCircle size={26} strokeWidth={1.5} />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
