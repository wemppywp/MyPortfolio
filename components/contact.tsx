"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/action/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.45);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("wemppywp@gmail.com");
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy email");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-6xl scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionHeading>Let&apos;s build something useful</SectionHeading>

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#101828] p-8 text-white shadow-[0_30px_80px_-45px_rgba(16,24,40,0.85)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#121a26]"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-24 bg-[radial-gradient(circle,_rgba(125,211,198,0.18),_transparent_70%)] blur-2xl" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
            Contact
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">
            Open to discussing full-time roles, freelance work, and product collaborations.
          </h3>
          <p className="mt-5 text-base leading-8 text-white/72">
            The fastest way to reach me is by email. You can also use the form and
            I&apos;ll reply as soon as I can.
          </p>

          <div className="mt-8 grid gap-3">
            <motion.a
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:bg-white/10"
              href="mailto:wemppywp@gmail.com"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Email
              </p>
              <p className="mt-2 text-base font-medium text-white">wemppywp@gmail.com</p>
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-transparent px-5 py-4 text-left text-sm font-semibold text-white/80 transition hover:bg-white/10"
              onClick={copyEmail}
            >
              Copy email address
            </motion.button>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="glass-panel flex flex-col rounded-[2rem] p-6 dark:text-black sm:p-8"
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully");
          }}
        >
          <label className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-white/45">
            Your email
          </label>
          <input
            className="mt-3 h-14 rounded-2xl borderBlack bg-white/85 px-4 text-slate-900 outline-none transition focus:border-black/20 focus:shadow-[0_0_0_4px_rgba(232,143,61,0.12)] dark:bg-white dark:opacity-85"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="name@email.com"
          />

          <label className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-white/45">
            Message
          </label>
          <textarea
            className="mt-3 h-52 rounded-[1.5rem] borderBlack bg-white/85 p-4 text-slate-900 outline-none transition focus:border-black/20 focus:shadow-[0_0_0_4px_rgba(232,143,61,0.12)] dark:bg-white dark:opacity-85"
            name="message"
            placeholder="Tell me a little about your project, role, or what you want to build."
            required
            maxLength={5000}
          />

          <div className="mt-6">
            <SubmitBtn />
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}
