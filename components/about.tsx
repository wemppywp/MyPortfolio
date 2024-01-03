"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 mt-8 px-4 dark:text-white/80">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I started my
        career as a <span className="font-medium">Software Developer</span>.{" "}
        <span className="italic"></span>Now I have 5 years experience in{" "}
        <span className="underline">
          mobile development and web development
        </span>
        . My core programming is{" "}
        <span className="font-medium">
          .Net MVC, React, Next.js, Node.js, Native Java, React Native
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p className="px-4 dark:text-white/80">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        mobile games, and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          Data Analytic, Data Scientist with python
        </span>
        .
      </p>
    </motion.section>
  );
}
