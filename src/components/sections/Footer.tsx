import { Container } from "@/components/ui/Container";
import { EvaLogo } from "@/components/ui/EvaLogo";
import { FOOTER, SITE } from "@/lib/constants";
import { Phone, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="relative bg-eva-dark text-white">
      {/* Faixa com slogan */}
      <div className="border-b border-white/5 py-4">
        <Container>
          <p className="text-center text-[11px] text-eva-purple-300/40 tracking-[0.18em] uppercase font-medium">
            {SITE.supportLine}
          </p>
        </Container>
      </div>

      {/* Conteúdo principal */}
      <div className="py-14">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <EvaLogo variant="white" size="md" />
              <p className="mt-4 text-[13px] text-white/40 leading-relaxed">
                {SITE.tagline}
              </p>
              <p className="mt-1 text-[13px] text-white/25 leading-relaxed">
                {SITE.description}
              </p>
            </div>

            {/* Navegação */}
            <div>
              <h3 className="font-semibold text-[10px] uppercase tracking-[0.18em] text-white/20 mb-5">
                Navegação
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "O EVA", href: "#o-eva" },
                  { label: "Como Funciona", href: "#como-funciona" },
                  { label: "Proteção", href: "#protecao" },
                  { label: "Quem Somos", href: "#quem-somos" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[13px] text-white/45 hover:text-white/80 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergência */}
            <div>
              <h3 className="font-semibold text-[10px] uppercase tracking-[0.18em] text-white/20 mb-5">
                {FOOTER.emergency.title}
              </h3>
              <ul className="space-y-3.5">
                {FOOTER.helpLines.map(({ number, label }) => (
                  <li key={number} className="flex items-start gap-2">
                    <Phone
                      className="w-3.5 h-3.5 text-eva-purple-400/60 mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="text-[13px] leading-snug">
                      <span className="text-eva-purple-300 font-semibold">
                        {number}
                      </span>
                      <span className="text-white/35"> — {label}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12px] text-white/25 leading-relaxed">
                {FOOTER.emergency.text}
              </p>
            </div>

            {/* Importante + Links */}
            <div>
              <h3 className="font-semibold text-[10px] uppercase tracking-[0.18em] text-white/20 mb-5">
                Legal
              </h3>
              <ul className="space-y-2.5 mb-6">
                {FOOTER.links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[13px] text-white/40 hover:text-white/70 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-white/30 leading-relaxed">
                {FOOTER.emergency.institutional}
              </p>
              <div className="mt-4 flex items-center gap-2 text-[12px] text-eva-pink/60">
                <Heart className="w-3 h-3 fill-current shrink-0" />
                <span>Você não está sozinha</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-7 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/15">
            <p>
              © {new Date().getFullYear()} EVA. Todos os direitos reservados.
            </p>
            <p className="text-eva-purple-400/25 tracking-wide">
              eva · escuta · vigilância · ação
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
