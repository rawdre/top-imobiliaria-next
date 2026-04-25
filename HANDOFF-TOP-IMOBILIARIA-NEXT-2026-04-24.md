# Handoff: Top Imobiliária Next

## Identificação

- Projeto: `top-imobiliaria-next`
- Caminho local: `C:\Users\Andre Raw\top-imobiliaria-next`
- Stack principal:
  - Next.js 16.2.4
  - React 19.2.4
  - TypeScript
  - Supabase JS
  - Framer Motion
  - Tailwind CSS 4

## Objetivo deste handoff

Este arquivo documenta a estrutura atual do projeto `top-imobiliaria-next` para revisão em outra máquina, sem depender da conversa original.

O foco é permitir que outra pessoa técnica:

- entenda rapidamente a arquitetura
- saiba como rodar o projeto
- localize os arquivos centrais
- entenda a integração com Supabase
- saiba o que revisar primeiro

---

## Resumo executivo

Este projeto é uma versão em Next.js do site da Top Imobiliária.

Ele já contém:

- landing page principal em App Router
- componentes separados por seção
- integração básica com Supabase
- uso de assets públicos em `public/`
- uma cópia do admin estático dentro de `public/admin`
- uma cópia de conteúdos/legado dentro de `public/assets/top-imobiliaria` e `public/legacy`

Ponto importante:

- este diretório **não está inicializado como repositório Git local**
- não existe `.git` nesta pasta

---

## Estrutura principal

Raiz do projeto:

- `.next/`
- `node_modules/`
- `public/`
- `src/`
- `.env.local`
- `.env.local.example`
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `README.md`
- `AGENTS.md`
- `CLAUDE.md`

### Diretórios relevantes

#### `src/app`

- `layout.tsx`
- `page.tsx`
- `globals.css`

#### `src/components`

- `Header.tsx`
- `Hero.tsx`
- `PropertiesSection.tsx`
- `AIFeaturesSection.tsx`
- `ServicesSection.tsx`
- `StatsSection.tsx`
- `LegacySectionsFromHtml.tsx`
- `Footer.tsx`
- `WhatsAppButton.tsx`

#### `src/lib`

- `supabase.ts`
- `utils.ts`

#### `public`

Contém:

- imagens e assets do site
- `og-image.jpg`
- `admin/` com painel estático
- `assets/top-imobiliaria/`
- `legacy/index.html`

---

## Arquivos centrais do app

### Entrada principal

Arquivo:

- `src/app/page.tsx`

Composição atual da home:

1. `Header`
2. `Hero`
3. `PropertiesSection`
4. `AIFeaturesSection`
5. `ServicesSection`
6. `StatsSection`
7. `LegacySectionsFromHtml`
8. `Footer`
9. `WhatsAppButton`

Isso indica que parte do site já foi componentizada e parte ainda depende de legado embutido.

### Integração com Supabase

Arquivo:

- `src/lib/supabase.ts`

Variáveis esperadas:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Observação importante:

- o client usa fallback para placeholders quando as env vars não existem
- isso evita quebra imediata em runtime de import, mas as queries vão falhar ou não retornar dados reais sem configuração correta

### Listagem de imóveis

Arquivo:

- `src/components/PropertiesSection.tsx`

Estado atual:

- busca dados da tabela `properties`
- filtra por `featured = true`
- limita a 6 imóveis
- usa `type` com valores `rent` e `sale`
- usa `images[0]` como capa do card

### Hero

Arquivo:

- `src/components/Hero.tsx`

Estado atual:

- hero totalmente renderizado em React
- usa fundo com `/assets/top-imobiliaria/hero-aguas-claras-day.jpg`
- inclui CTA cards e badges

---

## Dependências

`package.json` atual:

- `next`
- `react`
- `react-dom`
- `@supabase/supabase-js`
- `framer-motion`
- `lucide-react`
- `shadcn`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `tw-animate-css`

