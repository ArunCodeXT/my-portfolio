"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: "genai",
    title: "GenAI Application",
    desc: "Production-style GenAI app solving real user queries using LLM APIs.",
    tech: "Python · LLM API · Prompt Engineering",
    code: "https://github.com/yourusername/genai-app",
  },
  {
    id: "rag",
    title: "RAG Knowledge System",
    desc: "Document-based question answering system with improved accuracy.",
    tech: "Python · Embeddings · Vector DB · LLM",
    code: "https://github.com/yourusername/rag-system",
  },
  {
    id: "agent",
    title: "AI Agent System",
    desc: "Autonomous agent capable of reasoning, tool usage, and task execution.",
    tech: "Python · LLM · Agents · APIs",
    code: "https://github.com/yourusername/ai-agent",
  },
  {
    id: "iot",
    title: "IoT Traffic Management",
    desc: "Smart traffic optimization system using IoT sensor data.",
    tech: "Python · IoT · Data Processing",
    code: "https://github.com/yourusername/iot-traffic",
  },
  {
    id: "automation",
    title: "Automation Tool",
    desc: "Automation pipeline reducing repetitive manual workflows.",
    tech: "Python · Automation · APIs",
    code: "https://github.com/yourusername/automation-tool",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="
                group rounded-2xl border border-white/10
                bg-[#0B0D0F] overflow-hidden
                hover:bg-[#111418] transition
              "
            >
              {/* Image placeholder */}
              <div className="h-40 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
                <div className="h-full w-full scale-100 group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {p.title}
                </h3>

                <p className="mt-2 text-white/70">
                  {p.desc}
                </p>

                <p className="mt-3 text-sm text-white/50">
                  {p.tech}
                </p>

                <div className="mt-6 flex gap-6 text-sm">
                  <a
                    href={p.code}
                    target="_blank"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    View Code
                  </a>

                  <Link
                    href={`/case-studies/${p.id}`}
                    className="text-violet-400 hover:text-violet-300"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
