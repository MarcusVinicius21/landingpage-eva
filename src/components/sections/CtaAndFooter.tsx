import { EvaLogo } from "@/components/ui/EvaLogo";
import { Container } from "@/components/ui/Container";
import { DOWNLOAD, FOOTER, SITE, NAV } from "@/lib/constants";

export function CtaAndFooter() {
  return (
    <div className="bg-purple-900 rounded-t-[64px] mt-24 md:mt-32">

      {/* ── CTA ── */}
      <div className="py-24 md:py-32">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {DOWNLOAD.title}
            </h2>
            <p className="text-lg text-purple-200/80 font-light leading-relaxed mb-10">
              {DOWNLOAD.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Botão principal — branco com texto roxo */}
              <button className="rounded-full bg-white hover:bg-purple-50 text-purple-700 h-14 px-10 text-base font-semibold shadow-[0_8px_20px_-6px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 inline-flex items-center gap-3 justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 0 1 0 1.734l-2.807 1.626L15.206 12l2.492-2.493zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/>
                </svg>
                {DOWNLOAD.ctaGoogle}
              </button>
              <button className="rounded-full bg-white hover:bg-purple-50 text-purple-700 h-14 px-10 text-base font-semibold shadow-[0_8px_20px_-6px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 inline-flex items-center gap-3 justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {DOWNLOAD.ctaApple}
              </button>
            </div>

            <p className="mt-8 text-sm text-purple-300/60 font-light">
              {DOWNLOAD.legalNote}
            </p>
          </div>
        </Container>
      </div>

      {/* Separador */}
      <div className="border-t border-purple-800/50" />

      {/* ── Footer ── */}
      <div className="py-14">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <EvaLogo variant="white" size="md" />
              <p className="mt-4 text-sm text-purple-300/50 leading-relaxed font-light">
                {SITE.tagline}
              </p>
              <p className="mt-1 text-sm text-purple-300/30 leading-relaxed font-light">
                {SITE.description}
              </p>
            </div>

            {/* Navegação */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-400/40 mb-5">
                Navegação
              </h3>
              <ul className="space-y-3">
                {NAV.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-purple-200/50 hover:text-purple-100/80 transition-colors font-light"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergência */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-400/40 mb-5">
                {FOOTER.emergency.title}
              </h3>
              <ul className="space-y-3">
                {FOOTER.helpLines.map(({ number, label }) => (
                  <li key={number} className="text-sm font-light">
                    <span className="text-purple-300 font-semibold">{number}</span>
                    <span className="text-purple-200/40"> — {label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-purple-300/30 leading-relaxed font-light">
                {FOOTER.emergency.text}
              </p>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-400/40 mb-5">
                Legal
              </h3>
              <ul className="space-y-3">
                {FOOTER.links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-purple-200/40 hover:text-purple-100/70 transition-colors font-light"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-purple-300/25 leading-relaxed font-light">
                {FOOTER.emergency.institutional}
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-7 border-t border-purple-800/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-purple-400/30 font-light">
              © {new Date().getFullYear()} EVA. Todos os direitos reservados.
            </p>
            <p className="text-xs text-purple-400/20 tracking-wide font-light">
              eva · escuta · vigilância · ação
            </p>
          </div>
        </Container>
      </div>

    </div>
  );
}
