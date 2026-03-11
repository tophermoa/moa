import { navLinks } from "../../data";
import useTheme from "../../hooks/useTheme";
import { HashLink } from "react-router-hash-link";
import { PiMoonStarsLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function Nav() {
  const { toggleTheme, theme: themeName, themeClassSet: theme } = useTheme();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastY ? "down" : "up";
    
    if (direction === "down" && latest > 80) {
      setVisible(false);
    } else if (direction === "up") {
      setVisible(true);
    }

    setLastY(latest);
  });
  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="inline-flex gap-4 items-center justify-around rounded-full border border-white/15 backdrop-blur-md px-4 py-2 text-xs text-gray-200
    bg-white/5 dark:bg-white/5
    shadow-[0_8px_30px_rgba(15,23,42,0.45)]
    transition-colors duration-200
    "
    >
      <span className="inline-flex justify-center items-center gap-4">
        {navLinks.map((link) => (
          <HashLink
            to={link.value}
            smooth
            key={link.name}
            className={`text-sm font-thin ${theme.textPrimary} hover:text-indigo-500 transition-all duration-300`}
          >
            {link.name}
          </HashLink>
        ))}
      </span>

      {themeName === "dark" ? (
        <GoSun
          onClick={toggleTheme}
          className={`${theme.textPrimary} font-bold transition-transform duration-300 ease-in-out transform hover:rotate-90 text-sm cursor-pointer`}
        />
      ) : (
        <PiMoonStarsLight
          onClick={toggleTheme}
          className={`${theme.textPrimary} font-bold text-center cursor-pointer text-sm transition-transform duration-300 ease-in-out transform hover:-rotate-45`}
        />
      )}
    </motion.nav>
  );
}

export default Nav;
