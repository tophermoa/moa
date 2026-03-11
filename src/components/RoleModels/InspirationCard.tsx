import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { roleModels } from "../../types";

const InspirationCard = ({ item }: { item: roleModels }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.03 }}
      className="relative h-64 md:h-80 w-full md:w-80 rounded-2xl overflow-hidden"
    >
      {/* Image */}

      <motion.img
        src={item.image}
        className={`absolute inset-0 w-full h-full object-cover ${item.name === "Peter Mckinon" ? "object-left" : "object-center"}`}
        animate={{
          scale: open ? 1.02 : 1,
          filter: open ? "blur(8px)" : "blur(0px)",
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="text-xs px-5 py-2 rounded-full
    bg-white/15 backdrop-blur-md
    border border-white/20
    text-white hover:bg-white/25
    transition-all absolute right-4 top-4 duration-300 z-10"
        >
          View
        </button>
      )}
      {/* Cinematic Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Bottom Info (hidden when open) */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-10"
          >
            <div>
              <h2 className="text-xl font-semibold text-white">{item.name}</h2>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-2">
                {item.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL Glass Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 
            bg-white/10 backdrop-blur-2xl
            flex flex-col items-center justify-center
            text-left px-10 z-20"
          >
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-sm leading-relaxed text-white/90 max-w-sm"
            >
              {item.description}
            </motion.p>

            <button
              onClick={() => setOpen(false)}
              className="mt-8 text-xs px-6 py-2 rounded-full
              bg-white/20 hover:bg-white/30
              transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InspirationCard;
