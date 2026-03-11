import { CiPen } from "react-icons/ci";
import { spotlight, type ThemeClassSet } from "../../types";
import SpotlightCard from "../SpotLightCard";
import { MdArrowRightAlt } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineBriefcase, HiOutlineSparkles } from "react-icons/hi";
import { HiOutlineCommandLine, HiOutlineRocketLaunch } from "react-icons/hi2";
import { HashLink } from "react-router-hash-link";
import { FiAward } from "react-icons/fi";
import { useAppContext } from "../../context/AppContext";
import { manifest } from "../../routes/manifest";

function Dashboard({ theme }: { theme: ThemeClassSet }) {
  const { openCollaborate } = useAppContext();

  return (
    <section
      className={`h-full w-full flex px-8 lg:px-40 py-8 ${theme.bgPrimary}`}
    >
      <div className="grid mt-20 justify-center md:grid-cols-3 grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full lg:col-span-1 row-span-2 lg:row-span-1 col-span-2 dark:bg-white/[0.02]  justify-between flex flex-col
           bg-gradient-to-br from-indigo-50 via-white/50 to-indigo-100 dark:bg-none
            "
            spotlightColor={spotlight.ARTICLE}
          >
            <div>
              <h2
                className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-indigo-500/80
          group-hover:text-indigo-500/90
          "
              >
                Thoughts & Writings
              </h2>
              <p className="lg:text-sm text-xs dark:text-white text-gray-900 mt-4">
                Thoughts shaped by code, curiosity, and continuous learning.
              </p>
            </div>
            <a
              href={"https://dev.to/gokul369"}
              className={`text-indigo-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link`}
            >
              Read my thoughts{" "}
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0 " />
            </a>
            <CiPen
              className={`h-24 w-24 dark:text-white/5  absolute -right-3 -bottom-3 text-indigo-500/25
              group-hover:text-indigo-500/25 transition
              `}
            />
          </SpotlightCard>
        </div>
        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1  ">
          <SpotlightCard
            className="h-full justify-between col-span-2 row-span-2 lg:row-span-1 lg:col-span-1 flex flex-col dark:bg-white/[0.02] dark:bg-none
            bg-gradient-to-br from-blue-50 via-white/50 to-blue-100"
            spotlightColor={spotlight.TESTIMONIALS}
          >
            <div>
              <h2
                className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-blue-500/80
                    group-hover:text-blue-500/90
          "
              >
                Hear what people say about me
              </h2>
              <p className="mt-4 lg:text-sm text-xs dark:text-white text-gray-900">
                Real feedback from people I’ve built, learned, and grown with.
              </p>
            </div>
            <HashLink
              to={manifest.testimonials}
              smooth
              className={`text-blue-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link`}
            >
              Check out testimonials
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0 " />
            </HashLink>
            <RiDoubleQuotesL
              className={`h-24 w-24 absolute -bottom-3 right-3 text-blue-500/25 dark:text-white/5 group-hover:text-blue-500/25 transition`}
            />
          </SpotlightCard>
        </div>
        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] 
            bg-gradient-to-br from-amber-50 via-white/50 to-amber-100
            dark:bg-none justify-between flex flex-col"
            spotlightColor={spotlight.PHOTOGRAPHY}
          >
            <div>
              <h2
                className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-amber-500/80
                    group-hover:text-amber-500/90
          "
              >
                World through my lens
              </h2>
              <p className="lg:text-sm mt-4 text-xs max-w-64 dark:text-white text-gray-900">
                Moments, moods, and stories I choose to freeze in time. And yet
                at some times I just don't click
              </p>
            </div>
            <HashLink
              to={manifest.gallery}
              smooth
              className={`text-amber-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link`}
            >
              View my photo grid
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0 " />
            </HashLink>
            <IoCameraOutline
              className={`h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-amber-500/25 group-hover:text-amber-500/25 transition`}
            />
          </SpotlightCard>
        </div>

        <div className="col-span-2 row-span-2">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] 
            bg-gradient-to-br from-sky-50 via-white/50 to-sky-100 dark:bg-none justify-between  flex flex-col"
            spotlightColor={spotlight.EXPERIENCE}
          >
            <div>
              <h2
                className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-sky-500/80
                    group-hover:text-sky-500/90
          "
              >
                My Journey in tech
              </h2>
              <p className="pt-4 lg:text-sm text-xs dark:text-white text-gray-900 max-w-lg">
                From curiosity to craft and one step, one lesson, one
                breakthrough at a time. Check out my experience in the world of
                tech
              </p>
            </div>
            <HashLink
              to={manifest.experience}
              smooth
              className={`text-sky-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link`}
            >
              View my work experience
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0 " />
            </HashLink>
            <HiOutlineBriefcase
              className={`h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-sky-500/25 group-hover:text-sky-500/25 transition`}
            />
          </SpotlightCard>
        </div>

        <div className="lg:row-span-2 row-span-2 col-span-2 lg:col-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] bg-gradient-to-br from-sky-50 via-white/50 to-sky-100 dark:bg-none justify-between  flex flex-col"
            spotlightColor={spotlight.WORKS}
          >
            <div>
              <h2
                className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-cyan-500/80
                    group-hover:text-cyan-500/90"
              >
                Tools, Tech & Things I Build
              </h2>
              <p className="lg:text-sm text-xs  mt-4 dark:text-white text-gray-900">
                Where ideas meet implementation, and curiosity turns into craft,
                shaping thoughtful, performant, and human-centered digital
                experiences, powered by the tools and technologies I love.
              </p>
            </div>
            <HashLink
              to={manifest.skills}
              smooth
              className={`text-cyan-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link`}
            >
              View my tech stack
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0 " />
            </HashLink>
            <HiOutlineCommandLine
              className={`h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-cyan-500/25 group-hover:text-cyan-500/25 transition`}
            />
          </SpotlightCard>
        </div>

        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] bg-gradient-to-br from-yellow-50 via-white/50 to-yellow-100 justify-between
            dark:bg-none
            flex flex-col"
            spotlightColor={spotlight.COLLABORATE}
          >
            <div>
              <h2
                className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-yellow-500/80
                    group-hover:text-yellow-500/90
          "
              >
                Let's Collaborate
              </h2>
              <p className="lg:text-sm text-xs  mt-4 dark:text-white text-gray-900">
                Have a project in mind, a problem to solve, or an idea to
                explore? Let’s connect and build something impactful.
              </p>
            </div>
            <span
              className={`text-yellow-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link`}
              onClick={openCollaborate}
            >
              Get in touch
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0 " />
            </span>
            <HiOutlineRocketLaunch
              className={`h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-yellow-500/25 group-hover:text-yellow-500/25 transition`}
            />
          </SpotlightCard>
        </div>

        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] 
            bg-gradient-to-br from-slate-50 via-white/50 to-slate-100
            dark:bg-none justify-between  flex flex-col"
            spotlightColor={spotlight.AWARDS}
          >
            <div>
              <h2
                className="lg:text-lg text-base font-semibold tracking-tight mb-2 dark:text-white/80 text-gray-800
                    group-hover:text-white-500/90
          "
              >
                Achievements & Milestones
              </h2>
              <p className="lg:text-sm text-xs  mt-4 dark:text-white text-slate-900">
                Moments of recognition that mark my growth, discipline, and
                pursuit of excellence.
              </p>
            </div>
            <HashLink
              to={manifest.awards}
              className={`dark:text-white/60 text-gray-800 inline-flex text-xs text-left animated-links items-center mt-4 underline link`}
              smooth
            >
              View my award gallery
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0 " />
            </HashLink>
            <FiAward
              className={`h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-gray-800/60 dark:group-hover:text-white/25 transition`}
            />
          </SpotlightCard>
        </div>

        <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
          <SpotlightCard
            className="h-full dark:bg-white/[0.02] bg-gradient-to-br from-green-50 via-white/50 to-green-100 dark:bg-none justify-between  flex flex-col"
            spotlightColor={spotlight.INSPIRATIONS}
          >
            <div>
              <h2
                className="lg:text-lg text-base font-semibold tracking-tight mb-2 text-green-500/80
                    group-hover:text-green-500/90
          "
              >
                People I look up to
              </h2>
              <p className="lg:text-sm mt-4 text-xs dark:text-white text-gray-900 max-w-lg">
                The minds and mentalities that forged my discipline, resilience,
                ambition, and uncompromising standards for growth.
              </p>
            </div>
            <HashLink
              to={manifest.rolemodels}
              className={`text-green-500/60 inline-flex text-xs text-left animated-links items-center mt-4 underline link`}
            >
              These are the people I look up to
              <MdArrowRightAlt className="w-7 arrow text-2xl flex items-center font-extralight transition m-0 " />
            </HashLink>
            <HiOutlineSparkles
              className={`h-24 w-24 absolute bottom-1 right-3 dark:text-white/5 text-green-500/25 group-hover:text-green-500/25 transition`}
            />
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
