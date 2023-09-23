import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        className="focusButtonPop disabled:bg-opacity-65 group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-slate-900 text-white outline-none transition-all hover:bg-slate-950 disabled:scale-100"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </>
  );
}
