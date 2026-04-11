interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-4 py-1.5 bg-eva-lilac-100 text-eva-purple-700 text-sm font-semibold rounded-full ${className}`}
    >
      {children}
    </span>
  );
}
