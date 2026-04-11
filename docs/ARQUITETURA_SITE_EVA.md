# ARQUITETURA_SITE_EVA.md
## Site Institucional / Landing Page do Projeto EVA

---

# INSTRUÇÃO CRÍTICA

Este documento define a arquitetura de um **site institucional / landing page** do EVA.

### É estritamente obrigatório que este projeto:
- NÃO construa funcionalidades reais do aplicativo
- NÃO introduza backend, banco de dados ou autenticação
- NÃO se transforme em um mega sistema
- NÃO replique a complexidade do app EVA
- NÃO adicione Python, Supabase ou qualquer backend nesta fase

### É estritamente obrigatório que este projeto construa APENAS:
Um **site de apresentação premium**, estático, rápido, responsivo, fiel à identidade visual do EVA, com foco em conversão e credibilidade.

---

# 1. VISÃO GERAL DO SITE

## 1.1 Objetivo
Criar um site institucional e promocional de alto impacto visual que apresente o aplicativo EVA — Sistema Inteligente de Segurança Feminina — de forma profissional, confiável e emocionalmente envolvente.

O site é a vitrine digital do EVA. Ele deve comunicar com clareza o que o app faz, para quem serve, por que é diferente e como acessá-lo.

## 1.2 Papel do site dentro do projeto EVA
O site funciona como:
- página de apresentação do produto
- canal de captação de interesse (leads, downloads futuros)
- material de credibilidade para parceiros, investidores e imprensa
- ponto central de informações sobre o EVA
- prova visual de que o produto existe e é sério

## 1.3 Público-alvo do site
- Mulheres que buscam soluções de segurança pessoal
- Familiares e amigos que desejam proteger mulheres próximas
- Parceiros institucionais (ONGs, prefeituras, delegacias da mulher)
- Investidores e avaliadores técnicos do projeto
- Imprensa e formadores de opinião

## 1.4 Percepção que o site deve transmitir
- Seriedade e confiança
- Modernidade tecnológica
- Sensibilidade e acolhimento
- Discrição e segurança
- Sofisticação visual (sem parecer genérico)

## 1.5 O que o site deve mostrar
- O que é o EVA
- Como funciona (visão geral simplificada)
- Principais funcionalidades do app (via mockups e descrições)
- Diferenciais (interface camuflada, botão de pânico, IA emocional)
- Prova visual (prints reais das telas do app)
- Call-to-action claro (baixar o app, cadastrar interesse, saber mais)
- Informações institucionais e de contato

## 1.6 O que o site NÃO deve fazer nesta fase
- NÃO ter login ou cadastro funcional
- NÃO ter integração com Supabase, APIs ou IA
- NÃO processar dados
- NÃO ter painel administrativo
- NÃO ter backend de qualquer tipo
- NÃO ter formulários conectados a banco
- NÃO ter funcionalidades reais do aplicativo

---

# 2. DIREÇÃO VISUAL E IDENTIDADE

## 2.1 Análise da identidade visual percebida nos materiais

A identidade visual do EVA é fortemente centrada em:

**Paleta cromática:** roxo/violeta como cor dominante, com variações de lilás e lavanda. Fundos claros em tom creme/off-white. Acentos em roxo escuro para texto e roxo médio/lilás para botões e elementos interativos. Uso pontual de rosa suave em elementos secundários.

**Tipografia:** sans-serif moderna, limpa e legível. Títulos em peso bold com tamanho grande e impactante. Corpo de texto leve e arejado.

**Logo:** wordmark "eva" em caixa baixa, com a letra "a" substituída por um ícone de digital/impressão digital em formato circular, nas cores da marca. O logo aparece em versão escura (sobre fundo claro) e versão branca (sobre fundo roxo).

**Linguagem visual geral:** fotografia real de mulheres em situações cotidianas com overlay violeta. Textura de papel amassado como recurso gráfico. Cards com bordas arredondadas e sombras suaves. Ícones lineares em roxo sobre fundos claros.

