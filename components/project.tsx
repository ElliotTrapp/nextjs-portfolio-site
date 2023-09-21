"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3
      last:mb-0
      sm:mb-8"
    >
      <section
        className="
    relative flex max-w-[100dvw] flex-col overflow-hidden rounded-lg border border-black/5 bg-slate-100 transition hover:border-black/10 hover:bg-slate-200 group-even:pl-8 sm:h-[20rem] sm:w-[48rem] sm:flex-row sm:pr-8"
      >
        {/* Text side of card */}
        <div
          className="flex h-full flex-col px-5 py-4 pb-7
sm:max-w-[45%] sm:pl-10 sm:pr-2 sm:pt-10
group-even:sm:ml-[24rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
          <ul
            className="mt-4 flex flex-wrap gap-2
sm:mt-auto"
          >
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Image side of card */}
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className=":group-hover:-translate-y-3 group top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-20 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 sm:absolute sm:-right-20 "
        />
      </section>
    </motion.div>
  );
}
