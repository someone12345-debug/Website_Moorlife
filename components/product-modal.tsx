"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { type Product, createWhatsAppLink } from "@/lib/products"

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [product])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!product) return null

  const waLink = createWhatsAppLink(product)

  return (
    <div
      className="fixed inset-0 z-[999] bg-foreground/55 backdrop-blur-sm flex items-center justify-center p-5 animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card rounded-[32px] max-w-[540px] w-full max-h-[92vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 relative">
        {/* Header with emoji */}
        <div className="h-[220px] rounded-t-[32px] bg-gradient-to-br from-secondary to-muted/30 flex items-center justify-center text-[7rem] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:rotate-90 transition-all shadow-lg"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
          {product.emoji}
        </div>

        {/* Body */}
        <div className="p-7 md:p-8">
          <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">
            {product.catLabel}
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
            {product.name}
          </h2>
          
          <div className="text-2xl font-bold text-primary mb-4">
            {product.price}
          </div>
          
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            {product.desc}
          </p>

          {/* Features */}
          <div className="bg-background rounded-2xl p-5 mb-6 border border-primary/10">
            <h4 className="text-sm font-bold text-foreground mb-3">✨ Keunggulan Produk</h4>
            <ul className="flex flex-col gap-2.5">
              {product.features.map((feature, idx) => (
                <li key={idx} className="text-[14px] text-secondary-foreground flex items-center gap-3">
                  <span className="w-5 h-5 rounded-md bg-secondary flex items-center justify-center flex-shrink-0 text-[11px] text-primary font-bold">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-whatsapp to-green-600 text-white font-bold text-base shadow-lg shadow-whatsapp/30 hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
