# Inteligência comercial e analytics - Top Imobiliária

## O que foi implementado

- Um carregador único em /assets/top-imobiliaria/analytics.js cobre as rotas Next e as 110 páginas HTML públicas.
- Google Tag Manager só é carregado depois do consentimento opcional para analytics ou marketing.
- O banner separa cookies necessários, medição de audiência e marketing. A preferência fica somente no navegador do visitante.
- O dataLayer recebe somente eventos comportamentais. Campos de formulário, mensagens pré-preenchidas de WhatsApp, nome, telefone, e-mail, CPF e endereço são bloqueados antes do envio.
- A verificação de propriedade do Google é lida de NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION.

As páginas em public/legacy permanecem fora do escopo porque são superfícies legadas e não indexáveis. A home Next já mede as seções legadas nela incorporadas.

## Eventos

| Evento | Quando dispara | Dados permitidos |
| --- | --- | --- |
| page_view | Página aberta ou rota alterada | caminho, título, UTMs |
| property_view | Página individual de imóvel aberta | ID/slug, modalidade, faixa de preço |
| property_card_click | Card de imóvel aberto | ID/slug, modalidade |
| property_search / filter_change | Filtro ou ordenação | tipo, ordenação, região selecionada |
| whatsapp_click | Clique em WhatsApp | origem, ID do imóvel quando aplicável |
| phone_click / email_click | Clique em telefone ou e-mail | origem |
| social_click | Clique em rede social | rede, origem |
| lead_submit | Formulário enviado | identificador e categoria |
| owner_interest | CTA de proprietário | aluguel, venda, avaliação ou administração |
| owner_lead | Formulário de proprietário | tipo e origem |
| valuation_request | Lead de avaliação | origem |
| assistant_open / assistant_intent | Interação com Topinho | intenção, sem texto livre |

## Configuração obrigatória no Google

O código não cria nem altera contas externas. Um administrador da Top com acesso às propriedades deve:

1. Abrir o container indicado por NEXT_PUBLIC_GTM_ID.
2. Criar uma tag Google tag / GA4 com o ID de medição G-....
3. Desativar o page_view automático da tag, pois o site envia esse evento manualmente para cobrir rotas SPA.
4. Criar gatilhos de Evento personalizado no GTM e tags GA4 para os eventos da tabela.
5. Marcar owner_lead, valuation_request e, se desejado, lead_submit como eventos principais no GA4.
6. Exigir analytics_storage para analytics; e ad_storage, ad_user_data e ad_personalization para marketing.
7. Vincular Search Console e Google Ads em Administrador > Vinculações de produto do GA4.
8. Manter o sitemap enviado no Search Console e solicitar indexação somente das URLs prioritárias após publicação.

## Dashboard recomendado

Criar no Looker Studio conectado à propriedade GA4:

- Usuários, novos usuários, usuários recorrentes e sessões.
- Páginas e imóveis mais visualizados.
- Canal, origem/mídia, campanha e conteúdo UTM.
- Cliques em WhatsApp, telefone, e-mail e redes sociais.
- Formulários enviados, owner_interest, owner_lead e valuation_request.
- Taxa de conversão de proprietário: owner_lead / sessões.
- Indicador principal: PROPRIETÁRIOS CAPTADOS = total de owner_lead.

Custo por lead de proprietário exige duas fontes: owner_lead no GA4 e gasto de mídia. Google Ads pode ser vinculado; Meta/Instagram, QR Codes e outras fontes exigem importação de custo por planilha ou conector. Fórmula: custo da campanha / owner_lead atribuídos.

## Padrão de UTMs

Use valores em minúsculas e hífens:

    utm_source=instagram
    utm_medium=social
    utm_campaign=proprietarios
    utm_content=episodio-01

Também são aceitos utm_term, Google CPC e QR Codes. Nunca inclua nome, telefone, e-mail, CPF, endereço ou outro dado identificável em UTMs.

## Leads e CRM

Os formulários legados seguem o destino já existente e o WhatsApp abre o canal comercial. Não há envio de PII para GA4/GTM nem integração automática de CRM.

Antes de conectar um CRM, definir:

1. Responsável pelo dado e base legal de contato.
2. Campos mínimos: nome, telefone/e-mail, tipo de interesse, origem/UTMs, URL de conversão e data.
3. Ferramenta escolhida, permissões, retenção e rotina de exclusão.
4. Endpoint seguro no servidor ou integração oficial. Nunca expor token de CRM no navegador.

## Teste de aceite

1. Em janela anônima, não deve haver chamadas ao GTM antes do consentimento.
2. Ao recusar opcionais, eventos de analytics não devem entrar no dataLayer.
3. Ao aceitar analytics, conferir page_view no Preview do GTM e no DebugView do GA4.
4. Testar imóvel, filtro, WhatsApp, telefone, e-mail e formulário de proprietário.
5. Confirmar que os eventos não contêm campos pessoais ou mensagens.
6. Validar o banner e as páginas /privacidade e /termos no desktop e no mobile.

## Governança e LGPD

Este documento descreve a implementação técnica. A Top Imobiliária deve validar com sua assessoria jurídica a política definitiva, base legal, prazos de retenção, contratos com fornecedores e atendimento aos titulares.
