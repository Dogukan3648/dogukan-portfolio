const ProjectCard = ({ project }) => {
  const { title, image, description, technologies, liveUrl, githubUrl } =
    project;

  return (
    <article className="flex overflow-hidden rounded-xl bg-white shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14),0_8px_28px_-6px_rgba(24,39,75,0.12)]">
      <div className="h-[360px] w-[360px] shrink-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-6 px-8 py-8">
        <h3 className="text-[32px] font-bold text-[#4338CA]">{title}</h3>

        <p className="text-base font-normal leading-5 text-[#383838]">
          {description}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-[var(--color-primary)] px-[18px] py-2 text-sm font-medium text-white"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="flex gap-6">
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
