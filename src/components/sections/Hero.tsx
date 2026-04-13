"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HERO } from "@/lib/constants";
import { Shield } from "lucide-react";

export function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActiveSlide(index);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
  }, []);

  return (
    <section className="relative isolate pt-32 pb-0 sm:pt-36 sm:pb-0 bg-eva-cream overflow-hidden">
      {/* Arte de fundo — hero-background-soft-curve.webp */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-background-soft-curve.webp"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-center sm:object-right-bottom"
        />
        {/* Overlay mobile */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-eva-cream/55 via-eva-cream/15 to-transparent" />
        {/* Overlay desktop */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-eva-cream/80 via-eva-cream/25 to-transparent" />
        {/* Fade inferior */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-50" />
      </div>

      <Container>
        {/* ─── Carrossel mobile — visível apenas abaixo de sm (< 640px) ─── */}
        <div className="sm:hidden mb-10">
          <div className="mx-auto max-w-[420px]">
            <div className="relative">
              <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-0 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
              >
                {/* Slide 1 — Mulher segurando o celular */}
                <div className="min-w-full shrink-0 snap-center">
                  <div className="relative aspect-[5/7] overflow-hidden rounded-[30px] border border-white/60 bg-gradient-to-br from-eva-lilac-100/70 via-eva-cream/65 to-eva-purple-300/15 shadow-[0_16px_42px_-18px_rgba(90,30,120,0.28)]">
                    {/* Glow suave de fundo */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute left-1/2 top-[18%] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-eva-purple-300/16 blur-[70px]" />
                      <div className="absolute left-[18%] bottom-[16%] h-[120px] w-[120px] rounded-full bg-eva-lilac-200/25 blur-[38px]" />
                    </div>

                    <Image
                      src="/images/hero/hero-mobile-banner-woman.png"
                      alt="Mulher usando o aplicativo EVA com segurança"
                      fill
                      priority
                      sizes="(max-width: 639px) calc(100vw - 3rem), 100vw"
                      className="object-contain object-bottom"
                    />

                    {/* Fade/curva inferior suave para não ficar com corte seco */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-eva-cream via-eva-cream/92 to-transparent" />
                    <div className="absolute left-1/2 bottom-[-22px] h-16 w-[128%] -translate-x-1/2 rounded-[999px] bg-eva-cream/95 blur-xl" />
                  </div>
                </div>

                {/* Slide 2 — Mockup do app */}
                <div className="min-w-full shrink-0 snap-center">
                  <div className="relative aspect-[5/7] overflow-hidden rounded-[30px] border border-white/60 bg-gradient-to-br from-eva-lilac-100/70 via-eva-cream/65 to-eva-purple-300/15 shadow-[0_16px_42px_-18px_rgba(90,30,120,0.28)] flex items-center justify-center">
                    {/* Glow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="h-[240px] w-[240px] rounded-full bg-eva-purple-400/20 blur-[65px]" />
                    </div>

                    <Image
                      src="/images/hero/mockup-app-principal.png"
                      alt="Interface do aplicativo EVA"
                      width={800}
                      height={1600}
                      sizes="(max-width: 639px) 76vw, 320px"
                      className="relative z-10 h-[88%] w-auto object-contain drop-shadow-[0_24px_45px_rgba(20,8,36,0.22)]"
                    />

                    {/* Base suave para integrar o mockup */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-eva-cream/72 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Dots indicadores */}
              <div className="flex justify-center gap-2.5 mt-4">
                {[0, 1].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToSlide(i)}
                    aria-label={`Ir para slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      activeSlide === i
                        ? "w-6 h-[8px] bg-eva-purple-500"
                        : "w-[8px] h-[8px] bg-eva-purple-200 hover:bg-eva-purple-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Grid desktop — estrutura atual preservada ─── */}
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-16 items-start">
          {/* Coluna de texto */}
          <div className="order-2 lg:order-1">
            <Badge className="mb-6">{HERO.badge}</Badge>

            <h1 className="font-display text-4xl sm:text-5xl xl:text-[3.5rem] font-bold text-eva-purple-900 leading-[1.08] tracking-tight mb-4">
              {HERO.title}
            </h1>

            <p className="text-eva-purple-400 font-medium tracking-wide mb-5 text-base">
              {HERO.supportLine}
            </p>

            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-6">
              {HERO.subtitle}
            </p>

            <div className="bg-white/60 border-l-4 border-eva-purple-300 px-5 py-4 mb-8 rounded-r-2xl shadow-sm">
              <p className="text-sm italic text-eva-purple-700/80 leading-relaxed">
                {HERO.highlight}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" href="#baixar">
                <Shield className="w-5 h-5 mr-2" />
                {HERO.cta}
              </Button>
              <Button variant="ghost" size="lg" href="#como-funciona">
                {HERO.ctaSecondary}
              </Button>
            </div>

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

          {/* Coluna do mockup — oculta no mobile (< sm), visível em sm+ */}
          <div className="order-1 lg:order-2 hidden sm:flex justify-center lg:justify-center self-start">
            <div className="w-full max-w-[280px] sm:max-w-[310px] xl:max-w-[350px] relative lg:-translate-y-8 xl:-translate-y-10">
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
