import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Project } from "../../types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when modal opens for a new project
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const goToNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project) return;
    setCurrentIndex((prev) => (prev + 1) % project.galleryImages.length);
  }, [project]);

  const goToPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project) return;
    setCurrentIndex((prev) => (prev === 0 ? project.galleryImages.length - 1 : prev - 1));
  }, [project]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
          data-lenis-prevent="true"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition backdrop-blur-sm"
              aria-label="Close modal"
            >
              <FaTimes size={18} />
            </button>

            {/* Carousel Section (Top Half) */}
            <div className="relative w-full h-[40vh] sm:h-[50vh] flex-shrink-0 bg-black overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={project.galleryImages[currentIndex]}
                  alt={`${project.title} screenshot ${currentIndex + 1}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white/50 hover:text-white transition backdrop-blur-sm opacity-0 group-hover:opacity-100"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white/50 hover:text-white transition backdrop-blur-sm opacity-0 group-hover:opacity-100"
              >
                <FaChevronRight size={20} />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {project.galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Content Section (Bottom Half) */}
            <div className="p-6 sm:p-8 flex flex-col gap-6 overflow-y-auto flex-1 min-h-0" data-lenis-prevent="true">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${tech.colorClass} bg-opacity-10 border border-current border-opacity-20`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
                <br /><br />
                This project focuses on delivering a seamless user experience while maintaining robust architecture. Built securely and styled delicately, it's designed to solve real-world scale and performance bottlenecks efficiently.
              </p>

              <div className="mt-auto pt-4 border-t border-white/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent modal issues when clicking link
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition group/btn"
                >
                  <FaGithub size={18} className="text-white/80 group-hover/btn:text-white transition" />
                  View Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
