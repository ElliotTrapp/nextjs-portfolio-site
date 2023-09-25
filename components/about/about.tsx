"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const ref = useSectionInView("About", 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex flex-col items-center justify-center">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          After graduating with a degree in{" "}
          <span className="font-medium">Philosophy</span>, I decided to pursue
          my passion for programming. I enrolled in a graduate program that
          specialized transitioning people into software engineering. There I
          specialized in{" "}
          <span className="font-medium">machine learning and data science</span>
          . What I <span className="italic">love</span> about development is
          that it is both <span className="italic">rigorously technical</span>{" "}
          and <span className="italic">deeply creative. </span> I{" "}
          <span className="underline">love</span> the feeling of finally
          figuring out a solution to a problem. My core competencies are{" "}
          <span className="font-medium">
            Python, Javascript, AWS, and Terraform.
          </span>
          . I am also familiar with TypeScript, C, C++, and Ruby. I am always
          looking to learn new technologies.
        </p>
        <p className="mb-3">
          Outside of technical skills, I am an adept{" "}
          <span className="font-medium">communicator and leader.</span> My
          background in the humanities trained me to communicate my ideas{" "}
          <span className="italic">clearly and concisely. </span>One of my
          biggest passions is{" "}
          <span className="font-medium">
            {" "}
            mentoring young engineering talent{" "}
          </span>
          in my organization. I <span className="italic">love </span> helping
          the next generation grow and learn.
        </p>
        <p className="mb-3">
          When I'm not coding, I enjoy scuba diving, science-fiction and horror
          films, playing with my dog, and the latest video games. I'm
          consistently engaged in
          <span className="font-medium"> learning new things. </span>
          Currently, I'm learning{" "}
          <span className="font-medium">
            new web frameworks and putting together a side business{" "}
          </span>{" "}
          I'm always looking to connect to other developers, so feel free to{" "}
          reach out!
        </p>
      </div>
    </motion.section>
  );
}
