"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ABOUT_EVA } from "@/lib/constants";
import {
  EyeOff,
  Zap,
  FileText,
  MapPin,
  Lock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  EyeOff,
  Zap,
  FileText,
  MapPin,
  Lock,
};

export function AboutEva() {
  return (
    <section id="o-eva" className="py-20 sm:py-28 bg-white overflow-x-hidden">
      <Container>
        {/* Header da seção */}
        <FadeIn direction="up">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-eva-purple-900 leading-tight tracking-tight">
              {ABOUT_EVA.title}
              <br />
              <span className="text-eva-purple-400">{ABOUT_EVA.titleAccent}</span>
            </h2>

            <div className="mt-6 space-y-4">
              {ABOUT_EVA.text.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-500 text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Blocos de features — grid limpo */}
        <StaggerContainer
          staggerDelay={0.08}
          className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {ABOUT_EVA.blocks.map((block, i) => {
            const Icon = iconMap[block.icon] ?? EyeOff;
            return (
              <StaggerItem key={block.title}>
                <div
                  className={`group p-6 rounded-2xl border border-eva-purple-100/50 bg-eva-cream/40 hover:bg-eva-lilac-100/30 transition-colors duration-300 ${
                    i === ABOUT_EVA.blocks.length - 1 && ABOUT_EVA.blocks.length % 3 === 2
                      ? "sm:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  {/* Ícone */}
                  <div className="w-11 h-11 rounded-xl bg-eva-lilac-100 border border-eva-lilac-200/40 flex items-center justify-center mb-4 group-hover:border-eva-purple-300/50 transition-colors duration-300">
                    <Icon
                      className="w-5 h-5 text-eva-purple-500"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="font-display font-semibold text-eva-purple-900 text-[15px] mb-2">
                    {block.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
