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
