# STRUCTURE_SITE_EVA.md
## Site EVA — Estrutura Enxuta de Desenvolvimento

---

# INSTRUÇÃO CRÍTICA

Este documento define a estrutura de desenvolvimento do **site institucional do EVA**.

### É obrigatório:
- NÃO copiar a complexidade do app EVA
- NÃO montar um mega projeto
- NÃO expandir o escopo além de um site estático
- NÃO introduzir backend, banco, IA funcional ou módulos de app

### É obrigatório respeitar este escopo:
- Site estático de apresentação
- Uma única página (landing page com seções)
- Fidelidade visual à identidade do EVA
- Responsivo e mobile-first
- Deploy simples na Vercel
- Performance alta (Lighthouse 90+)

---

# 1. OBJETIVO DO DOCUMENTO

Definir a estrutura de desenvolvimento do site EVA em sua versão enxuta e prática.

O foco é construir rapidamente um site bonito, funcional e fiel à marca.

---

# 2. ESCOPO RESUMIDO

## 2.1 O que o site deve ter
- Header com navegação âncora
- Hero com mockup do app e CTA
- Seção de apresentação visual do app (prints reais)
- Seção "Sobre o EVA"
- Seção "Como funciona" (stepper visual)
- Seção de funcionalidades (grid de cards)
- Seção de segurança e discrição (fundo escuro)
- Seção de diferenciais
- Carrossel de telas do app
- Seção institucional
- CTA final
- Footer

## 2.2 O que o site NÃO deve ter agora
- Backend
- Banco de dados
- Autenticação / Login
- Formulários conectados a APIs
- CMS
- Painel administrativo
- Funcionalidades reais do app
- Múltiplas páginas (blog, FAQ separados)
- Integração com serviços externos (exceto analytics básico)

---

# 3. FASES DO PROJETO

## Etapa 1 — Fundação do site
### Objetivo
Criar o projeto base Next.js com Tailwind e Framer Motion, estrutura de pastas, configuração de fontes, paleta de cores e componentes base.

### Entregas
- Projeto criado e rodando localmente
- Tailwind configurado com a paleta do EVA
- Fontes (Inter/Outfit) carregadas
- Componentes base: Button, Card, Container, SectionTitle
- Header e Footer estruturados
- Hero com placeholder
- Deploy inicial na Vercel
- Repositório no GitHub

### Critério de pronto
O site sobe localmente e na Vercel com header, hero (com placeholder) e footer renderizando corretamente, com as cores e fontes do EVA.

---

## Etapa 2 — Seções de conteúdo
### Objetivo
Implementar todas as seções da landing page com conteúdo estático e layout responsivo.

### Entregas
- Seção App Showcase (3 telas do app)
- Seção Sobre o EVA
- Seção Como Funciona (stepper)
- Seção Funcionalidades (grid de cards com ícones)
- Seção Segurança e Discrição (fundo escuro)
- Seção Diferenciais
- Seção Institucional
- CTA Final

### Critério de pronto
Todas as seções renderizam corretamente no desktop e mobile com conteúdo real e layout fiel à identidade visual.

---

## Etapa 3 — Carrossel e imagens finais
### Objetivo
Implementar o carrossel de telas, inserir todas as imagens reais (mockups, prints, brand assets) e polir o visual.

### Entregas
- Carrossel de telas do app funcional
- Todas as imagens placeholder substituídas por assets reais
- Mockups do hero finalizados
- Imagens otimizadas (WebP, lazy loading)
- OG Image configurada para compartilhamento

### Critério de pronto
O site está visualmente completo com todas as imagens reais e o carrossel funcionando.

---

## Etapa 4 — Animações e polish
### Objetivo
Adicionar animações de scroll, micro-interações e polimento final.

### Entregas
- Animações de entrada por seção (fade-in + slide-up)
- Hover effects em cards e botões
- Scroll suave para âncoras
- Header com efeito blur ao scrollar
- Animação do hero (entrada escalonada)
- Verificação de performance (Lighthouse)
- Testes de responsividade em múltiplos devices
- Ajustes finais de espaçamento e tipografia

### Critério de pronto
O site pontua 90+ no Lighthouse, todas as animações funcionam sem lag e a responsividade está perfeita.

---

## Etapa 5 — SEO, analytics e publicação final
### Objetivo
Finalizar metadata, SEO, analytics e fazer o deploy definitivo.

### Entregas
- Metadata completa (title, description, OG tags)
- Sitemap gerado
- robots.txt configurado
- Google Analytics ou Vercel Analytics integrado
- Favicon e manifest configurados
- Domínio customizado conectado (se disponível)
- README.md do repositório atualizado
- Deploy final

