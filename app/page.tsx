"use client";

import Link from "next/link";
import {
  ArrowRight,
  Star,
  Truck,
  Shield,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { products, WHATSAPP_NUMBER, createWhatsAppLink } from "@/lib/products";

export default function Home() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo Moorlife! Saya ingin tanya-tanya produk.")}`;
  const featuredProducts = products
    .filter((p) => p.badge === "hot" || p.badge === "fav")
    .slice(0, 4);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-[68px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted/30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-card border border-primary/20 rounded-full px-4 py-2 shadow-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-secondary-foreground">
                  Distributor Resmi Moorlife
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Produk <span className="text-primary">Premium</span> untuk
                Keluarga Sehat
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Temukan koleksi wadah makanan, botol minum, dan peralatan dapur
                berkualitas tinggi. 100% original, garansi seumur hidup, dan
                harga bersahabat.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/produk"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-primary/30 hover:bg-accent hover:-translate-y-1 transition-all"
                >
                  Lihat Produk
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-whatsapp/30 hover:opacity-90 hover:-translate-y-1 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Sekarang
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-sm border border-border">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <span>Rating 4.9/5</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-sm border border-border">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <span>Gratis Ongkir</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-sm border border-border">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span>Garansi Seumur Hidup</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6" />
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                  <Image
                    src="/images/hero.jpg"
                    alt="Koleksi Moorlife"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border">
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">
                    Customer Puas
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Tahun Pengalaman
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Produk Pilihan
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Produk <span className="text-primary">Terlaris</span> Kami
              </h2>
            </div>
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Lihat Semua Produk
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-background rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-[180px] bg-gradient-to-br from-secondary to-muted/30 flex items-center justify-center text-[4rem] relative">
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        product.badge === "hot"
                          ? "bg-primary text-primary-foreground"
                          : product.badge === "fav"
                            ? "bg-amber-500 text-white"
                            : "bg-purple-500 text-white"
                      }`}
                    >
                      {product.badgeLabel}
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-bold tracking-[1.2px] uppercase text-primary mb-1">
                    {product.catLabel}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-primary">
                      {product.price}
                    </span>
                    <a
                      href={createWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-whatsapp text-white px-3 py-1.5 rounded-full text-[12px] font-bold hover:bg-green-600 hover:scale-105 transition-all inline-flex items-center gap-1.5"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Pesan
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Keunggulan Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Kenapa Pilih <span className="text-primary">Moorlife</span>?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "100%",
                title: "100% Original",
                desc: "Produk asli bergaransi seumur hidup",
              },
              {
                icon: "BPA",
                title: "BPA Free",
                desc: "Aman untuk kesehatan keluarga",
              },
              {
                icon: "24/7",
                title: "Respon Cepat",
                desc: "Layanan WhatsApp 24 jam",
              },
              {
                icon: "COD",
                title: "Bisa COD",
                desc: "Bayar di tempat, lebih praktis",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Hubungi kami via WhatsApp untuk konsultasi gratis dan penawaran
            terbaik!
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            Chat via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
