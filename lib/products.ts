export const WHATSAPP_NUMBER = "6281249428096"; // Ganti dengan nomor WA Anda

export type BadgeType = "hot" | "new" | "fav" | "sale" | null;

export type Category = "botol" | "kotak" | "toples" | "kulkas" | "masak";

export interface Product {
  id: string;
  name: string;
  cat: Category;
  catLabel: string;
  image: string;
  price: string;
  priceNum: number;
  badge: BadgeType;
  badgeLabel: string | null;
  desc: string;
  features: string[];
}

export const categories: {
  id: Category | "semua";
  label: string;
  image: string;
}[] = [
  { id: "semua", label: "Semua Produk", image: "/images/product-1.jpeg" },
  { id: "botol", label: "Botol & Tumbler", image: "/images/cat-semua.jpg" },
  { id: "kotak", label: "Kotak Makan", image: "/images/cat-semua.jpg" },
  { id: "toples", label: "Toples & Jar", image: "/images/cat-semua.jpg" },
  { id: "kulkas", label: "Wadah Kulkas", image: "/images/cat-semua.jpg" },
  { id: "masak", label: "Alat Masak", image: "/images/cat-semua.jpg" },
];

export const products: Product[] = [
  // BOTOL & TUMBLER
  {
    id: "1",
    name: "EcoBottle 750ml",
    cat: "botol",
    catLabel: "Botol & Tumbler",
    image: "/images/product-1.jpeg",
    price: "Rp 185.000",
    priceNum: 185000,
    badge: "hot",
    badgeLabel: "HOT",
    desc: "Botol minum BPA-free berkapasitas 750ml dengan desain ergonomis dan tutup flip anti bocor. Cocok untuk aktivitas harian, olahraga, atau ke kantor.",
    features: [
      "BPA-free, aman untuk kesehatan",
      "Tutup flip 100% anti bocor",
      "Kapasitas 750ml",
      "Dishwasher safe",
      "Tersedia berbagai pilihan warna",
    ],
  },
  {
    id: "2",
    name: "Tumbler Eco 500ml",
    cat: "botol",
    catLabel: "Botol & Tumbler",
    image: "/images/product-2.jpg",
    price: "Rp 165.000",
    priceNum: 165000,
    badge: null,
    badgeLabel: null,
    desc: "Tumbler stylish dengan insulasi ganda yang menjaga minuman tetap panas atau dingin hingga 6 jam. Sempurna untuk ke kantor atau travelling.",
    features: [
      "Insulasi ganda (double wall)",
      "Panas/dingin hingga 6 jam",
      "Kapasitas 500ml",
      "Pegangan nyaman",
      "Alas anti selip",
    ],
  },
  {
    id: "3",
    name: "Mini Bottle 350ml",
    cat: "botol",
    catLabel: "Botol & Tumbler",
    image: "/images/product-3.jpeg",
    price: "Rp 95.000",
    priceNum: 95000,
    badge: "sale",
    badgeLabel: "SALE",
    desc: "Botol minum mungil berkapasitas 350ml cocok untuk anak-anak atau dibawa saat aktivitas ringan. Ringan dan mudah digenggam.",
    features: [
      "Ringan hanya 120gr",
      "Tutup tekan push-button",
      "Aman untuk anak",
      "BPA-free",
    ],
  },
  // KOTAK MAKAN
  {
    id: "4",
    name: "Lunch Box Set 3in1",
    cat: "kotak",
    catLabel: "Kotak Makan",
    image: "/images/product-4.jpeg",
    price: "Rp 225.000",
    priceNum: 225000,
    badge: "hot",
    badgeLabel: "BEST",
    desc: "Set kotak makan 3 susun praktis untuk membawa bekal. Sistem kedap udara menjaga makanan tetap segar dan tidak tumpah.",
    features: [
      "3 wadah dalam 1 set",
      "Kedap udara & anti bocor",
      "Microwave safe",
      "Dishwasher safe",
      "Compact & ringan",
    ],
  },
  {
    id: "5",
    name: "Bento Box Anak",
    cat: "kotak",
    catLabel: "Kotak Makan",
    image: "/images/product-5.jpeg",
    price: "Rp 175.000",
    priceNum: 175000,
    badge: "fav",
    badgeLabel: "FAV",
    desc: "Kotak bekal anak lucu dan aman, dengan partisi di dalam untuk memisahkan menu makanan agar tidak tercampur.",
    features: [
      "Desain lucu & menarik",
      "Partisi pemisah makanan",
      "BPA-free",
      "Mudah dibuka anak",
      "Tahan banting",
    ],
  },
  {
    id: "6",
    name: "Sandwich Keeper",
    cat: "kotak",
    catLabel: "Kotak Makan",
    image: "/images/product-6.jpeg",
    price: "Rp 115.000",
    priceNum: 115000,
    badge: "new",
    badgeLabel: "NEW",
    desc: "Wadah khusus sandwich dan roti yang menjaga bentuk makanan tetap sempurna dan tidak remuk saat dibawa bepergian.",
    features: [
      "Bentuk pas untuk sandwich",
      "Tutup geser praktis",
      "Mudah dibersihkan",
      "Ukuran compact",
    ],
  },
  // TOPLES & JAR
  {
    id: "7",
    name: "Toples Canister 2L",
    cat: "toples",
    catLabel: "Toples & Jar",
    image: "/images/product-7.jpeg",
    price: "Rp 145.000",
    priceNum: 145000,
    badge: "new",
    badgeLabel: "NEW",
    desc: "Toples penyimpanan makanan kering kapasitas 2 liter dengan segel kedap udara untuk menjaga kesegaran bahan makanan lebih lama.",
    features: [
      "Segel kedap udara presisi",
      "Kapasitas 2 liter",
      "Transparan",
      "Anti pecah",
      "Cocok untuk gula, tepung",
    ],
  },
  {
    id: "8",
    name: "Toples Mini Set 6pcs",
    cat: "toples",
    catLabel: "Toples & Jar",
    image: "/images/product-8.jpeg",
    price: "Rp 135.000",
    priceNum: 135000,
    badge: null,
    badgeLabel: null,
    desc: "Set 6 toples mini ideal untuk menyimpan bumbu, rempah, atau snack kecil. Hemat tempat dan estetik di dapur.",
    features: [
      "Set isi 6 toples",
      "Ukuran mini",
      "Kedap udara",
      "Cocok untuk bumbu",
      "Warna-warni cantik",
    ],
  },
  {
    id: "9",
    name: "Maxi Canister 5L",
    cat: "toples",
    catLabel: "Toples & Jar",
    image: "/images/product-9.jpg",
    price: "Rp 215.000",
    priceNum: 215000,
    badge: null,
    badgeLabel: null,
    desc: "Toples berukuran besar 5 liter cocok untuk menyimpan beras, kacang, atau bahan makanan dalam jumlah banyak.",
    features: [
      "Kapasitas besar 5 liter",
      "Tutup putar rapat",
      "Handle untuk mudah dibawa",
      "Bahan tebal & kokoh",
    ],
  },
  // WADAH KULKAS
  {
    id: "10",
    name: "Fridge Smart Organizer",
    cat: "kulkas",
    catLabel: "Wadah Kulkas",
    image: "/images/product-10.jpg",
    price: "Rp 195.000",
    priceNum: 195000,
    badge: "new",
    badgeLabel: "NEW",
    desc: "Wadah kulkas dengan ventilasi pintar yang membantu buah & sayur tetap segar lebih lama hingga 2x lipat.",
    features: [
      "Ventilasi udara pintar",
      "Segar 2x lebih lama",
      "Stackable",
      "BPA-free & food grade",
    ],
  },
  {
    id: "11",
    name: "Servin Saver Kulkas",
    cat: "kulkas",
    catLabel: "Wadah Kulkas",
    image: "/images/product-11.jpeg",
    price: "Rp 210.000",
    priceNum: 210000,
    badge: null,
    badgeLabel: null,
    desc: "Wadah persegi panjang untuk menyimpan sayuran, buah, dan lauk di kulkas. Tutup rapat mencegah bau bercampur.",
    features: [
      "Tutup snap 4 sisi",
      "Anti bau",
      "Freezer safe",
      "Tumpuk efisien",
    ],
  },
  {
    id: "12",
    name: "Freezer Mate Set",
    cat: "kulkas",
    catLabel: "Wadah Kulkas",
    image: "/images/product-12.jpeg",
    price: "Rp 255.000",
    priceNum: 255000,
    badge: "fav",
    badgeLabel: "FAV",
    desc: "Set 4 wadah freezer dengan tutup rapat yang aman untuk suhu sangat rendah. Ideal untuk menyimpan daging dan ikan beku.",
    features: [
      "Set isi 4 wadah",
      "Tahan suhu -20°C",
      "Tutup kedap 100%",
      "Label tanggal terintegrasi",
    ],
  },
  // ALAT MASAK
  {
    id: "13",
    name: "Quick Chef Chopper",
    cat: "masak",
    catLabel: "Alat Masak",
    image: "/images/product-13.jpg",
    price: "Rp 255.000",
    priceNum: 255000,
    badge: "fav",
    badgeLabel: "PRAKTIS",
    desc: "Alat pencacah manual super cepat untuk memotong bawang, sayuran, dan buah tanpa menitikkan air mata.",
    features: [
      "Manual, tanpa listrik",
      "Pisau stainless steel",
      "Wadah penampung",
      "Mudah dibersihkan",
    ],
  },
  {
    id: "14",
    name: "Micro Steamer",
    cat: "masak",
    catLabel: "Alat Masak",
    image: "/images/product-14.jpeg",
    price: "Rp 195.000",
    priceNum: 195000,
    badge: "new",
    badgeLabel: "NEW",
    desc: "Alat kukus microwave yang memungkinkan kamu memasak sayuran dan makanan sehat hanya dalam 5 menit di microwave.",
    features: [
      "Kukus di microwave",
      "Masak hanya 5 menit",
      "2 ukuran tersedia",
      "Aman untuk microwave",
    ],
  },
  {
    id: "15",
    name: "Mixing Bowl Set",
    cat: "masak",
    catLabel: "Alat Masak",
    image: "/images/product-15.jpeg",
    price: "Rp 175.000",
    priceNum: 175000,
    badge: null,
    badgeLabel: null,
    desc: "Set mangkuk serbaguna untuk mengaduk, menyimpan, atau menyajikan makanan. Bisa dipakai di kulkas dan microwave.",
    features: [
      "Set 3 ukuran",
      "Microwave safe",
      "Tutup rapat",
      "Anti slip di bagian bawah",
    ],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export function createWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Halo Moorlife! 😊\nSaya ingin memesan:\n\n*${product.name}*\nHarga: ${product.price}\n\nMohon info ketersediaan dan cara bayarnya. Terima kasih!`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(cat: Category | "semua"): Product[] {
  if (cat === "semua") return products;
  return products.filter((p) => p.cat === cat);
}

export function getCategoryCount(cat: Category | "semua"): number {
  if (cat === "semua") return products.length;
  return products.filter((p) => p.cat === cat).length;
}
