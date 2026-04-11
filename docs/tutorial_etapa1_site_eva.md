# Tutorial — Rodando a Etapa 1 do Site EVA no Windows
**Para iniciantes. Do zero até a fundação do site rodando e publicado.**

---

## 1. Diagnóstico do Estado Atual da Etapa 1

Antes de qualquer comando, entenda o seu objetivo. A **Etapa 1** é a fundação do site.

### O que a Etapa 1 é
É a criação da base técnica do site institucional do EVA. O foco é deixar o terreno pronto, com a identidade visual configurada e os componentes base criados.

### O que será entregue nesta etapa
- Projeto Next.js criado e rodando localmente
- Tailwind configurado com a paleta de cores do EVA
- Fontes Inter e Outfit carregadas via next/font
- Componentes base criados: Button, Card, Container, SectionTitle
- Header com logo e navegação
- Hero com placeholder (título, subtítulo, CTA, espaço para mockup)
- Footer com logo e links
- Estrutura de pastas oficial
- Repositório no GitHub
- Primeiro deploy na Vercel

### O que NÃO existe ainda nesta etapa
- **Seções de conteúdo completas:** ficam para a Etapa 2
- **Imagens reais do app:** ficam para a Etapa 3
- **Carrossel de telas:** fica para a Etapa 3
- **Animações de scroll:** ficam para a Etapa 4
- **SEO e analytics:** ficam para a Etapa 5
- **Backend, banco, login:** NÃO existem em nenhuma etapa deste site

---

## 2. O Que Você Precisa Instalar

Instale **apenas** o necessário.

### Obrigatório:
1. **Node.js (versão 18 ou superior):** motor que vai rodar o Next.js
2. **VS Code:** editor de código
3. **Git:** versionamento do código

### Você NÃO precisa de:
- Python
- Docker
- PostgreSQL / Supabase
- Redis
- Qualquer banco de dados

---

## 3. Verificando o que já está instalado

Ligue o PC, abra o **VS Code** e abra o terminal integrado (`Ctrl` + `'`).

### Verificar Node.js
```bash
node --version
```
Deve aparecer algo como `v18.x.x` ou `v20.x.x` ou superior. Se aparecer erro, instale o Node.js.

### Verificar npm
```bash
npm --version
```
Deve aparecer algo como `10.x.x`. O npm vem junto com o Node.js.

### Verificar Git
```bash
git --version
```
Deve aparecer algo como `git version 2.x.x`. Se aparecer erro, instale o Git.

### Verificar VS Code
Se você está lendo isso dentro do VS Code, ele já está instalado.

---

## 4. Como instalar o que falta

### Se Node.js NÃO está instalado:
1. Acesse https://nodejs.org
2. Baixe a versão **LTS** (recomendada)
3. Execute o instalador
4. Marque todas as opções padrão
5. Reinicie o VS Code após instalar
6. Teste novamente com `node --version`

### Se Git NÃO está instalado:
1. Acesse https://git-scm.com/downloads
2. Baixe a versão para Windows
3. Execute o instalador
4. Aceite todas as opções padrão
5. Reinicie o VS Code após instalar
6. Teste novamente com `git --version`

### Se VS Code NÃO está instalado:
1. Acesse https://code.visualstudio.com
2. Baixe e instale
3. Extensões recomendadas: **ES7+ React/Redux/React-Native snippets**, **Tailwind CSS IntelliSense**, **Prettier**

---

## 5. Estratégia Técnica da Etapa 1

### Stack escolhida e o porquê:
- **Next.js 15 (App Router):** framework React ideal para sites estáticos. Otimização automática de imagens e fontes. Deploy nativo na Vercel.
- **TypeScript:** previne bugs e melhora o autocompletar.
- **Tailwind CSS 4:** estilização rápida, bundle CSS mínimo, sem arquivos CSS separados.
- **Framer Motion:** animações declarativas para React (será usado a partir da Etapa 4, mas já instalamos agora).
- **Lucide React:** ícones SVG leves e modernos.

### Por que NÃO adicionar backend?
Este é um site de apresentação. Todo o conteúdo é estático (textos, imagens). Não existe necessidade de banco de dados, autenticação ou API. Adicionar essas camadas agora seria desperdício de tempo e geraria complexidade desnecessária.

---

## 6. Passo a Passo Completo

### Passo 1 — Criar a pasta do projeto

