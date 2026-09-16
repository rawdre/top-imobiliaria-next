import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Bus,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  MapPinned,
  TreePine,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title: "Asa Norte Brasilia: Guia Completo, Imoveis, Historia e Qualidade de Vida | Top Imobiliaria",
  description: "Conheca a Asa Norte em Brasilia: superquadras, UnB, Parque Olhos d'Agua, comercio, hospitais, mobilidade, imoveis, qualidade de vida e futuro da regiao.",
  alternates: { canonical: "/regioes/asa-norte" },
  openGraph: {
    title: "Asa Norte: guia completo para morar e investir | Top Imobiliaria",
    description: "Urbanismo, superquadras, natureza, UnB, infraestrutura e mercado imobiliario da Asa Norte.",
    url: "/regioes/asa-norte",
    type: "article",
    locale: "pt_BR",
  },
  keywords: "Asa Norte Brasilia, Asa Norte DF, imoveis Asa Norte, apartamento Asa Norte, morar na Asa Norte, mercado imobiliario Asa Norte, superquadras Asa Norte, UnB Asa Norte, Parque Olhos d'Agua, W3 Norte",
};

// A Asa Norte integra a RA I - Plano Piloto. A PDAD-A 2024 nao fornece
// estatisticas exclusivas para a Asa Norte; todos os indicadores usam esse recorte.
const stats = [
  { value: "207.996", label: "Habitantes do Plano Piloto (RA I)" },
  { value: "107.730", label: "Domicilios ocupados (RA I)" },
  { value: "40,5", label: "Idade media (anos)" },
  { value: "72,2%", label: "Dos domicilios sao apartamentos" },
  { value: "74,3%", label: "Ensino superior completo (25+ anos)" },
  { value: "98,2%", label: "Ruas arborizadas nas proximidades" },
];

const indicators = [
  "1,93 moradores por domicilio", "54,2% dos imoveis proprios ja pagos", "93% dos imoveis proprios com escritura definitiva", "76,4% dos moradores com plano de saude", "92,4% com acesso a internet nos ultimos tres meses", "88,3% com parques ou pracas nas proximidades", "78% com ciclovias ou ciclofaixas nas proximidades", "93,4% com ponto de onibus nas proximidades", "99,7% com rua principal asfaltada", "97,5% com coleta direta de lixo", "98% com agua da rede geral", "94,7% com esgoto da rede geral", "98,1% com energia eletrica da rede geral",
];

const highlights = [
  { title: "Urbanismo singular", text: "Superquadras, pilotis, areas verdes, comercio e equipamentos de vizinhanca formam uma experiencia urbana diferente de um bairro convencional.", icon: Landmark },
  { title: "Conhecimento e servicos", text: "UnB, hospitais, clinicas, comercio e centros institucionais ampliam as opcoes para moradores, estudantes, profissionais e investidores.", icon: GraduationCap },
  { title: "Mercado consolidado", text: "Centralidade, infraestrutura madura e demanda diversificada sustentam a procura por moradia, locacao e imoveis bem posicionados.", icon: TrendingUp },
];

