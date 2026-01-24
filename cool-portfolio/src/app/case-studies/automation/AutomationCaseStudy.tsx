"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Python Automation Tool Case Study | Arun Kumar A",
  description:
    "A Python automation tool that eliminates repetitive tasks through clean, modular scripts.",
  openGraph: {
    title: "Python Automation Tool – Case Study",
    description: "Automating real-world workflows using Python scripts.",
    url: "https://your-domain.vercel.app/case-studies/automation",
    siteName: "Arun Kumar A Portfolio",
    images: [{ url: "/og/automation.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Automation Tool – Case Study",
    description: "Reducing manual effort with Python-based automation.",
    images: ["/og/automation.png"],
  },
};

export default function AutomationCaseStudy() {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toString()
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-black text-white">
      <ReadingProgress />

      {/* HERO */}
      <section className="pt-48 pb-40 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-sm uppercase tracking-widest text-emerald-400/70">
            Case Study · Automation
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Python Automation Tool
          </h1>

          <p className="text-[17px] leading-relaxed text-gray-400 max-w-3xl mx-auto">
            A Python-based automation tool designed to eliminate repetitive
            manual tasks by automating file handling, data processing, and
            routine workflows using clean, modular scripts.
          </p>

          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://github.com/ArunCodeXT/python-automation-tools"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-emerald-400/70 text-black font-medium hover:bg-emerald-300 transition"
            >
              View GitHub
            </a>
            <span className="px-6 py-3 rounded-xl border border-emerald-400/70 text-emerald-300/70">
              Demo (Coming Soon)
            </span>
          </div>
        </div>
      </section>

      <Section title="Problem Statement">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          Many everyday tasks such as file organization, data cleanup, and
          repetitive processing are still performed manually. This leads to
          wasted time, inconsistent results, and a higher chance of human
          error.
        </p>
      </Section>

      <Divider />

      <Section title="Why It Matters">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          Automation is a critical skill for software and AI engineers.
          Efficient automation saves time, reduces errors, and allows engineers
          to focus on higher-value work.
        </p>
      </Section>

      <Divider />

      <Section title="System Architecture">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          The automation tool follows a simple and extensible pipeline that
          separates configuration, processing logic, and output generation.
        </p>

      

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="border border-emerald-400/20 rounded-2xl bg-emerald-400/5 p-8 text-center">
            <p className="text-gray-400 mb-4">
              High-level automation workflow
            </p>
            <div className="border border-dashed border-emerald-400/30 rounded-xl py-20 text-emerald-300/60">
              Automation Flow Diagram Placeholder
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      <Section title="Technical Approach">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Python scripts handle file I/O and data processing</li>
          <li>• Configurable parameters enable reuse across workflows</li>
          <li>• Error handling ensures stability</li>
          <li>• Logging provides execution visibility</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Tech Stack">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Python — scripting and automation</li>
          <li>• Standard libraries (os, shutil, csv, json, datetime)</li>
          <li>• Git & GitHub — version control</li>
          <li>• Modular project structure</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Challenges & Tradeoffs">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Handling file-system edge cases</li>
          <li>• Designing reusable scripts</li>
          <li>• Managing unexpected input formats</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Results & Learnings">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Successfully automated workflows</li>
          <li>• Reduced manual effort</li>
          <li>• Improved efficiency</li>
          <li>• Strengthened system thinking</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Future Improvements">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Add a simple UI</li>
          <li>• Schedule recurring tasks</li>
          <li>• Integrate notifications</li>
          <li>• Extend workflows</li>
          <li>• AI-powered automation</li>
        </ul>
      </Section>

      <section className="py-32 text-center text-emerald-300/60">
        Built with simplicity, reliability, and productivity in mind.
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-28"
    >
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-400/70">
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}

function Divider() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent my-24" />
    </div>
  );
}



function ReadingProgress() {
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50">
      <div
        className="h-full bg-emerald-400/70 origin-left"
        style={{ transform: "scaleX(var(--scroll-progress))" }}
      />
    </div>
  );
}
