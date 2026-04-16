"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="mb-12 mt-10 flex w-full max-w-5xl items-center gap-4 px-4 sm:mb-14 sm:mt-12"
      initial={false}
    >
      <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
      <span className="rounded-full border border-black/10 bg-white/60 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/50">
        Selected work
      </span>
      <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
    </motion.div>
  );
}
