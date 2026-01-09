"use client";
import Link from "next/link";


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ParallaxBackground from "@/components/ParallaxBG";
import CursorGlow from "@/components/CursorGlow";
import {
  SiPython,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiOpenai,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { useEffect, useState } from "react";
import Section from "@/components/Section";

const projects = [
  {
    title: "Retail Inventory AI",
    desc: "RAG-based system to optimize stock decisions using LLM agents.",
    tech: "Python · RAG · FastAPI",
  },
  {
    title: "AI Support Chatbot",
    desc: "Context-aware chatbot using vector search and latency optimization.",
    tech: "LLMs · Vector DB · Docker",
  },
  {
    title: "Agentic Automation",
    desc: "Multi-agent workflow for task planning and execution.",
    tech: "Agents · Tools · APIs",
  },
];

export default function Home() {
  const [openResume, setOpenResume] = useState(false);


  function ResumeParallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="max-w-6xl w-full px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden border border-white/10 
                   bg-white/5 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
      >
        <iframe
          src="/resume/Arun_Kumar_Resume.pdf"
          className="w-full h-[85vh]"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center mt-10"
      >
        <a
          href="/resume/Arun_Kumar_Resume.pdf"
          download
          className="px-10 py-4 rounded-2xl bg-white text-black font-medium
                     hover:-translate-y-1 transition
                     hover:shadow-[0_20px_60px_rgba(255,255,255,0.35)]"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
}

  /* ✅ ALL HOOKS AT TOP (FIXED) */
  const [mounted, setMounted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowWelcome(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
      <motion.main
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="min-h-screen bg-black text-white overflow-hidden"
>

      <ParallaxBackground />
<CursorGlow />
      {/* LOADER */}
      {showWelcome && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black">
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full bg-white animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* NAVBAR */}
      

<motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
>
  <div className="flex gap-8 bg-white/10 backdrop-blur-xl px-10 py-4 rounded-full 
    border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
    {["Home", "About", "Skills", "Projects", "LeetCode", "Resume", "Contacts"]
.map((item) => (
      <motion.button
        key={item}
        whileHover={{ y: -3, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() =>
          document
            .getElementById(item.toLowerCase())
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="text-sm tracking-wide text-gray-300 hover:text-white"
      >
        {item}
      </motion.button>
    ))}
  </div>
</motion.nav>


      {/* HERO */}
<section
  id="home"
  className="h-screen flex items-center justify-center bg-black relative overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

  <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-6xl px-8">
    
    {/* LEFT TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: showWelcome ? 0 : 1, x: showWelcome ? -80 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <p className="text-gray-400 mb-4 tracking-wide">Hi There!</p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        I am{" "}
        <span className="text-white">Arun Kumar</span>
      </h1>

      <p className="mt-4 text-gray-400 max-w-md">
        I make complex AI systems simple — RAG pipelines, agents,
        scalable backends, and clean architecture.
      </p>

      <motion.button
        whileHover={{ scale: 1.1, y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-8 bg-white text-black px-8 py-3 rounded-xl 
                   hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)]"
      >
        Contact Me
      </motion.button>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: showWelcome ? 0 : 1, x: showWelcome ? 80 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-3xl bg-white/5 blur-2xl" />
      <img
        src="/hero.png"   // 👉 put image in /public/hero.png
        alt="Hero"
        className="relative rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
      />
    </motion.div>

  </div>
</section>

      {/* ABOUT / RESUME SECTION */}
<section
  id="about"
  className="relative min-h-screen bg-black flex items-center overflow-hidden"
>
  {/* PARALLAX BACKGROUND GLOW */}
  <motion.div
    aria-hidden
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    className="absolute inset-0 bg-gradient-to-br 
               from-white/5 via-transparent to-white/5"
  />

  <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
    
    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-white/10 blur-2xl rounded-3xl" />
      <img
        src="/images/resume.jpg"
        alt="Arun Kumar"
        className="relative rounded-3xl object-cover 
                   shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
      />
    </motion.div>

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <span className="text-sm uppercase tracking-widest text-gray-400">
        Resume
      </span>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        I’m <span className="text-white">Arun Kumar</span>  
        <br />
        <span className="text-gray-400 text-3xl md:text-4xl">
          AI Engineer & Backend Builder
        </span>
      </h2>

      <p className="text-gray-400 leading-relaxed max-w-xl">
        I design and build real-world AI systems using Python, RAG pipelines,
        LLM agents, and scalable backend architectures.  
        My focus is performance, clarity, and production-ready systems.
      </p>

      <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
        <div>
          <span className="block text-white font-medium">Location</span>
          India
        </div>
        <div>
          <span className="block text-white font-medium">Availability</span>
          Open to roles
        </div>
        <div>
          <span className="block text-white font-medium">Focus</span>
          AI · RAG · Agents
        </div>
        <div>
          <span className="block text-white font-medium">Experience</span>
          Projects & Practice
        </div>
      </div>

      <motion.a
  whileHover={{ y: -6, scale: 1.03 }}
  href="/resume/Arun_Kumar_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 mt-6 px-8 py-3 rounded-xl 
             bg-white text-black font-medium
             hover:shadow-[0_20px_60px_rgba(255,255,255,0.35)]
             transition"
>
  View Resume
</motion.a>

    </motion.div>
  </div>
</section>


      {/* SKILLS */}
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Python", icon: <SiPython size={34} /> },
            { name: "DSA", icon: <BsCodeSlash size={34} /> },
            { name: "RAG / LLMs", icon: <SiOpenai size={34} /> },
            { name: "FastAPI", icon: <SiFastapi size={34} /> },
            { name: "Vector DBs", icon: <FaDatabase size={34} /> },
            { name: "Docker", icon: <SiDocker size={34} /> },
            { name: "SQL", icon: <SiPostgresql size={34} /> },
          ].map((s) => (
            <div
              key={s.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              {s.icon}
              <p className="mt-2 text-gray-300">{s.name}</p>
            </div>
          ))}
        </div>
        </Section>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{p.desc}</p>
              <span className="text-xs text-gray-500">{p.tech}</span>
            </div>
          ))}
        </div>
        </Section>
      </section>

      {/* LEETCODE */}
<section
  id="leetcode"
  className="min-h-screen flex items-center justify-center bg-black"
>
  <Section>
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-center max-w-xl px-6"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-4xl font-bold mb-4"
    >
      Problem Solving
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-gray-400 mb-8"
    >
      10+ LeetCode problems · Daily DSA practice
    </motion.p>

    <motion.a
      whileHover={{ y: -6, scale: 1.05 }}
      href="https://leetcode.com/"
      target="_blank"
      className="inline-block bg-white text-black px-8 py-3 rounded-xl
                 hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)]
                 transition"
    >
      View My LeetCode
    </motion.a>
  </motion.div>
  </Section>
