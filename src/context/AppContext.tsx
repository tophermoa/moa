import React, { createContext, useContext, useEffect, useState } from "react";
import type { ThemeClassSet } from "../types";
import { themeFactory } from "../utils/styleFactory";

type Theme = "light" | "dark";

interface AppContextValue {
  theme: Theme;
  toggleTheme: () => void;
  themeClassSet: ThemeClassSet;

  isCollaborateOpen: boolean;
  openCollaborate: () => void;
  closeCollaborate: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isCollaborateOpen, setIsCollaborateOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        themeClassSet: themeFactory(theme),
        isCollaborateOpen,
        openCollaborate: () => setIsCollaborateOpen(true),
        closeCollaborate: () => setIsCollaborateOpen(false),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return ctx;
}
