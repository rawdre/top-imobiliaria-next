import type { Metadata } from "next";
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
      <AllPropertiesClient />
      <Footer />
    </>
  );
}
