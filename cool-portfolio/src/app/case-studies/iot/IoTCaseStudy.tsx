"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "IoT Traffic Management Case Study | Arun Kumar A",
  description:
    "An IoT-based smart traffic system using real-time automation to optimize signal timing.",
  openGraph: {
    title: "IoT Traffic Management – Case Study",
    description: "Real-time traffic optimization using IoT and automation logic.",
    url: "https://your-domain.vercel.app/case-studies/iot",
    siteName: "Arun Kumar A Portfolio",
    images: [{ url: "/og/iot.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Traffic Management – Case Study",
    description: "Smart traffic automation using IoT and Python.",
    images: ["/og/iot.png"],
  },
};

export default function IoTCaseStudy() {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        (scrollTop / docHeight).toString()
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
            Case Study · IoT & Automation
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            IoT-Based Smart Traffic Management System
          </h1>

          <p className="text-[17px] leading-relaxed text-gray-400 max-w-3xl mx-auto">
            An IoT-based system that monitors real-time traffic density and
            dynamically optimizes traffic signal timing using rule-based
            automation to reduce congestion and manual intervention.
          </p>

          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://github.com/ArunCodeXT/iot-traffic-management-system"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-emerald-400/70 text-black font-medium hover:bg-emerald-300 transition"
            >
              View GitHub
            </a>
            <span className="px-6 py-3 rounded-xl border border-emerald-400/70 text-emerald-300/70">
              Project Demo (Coming Soon)
            </span>
          </div>
        </div>
      </section>

      <Section title="Problem Statement">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          Conventional traffic signal systems rely on fixed timing or manual
          control and fail to adapt to real-time traffic conditions. This leads
          to unnecessary congestion, inefficient signal usage, and increased
          waiting times.
        </p>
      </Section>

      <Divider />

      <Section title="Why It Matters">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          Traffic congestion directly impacts emergency response times, fuel
          consumption, air pollution, and overall urban productivity. This
          project demonstrates how IoT and automation can optimize traffic flow
          without expensive infrastructure upgrades.
        </p>
      </Section>

      <Divider />

      <Section title="System Architecture">
        <p className="mt-6 text-[17px] leading-relaxed text-white max-w-3xl">
          The system follows a clear input-to-output pipeline that separates
          data collection, decision logic, and signal control.
        </p>


        <div className="mt-12 max-w-3xl mx-auto">
          <div className="border border-emerald-400/20 rounded-2xl bg-emerald-400/5 p-8 text-center">
            <p className="text-gray-400 mb-4">
              High-level traffic control pipeline
            </p>
            <div className="border border-dashed border-emerald-400/30 rounded-xl py-20 text-emerald-300/60">
              System Architecture Diagram Placeholder
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      <Section title="Technical Approach">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Traffic density is continuously monitored</li>
          <li>• Threshold-based rules classify congestion</li>
          <li>• Signal timing is adjusted dynamically</li>
          <li>• Priority logic handles high-traffic scenarios</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Tech Stack">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Python — automation logic</li>
          <li>• IoT concepts — sensor modeling</li>
          <li>• Modular system design</li>
          <li>• Git & GitHub</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Challenges & Tradeoffs">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Simulating realistic traffic</li>
          <li>• Designing stable automation rules</li>
          <li>• Handling sudden traffic spikes</li>
          <li>• Balancing speed and stability</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Results & Learnings">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Automated signal decision-making</li>
          <li>• Reduced manual intervention</li>
          <li>• Improved real-time system understanding</li>
          <li>• Stronger system design thinking</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Future Improvements">
        <ul className="mt-6 space-y-4 text-white leading-relaxed max-w-3xl">
          <li>• Live sensor & camera integration</li>
          <li>• ML-based adaptive signals</li>
          <li>• Multi-junction coordination</li>
          <li>• Monitoring dashboard</li>
          <li>• City-scale optimization</li>
        </ul>
      </Section>

      <section className="py-32 text-center text-emerald-300/60">
        Built with automation, reliability, and real-world impact in mind.
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function Section({
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
