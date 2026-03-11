import BlurText from "../../animations/Text/BlurText";
import ScrollingRow from "../../animations/Scroller";
import { testimonials } from "../../data";
import { divideArray } from "../../utils/divideArray";
import TestimonialCard from "./TestimonialCard";
import useTheme from "../../hooks/useTheme";

function Testimonials() {
  const { themeClassSet: theme } = useTheme();
  const testimonialData = testimonials;
  const [right, left] = divideArray(testimonialData);

  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center 
                 min-h-dvh w-full py-10 md:py-32"
    >
      <div className="w-full lg:px-20 px-8 flex flex-col items-center">
        <BlurText
          className="uppercase text-center tracking-widest"
          delay={200}
          animateBy="tags"
          direction="top"
        >
          <p className={theme.textPrimary}>Voices from people</p>
          <span className={`${theme.textMainAccent1} ml-3`}>
            I’ve built with
          </span>
        </BlurText>
      </div>

      <div className="mt-16 flex flex-col w-full">
        <ScrollingRow direction="left">
          {left.map((item, index) => (
            <TestimonialCard key={index} testimonial={item} />
          ))}
        </ScrollingRow>

        <ScrollingRow direction="right">
          {right.map((item, index) => (
            <TestimonialCard key={index} testimonial={item} />
          ))}
        </ScrollingRow>
      </div>
    </section>
  );
}

export default Testimonials;
