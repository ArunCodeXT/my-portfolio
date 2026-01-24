"use client";

import { motion } from "framer-motion";

export default function GitHubSection() {
  return (
    <section id="github" className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
        >
          GitHub & Code
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-white/60 leading-relaxed"
        >
          GitHub is where I build, experiment, and document my learning. I focus
          on clean code, meaningful commits, and projects that demonstrate real
          system thinking rather than tutorials.
        </motion.p>

        {/* Highlight Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <HighlightCard
            title="GenAI & RAG Systems"
            description="LLM-based applications, retrieval pipelines, and prompt-driven architectures."
            accent="violet"
          />
          <HighlightCard
            title="AI Agents & Automation"
            description="Task-oriented agents, tool usage, and Python-based automation workflows."
            accent="violet"
          />
          <HighlightCard
            title="DSA & Core Practice"
            description="Consistent problem-solving focused on patterns, clarity, and correctness."
            accent="violet"
          />
        </div>

        {/* Links */}
        <div className="mt-20 flex flex-wrap gap-6">
          <a
            href="https://github.com/ArunCodeXT"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-violet-400 text-black font-medium
                       hover:bg-violet-300 transition"
          >
            Visit GitHub Profile
          </a>

          <a
            href="https://github.com/ArunCodeXT?tab=repositories"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-white/20
                       text-white/60 hover:text-white
                       hover:border-violet-400/60 transition"
          >
            View Repositories
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small Component ---------- */

function HighlightCard({
  title,
  description,
  accent,
}: {
  title: string;
  description: string;
  accent: "violet" | "purple";
}) {
  const borderHover =
    accent === "violet"
      ? "hover:border-violet-400/40"
      : "hover:border-purple-400/40";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border border-white/10 rounded-2xl p-6
                  bg-white/5 transition-colors ${borderHover}`}
    >
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="mt-4 text-white/60 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
