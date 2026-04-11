import { Container } from "@/components/ui/Container";
import { EvaLogo } from "@/components/ui/EvaLogo";
import { Heart, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="relative bg-eva-dark text-white">

      {/* Ponte visual: gradiente de transição do creme para o dark */}
      <div
        className="absolute -top-16 left-0 right-0 h-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #FAF7F2 0%, #1A0530 100%)",
        }}
      />

      {/* Faixa institucional */}
      <div className="relative border-b border-white/5 py-4">
        <Container>
          <p className="text-center text-[11px] text-eva-purple-300/50 tracking-[0.18em] uppercase font-medium">
            Coragem para agir. Apoio para vencer.
          </p>
        </Container>
      </div>

      {/* Conteúdo principal */}
      <div className="relative py-14">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <EvaLogo variant="white" size="md" />
              <p className="mt-4 text-[13px] text-white/45 leading-relaxed">
                Escuta. Vigilância. Ação.
              </p>
              <p className="mt-1 text-[13px] text-white/30 leading-relaxed">
                Sistema Inteligente de Segurança Feminina
              </p>
            </div>

            {/* Navegação */}
            <div>
              <h3 className="font-semibold text-[10px] uppercase tracking-[0.18em] text-white/25 mb-5">
                Navegação
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Sobre", href: "#sobre" },
                  { label: "Funcionalidades", href: "#funcionalidades" },
                  { label: "Segurança", href: "#seguranca" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[13px] text-white/50 hover:text-white/90 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ajuda */}
            <div>
              <h3 className="font-semibold text-[10px] uppercase tracking-[0.18em] text-white/25 mb-5">
                Ajuda
              </h3>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2">
                  <Phone
                    className="w-3.5 h-3.5 text-eva-purple-400/70 mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-[13px] leading-snug">
                    <span className="text-eva-purple-300 font-semibold">180</span>
                    <span className="text-white/40">
                      {" "}— Central de Atendimento à Mulher
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone
                    className="w-3.5 h-3.5 text-eva-purple-400/70 mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-[13px] leading-snug">
                    <span className="text-eva-purple-300 font-semibold">190</span>
                    <span className="text-white/40"> — Polícia Militar</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Importante */}
            <div>
              <h3 className="font-semibold text-[10px] uppercase tracking-[0.18em] text-white/25 mb-5">
                Importante
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Violência contra a mulher é crime.{" "}
                <span className="text-eva-purple-300 font-medium">
                  Denuncie.
                </span>
              </p>
              <div className="mt-5 flex items-center gap-2 text-[13px] text-eva-pink/70">
                <Heart className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>Você não está sozinha</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/20">
            <p>© {new Date().getFullYear()} EVA. Todos os direitos reservados.</p>
            <p className="text-eva-purple-400/35 tracking-wide">
              eva · escuta · vigilância · ação
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
