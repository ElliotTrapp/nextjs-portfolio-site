"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const ref = useSectionInView("Contact", 0.5);
  return (
    <section
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 sm:mb-28"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-slate-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mail@elliottrapp.com">
          mail@elliottrapp.com
        </a>{" "}
        or through this form.
      </p>
      <form>
        {/* <input type="email" placeholder="Your email" /> */}
        <textarea />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
