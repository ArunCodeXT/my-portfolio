"use client";
import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="
        pointer-events-none fixed z-50
        w-[400px] h-[400px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-violet-500/15
        blur-[120px]
      "
    />
  );
}