**Tom emocional:** acolhedor, empoderador, sério sem ser pesado. Frases diretas e humanas.

## 2.2 Paleta recomendada

```
/* Cores principais */
--eva-purple-900: #2D0A4E;      /* textos principais, títulos fortes */
--eva-purple-700: #5B2D8E;      /* destaque, hover, acentos */
--eva-purple-500: #7C3AED;      /* CTAs, botões primários */
--eva-purple-400: #9F7AEA;      /* botões secundários */
--eva-purple-300: #C4B5FD;      /* bordas, ícones leves */
--eva-lilac-200: #D8B4FE;       /* backgrounds de cards */
--eva-lilac-100: #EDE9FE;       /* backgrounds de seções alternadas */

/* Neutros */
--eva-cream: #FAF7F2;           /* fundo principal claro */
--eva-white: #FFFFFF;           /* cards, modais */
--eva-gray-600: #4B5563;        /* texto corpo */
--eva-gray-400: #9CA3AF;        /* texto secundário */
--eva-dark: #1A0530;            /* fundo escuro, footer */

/* Acentos */
--eva-pink-soft: #F9A8D4;       /* detalhes femininos sutis */
--eva-green-safe: #10B981;      /* indicadores de segurança */
```

## 2.3 Tipografias recomendadas

- **Títulos:** `Inter` ou `Outfit` — bold/extrabold, tamanhos grandes (48px–72px desktop, 32px–48px mobile)
- **Corpo:** `Inter` — regular/medium, 16px–18px
- **Destaques e CTAs:** `Inter` — semibold, 14px–16px, tracking levemente aberto
- **Fallback:** `system-ui, -apple-system, sans-serif`

Ambas são Google Fonts gratuitas, performáticas e com excelente legibilidade.

## 2.4 Estilos de botão

- **Primário:** fundo `--eva-purple-500`, texto branco, border-radius 12px, padding 16px 32px, hover escurece para `--eva-purple-700`, transição suave 200ms
- **Secundário:** fundo transparente, borda 2px `--eva-purple-500`, texto roxo, hover preenche o fundo
- **Ghost:** sem borda, texto roxo, hover com fundo `--eva-lilac-100`

## 2.5 Estilos de cards

- Fundo branco ou `--eva-cream`
- Border-radius 16px–24px
- Sombra suave: `0 4px 24px rgba(93, 45, 142, 0.08)`
- Padding interno generoso (24px–32px)
- Ícone lilás no topo + título bold + descrição em cinza

## 2.6 Estilos de mockup

- Mockups do app em frames de smartphone realistas
- Perspectiva isométrica leve ou frontal com sombra
- Fundo com gradiente violeta sutil ou textura de papel
- Agrupamentos de 2–3 telas lado a lado

## 2.7 Estilos de seção

- Alternância entre fundo claro (`--eva-cream`) e fundo branco
- Seções de destaque com fundo gradiente violeta escuro + texto branco
- Padding vertical generoso: 80px–120px desktop, 60px–80px mobile
- Container max-width: 1280px, centralizado
- Títulos de seção centralizados com subtítulo mais leve abaixo

## 2.8 Nível de animação

- Animações sutis de entrada (fade-in + slide-up) ao scroll
- Transições suaves em hover de botões e cards (200–300ms)
- Parallax leve no hero (opcional)
- NÃO usar animações pesadas ou exageradas
- NÃO usar animações que atrasem a leitura
- Priorizar performance sobre efeito visual

## 2.9 Padrão visual de site em 2026

- Seções full-width com containers centralizados
- Tipografia grande e bold para títulos
- Espaçamento generoso (whitespace como elemento de design)
- Hero com composição de mockup + headline + CTA
- Micro-interações sutis
- Gradientes suaves ao invés de cores chapadas
- Bordas arredondadas em tudo
- Mobile-first real (não adaptação posterior)
- Dark sections para quebrar monotonia
- Scroll animations com Intersection Observer

