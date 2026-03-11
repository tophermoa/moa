import type { ReactNode } from "react";
import useTheme from "../../hooks/useTheme";
import { themeFactory } from "../../utils/styleFactory";

function Button({
  text,
  variant = "primary",
  rounded = true,
  className,
  icon,
  onClick,
}: {
  text: string | ReactNode;
  rounded?: boolean;
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
  icon?: ReactNode;
  onClick: () => void;
}) {
  const { theme: currentTheme } = useTheme();
  const theme = themeFactory(currentTheme);
  const styles = {
    primary: `${theme.bgPrimaryAccent} text-white hover:bg-indigo-600`,
    secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300`,
    tertiary: `${theme.borderSecondary} border ${theme.textPrimary} hover:border-indigo-500 dark:hover:${theme.textPrimary} backdrop-blur-sm`,
  };
  return (
    <button
      className={`px-4 py-2 flex gap-1 text-sm items-center justify-center ${rounded ? "rounded-full" : "rounded"} hover:opacity-90 transition-colors duration-200 ${styles[variant] || styles.secondary} ${className || ""}`}
      onClick={onClick}
    >
      {text} {icon && icon}
    </button>
  );
}

export default Button;
