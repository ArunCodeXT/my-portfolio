"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black">

      {/* RIGHT IMAGE */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover grayscale opacity-60"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-violet-400 text-sm tracking-wide">
            Hi there!
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            I am <span className="text-white">Arun Kumar</span>
          </h1>

          <p className="text-white/70 max-w-md">
            AI Engineer in progress — building GenAI systems,
            RAG pipelines, and intelligent agents that solve
            real-world problems.
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-2
                       bg-violet-500 hover:bg-violet-400
                       text-black px-6 py-3 rounded-xl
                       font-medium transition"
          >
            Let’s Talk
          </a>

        </motion.div>
      </div>
    </section>
  );
}
