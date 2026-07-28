import figmaIcon from "../assets/icons/figmaIcon.svg";
import jsIcon from "../assets/icons/jsIcon.svg";
import nodeIcon from "../assets/icons/nodeIcon.svg";
import reactIcon from "../assets/icons/reactIcon.svg";
import reduxIcon from "../assets/icons/reduxIcon.svg";
import vscodeIcon from "../assets/icons/vscodeIcon.svg";

const leftSkills = [
  {
    name: "JAVASCRIPT",
    icon: jsIcon,
  },
  {
    name: "REACT",
    icon: reactIcon,
  },
  {
    name: "REDUX",
    icon: reduxIcon,
  },
];

const rightSkills = [
  {
    name: "NODE",
    icon: nodeIcon,
  },
  {
    name: "VS CODE",
    icon: vscodeIcon,
  },
  {
    name: "FIGMA",
    icon: figmaIcon,
  },
];

const Skills = () => {
  return (
    <section className="pt-20">
      <div className="container flex items-start">
        <h2 className="w-[170px] shrink-0 text-5xl font-bold leading-none tracking-[0.01em] text-[var(--color-primary)]">
          Skills
        </h2>

        <div className="-mt-4 ml-10 flex gap-20">
          <div className="flex flex-col gap-[35px]">
            {leftSkills.map((card) => (
              <div key={card.name} className="flex items-center gap-6">
                <img src={card.icon} alt="" className="size-[120px] shrink-0" />

                <span className="text-2xl font-medium leading-[150%] uppercase text-[#777777]">
                  {card.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[35px]">
            {rightSkills.map((card) => (
              <div key={card.name} className="flex items-center gap-6">
                <img src={card.icon} alt="" className="size-[120px] shrink-0" />

                <span className="text-2xl font-medium leading-[150%] uppercase text-[#777777]">
                  {card.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
