"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const ref = useSectionInView("Contact", 0.5);
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center">
        <SectionHeading>Contact Me</SectionHeading>
        <div></div>
      </div>
    </section>
  );
}
