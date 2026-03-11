import { motion } from "motion/react";
import { skills } from "../../data";
import useTheme from "../../hooks/useTheme";

function SkillsPyramid() {
  const { theme } = useTheme();
  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };
  return (
    <section className="w-full flex flex-col items-center gap-6">
      {/* Mobile Layout */}
      <div className="grid grid-cols-2 gap-3 w-full px-4 md:hidden">
        {skills.flat().map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -60 : 60,
              scale: 0.95,
            }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.02,
            }}
            viewport={{ once: true }}
            className="techitem flex flex-col items-center justify-center
               h-20 dark:bg-slate-900/60 bg-slate-300/50 border border-sky-500/20
               rounded-lg text-center"
          >
            <img
              src={skill.imagePath}
              alt={skill.name}
              style={{ filter: "none" }}
              className="h-7 w-7 object-contain"
            />
            <span className="mt-1 text-[9px] dark:text-white text-slate-900 font-extralight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Desktop Pyramid Layout */}
      <section className="w-full hidden md:flex flex-col items-center gap-4 md:gap-6">
        {skills.map((row, rowIndex) => {
          const maxItems = Math.max(...skills.map((r) => r.length));
          const offset = (maxItems - row.length) / 2;

          return (
            <motion.div
              key={rowIndex}
              onMouseMove={handlePointerMove}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: rowIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
              style={{ transform: `translateX(${offset * 44}px)` }}
            >
              <div className="flex gap-3 md:gap-4">
                {row.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 60, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: rowIndex * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                      type: "spring",
                      stiffness: 240,
                      damping: 20,
                      mass: 1.5,
                    }}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{
                      scale: 1.08,
                      y: -6,
                      transition: {
                        type: "spring",
                        stiffness: 420,
                        damping: 22,
                        mass: 2,
                        delay: 0,
                      },
                    }}
                    className="techitem flex flex-col items-center justify-center
                       w-16 h-20 md:w-20 md:h-24
                       dark:bg-slate-900/60 bg-slate-300/50 border border-sky-500/20
                       rounded-lg cursor-pointer"
                  >
                    <img
                      src={skill.imagePath}
                      alt={skill.name}
                      style={
                        theme === "light"
                          ? {
                              filter: "none",
                            }
                          : undefined
                      }
                      className={`${
                        skill.name === "SignalR"
                          ? "h-16 w-16"
                          : "h-7 w-7 md:h-8 md:w-8"
                      } object-contain`}
                    />
                    <span className="mt-2 text-[9px] text-center dark:text-white/80 text-gray-900 font-light px-4">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>
    </section>
  );
}

export default SkillsPyramid;
