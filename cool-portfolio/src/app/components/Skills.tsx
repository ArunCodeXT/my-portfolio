"use client";

import { motion } from "framer-motion";
import { Code2, Brain, GitBranch, Cpu } from "lucide-react";

const skills = [
  {
    title: "Programming",
    icon: <Code2 size={22} />,
    color: "violet",
    items: ["Python", "SQL", "DSA (LeetCode)", "Problem Solving"],
  },
  {
    title: "AI / GenAI",
    icon: <Brain size={22} />,
    color: "purple",
    items: ["LLMs", "Prompt Engineering", "RAG", "AI Agents"],
  },
  {
    title: "Tools",
    icon: <GitBranch size={22} />,
    color: "violet",
    items: ["Git & GitHub", "Linux", "Pandas", "Vector Databases"],
  },
  {
    title: "Concepts",
    icon: <Cpu size={22} />,
    color: "purple",
    items: ["System Design (Basics)", "REST APIs", "Automation", "Data Handling"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-black px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">
            What I work with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="
                group relative border border-white/10 rounded-2xl p-6
                bg-[#0B0D0F]
                hover:-translate-y-1 hover:border-violet-500/30
                hover:bg-[#0f0f18]
                transition-all duration-300
              "
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "inset 0 0 40px rgba(139,92,246,0.06)" }}
              />

              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {skill.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2.5">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="w-1 h-1 rounded-full bg-violet-500/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
