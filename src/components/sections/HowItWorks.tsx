"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HOW_IT_WORKS } from "@/lib/constants";

const featureImages = [
  "/images/features/feature-foto-1.jpg",
  "/images/features/feature-foto-2.jpg",
  "/images/features/feature-foto-3.jpg",
  "/images/features/feature-foto-4.jpg",
];

export function HowItWorks() {
  return (
    <section id="como-funciona">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            {HOW_IT_WORKS.subtitle}
          </p>
        </div>

        {/* Grid — adapta para 4 steps do constants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white rounded-[32px] overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(124,58,237,0.1)]"
            >
              {/* Imagem com overlay e título sobreposto */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={featureImages[index % featureImages.length]}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Degradê obrigatório */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent pointer-events-none" />
                <h3 className="absolute bottom-6 left-6 right-6 text-xl font-bold text-white leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Texto descritivo */}
              <div className="p-7 bg-white flex-1">
                <p className="text-slate-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Frase de fechamento */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-500 font-light italic">
            &ldquo;{HOW_IT_WORKS.closingQuote}&rdquo;
          </p>
        </div>
      </Container>
    </section>
  );
}
