import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verinno-furniture.vercel.app"),
  title: {
    default: "Verinno Furniture — Timeless Home, Hotel & Office Interiors | Egypt",
    template: "%s · Verinno Furniture",
  },
  description:
    "Verinno Furniture is a leading Egyptian house specialising in supreme-quality home, hotel, and office furniture since 1994. Discover classic, modern, and contemporary collections and visit our showrooms in Maadi, Mohandeseen, Mall of Arabia, and 6th of October.",
  applicationName: "Verinno Furniture",
  authors: [{ name: "Verinno Furniture" }],
  creator: "Verinno Furniture",
  publisher: "Verinno Furniture",
  keywords: [
    "Verinno",
    "Verinno Furniture",
    "فيرينو",
    "Egypt furniture",
    "luxury furniture Cairo",
    "Maadi furniture showroom",
    "Mohandeseen furniture",
    "Mall of Arabia furniture",
    "hotel furniture Egypt",
    "office furniture Egypt",
    "interior design Egypt",
    "classic modern contemporary furniture",
  ],
  openGraph: {
    title: "Verinno Furniture — Timeless interiors since 1994",
    description:
      "30 years of crafting supreme-quality home, hotel, and office furniture in Egypt. Classic, modern, and contemporary collections across four Cairo & Giza showrooms.",
    type: "website",
    locale: "en_US",
    siteName: "Verinno Furniture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verinno Furniture — Timeless interiors since 1994",
    description:
      "Supreme-quality home, hotel, and office furniture in Egypt. Classic, modern, contemporary.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  category: "furniture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable}`}>
      <body className="bg-surface text-fg font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
