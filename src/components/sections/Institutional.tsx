"use client";

import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { INSTITUTIONAL } from "@/lib/constants";

export function Institutional() {
  return (
    <section id="quem-somos">
      <Container>
        {/* Texto centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            {INSTITUTIONAL.title}{" "}
            <span className="text-purple-600">{INSTITUTIONAL.titleAccent}</span>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            {INSTITUTIONAL.text}
          </p>
          <blockquote className="mt-8 text-base text-slate-500 italic font-light leading-relaxed border-l-2 border-purple-200 pl-5 text-left max-w-xl mx-auto">
            {INSTITUTIONAL.mission}
          </blockquote>
        </div>

        {/* Imagem editorial widescreen */}
        {/* Imagem: /public/images/brand/equipe-office.jpg — 1400×600px */}
        <ImagePlaceholder
          text="equipe-office.jpg (1400x600)"
          aspectRatio="widescreen"
          className="w-full rounded-[40px] border border-slate-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)]"
        />
      </Container>
    </section>
  );
}
