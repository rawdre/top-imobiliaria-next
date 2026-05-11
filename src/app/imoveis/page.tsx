import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllPropertiesClient from "@/components/AllPropertiesClient";

export const metadata: Metadata = {
  title: "Imóveis à venda e para alugar em Brasília | Top Imobiliária",
  description:
    "Veja todos os imóveis publicados pela Top Imobiliária em Brasília e Águas Claras. Filtre por destaque, recentes, venda, aluguel e região.",
  alternates: {
    canonical: "/imoveis",
  },
};

export default function ImoveisPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<ListingsFallback />}>
        <AllPropertiesClient />
      </Suspense>
      <Footer />
    </>
  );
}

function ListingsFallback() {
  return (
    <main className="all-properties-page">
      <section className="all-properties-hero">
        <div className="all-properties-inner">
          <div className="all-properties-kicker">Imóveis publicados</div>
          <h1>Todos os imóveis anunciados</h1>
          <p>Carregando a vitrine completa de imóveis ativos da Top Imobiliária.</p>
        </div>
      </section>
      <section className="all-properties-content">
        <div className="all-properties-inner">
          <div className="all-properties-state">Carregando imóveis publicados...</div>
        </div>
      </section>
    </main>
  );
}
