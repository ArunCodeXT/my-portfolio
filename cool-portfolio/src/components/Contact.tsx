"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0B0D0F]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Contact
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-green">
            Let’s work together
          </h2>

          <p className="mt-6 text-white/60 max-w-md mx-auto leading-relaxed">
            Open to impactful internships, full-time roles, and collaborations.
          </p>

          {/* LINKS */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactLink
              href="mailto:your.email@gmail.com"
              icon={<Mail size={18} />}
              label="Email"
            />

            <ContactLink
              href="https://www.linkedin.com/in/your-profile"
              icon={<Linkedin size={18} />}
              label="LinkedIn"
            />

            <ContactLink
              href="https://github.com/ArunCodeXT"
              icon={<Github size={18} />}
              label="GitHub"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Link ---------- */

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex items-center gap-3
        text-white/60 hover:text-white
        transition-colors"
    >
      <span className="text-white/40 group-hover:text-emerald-400 transition-colors">
        {icon}
      </span>
      <span className="text-sm tracking-wide">{label}</span>
    </motion.a>
  );
}
