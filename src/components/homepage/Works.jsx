import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import behnMeyer from "/src/assets/images/behnmeyer.png";
import projectH2 from "/src/assets/images/projectH2.png";
import projectH3 from "/src/assets/images/projectH3.png";
import projectH4 from "/src/assets/images/projectH4.png";
import projectH5 from "/src/assets/images/projectH5.png";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change my-[10%] overflow-hidden"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className="col-span-1 md:col-span-12">
          <Projects
            link="https://www.figma.com/design/IWnckV3NoL1t1Et5UnvSQX/Behn-Meyer-by-Gut?node-id=0-1&t=5PVVkfOnq6isJmqi-1"
            img={behnMeyer}
            alt="Behn Meyer"
            name="BmWorkflow-CRC"
            type="UX-UI Designer • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • Figma • Boostrap • php • laravel"
            style={{ width: "10px", height: "auto" }} 
          />
        </div>

        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://www.figma.com/design/1BFpS5ZNdu1hnw86YvipZc/ProjectTest?node-id=0-1&t=qrjelabHDi9a6fXZ-1"
            img={projectH2}
            alt="landing page mockup"
            name="landing page"
            type="UX-UI Designer"
            year="2024"
            tools="Figma • Mockup • Prototype"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://mhnkcraftbeer-bootstrap-landing-page.onrender.com"
            img={projectH3}
            alt="Bootstrap-Landing-Page"
            name="mhnkcraftbeer landing page "
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • bootstrap 5"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="http://103.245.166.234:3000/login"
            img={projectH4}
            alt="asangha"
            name="asangha"
            type="Frontend Development"
            year="2024"
            tools="HTML • JavaScript • TailwindCSS • NextJs "
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://portfolio-guttharada.onrender.com"
            img={projectH5}
            alt="Web Portfolio gut"
            name="Web Portfolio"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
        </div>
      </div>
    </section>
  );
}
