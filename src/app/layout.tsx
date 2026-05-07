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
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B2A4A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topimobiliaria.com"),
  alternates: {
    canonical: "/",
  },
  title: "Top Imobiliária DF — Imobiliária em Águas Claras há 34 anos",
  description:
    "Imobiliária em Águas Claras com 34 anos de mercado. Consultoria imobiliária personalizada no DF para vender, alugar, avaliar imóveis e comparar consórcio x financiamento com ferramentas abertas.",
  keywords:
    "Imobiliária em Águas Claras 34 anos, Melhor imobiliária para vender imóvel em Brasília, Especialista em alto padrão Sudoeste e Noroeste, Consultoria imobiliária personalizada DF, avaliação de imóveis em Águas Claras grátis, simulador consórcio ou financiamento imobiliário",
  authors: [{ name: "Top Imobiliária DF" }],
  openGraph: {
    type: "website",
    title: "Top Imobiliária DF — Imobiliária em Águas Claras há 34 anos",
    description:
      "Consultoria imobiliária personalizada no DF para venda, locação, avaliação gratuita e comparação aberta de consórcio x financiamento.",
    url: "https://www.topimobiliaria.com/",
    siteName: "Top Imobiliária DF",
    locale: "pt_BR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Imobiliária DF — Imobiliária em Águas Claras",
    description:
      "34 anos de mercado em Brasília, Águas Claras, Sudoeste e Noroeste, com ferramentas abertas para avaliação e decisão de compra.",
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