Dev dependencies:

- `typescript`
- `eslint`
- `eslint-config-next`
- `tailwindcss`
- `@tailwindcss/postcss`
- tipos de React / Node

---

## Como rodar em outra máquina

Pré-requisitos:

- Node.js instalado
- npm disponível

Passos:

1. Descompactar o projeto
2. Abrir terminal na pasta `top-imobiliaria-next`
3. Instalar dependências:

```bash
npm install
```

4. Criar `.env.local` a partir de `.env.local.example`

Exemplo esperado:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Rodar ambiente local:

```bash
npm run dev
```

6. Abrir:

- [http://localhost:3000](http://localhost:3000)

### Build de produção

```bash
npm run build
npm run start
```

---

## O que está incluído neste pacote

Este handoff deve ser tratado como pacote de revisão técnica.

Inclui:

- código-fonte em `src/`
- assets em `public/`
- `package.json`
- `package-lock.json`
- configs de TS / Next / ESLint / PostCSS
- documentação local encontrada
- `.env.local.example`

### O que não deve ser usado para transporte

Idealmente devem ser ignorados para compartilhamento:

- `.next/`
- `node_modules/`
- `.env.local`

Motivo:

- `.next` é build temporário
- `node_modules` é reinstalável
- `.env.local` pode conter credenciais

---

## Pontos relevantes para revisão

### 1. Mistura entre Next e legado

Há coexistência entre:

- componentes React nativos em `src/components`
- blocos legados em `LegacySectionsFromHtml`
- admin estático dentro de `public/admin`
- página legada em `public/legacy/index.html`

Isso sugere migração em andamento, não arquitetura totalmente consolidada.

### 2. Modelo de dados

`src/lib/supabase.ts` define um tipo `Property` com campos:

- `id`
- `title`
- `type`
- `property_type`
- `price`
- `address`
- `neighborhood`
- `bedrooms`
- `bathrooms`
- `area`
- `description`
- `images`
- `featured`
- `whatsapp`
- `created_at`

Quem revisar deve validar se a tabela real do Supabase está alinhada a esse shape.

### 3. Número de WhatsApp

Em `PropertiesSection.tsx` há placeholder:

- `const WA_NUMBER = "5561999999999";`

Isso precisa ser revisado antes de produção.

### 4. Admin estático em `public/admin`

Existe um admin copiado para dentro do projeto Next, mas ele é estático.
Quem revisar deve decidir:

- manter esse admin servido por `public/admin`
- migrar o admin para rotas Next reais
- ou separar completamente o admin do app Next

### 5. Configuração do Supabase

Sem `.env.local` correto:

- o projeto abre
- mas não trabalha com dados reais

---

## Arquivos-chave para revisão inicial

Ordem sugerida:

1. `package.json`
2. `src/app/page.tsx`
3. `src/lib/supabase.ts`
4. `src/components/PropertiesSection.tsx`
5. `src/components/Hero.tsx`
6. `src/components/LegacySectionsFromHtml.tsx`
7. `public/admin/`
8. `public/assets/top-imobiliaria/`

---

## Situação local observada

Na máquina de origem, o diretório continha:

- `.next`
- `node_modules`
- `.env.local`

Para revisão em outra máquina, o ideal é não depender desses três itens.

---

## Recomendação prática

Para uma pessoa revisar com eficiência:

1. abrir este handoff
2. instalar dependências
3. configurar `.env.local`
4. rodar `npm run dev`
5. revisar a home e a integração Supabase
6. decidir se o admin estático permanece ou será reestruturado

---

## Checklist de revisão

- o projeto sobe com `npm install` + `npm run dev`
- o Supabase conecta com env vars reais
- os imóveis carregam corretamente
- o shape da tabela `properties` bate com o tipo TS atual
- o número de WhatsApp está correto
- o admin estático faz sentido nessa arquitetura
- o conteúdo legado ainda necessário está identificado

