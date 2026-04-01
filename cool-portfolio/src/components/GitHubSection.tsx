"use client";

import { motion } from "framer-motion";
import { Github, GitCommit, Star } from "lucide-react";

const highlights = [
  {
    icon: <Star size={18} />,
    title: "GenAI & RAG Systems",
    description:
      "LLM-based applications, retrieval pipelines, and prompt-driven architectures built for real use cases.",
    tag: "AI / ML",
  },
  {
    icon: <GitCommit size={18} />,
    title: "AI Agents & Automation",
    description:
      "Task-oriented agents with tool usage, reasoning loops, and Python-based automation workflows.",
    tag: "Agents",
  },
  {
    icon: <Github size={18} />,
    title: "DSA & Core Practice",
    description:
      "Consistent problem-solving focused on patterns, clarity, and correctness — not just grinding.",
    tag: "LeetCode",
  },
];

const stats = [
  { label: "Public Repos", value: "10+" },
  { label: "Main Language", value: "Python" },
  { label: "Focus", value: "AI / GenAI" },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-32 bg-black text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">
            Open source & practice
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            GitHub & Code
          </h2>
          <p className="max-w-xl text-white/55 leading-relaxed text-[15px]">
            Where I build, experiment, and document my learning. I focus on
            clean code, meaningful commits, and projects that demonstrate real
            system thinking — not tutorials.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-10 mb-14 pb-14 border-b border-white/8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-white/40 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <div className="grid gap-5 md:grid-cols-3 mb-14">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="
                group relative border border-white/10 rounded-2xl p-6
                bg-[#0B0D0F]
                hover:border-violet-500/30 hover:-translate-y-1
                hover:bg-[#0f0f18]
                transition-all duration-300
              "
            >
              {/* Icon + tag row */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  {h.icon}
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">
                  {h.tag}
                </span>
              </div>

              <h3 className="text-base font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors duration-200">
                {h.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* GitHub contribution embed hint */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 rounded-2xl border border-white/10 bg-[#0B0D0F] p-5 overflow-hidden"
        >
          <p className="text-xs text-white/30 mb-3 uppercase tracking-widest">
            Contribution activity
          </p>
          {/* GitHub readme stats — replace with your username */}
          <img
            src="https://ghchart.rshah.org/8b5cf6/ArunCodeXT"
            alt="Arun's GitHub contribution chart"
            className="w-full opacity-70 rounded"
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://github.com/ArunCodeXT"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              bg-violet-500 hover:bg-violet-400
              active:scale-95
              text-black font-semibold text-sm
              px-6 py-3 rounded-lg
              transition-all duration-200
              shadow-lg shadow-violet-500/20
            "
          >
            <Github size={16} />
            Visit GitHub Profile
          </a>

          <a
            href="https://github.com/ArunCodeXT?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              border border-white/15 hover:border-violet-400/50
              text-white/60 hover:text-violet-300
              px-6 py-3 rounded-lg text-sm font-medium
              transition-all duration-200
            "
          >
            View All Repositories →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
