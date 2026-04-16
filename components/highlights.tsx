"use client";

import { heroStats, spotlightCards } from "@/lib/data";
import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <section className="mb-24 w-full max-w-6xl px-4 sm:mb-32">
      <div className="grid gap-3 lg:grid-cols-[1.08fr_1.92fr]">
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-[2rem] border border-black/10 bg-white px-5 py-5 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.55)] backdrop-blur sm:px-6 sm:py-6 dark:border-white/10 dark:bg-white/5"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
            >
              <p className="text-[1.85rem] font-semibold tracking-tight text-slate-900 dark:text-white sm:text-[2.1rem]">
                {stat.value}
              </p>
              <p className="mt-2.5 max-w-[18rem] text-[0.98rem] leading-7 text-slate-600 dark:text-white/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {spotlightCards.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-[2rem] border border-black/10 bg-[#101828] p-6 text-white shadow-[0_30px_80px_-45px_rgba(16,24,40,0.85)] dark:border-white/10 dark:bg-[#121a26]"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.12 + index * 0.08 }}
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-lg text-[#7dd3c6]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
