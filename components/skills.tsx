"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const ref = useSectionInView("Skills", 0.5);
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap items-center justify-center gap-2 text-lg text-slate-800">
        {skillsData.map((skill, index) => (
          <React.Fragment key={index}>
            <motion.li
              className="rounded-xl border border-black/[0.1] bg-white px-5 py-3 dark:bg-white/10 dark:text-white"
              key={skill}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