</section>


{/* RESUME SNAPSHOT */}
<section className="min-h-screen bg-black flex items-center justify-center">
  <div className="max-w-3xl w-full px-6 text-center">

    <h2 className="text-4xl font-bold mb-6">Resume</h2>

    <p className="text-xl font-medium mb-2">
      Arun Kumar A
    </p>

    <p className="text-gray-400 mb-6">
      Final-year B.Tech · AI & Data Science
    </p>

    <p className="text-gray-500 max-w-xl mx-auto mb-10">
      Focused on Python, DSA, and building real-world AI systems using
      ML, LLMs, and modern backend technologies.
    </p>

    <a
      href="/resume"
      className="inline-block px-10 py-4 rounded-xl
                 bg-white text-black font-medium
                 hover:-translate-y-1 transition"
    >
      View Full Resume →
    </a>

  </div>
</section>






      {/* CONTACT */}
<section
  id="contact"
  className="min-h-screen flex items-center justify-center bg-black"
>
  <Section>
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-center px-6"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-4xl font-bold mb-4"
    >
      Let’s Work Together
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-gray-400 mb-10 max-w-md mx-auto"
    >
      Open to internships, full-time roles, and freelance opportunities.
    </motion.p>

    <motion.a
      whileHover={{ y: -8, scale: 1.08 }}
      href="mailto:arunkumar.off210@gmail.com"
      className="bg-white text-black px-10 py-4 rounded-2xl font-medium
                 hover:shadow-[0_25px_80px_rgba(255,255,255,0.3)]
                 transition"
    >
      Email Me
    </motion.a>
  </motion.div>
  </Section>
</section>


      {/* FOOTER */}
<footer className="border-t border-white/10 py-10 bg-black">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center text-gray-400 text-sm"
  >
    © {new Date().getFullYear()} Arun Kumar. All rights reserved.
  </motion.div>
</footer>

    </motion.main>
  );
}
