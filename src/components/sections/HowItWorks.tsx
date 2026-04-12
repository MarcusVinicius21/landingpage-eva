"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  const { steps } = HOW_IT_WORKS;

  return (
    <section
      id="como-funciona"
      className="py-20 sm:py-28 bg-eva-cream overflow-x-hidden"
    >
      <Container>
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-eva-purple-900 leading-tight tracking-tight">
              {HOW_IT_WORKS.title}
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
              {HOW_IT_WORKS.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Steps — layout limpo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <FadeIn
              key={step.number}
              direction="up"
              delay={i * 0.1}
              className="relative flex flex-col items-center text-center"
            >
              {/* Número */}
              <div className="mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-lg ${
                    i === 0
                      ? "bg-eva-purple-500 text-white shadow-md shadow-eva-purple-500/20"
                      : "bg-white text-eva-purple-500 border border-eva-purple-300/40"
                  }`}
                >
                  {step.number}
                </div>
              </div>

              <h3 className="font-display font-semibold text-eva-purple-900 text-[15px] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
                {step.description}
              </p>

              {/* Seta mobile entre itens */}
              {i < steps.length - 1 && (
                <div className="sm:hidden mt-6 text-eva-purple-300/60 text-sm">
                  ↓
                </div>
              )}
            </FadeIn>
          ))}
        </div>

        {/* Frase de fechamento */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-16 text-center">
            <blockquote className="inline-block max-w-lg">
              <p className="text-eva-purple-700 text-base sm:text-lg font-medium italic leading-relaxed">
                &ldquo;{HOW_IT_WORKS.closingQuote}&rdquo;
              </p>
            </blockquote>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
