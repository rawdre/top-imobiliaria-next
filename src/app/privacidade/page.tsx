import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Top Imobiliária",
  description: "Como a Top Imobiliária trata dados pessoais, cookies e métricas de navegação.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-4xl px-6 py-16 text-slate-800">
        <Link href="/" className="text-sm font-semibold text-red-700">← Voltar ao início</Link>
        <h1 className="mt-6 text-4xl font-bold text-slate-950">Política de Privacidade</h1>
        <p className="mt-4 text-slate-600">Última atualização: 15 de agosto de 2026.</p>

        <div className="mt-10 space-y-8 leading-7">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Dados tratados</h2>
            <p>Quando você preenche um formulário ou inicia contato, a Top Imobiliária pode receber os dados que você informar, como nome, telefone, e-mail, interesse e informações do imóvel. Esses dados são usados somente para atender à solicitação e conduzir o relacionamento comercial.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Medição de navegação</h2>
            <p>Com sua autorização, usamos Google Tag Manager e Google Analytics para medir páginas visitadas, origem de campanha, busca de imóveis, interações e conversões. Não enviamos nome, telefone, e-mail, CPF, endereço, mensagens ou campos preenchidos para essas ferramentas.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Cookies e preferências</h2>
            <p>Cookies necessários mantêm o funcionamento do site. Cookies analíticos e de marketing são opcionais e podem ser aceitos, recusados ou personalizados pelo aviso de consentimento. A preferência fica armazenada neste navegador.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Compartilhamento e segurança</h2>
            <p>Os contatos são encaminhados aos canais de atendimento da Top Imobiliária e poderão ser centralizados em ferramenta de CRM aprovada pela empresa. O acesso deve ser limitado à equipe autorizada e protegido por controles administrativos e técnicos adequados.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Seus direitos</h2>
            <p>Você pode solicitar informações, correção, atualização ou exclusão de seus dados, conforme a LGPD, pelo e-mail <a className="font-semibold text-red-700" href="mailto:contatotopimobiliaria@gmail.com">contatotopimobiliaria@gmail.com</a>.</p>
          </section>
          <p className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">Este aviso deve ser revisado e aprovado pela responsável legal da Top Imobiliária antes de ser considerado a política definitiva da empresa.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
