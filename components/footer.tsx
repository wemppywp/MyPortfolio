import React from "react";

export default function Footer() {
  return (
    <footer className="pb-10 pt-4 text-center text-sm text-slate-500 dark:text-white/45">
      <div className="mx-auto w-full max-w-6xl border-t border-black/10 px-4 pt-6 dark:border-white/10">
        <small className="block text-sm">
          &copy; {new Date().getFullYear()} Wemppy. Designed to tell the story a little better.
        </small>
        <p className="mt-2 text-xs leading-6">
          Built with React, Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Resend, and Vercel-friendly patterns.
        </p>
      </div>
    </footer>
  );
}
