"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EvaLogo } from "@/components/ui/EvaLogo";
import { NAV } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Trava scroll do body quando menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Header fixo ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-eva-cream/85 backdrop-blur-md border-b border-eva-purple-100/30 shadow-[0_1px_24px_rgba(45,10,78,0.04)]"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <EvaLogo variant="dark" size="md" />
            </a>

            {/* Nav Desktop */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-slate-400 hover:text-eva-purple-600 tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" size="sm" href="#baixar">
                Baixar Agora
              </Button>
            </nav>

            {/* Botão hambúrguer / fechar — mobile only */}
            <button
              className="lg:hidden text-eva-purple-900 p-1.5 -mr-1 rounded-xl hover:bg-eva-lilac-100/50 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      {/* ── Painel mobile — camada própria, separada do header ── */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-[60]
          bg-eva-cream
          flex flex-col
          transition-all duration-300 ease-in-out
          ${menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        aria-hidden={!menuOpen}
      >
        {/* Separador visual topo */}
        <div className="h-px bg-eva-purple-100/60 shrink-0" />

        <div className="flex-1 overflow-y-auto flex flex-col px-5 pt-8 pb-10">

          {/* Links de navegação */}
          <nav className="flex flex-col gap-1">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[18px] font-medium text-slate-600 hover:text-eva-purple-700
                           hover:bg-eva-lilac-100/50 active:bg-eva-lilac-100/80
                           px-4 py-4 rounded-2xl transition-colors tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Espaço flexível empurra CTA para baixo */}
          <div className="flex-1" />

          {/* CTA — base do painel */}
          <div className="pt-6 border-t border-eva-purple-100/40">
            {/* div captura o clique e fecha o menu antes da navegação */}
            <div onClick={() => setMenuOpen(false)}>
              <Button
                variant="primary"
                size="lg"
                href="#baixar"
                className="w-full justify-center"
              >
                Baixar Agora
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
