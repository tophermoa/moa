import { motion } from "motion/react";

export function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-5"
      >
        <div className="relative w-14 h-14">
          <motion.div
            className="absolute inset-0 rounded-full border border-white/20"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border border-white/60 border-t-transparent"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        </div>

        <p className="text-white/70 tracking-widest uppercase text-xs">
          Loading Experience
        </p>
      </motion.div>
    </div>
  );
}
