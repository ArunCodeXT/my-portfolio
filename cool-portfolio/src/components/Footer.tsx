"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0B0D0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent mb-12" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm"
        >
          {/* Left */}
          <span className="text-white/50">
            © {new Date().getFullYear()} Arun Kumar A
          </span>

          {/* Center */}
          <span className="text-white/40">
            Built with clarity, discipline, and intent.
          </span>

          {/* Right */}
          <span className="text-white/40">
            AI • Systems • Problem Solving
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
<button
  onClick={() => {
    const html = document.documentElement;
    html.dataset.theme =
      html.dataset.theme === "purple" ? "green" : "purple";
  }}
  className="text-sm px-4 py-2 border border-white/20 rounded-full"
>
  Switch Theme
</button>
