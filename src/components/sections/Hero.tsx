"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { HERO } from "@/lib/constants";
import {
  Shield,
  Bell,
  MapPin,
  Users,
  Heart,
  Star,
  Sparkles,
  Navigation,
  Mic,
  BookOpen,
  MessageCircle,
  Home,
} from "lucide-react";

/* ─────────────────────────────────────────────
   PhoneMockup — simula tela real do app EVA
   Tema claro baseado nos PNGs de referência
───────────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[256px] sm:w-[272px]">
      {/* Glow externo suave */}
      <div className="absolute -inset-12 bg-eva-lilac-200/12 rounded-full blur-3xl pointer-events-none" />

      {/* Frame do telefone */}
      <div
        className="relative rounded-[2.75rem] p-[2px] shadow-[0_30px_80px_rgba(45,10,78,0.15)]"
        style={{
          background:
            "linear-gradient(160deg, rgba(237,233,254,0.6) 0%, rgba(196,181,253,0.3) 60%)",
        }}
      >
        {/* Tela interna — tema claro */}
        <div className="rounded-[2.6rem] overflow-hidden bg-[#FAF7F2] h-[540px] sm:h-[560px] flex flex-col">
          {/* Dynamic island */}
          <div className="flex justify-center pt-3 shrink-0">
            <div className="w-24 h-6 bg-gray-900 rounded-full" />
          </div>

          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-1.5 pb-1 shrink-0">
            <span className="text-gray-400 text-[10px] tabular-nums font-medium">
              9:41
            </span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-[2px] items-end h-3">
                {[3, 5, 7, 9].map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-sm"
                    style={{
                      height: h,
                      backgroundColor: `rgba(45,10,78,${0.12 + i * 0.08})`,
                    }}
                  />
                ))}
              </div>
              <div className="w-5 h-2.5 rounded-[3px] border border-gray-300 relative overflow-hidden">
                <div className="absolute inset-[1.5px] left-[1.5px] right-auto w-[65%] bg-gray-400 rounded-[2px]" />
              </div>
            </div>
          </div>

          {/* App header — lilás gradiente */}
          <div
            className="mx-3 rounded-2xl px-4 py-3 flex items-center gap-3 shrink-0"
            style={{
              background:
                "linear-gradient(135deg, #C4B5FD 0%, #D8B4FE 50%, #EDE9FE 100%)",
            }}
          >
            <div className="w-10 h-10 rounded-full bg-white/60 border-2 border-white flex items-center justify-center shrink-0">
              <span className="text-eva-purple-500 text-[10px] font-bold">
                FO
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] text-eva-purple-700/60">Bom dia,</p>
              <p className="text-xs font-semibold text-eva-purple-900 truncate">
                Fernanda Oliveira!
              </p>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/50 flex items-center justify-center">
              <Bell
                className="w-3 h-3 text-eva-purple-700"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Conteúdo scrollável */}
          <div className="flex-1 px-4 pt-3 pb-2 space-y-3 overflow-hidden">
            {/* Banner */}
            <div
              className="rounded-2xl p-3.5 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #EDE9FE 0%, #D8B4FE40 100%)",
              }}
            >
              <p className="text-eva-purple-900 font-semibold text-[11px]">
                Ative o EVA Premium
              </p>
              <p className="text-eva-purple-700/50 text-[9px] mt-0.5">
                Conecte-se com sua rede de proteção
              </p>
              <div className="flex items-center gap-1 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-eva-purple-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-eva-purple-300/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-eva-purple-300/40" />
              </div>
            </div>

            {/* Grid de ícones */}
            <div>
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                Destaques
              </p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { Icon: Shield, label: "Alerta" },
                  { Icon: Navigation, label: "Viagem" },
                  { Icon: Heart, label: "Apoio" },
                  { Icon: Sparkles, label: "Chat Eva" },
                  { Icon: Users, label: "Contatos" },
                  { Icon: Mic, label: "Voz" },
                  { Icon: BookOpen, label: "Dicas" },
                  { Icon: MapPin, label: "Mapa" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 rounded-xl bg-eva-lilac-100 border border-eva-lilac-200/50 flex items-center justify-center">
                      <Icon
                        className="w-4 h-4 text-eva-purple-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-[7px] text-gray-500 font-medium text-center leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eva IA preview */}
            <div className="rounded-2xl bg-white border border-eva-lilac-200/40 p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-eva-lilac-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-2.5 h-2.5 text-eva-purple-500" />
                </div>
                <span className="text-eva-purple-700 text-[10px] font-medium">
                  Eva IA
                </span>
                <span className="ml-auto text-gray-300 text-[9px]">agora</span>
              </div>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                &ldquo;Estou aqui para te ajudar. Como você está se sentindo
                hoje?&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom nav — 5 tabs */}
          <div className="shrink-0 h-14 bg-white border-t border-eva-lilac-200/30 flex justify-around items-center px-3">
            {[
              { Icon: Home, label: "Início", active: true },
              { Icon: Heart, label: "Bem Estar", active: false },
              { Icon: Shield, label: "Proteção", active: false },
              { Icon: Star, label: "Progresso", active: false },
              { Icon: MessageCircle, label: "Sala", active: false },
            ].map(({ Icon, label, active }, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <Icon
                  className={`w-[16px] h-[16px] ${
                    active ? "text-eva-purple-500" : "text-gray-300"
                  }`}
                  strokeWidth={active ? 2 : 1.5}
                />
                <span
                  className={`text-[7px] ${
                    active
                      ? "text-eva-purple-500 font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hero section — clean, leve, arejada
───────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-eva-cream">
      {/* Background: blobs lilás suaves */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 -right-24 w-[600px] h-[600px] bg-eva-lilac-200/[0.08] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-eva-purple-300/[0.06] rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-eva-cream to-transparent" />
      </div>

      <Container className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* Texto */}
          <FadeIn direction="up" className="order-2 lg:order-1">
            <Badge className="mb-6">{HERO.badge}</Badge>

            <h1 className="font-display text-[2.5rem] sm:text-5xl xl:text-[3.4rem] font-bold text-eva-purple-900 leading-[1.08] tracking-tight">
              Você não está{" "}
              <span className="text-eva-purple-500">sozinha.</span>
            </h1>

            <p className="mt-2 text-sm font-medium text-eva-purple-400 tracking-wide">
              {HERO.supportLine}
            </p>

            <p className="mt-5 text-base sm:text-lg text-gray-500 max-w-[440px] leading-relaxed">
              {HERO.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" href="#baixar">
                <Shield className="w-4 h-4 mr-2" />
                {HERO.cta}
              </Button>
              <Button variant="secondary" size="lg" href="#como-funciona">
                {HERO.ctaSecondary}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {HERO.trustIndicators.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-sm text-gray-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-eva-green-safe shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Mockup */}
          <FadeIn
            direction="right"
            delay={0.2}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
