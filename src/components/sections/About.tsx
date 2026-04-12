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

export function About() {
  return (
    <section id="o-eva" className="relative py-24 md:py-32 overflow-hidden bg-slate-50/40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-200/20 rounded-full blur-[120px] opacity-70 pointer-events-none -z-10" />

      <Container>
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            {ABOUT_EVA.title}{" "}
            <span className="text-purple-600 block sm:inline sm:mt-0 mt-2">
              {ABOUT_EVA.titleAccent}
            </span>
          </h2>

          <div className="space-y-6">
            {ABOUT_EVA.text.map((paragraph, idx) => (
              <p key={idx} className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ABOUT_EVA.blocks.map((block, index) => {
            const Icon = iconMap[block.icon] || EyeOff;
            const isFeatured = index === 0;

            return (
              <div
                key={block.title}
                className={`group relative bg-white rounded-3xl p-8 md:p-10 border border-purple-100/60 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-500 flex flex-col overflow-hidden ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-50/0 group-hover:from-purple-50/70 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100/50 flex items-center justify-center mb-8 shrink-0 group-hover:scale-105 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
                  </div>

                  <h3 className={`font-semibold text-slate-900 mb-4 tracking-tight ${
                    isFeatured ? "text-2xl md:text-3xl" : "text-xl"
                  }`}>
                    {block.title}
                  </h3>

                  <p className={`text-slate-600 leading-relaxed font-light mt-auto ${
                    isFeatured ? "text-lg max-w-xl" : "text-base"
                  }`}>
                    {block.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
