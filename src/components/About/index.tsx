import BlurText from "../../animations/Text/BlurText";
import type { ThemeClassSet } from "../../types";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfilePicture from "../../assets/profile.png";
import { bio, educationItems, interests } from "../../data";
import TextType from "../../animations/Text/TypeWriter";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function About({ theme }: { theme: ThemeClassSet }) {
  const [startTyping, setStartTyping] = useState(false);
  const aboutSectionItems = {
    ME: "Me",
    EDUCATION: "Education",
    INTERESTS: "Interests",
  };
  const [currentMenu, setCurrentMenu] = useState(aboutSectionItems.ME);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, y: -12, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      className={`h-full pt-32 lg:py-32 px-8 lg:px-40 ${theme.bgPrimary}`}
    >
      <main className="relative flex flex-col items-center justify-start">
        <p className={`${theme.textPrimary} uppercase tracking-widest`}>
          {" "}
          It’s time to get to{" "}
          <span className={theme.textMainAccent1}>know me </span>
        </p>
        <div
          className={`grid grid-cols-2 lg:grid-cols-3 h-full lg:gap-96 justify-between items-center mt-16 gap-8`}
        >
          <ProfileCard
            className="h-full mx-auto col-span-2 lg:col-span-1 lg:mx-0 text-center lg:w-[330px] px-5 lg:px-0 w-full touch-pan-y"
            name="Gokul"
            title="Software Engineer"
            handle="gokul-369"
            status="Github"
            contactText="View"
            avatarUrl={ProfilePicture}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => {
              window.location.href = "https://github.com/gokul-369";
            }}
            behindGlowColor="hsla(173, 100%, 70%, 0.6)"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg, rgba(56,189,248,0.15) 0%, rgba(99,102,241,0.22) 40%, rgba(251,191,36,0.18) 100%)"
          />
          <div
            className={`${theme.textPrimary} flex h-full flex-col justify-start  col-span-2 py-8  lg:text-lg text-sm  text-md px-8 lg:px-0`}
          >
            <div
              ref={menuRef}
              className={`inline-flex gap-8 mb-12 aboutMenu ${currentMenu}`}
            >
              {Object.entries(aboutSectionItems).map(([key, label]) => {
                const isActive = label === currentMenu;
                return (
                  <span
                    key={key}
                    className={`aboutMenu-item cursor-pointer ${isActive ? theme.textMainAccent1 : theme.textPrimary} hover:-translate-y-[2px] transition`}
                    onClick={(e: React.MouseEvent) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      const menu = menuRef.current;
                      setCurrentMenu(label);
                      if (!menu) return;
                      const menuRect = menu.getBoundingClientRect();
                      const elRect = el.getBoundingClientRect();
                      if (label === aboutSectionItems.ME) setStartTyping(false);
                      const left = elRect.left - menuRect.left;
                      const width = elRect.width;
                      menu.style.setProperty(
                        "--accent-color",
                        "oklch(58.5% 0.233 277.117)",
                      );
                      menu.style.setProperty("--underline-left", `${left}px`);
                      menu.style.setProperty("--underline-width", `${width}px`);
                    }}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
            {currentMenu === aboutSectionItems.ME && (
              <>
                <BlurText
                  delay={200}
                  animateBy="tags"
                  direction="top"
                  onAnimationComplete={() => setStartTyping(true)}
                  className={`text-3xl lg:text-5xl font-bold mb-8 ${theme.textPrimary}  tracking-wide`}
                >
                  <h1 className={`${theme.textPrimary}`}>{"Hi, I am "}</h1>
                  <h1 className="ml-4 text-indigo-500">Gokul</h1>
                </BlurText>
                <div className="h-8 mb-8 flex items-center">
                  {startTyping && (
                    <h1
                      className={`${theme.textPrimary} text-lg lg:text-2xl font-thin font-mono lg:tracking-widest tracking-wide`}
                    >
                      I am also{" "}
                      <TextType
                        text={[
                          "An Engineer",
                          "A Photographer",
                          "An F1 enthusiast",
                          "A Gym rat",
                        ]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="_"
                        deletingSpeed={50}
                        textColors={[
                          "oklch(62.3% 0.214 259.815)",
                          "oklch(58.5% 0.233 277.117)",
                          "oklch(76.9% 0.188 70.08)",
                        ]}
                        cursorBlinkDuration={0.5}
                      />
                    </h1>
                  )}
                </div>
                {bio.description}
                <div
                  className={`flex mt-10 gap-10  ${theme.textPrimary} items-center justify-start`}
                >
                  <a
                    href="https://linkedin.com/in/gokul-c-40773a1b6"
                    target="blank"
                    className="hover:text-indigo-500"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="hover:text-indigo-500"
                    href="https://github.com/gokul-369"
                    target="blank"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="hover:text-indigo-500"
                    href="mailto:gokul369@outlook.com"
                    target="blank"
                  >
                    <MdOutlineMailOutline />
                  </a>
                  <a
                    className="hover:text-indigo-500"
                    href="https://www.instagram.com/gokul__369/"
                    target="blank"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </>
            )}
            {currentMenu === aboutSectionItems.EDUCATION && (
              <motion.ul
                className="mt-4 space-y-3 text-sm list text-slate-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
              >
                {educationItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex gap-3 py-4"
                    variants={{
                      hidden: { opacity: 0, y: -8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                    <div>
                      <p className={`font-medium ${theme.textPrimary}`}>
                        {item.title}
                      </p>
                      <p className={`text-xs  ${theme.textSecondary}`}>
                        {item.subTitle}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            )}
            {currentMenu === aboutSectionItems.INTERESTS && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-3"
              >
                {interests.map((item) => (
                  <motion.span
                    key={item}
                    variants={chipVariants}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                      inline-flex flex-wrap items-center gap-2
                      px-4 py-1.5
                      rounded-full
                      backdrop-blur-md
                      dark:bg-white/5
                      bg-slate-400/30
                      border border-white/10
                      text-xs sm:text-sm
                      dark:text-white/70
                      text-black/75
                      dark:hover:bg-indigo-500/10
                      dark:hover:text-white
                      hover:text-indigo-500/80
                      cursor-pointer
                      transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}
export default About;
