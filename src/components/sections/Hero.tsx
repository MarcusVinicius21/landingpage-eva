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
        <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-eva-cream/58 via-eva-cream/18 to-transparent" />
        {/* Overlay desktop */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-eva-cream/80 via-eva-cream/25 to-transparent" />
        {/* Fade inferior */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-50" />
      </div>

      <Container>
        {/* ─── Hero editorial mobile ─── */}
        <div className="sm:hidden mb-8 -mx-4">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Slide 1 — mulher */}
            <div className="min-w-full shrink-0 snap-center px-4">
              <div className="relative h-[470px] overflow-hidden">
                {/* Atmosfera de fundo */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-1/2 top-[16%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-eva-purple-300/14 blur-[78px]" />
                  <div className="absolute left-[12%] bottom-[18%] h-[120px] w-[120px] rounded-full bg-eva-lilac-200/20 blur-[42px]" />
                  <div className="absolute right-[8%] top-[22%] h-[110px] w-[110px] rounded-full bg-eva-lilac-200/20 blur-[36px]" />
                </div>

                <Image
                  src="/images/hero/hero-mobile-banner-woman.png"
                  alt="Mulher apresentando o aplicativo EVA"
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain object-center"
                />

                {/* Dissolve inferior editorial */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-eva-cream via-eva-cream/92 to-transparent" />
                <div className="absolute left-1/2 bottom-[-18px] h-16 w-[132%] -translate-x-1/2 rounded-[999px] bg-eva-cream/95 blur-xl" />
              </div>
            </div>

            {/* Slide 2 — mockup atual */}
            <div className="min-w-full shrink-0 snap-center px-4">
              <div className="relative h-[470px] overflow-hidden">
                {/* Atmosfera */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-[260px] w-[260px] rounded-full bg-eva-purple-400/18 blur-[70px]" />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-1/2 top-[58%] h-[140px] w-[140px] -translate-x-1/2 rounded-full bg-eva-lilac-200/22 blur-[44px]" />
                </div>

                <div className="relative z-10 flex h-full items-center justify-center">
                  <Image
                    src="/images/hero/mockup-app-principal.png"
                    alt="Interface do aplicativo EVA"
                    width={800}
                    height={1600}
                    sizes="(max-width: 639px) 78vw, 320px"
                    className="h-[88%] w-auto object-contain drop-shadow-[0_26px_48px_rgba(25,10,40,0.20)]"
                  />
                </div>

                {/* Base suave */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-eva-cream/76 to-transparent" />
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-3.5 flex justify-center gap-2.5 px-4">
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
