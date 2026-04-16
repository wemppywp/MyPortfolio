"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.45);

  return (
    <motion.section
      ref={ref}
      className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-36"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.3 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="glass-panel group relative overflow-hidden rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-20 bg-[radial-gradient(circle,_rgba(232,143,61,0.12),_transparent_70%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle,_rgba(125,211,198,0.12),_transparent_70%)]" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-white/45">
            Short version
          </p>
          <p className="mt-5 text-base leading-8 text-slate-700 dark:text-white/75 sm:text-lg">
            I&apos;m an{" "}
            <span className="font-semibold">IT Application professional</span>{" "}
            with more than
            <span className="font-semibold"> 6 years of experience</span>{" "}
            designing and developing scalable web and mobile solutions that are
            maintainable and aligned with business needs. My expertise covers{" "}
            <span className="font-semibold">
              full-stack development, API integration, system optimization, and
              enterprise application enhancement
            </span>
            across technologies such as C#, .NET Framework, React.js, Vue.js,
            React Native, Java, Native Android, Node.js, and PHP.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-700 dark:text-white/75 sm:text-lg">
            I have strong experience working in Agile environments,
            collaborating closely with business stakeholders, product owners,
            and UI/UX designers to translate requirements into effective and
            scalable solutions. My focus is on improving system performance,
            strengthening security, enabling automation, and enhancing user
            experience.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-700 dark:text-white/75 sm:text-lg">
            I&apos;m particularly driven by solving operational challenges
            through a structured, analytical, and solution-oriented approach,
            bridging the gap between business needs and technology to deliver
            practical, high-impact applications.
          </p>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#101828] p-8 text-white shadow-[0_30px_80px_-45px_rgba(16,24,40,0.85)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#121a26]"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-24 bg-[radial-gradient(circle,_rgba(125,211,198,0.18),_transparent_70%)] blur-2xl" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
            CV highlights
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            Recent experience focused on measurable business and technical
            impact.
          </h3>
          <div className="mt-8 space-y-4 text-sm leading-7 text-white/72">
            <p>
              Improved enterprise web application performance by up to 30%
              through development and optimization across modern web stacks.
            </p>
            <p>
              Helped improve field operational productivity by up to 25% through
              cross-platform mobile application delivery.
            </p>
            <p>
              Supported deployment automation initiatives that reduced
              implementation time by up to 60% while reducing manual error risk.
            </p>
            <p>
              Contributed to secure authentication, API integration, database
              optimization, cloud migration, and stronger collaboration with
              business stakeholders.
            </p>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
