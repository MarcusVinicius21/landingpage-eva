"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { HERO } from "@/lib/constants";
import { Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-eva-cream overflow-hidden">
      {/* Blob lilás ao fundo */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-eva-lilac-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-eva-purple-300/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Coluna de texto */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <Badge className="mb-6">{HERO.badge}</Badge>

            {/* Título principal */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-[3.5rem] font-bold text-eva-purple-900 leading-[1.08] tracking-tight mb-4">
              {HERO.title}
            </h1>

            {/* Support line */}
            <p className="text-eva-purple-400 font-medium tracking-wide mb-5 text-base">
              {HERO.supportLine}
            </p>

            {/* Subtítulo */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-6">
              {HERO.subtitle}
            </p>

            {/* Highlight — bloco visual suave */}
            <div className="bg-white/60 border-l-4 border-eva-purple-300 px-5 py-4 mb-8 rounded-r-2xl shadow-sm">
              <p className="text-sm italic text-eva-purple-700/80 leading-relaxed">
                {HERO.highlight}
              </p>
            </div>

            {/* CTAs usando Button.tsx */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" href="#baixar">
                <Shield className="w-5 h-5 mr-2" />
                {HERO.cta}
              </Button>
              <Button variant="ghost" size="lg" href="#como-funciona">
                {HERO.ctaSecondary}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {HERO.trustIndicators.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-sm text-gray-400 font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-eva-green-safe shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna do mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[300px] sm:max-w-[320px] relative">
              {/* Halo suave atrás do mockup */}
              <div className="absolute -inset-8 bg-eva-purple-300/10 rounded-full blur-3xl pointer-events-none" />
              {/* Imagem: /public/images/hero/mockup-app-principal.png — 800×1600px */}
              <ImagePlaceholder
                aspectRatio="portrait"
                className="rounded-[40px] shadow-[0_32px_64px_-16px_rgba(45,10,78,0.12)] border-[10px] border-white"
                text="mockup-app-principal.png (800x1600)"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
