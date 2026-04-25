import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1B2A4A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topimobiliariadf.com.br"),
  title: "Top Imobiliária DF — Imóveis em Águas Claras, Brasília | Desde 1992",
  description:
    "Top Imobiliária DF — 34+ anos encontrando o imóvel perfeito em Águas Claras, Brasília. Locação, venda e consultoria comercial com aluguel protegido com garantia locatícia.",
  keywords:
    "imobiliária águas claras, aluguel águas claras, apartamento águas claras, imóveis brasília, locação DF, venda de imóveis águas claras",
  authors: [{ name: "Top Imobiliária DF" }],
  openGraph: {
    type: "website",
    title: "Top Imobiliária DF — Imóveis em Águas Claras | Desde 1992",
    description:
      "34+ anos encontrando o imóvel perfeito em Águas Claras, Brasília. Locação, venda e consultoria comercial.",
    url: "https://www.topimobiliariadf.com.br/",
    siteName: "Top Imobiliária DF",
    locale: "pt_BR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Imobiliária DF — Imóveis em Águas Claras",
    description:
      "34+ anos encontrando o imóvel perfeito em Águas Claras, Brasília.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="/assets/top-imobiliaria/legacy-home-inline.css" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
