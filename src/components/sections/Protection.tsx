"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
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
  EyeOff,
  Zap,
  Heart,
  FileText,
  MapPin,
  Lock,
};

export function Protection() {
  return (
    <section id="protecao" className="py-20 sm:py-28 bg-white overflow-x-hidden">
      <Container>
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-eva-purple-900 leading-tight tracking-tight">
              {PROTECTION.title}
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
              {PROTECTION.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Grid de destaques — 2×3 no desktop, clean e arejado */}
        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {PROTECTION.highlights.map((item) => {
            const Icon = iconMap[item.icon] ?? Heart;
            return (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-eva-cream/50 border border-eva-purple-100/40 hover:border-eva-purple-200/50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-eva-lilac-100 border border-eva-lilac-200/40 flex items-center justify-center shrink-0">
                    <Icon
                      className="w-5 h-5 text-eva-purple-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-eva-purple-900 text-[15px] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
