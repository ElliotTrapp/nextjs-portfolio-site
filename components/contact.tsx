"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/lib/actions";

export default function Contact() {
  const ref = useSectionInView("Contact", 0.6);

  return (
    <motion.section
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6 text-slate-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mail@elliottrapp.com">
          mail@elliottrapp.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log("Running on client");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));

          await sendEmail(formData);
        }}
      >
        <input
          name="senderEmail"
          className="borderBlack h-14 rounded-lg p-4"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />

        <textarea
          name="message"
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="focusButtonPop group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-slate-900 text-white outline-none transition-all hover:bg-slate-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </motion.section>
  );
}
