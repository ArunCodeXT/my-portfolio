"use client";

import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-32 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
        >
          Experience & Learning Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-white/60 leading-relaxed"
        >
          A focused progression of learning, building, and problem solving —
          centered around real-world systems rather than theory alone.
        </motion.p>

        {/* Timeline */}
        <div className="mt-20 space-y-12 border-l border-white/10 pl-8">
          <TimelineItem
            title="Final-Year B.Tech — Artificial Intelligence & Data Science"
            time="2022 – 2026"
            description="Building strong foundations in algorithms, data handling, and applied AI while focusing on hands-on projects."
            accent="emerald"
          />

          <TimelineItem
            title="Generative AI & System Building Focus"
            time="2024 – Present"
            description="Actively building GenAI applications, RAG systems, and AI agents with attention to architecture, tradeoffs, and scalability."
            accent="emerald"
          />

          <TimelineItem
            title="Data Structures & Algorithmic Thinking"
            time="Ongoing"
            description="Consistent problem-solving practice on LeetCode to improve reasoning, pattern recognition, and code quality."
            accent="emerald"
          />

          <TimelineItem
            title="Automation & Real-World Problem Solving"
            time="Ongoing"
            description="Designed Python automation and IoT-based systems to solve practical workflow and infrastructure problems."
            accent="emerald"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Timeline Item ---------- */

function TimelineItem({
  title,
  time,
  description,
  accent,
}: {
  title: string;
  time: string;
  description: string;
  accent: "emerald" | "purple";
}) {
  const dotColor =
    accent === "emerald" ? "bg-emerald-400" : "bg-purple-400";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Dot */}
      <span
        className={`absolute -left-[42px] top-2 w-3 h-3 rounded-full ${dotColor}`}
      />

      <h3 className="text-lg font-medium text-white">
        {title}
      </h3>
      <p className="mt-1 text-sm text-white/40">{time}</p>
      <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
