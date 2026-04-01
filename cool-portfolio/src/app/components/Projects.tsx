"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Github } from "lucide-react";

const projects = [
  {
    id: "safeher",
    title: "SafeHer AI",
    desc: "Deepfake detection + victim support platform for women's safety. Uses computer vision and LLMs to detect manipulated media and connect survivors to resources.",
    tech: ["Python", "Computer Vision", "LLM API", "Streamlit"],
    github: "https://github.com/ArunCodeXT/safeher-ai",
    demo: "",
    accent: "from-violet-900/30 to-purple-900/10",
    status: "Building",
  },
  {
    id: "wealthpilot",
    title: "WealthPilot",
    desc: "AI-powered investment guidance for first-time Indian investors. Explains mutual funds, SIPs, and market basics in plain language tailored to Indian financial context.",
    tech: ["Python", "LangChain", "RAG", "Gemini API"],
    github: "https://github.com/ArunCodeXT/wealthpilot",
    demo: "",
    accent: "from-indigo-900/30 to-violet-900/10",
    status: "Building",
  },
  {
    id: "clearmind",
    title: "ClearMind",
    desc: "AI explainability tool for Tamil-speaking users. Breaks down complex AI concepts into simple explanations in Tamil, making AI literacy accessible to regional audiences.",
    tech: ["Python", "LLM API", "Hugging Face", "Streamlit"],
    github: "https://github.com/ArunCodeXT/clearmind",
    demo: "",
    accent: "from-purple-900/30 to-pink-900/10",
    status: "Building",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">What I&apos;ve built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="
                group relative rounded-2xl border border-white/10
                bg-[#0B0D0F] overflow-hidden
                hover:border-violet-500/25 hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent} opacity-60`} />

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors duration-200">
                    {p.title}
                  </h3>
                  {p.status === "Building" && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Building
                    </span>
                  )}
                </div>

                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/15">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-5 pt-2 border-t border-white/5 flex-wrap">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <Github size={14} />
                    View Code
                  </a>

                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/20 cursor-not-allowed">
                      <ExternalLink size={14} />
                      Demo soon
                    </span>
                  )}

                  <Link
                    href={`/case-studies/${p.id}`}
                    className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <BookOpen size={14} />
                    Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deploy nudge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 p-4 rounded-xl border border-violet-500/15 bg-violet-500/5 flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
          <p className="text-sm text-white/40">
            Live demos coming soon — deploying SafeHer AI, WealthPilot &amp; ClearMind to Hugging Face Spaces &amp; Streamlit Cloud.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
