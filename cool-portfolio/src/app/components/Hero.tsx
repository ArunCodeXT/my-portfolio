"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Building", value: "3" },
  { label: "Focus Area",        value: "GenAI" },
  { label: "Status",            value: "Open to Work" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">

      {/* Right image — replace /hero.jpg with your real photo */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 pointer-events-none">
        <Image src="/hero.jpg" alt="Hero" fill priority className="object-cover grayscale opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex items-center">
        <div className="md:w-1/2 space-y-8">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-violet-300 tracking-wide font-medium">Available for opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white"
          >
            Arun<br />
            <span className="text-violet-400">Kumar A</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium"
          >
            AI Engineer · GenAI · RAG · Agents
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 max-w-md leading-relaxed text-[15px]"
          >
            I&apos;m Arun Kumar A — an AI Engineer building real-world GenAI systems
            that solve problems with real social impact. SafeHer AI, WealthPilot,
            ClearMind — not just demos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#contact"
              className="
                inline-flex items-center gap-2
                bg-violet-500 hover:bg-violet-400 active:scale-95
                text-black px-6 py-3 rounded-lg
                font-semibold text-sm transition-all duration-200
                shadow-lg shadow-violet-500/25
              "
            >
              Let&apos;s Talk
            </a>
            <a
              href="/Arun_Kumar_A_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                border border-white/20 hover:border-violet-400/50
                text-white/70 hover:text-violet-300
                px-6 py-3 rounded-lg text-sm font-medium
                transition-all duration-200
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-8 pt-4 border-t border-white/10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-white font-semibold text-lg">{s.value}</p>
                <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>

    </section>
  );
}
