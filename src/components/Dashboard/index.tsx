import { CiPen } from "react-icons/ci";
import { spotlight, type ThemeClassSet } from "../../types";
import SpotlightCard from "../SpotLightCard";
import { MdArrowRightAlt } from "react-icons/md";
import { HiOutlineBriefcase, HiOutlineSparkles } from "react-icons/hi";
import { HiOutlineCommandLine, HiOutlineRocketLaunch, HiOutlineFolderOpen, HiOutlineWrenchScrewdriver, HiOutlineStar } from "react-icons/hi2";
import { HashLink } from "react-router-hash-link";
// import { useAppContext } from "../../context/AppContext";
import { manifest } from "../../routes/manifest";

function Dashboard({ theme }: { theme: ThemeClassSet }) {
  // const { openCollaborate } = useAppContext();

  return (
    <section
      className={`h-full w-full flex px-8 lg:px-40 py-8 ${theme.bgPrimary}`}
    >
      <div className="grid mt-20 justify-center md:grid-cols-3 grid-cols-2 gap-4">
        
        {/* Card 1: Thoughts */}
        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full lg:col-span-1 row-span-2 lg:row-span-1 col-span-2 dark:bg-white/[0.02] justify-between flex flex-col bg-gradient-to-br from-indigo-50 via-white/50 to-indigo-100 dark:bg-none"
            spotlightColor={spotlight.ARTICLE}
          >
            <div>
              <h2 className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-indigo-500/80 group-hover:text-indigo-500/90">
                Thoughts on Front-End & Learning Systems
              </h2>
              <p className="lg:text-sm text-xs dark:text-white text-gray-900 mt-4">
                Exploring ideas around front-end architecture, interactive learning, and building scalable digital experiences. I write about what I build, what I break, and what I learn along the way.
              </p>
            </div>
            <CiPen className="h-24 w-24 dark:text-white/5 absolute -right-3 -bottom-3 text-indigo-500/25 group-hover:text-indigo-500/25 transition" />
          </SpotlightCard>
        </div>

        {/* Card 2: What I Do Best */}
        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full justify-between col-span-2 row-span-2 lg:row-span-1 lg:col-span-1 flex flex-col dark:bg-white/[0.02] dark:bg-none bg-gradient-to-br from-blue-50 via-white/50 to-blue-100"
            spotlightColor={spotlight.TESTIMONIALS}
          >
            <div>
              <h2 className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-blue-500/80 group-hover:text-blue-500/90">
                What I Do Best
              </h2>
              <p className="mt-4 lg:text-sm text-xs dark:text-white text-gray-900">
                Building interactive, user-focused web applications with a strong emphasis on performance, scalability, and learning experience design—especially in SCORM-based systems.
              </p>
            </div>
            <HiOutlineStar className="h-24 w-24 absolute -bottom-3 right-3 text-blue-500/25 dark:text-white/5 group-hover:text-blue-500/25 transition" />
          </SpotlightCard>
        </div>

        {/* Card 5: Selected Projects */}
        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] bg-gradient-to-br from-amber-50 via-white/50 to-amber-100 dark:bg-none justify-between flex flex-col"
            spotlightColor={spotlight.PHOTOGRAPHY}
          >
            <div>
              <h2 className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-amber-500/80 group-hover:text-amber-500/90">
                Selected Projects
              </h2>
              <p className="lg:text-sm mt-4 text-xs dark:text-white text-gray-900">
                A showcase of real-world projects including e-learning platforms, SCORM integrations, and interactive learning modules I’ve developed and maintained.
              </p>
            </div>
            <HashLink
              to={manifest.gallery}
              smooth
              className="text-amber-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link"
            >
              View selected projects
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0" />
            </HashLink>
            <HiOutlineFolderOpen className="h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-amber-500/25 group-hover:text-amber-500/25 transition" />
          </SpotlightCard>
        </div>

        {/* Card 3: My Journey */}
        <div className="col-span-2 row-span-2">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] bg-gradient-to-br from-sky-50 via-white/50 to-sky-100 dark:bg-none justify-between flex flex-col"
            spotlightColor={spotlight.EXPERIENCE}
          >
            <div>
              <h2 className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-sky-500/80 group-hover:text-sky-500/90">
                My Journey in Front-End Development
              </h2>
              <p className="pt-4 lg:text-sm text-xs dark:text-white text-gray-900 max-w-lg">
                From curiosity to building production-ready e-learning platforms. I’ve spent years crafting interactive content, integrating SCORM with LMS, and improving system performance.
              </p>
            </div>
            <HashLink
              to={manifest.experience}
              smooth
              className="text-sky-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link"
            >
              View my work experience
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0" />
            </HashLink>
            <HiOutlineBriefcase className="h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-sky-500/25 group-hover:text-sky-500/25 transition" />
          </SpotlightCard>
        </div>

        {/* Card 4: Tech Stack */}
        <div className="lg:row-span-2 row-span-2 col-span-2 lg:col-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] bg-gradient-to-br from-cyan-50 via-white/50 to-cyan-100 dark:bg-none justify-between flex flex-col"
            spotlightColor={spotlight.WORKS}
          >
            <div>
              <h2 className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-cyan-500/80 group-hover:text-cyan-500/90">
                Tech Stack & Capabilities
              </h2>
              <p className="lg:text-sm text-xs mt-4 dark:text-white text-gray-900">
                React, SCORM integration, REST APIs, Auth0, and modern front-end tools I use to build scalable, secure, and high-performance web applications.
              </p>
            </div>
            <HashLink
              to={manifest.skills}
              smooth
              className="text-cyan-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link"
            >
              View my tech stack
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0" />
            </HashLink>
            <HiOutlineCommandLine className="h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-cyan-500/25 group-hover:text-cyan-500/25 transition" />
          </SpotlightCard>
        </div>

        {/* Card 6: How I Build Software */}
        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] bg-gradient-to-br from-slate-50 via-white/50 to-slate-100 dark:bg-none justify-between flex flex-col"
            spotlightColor={spotlight.AWARDS}
          >
            <div>
              <h2 className="lg:text-lg text-base font-semibold tracking-tight mb-2 dark:text-white/80 text-gray-800 group-hover:text-gray-800/90">
                How I Build Software
              </h2>
              <p className="lg:text-sm text-xs mt-4 dark:text-white text-slate-900">
                I focus on writing maintainable code, testing for vulnerabilities (OWASP ZAP), and ensuring performance optimization across interactive and streaming-based systems.
              </p>
            </div>
            <HiOutlineWrenchScrewdriver className="h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-gray-800/60 dark:group-hover:text-white/25 transition" />
          </SpotlightCard>
        </div>

        {/* Card 7: Let's Collaborate */}
        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] bg-gradient-to-br from-yellow-50 via-white/50 to-yellow-100 justify-between dark:bg-none flex flex-col"
            spotlightColor={spotlight.COLLABORATE}
          >
            <div>
              <h2 className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-yellow-500/80 group-hover:text-yellow-500/90">
                Let’s Build Something Impactful
              </h2>
              <p className="lg:text-sm text-xs mt-4 dark:text-white text-gray-900">
                Have an idea, project, or problem to solve? I’m open to collaborating on meaningful digital products—especially in education and interactive systems.
              </p>
            </div>
            <a
              href="mailto:moachristover@gmail.com"
              className="text-yellow-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link cursor-pointer"
            >
              Get in touch
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0" />
            </a>
            <HiOutlineRocketLaunch className="h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-yellow-500/25 group-hover:text-yellow-500/25 transition" />
          </SpotlightCard>
        </div>

        {/* Card 8: Influences */}
        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] bg-gradient-to-br from-green-50 via-white/50 to-green-100 dark:bg-none justify-between flex flex-col"
            spotlightColor={spotlight.INSPIRATIONS}
          >
            <div>
              <h2 className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-green-500/80 group-hover:text-green-500/90">
                Influences & Inspirations
              </h2>
              <p className="lg:text-sm mt-4 text-xs dark:text-white text-gray-900 max-w-lg">
                People, ideas, and philosophies that influence how I approach problem-solving, collaboration, and building meaningful digital products.
              </p>
            </div>
            <HashLink
              to={manifest.rolemodels}
              className="text-green-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link"
            >
              These are the people I look up to
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0" />
            </HashLink>
            <HiOutlineSparkles className="h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-green-500/25 group-hover:text-green-500/25 transition" />
          </SpotlightCard>
        </div>
        
      </div>
    </section>
  );
}

export default Dashboard;
