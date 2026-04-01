"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "Python",
  "Generative AI",
  "RAG",
  "AI Agents",
  "LangChain",
  "Next.js",
];

const details = [
  { label: "Name",     value: "Arun Kumar A" },
  { label: "Role",     value: "AI Engineer" },
  { label: "Focus",    value: "GenAI, RAG, Agents" },
  { label: "Degree",   value: "B.Tech AI — Final Year" },
  { label: "Location", value: "India" },
  { label: "Status",   value: "Open to opportunities" },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-black px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* SECTION LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-12 text-center md:text-left"
        >
          About Me
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT — IMAGE: replace /profile.png with your real photo or a clean abstract */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-white/10"
          >
            <Image
              src="/profile.png"
              alt="Arun Kumar A"
              fill
              className="object-cover grayscale-[20%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-widest text-violet-400">
              Who am I?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              I&apos;m Arun Kumar A —{" "}
              <span className="text-violet-400">AI Engineer</span> building
              real-world GenAI systems.
            </h2>

            <p className="text-white/70 leading-relaxed text-[15px]">
              Final-year B.Tech AI student focused on production-oriented AI
              systems — not just demos. I specialize in Generative AI,
              Retrieval-Augmented Generation (RAG), and AI Agents, with strong
              Python and problem-solving fundamentals.
            </p>

            {/* SKILL BADGES */}
            <div className="flex flex-wrap gap-2 pt-1">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* DETAILS GRID */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm pt-2 border-t border-white/10">
              {details.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-white/40 text-xs uppercase tracking-wider">
                    {label}
                  </span>
                  <span className="text-violet-400 font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="pt-2 flex items-center gap-6">
              <a
                href="/Arun_Kumar_A_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  bg-violet-500 hover:bg-violet-400 active:scale-95
                  text-black px-6 py-3 rounded-md
                  font-semibold text-sm
                  transition-all duration-200
                  shadow-lg shadow-violet-500/20
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-violet-400 hover:text-violet-300 transition-colors duration-200 text-sm font-medium"
              >
                View My Work
                <span className="text-base leading-none">→</span>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
