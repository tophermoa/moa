import BlurText from "../../animations/Text/BlurText";
import { awards } from "../../data";
import useTheme from "../../hooks/useTheme";
import CertificateCard from "../CertificateCards";
import { motion, type Variants } from "motion/react";

function Awards() {
  const { themeClassSet: theme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  return (
    <section
      className={`lg:px-40 px-8 md:py-32 py-10  items-center w-full flex flex-col`}
      id={"awards"}
    >
      <BlurText
        className="uppercase tracking-widest"
        delay={200}
        animateBy="tags"
        direction="top"
      >
        <p className={`${theme.textPrimary}`}> Highlights and </p>
        <span className={`${theme.textMainAccent1} ml-3`}>Honors</span>
      </BlurText>
      <motion.div
        className="grid w-full gird-cols-2 gap-10 lg:grid-cols-3 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {awards.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <CertificateCard
              title={item.title}
              company={item.company}
              subTitle={item.subTitle}
              year={item.year}
              icon={item.icon}
              type={item.type}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Awards;
