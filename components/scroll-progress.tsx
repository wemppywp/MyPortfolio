"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-[linear-gradient(90deg,#e88f3d,#f4d9b2)] shadow-[0_8px_30px_-10px_rgba(232,143,61,0.9)] dark:bg-[linear-gradient(90deg,#7dd3c6,#b5efe6)] dark:shadow-[0_8px_30px_-10px_rgba(125,211,198,0.8)]"
      style={{ scaleX }}
    />
  );
}
