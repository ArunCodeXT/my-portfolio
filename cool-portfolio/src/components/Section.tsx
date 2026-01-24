"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-28 bg-black"
    >
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-semibold tracking-tight text-center md:text-left
                         text-white">
            <span className="text-emerald-400">{title}</span>
          </h2>
        )}
        <div className="text-white/70">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
