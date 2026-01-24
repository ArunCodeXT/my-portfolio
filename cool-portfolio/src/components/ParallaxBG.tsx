"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);

  return (
    <>
      {/* FAR BACK LAYER */}
      <motion.div
        style={{ y: y2 }}
        className="fixed inset-0 -z-20
          bg-gradient-to-br
          from-violet-400/10
          via-transparent
          to-transparent"
      />

      {/* MID BACK LAYER */}
      <motion.div
        style={{ y: y1 }}
        className="fixed inset-0 -z-10
          bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_60%)]"
      />
    </>
  );
}
