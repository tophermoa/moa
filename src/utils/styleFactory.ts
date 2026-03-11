import type { ThemeClassSet } from "../types";

export const themeFactory = (theme: "light" | "dark"): ThemeClassSet => {
  const themeFactory: Record<"light" | "dark", ThemeClassSet> = {
    dark: {
      bgPrimaryAccent: "bg-bgPrimaryAccent",
      bgSecondaryAccent: "bg-bgSecondaryAccent",
      bgPrimary: "bg-bgprimary",
      bgSecondary: "bg-bgSecondary",
      bgTertiary: "bg-bgTertiary",
      textPrimary: "text-textprimary",
      textSecondary: "text-textSecondary",
      borderSecondary: "border-textSecondary",
      headerGradient:
        "bg-gradient-to-r from-sky-300 via-indigo-400 to-amber-500",
      textMainAccent1: "text-textMainAccent1",
      textMainAccent2: "text-textMainAccent2",
      textMainAccent3: "text-textMainAccent3",
    },
    light: {
      bgPrimaryAccent: "bg-darkBgPrimaryAccent",
      bgSecondaryAccent: "bg-darkBgSecondaryAccent",
      bgPrimary: "bg-darkBgPrimary",
      bgSecondary: "bg-darkBgSecondary",
      bgTertiary: "bg-darkBgTertiary",
      textPrimary: "text-darkTextPrimary",
      textSecondary: "text-darkTextSecondary",
      borderSecondary: "border-darkTextSecondary",
      headerGradient:
        "bg-gradient-to-r from-sky-400 via-indigo-500 to-amber-500",
      textMainAccent1: "text-textMainAccent1",
      textMainAccent2: "text-textMainAccent2",
      textMainAccent3: "text-textMainAccent3",
    },
  };
  return themeFactory[theme];
};

export const isMobile = window.innerWidth <= 768;