1. Abra o Explorador de Arquivos do Windows
2. Navegue até `C:\Users\marcu\Downloads\trampos\EVA\`
3. Se a pasta `EvaLandingPage` não existir, crie-a

### Passo 2 — Abrir no VS Code

1. Abra o VS Code
2. Vá em **File > Open Folder...**
3. Selecione `C:\Users\marcu\Downloads\trampos\EVA\EvaLandingPage`
4. Abra o terminal integrado: `Ctrl` + `'`

### Passo 3 — Criar o projeto Next.js

No terminal, rode:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

> **Nota:** o `.` no comando cria o projeto na pasta atual (EvaLandingPage).
> Se perguntar sobre Turbopack, responda **Yes**.
> Se perguntar se quer sobrescrever, responda **Yes** (a pasta está vazia).

Aguarde a instalação terminar. Isso pode levar 1–3 minutos.

### Passo 4 — Instalar dependências adicionais

```bash
npm install framer-motion lucide-react
```

Essas são as únicas dependências extras necessárias:
- `framer-motion` — animações (usaremos na Etapa 4, mas já instalamos para não ter retrabalho)
- `lucide-react` — ícones SVG

### Passo 5 — Testar se está rodando

```bash
npm run dev
```

Abra o navegador e acesse **http://localhost:3000**

Você deve ver a página padrão do Next.js. Se apareceu, tudo funcionou.

Pare o servidor com `Ctrl` + `C` no terminal.

### Passo 6 — Configurar a paleta do EVA no Tailwind

Abra o arquivo `tailwind.config.ts` na raiz do projeto e substitua o conteúdo por:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eva: {
          purple: {
            900: '#2D0A4E',
            700: '#5B2D8E',
            500: '#7C3AED',
            400: '#9F7AEA',
            300: '#C4B5FD',
          },
          lilac: {
            200: '#D8B4FE',
            100: '#EDE9FE',
          },
          cream: '#FAF7F2',
          dark: '#1A0530',
          pink: '#F9A8D4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
```

### Passo 7 — Configurar fontes e layout global

Abra `src/app/layout.tsx` e substitua por:

```typescript
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "EVA — Sistema Inteligente de Segurança Feminina",
  description:
    "Um aplicativo discreto que acolhe, orienta e protege mulheres em momentos de vulnerabilidade. Escuta. Vigilância. Ação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-eva-cream text-gray-700`}
      >
        {children}
      </body>
    </html>
  );
}
```

### Passo 8 — Configurar CSS global

Abra `src/app/globals.css` e substitua por:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: #C4B5FD;
    color: #2D0A4E;
  }
}
```

### Passo 9 — Criar a estrutura de pastas

No terminal, rode:

```bash
mkdir -p src/components/ui
mkdir -p src/components/sections
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p public/images/hero
mkdir -p public/images/screens
mkdir -p public/images/icons
mkdir -p public/images/brand
mkdir -p public/images/backgrounds
mkdir -p docs
```

### Passo 10 — Criar componente Container

Crie o arquivo `src/components/ui/Container.tsx`:

```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

### Passo 11 — Criar componente Button

Crie o arquivo `src/components/ui/Button.tsx`:

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-eva-purple-500 text-white hover:bg-eva-purple-700 shadow-lg shadow-eva-purple-500/20",
    secondary: "border-2 border-eva-purple-500 text-eva-purple-500 hover:bg-eva-purple-500 hover:text-white",
    ghost: "text-eva-purple-500 hover:bg-eva-lilac-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
```

### Passo 12 — Criar componente SectionTitle

Crie o arquivo `src/components/ui/SectionTitle.tsx`:

```typescript
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}

export function SectionTitle({
  title,
  subtitle,
  light = false,
  align = "center",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-eva-purple-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-eva-lilac-200" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

### Passo 13 — Criar o Header

Crie o arquivo `src/components/sections/Header.tsx`:

```typescript
"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="font-display text-2xl font-bold text-eva-purple-900">
            ev<span className="text-eva-purple-500">a</span>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-eva-purple-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Baixe o App</Button>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-eva-purple-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Mobile */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-eva-purple-500"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Baixe o App</Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
