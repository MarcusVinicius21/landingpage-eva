import { Container } from "@/components/ui/Container";
import { EvaLogo } from "@/components/ui/EvaLogo";
import { Heart, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-eva-dark text-white">
      {/* Faixa institucional acima do footer principal */}
      <div className="border-b border-white/5 py-4">
        <Container>
          <p className="text-center text-xs text-eva-purple-300/60 tracking-widest uppercase font-medium">
            Coragem para agir. Apoio para vencer.
          </p>
        </Container>
      </div>

      <div className="py-16">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <EvaLogo variant="white" size="md" />
              <p className="mt-4 text-sm text-white/50 leading-relaxed">
                Escuta. Vigilância. Ação.
              </p>
              <p className="mt-1 text-sm text-white/35 leading-relaxed">
                Sistema Inteligente de Segurança Feminina
              </p>
            </div>

            {/* Navegação */}
            <div>
              <h3 className="font-semibold text-xs uppercase tracking-widest text-white/30 mb-5">
                Navegação
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#sobre"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#funcionalidades"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a
                    href="#seguranca"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Segurança
                  </a>
                </li>
              </ul>
            </div>

            {/* Ajuda */}
            <div>
              <h3 className="font-semibold text-xs uppercase tracking-widest text-white/30 mb-5">
                Ajuda
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-eva-purple-400 mt-0.5 shrink-0" />
                  <span>
                    <span className="text-eva-purple-300 font-semibold">180</span>
                    <span className="text-white/50"> — Central de Atendimento à Mulher</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-eva-purple-400 mt-0.5 shrink-0" />
                  <span>
                    <span className="text-eva-purple-300 font-semibold">190</span>
                    <span className="text-white/50"> — Polícia Militar</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Importante */}
            <div>
              <h3 className="font-semibold text-xs uppercase tracking-widest text-white/30 mb-5">
                Importante
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Violência contra a mulher é crime.{" "}
                <span className="text-eva-purple-300">Denuncie.</span>
              </p>
              <div className="mt-5 flex items-center gap-2 text-eva-pink/80 text-sm">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Você não está sozinha</span>
              </div>
            </div>
          </div>

          {/* Rodapé inferior */}
          <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>© {new Date().getFullYear()} EVA. Todos os direitos reservados.</p>
            <p className="text-eva-purple-400/40">eva · escuta · vigilância · ação</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
