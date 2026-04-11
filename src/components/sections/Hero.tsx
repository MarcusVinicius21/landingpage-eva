import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EvaLogo } from "@/components/ui/EvaLogo";
import { Shield, Fingerprint } from "lucide-react";

/* Borda de papel rasgado — SVG com caminho irregular orgânico */
function TornPaperEdge() {
  return (
    <div className="absolute inset-y-0 left-[52%] w-24 -translate-x-1/2 z-20 hidden lg:block pointer-events-none">
      <svg
        viewBox="0 0 80 900"
        preserveAspectRatio="none"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M40,0
            C38,18 44,22 36,40
            C28,58 46,62 38,80
            C30,98 48,105 35,122
            C22,139 44,148 38,165
            C32,182 50,190 40,210
            C30,230 46,238 34,258
            C22,278 44,285 36,305
            C28,325 48,330 38,350
            C28,370 46,378 35,398
            C24,418 46,425 38,445
            C30,465 50,470 40,492
            C30,514 48,520 36,542
            C24,564 46,568 38,590
            C30,612 50,616 40,638
            C30,660 48,665 36,688
            C24,711 46,715 38,738
            C30,761 50,764 40,788
            C30,812 48,818 36,840
            C24,862 44,868 38,890
            C32,912 40,900 40,900
            L0,900 L0,0 Z
          "
          fill="#FAF7F2"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Fundo roxo full — cobre tudo ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-eva-purple-700 via-eva-purple-900 to-eva-dark -z-10" />

      {/* ── "Papel" branco cobrindo o lado esquerdo ── */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[55%] -z-10"
        style={{
          background: "linear-gradient(135deg, #FAF7F2 0%, #EDE9FE 100%)",
        }}
      />

      {/* Borda de papel rasgado entre os dois lados */}
      <TornPaperEdge />

      {/* Blob decorativo no lado roxo */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-eva-purple-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/6 w-56 h-56 bg-eva-purple-300/10 rounded-full blur-3xl -z-10" />

      <Container className="py-32 sm:py-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Coluna de texto — lado do papel ── */}
          <div>
            <Badge className="mb-6">
              Escuta. Vigilância. Ação.
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-eva-purple-900 leading-[1.1] tracking-tight">
              Você não está{" "}
              <span className="text-eva-purple-500">sozinha.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-md leading-relaxed">
              Um aplicativo discreto que acolhe, orienta e protege mulheres em
              momentos de vulnerabilidade.{" "}
              <span className="text-eva-purple-700 font-semibold">
                Sua proteção em um clique no EVA.
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
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              {["100% gratuito", "Privacidade total", "Interface discreta"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-eva-green-safe" />
                  {t}
                </span>
              ))}
            </div>

            {/* Assinatura da marca — igual ao rodapé dos prints */}
            <div className="mt-12 pt-8 border-t border-eva-purple-200/50 flex items-center gap-3">
              <EvaLogo variant="dark" size="sm" />
              <span className="text-xs text-gray-400 tracking-widest uppercase">
                Violência contra a mulher é crime
              </span>
            </div>
          </div>

          {/* ── Coluna do mockup — lado roxo ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 scale-110 bg-eva-purple-400/20 rounded-[2.5rem] blur-3xl" />

              {/* Frame do telefone */}
              <div className="relative w-64 h-[500px] sm:w-[17rem] sm:h-[560px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50">

                {/* Tela — gradiente dark EVA */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e0840] via-eva-purple-900 to-eva-dark" />

                {/* Notch/status bar */}
                <div className="relative flex justify-between items-center px-5 pt-4 pb-1">
                  <span className="text-white/25 text-[10px] font-medium tabular-nums">9:41</span>
                  <div className="w-16 h-4 bg-black/70 rounded-full" />
                  <div className="flex gap-0.5 items-end">
                    {[5, 7, 9, 7].map((h, i) => (
                      <div
                        key={i}
                        className="w-0.5 rounded-sm bg-white/30"
                        style={{ height: h }}
                      />
                    ))}
                  </div>
                </div>

                {/* Conteúdo da tela */}
                <div className="relative flex flex-col items-center h-full px-6 pt-8 pb-10 text-center">

                  {/* Ícone digital */}
                  <div className="w-16 h-16 rounded-2xl bg-white/6 border border-white/8 flex items-center justify-center mb-4">
                    <Fingerprint className="w-8 h-8 text-eva-purple-300" strokeWidth={1.5} />
                  </div>

                  {/* Logo EVA na tela */}
                  <EvaLogo variant="white" size="md" />

                  <p className="mt-1.5 text-eva-lilac-200/40 text-[10px] tracking-widest uppercase font-medium">
                    Segurança Feminina
                  </p>

                  <div className="w-10 h-px bg-white/8 my-5" />

                  {/* Skeleton de UI camuflada */}
                  <div className="w-full space-y-2.5">
                    <div className="h-10 rounded-xl bg-white/4 border border-white/6 flex items-center px-3 gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-eva-purple-400/30 shrink-0" />
                      <div className="h-1.5 bg-white/10 rounded flex-1" />
                    </div>
                    <div className="h-10 rounded-xl bg-white/4 border border-white/6 flex items-center px-3 gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-eva-purple-400/30 shrink-0" />
                      <div className="h-1.5 bg-white/10 rounded flex-1 max-w-[65%]" />
                    </div>
                    {/* Card "Interface camuflada" */}
                    <div className="h-14 rounded-xl bg-eva-purple-500/12 border border-eva-purple-400/15 flex items-center justify-center gap-2 mt-1">
                      <Shield className="w-3.5 h-3.5 text-eva-purple-300/70" />
                      <span className="text-eva-purple-200/60 text-xs font-medium">
                        Interface camuflada
                      </span>
                    </div>
                    {/* Mais dois itens skeleton */}
                    <div className="h-8 rounded-xl bg-white/3 border border-white/4 flex items-center px-3 gap-2.5 mt-1">
                      <div className="w-3 h-3 rounded-full bg-eva-pink/20 shrink-0" />
                      <div className="h-1.5 bg-white/8 rounded flex-1 max-w-[80%]" />
                    </div>
                    <div className="h-8 rounded-xl bg-white/3 border border-white/4 flex items-center px-3 gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-eva-green-safe/20 shrink-0" />
                      <div className="h-1.5 bg-white/8 rounded flex-1 max-w-[50%]" />
                    </div>
                  </div>

                  {/* Rodapé da tela */}
                  <div className="mt-auto pt-4 flex items-center justify-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
                    <div className="w-1.5 h-1.5 rounded-full bg-eva-purple-400/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