```

### Passo 14 — Criar o Hero

Crie o arquivo `src/components/sections/Hero.tsx`:

```typescript
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-eva-lilac-100 via-eva-cream to-white -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-eva-lilac-100 text-eva-purple-700 text-sm font-semibold rounded-full mb-6">
              Escuta. Vigilância. Ação.
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-eva-purple-900 leading-tight">
              Sua proteção em um clique.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg">
              Um aplicativo discreto que acolhe, orienta e protege mulheres em
              momentos de vulnerabilidade.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg">Baixe o App</Button>
              <Button variant="secondary" size="lg" href="#sobre">
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Mockup Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-[500px] sm:w-80 sm:h-[560px] bg-eva-lilac-100 rounded-3xl border-2 border-dashed border-eva-purple-300 flex items-center justify-center text-center p-8">
              <div>
                <p className="text-eva-purple-400 text-sm font-medium">
                  Imagem recomendada:
                </p>
                <p className="text-eva-purple-400 text-xs mt-1">
                  1600×1200px — composição premium com telas do app EVA
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
```

### Passo 15 — Criar o Footer

Crie o arquivo `src/components/sections/Footer.tsx`:

```typescript
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer id="contato" className="bg-eva-dark text-white py-16">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold">
              ev<span className="text-eva-purple-400">a</span>
            </span>
            <p className="mt-4 text-sm text-gray-400">
              Escuta. Vigilância. Ação.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Sistema Inteligente de Segurança Feminina
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#seguranca" className="hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>

          {/* Ajuda */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Ajuda
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Ligue 180 — Central de Atendimento à Mulher</li>
              <li>Ligue 190 — Polícia Militar</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Importante
            </h3>
            <p className="text-sm text-gray-400">
              Violência contra a mulher é crime.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} EVA. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
```

### Passo 16 — Montar a página principal

Abra `src/app/page.tsx` e substitua por:

```typescript
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* As demais seções serão adicionadas na Etapa 2 */}
      </main>
      <Footer />
    </>
  );
}
```

### Passo 17 — Testar localmente

```bash
npm run dev
```

Acesse **http://localhost:3000** no navegador.

Você deve ver:
- Header fixo com logo "eva" e links de navegação
- Hero com badge "Escuta. Vigilância. Ação.", título, subtítulo e botões
- Placeholder de mockup à direita
- Footer com informações do EVA

**Verifique no mobile:** abra o DevTools do navegador (F12), clique no ícone de celular e teste em tamanhos como iPhone 14 e Galaxy S21.

Se tudo apareceu corretamente, a fundação está pronta.

### Passo 18 — Copiar a documentação para a pasta docs

Copie os 3 arquivos de documentação para a pasta `docs/` do projeto:
- `ARQUITETURA_SITE_EVA.md`
- `STRUCTURE_SITE_EVA.md`
- `tutorial_etapa1_site_eva.md`

### Passo 19 — Iniciar o Git

```bash
git init
git add .
git commit -m "feat: fundação do site EVA - Etapa 1 completa"
```

### Passo 20 — Criar repositório no GitHub

1. Acesse https://github.com e faça login
2. Clique no botão **+** no canto superior direito → **New repository**
3. Nome: `eva-landing-page`
4. Descrição: `Site institucional do EVA — Sistema Inteligente de Segurança Feminina`
5. Visibilidade: **Private** (recomendado)
6. NÃO marque "Add a README" (já temos)
7. Clique em **Create repository**

### Passo 21 — Subir para o GitHub

O GitHub vai mostrar instruções. Use os comandos para repositório existente:

```bash
git remote add origin https://github.com/SEU_USUARIO/eva-landing-page.git
git branch -M main
git push -u origin main
```

> Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

### Passo 22 — Deploy na Vercel

1. Acesse https://vercel.com e faça login com sua conta do GitHub
2. Clique em **Add New... → Project**
3. Selecione o repositório `eva-landing-page`
4. Vercel vai detectar automaticamente que é um projeto Next.js
5. Clique em **Deploy**
6. Aguarde 1–2 minutos
7. Vercel vai gerar uma URL pública tipo `eva-landing-page-xxxx.vercel.app`
8. Acesse a URL e veja seu site publicado na internet

### Por que Vercel e não Netlify?
A Vercel é a criadora do Next.js. A integração é nativa, o deploy é automático a cada push no GitHub, tem preview deploys para PRs, SSL gratuito e CDN global. Para projetos Next.js, é a escolha mais simples e eficiente.

---

## 7. Comandos Práticos de Referência

### Rodar o site localmente:
```bash
npm run dev
```

### Fazer build de produção:
```bash
npm run build
```

### Testar o build localmente:
```bash
npm run start
```

### Instalar uma nova biblioteca:
```bash
npm install nome-da-biblioteca
```

### Verificar se o projeto tem erros de TypeScript:
```bash
npx tsc --noEmit
```

### Commitar alterações:
```bash
git add .
git commit -m "descrição do que mudou"
```

### Subir para o GitHub:
```bash
git push
```

> Após o push, a Vercel faz deploy automaticamente. Não precisa de mais nada.

---

## 8. O Que o Projeto Deve Ter ao Final da Etapa 1

- [ ] Projeto Next.js rodando em `localhost:3000` sem erros
- [ ] Paleta de cores do EVA configurada no Tailwind
- [ ] Fontes Inter e Outfit carregando corretamente
- [ ] Header com logo, links e botão CTA
- [ ] Hero com título, subtítulo, badges e placeholder de mockup
- [ ] Footer com informações do EVA
- [ ] Responsividade básica funcionando (mobile e desktop)
- [ ] Repositório no GitHub com primeiro commit
- [ ] Deploy na Vercel acessível via URL pública
- [ ] Pasta `docs/` com os 3 arquivos de documentação

---

## 9. O Que NÃO Fazer Agora (Alerta Crítico)

- ❌ **Não crie backend:** o site é 100% estático. Não instale Supabase, Prisma, FastAPI ou Express.
- ❌ **Não instale Python:** não há scripts de dados neste projeto.
- ❌ **Não crie formulários funcionais:** CTAs devem apontar para `#` ou links externos por enquanto.
- ❌ **Não adicione muitas páginas:** é uma landing page. Uma página, múltiplas seções.
- ❌ **Não se preocupe com animações agora:** ficam para a Etapa 4.
- ❌ **Não perca tempo com imagens perfeitas agora:** placeholders são suficientes. Imagens reais entram na Etapa 3.
- ❌ **Não instale bibliotecas de estado (Redux, Zustand):** não há estado complexo em um site estático.
- ❌ **Não configure CI/CD customizado:** a Vercel já faz deploy automático.

