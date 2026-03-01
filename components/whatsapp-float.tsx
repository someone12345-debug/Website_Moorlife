"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/products";

export function WhatsAppFloat() {
  const generalLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo, saya ingin bertanya tentang produk Moorlife.",
  )}`;

  return (
    <a
      href={generalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-whatsapp pl-5 pr-6 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat Kami</span>
    </a>
  );
}
