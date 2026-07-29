import ProjectCard from "../components/ProjectCard";
import useApp from "../hooks/useApp";

const Projects = () => {
  const { content } = useApp();
  const { projects } = content;

  return (
    <section className="bg-[var(--color-accent)] py-14">
      <div className="container">
        <h2 className="text-5xl font-bold text-[var(--color-primary)]">
          {projects.title}
        </h2>

        <div className="mt-10 flex flex-col gap-6">
          {projects.items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              viewSiteLabel={projects.viewSiteLabel}
              githubLabel={projects.githubLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
