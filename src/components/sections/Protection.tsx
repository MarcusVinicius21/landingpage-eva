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
        <div className="bg-white rounded-[40px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.03)] border border-slate-100 p-10 md:p-16 relative flex flex-col md:flex-row items-start gap-16 overflow-visible">

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

          {/* Coluna direita — Breakout */}
          <div className="flex-1 relative w-full h-[420px] md:h-[520px] shrink-0 md:max-w-[45%]">
            {/* Base lilás de apoio */}
            <div className="absolute inset-0 bg-gradient-to-br from-eva-lilac-100/60 to-eva-purple-300/10 rounded-[32px] -z-10" />

            {/* ── Decoração orgânica SVG ── atrás da personagem (z-10), à frente da base */}
            <svg
              viewBox="0 0 460 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                {/* Gradiente vertical para fade nas extremidades */}
                <linearGradient id="prot-fade" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%"   stopColor="white" stopOpacity="0" />
                  <stop offset="10%"  stopColor="white" stopOpacity="1" />
                  <stop offset="88%"  stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="prot-mask">
                  <rect width="460" height="520" fill="url(#prot-fade)" />
                </mask>
              </defs>

              {/* Curva orgânica principal */}
              <path
                d="M 72 490 C 12 378, 212 312, 142 212 C 72 112, 292 72, 352 16"
                stroke="#B79CE0"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.38"
                mask="url(#prot-mask)"
              />

              {/* Curva secundária — tracejada, levemente deslocada */}
              <path
                d="M 92 490 C 32 382, 232 318, 162 218 C 92 118, 312 78, 372 22"
                stroke="#B79CE0"
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeDasharray="3 10"
                opacity="0.20"
                mask="url(#prot-mask)"
              />

              {/* ── Ícone 1 · EyeOff · (~60, 432) ── */}
              <g transform="translate(52,424)" opacity="0.26">
                <path d="M1 8C1 8 3.5 4 8 4C12.5 4 15 8 15 8C15 8 12.5 12 8 12C3.5 12 1 8 1 8Z"
                  stroke="#9B6FDB" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="8" r="2"
                  stroke="#9B6FDB" strokeWidth="1.1"/>
                <line x1="2" y1="2.5" x2="14" y2="13.5"
                  stroke="#9B6FDB" strokeWidth="1.1" strokeLinecap="round"/>
              </g>

              {/* ── Ícone 2 · Zap · (~96, 352) ── */}
              <g transform="translate(88,344)" opacity="0.26">
                <path d="M9.5 2L4 9H9L7 14L14 7H9L11 2Z"
                  stroke="#9B6FDB" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </g>

              {/* ── Ícone 3 · Heart · (~148, 272) ── */}
              <g transform="translate(140,264)" opacity="0.26">
                <path d="M8 13C8 13 2 9.3 2 5.3A3.2 3.2 0 0 1 5.3 2C6.5 2 7.5 2.6 8 3.5C8.5 2.6 9.5 2 10.7 2A3.2 3.2 0 0 1 14 5.3C14 9.3 8 13 8 13Z"
                  stroke="#9B6FDB" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </g>

              {/* ── Ícone 4 · FileText · (~142, 194) ── */}
              <g transform="translate(134,186)" opacity="0.26">
                <rect x="2.5" y="1" width="11" height="14" rx="1.5"
                  stroke="#9B6FDB" strokeWidth="1.1"/>
                <line x1="5" y1="6"  x2="11" y2="6"  stroke="#9B6FDB" strokeWidth="1.1" strokeLinecap="round"/>
                <line x1="5" y1="9"  x2="11" y2="9"  stroke="#9B6FDB" strokeWidth="1.1" strokeLinecap="round"/>
                <line x1="5" y1="12" x2="8.5" y2="12" stroke="#9B6FDB" strokeWidth="1.1" strokeLinecap="round"/>
              </g>

              {/* ── Ícone 5 · MapPin · (~162, 124) ── */}
              <g transform="translate(154,116)" opacity="0.26">
                <path d="M8 1C5.2 1 3 3.2 3 6C3 9.6 8 14 8 14C8 14 13 9.6 13 6C13 3.2 10.8 1 8 1Z"
                  stroke="#9B6FDB" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="6" r="2"
                  stroke="#9B6FDB" strokeWidth="1.1"/>
              </g>

              {/* ── Ícone 6 · Lock · (~264, 52) ── */}
              <g transform="translate(256,44)" opacity="0.26">
                <rect x="3" y="7" width="10" height="8" rx="1.5"
                  stroke="#9B6FDB" strokeWidth="1.1"/>
                <path d="M5 7V5A3 3 0 0 1 11 5V7"
                  stroke="#9B6FDB" strokeWidth="1.1" strokeLinecap="round"/>
              </g>
            </svg>

            {/* Elemento Breakout — PNG transparente, 1856×2304 */}
            <div className="absolute -top-16 -right-8 w-full md:w-[120%] h-[115%] z-20 pointer-events-none">
              <Image
                src="/images/brand/mulher-saindo-card.png"
                alt="Mulher usando o aplicativo EVA"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
