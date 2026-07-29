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
    <section className="py-14 lg:pt-20 lg:pb-0">
      <div className="container flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
        <h2 className="text-center text-4xl font-bold leading-none tracking-[0.01em] text-[var(--color-primary)] lg:w-[170px] lg:shrink-0 lg:text-left lg:text-5xl">
          Skills
        </h2>

        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 lg:-mt-4 lg:ml-10 lg:flex lg:w-auto lg:gap-20">
          <div className="contents lg:flex lg:flex-col lg:gap-[35px]">
            {leftSkills.map((card) => (
              <div
                key={card.name}
                className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left lg:gap-6"
              >
                <img
                  src={card.icon}
                  alt=""
                  className="size-16 shrink-0 lg:size-[120px]"
                />

                <span className="text-sm font-medium leading-[150%] uppercase text-[#777777] sm:text-base lg:text-2xl">
                  {card.name}
                </span>
              </div>
            ))}
          </div>

          <div className="contents lg:flex lg:flex-col lg:gap-[35px]">
            {rightSkills.map((card) => (
              <div
                key={card.name}
                className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left lg:gap-6"
              >
                <img
                  src={card.icon}
                  alt=""
                  className="size-16 shrink-0 lg:size-[120px]"
                />

                <span className="text-sm font-medium leading-[150%] uppercase text-[#777777] sm:text-base lg:text-2xl">
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
