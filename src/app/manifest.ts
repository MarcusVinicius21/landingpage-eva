import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EVA — Sistema Inteligente de Segurança Feminina",
    short_name: "EVA",
    description:
      "Aplicativo discreto que acolhe, orienta e protege mulheres em momentos de vulnerabilidade.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#7C3AED",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
