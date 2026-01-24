"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  GitBranch,
  Cpu,
  Boxes,
  Server,
  Workflow,
} from "lucide-react";

const skills = [
  {
    title: "Programming",
    icon: <Code2 size={28} />,
    items: ["Python", "SQL", "DSA (LeetCode)", "Problem Solving"],
  },
  {
    title: "AI / GenAI",
    icon: <Brain size={28} />,
    items: ["LLMs", "Prompt Engineering", "RAG", "AI Agents"],
  },
  {
    title: "Tools",
    icon: <GitBranch size={28} />,
    items: ["Git & GitHub", "Linux", "Pandas", "Vector Databases"],
  },
  {
    title: "Concepts",
    icon: <Cpu size={28} />,
    items: ["System Design (Basics)", "APIs", "Automation", "Data Handling"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                group border border-white/10 rounded-2xl p-6
                bg-[#0B0D0F]
                transition hover:-translate-y-2
                hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]
              "
            >
              <div className="flex items-center gap-3 mb-4 text-violet-400">
                {skill.icon}
                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>
              </div>

              <ul className="space-y-2 text-white/70 text-sm">
                {skill.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
