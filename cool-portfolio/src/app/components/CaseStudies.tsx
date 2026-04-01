"use client";

import { motion } from "framer-motion";

const cases = [
  {
    id: "genai",
    title: "GenAI Application",
    badge: "01",
    problem: "Users need accurate, structured answers from LLMs instead of raw, inconsistent text.",
    why: "Unstructured responses reduce usability and trust in real-world applications.",
    approach: "Designed prompt templates, response schemas, and validation layers to enforce output structure.",
    architecture: "User Input → Prompt Template → LLM API → Schema Validation → Structured Output",
    tech: ["Python", "LLM APIs", "Prompt Engineering"],
    challenges: "Handling hallucinations and ensuring response consistency across edge cases.",
    improve: "Add a feedback loop and automated evaluation metrics to continuously improve quality.",
  },
  {
    id: "rag",
    title: "RAG Knowledge System",
    badge: "02",
    problem: "LLMs lack access to private or domain-specific documents and give outdated answers.",
    why: "Accurate retrieval is critical for enterprise knowledge systems to be reliable and trusted.",
    approach: "Chunked documents into segments, generated embeddings, and retrieved top-k context before LLM response.",
    architecture: "Documents → Chunking → Embeddings → Vector DB → Retrieval → LLM → Answer",
    tech: ["Python", "Vector DB", "Embeddings", "LLM"],
    challenges: "Chunk size tuning and retrieval precision — too large loses focus, too small loses context.",
    improve: "Implement hybrid search combining dense + sparse retrieval, plus a reranking step.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 bg-[#0B0D0F] px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">
            Deep dives
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Case Studies
          </h2>
        </motion.div>

        <div className="space-y-24">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              id={`case-${c.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Case number */}
              <span className="text-7xl font-bold text-white/[0.04] absolute -top-6 -left-2 select-none pointer-events-none">
                {c.badge}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <span className="text-xs font-mono text-violet-400 border border-violet-500/30 px-2 py-0.5 rounded">
                  {c.badge}
                </span>
                {c.title}
              </h3>

              {/* Content blocks */}
              <div className="space-y-5">
                {[
                  { label: "Problem", value: c.problem },
                  { label: "Why it matters", value: c.why },
                  { label: "Approach", value: c.approach },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4">
                    <span className="text-violet-400 font-medium text-sm min-w-[120px] mt-0.5">
                      {label}
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">{value}</p>
                  </div>
                ))}

                {/* Architecture flow */}
                <div className="flex gap-4">
                  <span className="text-violet-400 font-medium text-sm min-w-[120px] mt-0.5">
                    Architecture
                  </span>
                  <div className="flex-1">
                    <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-4">
                      <p className="text-white/50 text-xs font-mono leading-relaxed tracking-wide">
                        {c.architecture}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex gap-4 items-start">
                  <span className="text-violet-400 font-medium text-sm min-w-[120px] mt-1">
                    Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {c.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {[
                  { label: "Challenges", value: c.challenges },
                  { label: "Improvements", value: c.improve },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4">
                    <span className="text-violet-400 font-medium text-sm min-w-[120px] mt-0.5">
                      {label}
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              {i < cases.length - 1 && (
                <div className="mt-20 border-t border-white/5" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
