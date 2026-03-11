import type { IconType } from "react-icons";
import { spotlight, type achievement } from "../../types";
import SpotlightCard from "../SpotLightCard";

function CertificateCard({
  title,
  company,
  subTitle,
  year,
  type,
  icon: iconData,
}: achievement) {
  const Icon: IconType = iconData;
  return (
    <SpotlightCard
      className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-200/30 
             bg-white/60 dark:bg-black/20 px-4 py-3 shadow-lg backdrop-blur-md md:px-5 md:py-4"
      spotlightColor={spotlight.INSPIRATIONS}
    >
      <article className="relative flex h-full min-h-[150px] flex-col justify-between gap-3">
        <div className="flex items-start justify-between gap-3">
          {/* Icon background gradient */}
          <div
            className="absolute bottom-0 right-0 h-20 w-20 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${spotlight.INSPIRATIONS[0]} 0%, ${spotlight.INSPIRATIONS[1]} 100%)`,
              opacity: 0.2,
            }}
          >
            <Icon className="h-20 w-20 text-green-500" />
          </div>

          <div>
            <p
              className="lg:text-[12px] text-[10px] font-semibold uppercase tracking-[0.25em] 
                      text-gray-500 dark:text-gray-400"
            >
              {type}
            </p>
            <h3 className="mt-1 text-sm font-medium text-gray-900 dark:text-white md:text-base">
              {title}
            </h3>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
              {company}
            </p>
          </div>
          <div className="inline-flex h-7 items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 text-[10px] font-medium dark:text-emerald-200 text-emerald-700">
            <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {year}
          </div>
        </div>

        {subTitle && (
          <p className="mt-1 max-w-64 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
            {subTitle}
          </p>
        )}
      </article>
    </SpotlightCard>
  );
}

export default CertificateCard;
