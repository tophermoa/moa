import { FaGithub } from "react-icons/fa";
import type { Project } from "../../types";

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden group hover:border-white/20 transition duration-300 cursor-pointer text-left"
    >
      {/* Image Container */}
      <div className="h-48 w-full overflow-hidden bg-[#0A0A0A] p-4 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-500 ease-out"
        />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none opacity-80" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs font-medium rounded-full ${tech.colorClass} bg-opacity-10 border border-current border-opacity-20`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/10 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition group/btn"
        >
          <FaGithub size={16} className="text-white/60 group-hover/btn:text-white transition" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
