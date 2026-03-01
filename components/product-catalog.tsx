"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import {
  products,
  categories,
  type Product,
  type Category,
  type BadgeType,
  getCategoryCount,
  createWhatsAppLink,
} from "@/lib/products";
import { ProductModal } from "./product-modal";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

export function ProductCatalog() {
  const [currentCat, setCurrentCat] = useState<Category | "semua">("semua");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [badges, setBadges] = useState<BadgeType[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category filter
    if (currentCat !== "semua") {
      list = list.filter((p) => p.cat === currentCat);
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.catLabel.toLowerCase().includes(q),
      );
    }

    // Price filter
    const min = parseInt(minPrice) || 0;
    const max = parseInt(maxPrice) || Infinity;
    if (min || max !== Infinity) {
      list = list.filter((p) => p.priceNum >= min && p.priceNum <= max);
    }

    // Badge filter
    if (badges.length > 0) {
      list = list.filter((p) => badges.includes(p.badge));
    }

    // Sort
    if (sort === "price-asc") list.sort((a, b) => a.priceNum - b.priceNum);
    if (sort === "price-desc") list.sort((a, b) => b.priceNum - a.priceNum);
    if (sort === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [currentCat, search, sort, minPrice, maxPrice, badges]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const resetFilters = () => {
    setCurrentCat("semua");
    setSearch("");
    setSort("default");
    setMinPrice("");
    setMaxPrice("");
    setBadges([]);
    setVisibleCount(12);
  };

  const toggleBadge = (badge: BadgeType) => {
    if (badges.includes(badge)) {
      setBadges(badges.filter((b) => b !== badge));
    } else {
      setBadges([...badges, badge]);
    }
  };

  return (
    <>
      {/* Toolbar */}
      <div className="sticky top-[68px] z-40 px-[4%] md:px-[6%] py-5 bg-card border-b border-primary/8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-lg shadow-foreground/4">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Cari produk Moorlife..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-2.5 pl-11 pr-4 border-[1.5px] border-primary/20 rounded-full bg-background text-foreground text-sm outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all placeholder:text-muted-foreground"
          />
        </div>

        {/* Sort & Count */}
        <div className="flex items-center gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="py-2 px-4 border-[1.5px] border-primary/20 rounded-full bg-background text-secondary-foreground text-sm outline-none focus:border-primary cursor-pointer"
          >
            <option value="default">Urutan: Default</option>
            <option value="price-asc">Harga: Terendah</option>
            <option value="price-desc">Harga: Tertinggi</option>
            <option value="name-asc">Nama: A–Z</option>
          </select>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            Menampilkan{" "}
            <strong className="text-primary">{visibleProducts.length}</strong>{" "}
            produk
          </span>
        </div>
      </div>

      {/* Catalog Layout */}
      <div
        id="produk"
        className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-[80vh]"
      >
        {/* Sidebar */}
        <aside className="p-6 lg:p-7 bg-card border-r border-primary/8 lg:sticky lg:top-[130px] lg:self-start lg:max-h-[calc(100vh-140px)] lg:overflow-y-auto">
          {/* Categories */}
          <div className="mb-7">
            <h3 className="text-xs font-bold tracking-[1.5px] uppercase text-muted-foreground mb-4">
              Kategori
            </h3>
            <ul className="flex flex-wrap lg:flex-col gap-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      setCurrentCat(cat.id);
                      setVisibleCount(12);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between gap-2 transition-all ${
                      currentCat === cat.id
                        ? "bg-primary text-primary-foreground font-bold"
                        : "bg-transparent text-secondary-foreground hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {cat.emoji} {cat.label}
                    </span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full ${
                        currentCat === cat.id
                          ? "bg-white/25"
                          : "bg-foreground/7"
                      }`}
                    >
                      {getCategoryCount(cat.id)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-7">
            <h3 className="text-xs font-bold tracking-[1.5px] uppercase text-muted-foreground mb-4">
              Rentang Harga
            </h3>
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="flex-1 py-2 px-3 border-[1.5px] border-primary/20 rounded-xl bg-background text-foreground text-sm text-center outline-none focus:border-primary"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="flex-1 py-2 px-3 border-[1.5px] border-primary/20 rounded-xl bg-background text-foreground text-sm text-center outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Badge Filters */}
          <div className="mb-7">
            <h3 className="text-xs font-bold tracking-[1.5px] uppercase text-muted-foreground mb-4">
              Label Produk
            </h3>
            <div className="flex flex-col gap-1.5">
              {[
                { badge: "hot" as BadgeType, label: "🔥 Terlaris (HOT)" },
                { badge: "new" as BadgeType, label: "🆕 Produk Baru (NEW)" },
                { badge: "fav" as BadgeType, label: "⭐ Favorit (FAV)" },
                { badge: "sale" as BadgeType, label: "💸 Diskon (SALE)" },
              ].map((item) => (
                <label
                  key={item.badge}
                  className="flex items-center gap-2.5 cursor-pointer py-1.5"
                >
                  <input
                    type="checkbox"
                    checked={badges.includes(item.badge)}
                    onChange={() => toggleBadge(item.badge)}
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span className="text-sm text-secondary-foreground">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={resetFilters}
            className="w-full py-2.5 bg-transparent border-[1.5px] border-primary/25 text-primary rounded-xl text-sm font-semibold hover:bg-secondary transition-colors"
          >
            ↺ Reset Semua Filter
          </button>
        </aside>

        {/* Products Area */}
        <div className="p-6 md:p-7 lg:px-[6%] lg:py-7">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <span className="text-6xl block mb-4">🔍</span>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Produk Tidak Ditemukan
              </h3>
              <p className="text-sm">
                Coba ubah kata kunci pencarian atau reset filter yang aktif.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {visibleProducts.map((product, idx) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={idx}
                    onOpenDetail={() => setSelectedProduct(product)}
                  />
                ))}
              </div>

              {filteredProducts.length > visibleCount && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((c) => c + 12)}
                    className="bg-card text-primary border-2 border-primary px-9 py-3 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all"
                  >
                    Tampilkan Lebih Banyak ↓
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

function ProductCard({
  product,
  index,
  onOpenDetail,
}: {
  product: Product;
  index: number;
  onOpenDetail: () => void;
}) {
  const waLink = createWhatsAppLink(product);

  const badgeColors: Record<string, string> = {
    hot: "bg-primary text-primary-foreground",
    new: "bg-purple-500 text-white",
    fav: "bg-amber-500 text-white",
    sale: "bg-red-500 text-white",
  };

  return (
    <div
      className="bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
      onClick={onOpenDetail}
    >
      {/* Thumbnail */}
      <div className="h-[195px] relative overflow-hidden">
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${badgeColors[product.badge]}`}
          >
            {product.badgeLabel}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body */}
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

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-base font-bold text-primary">
              {product.price}
            </span>
            <small className="text-[11px] text-muted-foreground block">
              per item
            </small>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetail();
              }}
              className="bg-background text-secondary-foreground border-[1.5px] border-primary/20 px-3 py-1.5 rounded-full text-[12px] font-semibold hover:bg-secondary hover:border-primary hover:text-primary transition-all"
            >
              Detail
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
    </div>
  );
}
