import { Navbar } from "@/components/navbar";
import { ProductCatalog } from "@/components/product-catalog";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moorlife",
  description:
    "Katalog lengkap produk Moorlife original. Wadah makanan, botol minum, peralatan dapur dengan harga terbaik.",
};

export default function ProdukPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="pt-[68px] bg-gradient-to-br from-secondary via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="text-center">
            <span className="inline-block bg-card border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Katalog Produk
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Koleksi Produk <span className="text-primary">Moorlife</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Temukan berbagai pilihan wadah makanan, botol minum, dan peralatan
              dapur berkualitas premium dengan harga terbaik.
            </p>
          </div>
        </div>
      </section>

      <ProductCatalog />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
