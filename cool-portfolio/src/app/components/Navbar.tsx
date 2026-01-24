"use client";

import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Leetcode", href: "#leetcode"},
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div
        className="
          flex items-center gap-2 px-3 py-2
          bg-black/70 backdrop-blur-xl
          border border-white/10 rounded-full
          shadow-lg shadow-black/40
        "
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className={`px-4 py-2 rounded-full text-sm transition-all
              ${
                active === link.name
                  ? "bg-violet-400/80 text-black"
                  : "text-gray-300 hover:text-violet-400 hover:bg-white/5"
              }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
