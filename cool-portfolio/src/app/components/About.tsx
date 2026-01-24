"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-black"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[420px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/profile.png"
            alt="Arun Kumar A"
            fill
            className="object-cover grayscale-[20%]"
            priority
          />
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-widest text-emerald-400">
            Who am I?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            I&apos;m Arun Kumar A, an AI Engineer in progress building
            real-world GenAI systems.
          </h2>

          <p className="text-white/70 leading-relaxed">
            I am a final-year B.Tech AI student focused on building
            production-oriented AI systems rather than demos. My interests
            include Generative AI, Retrieval-Augmented Generation (RAG),
            and AI Agents, backed by strong Python and problem-solving skills.
          </p>

          {/* DETAILS */}
          <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
            <div>
              <span className="text-white/50">Name:</span> Arun Kumar A
            </div>
            <div>
              <span className="text-white/50">Role:</span> AI Engineer (Student)
            </div>
            <div>
              <span className="text-white/50">Focus:</span> GenAI, RAG, Agents
            </div>
            <div>
              <span className="text-white/50">Location:</span> India
            </div>
          </div>

          {/* BUTTONS */}
<div className="mt-10 flex items-center gap-6">
  {/* PRIMARY BUTTON */}
  <a
    href="/Arun_Kumar_A_Resume.pdf"
    target="_blank"
    className="
      inline-block
      bg-emerald-500
      hover:bg-emerald-400
      text-black
      px-6 py-3
      rounded-md
      font-medium
      transition
      shadow-lg
      shadow-emerald-500/20
    "
  >
    Download Resume
  </a>

  {/* SECONDARY LINK */}
  <a
    href="#projects"
    className="
      inline-flex items-center
      text-emerald-400
      hover:text-emerald-300
      transition
      translate-y-[1px]
    "
  >
    View My Work →
  </a>
</div>

        </motion.div>
      </div>
    </section>
  );
}

