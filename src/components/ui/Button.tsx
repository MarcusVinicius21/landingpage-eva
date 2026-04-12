"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-95 rounded-2xl";

  const variants = {
    primary:
      "bg-eva-purple-500 text-white shadow-[0_10px_20px_-5px_rgba(124,58,237,0.3)] hover:bg-eva-purple-700 hover:shadow-[0_15px_25px_-5px_rgba(124,58,237,0.4)] hover:-translate-y-0.5",
    secondary:
      "bg-eva-lilac-100 text-eva-purple-700 hover:bg-eva-lilac-200 hover:-translate-y-0.5",
    ghost:
      "bg-white/40 backdrop-blur-md border border-eva-purple-300/50 text-eva-purple-900 hover:bg-eva-lilac-100 hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base sm:text-lg",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
