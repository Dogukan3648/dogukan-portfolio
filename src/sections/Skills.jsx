import useApp from "../hooks/useApp";

const Skills = () => {
  const { content } = useApp();

  const { skills } = content;

  const leftSkills = skills.items.slice(0, 3);

  const rightSkills = skills.items.slice(3);

  return (
    <section className="bg-[var(--skills-background)] py-14 lg:pt-20 lg:pb-0">
      <div className="container flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <h2 className="text-center text-4xl font-bold leading-none tracking-[0.01em] text-[var(--skills-title)] lg:w-[220px] lg:shrink-0 lg:text-left lg:text-5xl">
          {skills.title}
        </h2>

        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 lg:-mt-4 lg:flex lg:w-auto lg:flex-1 lg:gap-20">
          <div className="contents lg:flex lg:flex-col lg:gap-[35px]">
            {leftSkills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left"
              >
                <img
                  src={skill.icon}
                  alt=""
                  className="size-16 shrink-0 lg:size-[84px]"
                />

                <span className="text-sm font-medium leading-[150%] uppercase text-[var(--skills-text)] sm:text-base lg:text-2xl">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          <div className="contents lg:flex lg:flex-col lg:gap-[35px]">
            {rightSkills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left"
              >
                <img
                  src={skill.icon}
                  alt=""
                  className="size-16 shrink-0 lg:size-[84px]"
                />

                <span className="text-sm font-medium leading-[150%] uppercase text-[var(--skills-text)] sm:text-base lg:text-2xl">
                  {skill.name}
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
