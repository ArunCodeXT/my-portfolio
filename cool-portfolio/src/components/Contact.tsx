"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

// ✏️ Replace with your real email address
const YOUR_EMAIL = "arunkumara@gmail.com";

export default function Contact() {
  const [name, setName]       = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `mailto:${YOUR_EMAIL}?subject=Opportunity for Arun Kumar A&body=Hi Arun,%0A%0A${encodeURIComponent(message)}%0A%0A— ${encodeURIComponent(name)}`;

  return (
    <section id="contact" className="py-32 bg-[#0B0D0F]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-violet-400">
            Let&apos;s work together
          </h2>
          <p className="mt-6 text-white/60 max-w-md mx-auto leading-relaxed">
            Open to impactful internships, full-time roles, and collaborations.
          </p>

          {/* Real email shown visibly */}
          <a
            href={`mailto:${YOUR_EMAIL}`}
            className="inline-flex items-center gap-2 mt-6 text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium"
          >
            <Mail size={15} />
            {YOUR_EMAIL}
          </a>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-white/10 rounded-2xl bg-black p-8 mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-white/30 mb-6">Send a message</p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                className="
                  w-full bg-white/5 border border-white/10 rounded-lg
                  px-4 py-3 text-sm text-white placeholder-white/20
                  focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07]
                  transition-all duration-200
                "
              />
            </div>

            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Hi Arun, I'd like to discuss..."
                className="
                  w-full bg-white/5 border border-white/10 rounded-lg
                  px-4 py-3 text-sm text-white placeholder-white/20
                  focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07]
                  transition-all duration-200 resize-none
                "
              />
            </div>

            <a
              href={mailtoLink}
              className="
                inline-flex items-center gap-2
                bg-violet-500 hover:bg-violet-400 active:scale-95
                text-black font-semibold text-sm
                px-6 py-3 rounded-lg
                transition-all duration-200
                shadow-lg shadow-violet-500/20
              "
            >
              <Send size={14} />
              Send Message
            </a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <ContactLink
            href={`mailto:${YOUR_EMAIL}`}
            icon={<Mail size={18} />}
            label={YOUR_EMAIL}
          />
          {/* ✏️ Replace with your real LinkedIn URL */}
          <ContactLink
            href="https://www.linkedin.com/in/arun-kumar-a"
            icon={<Linkedin size={18} />}
            label="LinkedIn"
          />
          <ContactLink
            href="https://github.com/ArunCodeXT"
            icon={<Github size={18} />}
            label="GitHub"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
    >
      <span className="text-white/40 group-hover:text-violet-400 transition-colors">{icon}</span>
      <span className="text-sm tracking-wide">{label}</span>
    </motion.a>
  );
}
