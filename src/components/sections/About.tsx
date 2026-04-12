"use client";

import { Container } from "@/components/ui/Container";
import { ABOUT_EVA } from "@/lib/constants";

export function About() {
  return (
    <section id="o-eva">
      <Container>
        {/* Bloco tipográfico único — bg-purple-50/50 rounded-[40px] */}
        <div className="bg-purple-50/50 rounded-[40px] p-12 md:p-16 border border-purple-100/40">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              {ABOUT_EVA.title}{" "}
              <span className="text-purple-600">{ABOUT_EVA.titleAccent}</span>
            </h2>

            <div className="space-y-5 mb-12">
              {ABOUT_EVA.text.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-slate-600 leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Blocos como lista horizontal — foco na força tipográfica */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 pt-10 border-t border-purple-200/40">
              {ABOUT_EVA.blocks.map((block) => (
                <div key={block.title}>
                  <p className="text-base font-semibold text-slate-800 mb-1">
                    {block.title}
                  </p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
