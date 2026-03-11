import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useRef } from "react";

function ScrollingRow({
  children,
  direction = "left",
  speed = 25,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const startAnimation = () => {
      const width = element.scrollWidth / 2;
      if (!width) return;

      const from = direction === "left" ? 0 : -width;
      const to = direction === "left" ? -width : 0;

      x.set(from);

      controls.current?.stop();

      controls.current = animate(x, [from, to], {
        ease: "linear",
        duration: speed,
        repeat: Infinity,
      });
    };

    startAnimation();

    const resizeObserver = new ResizeObserver(() => {
      startAnimation();
    });

    resizeObserver.observe(element);

    return () => {
      controls.current?.stop();
      resizeObserver.disconnect();
    };
  }, [direction, speed]);

  return (
    <div className="relative py-4 w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-6"
        style={{
          x,
          width: "max-content",
          willChange: "transform",
        }}
        onMouseEnter={() => controls.current?.pause()}
        onMouseLeave={() => controls.current?.play()}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default ScrollingRow;
