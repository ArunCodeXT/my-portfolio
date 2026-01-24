"use client";

import { motion } from "framer-motion";

const cases = [
  {
    id: "genai",
    title: "GenAI Application",
    problem: "Users need accurate, structured answers from LLMs instead of raw text.",
    why: "Unstructured responses reduce usability in real-world applications.",
    approach: "Designed prompt templates, response schemas, and validation layers.",
    diagram: "/diagrams/genai.png",
    tech: "Python, LLM APIs, Prompt Engineering",
    challenges: "Handling hallucinations and response consistency.",
    improve: "Add feedback loop and evaluation metrics.",
  },
  {
    id: "rag",
    title: "RAG Knowledge System",
    problem: "LLMs lack access to private or domain-specific documents.",
    why: "Accurate retrieval is critical for enterprise knowledge systems.",
    approach: "Chunked documents, generated embeddings, and retrieved top-k context.",
    architecture: "Docs → Embeddings → Vector DB → LLM",
    tech: "Python, Vector DB, Embeddings, LLM",
    challenges: "Chunk size tuning and retrieval precision.",
    improve: "Hybrid search and reranking.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-32 bg-[#0B0D0F]">
      <div className="max-w-4xl mx-auto px-6 space-y-24">
        {cases.map((c) => (
          <motion.div
            key={c.id}
            id={`case-${c.id}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 text-white"
          >
            <h3 className="text-2xl font-semibold text-white">
              {c.title} — Case Study
            </h3>

            <p className="text-white/80">
              <strong className="text-violet-400">Problem:</strong> {c.problem}
            </p>
            <p className="text-white/80">
              <strong className="text-violet-400">Why it matters:</strong> {c.why}
            </p>
            <p className="text-white/80">
              <strong className="text-violet-400">Approach:</strong> {c.approach}
            </p>

            {/* Architecture Diagram */}
            <div className="mt-6 space-y-3">
              <p className="font-semibold text-white">Architecture</p>

              <div className="w-full rounded-xl border border-white/10 bg-white/5 p-4">
                {c.diagram ? (
                  <img
                    src={c.diagram}
                    alt={`${c.title} architecture`}
                    className="w-full rounded-lg"
                  />
                ) : (
                  <div className="h-48 flex items-center justify-center text-white/40 text-sm">
                    Architecture diagram coming soon
                  </div>
                )}
              </div>

              <p className="text-sm text-white/40">
                High-level flow of components and data movement
              </p>
            </div>

            <p className="text-white/80">
              <strong className="text-violet-400">Tech Stack:</strong> {c.tech}
            </p>
            <p className="text-white/80">
              <strong className="text-violet-400">Challenges:</strong> {c.challenges}
            </p>
            <p className="text-white/80">
              <strong className="text-violet-400">Improvements:</strong> {c.improve}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
