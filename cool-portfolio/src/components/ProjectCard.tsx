import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <div
      className="rounded-2xl bg-white/5 border border-white/10 p-6
                 hover:border-violet-400/40 transition-colors"
    >
      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="text-white/60 mt-2">
        {project.description}
      </p>

      <p className="text-sm text-white/40 mt-3">
        {project.tech.join(" · ")}
      </p>

      <div className="mt-6 flex gap-6">
        <a
          href={project.github}
          target="_blank"
          className="text-sm underline text-white/60 hover:text-violet-400 transition"
        >
          View Code
        </a>

        <Link
          href="/projects/genai-application"
          className="text-sm underline text-white/60 hover:text-violet-400 transition"
        >
          Case Study
        </Link>

        <Link
          href={`/projects/${project.slug}`}
          className="text-sm underline text-white/60 hover:text-violet-400 transition"
        >
          Case Study
        </Link>
      </div>
    </div>
  );
}
