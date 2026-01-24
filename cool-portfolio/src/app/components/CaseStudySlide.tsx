"use client";

import { motion } from "framer-motion";

export default function CaseStudySlide({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center py-32 px-6 bg-[#0B0D0F]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-white">
          {title}
        </h2>
        <div className="text-white/70 text-lg">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
