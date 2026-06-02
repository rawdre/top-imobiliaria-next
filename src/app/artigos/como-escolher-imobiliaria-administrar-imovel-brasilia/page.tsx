import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HelpCircle,
  Home,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title: "Como escolher uma imobiliária para administrar imóvel em Brasília",
  description:
    "Guia completo para proprietários: veja como avaliar uma imobiliária administradora em Brasília, quais erros evitar e quais perguntas fazer antes de contratar.",
  alternates: {
    canonical: "/artigos/como-escolher-imobiliaria-administrar-imovel-brasilia",
  },
  keywords:
    "melhor imobiliária para administrar imóvel em Brasília, como escolher uma imobiliária, administração de imóveis em Brasília, vale a pena contratar uma imobiliária, imobiliária administradora Brasília",
};

const heroCards = [
  {
    title: "Segurança patrimonial",
    text: "A administração correta reduz riscos cadastrais, contratuais, financeiros e jurídicos.",
    icon: ShieldCheck,
  },
  {
    title: "Gestão profissional",
    text: "Cobrança, contratos, vistorias, atendimento e prestação de contas precisam de processo.",
    icon: ClipboardCheck,
  },
  {
    title: "Decisão com critério",
    text: "A menor taxa nem sempre representa o menor custo real para o proprietário.",
    icon: BadgeCheck,
  },
];

const adminDuties = [
  "Captação de inquilinos qualificados",
  "Análise cadastral e avaliação de risco",
  "Elaboração e gestão de contratos",
  "Cobrança de aluguel e encargos",
  "Gestão financeira e prestação de contas",
  "Atendimento ao proprietário e ao inquilino",
  "Intermediação de conflitos",
  "Organização de vistorias e registros do imóvel",
];

const mistakes = [
  {
    title: "Escolher apenas pela menor taxa",
    text: "Uma taxa baixa pode parecer vantajosa, mas pode custar caro se a operação não tiver estrutura para prevenir inadimplência, responder dúvidas ou resolver problemas com agilidade.",
  },
  {
    title: "Não avaliar experiência",
    text: "Administração imobiliária exige conhecimento prático de contratos, mercado local, perfil de inquilinos, cobrança e negociação.",
  },
  {
    title: "Ignorar o atendimento",
    text: "O proprietário precisa saber como será informado, quem responde por sua carteira e qual é o padrão de retorno em situações simples e urgentes.",
  },
  {
    title: "Não verificar estrutura operacional",
    text: "Sem processo, tecnologia e equipe, tarefas importantes podem ficar soltas: reajustes, repasses, cobranças, vistorias e documentação.",
  },
  {
    title: "Não pesquisar reputação",
    text: "A reputação ajuda a entender como a imobiliária se comporta quando precisa resolver problemas, e não apenas quando está tentando fechar contrato.",
  },
];

const evaluationCriteria = [
  "Tempo de mercado e histórico de atuação local",
  "Estrutura da equipe e divisão de responsabilidades",
  "Tecnologia usada na gestão e comunicação",
  "Clareza na prestação de contas",
  "Transparência sobre taxas, prazos e processos",
  "Capacidade de resolver problemas sem transferir tudo ao proprietário",
];

const questions = [
  "Como funciona a administração do imóvel no dia a dia?",
  "Como são feitas as cobranças e quando ocorre o repasse?",
  "Como o proprietário recebe a prestação de contas?",
  "Quem atende o proprietário quando surge uma dúvida ou problema?",
  "Como são tratadas inadimplências?",
  "Como são registradas vistorias, reparos e comunicações importantes?",
  "Quais taxas existem além da taxa de administração?",
  "Qual é o processo para escolher e aprovar um inquilino?",
];

