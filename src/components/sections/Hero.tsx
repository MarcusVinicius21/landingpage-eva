"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HERO } from "@/lib/constants";
import { Shield } from "lucide-react";


export function Hero() {
  return (
    <section className="relative isolate pt-32 pb-0 sm:pt-36 sm:pb-0 bg-eva-cream overflow-hidden">
      {/* Arte de fundo — hero-background-soft-curve.png */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-background-soft-curve.webp"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-right-bottom"
        />
        {/* Overlay esquerdo — protege legibilidade do texto, não toca o lado direito */}
        <div className="absolute inset-0 bg-gradient-to-r from-eva-cream/80 via-eva-cream/25 to-transparent" />
        {/* Fade inferior — dissolve a curva para o bg da próxima seção */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-50" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-16 items-start">

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
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end self-start">
            <div className="w-full max-w-[280px] sm:max-w-[310px] xl:max-w-[350px] relative lg:-translate-y-8 xl:-translate-y-10">
              {/* Glow orgânico — dois círculos fixos, não cápsula */}
              <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-eva-purple-400/20 rounded-full blur-[60px] pointer-events-none -z-10" />
              <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[160px] h-[160px] bg-eva-lilac-200/25 rounded-full blur-[45px] pointer-events-none -z-10" />
              <Image
                src="/images/hero/mockup-app-principal.png"
                alt="Interface do aplicativo EVA"
                width={800}
                height={1600}
                priority
                sizes="(max-width: 768px) 305px, (max-width: 1280px) 340px, 375px"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
