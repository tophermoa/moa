import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useNavigateTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Always reset to top
    window.scrollTo(0, 0);

    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh();

    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "instant" });
      });
    }
  }, [pathname, hash]);
}
