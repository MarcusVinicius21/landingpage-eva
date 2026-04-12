"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { INSTITUTIONAL } from "@/lib/constants";

export function Institutional() {
  return (
    <section
      id="quem-somos"
      className="py-20 sm:py-28 bg-eva-cream overflow-x-hidden"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Coluna de texto */}
          <FadeIn direction="left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-eva-purple-900 leading-tight tracking-tight">
              {INSTITUTIONAL.title}
              <br />
              <span className="text-eva-purple-400">
                {INSTITUTIONAL.titleAccent}
              </span>
            </h2>

            <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed">
              {INSTITUTIONAL.text}
            </p>

            <blockquote className="mt-8 pl-5 border-l-2 border-eva-purple-300/60">
              <p className="text-eva-purple-700/80 text-base leading-relaxed italic">
                {INSTITUTIONAL.mission}
              </p>
            </blockquote>

            {/* Bloco institucional — placeholder para dados oficiais */}
            <div className="mt-10 p-5 rounded-2xl bg-white border border-eva-purple-100/50">
              <p className="text-xs font-semibold text-eva-purple-400/70 uppercase tracking-widest mb-2">
                Equipe do projeto
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Informações sobre a equipe e vinculação institucional serão
                adicionadas quando validadas oficialmente.
              </p>
              {/* Placeholder: nome da instituição, responsável, cargo, cidade/órgão */}
            </div>
          </FadeIn>

          {/* Coluna visual — imagem placeholder */}
          <FadeIn direction="right" delay={0.15}>
            {/* Imagem: public/images/institutional/project-lead-photo.png */}
            <ImagePlaceholder
              suggestedPath="/images/institutional/project-lead-photo.png"
              label="Foto da equipe do projeto"
              aspect="aspect-[4/5]"
              className="max-w-sm mx-auto lg:max-w-none"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
