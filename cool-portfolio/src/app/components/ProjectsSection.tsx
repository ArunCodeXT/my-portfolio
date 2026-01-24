import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="bg-[#0B0D0F] text-white px-10 py-24">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-bold mb-12 text-white">
          Projects
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
