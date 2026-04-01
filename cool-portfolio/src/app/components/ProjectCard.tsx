import Link from "next/link";
import { ExternalLink, BookOpen } from "lucide-react";

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
        group relative rounded-2xl
        border border-white/10 bg-[#0B0D0F] p-6
        hover:-translate-y-1 hover:border-violet-500/25
        hover:bg-[#0f0f18]
        transition-all duration-300
      "
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-white/60 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/15"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-5 text-sm border-t border-white/5 pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors"
        >
          <ExternalLink size={14} />
          View Code
        </a>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors"
        >
          <BookOpen size={14} />
          Case Study
        </Link>
      </div>
    </div>
  );
}
