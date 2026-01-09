"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = ["intro", "about", "skills", "experience", "final"];

export default function ResumePage() {
  const [step, setStep] = useState(0);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        <FadeScene key={steps[step]}>
          {/* STEP 1 */}
          {steps[step] === "intro" && (
            <>
              <h1 className="text-5xl font-bold mb-4">Arun Kumar A</h1>
              <p className="text-gray-400 mb-12">
                AI Engineer · Final-year B.Tech (AI & DS)
              </p>
              <Next onClick={() => setStep(step + 1)} />
            </>
          )}

          {/* STEP 2 */}
          {steps[step] === "about" && (
            <>
              <h2 className="text-4xl font-semibold mb-6">About Me</h2>
              <p className="text-gray-400 max-w-xl text-center">
                I focus on building real-world AI systems using Python,
                ML, LLMs, and clean backend architecture.
              </p>
              <Next onClick={() => setStep(step + 1)} />
            </>
          )}

          {/* STEP 3 */}
          {steps[step] === "skills" && (
            <>
              <h2 className="text-4xl font-semibold mb-10">Core Skills</h2>
              <div className="space-y-4 w-full max-w-md">
                {[
                  "Python",
                  "DSA",
                  "SQL",
                  "Machine Learning",
                  "LLMs & RAG",
                  "FastAPI",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/10 rounded-full px-6 py-3 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <Next onClick={() => setStep(step + 1)} />
            </>
          )}

          {/* STEP 4 */}
          {steps[step] === "experience" && (
            <>
              <h2 className="text-4xl font-semibold mb-8">Experience</h2>
              <ul className="space-y-4 text-gray-400 text-center">
                <li>🎓 B.Tech AI & DS (Final Year)</li>
                <li>🧠 Internship — CSIR-CSIO</li>
                <li>🤖 AI systems, RAG & agents</li>
                <li>⚙️ Backend APIs & services</li>
              </ul>
              <Next onClick={() => setStep(step + 1)} />
            </>
          )}

          {/* FINAL */}
          {steps[step] === "final" && (
            <>
              <h2 className="text-4xl font-semibold mb-6">Resume</h2>
              <p className="text-gray-400 mb-10">
                View or download my complete resume.
              </p>

              <div className="flex gap-6">
                <a
                  href="/resume/Arun_Kumar_Resume.pdf"
                  target="_blank"
                  className="px-8 py-3 rounded-xl border border-white/20
                             hover:bg-white/10 transition"
                >
                  Preview Resume
                </a>

                <a
                  href="/resume/Arun_Kumar_Resume.pdf"
                  download
                  className="px-8 py-3 rounded-xl bg-white text-black
                             hover:-translate-y-1 transition"
                >
                  Download Resume
                </a>
              </div>

              <a
                href="/"
                className="mt-10 text-gray-400 hover:text-white transition"
              >
                ← Back Home
              </a>
            </>
          )}
        </FadeScene>
      </AnimatePresence>
    </main>
  );
}

/* Smooth Fade + Scale */
function FadeScene({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
    >
      {children}
    </motion.section>
  );
}

/* Next Button */
function Next({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-12 px-10 py-4 rounded-full bg-white text-black
                 hover:scale-105 transition"
    >
      Next →
    </button>
  );
}
