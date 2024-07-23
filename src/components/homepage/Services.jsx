import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Web Design",
    "Wireframing",
    "User interfaces",
    "User experiences",
  ];

  const toolBoxItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "TailwindCSS",
    "ReactJS",
    "NextJS",
    "Figma",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I specialize in all aspects of design and web development, focusing on crafting exceptional UI and UX. My goal is to deliver impactful and elevating digital experiences for everyone through my services."
          items={expertiseItems}
        />
        <ServiceUi
          title="my go to tech-stack"
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
