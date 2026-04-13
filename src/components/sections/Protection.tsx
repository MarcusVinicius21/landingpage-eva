"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PROTECTION } from "@/lib/constants";
import {
  EyeOff,
  Zap,
  Heart,
  FileText,
  MapPin,
  Lock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  EyeOff, Zap, Heart, FileText, MapPin, Lock,
};

export function Protection() {
  return (
    <section id="protecao">
      <Container>
        <div className="bg-white rounded-[40px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.03)] border border-slate-100 p-10 md:p-16 relative flex flex-col md:flex-row md:items-stretch gap-12 md:gap-14 overflow-visible">

          {/* Coluna esquerda — título + cards de destaques */}
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              {PROTECTION.title}
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
              {PROTECTION.subtitle}
            </p>

            {/* Grid 2 colunas de cards premium */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROTECTION.highlights.map((item) => {
                const Icon = iconMap[item.icon] ?? Heart;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-eva-cream/50 border border-eva-purple-100/40 hover:border-eva-purple-200/60 transition-colors duration-300"
                  >
                    {/* Ícone com fundo lilás suave */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-eva-lilac-100 to-eva-purple-300/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon
                        className="w-4 h-4 text-eva-purple-500"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-eva-purple-900 text-[14px] mb-1">
                        {item.title}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 relative w-full h-[520px] md:h-auto md:min-h-[680px] shrink-0 md:max-w-[44%] md:self-stretch">
            {/* Base lilás de apoio */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-eva-lilac-100/68 via-white to-eva-purple-300/12 -z-10" />

            {/* Glow de apoio */}
            <div className="absolute inset-y-[8%] right-[6%] w-[66%] rounded-full bg-eva-lilac-200/34 blur-[68px] z-0 pointer-events-none" />

            {/* SVG orgânico decorativo mais visível e mais alto */}
            <svg
              viewBox="0 0 460 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="prot-fade-tall" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="10%" stopColor="white" stopOpacity="1" />
                  <stop offset="93%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="prot-mask-tall">
                  <rect width="460" height="700" fill="url(#prot-fade-tall)" />
                </mask>
              </defs>

              <path
                d="M 96 662 C 38 544, 198 446, 152 330 C 116 238, 250 138, 340 34"
                stroke="#A26EEA"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.62"
                mask="url(#prot-mask-tall)"
              />

              <path
                d="M 118 668 C 60 550, 220 452, 174 336 C 138 244, 272 144, 362 40"
                stroke="#B58EF0"
                strokeWidth="1.15"
                strokeLinecap="round"
                strokeDasharray="4 10"
                opacity="0.40"
                mask="url(#prot-mask-tall)"
              />

              <g transform="translate(74,566)" opacity="0.48">
                <path d="M1 8C1 8 3.5 4 8 4C12.5 4 15 8 15 8C15 8 12.5 12 8 12C3.5 12 1 8 1 8Z" stroke="#9B6FDB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="8" r="2" stroke="#9B6FDB" strokeWidth="1.4"/>
                <line x1="2" y1="2.5" x2="14" y2="13.5" stroke="#9B6FDB" strokeWidth="1.4" strokeLinecap="round"/>
              </g>

              <g transform="translate(108,474)" opacity="0.48">
                <path d="M9.5 2L4 9H9L7 14L14 7H9L11 2Z" stroke="#9B6FDB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </g>

              <g transform="translate(156,386)" opacity="0.48">
                <path d="M8 13C8 13 2 9.3 2 5.3A3.2 3.2 0 0 1 5.3 2C6.5 2 7.5 2.6 8 3.5C8.5 2.6 9.5 2 10.7 2A3.2 3.2 0 0 1 14 5.3C14 9.3 8 13 8 13Z" stroke="#9B6FDB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </g>

              <g transform="translate(150,292)" opacity="0.48">
                <rect x="2.5" y="1" width="11" height="14" rx="1.5" stroke="#9B6FDB" strokeWidth="1.4"/>
                <line x1="5" y1="6" x2="11" y2="6" stroke="#9B6FDB" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="5" y1="9" x2="11" y2="9" stroke="#9B6FDB" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="5" y1="12" x2="8.5" y2="12" stroke="#9B6FDB" strokeWidth="1.4" strokeLinecap="round"/>
              </g>

              <g transform="translate(176,198)" opacity="0.48">
                <path d="M8 1C5.2 1 3 3.2 3 6C3 9.6 8 14 8 14C8 14 13 9.6 13 6C13 3.2 10.8 1 8 1Z" stroke="#9B6FDB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="6" r="2" stroke="#9B6FDB" strokeWidth="1.4"/>
              </g>

              <g transform="translate(272,98)" opacity="0.48">
                <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="#9B6FDB" strokeWidth="1.4"/>
                <path d="M5 7V5A3 3 0 0 1 11 5V7" stroke="#9B6FDB" strokeWidth="1.4" strokeLinecap="round"/>
              </g>
            </svg>

            {/* Personagem — preenche o painel em altura, cabeça quebra acima do card */}
            <div
              className="absolute inset-x-0 top-[-4%] bottom-0 z-20 pointer-events-none overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0.96) 80%, rgba(0,0,0,0.72) 88%, rgba(0,0,0,0.32) 95%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0.96) 80%, rgba(0,0,0,0.72) 88%, rgba(0,0,0,0.32) 95%, rgba(0,0,0,0) 100%)",
              }}
            >
              {/* style inline garante h-full imune a override do Next.js Image */}
              <Image
                src="/images/brand/mulher-saindo-card.png"
                alt="Mulher usando o aplicativo EVA"
                width={1400}
                height={1738}
                sizes="(max-width: 768px) 90vw, 45vw"
                style={{ height: "100%", width: "auto" }}
                className="absolute bottom-0 right-0 drop-shadow-[0_22px_34px_rgba(45,10,78,0.10)]"
              />

              {/* wash difuso base */}
              <div className="absolute left-1/2 bottom-[-2%] -translate-x-1/2 w-[118%] h-24 rounded-full bg-white/88 blur-2xl" />
              <div className="absolute left-1/2 bottom-[-4%] -translate-x-1/2 w-[128%] h-20 rounded-full bg-slate-50/82 blur-3xl" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
