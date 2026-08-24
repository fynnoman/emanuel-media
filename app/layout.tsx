import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emanuel-media.de"),
  title: {
    default: "Emanuel Media — Qualität aus einer Hand",
    template: "%s · Emanuel Media",
  },
  description:
    "Druckerei in Saarlouis-Roden. Textildruck, Visitenkarten, Flyer, Bücher, Kalender, Banner. Kreativ, schnell, individuell — inhabergeführt von Annette Emanuel-Decker.",
  openGraph: {
    title: "Emanuel Media — Qualität aus einer Hand",
    description:
      "Textildruck, Drucksachen und Werbetechnik aus Saarlouis-Roden. Persönlich beraten, sauber gedruckt.",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable} antialiased`}
    >
      <body className="min-h-full bg-white text-ink">{children}</body>
    </html>
  );
}
