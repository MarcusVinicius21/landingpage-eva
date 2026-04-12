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
  title: "EVA — Você não está sozinha",
  description:
    "Aplicativo discreto, seguro e gratuito, criado para apoiar e proteger mulheres em situações de vulnerabilidade. Escuta. Vigilância. Ação.",
  keywords: [
    "segurança feminina",
    "proteção da mulher",
    "app de segurança",
    "EVA app",
    "violência contra a mulher",
    "proteção discreta",
    "aplicativo gratuito",
    "emergência feminina",
    "rede de proteção",
  ],
  authors: [{ name: "Projeto EVA" }],
  creator: "Projeto EVA",
  metadataBase: new URL("https://eva-app.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://eva-app.com.br",
    siteName: "EVA",
    title: "EVA — Você não está sozinha",
    description:
      "Aplicativo discreto de segurança feminina. Proteção, acolhimento e orientação com discrição. 100% gratuito.",
    images: [
      {
        url: "/images/brand/eva-concept-02.jpeg",
        width: 1200,
        height: 630,
        alt: "EVA — Sistema Inteligente de Segurança Feminina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVA — Você não está sozinha",
    description:
      "Aplicativo discreto de segurança feminina. Proteção com discrição.",
    images: ["/images/brand/eva-concept-02.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
