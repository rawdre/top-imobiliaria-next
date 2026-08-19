import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso | Top Imobiliária",
  description: "Condições de uso do site da Top Imobiliária.",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-4xl px-6 py-16 text-slate-800">
        <Link href="/" className="text-sm font-semibold text-red-700">← Voltar ao início</Link>
        <h1 className="mt-6 text-4xl font-bold text-slate-950">Termos de Uso</h1>
        <div className="mt-10 space-y-6 leading-7">
          <p>As informações de imóveis, preços, condições e disponibilidade podem ser atualizadas sem aviso prévio. A confirmação de qualquer negociação deve ser feita com a equipe da Top Imobiliária.</p>
          <p>O uso das ferramentas de avaliação e simulação é informativo e não substitui análise técnica, financeira, jurídica ou comercial individualizada.</p>
          <p>Ao enviar uma solicitação, você concorda que a Top Imobiliária entre em contato para responder ao seu interesse, conforme a Política de Privacidade.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
