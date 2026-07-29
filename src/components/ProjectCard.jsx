const ProjectCard = ({ project }) => {
  const { title, image, description, technologies, liveUrl, githubUrl } =
    project;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14),0_8px_28px_-6px_rgba(24,39,75,0.12)] lg:flex-row">
      <div className="h-[220px] w-full shrink-0 sm:h-[280px] lg:h-[360px] lg:w-[360px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-5 px-5 py-6 sm:px-6 lg:gap-6 lg:px-8 lg:py-8">
        <h3 className="text-2xl font-bold text-[#4338CA] lg:text-[32px]">
          {title}
        </h3>

        <p className="text-sm font-normal leading-6 text-[#383838] lg:text-base lg:leading-5">
          {description}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-medium text-white lg:px-[18px] lg:text-sm"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-6">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-[#120B39] underline"
          >
            View Site
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-[#120B39] underline"
          >
            Github
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
