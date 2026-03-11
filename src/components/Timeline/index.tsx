import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { experience } from "../../types";
import useTheme from "../../hooks/useTheme";

export function TimelineItem({
  roles,
  company,
}: {
  roles: experience[];
  company: string;
}) {
  const { themeClassSet: theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute lg:-left-[50%]">
        <h3
          className={`text-lg text-right hidden lg:inline-block font-semibold ${theme.textPrimary}`}
        >
          {company}
        </h3>
      </div>
      <h3
        className={`text-lg font-medium text-left ml-2 mb-4 lg:hidden ${theme.textPrimary}`}
      >
        {company}
      </h3>
      {roles.map((experience: experience, index) => (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-10 lg:ml-4 ml-2"
          key={index}
        >
          <p
            className={`lg:text-lg text-base ${theme.textMainAccent1} uppercase tracking-wide mt-1`}
          >
            {experience.role}
          </p>
          <p className="lg:text-sm text-xs dark:text-slate-300 text-slate-700 mt-1">
            {experience.duration}
          </p>
          <ul>
            {experience.description.map((item, i) => (
              <li
                key={i}
                className={`lg:text-sm text-xs my-8 max-w-80 lg:max-w-2xl ${theme.textPrimary}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Timeline({ children }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.6,
  });

  // Pointer movement
  const pointerY = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative min-h-[200vh]">
      {/* Track */}
      <div className="absolute left-6 top-0 h-full w-[2px] dark:bg-white/10 bg-black/10" />

      {/* Animated progress line */}
      <motion.div
        style={{ scaleY: smooth }}
        className="
          absolute left-6 top-0 h-full w-[2px]
          origin-top
          bg-gradient-to-b from-indigo-500 via-indigo-400  to-amber-500
          transform-gpu will-change-transform
          after:absolute after:inset-0 after:bg-gradient-to-b
          after:from-indigo-500 after:via-indigo-400 after:to-amber-500
          after:blur-lg after:opacity-60
        "
      />

      {/* Pointer */}
      <motion.div
        style={{ top: pointerY }}
        className="
          absolute left-[25px]
          -translate-x-1/2
          h-3.5 w-3.5 rounded-full dark:bg-white
          bg-slate-400
          transform-gpu
          
        "
        animate={{
          boxShadow: [
            "0 0 10px rgba(255,255,255,0.6)",
            "0 0 26px rgba(255,255,255,1)",
            "0 0 10px rgba(255,255,255,0.6)",
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="space-y-32 lg:pl-20 pl-10">{children}</div>
    </section>
  );
}
