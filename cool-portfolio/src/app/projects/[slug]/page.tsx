"use client";

import { useParams } from "next/navigation";
import { projects } from "../../../data/projects";

import { motion } from "framer-motion";

export default function CaseStudyPage() {
  const params = useParams();
const slug = Array.isArray(params.slug)
  ? params.slug[0]
  : params.slug;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="text-white">Not found</div>;

  return (
    <main className="min-h-screen bg-black text-white px-10 py-20 space-y-20">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold">{project.title}</h1>
        <p className="text-white/70 mt-4 max-w-3xl">
          {project.description}
        </p>
      </motion.section>

      {/* PROBLEM */}
      <Section title="Problem">
        {project.caseStudy.problem}
      </Section>

      {/* WHY IT MATTERS */}
      <Section title="Why It Matters">
        {project.caseStudy.why}
      </Section>

      {/* APPROACH */}
      <ListSection title="Approach" items={project.caseStudy.approach} />

      {/* ARCHITECTURE */}
      <ListSection
        title="Architecture"
        items={project.caseStudy.architecture}
      />

      {/* CHALLENGES */}
      <ListSection
        title="Challenges"
        items={project.caseStudy.challenges}
      />

      {/* IMPROVEMENTS */}
      <ListSection
        title="Future Improvements"
        items={project.caseStudy.improvements}
      />

      {/* LINKS */}
      <a
        href={project.github}
        target="_blank"
        className="underline text-sm"
      >
        View Source Code
      </a>
    </main>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function Section({ title, children }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-white/70">{children}</p>
    </motion.section>
  );
}

function ListSection({ title, items }: any) {
  return (
    <Section title={title}>
      <ul className="list-disc ml-5 space-y-2">
        {items.map((item: string, i: number) => (
          <li key={i} className="text-white/70">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
