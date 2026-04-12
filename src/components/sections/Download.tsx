"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { DOWNLOAD } from "@/lib/constants";
import { Smartphone } from "lucide-react";

export function Download() {
  return (
    <section id="baixar" className="relative py-20 sm:py-28 overflow-x-hidden">
      {/* Background lilás suave com gradiente */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, #EDE9FE 0%, #D8B4FE30 40%, #FAF7F2 100%)",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-eva-purple-300/[0.06] rounded-full blur-[100px] pointer-events-none" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Texto + CTAs */}
          <FadeIn direction="up">
            <div className="max-w-lg">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-eva-purple-900 leading-tight tracking-tight">
                {DOWNLOAD.title}
              </h2>

              <p className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
                {DOWNLOAD.subtitle}
              </p>

              {/* Botões de download */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {/* Google Play */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-eva-purple-900 text-white rounded-xl hover:bg-eva-dark transition-colors duration-200 shadow-md shadow-eva-purple-900/15"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 0 1 0 1.734l-2.807 1.626L15.206 12l2.492-2.493zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] opacity-70 leading-none">
                      Disponível no
                    </div>
                    <div className="text-sm font-semibold leading-tight">
                      {DOWNLOAD.ctaGoogle}
                    </div>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-eva-purple-900 text-white rounded-xl hover:bg-eva-dark transition-colors duration-200 shadow-md shadow-eva-purple-900/15"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] opacity-70 leading-none">
                      Baixe na
                    </div>
                    <div className="text-sm font-semibold leading-tight">
                      {DOWNLOAD.ctaApple}
                    </div>
                  </div>
                </a>
              </div>

              {/* Nota legal */}
              <p className="mt-6 text-xs text-gray-400">
                {DOWNLOAD.legalNote}
              </p>

              {/* Frase de apoio */}
              <div className="mt-8 flex items-center gap-2.5">
                <Smartphone
                  className="w-4 h-4 text-eva-purple-400"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium text-eva-purple-700/70">
                  {DOWNLOAD.supportText}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* QR Code placeholder */}
          <FadeIn direction="right" delay={0.15}>
            <div className="flex justify-center lg:justify-end">
              {/* Imagem: public/images/download/qr-download.png */}
              <ImagePlaceholder
                suggestedPath="/images/download/qr-download.png"
                label="QR Code para download"
                aspect="aspect-square"
                className="w-48 sm:w-56"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
