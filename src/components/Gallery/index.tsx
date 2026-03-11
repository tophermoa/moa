import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import cx from "clsx";
import styles from "./gallery.module.css";
import { FiMaximize, FiMinimize } from "react-icons/fi";
import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";
import type { prcocessedimages } from "../../types";

if (!CustomEase.get("hop")) {
  CustomEase.create(
    "hop",
    "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1",
  );
}

// Album.tsx

function Gallery({
  height = "100%",
  width = "100%",
  images,
  fullscreen = false,
  onFullScreenToggle,
  className,
  onImageChange = () => {},
  setActiveIndex,
  currentIndex,
}: {
  height?: number | string;
  width?: number | string;
  images: prcocessedimages[];
  fullscreen?: boolean;
  onFullScreenToggle: () => void;
  className?: string;
  onImageChange?: (i: number) => void;
  setActiveIndex: (i: number) => void;
  currentIndex: number;
}) {
  const totalImages = images.length;

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const indicatorsRef = useRef<HTMLDivElement | null>(null);
  const sliderPreviewRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const hideTimeout = useRef<number | null>(null);
  const captionRef = useRef<HTMLDivElement | null>(null);
  const [loadedSet, setLoadedSet] = useState<Set<number>>(
    () => new Set([currentIndex]),
  );

  const prevIndexRef = useRef(0);
  useLayoutEffect(() => {
    prevIndexRef.current = currentIndex;

    if (!sliderRef.current) return;

    const ctx = gsap.context(() => {
      const width = sliderRef.current!.clientWidth;

      slidesRef.current.forEach((slide, i) => {
        gsap.set(slide, {
          x: i === currentIndex ? 0 : i < currentIndex ? -width : width,
        });
      });

      animateCounterAndTitle(currentIndex);
    }, sliderRef);

    return () => ctx.revert();
  }, [fullscreen]);

  const animateCounterAndTitle = (index: number) => {
    if (!counterRef.current || !titleRef.current) return;

    gsap.killTweensOf([counterRef.current, titleRef.current]);

    // Counter stays same
    gsap.to(counterRef.current, {
      y: -20 * index,
      duration: 0.8,
      ease: "hop",
    });

    const title = titleRef.current;

    gsap
      .timeline()
      .set(title, { opacity: 0, x: 0 })
      .to(title, {
        y: -60 * index,
        opacity: 1,
        duration: 0.6,
        ease: "hop",
        filter: "blur(0px)",
      })
      .to(title, {
        opacity: 0,
        x: -80,
        filter: "blur(6px)",
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      });
  };

  const animateSlides = (from: number, to: number) => {
    if (from === to) return;

    const direction: "left" | "right" = to > from ? "right" : "left";
    const currentSlide = slidesRef.current[from];
    const nextSlide = slidesRef.current[to];
    if (!currentSlide || !nextSlide || !sliderRef.current) return;

    const distance = sliderRef.current.clientWidth;

    gsap.killTweensOf([currentSlide, nextSlide]);

    gsap.set(nextSlide, {
      x: direction === "left" ? -distance : distance,
    });

    gsap.to(currentSlide, {
      x: direction === "left" ? distance : -distance,
      duration: 1.1,
      ease: "power4.out",
    });

    gsap.to(nextSlide, {
      x: 0,
      duration: 1.1,
      ease: "power4.out",
    });
  };

  const scrollPreviewToIndex = (index: number) => {
    if (!sliderPreviewRef.current) return;

    const container = sliderPreviewRef.current;
    const item = container.children[index] as HTMLElement;

    if (!item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const currentScroll = container.scrollLeft;

    const target =
      currentScroll +
      (itemRect.left - containerRect.left) -
      containerRect.width / 2 +
      itemRect.width / 2;

    gsap.to(container, {
      scrollLeft: target,
      duration: 0.8,
      ease: "power4.out",
    });
  };

  const revealPreview = () => {
    setShowPreview(true);

    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    hideTimeout.current = window.setTimeout(() => {
      setShowPreview(false);
    }, 1500);
  };

  const goToIndex = (nextIndex: number) => {
    const prevIndex = prevIndexRef.current;
    if (nextIndex === prevIndex) return;
    nextIndex > prevIndex ? "right" : "left";

    animateSlides(prevIndex, nextIndex);
    animateCounterAndTitle(nextIndex);

    prevIndexRef.current = nextIndex;
    // setCurrentIndex(nextIndex);
    setActiveIndex(nextIndex);
    onImageChange?.(nextIndex);
    scrollPreviewToIndex(nextIndex);
    revealPreview();
  };

  const handlePreviewClick = (index: number) => goToIndex(index);

  const handlePrevClick = () =>
    goToIndex(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);

  const handleNextClick = () =>
    goToIndex(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);

  const controlsCSS = `w-11 h-11 
            rounded-full 
            flex items-center justify-center 
            text-white text-xl 
            dark:bg-white/10
            bg-slate-900/30
            backdrop-blur-md 
            dark:border border-white/20 
            shadow-lg 
            dark:hover:bg-white/20 
            hover:scale-110 
            active:scale-95 
            transition-all duration-200 ease-out
            cursor-pointer
            `;

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const threshold = rect.bottom - 80;
      setShowPreview(e.clientY > threshold);
    };

    el.addEventListener("mousemove", handler);
    el.addEventListener("mouseleave", () => setShowPreview(false));

    return () => {
      el.removeEventListener("mousemove", handler);
    };
  }, []);

  useEffect(() => {
    const preload = (i: number) => {
      if (i < 0 || i >= totalImages) return;
      setLoadedSet((prev) => new Set(prev).add(i));
    };

    preload(currentIndex);
    preload(currentIndex + 1);
    preload(currentIndex + 2);
    preload(currentIndex - 1);
  }, [currentIndex, totalImages]);

  useEffect(() => {
    if (!fullscreen) return;

    const img = new Image();
    img.src = images[currentIndex].full;
  }, [fullscreen, currentIndex]);

  return (
    <div
      className={cx(
        "relative md:mx-auto transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
        fullscreen
          ? `fixed inset-0 w-dvw h-dvh ${styles.safearea}`
          : width || height
            ? ""
            : "w-[94vw] max-w-[1200px] aspect-[16/9] max-h-[80vh]",
        className,
      )}
      style={
        !fullscreen && (width || height)
          ? {
              width: width ?? "auto",
              height: height ?? "auto",
            }
          : undefined
      }
    >
      <div
        className={cx(styles.slider, {
          [styles.fullscreen]: fullscreen,
        })}
        style={{
          borderRadius: fullscreen ? 0 : 24,
          height: fullscreen ? "100dvh" : "100%",
        }}
        ref={sliderRef}
      >
        {images[currentIndex].orientation !== "portrait" && (
          <div
            className={cx(
              styles.vignette,
              showPreview && styles.vignetteVisible,
            )}
          />
        )}

        <div
          className={cx(styles.captionPanel, styles.previewHidden, {
            [styles.previewVisible]: showPreview,
          })}
          ref={captionRef}
        >
          <h3>{images[currentIndex].title}</h3>
          <p>{images[currentIndex].description}</p>
        </div>
        <div className={styles.sliderimages}>
          <div className={styles.sliderimages}>
            {images.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  slidesRef.current[index] = el!;
                }}
                className={cx(styles.img, {
                  ["flex items-center justify-center"]:
                    item.orientation === "portrait",
                })}
              >
                <img
                  alt={item.title}
                  src={
                    loadedSet.has(index)
                      ? fullscreen
                        ? item.full
                        : item.medium
                      : undefined
                  }
                  loading={index === currentIndex ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === currentIndex ? "high" : "low"}
                  style={{
                    width: item.orientation === "portrait" ? "auto" : "100%",
                    borderRadius:
                      item.orientation === "portrait" && !fullscreen ? 20 : 0,
                    objectFit:
                      item.orientation === "portrait" ? "contain" : "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={cx(styles.slidertitle)}>
          <div className={cx(styles.slidertitlewrapper)} ref={titleRef}>
            {images.map((item, index) => (
              <p key={index}>{item.title}</p>
            ))}
          </div>
        </div>

        <div className={styles.slidercounter}>
          <div ref={counterRef} className={styles.counter}>
            {images.map((_, index) => (
              <p key={index}>{index + 1}</p>
            ))}
          </div>
          <p>&mdash;</p>
          <p>{totalImages}</p>
        </div>

        <div
          ref={sliderPreviewRef}
          className={cx(
            styles.sliderpreview,
            showPreview ? styles.previewVisible : styles.previewHidden,
          )}
        >
          {images.map((item, index) => (
            <div
              key={index}
              onClick={() => handlePreviewClick(index)}
              className={cx(
                styles.preview,
                index === currentIndex && styles.active,
              )}
            >
              <img
                src={item.thumb}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          ))}
        </div>

        <div ref={indicatorsRef} className={styles.sliderindicators}>
          <div onClick={handlePrevClick} className={controlsCSS}>
            <IoChevronBack />
          </div>
          <div onClick={handleNextClick} className={controlsCSS}>
            <IoChevronForwardOutline />
          </div>
        </div>
      </div>
      <button
        className={`absolute top-[1em] right-[1em] z-50 px-3 py-1 ${controlsCSS}`}
        onClick={(e) => {
          e.preventDefault();
          onFullScreenToggle();
        }}
      >
        {fullscreen ? <FiMinimize /> : <FiMaximize />}
      </button>
    </div>
  );
}

export default Gallery;
