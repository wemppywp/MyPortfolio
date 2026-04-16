"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  const categories = [
    "All",
    ...Array.from(new Set(projectsData.map((project) => project.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 w-full scroll-mt-28 sm:mb-36"
    >
      <SectionHeading>Featured projects</SectionHeading>

      <motion.div
        className="mb-10 flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <p className="max-w-2xl text-center text-base leading-7 text-slate-600 dark:text-white/68">
          I enhanced this section by improving content structure and
          implementing category filters, allowing users to efficiently explore
          projects based on their specific interests.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeCategory === category
                  ? "border-transparent bg-[#101828] text-white dark:bg-white dark:text-slate-950"
                  : "border-black/10 bg-white/70 text-slate-600 hover:border-black/20 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white/65 dark:hover:text-white",
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="space-y-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {visibleProjects.map((project) => (
          <Project key={`${project.title}-${project.category}`} {...project} />
        ))}
      </motion.div>
    </section>
  );
}
