"use client";

import Link from "next/link";

export default function CaseStudyNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur bg-[#0B0D0F]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left */}
        <Link
          href="/"
          className="text-sm text-white/60 hover:text-emerald-400 transition"
        >
          ← Back to Home
        </Link>

        {/* Right */}
        <div className="flex gap-6 text-sm text-white/50">
          
        </div>
      </div>
    </nav>
  );
}
