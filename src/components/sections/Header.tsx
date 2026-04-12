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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

          {/* Toggle Mobile */}
          <button
            className="lg:hidden text-eva-purple-900 p-1.5 -mr-1 rounded-xl hover:bg-eva-lilac-100/50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Nav Mobile */}
        {menuOpen && (
          <div className="lg:hidden border-t border-eva-purple-100/40 py-5">
            <nav className="flex flex-col gap-1">
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-500 hover:text-eva-purple-600 hover:bg-eva-lilac-100/40 px-3 py-2.5 rounded-xl transition-colors tracking-wide"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 px-1">
              <Button variant="primary" size="md" href="#baixar" className="w-full justify-center">
                Baixar Agora
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
