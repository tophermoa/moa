import { useState } from "react";
import BlurText from "../../animations/Text/BlurText";
import useTheme from "../../hooks/useTheme";
import { projectsData } from "../../data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "../../types";

function Projects() {
  const { themeClassSet: theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-8 flex flex-col lg:px-40 w-full relative z-10">
      <BlurText
        className="uppercase text-center tracking-widest text-xs font-semibold mb-2"
        delay={200}
        animateBy="tags"
        direction="top"
      >
        <span className="text-gray-400">PROJECTS</span>
      </BlurText>

      <BlurText
        className="uppercase text-center tracking-widest text-xl md:text-2xl font-bold"
        delay={400}
        animateBy="tags"
        direction="top"
      >
        <p className={`text-center inline ${theme.textPrimary}`}>
          PROJECTS
        </p>
        <span className={`${theme.textMainAccent1} ml-3`}>I'VE BUILT</span>
      </BlurText>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}

export default Projects;