export default function PillarArticlePage() {
  return (
    <>
      <Header />
      <main className="pillar-page">
        <section className="pillar-hero">
          <div className="pillar-inner">
            <div className="pillar-kicker">Artigo pilar 01</div>
            <h1>Como escolher uma imobiliária para administrar seu imóvel em Brasília</h1>
            <p>
              Um guia completo para proprietários que querem tomar uma decisão
              mais segura, evitar problemas na locação e entender quais critérios
              realmente importam antes de contratar uma imobiliária administradora.
            </p>
            <div className="pillar-actions">
              <Link href="/#contato">Falar com a Top</Link>
              <Link href="/#simulador">Avaliar meu imóvel</Link>
            </div>
          </div>
        </section>

        <section className="pillar-content">
          <div className="pillar-inner">
            <div className="pillar-card-grid">
              {heroCards.map((card) => (
                <article className="pillar-card" key={card.title}>
                  <card.icon size={22} />
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>

            <article className="pillar-article">
              <section className="pillar-section">
                <div className="pillar-section-title">
                  <Home size={24} />
                  <h2>Por que essa escolha é tão importante?</h2>
                </div>
                <p>
                  Para muitos proprietários, o imóvel representa patrimônio,
                  renda recorrente, planejamento familiar e segurança financeira.
                  Por isso, escolher quem vai administrar esse bem é uma decisão
                  estratégica.
                </p>
                <p>
                  O erro mais comum é avaliar uma imobiliária apenas pela taxa de
                  administração. Preço importa, mas não pode ser o único critério.
                  Uma gestão mal conduzida pode gerar inadimplência, atrasos,
                  conflitos, desgaste com inquilinos, falhas contratuais e perda
                  de rentabilidade.
                </p>
                <p>
                  A administração profissional existe para reduzir riscos,
                  organizar processos e dar mais tranquilidade ao proprietário.
                  A boa imobiliária não apenas anuncia o imóvel. Ela acompanha a
                  locação antes, durante e depois da entrada do inquilino.
                </p>
              </section>

              <section className="pillar-section">
                <div className="pillar-section-title">
                  <Building2 size={24} />
                  <h2>O que faz uma imobiliária administradora?</h2>
                </div>
                <p>
                  Uma imobiliária administradora atua como ponte entre
                  proprietário e inquilino, cuidando da operação da locação para
                  que o imóvel gere renda com mais previsibilidade e controle.
                </p>
                <div className="pillar-check-grid">
                  {adminDuties.map((item) => (
                    <div key={item}>
                      <CheckCircle2 size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Quando esses pontos são bem organizados, o proprietário ganha
                  tempo e reduz a chance de ter que lidar diretamente com
                  situações operacionais, financeiras ou documentais.
                </p>
              </section>

              <section className="pillar-section">
                <div className="pillar-section-title">
                  <AlertTriangle size={24} />
                  <h2>Principais erros dos proprietários ao escolher uma imobiliária</h2>
                </div>
                <div className="pillar-list-cards">
                  {mistakes.map((mistake) => (
                    <div key={mistake.title}>
                      <h3>{mistake.title}</h3>
                      <p>{mistake.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="pillar-section">
                <div className="pillar-section-title">
                  <ClipboardCheck size={24} />
                  <h2>Como avaliar uma imobiliária antes de contratar</h2>
                </div>
                <p>
                  Uma boa avaliação passa por critérios objetivos. O proprietário
                  deve observar se a empresa tem experiência, processo,
                  tecnologia, comunicação clara e capacidade real de resolver
                  problemas.
                </p>
                <ul className="pillar-bullets">
                  {evaluationCriteria.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  O ideal é procurar uma administradora que consiga explicar sua
                  operação com clareza. Se o proprietário não entende como a
                  empresa trabalha antes da contratação, é provável que tenha
                  dificuldade de acompanhar a gestão depois.
                </p>
              </section>

              <section className="pillar-section">
                <div className="pillar-section-title">
                  <Sparkles size={24} />
                  <h2>A importância da tecnologia na administração imobiliária</h2>
                </div>
                <p>
                  A tecnologia passou a ser parte essencial da administração de
                  imóveis. Ela ajuda a reduzir retrabalho, acelerar comunicação,
                  documentar processos e facilitar o acompanhamento por parte do
                  proprietário.
                </p>
                <p>
                  Atendimento digital, assinaturas eletrônicas, portais do
                  proprietário, automação de processos e inteligência artificial
                  podem tornar a gestão mais organizada. Mas tecnologia sozinha
                  não resolve tudo. Ela precisa estar combinada com equipe
                  preparada, responsabilidade e bom senso operacional.
                </p>
              </section>

              <section className="pillar-section">
                <div className="pillar-section-title">
                  <HelpCircle size={24} />
                  <h2>O que perguntar antes de contratar uma imobiliária?</h2>
                </div>
                <p>
                  Antes de assinar qualquer contrato de administração, o
                  proprietário deve fazer perguntas diretas. Isso ajuda a
                  comparar empresas e entender se a gestão será realmente
                  transparente.
                </p>
                <div className="pillar-question-grid">
                  {questions.map((question) => (
                    <div key={question}>
                      <HelpCircle size={17} />
                      <span>{question}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="pillar-section">
                <div className="pillar-section-title">
                  <FileText size={24} />
                  <h2>Vale a pena administrar sozinho?</h2>
                </div>
                <p>
                  Administrar sozinho pode parecer uma forma de economizar a
                  taxa de administração. Em alguns casos, proprietários com tempo,
                  conhecimento jurídico, familiaridade com contratos e boa
                  organização conseguem conduzir parte do processo.
                </p>
                <p>
                  Porém, existem custos ocultos: tempo investido, risco de
                  análise cadastral insuficiente, dificuldade de cobrança,
                  conflitos com inquilinos, falhas em vistorias, problemas de
                  documentação e insegurança em situações de inadimplência.
                </p>
                <p>
                  A pergunta correta não é apenas se a administração própria é
                  possível. A pergunta é se ela oferece o mesmo nível de
                  segurança, eficiência e tranquilidade que uma gestão
                  profissional bem estruturada.
                </p>
              </section>

              <section className="pillar-section">
                <div className="pillar-section-title">
                  <MessageSquare size={24} />
                  <h2>Como funciona a administração de imóveis na Top Imobiliária</h2>
                </div>
                <p>
                  A Top Imobiliária atua no mercado imobiliário do Distrito
                  Federal há mais de três décadas, acompanhando proprietários,
                  compradores, investidores e locatários em diferentes etapas da
                  jornada imobiliária.
                </p>
                <p>
                  Na administração de imóveis, o foco está em combinar
                  experiência, transparência, tecnologia e relacionamento com o
                  proprietário. O objetivo é oferecer uma gestão que ajude o
                  imóvel a gerar renda com mais segurança e organização.
                </p>
                <p>
                  Mais do que anunciar um imóvel, a administração precisa cuidar
                  do processo como um todo: atendimento, documentação, contratos,
                  comunicação, acompanhamento financeiro e suporte quando surgem
                  dúvidas ou problemas.
                </p>
              </section>

              <section className="pillar-final">
                <h2>Conclusão</h2>
                <p>
                  Escolher uma imobiliária para administrar um imóvel em
                  Brasília exige análise cuidadosa. A decisão deve considerar
                  segurança, eficiência, estrutura, transparência e confiança.
                </p>
                <p>
                  A escolha correta pode evitar problemas, reduzir riscos e
                  aumentar a rentabilidade do imóvel ao longo do tempo. Para o
                  proprietário, o ideal é buscar uma empresa que ofereça
                  conhecimento de mercado, processo organizado e capacidade real
                  de cuidar do patrimônio com responsabilidade.
                </p>
                <div className="pillar-actions pillar-actions-dark">
                  <Link href="/#contato">Conversar com a Top</Link>
                  <Link href="/#proprietarios">Sou proprietário</Link>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
      <WhatsAppButton />
      <SiteAssistant />
    </>
  );
}
