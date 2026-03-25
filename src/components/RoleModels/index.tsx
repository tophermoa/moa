import BlurText from "../../animations/Text/BlurText";
import { roleModelsData } from "../../data";
import useTheme from "../../hooks/useTheme";
import InspirationCard from "./InspirationCard";

function RoleModels() {
  const { themeClassSet: theme } = useTheme();
  return (
    <section
      id="rolemodels"
      className="py-32 px-8 flex flex-col lg:px-40 w-full"
    >
      <BlurText
        className="uppercase text-center tracking-widest"
        delay={200}
        animateBy="tags"
        direction="top"
      >
        <p className={`text-center inline ${theme.textPrimary}`}> Role Models Who</p>
        <span className={`${theme.textMainAccent1} ml-3`}>
          Inspire My Growth
        </span>
      </BlurText>

      <section className="mt-16 flex flex-wrap justify-center gap-8 text-white">
        {roleModelsData.map((item, index) => (
          <InspirationCard key={index} item={item} />
        ))}
      </section>
    </section>
  );
}

export default RoleModels;
