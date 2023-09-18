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
      sm:mb-8
      last:mb-0"
    >
      <section
        className="
    relative transition bg-slate-100 border border-black/5 overflow-hidden rounded-lg
    sm:pr-8 sm:w-[48rem] sm:h-[20rem]
    group-even:pl-8
    hover:bg-slate-200 hover:border-black/10"
      >
        {/* Text side of card */}
        <div
          className="py-4 pb-7 px-5 flex flex-col h-full
      sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
      group-even:ml-[26rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
          <ul
            className="flex flex-wrap mt-4 gap-2
        sm:mt-auto"
          >
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
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
          className="absolute transition top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        group-even:right-[initial] group-even:-left-40
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
}
