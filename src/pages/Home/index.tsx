import About from "../../components/About";
import Dashboard from "../../components/Dashboard";
import Hero from "../../components/Hero/Hero";
import useTheme from "../../hooks/useTheme";
import { themeFactory } from "../../utils/styleFactory";

function Home() {
  const { theme } = useTheme();
  const themeClass = themeFactory(theme);
  const colors =
    theme === "dark"
      ? ["#9383d2", "#8998e1", "#aba7b9"]
      : // : ["#E5F5FF", "#ffffff", "#", "#FBE8FF", "#D9F7FF"]
        ["#F8F0E5", "#FFFFFF", "#9383d2", "#aba7b9"];
  return (
    <section id="#home">
      <Hero theme={themeClass} colors={colors} />
      <About theme={themeClass} />
      <Dashboard theme={themeClass} />
    </section>
  );
}

export default Home;
