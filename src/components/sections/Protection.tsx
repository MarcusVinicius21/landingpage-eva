"use client";

import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PROTECTION } from "@/lib/constants";
import {
  EyeOff,
  Zap,
  Heart,
  FileText,
  MapPin,
  Lock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  EyeOff, Zap, Heart, FileText, MapPin, Lock,
};

export function Protection() {
  return (
    <section id="protecao">
      <Container>
        <div className="bg-white rounded-[40px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.03)] border border-slate-100 p-10 md:p-16 relative flex flex-col md:flex-row items-start gap-16 overflow-visible">

          {/* Coluna esquerda — título + cards de destaques */}
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              {PROTECTION.title}
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
              {PROTECTION.subtitle}
            </p>

            {/* Grid 2 colunas de cards premium */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROTECTION.highlights.map((item) => {
                const Icon = iconMap[item.icon] ?? Heart;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-eva-cream/50 border border-eva-purple-100/40 hover:border-eva-purple-200/60 transition-colors duration-300"
                  >
                    {/* Ícone com fundo lilás suave */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-eva-lilac-100 to-eva-purple-300/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon
                        className="w-4 h-4 text-eva-purple-500"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-eva-purple-900 text-[14px] mb-1">
                        {item.title}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coluna direita — Breakout */}
          <div className="flex-1 relative w-full h-[420px] md:h-[520px] shrink-0 md:max-w-[45%]">
            {/* Elemento Breakout — vaza o container */}
            <div className="absolute -top-16 -right-8 w-full md:w-[120%] h-[115%] z-20 pointer-events-none">
              {/* Imagem: /public/images/brand/mulher-saindo-card.png — 800×1000px PNG sem fundo */}
              <ImagePlaceholder
                text="mulher-saindo-card.png (PNG Transparente)"
                aspectRatio="auto"
                className="bg-transparent border-dashed border-2 border-eva-purple-200/60 !text-eva-purple-400"
              />
            </div>
            {/* Base lilás de apoio */}
            <div className="absolute inset-0 bg-gradient-to-br from-eva-lilac-100/60 to-eva-purple-300/10 rounded-[32px] -z-10" />
          </div>

        </div>
      </Container>
    </section>
  );
}
