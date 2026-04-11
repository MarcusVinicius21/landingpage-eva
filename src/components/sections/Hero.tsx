import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Shield, Fingerprint } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background: creme quente à esquerda, roxo profundo à direita */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-eva-cream" />
        {/* Metade direita com gradiente roxo — espelha os prints conceituais */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-gradient-to-br from-eva-purple-700 via-eva-purple-900 to-eva-dark opacity-100 lg:opacity-100" />
        {/* Blend suave na transição */}
        <div className="absolute inset-0 bg-gradient-to-r from-eva-cream via-eva-cream/95 to-transparent lg:to-transparent" />
      </div>

      {/* Blob decorativo superior esquerdo */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-eva-lilac-200/30 rounded-full blur-3xl -z-10" />
      {/* Blob decorativo inferior — transição entre as metades */}
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-eva-purple-500/10 rounded-full blur-3xl -z-10" />

      <Container className="py-32 sm:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Coluna de texto (fundo claro) ── */}
          <div className="z-10">
            <Badge className="mb-6 border border-eva-purple-300/30">
              Escuta. Vigilância. Ação.
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-eva-purple-900 leading-[1.1] tracking-tight">
              Você não está{" "}
              <span className="text-eva-purple-500">sozinha.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
              Um aplicativo discreto que acolhe, orienta e protege mulheres em
              momentos de vulnerabilidade.{" "}
              <span className="text-eva-purple-700 font-medium">
                Sua proteção em um clique.
              </span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Shield className="w-5 h-5 mr-2" />
                Baixe o App
              </Button>
              <Button variant="secondary" size="lg" href="#sobre">
                Saiba mais
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-eva-green-safe" />
                100% gratuito
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-eva-green-safe" />
                Privacidade total
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-eva-green-safe" />
                Interface discreta
              </span>
            </div>
          </div>

          {/* ── Coluna do mockup (fundo roxo) ── */}
          <div className="flex justify-center lg:justify-end z-10">
            <div className="relative">
              {/* Glow atrás do telefone */}
              <div className="absolute inset-0 scale-110 bg-eva-purple-500/20 rounded-[2.5rem] blur-3xl" />

              {/* Frame do telefone — tema escuro EVA */}
              <div className="relative w-64 h-[500px] sm:w-72 sm:h-[560px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-eva-dark/60">

                {/* Tela do app — fundo escuro gradiente */}
                <div className="absolute inset-0 bg-gradient-to-b from-eva-purple-900 via-[#3D1566] to-eva-dark" />

                {/* Barra de status fake */}
                <div className="relative flex justify-between items-center px-6 pt-5 pb-2">
                  <span className="text-white/30 text-[10px] font-medium">9:41</span>
                  <div className="w-10 h-3 bg-black/60 rounded-full" />
                  <div className="flex gap-0.5">
                    {[1,2,3].map(i => (
                      <div key={i} className={`w-1 rounded-sm bg-white/${20 + i * 15}`} style={{ height: `${6 + i * 2}px` }} />
                    ))}
                  </div>
                </div>

                {/* Conteúdo central da tela */}
                <div className="relative flex flex-col items-center justify-center h-full px-8 pb-16 text-center">
                  {/* Ícone de digital/logo */}
                  <div className="w-20 h-20 rounded-full bg-white/8 border border-white/10 flex items-center justify-center mb-5">
                    <Fingerprint className="w-10 h-10 text-eva-purple-300" strokeWidth={1.5} />
                  </div>

                  <span className="font-display text-3xl font-bold text-white tracking-wide">
                    ev<span className="text-eva-purple-400">a</span>
                  </span>

                  <p className="mt-2 text-eva-lilac-200/60 text-xs tracking-widest uppercase font-medium">
                    Segurança Feminina
                  </p>

                  <div className="w-12 h-px bg-white/10 my-5" />

                  {/* Skeleton de UI — simula elementos do app */}
                  <div className="w-full space-y-2.5">
                    <div className="h-10 rounded-xl bg-white/5 border border-white/5 flex items-center px-3 gap-2">
                      <div className="w-4 h-4 rounded-full bg-eva-purple-400/40" />
                      <div className="h-2 bg-white/10 rounded flex-1" />
                    </div>
                    <div className="h-10 rounded-xl bg-white/5 border border-white/5 flex items-center px-3 gap-2">
                      <div className="w-4 h-4 rounded-full bg-eva-purple-400/40" />
                      <div className="h-2 bg-white/10 rounded flex-1 max-w-[70%]" />
                    </div>
                    <div className="h-16 rounded-xl bg-eva-purple-500/15 border border-eva-purple-400/20 flex items-center justify-center mt-4">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-eva-purple-300" />
                        <span className="text-eva-purple-200 text-xs font-medium">Interface camuflada</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-white/20 text-[10px]">
                    Mockup real · Etapa 3
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