---

## 10. Erros Comuns e Como Resolver

### "npx: command not found"
O Node.js não está instalado ou não está no PATH. Reinstale o Node.js e reinicie o VS Code.

### "Module not found: Can't resolve..."
Falta instalar a dependência. Rode `npm install nome-do-pacote`.

### A página aparece em branco
Verifique o terminal por erros. Geralmente é um erro de importação ou um componente com sintaxe errada. Leia a mensagem de erro com calma.

### As cores do EVA não aparecem
Verifique se o `tailwind.config.ts` está salvo corretamente e se você está usando as classes corretas (ex: `bg-eva-purple-500`, não `bg-purple-500`).

### O deploy falha na Vercel
Clique em "View Build Logs" na Vercel para ver o erro. Geralmente é um erro de TypeScript. Rode `npx tsc --noEmit` localmente para encontrar o problema.

### Git pede usuário e senha
Configure o Git com:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```
Para push sem senha, use HTTPS com token pessoal do GitHub ou configure SSH.

---

## 11. Preparação para as Próximas Etapas

Ao concluir a Etapa 1, o terreno está pronto para:

- **Etapa 2:** implementar todas as seções de conteúdo (Sobre, Como Funciona, Funcionalidades, Segurança, Diferenciais, Institucional, CTA Final)
- **Etapa 3:** inserir imagens reais, mockups do app e carrossel de telas
- **Etapa 4:** adicionar animações de scroll, hover effects e polimento visual
- **Etapa 5:** configurar SEO, analytics e publicação definitiva

---

## 12. Checklist Final

Antes de declarar a Etapa 1 como concluída, valide:

- [ ] A pasta do projeto está em `C:\Users\marcu\Downloads\trampos\EVA\EvaLandingPage`
- [ ] Consigo abrir `http://localhost:3000` e ver o site sem erros
- [ ] O header, hero e footer renderizam com as cores do EVA
- [ ] O site se adapta corretamente ao tamanho mobile
- [ ] O código está no GitHub
- [ ] O site está publicado na Vercel com URL acessível
- [ ] Li a seção "O Que NÃO Fazer Agora" e entendi as travas do escopo
