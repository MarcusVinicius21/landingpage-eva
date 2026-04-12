"use client";

import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative pt-40 pb-12 lg:pt-48 overflow-hidden">
      {/* Glow contextual centralizado */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-300/30 blur-[140px] rounded-full pointer-events-none -z-10" />

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-5xl lg:text-[72px] font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">
              {HERO.title}
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {HERO.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="rounded-full bg-purple-600 hover:bg-purple-700 text-white h-14 px-10 text-lg font-medium shadow-[0_8px_20px_-6px_rgba(124,58,237,0.4)] transition-all hover:-translate-y-0.5">
                {HERO.cta}
              </button>
              <button className="rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 h-14 px-10 text-lg font-medium transition-all hover:-translate-y-0.5">
                {HERO.ctaSecondary}
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start">
              {HERO.trustIndicators.map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm text-slate-500 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div className="flex-1 w-full max-w-md lg:max-w-none relative z-10 flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] relative">
              {/* Imagem: /public/images/hero/mockup-app-principal.png — 800×1600px */}
              <ImagePlaceholder
                aspectRatio="portrait"
                className="rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[12px] border-white bg-white"
                text="mockup-app-principal.png (800x1600)"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
