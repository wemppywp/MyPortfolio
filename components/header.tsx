"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed inset-x-0 top-0 z-[999] mx-auto flex justify-center px-3 py-3 sm:px-6 sm:py-5">
      <motion.div
        className="flex w-full max-w-6xl items-center justify-between gap-3 rounded-[1.75rem] border border-black/10 bg-[rgba(255,252,246,0.9)] px-3 py-3 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur-xl sm:px-5 dark:border-white/10 dark:bg-[rgba(8,17,31,0.82)]"
        initial={false}
      >
        <Link
          href="#home"
          className="flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold tracking-[0.2em] text-slate-900 transition hover:text-[var(--accent)] dark:text-white"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101828] text-xs font-bold text-white dark:bg-white dark:text-slate-950">
            WW
          </span>
          <span className="hidden sm:inline">WEMPPY</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-black/5 bg-white/85 p-1.5 backdrop-blur dark:border-white/10 dark:bg-white/5">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  className={clsx(
                    "relative flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-950 dark:text-white/60 dark:hover:text-white",
                    {
                      "text-slate-950 dark:text-white": activeSection === link.name,
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--accent-soft)] dark:bg-white/10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#contact"
          className="rounded-full bg-[#101828] px-4 py-2 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#0c1422] dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Let&apos;s talk
        </Link>
      </motion.div>
    </header>
  );
}
