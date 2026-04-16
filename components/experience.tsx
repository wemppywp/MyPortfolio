"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.35);

  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-36">
      <SectionHeading>Experience</SectionHeading>

      <motion.div
        className="relative grid gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <div className="absolute left-[1.45rem] top-5 hidden h-[calc(100%-2.5rem)] w-px bg-black/10 md:block dark:bg-white/10" />

        {experiencesData.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.date}`}
            className="group relative grid gap-4 rounded-[2rem] border border-black/10 bg-white/72 p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.5)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 md:grid-cols-[auto_1fr]"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: index * 0.04, duration: 0.45 }}
          >
            <div className="pointer-events-none absolute inset-x-16 top-0 h-20 bg-[radial-gradient(circle,_rgba(232,143,61,0.12),_transparent_70%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle,_rgba(125,211,198,0.12),_transparent_70%)]" />
            <motion.div
              whileHover={{ rotate: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#101828] text-lg text-white dark:bg-white dark:text-slate-950"
            >
              {item.icon}
            </motion.div>

            <div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-white/45">
                    {item.location}
                  </p>
                </div>
                <span className="w-fit rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:bg-white/10 dark:text-white/70">
                  {item.date}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/72 sm:text-base">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
