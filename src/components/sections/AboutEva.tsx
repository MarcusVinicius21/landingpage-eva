"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ABOUT_EVA } from "@/lib/constants";

export function AboutEva() {
  const [b0, b1, b2, b3, b4] = ABOUT_EVA.blocks;

  return (
    <section
      id="o-eva"
      className="py-20 sm:py-28 bg-eva-cream overflow-hidden relative"
    >
      {/* Background Gradient Sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-eva-cream via-white to-eva-cream pointer-events-none -z-10" />

      <Container>
        {/* Header Section */}
        <FadeIn direction="up" className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-eva-purple-900 leading-tight tracking-tight mb-6">
            {ABOUT_EVA.title}{" "}
            <span className="text-eva-purple-500">{ABOUT_EVA.titleAccent}</span>
          </h2>
          <div className="space-y-4">
            {ABOUT_EVA.text.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Layout Editorial / Bento Grid com Imagens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* ── Coluna Esquerda ── */}
          <div className="grid gap-6 lg:gap-8">

            {/* Bloco 0 — Destaque Principal (imagem grande com texto sobreposto) */}
            <FadeIn direction="up" delay={0.1}>
              <div className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm border border-eva-purple-100/40">
                <div className="relative">
                  {/* Imagem: /images/about/interface-discreta.png — 800×600px */}
                  <ImagePlaceholder
                    suggestedPath="/images/about/interface-discreta.png"
                    label="Asset: 800×600px (Horizontal)"
                    aspect="aspect-[4/3]"
                    className="!rounded-none !border-0 w-full"
                  />
                  {/* Gradiente para legibilidade do texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-eva-purple-900/90 via-eva-purple-900/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                    <h3 className="font-display font-semibold text-white text-2xl sm:text-3xl mb-3">
                      {b0.title}
                    </h3>
                    <p className="text-white/80 text-base leading-relaxed max-w-md">
                      {b0.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bloco 1 — Layout Horizontal (imagem esquerda, texto direita) */}
            <FadeIn direction="up" delay={0.2}>
              <div className="group flex flex-col sm:flex-row items-stretch rounded-[2rem] overflow-hidden bg-white shadow-sm border border-eva-purple-100/40">
                <div className="w-full sm:w-2/5 shrink-0 relative min-h-[220px]">
                  {/* Imagem: /images/about/acionamento-rapido.png — 400×400px */}
                  <ImagePlaceholder
                    suggestedPath="/images/about/acionamento-rapido.png"
                    label="Asset: 400×400px"
                    aspect="aspect-square"
                    className="!rounded-none !border-0 w-full h-full absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-eva-purple-500/10 mix-blend-multiply" />
                </div>
                <div className="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="font-display font-semibold text-eva-purple-900 text-xl mb-3">
                    {b1.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    {b1.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Coluna Direita ── */}
          <div className="grid gap-6 lg:gap-8">

            {/* Bloco 2 — Layout Horizontal */}
            <FadeIn direction="up" delay={0.3}>
              <div className="group flex flex-col sm:flex-row items-stretch rounded-[2rem] overflow-hidden bg-white shadow-sm border border-eva-purple-100/40">
                <div className="w-full sm:w-2/5 shrink-0 relative min-h-[220px]">
                  {/* Imagem: /images/about/registro-evidencias.png — 400×400px */}
                  <ImagePlaceholder
                    suggestedPath="/images/about/registro-evidencias.png"
                    label="Asset: 400×400px"
                    aspect="aspect-square"
                    className="!rounded-none !border-0 w-full h-full absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-eva-purple-500/10 mix-blend-multiply" />
                </div>
                <div className="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="font-display font-semibold text-eva-purple-900 text-xl mb-3">
                    {b2.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    {b2.description}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Grid Interno — Blocos 3 e 4 lado a lado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

              {/* Bloco 3 */}
              <FadeIn direction="up" delay={0.4}>
                <div className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm border border-eva-purple-100/40 h-full flex flex-col">
                  <div className="relative h-48 shrink-0">
                    {/* Imagem: /images/about/localizacao.png — 400×300px */}
                    <ImagePlaceholder
                      suggestedPath="/images/about/localizacao.png"
                      label="Asset: 400×300px"
                      aspect=""
                      className="!rounded-none !border-0 absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eva-purple-900/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 font-display font-semibold text-white text-lg">
                      {b3.title}
                    </h3>
                  </div>
                  <div className="p-5 flex-1 bg-white">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {b3.description}
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Bloco 4 */}
              <FadeIn direction="up" delay={0.5}>
                <div className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm border border-eva-purple-100/40 h-full flex flex-col">
                  <div className="relative h-48 shrink-0">
                    {/* Imagem: /images/about/privacidade.png — 400×300px */}
                    <ImagePlaceholder
                      suggestedPath="/images/about/privacidade.png"
                      label="Asset: 400×300px"
                      aspect=""
                      className="!rounded-none !border-0 absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eva-purple-900/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 font-display font-semibold text-white text-lg">
                      {b4.title}
                    </h3>
                  </div>
                  <div className="p-5 flex-1 bg-white">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {b4.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
