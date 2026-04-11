"use client";

import { Fingerprint } from "lucide-react";

interface EvaLogoProps {
  variant?: "dark" | "white";
  size?: "sm" | "md" | "lg";
}

export function EvaLogo({ variant = "dark", size = "md" }: EvaLogoProps) {
  const sizes = {
    sm: { text: "text-xl", icon: 18 },
    md: { text: "text-2xl", icon: 22 },
    lg: { text: "text-4xl", icon: 36 },
  };

  const colors = {
    dark: {
      text: "text-eva-purple-900",
      icon: "#7C3AED",
    },
    white: {
      text: "text-white",
      icon: "#9F7AEA",
    },
  };

  return (
    <span
      className={`inline-flex items-center gap-0 font-display font-bold tracking-tight leading-none ${sizes[size].text} ${colors[variant].text}`}
    >
      ev
      <Fingerprint
        size={sizes[size].icon}
        color={colors[variant].icon}
        strokeWidth={1.8}
        className="-mb-0.5"
      />
    </span>
  );
}
