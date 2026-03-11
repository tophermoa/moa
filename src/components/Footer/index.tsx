import { FaDev, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import avatar from "../../assets/profile.png";
import { HashLink } from "react-router-hash-link";
import { manifest } from "../../routes/manifest";

function Footer() {
  return (
    <footer className="relative w-full text-gray-900 dark:text-white overflow-hidden">
      {/* Footer Background */}
      <div
        className="
      absolute inset-0 -z-10
      bg-gradient-to-b
      from-white/95 via-white/85 to-white/95
      dark:from-black/60 dark:via-black/40 dark:to-black/70
      backdrop-blur-xl
    "
      />

      {/* Top Gradient Divider */}
      <div
        className="
      absolute top-0 left-0 w-full h-px
      bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent
      dark:via-white/20
    "
      />

      {/* Fade */}
      <div
        className="
      absolute top-0 left-0 w-full h-20
      bg-gradient-to-b from-indigo-100/40 dark:from-black/40 to-transparent
      pointer-events-none
    "
      />

      <div className="mx-auto max-w-6xl px-8 md:px-6 py-16">
        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Profile */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-5">
              <img
                src={avatar}
                alt="Gokul"
                className="h-20 w-20 rounded-xl object-cover grayscale
                       bg-indigo-100/40 dark:bg-white/10"
              />

              <div>
                <h3 className="text-2xl font-mono font-semibold tracking-tight">
                  Gokul
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-white/60 max-w-sm leading-relaxed">
                  Building thoughtful digital experiences with clean code and
                  modern design.
                </p>
              </div>
            </div>

            <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-white/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              Available for freelance work
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 md:col-span-1">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white/80">
                Know Me
              </h4>
              <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-white/60">
                <HashLink to={manifest.home}>Home</HashLink>
                <HashLink to={manifest.about}>About</HashLink>
                <HashLink to={manifest.experience}>Experience</HashLink>
                <HashLink to={manifest.skills}>Skills</HashLink>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white/80">
                Canvas
              </h4>
              <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-white/60">
                <HashLink to={manifest.gallery}>Gallery</HashLink>
                <HashLink to={manifest.awards}>Awards</HashLink>
                <HashLink to={manifest.testimonials}>Testimonials</HashLink>
                <HashLink to={manifest.rolemodels}>Inspirations</HashLink>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white/80">
              Social
            </h4>

            <div className="flex gap-5 text-gray-700 dark:text-white/70">
              <a
                href="https://linkedin.com/in/gokul-c-40773a1b6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-white transition hover:-translate-y-0.5"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/gokul-369"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-white transition hover:-translate-y-0.5"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:gokul369@outlook.com"
                className="hover:text-indigo-600 dark:hover:text-white transition hover:-translate-y-0.5"
              >
                <MdOutlineMailOutline size={18} />
              </a>
              <a
                href="https://www.instagram.com/gokul__369/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-white transition hover:-translate-y-0.5"
              >
                <FaInstagram size={18} />
              </a>
            </div>

            <div className="text-sm flex flex-col gap-4 text-gray-700 dark:text-white/60">
              Latest Dev article
              <a
                href="https://dev.to/gokul369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white transition"
              >
                <FaDev size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div
          className="
        mt-16 h-px w-full
        bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent
        dark:via-white/10
      "
        />

        {/* Bottom Row */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-3">
          <span className="text-gray-500 dark:text-white/40">
            © {new Date().getFullYear()} Gokul. No rights reserved.
          </span>
          <span className="text-gray-500 dark:text-white/40">
            Made with{" "}
            <span className="text-gray-700 dark:text-white/70">
              React + TypeScript
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