### Critério de pronto
O site está publicado, indexável, com analytics funcionando e pronto para divulgação.

---

# 4. ORDEM CORRETA DE EXECUÇÃO

1. Fundação (projeto, paleta, componentes base, header/footer/hero)
2. Seções de conteúdo (todas as seções com texto e layout)
3. Carrossel e imagens (assets reais, otimização)
4. Animações e polish (Framer Motion, micro-interações, performance)
5. SEO e publicação (metadata, analytics, deploy final)

### Regra
Não inverter essa ordem.

As animações dependem das seções existirem.
As imagens finais dependem do layout estar definido.
O SEO depende do conteúdo estar pronto.

---

# 5. ESTRUTURA DE PASTAS

```text
EvaLandingPage/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── screens/
│   │   ├── icons/
│   │   ├── brand/
│   │   └── backgrounds/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   └── SectionTitle.tsx
│   │   │
│   │   └── sections/
│   │       ├── Header.tsx
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
│   │       └── Footer.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts
│   │   └── animations.ts
│   │
│   └── hooks/
│       └── useInView.ts
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
└── README.md
```

---

# 6. COMPONENTES BASE

## 6.1 Container
Wrapper centralizado, max-width 1280px, padding horizontal responsivo.

## 6.2 Button
Variantes: primary, secondary, ghost. Tamanhos: sm, md, lg. Props: children, variant, size, href, onClick.

## 6.3 Card
Fundo branco, border-radius 16px, sombra suave, padding 24px. Props: icon, title, description.

## 6.4 SectionTitle
Título centralizado + subtítulo opcional. Props: title, subtitle, align, light (para fundos escuros).

## 6.5 Badge
Pill com fundo lilás claro e texto roxo. Para tags como "Escuta. Vigilância. Ação."

---

# 7. CONTEÚDO ESTÁTICO

Todo o conteúdo do site deve ficar em `src/lib/constants.ts` para facilitar manutenção:

```typescript
// Exemplo de estrutura
export const SITE = {
  name: 'EVA',
  tagline: 'Escuta. Vigilância. Ação.',
  description: 'Sistema Inteligente de Segurança Feminina',
  hero: {
    badge: 'Escuta. Vigilância. Ação.',
    title: 'Sua proteção em um clique.',
    subtitle: 'Um aplicativo discreto que acolhe, orienta e protege mulheres em momentos de vulnerabilidade.',
    cta: 'Baixe o App',
    ctaSecondary: 'Saiba mais',
  },
  features: [
    { icon: 'Shield', title: 'Botão de Pânico', description: '...' },
    // ...
  ],
  // ...
}
```

---

# 8. RESPONSIVIDADE

### Breakpoints (Tailwind padrão)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Regras
- Mobile-first: estilos base são para mobile
- Grid de features: 1 coluna mobile → 2 colunas tablet → 3 colunas desktop
- Hero: stack vertical mobile → horizontal desktop
- Carrossel: 1 tela visível mobile → 3 visíveis desktop
- Header: menu hambúrguer mobile → links inline desktop
- Tipografia escala: 32px mobile → 64px desktop para títulos

---

# 9. PERFORMANCE

### Metas
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total Blocking Time: < 200ms
- Lighthouse: 90+ em todas as categorias

### Estratégias
- Imagens em WebP com `next/image` (otimização automática)
- Fontes com `next/font` (sem layout shift)
- CSS mínimo via Tailwind (purge automático)
- Lazy loading de seções abaixo do fold
- Preload de imagens do hero

---

# 10. DECISÕES OBRIGATÓRIAS DE SIMPLIFICAÇÃO

1. **NÃO criar múltiplas páginas** — é uma landing page
2. **NÃO adicionar CMS** — conteúdo em constants.ts
3. **NÃO adicionar backend** — site 100% estático
4. **NÃO inflar com bibliotecas** — apenas o essencial
5. **NÃO adicionar testes unitários agora** — foco na entrega visual
6. **NÃO implementar dark mode** — a marca tem identidade cromática definida
7. **NÃO criar sistema de design completo** — apenas os componentes necessários

---

# 11. RESULTADO ESPERADO POR ETAPA

### Após Etapa 1
O projeto roda localmente, tem header/footer/hero com as cores do EVA e está no GitHub.

### Após Etapa 2
Todas as seções de conteúdo estão visíveis e responsivas.

### Após Etapa 3
Imagens reais inseridas e carrossel funcionando.

### Após Etapa 4
Animações polidas, performance validada.

### Após Etapa 5
Site publicado, indexável e pronto para divulgação.

Esse é o plano. Nada além disso deve ser forçado.
