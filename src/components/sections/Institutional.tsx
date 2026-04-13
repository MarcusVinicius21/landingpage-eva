"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { INSTITUTIONAL } from "@/lib/constants";

export function Institutional() {
  return (
    <section id="quem-somos" className="py-4">
      <Container>

        {/* Bloco editorial principal */}
        <div className="mb-14 md:mb-20">
          {/* Título manifesto — peso máximo */}
          <div className="max-w-4xl mb-10">
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-eva-purple-900 leading-[1.05] mb-2">
              {INSTITUTIONAL.title}
            </h2>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-eva-purple-400 leading-[1.05]">
              {INSTITUTIONAL.titleAccent}
            </h2>
          </div>

          {/* Layout 2 colunas: corpo + missão */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              {INSTITUTIONAL.text}
            </p>

            {/* Missão — tratada como manifesto */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-eva-purple-400 to-eva-lilac-200 rounded-full" />
              <p className="text-lg text-eva-purple-700/80 italic leading-relaxed font-light">
                &ldquo;{INSTITUTIONAL.mission}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-eva-purple-300/60 rounded-full" />
                <span className="text-xs font-semibold text-eva-purple-400/70 uppercase tracking-widest">
                  Projeto EVA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem editorial widescreen */}
        <div className="relative">
          <div className="relative aspect-video w-full rounded-[40px] overflow-hidden border border-eva-purple-100/30 shadow-[0_24px_48px_-12px_rgba(45,10,78,0.06)]">
            <Image
              src="/images/brand/equipe-office.jpg"
              alt="Equipe do Projeto EVA"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Caption sutil */}
          <p className="mt-4 text-center text-xs text-slate-300 font-light tracking-wide uppercase">
            Equipe do Projeto EVA
          </p>
        </div>

      </Container>
    </section>
  );
}
