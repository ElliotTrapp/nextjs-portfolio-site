"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex items-center justify-center flex-col">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          After graduating with a degree in{" "}
          <span className="font-medium">Philosophy</span>, I decided to pursue
          my passion for programming. I enrolled in a graduate program that
          specialized in people transitioning from outside of software. There I
          specialized in{" "}
          <span className="font-medium">machine learning and data science</span>
          . <span className="italic">What I love about development</span> is
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
          Outside of technical skills, I am a an adept{" "}
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
          <span className="italic">When I'm not coding</span>, I enjoy scuba
          diving, science-fiction and horror films, playing with my dog, and the
          latest video games. I'm always engaged in{" "}
          <span className="font-medium">learning new things</span>.Currently,
          I'm learning{" "}
          <span className="font-medium">
            new web frameworks and putting together a side business{" "}
          </span>
        </p>
      </div>
    </motion.section>
  );
}
