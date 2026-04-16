"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 text-slate-700 shadow-xl backdrop-blur transition-all hover:scale-105 hover:text-slate-950 dark:border-white/10 dark:bg-[rgba(15,23,42,0.92)] dark:text-white/75 dark:hover:text-white"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <BsMoonStars /> : <BsSun />}
    </button>
  );
}
