"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "RAG System Case Study | Arun Kumar A",
  description:
    "A Retrieval-Augmented Generation system that grounds LLM responses using custom documents and vector databases.",
  openGraph: {
    title: "RAG System – Case Study",
    description:
      "How I built a document-aware RAG pipeline using embeddings and vector search.",
    url: "https://your-domain.vercel.app/case-studies/rag",
    siteName: "Arun Kumar A Portfolio",
    images: [{ url: "/og/rag.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG System – Case Study",
    description:
      "Document-grounded GenAI using Retrieval-Augmented Generation.",
    images: ["/og/rag.png"],
  },
};

export default function RAGCaseStudy() {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        (scrollTop / docHeight).toString()
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-black text-white">
      <ReadingProgress />

      {/* HERO */}
      <section className="pt-48 pb-40 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-sm uppercase tracking-widest text-emerald-400/70">
            Case Study · RAG
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Retrieval-Augmented Generation (RAG) System
          </h1>

          <p className="text-[17px] leading-relaxed text-gray-400 max-w-3xl mx-auto">
            A document-aware question answering system that retrieves relevant
            information from custom documents and generates grounded,
            context-aware responses using a Large Language Model.
          </p>

          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://github.com/ArunCodeXT/rag-mini-projects"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-emerald-400/70 text-black font-medium hover:bg-emerald-300 transition"
            >
              View GitHub
            </a>
            <span className="px-6 py-3 rounded-xl border border-emerald-400/70 text-emerald-300/70">
              Live Demo (Coming Soon)
            </span>
          </div>
        </div>
      </section>

      <Section title="Problem Statement">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          Large Language Models are powerful, but they suffer from hallucinations,
          lack access to private or up-to-date data, and cannot reference custom
          documents. The challenge was to design a system that answers questions
          strictly from provided documents while producing accurate and reliable
          responses.
        </p>
      </Section>

      <Divider />

      <Section title="Why It Matters">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          Retrieval-Augmented Generation is a core architecture used in
          enterprise-grade AI systems such as knowledge bases, internal document
          assistants, and research tools.
        </p>
      </Section>

      <Divider />

      <Section title="System Architecture">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          The system follows a modular pipeline that separates retrieval from
          generation, allowing scalability and extensibility.
        </p>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="border border-emerald-400/20 rounded-2xl bg-emerald-400/5 p-8 text-center">
            <p className="text-gray-400 mb-4">
              High-level RAG pipeline overview
            </p>
            <div className="border border-dashed border-emerald-400/30 rounded-xl py-20 text-emerald-300/60">
              Architecture Diagram Placeholder
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      <Section title="Technical Approach">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Documents are split into controlled-size chunks</li>
          <li>• Embeddings capture semantic meaning</li>
          <li>• Vector search retrieves top-k relevant chunks</li>
          <li>• Retrieved context is injected into the LLM prompt</li>
          <li>• Prompt templates enforce grounded responses</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Tech Stack">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Python — orchestration and pipeline logic</li>
          <li>• LLM API — response generation</li>
          <li>• Embedding model — semantic vectors</li>
          <li>• Vector database (FAISS / Chroma)</li>
          <li>• Git & GitHub — version control</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Challenges & Tradeoffs">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Choosing optimal chunk size and overlap</li>
          <li>• Ensuring relevant context retrieval</li>
          <li>• Managing prompt length constraints</li>
          <li>• Prioritizing correctness over optimization</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Results & Learnings">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Significant reduction in hallucinations</li>
          <li>• Accurate document-grounded answers</li>
          <li>• Strong understanding of retrieval pipelines</li>
          <li>• Improved system-level GenAI thinking</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Future Improvements">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Hybrid search (keyword + vector)</li>
          <li>• Reranking retrieved chunks</li>
          <li>• Metadata-based filtering</li>
          <li>• Conversation memory</li>
          <li>• Performance benchmarking</li>
        </ul>
      </Section>

      <section className="py-32 text-center text-emerald-300/60">
        Built with clarity, grounding, and production intent.
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-28"
    >
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-400/70">
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}
function Divider() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent my-24" />
    </div>
  );
}


function ReadingProgress() {
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50">
      <div
        className="h-full bg-emerald-400/70 origin-left"
        style={{ transform: "scaleX(var(--scroll-progress))" }}
      />
    </div>
  );
}
