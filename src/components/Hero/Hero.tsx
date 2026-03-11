import type { ThemeClassSet } from "../../types";
import LiquidEther from "../Backgrounds/LiquidEther";
import { hero } from "../../data";
import Fade from "../../animations/Fade";
import Button from "../Button";
import BlurText from "../../animations/Text/BlurText";
import { HashLink } from "react-router-hash-link";

import { IoChevronDownOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useAppContext } from "../../context/AppContext";
import { LuMail } from "react-icons/lu";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { isMobile } from "../../utils/styleFactory";

type HeroProps = {
  theme: ThemeClassSet;
  colors: string[];
};

function Hero({ theme, colors }: HeroProps) {
  const navigate = useNavigate();
  const { openCollaborate } = useAppContext();
  return (
    <section id={"home"} className={`h-dvh relative w-full ${theme.bgPrimary}`}>
      <div className="fixed top-0 h-[100dvh] w-full left-0 right-0 -z-0">
        <LiquidEther
          colors={colors}
          mouseForce={isMobile ? 8 : 13}
          isViscous
          iterationsViscous={isMobile ? 24 : 30}
          resolution={0.25}
          // autoDemo={isMobile ? false : true}
          autoIntensity={isMobile ? 1.6 : 2.2}
          autoResumeDelay={1500}
          autoRampDuration={0.3}
          isBounce
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        {/* main hero content */}
        <main className="content flex flex-col gap-6 px-8 lg:px-44">
          <BlurText
            className="text-center"
            animateBy="tags"
            delay={200}
            direction="top"
          >
            <div
              className={`lg:text-lg text-xs tracking-widest uppercase font-thin ${theme.textPrimary}`}
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />
          </BlurText>
          <Fade variant="fade-up" delay={300} className={"mt-3 text-center"}>
            <h3
              className={`${theme.headerGradient} bg-clip-text text-4xl lg:text-6xl font-extrabold lg:font-bold text-transparent`}
            >
              {hero.punchLine}
            </h3>

            <h4 className={`mt-4 lg:text-lg text-xs ${theme.textSecondary}`}>
              {hero.shortDescription}
            </h4>
          </Fade>
          <Fade variant="fade-up" delay={500} className={"text-center"}>
            <div
              className={`${theme.textSecondary} max-w-2xl lg:text-base text-xs mx-auto leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: hero.longDescription }}
            />
            <div className="inline-flex gap-5 items-center justify-center mt-10">
              <Button
                text="Get in touch"
                variant="primary"
                icon={<LuMail className="ml-1" />}
                onClick={openCollaborate}
              />
              <Button
                text="View Work"
                icon={<HiOutlineBriefcase className="ml-1" />}
                variant="tertiary"
                onClick={() => {
                  navigate("/experience");
                }}
              />
            </div>
          </Fade>
        </main>

        <HashLink to={"/#about"} smooth>
          <IoChevronDownOutline
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce ${theme.textPrimary}`}
          />
        </HashLink>
      </div>
    </section>
  );
}

export default Hero;
