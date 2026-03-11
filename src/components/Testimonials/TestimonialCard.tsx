import { RiDoubleQuotesL } from "react-icons/ri";
import type { testimonial } from "../../types";
import SpotlightCard from "../SpotLightCard";

function TestimonialCard({ testimonial }: { testimonial: testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <SpotlightCard
      className="lg:h-[350px] lg:w-[300px] flex flex-col justify-between h-[300px] w-[250px]
             bg-gradient-to-br from-blue-50 via-white/50 to-indigo-100/50
             dark:bg-white/5
             dark:bg-none
             "
      spotlightColor="rgba(99,102,241,0.45)"
    >
      <RiDoubleQuotesL className="text-4xl text-blue-400/40 mb-4" />

      <p className="text-xs lg:text-sm leading-relaxed dark:text-slate-200 text-slate-900 max-h-28 lg:max-h-36 overflow-auto">
        {testimonial.testimonial}
      </p>

      <div className="flex items-center gap-3 mt-3">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            className="h-12 w-12 object-cover rounded-full border border-white/10"
          />
        ) : (
          <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-indigo-500 backdrop-blur-md shadow-lg">
            {initials}
          </div>
        )}
        <div>
          <p className="text-xs lg:text-sm font-medium dark:text-white text-slate-900">
            {testimonial.name}
          </p>
          <p className="text-xs mt-1 text-slate-400">
            {testimonial.jobTitle} · {testimonial.company} ·{" "}
            {testimonial.location}
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default TestimonialCard;
