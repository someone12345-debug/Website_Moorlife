"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Heart,
  Leaf,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { WHATSAPP_NUMBER } from "@/lib/products";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Original",
    desc: "Semua produk dijamin asli dari Moorlife dengan garansi seumur hidup.",
  },
  {
    icon: Heart,
    title: "BPA Free",
    desc: "Aman untuk kesehatan keluarga, bebas bahan kimia berbahaya.",
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    desc: "Produk dapat digunakan berulang kali, kurangi sampah plastik sekali pakai.",
  },
  {
    icon: Sparkles,
    title: "Desain Modern",
    desc: "Tampilan stylish yang cocok untuk dapur modern dan gaya hidup aktif.",
  },
];

const stats = [
  { icon: Clock, value: "15+", label: "Tahun Pengalaman" },
  { icon: Users, value: "5000+", label: "Customer Puas" },
  { icon: Award, value: "200+", label: "Varian Produk" },
  { icon: ShieldCheck, value: "100%", label: "Produk Original" },
];

const timeline = [
  {
    year: "2009",
    title: "Memulai Perjalanan",
    desc: "Moorlife didirikan sebagai distributor Moorlife di Indonesia.",
  },
  {
    year: "2014",
    title: "Ekspansi Nasional",
    desc: "Memperluas jangkauan ke seluruh wilayah Indonesia.",
  },
  {
    year: "2019",
    title: "Go Digital",
    desc: "Mulai melayani pemesanan online via WhatsApp dan marketplace.",
  },
  {
    year: "2024",
    title: "5000+ Customer",
    desc: "Berhasil melayani lebih dari 5000 pelanggan setia.",
  },
];

export default function TentangPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo Moorlife! Saya ingin tahu lebih lanjut tentang toko Anda.")}`;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-[68px] bg-gradient-to-br from-secondary via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-card border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                Tentang Kami
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Kenalan dengan <span className="text-primary">Moorlife</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Moorlife adalah brand perlengkapan rumah tangga modern yang
                menghadirkan produk berkualitas, aman untuk makanan, dan
                didesain dengan tampilan elegan. Cocok untuk kebutuhan
                sehari-hari keluarga Indonesia. Dengan material yang tahan lama
                dan pilihan warna menarik, Moorlife menjadi solusi praktis untuk
                menyimpan, membawa, dan menyajikan makanan dengan lebih rapi dan
                higienis. Kami menyediakan produk Moorlife original dengan
                pelayanan terpercaya dan harga bersahabat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/produk"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/30 hover:bg-accent transition-all"
                >
                  Lihat Produk
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card text-foreground border-2 border-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Kami
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Tentang Moorlife"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Distributor Resmi
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Produk Bergaransi Seumur Hidup
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center bg-background rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Keunggulan
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kenapa Pilih <span className="text-primary">Moorlife</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami memberikan yang terbaik untuk keluarga Indonesia dengan
              produk berkualitas dan pelayanan prima.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Perjalanan Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Sejarah <span className="text-primary">Moorlife</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-0.5" />

            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1.5 border-4 border-background" />
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 1 ? "md:pl-12" : "md:pr-12 md:text-right"}`}
                >
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Hubungi Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Informasi <span className="text-primary">Kontak</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda
              24/7!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group"
            >
              <div className="w-14 h-14 bg-whatsapp rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
              <p className="text-sm text-muted-foreground">+62 812 3456 7890</p>
            </a>

            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <p className="text-sm text-muted-foreground">info@moorlife.id</p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-accent-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Lokasi</h4>
              <p className="text-sm text-muted-foreground">
                Dusun IV Tanjung, Desa Kuala Tanjung Kec. Sei Suka, Kab. Batu
                Bara
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Siap Berbelanja?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Kunjungi katalog produk kami atau hubungi via WhatsApp untuk
            konsultasi gratis!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 bg-card text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:-translate-y-1 transition-all"
            >
              Lihat Produk
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
