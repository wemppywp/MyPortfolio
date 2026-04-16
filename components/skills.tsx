"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillGroupsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.35);

  return (
    <section
      className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-36"
      ref={ref}
      id="skills"
    >
      <SectionHeading>Core stack</SectionHeading>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skillGroupsData.map((group, index) => (
          <motion.article
            key={group.title}
            className="glass-panel group relative overflow-hidden rounded-[2rem] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: index * 0.04, duration: 0.45 }}
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-20 bg-[radial-gradient(circle,_rgba(232,143,61,0.12),_transparent_70%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle,_rgba(125,211,198,0.12),_transparent_70%)]" />
            <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <motion.li
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                  key={skill}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
