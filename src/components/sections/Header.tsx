"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EvaLogo } from "@/components/ui/EvaLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(124,58,237,0.07)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <EvaLogo variant="dark" size="md" />
          </a>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-gray-500 hover:text-eva-purple-600 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Baixe o App</Button>
          </nav>

          {/* Menu Mobile Toggle */}
          <button
            className="md:hidden text-eva-purple-900 p-1 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Nav Mobile */}
        {menuOpen && (
          <div className="md:hidden border-t border-eva-purple-100/60 pt-4 pb-5">
            <nav className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] font-medium text-gray-600 hover:text-eva-purple-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4">
              <Button size="sm">Baixe o App</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
