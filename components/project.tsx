"use client";

import { projectsData } from "@/lib/data";
import { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  category,
  year,
  description,
  tags,
  highlights,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.985, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.article
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      whileHover={{ y: -6 }}
      className="glass-panel group overflow-hidden rounded-[2rem] transition-transform duration-300"
    >
      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:bg-white/10 dark:text-white/70">
              {category}
            </span>
            <span className="text-sm font-medium text-slate-500 dark:text-white/45">
              {year}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            {title}
          </h3>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-white/70">
            {description}
          </p>

          <ul className="mt-6 grid gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-white/70"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                className="rounded-full border border-black/10 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(232,143,61,0.2),rgba(125,211,198,0.2))] blur-2xl"
            whileHover={{ scale: 1.05 }}
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-[var(--surface-strong)] p-3 dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)]">
            <motion.div
              whileHover={{ scale: 1.035, y: -4 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              <Image
                src={imageUrl}
                alt={`${title} preview`}
                quality={95}
                className="h-auto w-full rounded-[1.1rem] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
