import type { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon, title, description, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(93,45,142,0.08)] ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-eva-lilac-100 flex items-center justify-center text-eva-purple-500 mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-eva-purple-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
