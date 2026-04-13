"use client";

import { Container } from "@/components/ui/Container";
import { ABOUT_EVA } from "@/lib/constants";
import { EyeOff, Zap, FileText, MapPin, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  EyeOff,
  Zap,
  FileText,
  MapPin,
  Lock,
};

const cardLayout = [
  "md:col-span-2 lg:col-span-7 lg:-translate-y-2",
  "md:col-span-1 lg:col-span-5 lg:translate-y-8",
  "md:col-span-1 lg:col-span-4 lg:-translate-y-2",
  "md:col-span-1 lg:col-span-4 lg:translate-y-5",
  "md:col-span-2 lg:col-span-4 lg:translate-y-1",
];

export function About() {
  return (
    <section
      id="o-eva"
      className="relative isolate overflow-hidden py-24 md:py-32 bg-slate-50/45"
    >
      {/* Atmosfera de fundo sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 right-[8%] h-[460px] w-[460px] rounded-full bg-eva-lilac-200/20 blur-[120px]" />
        <div className="absolute bottom-[-12%] left-[-6%] h-[360px] w-[360px] rounded-full bg-white/80 blur-[110px]" />
      </div>

      <Container>
        {/* Cabeçalho editorial */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.04] mb-8">
            {ABOUT_EVA.title}{" "}
            <span className="text-purple-600 block sm:inline sm:mt-0 mt-2">
              {ABOUT_EVA.titleAccent}
            </span>
          </h2>

          <div className="space-y-6">
            {ABOUT_EVA.text.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Área dos cards com atmosfera própria */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-[6%] top-[8%] bottom-[2%] hidden lg:block rounded-[44px] bg-gradient-to-br from-white/35 via-eva-lilac-100/20 to-transparent blur-3xl -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start">
            {ABOUT_EVA.blocks.map((block, index) => {
              const Icon = iconMap[block.icon] || EyeOff;
              const isFeatured = index === 0;
              const isSecondary = index === 1;

              return (
                <article
                  key={block.title}
                  className={`group relative overflow-hidden rounded-[30px] border border-purple-100/70 bg-white/88 backdrop-blur-md p-8 md:p-9 shadow-[0_14px_40px_rgba(45,10,78,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(91,51,171,0.10)] ${cardLayout[index]}`}
                >
                  {/* brilho interno suave */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-transparent opacity-80" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(192,132,252,0.16),transparent_42%)]" />

                  <div className="relative z-10 flex h-full flex-col">
                    {/* ícone */}
                    <div
                      className={`mb-8 flex h-16 w-16 items-center justify-center rounded-[22px] border border-purple-100/70 bg-gradient-to-br from-purple-50 to-white shadow-[0_10px_24px_rgba(168,85,247,0.08)] transition-transform duration-500 group-hover:scale-[1.04] ${
                        isFeatured ? "h-[72px] w-[72px] rounded-[24px]" : ""
                      }`}
                    >
                      <Icon
                        className={`${isFeatured ? "h-7 w-7" : "h-6 w-6"} text-purple-600`}
                        strokeWidth={1.6}
                      />
                    </div>

                    {/* título */}
                    <h3
                      className={`tracking-tight text-slate-900 mb-4 ${
                        isFeatured
                          ? "text-2xl md:text-[2rem] font-semibold leading-tight"
                          : isSecondary
                          ? "text-[1.9rem] md:text-[2rem] font-semibold leading-tight"
                          : "text-2xl font-semibold leading-tight"
                      }`}
                    >
                      {block.title}
                    </h3>

                    {/* descrição */}
                    <p
                      className={`text-slate-600 font-light leading-relaxed ${
                        isFeatured ? "text-lg max-w-xl" : "text-base"
                      }`}
                    >
                      {block.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
