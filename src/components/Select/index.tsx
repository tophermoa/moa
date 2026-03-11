import { useState, useRef, useEffect } from "react";
import { HiCheck } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";

const options = ["Startup MVP", "SaaS Platform", "Portfolio", "Redesign"];

export default function CustomSelect({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between
                   bg-white/5 border border-white/10
                   rounded-xl px-4 py-3
                   hover:bg-white/10
                   focus:outline-none focus:border-white/30
                   transition-all duration-200"
      >
        <span className={selected ? "text-white" : "text-white/50"}>
          {selected || "What are we building?"}
        </span>

        <IoChevronDownOutline
          size={18}
          className={`text-white/60 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-0 mt-2 w-full
                    rounded-xl border border-white/10
                    bg-neutral-900/95 backdrop-blur-xl
                    shadow-2xl overflow-hidden
                    transform transition-all duration-200 origin-top
                    ${
                      open
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
      >
        {options.map((option) => {
          const isActive = selected === option;

          return (
            <div
              key={option}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className="flex items-center justify-between
                         px-4 py-3 cursor-pointer
                         text-white/80 hover:text-white
                         hover:bg-white/10
                         transition"
            >
              <span>{option}</span>

              {isActive && <HiCheck size={16} className="text-white/70" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
