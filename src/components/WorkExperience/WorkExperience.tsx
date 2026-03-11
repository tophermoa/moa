import BlurText from "../../animations/Text/BlurText";
import { workExperiences } from "../../data";
import useTheme from "../../hooks/useTheme";
import { groupExperiencesByCompany } from "../../utils/groupByCompany";
import { Timeline, TimelineItem } from "../Timeline";

function WorkExperience() {
  const groupedExperiences = groupExperiencesByCompany(workExperiences);
  const { themeClassSet: theme } = useTheme();
  return (
    <section
      className="flex lg:px-40 lg:py-32 flex-col w-full mt-16 lg:mt-0 p-8 min-h-vh justify-center items-center"
      id="experience"
    >
      <BlurText
        className="uppercase text-center tracking-widest mb-16"
        delay={200}
        animateBy="tags"
        direction="top"
      >
        <p className={`${theme.textPrimary}`}>Experience in Shipping</p>
        <span className={`${theme.textMainAccent1} ml-3`}>What Matters</span>
      </BlurText>
      <Timeline>
        {groupedExperiences.map((item, index) => (
          <TimelineItem key={index} roles={item.roles} company={item.company} />
        ))}
      </Timeline>
    </section>
  );
}

export default WorkExperience;
