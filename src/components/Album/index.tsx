import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "motion/react";

import Gallery from "../Gallery";
import BlurText from "../../animations/Text/BlurText";
import useTheme from "../../hooks/useTheme";
import { processedAlbum as images } from "../../data";
import type { prcocessedimages } from "../../types";

gsap.registerPlugin(ScrollTrigger);

export default function Album() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const { themeClassSet: theme } = useTheme();
  const [fullScreen, setFullScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollYRef = useRef(0);


  useLayoutEffect(() => {
    if (fullScreen) {
      scrollYRef.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const y = Math.abs(parseInt(document.body.style.top || "0", 10));

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, y);

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }
  }, [fullScreen]);


  useLayoutEffect(() => {
    if (fullScreen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      ScrollTrigger.refresh();
    }
  }, [fullScreen]);
  useLayoutEffect(() => {
    if (!containerRef.current || !revealRef.current || fullScreen) return;

    if (window.innerWidth < 768) {
      revealRef.current.style.scale = "0.92";
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        revealRef.current,
        { scale: 0.92, borderRadius: 24 },
        {
          scale: 1,
          borderRadius: 24,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=120%",
            scrub: 0.2,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setShowBg(self.progress > 0.85);
            },
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [fullScreen]);

  const [bgImage, setBgImage] = useState<prcocessedimages>(images[0]);
  const [showBg, setShowBg] = useState(false);

  return (
    <section
      ref={containerRef}
      className="relative h-dvh  pt-24 px-8 md:px-40 w-full flex-col flex justify-start items-center"
      id="album"
    >
      <BlurText
        className="uppercase text-center tracking-widest"
        delay={200}
        animateBy="tags"
        direction="top"
      >
        <p className={`${theme.textPrimary}`}> Moments I chose to </p>
        <span className={`${theme.textMainAccent1} ml-3`}>freeze in time</span>
      </BlurText>
      <motion.div
        className="absolute md:w-auto w-dvw -inset-12 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage.thumb})`,
          filter: "blur(40px) brightness(0.7) saturate(1.2)",
        }}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={
          showBg ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }
        }
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div ref={revealRef} className="flex justify-center items-center">
        <div className="absolute h-dvh inset-0 pointer-events-none rounded-[24px] overflow-hidden">
          <div className="liquid-glass" />
        </div>
        {!fullScreen && (
          <motion.div
            className={`md:h-[600px] md:w-[1000px] h-[480px] w-[420px]`}
            layoutId="gallery"
          >
            <Gallery
              fullscreen={false}
              images={images}
              width={"100%"}
              setActiveIndex={setActiveIndex}
              currentIndex={activeIndex}
              height={"100%"}
              onFullScreenToggle={() => {
                scrollYRef.current = window.scrollY;
                ScrollTrigger.getAll().forEach((t) => t.kill());
                ScrollTrigger.clearScrollMemory();

                setFullScreen(true);
              }}
              onImageChange={(i) => setBgImage(images[i])}
            />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {fullScreen && (
          <motion.div
            layoutId="gallery"
            className="fixed inset-0 z-[999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background image layer */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110"
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            />

            {/* Glass blur overlay */}
            <div
              className="absolute inset-0"
              style={{
                backdropFilter: "blur(35px) brightness(0.6) saturate(1.2)",
                WebkitBackdropFilter:
                  "blur(35px) brightness(0.6) saturate(1.2)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)), rgba(0,0,0,0.45)",
              }}
            />

            <div className="relative z-10 h-dvh w-dvw flex items-center justify-center">
              <Gallery
                onImageChange={(i) => setBgImage(images[i])}
                images={images}
                fullscreen
                width="100%"
                height="100%"
                setActiveIndex={setActiveIndex}
                currentIndex={activeIndex}
                onFullScreenToggle={() => setFullScreen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
