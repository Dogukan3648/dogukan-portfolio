import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="bg-[var(--color-accent)] py-14">
      <div className="container">
        <h2 className="text-5xl font-bold text-[var(--color-primary)]">
          Projects
        </h2>

        <div className="mt-10 flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
