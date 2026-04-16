"use client";

import Image from "next/image";
import React, { useRef } from "react";
import foto from "@/public/foto.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { quickFacts } from "@/lib/data";

const heroHighlights = [
  "Scalable web and mobile applications",
  "API integration and database optimization",
  "Security, automation, and business efficiency",
] as const;

export default function Intro() {
  const { ref: inViewRef } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const chipY = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const setRefs = (node: HTMLElement | null) => {
    sectionRef.current = node;
    inViewRef(node);
  };

  return (
    <section
      className="w-full scroll-mt-28 pt-8 sm:pt-12"
      id="home"
      ref={setRefs}
    >
      <div className="relative grid w-full items-start gap-10 overflow-hidden rounded-[2.5rem] border border-black/10 bg-[linear-gradient(135deg,rgba(255,253,248,0.98),rgba(247,232,206,0.92))] p-6 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.55)] lg:grid-cols-[minmax(0,1.14fr)_minmax(24rem,0.86fr)] lg:gap-12 lg:p-10 xl:p-12 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(9,17,28,0.92))]">
        <motion.div
          className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(232,143,61,0.2),_transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(125,211,198,0.15),_transparent_70%)]"
          style={{ y: glowY }}
        />

        <motion.div initial={false} style={{ y: textY }} className="max-w-[44rem] pt-1">
          <div className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Open to full-time IT Application opportunities and business-focused
            collaborations
          </div>

          <h1 className="max-w-[11ch] text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-[3.35rem] lg:text-[4.15rem]">
            Turning business needs into secure, scalable IT applications.
          </h1>

          <p className="mt-7 max-w-[40rem] text-base leading-8 text-slate-600 dark:text-white/70 sm:text-[1.08rem]">
            I&apos;m Wemppy, an IT Application professional with 6+ years of
            experience designing and improving scalable web and mobile
            solutions. My work spans full-stack development, API integration,
            database optimization, and business-facing system enhancement with a
            practical, solution-oriented approach. I focus on understanding
            business processes, identifying gaps, and delivering IT solutions
            that enhance efficiency, reduce risk, and align with organizational
            goals.
          </p>

          <motion.div className="mt-7 flex flex-wrap gap-3" style={{ y: chipY }}>
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/72"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:flex-nowrap">
            <Link
              href="#projects"
              className="group inline-flex min-w-[13.5rem] items-center justify-center gap-2 rounded-full bg-[#101828] px-6 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0c1422] dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
              onClick={() => {
                setActiveSection("Projects");
                setTimeOfLastClick(Date.now());
              }}
            >
              View selected work
              <BsArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex min-w-[13.5rem] items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Start a conversation
            </Link>

            <a
              className="inline-flex min-w-[12.5rem] whitespace-nowrap items-center justify-center gap-2 rounded-full border border-black/10 bg-transparent px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:text-white/75 dark:hover:text-white"
              href="/CV-Wemppy_Wantri_Putra.pdf"
              download
            >
              Download CV
              <HiDownload className="text-lg" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
              href="https://www.linkedin.com/in/wemppy-wantri-putra-059468119/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <BsLinkedin />
            </a>
            <a
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
              href="https://github.com/wemppywp"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
              href="mailto:wemppywp@gmail.com"
              aria-label="Send email"
            >
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full lg:justify-self-end"
          initial={false}
          style={{ y: cardY }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#101828] p-5 text-white shadow-[0_36px_100px_-48px_rgba(15,23,42,0.55)] sm:p-6 lg:max-w-[32.5rem] dark:border-white/10 dark:bg-[#101828]">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="pt-1 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                  Based in Jakarta
                </p>
                <div className="shrink-0 rounded-full bg-[var(--accent)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-950">
                  IT Application
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[5.25rem_minmax(0,1fr)] sm:items-center">
                <div className="relative w-fit">
                  <div className="absolute inset-0 rounded-full bg-[var(--accent)]/25 blur-xl" />
                  <Image
                    src={foto}
                    alt="Wemppy portrait"
                    width={160}
                    height={160}
                    quality={95}
                    priority
                    className="relative h-24 w-24 rounded-[1.6rem] border-4 border-white object-cover shadow-xl sm:h-28 sm:w-28"
                  />
                </div>

                <div>
                  <p className="max-w-[18ch] text-[1.28rem] font-semibold leading-[1.18] tracking-tight text-white sm:text-[1.4rem]">
                    Web, mobile, and business application delivery
                  </p>
                  <p className="mt-3 max-w-[30ch] text-sm leading-7 text-white/72">
                    Focused on scalable business solutions, maintainable systems,
                    and application improvements that support operational efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:px-5"
                >
                  <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950">
                    {fact.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white/45">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-7 text-white/82">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
