"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import CaseStudyNavbar from "@/components/CaseStudyNavbar";

export const metadata = {
  title: "GenAI Application Case Study | Arun Kumar A",
  description:
    "A practical GenAI application using LLM APIs, focusing on prompt design, system architecture, and real-world usage.",
  openGraph: {
    title: "GenAI Application – Case Study",
    description:
      "How I built a production-style GenAI system using LLM APIs with clean architecture and prompt engineering.",
    url: "https://your-domain.vercel.app/case-studies/genai",
    siteName: "Arun Kumar A Portfolio",
    images: [{ url: "/og/genai.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenAI Application – Case Study",
    description:
      "Building a real-world GenAI system using LLM APIs and prompt engineering.",
    images: ["/og/genai.png"],
  },
};

export default function GenAICaseStudy() {
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
      <CaseStudyNavbar />
      <ReadingProgress />

      {/* HERO */}
      <section className="pt-48 pb-40 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-sm uppercase tracking-widest text-violet-400/70">
            Case Study · GenAI
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Building a Practical GenAI Application using LLM APIs
          </h1>

          <p className="text-[17px] leading-relaxed text-gray-400 max-w-3xl mx-auto">
            A real-world GenAI system that integrates Large Language Models
            through APIs, focusing on correctness, prompt design, and clean
            system structure.
          </p>

          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://github.com/ArunCodeXT/genai-starter-projects"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-violet-400/70 text-black font-medium hover:bg-violet-300 transition"
            >
              View GitHub
            </a>
            <span className="px-6 py-3 rounded-xl border border-violet-400/70 text-violet-300/70">
              Live Demo (Coming Soon)
            </span>
          </div>
        </div>
      </section>

      <Section title="Context">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          Large Language Models are powerful, but many applications fail to move
          beyond basic chat interfaces. This project focuses on using LLMs as a
          backend intelligence layer inside a real system.
        </p>
      </Section>

      <Divider />

      <Section title="Problem Statement">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          Most beginner GenAI projects lack structure, reliability, and
          engineering clarity. The challenge was to design a clean,
          understandable GenAI application that integrates LLMs using APIs
          rather than UI-based tools.
        </p>
      </Section>

      <Divider />

      <Section title="Engineering Approach">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Designed structured prompts instead of free-form input</li>
          <li>• Treated the LLM as a stateless backend service</li>
          <li>• Focused on predictable and controlled responses</li>
          <li>• Prioritized readability and modularity</li>
        </ul>
      </Section>

      <Divider />

      {/* SYSTEM ARCHITECTURE */}
      <Section title="System Architecture">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          The application follows a clear and controlled pipeline where each
          stage has a well-defined responsibility.
        </p>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="border border-violet-400/20 rounded-2xl bg-violet-400/5 p-8 text-center">
            <p className="text-gray-400 mb-4">
              High-level GenAI system flow
            </p>
            <div className="border border-dashed border-violet-400/30 rounded-xl py-20 text-violet-300/60">
              GenAI Architecture Diagram Placeholder
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      <Section title="Challenges & Tradeoffs">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Prompt tuning required multiple iterations</li>
          <li>• Chose simplicity over orchestration frameworks</li>
          <li>• Avoided long-term memory to keep logic predictable</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Results & Learnings">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          The application reliably produces context-aware responses and
          demonstrates how LLM APIs can be used as core system components
          rather than novelty features.
        </p>

        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Improved understanding of prompt design</li>
          <li>• Learned API reliability patterns</li>
          <li>• Strengthened system thinking</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Future Improvements">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Add Retrieval-Augmented Generation (RAG)</li>
          <li>• Introduce conversation memory</li>
          <li>• Add logging and monitoring</li>
          <li>• Scale to multi-user usage</li>
        </ul>
      </Section>

      <section className="py-32 text-center text-violet-300/60">
        Built with clarity, discipline, and engineering intent.
      </section>
    </main>
  );
}

/* ---------- Helpers ---------- */

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
      transition={{ duration: 0.6 }}
      className="py-28 px-6 max-w-5xl mx-auto"
    >
      {title && (
        <h2 className="text-3xl font-semibold tracking-tight text-violet-400/70">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent my-24" />
    </div>
  );
}

function ReadingProgress() {
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50">
      <div
        className="h-full bg-violet-400/70 origin-left"
        style={{ transform: "scaleX(var(--scroll-progress))" }}
      />
    </div>
  );
}