const sections = [
  {
    title: "O que e a Asa Norte?", icon: MapPinned,
    body: [
      "A Asa Norte e uma das duas grandes alas residenciais do Plano Piloto de Brasilia. Ao norte do Eixo Monumental e ao longo do Eixo Rodoviario-Residencial Norte, reune superquadras, entrequadras, comercio local, escolas, hospitais, equipamentos culturais, areas institucionais e grandes eixos de ligacao.",
      "Administrativamente, a Asa Norte integra a Regiao Administrativa I - Plano Piloto. Essa distincao e essencial: os indicadores oficiais de populacao, domicilio, infraestrutura e qualidade de vida apresentados neste guia pertencem ao Plano Piloto como um todo, e nao apenas a Asa Norte.",
    ],
  },
  {
    title: "A superquadra e a escala residencial de Brasilia", icon: Building2,
    body: [
      "A Asa Norte nao nasceu como bairro convencional. Ela foi concebida dentro do sistema urbanistico de Brasilia, no qual a escala residencial combina edificios, pilotis, circulacao de pedestres, faixas verdes, comercio local e equipamentos comunitarios.",
      "Uma superquadra e uma unidade de vizinhanca. Os blocos residenciais ficam distribuidos em area verde; o edificio nao se encosta diretamente na rua; e a entrequadra aproxima comercio e servicos da vida cotidiana. O IPHAN destaca a relacao entre arruamento, cinturao verde, equipamentos e disposicao dos blocos como parte central desse modelo.",
    ],
  },
  {
    title: "100, 200, 300 e 400 Norte: por que a quadra importa", icon: Home,
    body: [
      "A Asa Norte nao e um mercado imobiliario unico. As faixas 100, 200, 300 e 400 foram ocupadas em momentos e com tipologias diferentes. Em termos gerais, as 100 ficam mais proximas do Eixo Monumental; as 200 e 300 concentram superquadras tradicionais; e as 400 apresentam configuracoes e gabaritos proprios.",
      "Por isso, uma busca por imovel deve ir alem do nome da regiao. Posicao na quadra, proximidade do comercio, idade e conservacao do edificio, vagas, orientacao solar, ruido, reforma e regras urbanisticas aplicaveis mudam a experiencia de morar e o comportamento do preco.",
    ],
  },
  {
    title: "Asa Norte como cidade-parque", icon: TreePine,
    body: [
      "A arborizacao faz parte do desenho urbano. As faixas verdes que envolvem as superquadras criam distancia entre predios e vias, ajudam a definir a escala residencial e produzem uma experiencia de caminhada diferente da encontrada em cidades convencionais.",
      "No recorte do Plano Piloto, a PDAD-A 2024 apontou 98,2% de ruas arborizadas e 88,3% de parques ou pracas nas proximidades dos domicilios. Os dados nao sao exclusivos da Asa Norte, mas ajudam a descrever o ambiente urbano onde ela esta inserida.",
    ],
  },
  {
    title: "Parque Ecologico Olhos d'Agua", icon: TreePine,
    body: [
      "Entre as quadras 413 e 414 Norte, o Parque Ecologico Olhos d'Agua protege remanescentes de Cerrado, nascentes, cursos d'agua e mata ciliar em uma area densamente urbanizada. A Lagoa do Sapo e um de seus elementos mais conhecidos.",
      "O parque oferece espacos de caminhada, cooper, trilhas, contemplacao e convivencia. Alem do lazer, atua como corredor ecologico urbano e mostra que protecao ambiental e vida cotidiana podem coexistir dentro da cidade.",
    ],
  },
  {
    title: "UnB, saude e economia do conhecimento", icon: GraduationCap,
    body: [
      "O Campus Darcy Ribeiro da Universidade de Brasilia esta na Asa Norte e e o maior e mais tradicional campus da UnB. Sua presenca influencia circulacao, comercio, cultura, demanda por aluguel e o perfil de quem vive ou trabalha nas proximidades.",
      "A universidade se soma a hospitais, centros de pesquisa, instituicoes publicas, escritorios e servicos especializados. O Hospital Regional da Asa Norte (HRAN), clinicas, consultorios e laboratorios tambem reforcam a diversidade da demanda residencial e de locacao.",
      "Na RA I - Plano Piloto, 74,3% das pessoas com 25 anos ou mais tinham ensino superior completo na PDAD-A 2024. O dado nao pertence exclusivamente a Asa Norte, mas ajuda a caracterizar o ambiente urbano do qual ela faz parte.",
    ],
  },
  {
    title: "Comercio, gastronomia e vida de bairro", icon: Building2,
    body: [
      "O comercio local foi planejado como parte da vida de vizinhanca. Padarias, mercados, restaurantes, farmacias, academias, clinicas, pet shops e lojas especializadas permitem resolver muitas necessidades perto de casa, sem que o uso comercial ocupe indistintamente o terreo dos blocos residenciais.",
      "A combinacao entre moradores, estudantes, professores, profissionais, hospitais, escritorios e visitantes tambem sustenta uma cena gastronomica diversa, principalmente proxima a eixos comerciais e areas de maior circulacao. Isso preserva uma sensacao de bairro mesmo em uma area central da capital.",
    ],
  },
  {
    title: "W3 Norte, L2 Norte e Eixao: mobilidade regional", icon: Bus,
    body: [
      "A W3 Norte e um eixo de comercio, servicos e conexao. A L2 Norte tem papel relevante na ligacao com a UnB, areas institucionais e o centro. O Eixo Rodoviario estrutura a circulacao entre as faixas residenciais e conecta a Asa Norte aos demais eixos de Brasilia.",
      "A regiao se relaciona com L1 Norte, EPIA, Eixo Monumental, Noroeste e Lago Norte. Em 2026, o GDF anunciou alteracoes de itinerarios em linhas entre a Asa Norte, a Vila Telebrasília e o Aeroporto. Esse tipo de atualizacao reforca que a Asa Norte e um dos nos de transporte da capital, e nao uma area isolada.",
      "No Plano Piloto, 93,4% dos domicilios informaram ponto de onibus nas proximidades na PDAD-A 2024. A mobilidade real, entretanto, varia conforme a quadra, o destino e o horario.",
    ],
  },
  {
    title: "Asa Norte, Noroeste, Lago Norte e Plano Piloto", icon: MapPinned,
    body: [
      "O Noroeste e uma expansao urbana vinculada ao Plano Piloto e tem relacao direta com a Asa Norte. A proximidade influencia transito, comercio, demanda por servicos, mobilidade e comparacao entre produtos imobiliarios. Em contrapartida, a Asa Norte oferece uma infraestrutura urbana consolidada que novos setores levam tempo para formar.",
      "A conexao com o Lago Norte tambem amplia o raio de comercio, lazer e moradia da area norte. A Asa Norte esta dentro do Plano Piloto, nao fora dele; por isso, quem pesquisa morar no Plano Piloto pode estar buscando Asa Norte, Asa Sul ou outros setores residenciais centrais.",
      "A Asa Sul compartilha a mesma concepcao urbanistica geral, mas possui historia de ocupacao e referencias territoriais proprias. A escolha nao e sobre uma ser melhor que a outra: depende da quadra, do imovel e das prioridades de cada pessoa.",
    ],
  },
  {
    title: "Mercado imobiliario: o valor da quadra e do imovel", icon: TrendingUp,
    body: [
      "O mercado imobiliario da Asa Norte e heterogeneo. Nao existe um unico preco ou um perfil padrao. Quadra, bloco, andar, vista, reforma, idade do edificio, vagas, planta, proximidade do comercio, do parque ou dos eixos viarios, ventilacao e estado das areas comuns podem alterar de forma importante o valor percebido e a liquidez.",
      "Parte relevante do estoque foi construida ha decadas. Isso pode significar plantas generosas, boa ventilacao e localizacao excelente, mas tambem demanda analise de instalacoes, acessibilidade, elevadores, condominio e necessidade de modernizacao. Um imovel antigo reformado pode ter proposta de mercado muito diferente de uma unidade original.",
      "A locacao atende servidores, estudantes, professores, pesquisadores, medicos, profissionais liberais, familias e pessoas transferidas para Brasilia. A presenca da UnB amplia a diversidade dessa procura, mas a decisao de investimento deve considerar preco de aquisicao, aluguel potencial, condominio, IPTU, reforma, vacancia e demanda do endereco especifico.",
    ],
  },
  {
    title: "Patrimonio, PPCUB e modernizacao", icon: Landmark,
    body: [
      "A localizacao dentro do conjunto urbanistico protegido de Brasilia e um ativo que nao pode ser recriado. As superquadras, areas verdes, vias e espacos livres fazem parte de uma concepcao urbanistica reconhecida internacionalmente e sujeita a regras de preservacao.",
      "O PPCUB e referencia importante para entender uso, ocupacao e preservacao do conjunto. A pagina diferencia legislacao vigente, obra em andamento, proposta e cenario: uma proposta de alteracao legislativa nao deve ser apresentada como regra ja aprovada. Qualquer intervencao fisica precisa ser analisada conforme o imovel, o condominio e a norma aplicavel.",
      "O desafio e modernizar sem descaracterizar: atualizar instalacoes, acessibilidade, seguranca, areas comuns, eficiencia energetica e paisagismo enquanto se preserva a identidade urbana que torna a Asa Norte singular.",
    ],
  },
  {
    title: "O futuro da Asa Norte", icon: TrendingUp,
    body: [
      "A Asa Norte nao precisa simplesmente crescer. Como regiao consolidada, seu futuro esta mais ligado a qualificacao: manutencao de areas publicas, arborizacao, acessibilidade, mobilidade, atualizacao do comercio, integracao com o Noroeste e renovacao de edificios e condominios.",
      "Retrofit, reformas, modernizacao de portarias e elevadores, eficiencia energetica, infraestrutura digital e requalificacao de areas comuns sao tendencias a acompanhar. Nao ha valorizacao futura garantida, mas a combinacao de centralidade, diversidade de publicos e estrutura urbana consolidada e um fundamento relevante para analise de longo prazo.",
    ],
  },
];

