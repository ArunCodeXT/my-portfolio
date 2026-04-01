"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const FOCUS_AREAS = [
  { name: "Arrays",         count: "8"  },
  { name: "Strings",        count: "6"  },
  { name: "Hashing",        count: "4"  },
  { name: "Sliding Window", count: "3"  },
  { name: "Two Pointers",   count: "2"  },
];

const FOCUS_DESCRIPTIONS: Record<string, string> = {
  Arrays:           "Foundation of most interview problems. Focus on in-place operations, prefix sums, and index manipulation.",
  Strings:          "Covering anagrams, palindromes, substring search, and character frequency problems.",
  Hashing:          "Using maps and sets to reduce O(n²) problems down to O(n) with trade-off analysis.",
  "Sliding Window": "Variable and fixed window patterns for subarray/substring problems without nested loops.",
  "Two Pointers":   "Left-right convergence and fast-slow pointer patterns on sorted arrays and linked lists.",
};

const stats = [
  { title: "Problems Solved", value: "23",      subtitle: "on LeetCode — growing daily" },
  { title: "Practice Style",  value: "Pattern", subtitle: "Depth over volume" },
  { title: "Code Quality",    value: "Clean",   subtitle: "Readable & tested" },
];

export default function ProblemSolving() {
  const [activeFocus, setActiveFocus] = useState("Arrays");

  return (
    <section id="leetcode" className="py-32 bg-black text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">Algorithms & patterns</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">DSA & Problem Solving</h2>
          <p className="max-w-xl text-white/55 leading-relaxed text-[15px]">
            Structured problem-solving with focus on core patterns — not random grinding.
            Every problem is an exercise in clarity and systems thinking.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid gap-5 md:grid-cols-3 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-white/10 rounded-2xl p-6 bg-[#0B0D0F]"
            >
              <p className="text-xs uppercase tracking-widest text-white/35 mb-4">{s.title}</p>
              <p className="text-3xl font-bold text-violet-400">{s.value}</p>
              <p className="mt-1.5 text-sm text-white/40">{s.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-white/10 rounded-2xl bg-[#0B0D0F] p-6 md:p-8 mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/35 mb-5">Focus Areas</p>

          <div className="flex flex-wrap gap-2 mb-7">
            {FOCUS_AREAS.map((item) => {
              const isActive = activeFocus === item.name;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => setActiveFocus(item.name)}
                  whileTap={{ scale: 0.96 }}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-200 border flex items-center gap-2
                    ${isActive
                      ? "border-violet-500/50 bg-violet-500/15 text-violet-300"
                      : "border-white/10 bg-white/[0.03] text-white/50 hover:text-white hover:border-white/20"
                    }
                  `}
                >
                  {item.name}
                  <span className={`text-xs ${isActive ? "text-violet-400" : "text-white/25"}`}>
                    {item.count}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={activeFocus}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border-l-2 border-violet-500/40 pl-4"
          >
            <p className="text-sm text-violet-300 font-medium mb-1">{activeFocus}</p>
            <p className="text-sm text-white/55 leading-relaxed">{FOCUS_DESCRIPTIONS[activeFocus]}</p>
          </motion.div>
        </motion.div>

        {/* Approach steps */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid md:grid-cols-3 gap-4 mb-14"
        >
          {[
            { step: "01", label: "Understand",    desc: "Read carefully, trace examples by hand before touching code." },
            { step: "02", label: "Pattern match", desc: "Identify which technique applies — sliding window, hash map, etc." },
            { step: "03", label: "Clean up",      desc: "Refactor for readability, add comments, test edge cases." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start border border-white/8 rounded-xl p-4 bg-[#0B0D0F]">
              <span className="text-xs font-mono text-violet-500/60 mt-0.5 shrink-0">{item.step}</span>
              <div>
                <p className="text-sm font-medium text-white mb-1">{item.label}</p>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://leetcode.com/u/AruncodeXT/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              bg-violet-500 hover:bg-violet-400 active:scale-95
              text-black font-semibold text-sm
              px-6 py-3 rounded-lg
              transition-all duration-200
              shadow-lg shadow-violet-500/20
            "
          >
            <ExternalLink size={15} />
            View LeetCode Profile
          </a>

          <a
            href="https://github.com/ArunCodeXT/dsa-practice"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              border border-white/15 hover:border-violet-400/50
              text-white/60 hover:text-violet-300
              px-6 py-3 rounded-lg text-sm font-medium
              transition-all duration-200
            "
          >
            <Github size={15} />
            DSA on GitHub →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