---

# 3. ARQUITETURA ENXUTA DO SITE

## 3.1 Diretriz principal
O site deve ser **100% frontend estático**, sem backend, sem banco de dados, sem autenticação. Deve ser deployável em plataformas como Vercel ou Netlify com zero configuração de servidor.

## 3.2 O que o site é
- Uma single-page landing page com múltiplas seções
- Totalmente estático (SSG — Static Site Generation)
- Responsivo e mobile-first
- Otimizado para performance (Lighthouse 95+)
- Pronto para SEO básico

## 3.3 O que o site NÃO é
- NÃO é um SPA complexo com roteamento dinâmico
- NÃO é um sistema com estado global
- NÃO é uma plataforma com autenticação
- NÃO tem API routes ou server actions
- NÃO tem banco de dados
- NÃO tem processamento server-side além do build

---

# 4. STACK DEFINIDA

## 4.1 Frontend — Next.js 15 (App Router)
**Justificativa:** melhor framework React para sites estáticos com SSG. Otimização automática de imagens, fonts e bundles. Deploy nativo na Vercel. Suporte a TypeScript e Tailwind out-of-the-box. Evita retrabalho caso o projeto evolua para incluir rotas dinâmicas no futuro.

## 4.2 Linguagem — TypeScript
**Justificativa:** tipagem estática previne bugs, melhora autocompletar no VS Code e torna o código mais legível e manutenível. Custo zero de adoção com Next.js.

## 4.3 Estilização — Tailwind CSS 4
**Justificativa:** sistema utilitário que elimina arquivos CSS separados, acelera o desenvolvimento e produz bundles CSS mínimos (tree-shaking automático). Perfeito para landing pages com design customizado.

## 4.4 Animação — Framer Motion
**Justificativa:** biblioteca de animação mais madura para React. Permite animações de scroll, transições de entrada e micro-interações com API declarativa e simples. Não adiciona complexidade significativa ao bundle.

## 4.5 Ícones — Lucide React
**Justificativa:** ícones SVG leves, tree-shakeable, com design limpo e moderno. Combina bem com a estética do EVA.

## 4.6 Deploy — Vercel
**Justificativa:** plataforma nativa para Next.js. Deploy automático via push no GitHub. SSL gratuito, CDN global, domínio customizado fácil. Plano gratuito é suficiente para esta fase. Preview deploys para cada PR.

## 4.7 O que NÃO instalar
- ❌ Supabase — não há backend
- ❌ Prisma / qualquer ORM — não há banco
- ❌ NextAuth — não há login
- ❌ Zustand / Redux — não há estado global complexo
- ❌ Python — não há scripts de dados
- ❌ Docker — não há containerização necessária
- ❌ Express / Fastify — não há API
- ❌ Styled Components / Emotion — Tailwind já resolve
- ❌ Axios — não há chamadas HTTP

---

# 5. ESTRUTURA DE PASTAS DO PROJETO

```text
EvaLandingPage/
├── public/
│   ├── images/
│   │   ├── hero/                  ← mockups do hero
│   │   ├── screens/               ← prints das telas do app
│   │   ├── icons/                 ← ícones específicos do EVA
│   │   ├── brand/                 ← logo, favicon, og-image
│   │   └── backgrounds/           ← texturas, gradientes
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx             ← layout raiz (fonts, metadata, analytics)
│   │   ├── page.tsx               ← página principal (compõe todas as seções)
│   │   └── globals.css            ← variáveis CSS, reset, fontes
│   │
│   ├── components/
│   │   ├── ui/                    ← componentes base reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   └── SectionTitle.tsx
│   │   │
│   │   └── sections/             ← seções da landing page
│   │       ├── Hero.tsx
│   │       ├── AppShowcase.tsx
│   │       ├── About.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── Features.tsx
│   │       ├── Security.tsx
│   │       ├── Differentials.tsx
│   │       ├── ScreensCarousel.tsx
│   │       ├── Testimonials.tsx
│   │       ├── Institutional.tsx
│   │       ├── CtaFinal.tsx
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts           ← textos, links, dados estáticos
│   │   └── animations.ts          ← variantes de animação Framer Motion
│   │
│   └── hooks/
│       └── useInView.ts           ← hook de intersection observer
│
├── docs/
│   ├── ARQUITETURA_SITE_EVA.md
│   ├── STRUCTURE_SITE_EVA.md
│   └── tutorial_etapa1_site_eva.md
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
├── .env.local                     ← vazio por enquanto (sem secrets)
└── README.md
```

