import useTheme from "../../hooks/useTheme";

export default function MovingGradient({ className }: { className?: string }) {
  const { theme } = useTheme();
  const gradient =
    theme === "light"
      ? "bg-slate-100 bg-[radial-gradient(900px_circle_at_0%_0%,rgba(129,140,248,0.16),transparent_60%),radial-gradient(900px_circle_at_100%_100%,rgba(56,189,248,0.14),transparent_60%)]"
      : `bg-[radial-gradient(900px_circle_at_0%_0%,rgba(129,140,248,0.28),transparent_60%),radial-gradient(900px_circle_at_100%_100%,rgba(56,189,248,0.22),transparent_60%),radial-gradient(800px_circle_at_50%_50%,rgba(15,23,42,1),transparent_70%)]
`;
  return (
    <div
      className={`
    fixed inset-0 -z-10 w-full
    ${gradient} ${className}
  `}
    />
  );
}
