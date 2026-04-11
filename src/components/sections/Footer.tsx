import { Container } from "@/components/ui/Container";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-eva-dark text-white py-16">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold">
              ev<span className="text-eva-purple-400">a</span>
            </span>
            <p className="mt-4 text-sm text-gray-400">
              Escuta. Vigilancia. Acao.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Sistema Inteligente de Seguranca Feminina
            </p>
          </div>

          {/* Navegacao */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Navegacao
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#sobre"
                  className="hover:text-white transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#funcionalidades"
                  className="hover:text-white transition-colors"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#seguranca"
                  className="hover:text-white transition-colors"
                >
                  Seguranca
                </a>
              </li>
            </ul>
          </div>

          {/* Ajuda */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Ajuda
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="text-eva-purple-400 font-semibold">
                  Ligue 180
                </span>{" "}
                — Central de Atendimento a Mulher
              </li>
              <li>
                <span className="text-eva-purple-400 font-semibold">
                  Ligue 190
                </span>{" "}
                — Policia Militar
              </li>
            </ul>
          </div>

          {/* Importante */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Importante
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Violencia contra a mulher e crime. Denuncie.
            </p>
            <div className="mt-4 flex items-center gap-2 text-eva-pink text-sm">
              <Heart className="w-4 h-4" />
              <span>Voce nao esta sozinha</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} EVA. Todos os direitos reservados.</p>
          <p>
            Coragem para agir. Apoio para vencer.
          </p>
        </div>
      </Container>
    </footer>
  );
}
