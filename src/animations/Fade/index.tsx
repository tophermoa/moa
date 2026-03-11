import { useEffect, useState } from "react";

function Fade({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "fade-down" | "fade-up" | "fade-left" | "fade-right";
  delay?: number;
  className?: string;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const variantClasses = {
    "fade-down": `${ready ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`,
    "fade-up": `${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`,
    "fade-left": `${ready ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`,
    "fade-right": `${ready ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`,
  };
  return (
    <div
      className={`transition-all duration-1000 ease-out delay-${delay} ${
        variantClasses[variant] || variantClasses["fade-up"]
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Fade;
