"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { INSTITUTIONAL } from "@/lib/constants";

export function Institutional() {
  return (
    <section
      id="quem-somos"
      className="relative py-24 md:py-32 bg-slate-50/55 overflow-hidden"
    >
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[40px] border border-slate-100 bg-white shadow-[0_24px_60px_rgba(25,25,40,0.05)]">
            {/* atmosfera sutil */}
            <div className="pointer-events-none absolute -top-20 right-[-8%] h-[340px] w-[340px] rounded-full bg-purple-200/25 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-20 left-[-6%] h-[260px] w-[260px] rounded-full bg-white blur-[90px]" />

            <div className="relative grid grid-cols-1 xl:grid-cols-12 gap-0">
              {/* Coluna editorial esquerda */}
              <div className="relative z-10 xl:col-span-5 px-8 py-10 md:px-12 md:py-14 xl:px-14 xl:py-16 flex flex-col justify-center">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-slate-900 leading-[1.02] mb-8">
                    {INSTITUTIONAL.title}{" "}
                    <span className="block mt-2 text-purple-500">
                      {INSTITUTIONAL.titleAccent}
                    </span>
                  </h2>

                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                    {INSTITUTIONAL.text}
                  </p>
                </div>
              </div>

              {/* Coluna da imagem + citação abaixo */}
              <div className="xl:col-span-7 flex flex-col gap-4 p-4 md:p-5 xl:p-6">

                {/* Imagem com legenda embutida */}
                <div className="relative rounded-[32px] overflow-hidden h-[260px] md:h-[340px] xl:h-[420px] shrink-0">
                  <Image
                    src="/images/brand/equipe-office.jpg"
                    alt="Delegacia da Mulher (DEAM) Governador Valadares"
                    fill
                    sizes="(max-width: 1280px) 100vw, 58vw"
                    className="object-cover object-[48%_22%]"
                    priority={false}
                  />
                  {/* wash sutil */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/10 via-transparent to-white/8" />
                  {/* Legenda — pequena, discreta, base da imagem */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent pt-8 pb-3 px-5">
                    <p className="text-white/75 text-[11px] font-light tracking-wide">
                      Delegacia da Mulher (DEAM) — Governador Valadares
                    </p>
                  </div>
                </div>

                {/* Card da citação — abaixo da foto, fora dela */}
                <div className="rounded-[28px] border border-purple-100/60 bg-purple-50/40 p-6 md:p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px w-10 bg-purple-300" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-400">
                      Projeto EVA
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed">
                    {INSTITUTIONAL.mission}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
