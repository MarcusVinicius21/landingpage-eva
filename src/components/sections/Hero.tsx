import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-eva-lilac-100 via-eva-cream to-white -z-10" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-eva-purple-300/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-eva-lilac-200/15 rounded-full blur-3xl -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <Badge className="mb-6">Escuta. Vigilancia. Acao.</Badge>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-eva-purple-900 leading-tight">
              Sua protecao{" "}
              <span className="text-eva-purple-500">em um clique.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
              Um aplicativo discreto que acolhe, orienta e protege mulheres em
              momentos de vulnerabilidade.
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
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-eva-green-safe" />
                100% gratuito
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-eva-green-safe" />
                Privacidade total
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-eva-green-safe" />
                Interface discreta
              </span>
            </div>
          </div>

          {/* Mockup Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-72 h-[520px] sm:w-80 sm:h-[580px] bg-gradient-to-b from-eva-lilac-100 to-white rounded-[2.5rem] border-2 border-eva-purple-300/40 shadow-2xl shadow-eva-purple-500/10 flex flex-col items-center justify-center text-center p-8">
                {/* Fake status bar */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-eva-purple-300/30 rounded-full" />

                {/* Logo inside phone */}
                <span className="font-display text-4xl font-bold text-eva-purple-900 mb-3">
                  ev<span className="text-eva-purple-500">a</span>
                </span>

                <div className="w-16 h-px bg-eva-purple-300/40 my-4" />

                <p className="text-eva-purple-400 text-sm font-medium">
                  Mockup do app
                </p>
                <p className="text-eva-purple-300 text-xs mt-2 max-w-[180px]">
                  Composicao premium com telas do app EVA sera inserida na Etapa
                  3
                </p>
              </div>

              {/* Decorative glow behind phone */}
              <div className="absolute inset-0 bg-eva-purple-500/5 rounded-[2.5rem] blur-2xl -z-10 scale-110" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
