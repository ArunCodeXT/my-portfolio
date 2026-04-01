"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "SafeHer AI",
    tagline: "Deepfake detection + victim support for women's safety",
    progress: 30,
    stack: ["Computer Vision", "LLM API", "Streamlit"],
    color: "violet",
  },
  {
    name: "WealthPilot",
    tagline: "AI investment guidance for first-time Indian investors",
    progress: 20,
    stack: ["LangChain", "RAG", "Gemini API"],
    color: "purple",
  },
  {
    name: "ClearMind",
    tagline: "AI explainability in Tamil for regional audiences",
    progress: 15,
    stack: ["Hugging Face", "LLM API", "Streamlit"],
    color: "indigo",
  },
];

const colorMap: Record<string, { bar: string; badge: string; text: string }> = {
  violet: {
    bar: "bg-violet-500",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    text: "text-violet-400",
  },
  purple: {
    bar: "bg-purple-500",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    text: "text-purple-400",
  },
  indigo: {
    bar: "bg-indigo-500",
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    text: "text-indigo-400",
  },
};

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="py-32 bg-black text-white px-6 md:px-12">
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
            Work in progress
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Currently Building
          </h2>
          <p className="max-w-xl text-white/55 leading-relaxed text-[15px]">
            Three real-world AI products being built from April to November 2026.
            Each solves a genuine social problem — not tutorial exercises.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-5">
          {projects.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-white/10 rounded-2xl bg-[#0B0D0F] p-6 hover:border-violet-500/25 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className={`text-lg font-semibold ${c.text}`}>{p.name}</h3>
                    <p className="text-white/55 text-sm mt-1">{p.tagline}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 self-start md:self-center whitespace-nowrap">
                    In Progress
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-white/30 mb-1.5">
                    <span>Progress</span>
                    <span>{p.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${c.bar}`}
                    />
                  </div>
                </div>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className={`text-xs px-2.5 py-1 rounded-full border ${c.badge}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-4 rounded-xl border border-violet-500/15 bg-violet-500/5 flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <p className="text-sm text-white/40">
            Target: all 3 projects live with demos by November 2026.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