---

# 6. MAPA COMPLETO DA LANDING PAGE

## Seção 1 — Header (fixo)
Logo EVA à esquerda. Links de navegação âncora (Sobre, Funcionalidades, Segurança, Contato). Botão CTA "Baixe o App" à direita. Fundo transparente que ganha background ao scrollar. Menu hambúrguer no mobile.

## Seção 2 — Hero
A primeira impressão do site. Composição visual com headline impactante à esquerda e mockup premium do app à direita. Fundo com gradiente sutil lilás→creme. Headline tipo "Sua proteção em um clique." com subtítulo emocional. Dois botões: CTA primário + CTA secundário. Badge "Escuta. Vigilância. Ação." acima da headline.

**Justificativa:** o hero deve transmitir imediatamente o que é o EVA e por que ele importa. A composição com mockup do app prova que o produto é real.

## Seção 3 — Prova Visual do App (App Showcase)
Faixa com 3 telas do app lado a lado em frames de smartphone. Demonstra visualmente que o app existe e é sofisticado. Texto mínimo — apenas labels como "Interface camuflada", "Tela de emergência", "Chat com IA".

**Justificativa:** prova social visual. Mostra que não é apenas um conceito.

## Seção 4 — Sobre o EVA
Duas colunas: texto à esquerda explicando a missão do EVA + imagem/ilustração à direita. Explica o conceito de "app camuflado de segurança feminina". Menciona que o EVA se disfarça como portal feminino. Tom empático e acolhedor.

**Justificativa:** contextualizar o produto e criar conexão emocional.

## Seção 5 — Como Funciona
3 ou 4 passos visuais em timeline/stepper horizontal. Exemplos: "Baixe o app" → "Configure seus contatos seguros" → "Em emergência, toque 3 vezes" → "O EVA age por você". Cada passo com ícone + título + descrição curta.

**Justificativa:** simplifica a compreensão do produto para quem nunca ouviu falar.

## Seção 6 — Funcionalidades Principais (Features)
Grid de 6–9 cards com ícone + título + descrição. Funcionalidades como: Botão de Pânico, Contatos Seguros, Localização em Tempo Real, Chat com IA (Eva.IA), Comando de Voz, Alerta de Viagem, Apoio Emocional, Rotas Seguras, Dicas de Segurança.

**Justificativa:** mostra a profundidade do produto sem sobrecarregar.

## Seção 7 — Segurança e Discrição
Seção com fundo escuro (roxo profundo). Destaca o diferencial principal: a interface camuflada. Explica que o app parece um portal feminino comum. Mockup comparativo: "O que parece" vs "O que realmente faz". Tom de seriedade e confiança.

**Justificativa:** este é o maior diferencial competitivo do EVA e merece destaque visual forte.

## Seção 8 — Diferenciais
3 blocos grandes com ícone + título + texto. Exemplos: "IA Emocional", "Proteção Multi-Camada", "Privacidade Total". Cada bloco com profundidade suficiente para convencer.

**Justificativa:** reforça o posicionamento premium do produto.

## Seção 9 — Carrossel de Telas
Carrossel horizontal com 6–8 telas do app em alta qualidade. Navegação por setas e dots. Autoplay suave com pausa no hover.

**Justificativa:** imersão visual no produto real.

