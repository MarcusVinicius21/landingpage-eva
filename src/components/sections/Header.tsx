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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(196,181,253,0.2)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <EvaLogo variant="dark" size="md" />
          </a>

          {/* Nav Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-gray-400 hover:text-eva-purple-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" href="#baixar">
              Baixar Agora
            </Button>
          </nav>

          {/* Menu Mobile Toggle */}
          <button
            className="lg:hidden text-eva-purple-900 p-1.5 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Nav Mobile */}
        {menuOpen && (
          <div className="lg:hidden border-t border-eva-lilac-100 py-5 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-500 hover:text-eva-purple-500 hover:bg-eva-lilac-100/40 px-3 py-2.5 rounded-xl transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 px-3">
              <Button size="sm" href="#baixar" className="w-full">
                Baixar Agora
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
