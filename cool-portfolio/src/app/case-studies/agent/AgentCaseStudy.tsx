"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "AI Agent System Case Study | Arun Kumar A",
  description:
    "An autonomous AI agent capable of planning, tool usage, and multi-step execution.",
  openGraph: {
    title: "AI Agent System – Case Study",
    description:
      "Designing a task-oriented AI agent using planning and tool calling.",
    url: "https://your-domain.vercel.app/case-studies/agent",
    siteName: "Arun Kumar A Portfolio",
    images: [{ url: "/og/agent.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent System – Case Study",
    description:
      "Building an autonomous AI agent with reasoning and control loops.",
    images: ["/og/agent.png"],
  },
};

export default function AgentCaseStudy() {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toString()
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
            Case Study · AI Agents
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Task-Oriented AI Agent System
          </h1>

          <p className="text-[17px] leading-relaxed text-gray-400 max-w-3xl mx-auto">
            An autonomous AI Agent that plans tasks, selects tools, and executes
            multi-step actions to solve user-defined objectives using LLM-based
            reasoning.
          </p>

          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://github.com/ArunCodeXT/ai-agents-beginner-lab"
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
          Traditional GenAI applications respond to single prompts but cannot
          plan multiple steps, use external tools, or maintain task context.
          The challenge was to design an AI system that behaves like an agent—
          capable of reasoning, deciding actions, and completing tasks
          autonomously.
        </p>
      </Section>

      <Divider />

      <Section title="Why It Matters">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          AI Agents represent the next evolution of GenAI systems and are
          increasingly used in automation platforms, research assisttants,
          coding copilots, and productivity tools.
        </p>
      </Section>

      <Divider />

      <Section title="System Architecture">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          The agent follows a structured loop that separates reasoning,
          execution, and evaluation.
        </p>


        <div className="mt-12 max-w-3xl mx-auto">
          <div className="border border-emerald-400/20 rounded-2xl bg-emerald-400/5 p-8 text-center">
            <p className="text-gray-400 mb-4">
              High-level agent loop overview
            </p>
            <div className="border border-dashed border-emerald-400/30 rounded-xl py-20 text-emerald-300/60">
              Agent Architecture Diagram Placeholder
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      <Section title="Technical Approach">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Structured system prompts guide agent behavior</li>
          <li>• Tasks are decomposed into actionable steps</li>
          <li>• Tools are selected dynamically</li>
          <li>• Outputs are evaluated before proceeding</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Tech Stack">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Python — agent orchestration</li>
          <li>• LLM API — reasoning and planning</li>
          <li>• Prompt Engineering</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Challenges & Tradeoffs">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Preventing infinite loops</li>
          <li>• Structured reasoning design</li>
          <li>• Safe autonomy balance</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Results & Learnings">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Working autonomous agent</li>
          <li>• Dynamic tool usage</li>
          <li>• Stable reasoning loop</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Future Improvements">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Long-term memory</li>
          <li>• Multi-agent systems</li>
          <li>• Reflection-based learning</li>
        </ul>
      </Section>

      <section className="py-32 text-center text-emerald-300/60">
        Built with control, reasoning, and real-world autonomy in mind.
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
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
        className="h-full bg-emerald-white origin-left"
        style={{ transform: "scaleX(var(--scroll-progress))" }}
      />
    </div>
  );
}
