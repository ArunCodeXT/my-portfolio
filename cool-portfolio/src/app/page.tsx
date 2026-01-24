"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProblemSolving from "@/components/ProblemSolving";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const roles = [
    "AI Engineer in Progress",
    "Building GenAI, RAG & AI Agents",
    "Solving real problems with code",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#0B0D0F] text-white"
    >
      {/* INTRO */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0D0F]">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-widest text-emerald-400"
          >
            . . .
          </motion.div>
        </div>
      )}

      <ClientOnly>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProblemSolving />
        <ExperienceTimeline />
        <GitHubSection />
        <Contact />
        <Footer />
      </ClientOnly>

      {/* FOOTER STRIP */}
      <footer className="py-10 text-center text-white/40">
        Arun Kumar A · Built with discipline and clarity · © 2026
      </footer>
    </motion.main>
  );
}
