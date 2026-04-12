import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  /** Caminho sugerido para o arquivo final: ex. /images/hero/hero-main.png */
  suggestedPath: string;
  /** Label curta para o placeholder */
  label?: string;
  /** Aspect ratio class: ex. "aspect-video", "aspect-square", "aspect-[3/4]" */
  aspect?: string;
  /** Classes adicionais */
  className?: string;
}

export function ImagePlaceholder({
  suggestedPath,
  label,
  aspect = "aspect-video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-eva-lilac-100/60 to-eva-purple-300/10 border border-eva-purple-300/15 ${aspect} ${className}`}
    >
      {/* Glow sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-eva-lilac-200/20 pointer-events-none" />

      {/* Conteúdo central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        <div className="w-12 h-12 rounded-xl bg-white/70 border border-eva-purple-300/20 flex items-center justify-center">
          <ImageIcon
            className="w-5 h-5 text-eva-purple-400"
            strokeWidth={1.5}
          />
        </div>
        {label && (
          <span className="text-xs font-medium text-eva-purple-400/70 text-center">
            {label}
          </span>
        )}
      </div>

      {/* Referência do path — visível apenas em dev */}
      {/* Caminho sugerido: {suggestedPath} */}
    </div>
  );
}
