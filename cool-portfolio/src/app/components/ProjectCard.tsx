import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
        group rounded-2xl
        border border-white/10 bg-[#0B0D0F] p-6
        transition hover:-translate-y-1 hover:bg-[#111418]
      "
    >
      {/* TITLE */}
      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-white/70 text-sm">
        {project.description}
      </p>

      {/* TECH STACK */}
      <p className="mt-4 text-xs text-white/50">
        {project.tech.join(" · ")}
      </p>

      {/* ACTIONS */}
      <div className="mt-6 flex gap-6 text-sm">
        <a
          href={project.github}
          target="_blank"
          className="underline text-emerald-400 hover:text-emerald-300"
        >
          View Code
        </a>

        <Link
          href={`/projects/${project.slug}`}
          className="underline text-emerald-400 hover:text-emerald-300"
        >
          Case Study →
        </Link>
      </div>
    </div>
  );
}
