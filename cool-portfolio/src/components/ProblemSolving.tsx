"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FOCUS_AREAS = [
  "Arrays",
  "Strings",
  "Hashing",
  "Sliding Window",
  "Two Pointers",
];

export default function ProblemSolving() {
  const [activeFocus, setActiveFocus] = useState("Arrays");

  return (
    <section id="leetcode" className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          DSA & Problem Solving
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-white/60"
        >
          Practicing structured problem-solving with focus on core patterns,
          not random questions.
        </motion.p>

        {/* Stats */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <StatCard title="Problems Solved" value="X+" subtitle="on LeetCode" />
          <StatCard title="Practice Style" value="Pattern-Based" subtitle="Depth over volume" />
          <StatCard title="Code Quality" value="Clean" subtitle="Readable & tested" />
        </div>

        {/* Focus Areas */}
        <div className="mt-16 max-w-3xl">
          <p className="text-white/50 mb-4">Focus Areas</p>

          <div className="flex flex-wrap gap-3">
            {FOCUS_AREAS.map((item) => {
              const isActive = activeFocus === item;

              return (
                <motion.button
                  key={item}
                  onClick={() => setActiveFocus(item)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-4 py-2 rounded-full text-sm transition
                    border
                    ${
                      isActive
                        ? "border-violet-400/60 bg-violet-400/10 text-violet-300"
                        : "border-white/10 bg-white/5 text-white/60 hover:text-white"
                    }
                  `}
                >
                  {item}
                </motion.button>
              );
            })}
          </div>

          {/* Live Indicator */}
          <motion.p
            key={activeFocus}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 text-sm text-white/50"
          >
            Currently focusing on{" "}
            <span className="text-violet-400">{activeFocus}</span> problems
          </motion.p>
        </div>

        {/* Buttons */}
        <div className="mt-20 flex flex-wrap gap-6">
          <a
            href="https://leetcode.com/your-username"
            target="_blank"
            className="px-6 py-3 rounded-xl
              bg-violet-400 text-black font-medium
              hover:bg-violet-300 transition"
          >
            View LeetCode
          </a>

          <a
            href="https://github.com/ArunCodeXT/dsa-practice"
            target="_blank"
            className="px-6 py-3 rounded-xl
              border border-white/20
              text-white/60 hover:text-white
              hover:border-violet-400/50 transition"
          >
            DSA GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stat Card ---------- */

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-white/10 rounded-2xl p-6 bg-white/5"
    >
      <p className="text-sm text-white/50">{title}</p>
      <p className="mt-4 text-3xl font-semibold text-violet-400">{value}</p>
      <p className="mt-2 text-sm text-white/40">{subtitle}</p>
    </motion.div>
  );
}
