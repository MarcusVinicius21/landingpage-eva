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
    <section className="relative isolate pt-0 pb-0 sm:pt-36 sm:pb-0 bg-eva-cream overflow-hidden">
      {/* Arte de fundo */}
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
        <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-eva-cream/20 via-eva-cream/6 to-transparent" />
        {/* Overlay desktop */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-eva-cream/80 via-eva-cream/25 to-transparent" />
        {/* Fade inferior */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-50" />
      </div>

      {/* ─── Hero full-bleed mobile ─── */}
      <div className="sm:hidden relative">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Slide 1 — mulher full hero */}
          <div className="min-w-full shrink-0 snap-center">
            <div className="relative w-full overflow-hidden">
              {/* atmosfera */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-[16%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-eva-purple-300/14 blur-[90px]" />
                <div className="absolute left-[8%] top-[40%] h-[120px] w-[120px] rounded-full bg-eva-lilac-200/20 blur-[42px]" />
                <div className="absolute right-[6%] top-[18%] h-[140px] w-[140px] rounded-full bg-eva-lilac-200/22 blur-[40px]" />
              </div>

              <Image
                src="/images/hero/hero-mobile-banner-woman.png"
                alt="Mulher apresentando o aplicativo EVA"
                width={1440}
                height={1920}
                priority
                sizes="100vw"
                className="relative z-10 w-full h-auto"
              />

              {/* dissolve/curva inferior */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-eva-cream via-eva-cream/92 to-transparent" />
              <div className="absolute left-1/2 bottom-[-22px] h-16 w-[140%] -translate-x-1/2 rounded-[999px] bg-eva-cream/96 blur-xl" />
            </div>
          </div>

          {/* Slide 2 — mockup atual em versão editorial */}
          <div className="min-w-full shrink-0 snap-center">
            <div className="relative h-[620px] overflow-hidden">
              {/* atmosfera */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-[22%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-eva-purple-400/18 blur-[80px]" />
                <div className="absolute left-1/2 top-[58%] h-[160px] w-[160px] -translate-x-1/2 rounded-full bg-eva-lilac-200/24 blur-[52px]" />
              </div>

              <div className="relative z-10 flex h-full items-center justify-center px-4 pt-20 pb-8">
                <Image
                  src="/images/hero/mockup-app-principal.png"
                  alt="Interface do aplicativo EVA"
                  width={800}
                  height={1600}
                  sizes="84vw"
                  className="h-full w-auto object-contain drop-shadow-[0_28px_52px_rgba(25,10,40,0.22)]"
                />
              </div>

              {/* base suave */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-eva-cream/80 to-transparent" />
            </div>
          </div>
        </div>

        {/* dots discretos */}
        <div className="relative z-20 -mt-6 mb-6 flex justify-center gap-2.5">
          {[0, 1].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToSlide(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activeSlide === i
                  ? "h-[8px] w-6 bg-eva-purple-500"
                  : "h-[8px] w-[8px] bg-eva-lilac-100 hover:bg-eva-purple-300"
              }`}
            />
          ))}
        </div>
      </div>

      <Container>
        {/* ─── Grid desktop — preservado ─── */}
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

          {/* Coluna do mockup desktop */}
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