const faqs = [
  { q: "A Asa Norte e uma Regiao Administrativa?", a: "Nao. A Asa Norte integra a RA I - Plano Piloto. Os dados da PDAD-A 2024 usados neste guia sao indicadores oficiais do Plano Piloto, e nao estatisticas exclusivas da Asa Norte." },
  { q: "A Asa Norte e boa para morar?", a: "A regiao combina localizacao central, comercio, servicos, areas verdes, universidade, hospitais e mobilidade. A adequacao depende do perfil do morador e da localizacao especifica do imovel." },
  { q: "Qual a diferenca entre as quadras da Asa Norte?", a: "As faixas 100, 200, 300 e 400 possuem posicoes, periodos de ocupacao e tipologias diferentes. O endereco pode alterar planta, gabarito, proximidade de comercio, circulacao, ruido e valor de mercado." },
  { q: "A Asa Norte e interessante para locacao?", a: "A UnB, hospitais, comercio, servicos e areas institucionais criam procura por diversos perfis de locacao. A viabilidade depende do imovel, condominio, custos e demanda do endereco especifico." },
  { q: "O Parque Olhos d'Agua fica na Asa Norte?", a: "Sim. O Parque Ecologico Olhos d'Agua fica nas proximidades das SQN 413 e 414 e e uma referencia ambiental e de lazer da regiao." },
  { q: "O Noroeste influencia a Asa Norte?", a: "Sim. A proximidade entre os setores cria relacoes de mobilidade, comercio, servicos e mercado imobiliario. Cada um, porem, possui perfil urbano e estoque de imoveis proprios." },
];

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Asa Norte Brasilia: Guia Completo, Imoveis, Historia e Qualidade de Vida", description: "Guia da Asa Norte em Brasilia: superquadras, Parque Olhos d'Agua, UnB, mobilidade, infraestrutura e mercado imobiliario.", author: { "@type": "Organization", name: "Top Imobiliária" }, publisher: { "@type": "Organization", name: "Top Imobiliária" }, mainEntityOfPage: "https://www.topimobiliaria.com/regioes/asa-norte" };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" }, { "@type": "ListItem", position: 2, name: "Regiões", item: "https://www.topimobiliaria.com/regioes" }, { "@type": "ListItem", position: 3, name: "Asa Norte", item: "https://www.topimobiliaria.com/regioes/asa-norte" }] };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

