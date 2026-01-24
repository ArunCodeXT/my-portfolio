"use client";

import { motion } from "framer-motion";

export default function GenAICaseStudy() {
  return (
    <main className="bg-black text-white min-h-screen px-8 py-24 space-y-28">

      {/* 1️⃣ HERO / OVERVIEW */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl"
      >
        <h1 className="text-5xl font-bold">
          GenAI Application (LLM API)
        </h1>

        <p className="mt-6 text-white/70 text-lg max-w-3xl">
          A GenAI-powered application that leverages large language model APIs
          to generate accurate, context-aware responses for user queries,
          demonstrating practical usage of modern LLMs in real-world applications.
        </p>

        <p className="mt-4 text-sm text-white/50">
          GenAI · LLMs · API Integration · Prompt Engineering · Python
        </p>

        <div className="mt-8 flex gap-6">
          <a
            href="https://github.com/ArunCodeXT/genai-starter-projects"
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
          >
            View GitHub
          </a>

          <span className="px-6 py-3 border border-white/20 rounded-xl text-white/60">
            Live Demo (Coming Soon)
          </span>
        </div>
      </motion.section>

      {/* 2️⃣ PROBLEM */}
      <Section title="Problem Statement">
        While large language models are powerful, many beginners struggle to move
        beyond simple chat usage and understand how to integrate LLMs into real
        applications.
        <br /><br />
        The goal was to build a clean, practical GenAI application that:
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Uses an LLM through APIs, not UI tools</li>
          <li>Handles prompts, responses, and context correctly</li>
          <li>Demonstrates LLMs as a backend intelligence layer</li>
        </ul>
      </Section>

      {/* 3️⃣ IMPACT */}
      <Section title="Why It Matters">
        GenAI is becoming a core component of modern software systems—powering
        chatbots, copilots, search engines, and productivity tools.
        <br /><br />
        This project demonstrates:
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>How LLMs are integrated via APIs</li>
          <li>The importance of prompt structure and response control</li>
          <li>A foundation for production-ready GenAI systems</li>
        </ul>
        <br />
        It bridges the gap between theory and real-world GenAI engineering.
      </Section>

      {/* 4️⃣ ARCHITECTURE */}
      <Section title="System Architecture">
        <p className="mb-4">High-level request–response flow:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>User inputs a query</li>
          <li>System constructs a structured prompt</li>
          <li>Prompt is sent to the LLM API</li>
          <li>Model generates a response</li>
          <li>Response is processed and returned to the user</li>
        </ul>

        <p className="mt-6 mb-2 font-medium">Key design principles:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Clear separation of UI, prompt logic, and model calls</li>
          <li>Stateless request handling</li>
          <li>Modular architecture for easy upgrades</li>
        </ul>

        <p className="mt-6 text-white/50">
          (A simple request–response diagram can be shown here.)
        </p>
      </Section>

      {/* 5️⃣ TECHNICAL APPROACH */}
      <Section title="Technical Approach">
        The application follows a prompt-driven architecture:
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Carefully designed prompts guide model behavior</li>
          <li>System instructions define style and constraints</li>
          <li>Parameters like temperature and max tokens are tuned</li>
          <li>Error handling ensures graceful failures</li>
        </ul>
        <br />
        The focus was on building a reliable, understandable GenAI pipeline.
      </Section>

      {/* 6️⃣ TECH STACK */}
      <Section title="Tech Stack">
        <p className="font-medium mb-2">Core Technologies:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Python – backend logic</li>
          <li>LLM API – text generation</li>
          <li>Prompt Engineering – response control</li>
        </ul>

        <p className="font-medium mt-6 mb-2">Tools & Practices:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>REST API integration</li>
          <li>Environment-based API key management</li>
          <li>Git & GitHub for version control</li>
        </ul>
      </Section>

      {/* 7️⃣ CHALLENGES */}
      <Section title="Challenges & Tradeoffs">
        <p className="font-medium mb-2">Challenges:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Designing prompts with consistent outputs</li>
          <li>Preventing vague or overly verbose responses</li>
          <li>Handling unexpected user input</li>
        </ul>

        <p className="font-medium mt-6 mb-2">Tradeoffs:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Simplicity over complex orchestration frameworks</li>
          <li>Stateless prompts instead of long-term memory</li>
          <li>Correctness before optimization</li>
        </ul>
      </Section>

      {/* 8️⃣ RESULTS */}
      <Section title="Results & Learnings">
        <p className="font-medium mb-2">Outcomes:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Successfully integrated an LLM via APIs</li>
          <li>Built an end-to-end GenAI application</li>
          <li>Achieved stable, relevant responses through tuning</li>
        </ul>

        <p className="font-medium mt-6 mb-2">Key Learnings:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Prompt design heavily impacts output quality</li>
          <li>LLM APIs require careful parameter control</li>
          <li>Simple systems can still be highly effective</li>
        </ul>
      </Section>

      {/* 9️⃣ IMPROVEMENTS */}
      <Section title="Improvements & Future Work">
        <ul className="list-disc ml-6 space-y-2">
          <li>Conversation memory</li>
          <li>Multi-modal inputs</li>
          <li>RAG for factual grounding</li>
          <li>Usage monitoring and logging</li>
          <li>Multi-user scalability</li>
        </ul>
      </Section>

      {/* 🔗 LINKS */}
      <Section title="Links">
        <a
          href="https://github.com/ArunCodeXT/genai-starter-projects"
          target="_blank"
          className="underline"
        >
          GitHub Repository
        </a>
        <p className="text-white/50 mt-2">Live Demo: Coming soon</p>
      </Section>

    </main>
  );
}

/* ---------- REUSABLE SECTION ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-4xl"
    >
      <h2 className="text-3xl font-semibold mb-6">
        {title}
      </h2>
      <div className="text-white/70 leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}
