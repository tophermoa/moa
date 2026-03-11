import { useAppContext } from "../context/AppContext";

function useTheme() {
  const { theme, themeClassSet, toggleTheme } = useAppContext();
  return {
    theme,
    themeClassSet,
    toggleTheme,
  };
}

export default useTheme;
