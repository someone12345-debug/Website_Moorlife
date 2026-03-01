import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/products";

export function Footer() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer
      id="tentang"
      className="bg-foreground pt-14 pb-7 px-[4%] md:px-[6%]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-10">
        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-white inline-block mb-4"
          >
            Moor<span className="text-primary">life</span>
          </Link>
          <p className="text-sm text-white/40 leading-relaxed max-w-[260px]">
            Toko Moorlife original terpercaya. Produk berkualitas, harga
            bersahabat, pelayanan ramah.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-xs font-bold text-white/60 mb-4 tracking-wide">
            MENU
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link
                href="/"
                className="text-sm text-white/40 hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#produk"
                className="text-sm text-white/40 hover:text-primary transition-colors"
              >
                Semua Produk
              </Link>
            </li>
            <li>
              <Link
                href="#tentang"
                className="text-sm text-white/40 hover:text-primary transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-xs font-bold text-white/60 mb-4 tracking-wide">
            KONTAK
          </h4>
          <ul className="space-y-2.5">
            <li>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-primary transition-colors"
              >
                💬 WhatsApp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/40 hover:text-primary transition-colors"
              >
                📸 Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/40 hover:text-primary transition-colors"
              >
                📘 Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/30">
          © 2025 Moorlife. Toko Moorlife Original Terpercaya.
        </p>
        <p className="text-xs text-white/30">
          Made with ❤️ for happy customers
        </p>
      </div>
    </footer>
  );
}
