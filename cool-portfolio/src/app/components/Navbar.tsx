"use client";

import { useState, useEffect } from "react";

const links = [
  { name: "Home",     href: "#home",     id: "home" },
  { name: "About",    href: "#about",    id: "about" },
  { name: "Skills",   href: "#skills",   id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "DSA",      href: "#leetcode", id: "leetcode" },
  { name: "Contact",  href: "#contact",  id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    // Scroll-aware active detection via IntersectionObserver
    const observers: IntersectionObserver[] = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2 w-full max-w-2xl px-4">
      <div className={`
        flex items-center justify-center gap-1 px-3 py-2 rounded-full border
        transition-all duration-300
        ${scrolled
          ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-xl shadow-black/40"
          : "bg-black/40 backdrop-blur-md border-white/5"}
      `}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`
              px-3.5 py-1.5 rounded-full text-xs font-medium
              transition-all duration-200 whitespace-nowrap
              ${active === link.id
                ? "bg-violet-500 text-black shadow-md shadow-violet-500/30"
                : "text-white/50 hover:text-white hover:bg-white/5"}
            `}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