export default function AsaNortePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Hub de Inteligencia de Brasilia</div>
            <h1>Asa Norte: onde o urbanismo moderno de Brasilia encontra uma cidade viva</h1>
            <p>Superquadras, Cerrado urbano, UnB, hospitais, comercio, cultura e infraestrutura fazem da Asa Norte uma parte essencial da experiencia de morar, trabalhar e investir no Plano Piloto.</p>
            <div className="region-hero-actions"><Link href="/imoveis?regiao=Asa%20Norte">Ver imoveis na Asa Norte</Link><Link href="/#simulador">Avaliar meu imovel</Link></div>
          </div>
        </section>
        <section className="region-content">
          <div className="region-inner">
            <div className="region-stat-grid" aria-label="Indicadores do Plano Piloto, RA I">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
            <div className="region-highlight-grid">{highlights.map((item) => <article className="region-highlight" key={item.title}><item.icon size={22} /><h2>{item.title}</h2><p>{item.text}</p></article>)}</div>
            <article className="region-article">
              <div className="region-intro-block"><h2>Asa Norte em numeros</h2><p><strong>Leitura correta dos dados:</strong> a Asa Norte nao e uma Regiao Administrativa independente. Ela integra a RA I - Plano Piloto. Portanto, todos os indicadores deste bloco sao oficiais para o Plano Piloto e nao devem ser interpretados como estatisticas exclusivas da Asa Norte.</p><ul className="region-bullets">{indicators.map((indicator) => <li key={indicator}>{indicator}</li>)}</ul><p>Fonte: IPEDF - PDAD Ampliada 2024, pesquisa domiciliar por amostragem realizada nas Regioes Administrativas do Distrito Federal.</p></div>
              {sections.map((section) => <section className="region-section" key={section.title}><div className="region-section-title"><section.icon size={22} /><h2>{section.title}</h2></div>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre a Asa Norte">{faqs.map((faq) => <div key={faq.q}><h2>{faq.q}</h2><p>{faq.a}</p></div>)}</section>
              <section className="region-cta"><h2>Como a Top Imobiliaria pode ajudar</h2><p>Ha mais de 30 anos, a Top Imobiliaria acompanha o mercado imobiliario do Distrito Federal. Nossa equipe apoia proprietarios, compradores, investidores, locadores e locatarios em compra, venda, locacao, administracao e avaliacao de imoveis.</p><p>Para uma decisao bem fundamentada na Asa Norte, conte com uma analise que considere o imovel, a quadra, a documentacao e o momento do mercado - nao apenas uma media generica da regiao.</p><div className="region-cta-actions"><Link href="/imoveis?regiao=Asa%20Norte">Imoveis na Asa Norte</Link><Link href="/#simulador">Avaliacao de imoveis</Link><Link href="/#administracao">Administracao imobiliaria</Link><Link href="/regioes/asa-sul">Asa Sul</Link><Link href="/regioes/lago-norte">Lago Norte</Link><Link href="/regioes/noroeste">Noroeste</Link><Link href="/regioes/cruzeiro">Cruzeiro</Link><Link href="/regioes/sudoeste">Sudoeste</Link><Link href="/regioes/aguas-claras">Aguas Claras</Link><Link href="/regioes/park-way">Park Way</Link></div></section>
              <section className="region-sources"><h2>Fontes e atualizacao</h2><ul><li><a href="https://pdad.ipe.df.gov.br/" target="_blank" rel="noreferrer">IPEDF - PDAD Ampliada 2024, resultados da RA I - Plano Piloto</a></li><li><a href="https://www.gov.br/iphan/pt-br/assuntos/noticias/livro-a-invencao-da-superquadra-e-relancado-em-brasilia-df" target="_blank" rel="noreferrer">IPHAN - A invencao da superquadra</a></li><li><a href="https://www.unb.br/campi/darcy-ribeiro" target="_blank" rel="noreferrer">Universidade de Brasilia - Campus Darcy Ribeiro</a></li><li>Brasilia Ambiental e documentacao publica sobre o Parque Ecologico Olhos d'Agua.</li></ul><p>Ultima atualizacao editorial: setembro de 2026.</p></section>
            </article>
          </div>
        </section>
      </main>
      <Footer /><BackToTopButton /><WhatsAppButton /><SiteAssistant />
    </>
  );
}
