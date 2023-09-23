"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/lib/actions";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";

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
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
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
        <SubmitButton />
      </form>
    </motion.section>
  );
}
