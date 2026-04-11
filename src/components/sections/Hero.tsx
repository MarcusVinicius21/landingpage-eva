import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EvaLogo } from "@/components/ui/EvaLogo";
import {
  Shield,
  Bell,
  MapPin,
  Users,
  MessageCircle,
  Home,
  User,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Mockup premium — simula tela real do app EVA
───────────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[256px] sm:w-[272px]">
      {/* Glow externo */}
      <div className="absolute -inset-10 bg-eva-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -inset-4 bg-eva-purple-700/12 rounded-full blur-2xl pointer-events-none" />

      {/* Frame externo do telefone */}
      <div
        className="relative rounded-[2.75rem] p-[2px] shadow-[0_40px_100px_rgba(45,10,78,0.45)]"
        style={{
          background:
            "linear-gradient(160deg, rgba(159,122,234,0.35) 0%, rgba(26,5,48,0.8) 60%)",
        }}
      >
        {/* Tela interna */}
        <div className="rounded-[2.6rem] overflow-hidden bg-[#12032a] h-[560px] sm:h-[580px] flex flex-col">

          {/* Dynamic island */}
          <div className="flex justify-center pt-3 shrink-0">
            <div className="w-24 h-6 bg-black rounded-full" />
          </div>

          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-1.5 pb-1 shrink-0">
            <span className="text-white/25 text-[10px] tabular-nums font-medium">9:41</span>
            <div className="flex items-center gap-1.5">
              {/* Signal bars */}
              <div className="flex gap-[2px] items-end h-3">
                {[3, 5, 7, 9].map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-sm"
                    style={{
                      height: h,
                      backgroundColor: `rgba(255,255,255,${0.2 + i * 0.1})`,
                    }}
                  />
                ))}
              </div>
              {/* Battery */}
              <div className="w-5 h-2.5 rounded-[3px] border border-white/25 relative overflow-hidden">
                <div className="absolute inset-[1.5px] left-[1.5px] right-auto w-[65%] bg-white/30 rounded-[2px]" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="flex justify-between items-center px-5 py-3 shrink-0">
            <EvaLogo variant="white" size="sm" />
            <div className="w-8 h-8 rounded-full bg-white/6 border border-white/8 flex items-center justify-center">
              <Bell className="w-3.5 h-3.5 text-white/40" strokeWidth={1.5} />
            </div>
          </div>

          {/* Conteúdo scrollável */}
          <div className="flex-1 px-4 pb-2 space-y-2.5 overflow-hidden">

            {/* Card principal — status de segurança */}
            <div
              className="rounded-2xl p-4 border border-eva-purple-400/15"
              style={{
                background:
                  "linear-gradient(135deg, rgba(91,45,142,0.7) 0%, rgba(45,10,78,0.9) 100%)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-2 h-2 rounded-full bg-eva-green-safe shrink-0"
                  style={{ boxShadow: "0 0 8px #10B981" }}
                />
                <span className="text-eva-green-safe text-[10px] font-semibold uppercase tracking-wide">
                  Você está segura
                </span>
              </div>
              <p className="text-white font-semibold text-sm">Olá, Maria 👋</p>
              <p className="text-white/40 text-[10px] mt-0.5 mb-3">
                3 contatos ativos · Localização ativa
              </p>
              <div className="flex gap-2">
                <div className="flex-1 h-8 rounded-xl bg-eva-purple-500/60 border border-eva-purple-400/20 flex items-center justify-center gap-1.5">
                  <Shield className="w-3 h-3 text-white/80" />
                  <span className="text-white/90 text-[10px] font-semibold">
                    Alertar
                  </span>
                </div>
                <div className="flex-1 h-8 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-eva-purple-300/70" />
                  <span className="text-white/55 text-[10px]">Eva IA</span>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  Icon: Shield,
                  label: "Emergência",
                  bg: "bg-red-950/30",
                  border: "border-red-700/20",
                },
                {
                  Icon: Users,
                  label: "Contatos",
                  bg: "bg-eva-purple-900/40",
                  border: "border-eva-purple-600/20",
                },
                {
                  Icon: MapPin,
                  label: "Mapa Seguro",
                  bg: "bg-indigo-950/30",
                  border: "border-indigo-700/20",
                },
              ].map(({ Icon, label, bg, border }) => (
                <div
                  key={label}
                  className={`${bg} rounded-xl p-3 border ${border} flex flex-col items-center gap-1.5`}
                >
                  <Icon
                    className="w-4 h-4 text-white/40"
                    strokeWidth={1.5}
                  />
                  <span className="text-white/35 text-[9px] font-medium text-center leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Eva IA — chat preview */}
            <div className="rounded-2xl bg-white/4 border border-white/6 p-3.5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-eva-purple-600/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-2.5 h-2.5 text-eva-purple-300" />
                </div>
                <span className="text-eva-purple-300/70 text-[10px] font-medium">
                  Eva IA
                </span>
                <span className="ml-auto text-white/20 text-[9px]">agora</span>
              </div>
              <p className="text-white/35 text-[10px] leading-relaxed">
                "Estou aqui para te ajudar. Como você está se sentindo hoje?"
              </p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="shrink-0 h-14 bg-black/25 border-t border-white/5 flex justify-around items-center px-4">
            {[
              { Icon: Home, active: true },
              { Icon: Shield, active: false },
              { Icon: MessageCircle, active: false },
              { Icon: User, active: false },
            ].map(({ Icon, active }, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <Icon
                  className={`w-[18px] h-[18px] ${
                    active ? "text-eva-purple-400" : "text-white/20"
                  }`}
                  strokeWidth={active ? 2 : 1.5}
                />
                {active && (
                  <div className="w-1 h-1 rounded-full bg-eva-purple-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hero section
───────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-eva-cream">
      {/* ── Background: blobs difusos — sem divisão dura ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Bloom roxo principal — topo direita (onde fica o mockup) */}
        <div className="absolute -top-48 -right-32 w-[700px] h-[700px] bg-eva-purple-500/[0.09] rounded-full blur-[120px]" />
        {/* Bloom roxo secundário — centro direita */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[600px] bg-eva-purple-700/[0.08] rounded-full blur-[100px]" />
        {/* Lilás suave — esquerda */}
        <div className="absolute top-1/4 -left-24 w-80 h-80 bg-eva-lilac-200/20 rounded-full blur-[80px]" />
        {/* Creme central — mantém leveza */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-eva-cream to-transparent" />
      </div>

      <Container className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Texto ── */}
          <div className="order-2 lg:order-1">
            <Badge className="mb-6">Escuta. Vigilância. Ação.</Badge>

            <h1 className="font-display text-[2.6rem] sm:text-5xl xl:text-[3.5rem] font-bold text-eva-purple-900 leading-[1.1] tracking-tight">
              Você não está{" "}
              <span className="text-eva-purple-500">sozinha.</span>
            </h1>

            <p className="mt-5 text-lg text-gray-500 max-w-[420px] leading-relaxed">
              Um aplicativo discreto que acolhe, orienta e protege mulheres
              em momentos de vulnerabilidade.{" "}
              <strong className="text-eva-purple-700 font-semibold">
                Sua proteção em um clique.
              </strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
              <Button size="lg">
                <Shield className="w-4 h-4 mr-2" />
                Baixe o App
              </Button>
              <Button variant="secondary" size="lg" href="#sobre">
                Saiba mais
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2">
              {[
                "100% gratuito",
                "Privacidade total",
                "Interface discreta",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-sm text-gray-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-eva-green-safe shrink-0" />
                  {t}
                </span>
              ))}
            </div>

            {/* Assinatura da marca */}
            <div className="mt-10 pt-6 border-t border-eva-purple-100 flex items-center gap-3">
              <EvaLogo variant="dark" size="sm" />
              <span className="text-[11px] text-gray-400 tracking-widest uppercase">
                Violência contra a mulher é crime
              </span>
            </div>
          </div>

          {/* ── Mockup ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>

        </div>
      </Container>
    </section>
  );
}