## Seção 10 — Institucional
Informações sobre o projeto, equipe, missão. Menção a "Violência contra a mulher é crime". Links úteis (Ligue 180, delegacias). Tom institucional e sério.

**Justificativa:** credibilidade e responsabilidade social.

## Seção 11 — CTA Final
Fundo gradiente roxo forte. Headline emocional: "Você não está sozinha." Botão grande de download/interesse. QR Code opcional. Sensação de fechamento poderoso.

**Justificativa:** conversão final antes do footer.

## Seção 12 — Footer
Logo EVA. Links de navegação. Redes sociais. Informações legais. "Escuta. Vigilância. Ação." Fundo escuro.

---

# 7. ESPAÇOS PARA IMAGENS

| Seção | Nome do Asset | Orientação | Tamanho Recomendado | Finalidade |
|---|---|---|---|---|
| Hero | `hero-mockup-principal.png` | Horizontal | 1600×1200px | Composição premium com 2–3 telas do app em perspectiva |
| Hero | `hero-bg-gradient.svg` | Horizontal | 1920×1080px | Background gradiente lilás sutil |
| App Showcase | `screen-home.png` | Vertical | 1080×1920px | Print da tela inicial do app |
| App Showcase | `screen-emergency.png` | Vertical | 1080×1920px | Print da tela de ações de emergência |
| App Showcase | `screen-chat.png` | Vertical | 1080×1920px | Print da tela do Chat Eva.IA |
| Sobre | `about-illustration.png` | Quadrado | 800×800px | Ilustração ou foto com overlay violeta |
| Como Funciona | `step-icons-1-4.svg` | Quadrado | 120×120px cada | Ícones dos 4 passos |
| Features | `feature-icons.svg` | Quadrado | 64×64px cada | Ícones das funcionalidades |
| Segurança | `camouflage-mockup.png` | Horizontal | 1440×900px | Mockup comparativo: app camuflado vs real |
| Diferenciais | `differential-icons.svg` | Quadrado | 96×96px cada | Ícones dos 3 diferenciais |
| Carrossel | `carousel-screen-01 a 08.png` | Vertical | 1080×1920px | 8 prints verticais de telas variadas do app |
| CTA Final | `cta-bg.jpg` | Horizontal | 1920×800px | Foto emocional com overlay violeta |
| Brand | `logo-eva-dark.svg` | Horizontal | 200×60px | Logo para fundo claro |
| Brand | `logo-eva-white.svg` | Horizontal | 200×60px | Logo para fundo escuro |
| Brand | `og-image.jpg` | Horizontal | 1200×630px | Imagem para compartilhamento em redes sociais |
| Brand | `favicon.ico` | Quadrado | 32×32px | Favicon com ícone da digital |

---

# 8. DECISÕES DE SIMPLIFICAÇÃO

1. **NÃO construir backend** — o site é 100% estático
2. **NÃO conectar APIs** — sem chamadas HTTP em runtime
3. **NÃO criar formulários funcionais** — CTAs apontam para links externos (app store, WhatsApp, e-mail)
4. **NÃO adicionar CMS** — conteúdo é hardcoded em constants.ts
5. **NÃO criar múltiplas páginas** — uma única landing page com seções âncora
6. **NÃO implementar i18n** — apenas português do Brasil
7. **NÃO adicionar analytics complexo** — apenas Google Analytics ou Vercel Analytics (opcional)

---

# 9. RESULTADO ESPERADO

Ao final do desenvolvimento, o site deve:
- Estar publicado em uma URL pública (Vercel)
- Ser visualmente fiel aos materiais conceituais do EVA
- Carregar em menos de 2 segundos
- Pontuar 90+ no Lighthouse em todas as categorias
- Ser perfeitamente navegável no mobile
- Comunicar com clareza o que é o EVA
- Ter CTAs visíveis e funcionais
- Transmitir profissionalismo e confiança

Esse é o objetivo. Nada além disso deve ser forçado nesta fase.
