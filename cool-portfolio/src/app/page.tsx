"use client";

import {
  SiPython,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiOpenai,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [showWelcome, setShowWelcome] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setShowWelcome(false), 2600);
  return () => clearTimeout(timer);
}, []);

  const [showIntro, setShowIntro] = useState(true);

useEffect(() => {
  const t = setTimeout(() => setShowIntro(false), 1800);
  return () => clearTimeout(t);
}, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
    
{showWelcome && (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
  >
    <div className="flex gap-2">
      {"WELCOME".split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: i * 0.12,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-5xl md:text-6xl font-bold
                     bg-gradient-to-r from-white to-gray-400
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
        >
          {char}
        </motion.span>
      ))}
    </div>
  </motion.div>
)}


      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-6 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full 
border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          {["Home", "About", "Skills", "Projects", "LeetCode","Contacts"].map((item) => (
            <button
  onClick={() =>
    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className={`text-sm transition-all duration-300 cursor-pointer
  ${
    item === "Home"
      ? "text-black bg-white px-4 py-2 rounded-full shadow"
      : "text-gray-300 hover:text-white hover:-translate-y-0.5"
  }`}

>
  {item}
</button>

          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="h-screen flex items-center justify-center">
        <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: showWelcome ? 0 : 1, y: showWelcome ? 60 : 0 }}
  transition={{ duration: 1.1, ease: "easeOut" }}
  className="text-center px-6"
>

          <h1 className="text-6xl md:text-7xl font-bold flex justify-center gap-1">
  {"Hi, I’m Arun".split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</h1>


          <p className="mt-4 text-gray-400 text-lg">
            AI Engineer · Python · RAG · Agents
          </p>

          <p className="mt-6 max-w-xl mx-auto text-gray-500">
            I build real-world AI systems, intelligent agents, and scalable
            backends with clean architecture and modern design.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button className="bg-white text-black px-8 py-3 rounded-xl transition
  hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]">
  Hire Me
</button>

<button className="border border-white/20 px-8 py-3 rounded-xl transition
  hover:bg-white/10 hover:-translate-y-1">
  View Work
</button>

            
          </div>
        </motion.div>
      </section>
{/* ABOUT SECTION */}
<section id="about" className="min-h-screen flex items-center justify-center bg-black">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-2xl text-center px-6"
  >
    <h2 className="text-4xl font-bold mb-4">About Me</h2>
    <p className="text-gray-400 leading-relaxed">
      I’m an AI Engineer focused on building real-world systems using
      Python, RAG pipelines, LLM agents, and scalable backend services.
      I care deeply about clean architecture and smooth user experience.
    </p>
  </motion.div>
</section>
{/* SKILLS SECTION */}
<section
  id="skills"
  className="min-h-screen bg-black flex items-center justify-center"
>
  <div className="max-w-5xl w-full px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-12"
    >
      Skills
    </motion.h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { name: "Python", icon: <SiPython size={34} /> },
        { name: "DSA", icon: <BsCodeSlash size={34} /> },
        { name: "RAG / LLMs", icon: <SiOpenai size={34} /> },
        { name: "FastAPI", icon: <SiFastapi size={34} /> },
        { name: "Vector DBs", icon: <FaDatabase size={34} /> },
        { name: "Docker", icon: <SiDocker size={34} /> },
        { name: "SQL", icon: <SiPostgresql size={34} /> },
      ].map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, scale: 1.05 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 
                     backdrop-blur-xl flex flex-col items-center gap-4
                     hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]
                     transition"
        >
          <div className="text-white">{skill.icon}</div>
          <span className="text-sm text-gray-300">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* PROJECTS SECTION */}
<section id="projects" className="min-h-screen bg-black flex items-center justify-center">
  <div className="max-w-6xl w-full px-6">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center mb-12"
    >
      Projects
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 
                     backdrop-blur-xl transition shadow-[0_0_0_rgba(0,0,0,0)] 
                     hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
          <span className="text-xs text-gray-500">{p.tech}</span>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* LEETCODE SECTION */}
<section id="leetcode" className="min-h-screen bg-black flex items-center justify-center">
  <div className="max-w-4xl w-full px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-6"
    >
      Problem Solving
    </motion.h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
      I consistently practice Data Structures & Algorithms on LeetCode,
      focusing on writing clean, optimized solutions and building strong
      problem-solving intuition.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { label: "Problems Solved", value: "10+" },
        { label: "Strong Areas", value: "Arrays · Strings · Two Pointers" },
        { label: "Daily Practice", value: "Yes" },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold mb-2">{item.value}</h3>
          <p className="text-gray-400 text-sm">{item.label}</p>
        </motion.div>
      ))}
    </div>

    <a
      href="https://leetcode.com/"
      target="_blank"
      className="inline-block mt-10 px-8 py-3 rounded-xl 
                 bg-white text-black hover:-translate-y-1 transition"
    >
      View My LeetCode
    </a>
  </div>
</section>
{/* CONTACT SECTION */}
<section
  id="contact"
  className="min-h-screen bg-black flex items-center justify-center"
>
  <div className="max-w-3xl w-full px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-6"
    >
      Let’s Work Together
    </motion.h2>

    <p className="text-gray-400 max-w-xl mx-auto mb-10">
      I’m open to internships, full-time roles, and freelance opportunities.
      If you have an idea or role in mind, let’s talk.
    </p>

    <div className="flex flex-col md:flex-row gap-6 justify-center">
      <motion.a
        whileHover={{ y: -6 }}
        href="mailto:arunkumar.off210@gmail.com"
        className="bg-white text-black px-10 py-4 rounded-2xl font-medium
                   hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)]
                   transition"
      >
        Email Me
      </motion.a>

      <motion.a
        whileHover={{ y: -6 }}
        href="www.linkedin.com/in/arun-kumar-a-06290b385/"
        target="_blank"
        className="border border-white/20 px-10 py-4 rounded-2xl
                   hover:bg-white/10 transition"
      >
        LinkedIn
      </motion.a>
    </div>
  </div>
</section>
{/* FOOTER */}
<footer className="bg-black border-t border-white/10 py-8">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row 
                  items-center justify-between gap-6 text-sm text-gray-400">
    
    <span>© {new Date().getFullYear()} Arun Kumar. All rights reserved.</span>

    <div className="flex gap-6">
      <a
        href="https://github.com/ArunCodeXT/"
        target="_blank"
        className="hover:text-white transition"
      >
        GitHub
      </a>
      <a
        href="www.linkedin.com/in/arun-kumar-a-06290b385/"
        target="_blank"
        className="hover:text-white transition"
      >
        Email
      </a>
      <a
        href="arunkumar.off210@gmail.com"
        target="_blank"
        className="hover:text-white transition"
      >
        Email
      </a>
    </div>
  </div>
</footer>

    </main>
  );
}
