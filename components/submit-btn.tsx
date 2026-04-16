import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group inline-flex h-[3.4rem] items-center justify-center gap-2 rounded-full bg-[#101828] px-6 text-sm font-semibold text-white outline-none transition-all hover:-translate-y-0.5 hover:bg-[#0c1422] focus:scale-[1.02] active:translate-y-0 disabled:translate-y-0 disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-b-white dark:border-slate-300/30 dark:border-b-slate-950" />
      ) : (
        <>
          Send message
          <FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
