"use client";

import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PROTECTION } from "@/lib/constants";

export function Protection() {
  return (
    <section id="protecao">
      <Container>
        <div className="bg-white rounded-[40px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.03)] border border-slate-100 p-10 md:p-20 relative flex flex-col md:flex-row items-center gap-16 overflow-visible">

          {/* Coluna esquerda — texto */}
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              {PROTECTION.title}
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              {PROTECTION.subtitle}
            </p>
            <ul className="space-y-4">
              {PROTECTION.highlights.map((item) => (
                <li key={item.title} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita — Breakout */}
          <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
            {/* Elemento Breakout — estoura o container */}
            <div className="absolute -top-16 -right-8 w-full md:w-[120%] h-[115%] z-20 pointer-events-none">
              {/* Imagem: /public/images/brand/mulher-saindo-card.png — 800×1000px PNG sem fundo */}
              <ImagePlaceholder
                text="mulher-saindo-card.png (PNG Transparente)"
                aspectRatio="auto"
                className="bg-transparent border-dashed border-2 border-purple-300 !text-purple-600"
              />
            </div>
            {/* Base roxa de apoio */}
            <div className="absolute inset-0 bg-purple-50 rounded-[32px] w-full h-full -z-10" />
          </div>

        </div>
      </Container>
    </section>
  );
}
