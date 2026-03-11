import MovingGradient from "../../components/Backgrounds/MovingGradient";
import Testimonials from "../../components/Testimonials";
import Awards from "../../components/Awards";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Skills from "../../components/Skills";
import useNavigateTop from "../../hooks/useNavigateToTop";

function Experience() {
  useNavigateTop();

  return (
    <section className={`relative overflow-auto`}>
      <MovingGradient />
      <WorkExperience />
      <Testimonials />
      <Awards />
      <Skills />
    </section>
  );
}

export default Experience;
