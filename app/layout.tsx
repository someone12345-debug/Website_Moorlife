import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Moorlife - Toko Moorlife Original Terpercaya",
  description:
    "Toko Moorlife original terpercaya. Produk berkualitas, harga bersahabat, pelayanan ramah. Pesan langsung via WhatsApp.",
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#FF5C2B",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${jakarta.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
