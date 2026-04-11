interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}

export function SectionTitle({
  title,
  subtitle,
  light = false,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-eva-purple-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-eva-lilac-200" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
