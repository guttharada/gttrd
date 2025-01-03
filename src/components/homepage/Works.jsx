import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

import behnMeyer from "/src/assets/images/project/behnmeyer.png";
import melodyoflife from "/src/assets/images/project/melodyoflife.png";
import chulahrm from "/src/assets/images/project/chulahrm.png";
import bookticket from "/src/assets/images/project/bookticket.png";
import bkp from "/src/assets/images/project/bkp.png";
import chulauob from "/src/assets/images/project/chulauob.png";

import projectH2 from "/src/assets/images/projectH2.png";
import projectH3 from "/src/assets/images/projectH3.png";
import projectH4 from "/src/assets/images/projectH4.png";
import projectH5 from "/src/assets/images/projectH5.png";
import spicydisc from "/src/assets/images/spicydisc.png";
import hrmchula from "/src/assets/images/hrmchula.png";

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
        {/* <div className="col-span-1 md:col-span-12">
          <Projects
            link="https://www.figma.com/design/IWnckV3NoL1t1Et5UnvSQX/Behn-Meyer-by-Gut?node-id=0-1&t=5PVVkfOnq6isJmqi-1"
            img={behnMeyer}
            alt="Behn Meyer"
            name="BmWorkflow-CRC"
            type="UX-UI Designer • Frontend Development"
            year="May-July 2024 "
            tools="HTML • CSS • JavaScript • Figma • Boostrap • php • laravel"
            style={{ width: "10px", height: "auto" }}
          />
        </div> */}
        {/* alt="landing page mockup"
            name="HRM | Chulalongkorn University"
            type="UX-UI Designer"
            year="2024"
            tools="Figma • Mockup • Prototype" */}

        {/* Project #1 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link=""
            img={behnMeyer}
            alt="Behn Meyer"
            name="BmWorkflow-CRC"
            type="UX-UI Designer • Frontend Development"
            year="May-July 2024 "
            tools="HTML • CSS • JavaScript • Figma • Boostrap • php • laravel"
            style={{ width: "10px", height: "auto" }}
          />
        </div>

        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link=""
            img={melodyoflife}
            alt="Bootstrap-Landing-Page"
            name="Melody of life | Parallax"
            type="Web Design • Frontend Development"
            year="Sep 2024"
            tools="Figma • HTML • CSS • JavaScript • gsap"
          />
        </div>

        {/* Project #3 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-0">
          <Projects
            link=""
            img={chulahrm}
            alt="landing page mockup"
            name="HRM | Chulalongkorn University"
            type="UX-UI Designer"
            year="2024"
            tools="Figma • Mockup • Prototype"
          />
        </div>

        {/* Project #4 */}
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link=""
            img={bookticket}
            alt="Ticket Booking"
            name="Ticket Booking"
            type="Web Design • UX-UI Designer"
            year="Nov 2024"
            tools="Figma • Mockup • Prototype"
          />
        </div>

        {/* Project #5 */}
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-5">
          <Projects
            link=""
            img={bkp}
            alt="bkp"
            name="Bangkok Post"
            type="UX-UI Designer • Frontend Developer"
            year="2024"
            tools="Figma • Prototype • HTML • CSS • JavaScript • php • laravel"
          />
        </div>

        {/* Project #6 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-60">
          <Projects
            link=""
            img={chulauob}
            alt="chulauob"
            name="CHULA-UOB"
            type="Frontend • UX-UI Designer"
            year="Nov 2024"
            tools="Figma • Mockup • Prototype • .net  • html • CSS • JavaScript"
          />
        </div>
      </div>
    </section>
  );
}
