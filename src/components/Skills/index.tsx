import BlurText from "../../animations/Text/BlurText";
import useTheme from "../../hooks/useTheme";
import SkillsPyramid from "../SkillsPyramid";

function Skills() {
  const { themeClassSet: theme } = useTheme();
  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center lg:px-40 md:py-32 py-8 md:h-dvh w-full"
    >
      <BlurText
        className="uppercase tracking-widest"
        delay={200}
        animateBy="tags"
        direction="top"
      >
        <p className={`${theme.textPrimary}`}> Technical </p>
        <span className={`${theme.textMainAccent1} ml-3`}>Wizardry</span>
      </BlurText>

      <section className="flex px-4 md:px-0 py-8 md:py-0 flex-wrap mt-16 w-full">
        <SkillsPyramid />
      </section>
    </section>
  );
}

export default Skills;
