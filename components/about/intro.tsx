"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "../../context/active-section-context";

// This calculates the number of years since a given date
const YearsSinceDate = ({ startDate }: { startDate: Date }) => {
  const calculateYears = () => {
    const now = new Date();
    const diffInMilliSeconds = Math.abs(now.getTime() - startDate.getTime());
    return Math.floor(diffInMilliSeconds / (1000 * 60 * 60 * 24 * 365.25));
  };

  const [years, setYears] = useState(calculateYears());

  useEffect(() => {
    const interval = setInterval(
      () => {
        setYears(calculateYears());
      },
      24 * 60 * 60 * 1000,
    ); // update every day

    return () => clearInterval(interval);
  }, [startDate]);

  return years;
};

export default function Intro() {
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  const ref = useSectionInView("About", 0.8);
  return (
    <section
      ref={ref}
      className="sectionStyle flex h-[100dvh] w-[100dvw] flex-col items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-fixed py-[8rem]"
      id="home"
    >
      <div id="intro container" className="containerStyle">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/personal/headshot.jpg"
                alt="Elliot's headshot"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="picture h-24 w-24"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
              className="absolute bottom-0 right-0 text-4xl"
            >
              👋
            </motion.span>
          </div>
        </div>
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Elliot.</span> I'm a{" "}
          <span className="font-bold">
            software and mission operations engineer{" "}
          </span>
          with{" "}
          <span className="font-bold">
            <YearsSinceDate startDate={new Date(2019, 0, 1)} /> years{" "}
          </span>
          of experience. I enjoy solving problems to help scientists{" "}
          <span className="italic"> explore the universe </span> with{" "}
          <span className="underline">
            Python, Javascript, AWS, data science, and more.
          </span>
        </motion.h1>
        <motion.div
          className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="textButton group bg-yellow-400 text-slate-900 transition"
            onClick={() => {
              setTimeOfLastClick(Date.now());
              setActiveSection("Contact");
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>

          <Link
            className="whiteBackground textButton group cursor-pointer outline-none transition"
            href="/docs/Resume.pdf"
            download
          >
            Download Resume{" "}
            <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
          </Link>

          <Link
            className="iconButton whiteBackground transition"
            href="https://www.linkedin.com/in/elliot-trapp-144238225/"
            target="_blank"
          >
            <BsLinkedin className="" />
          </Link>

          <Link
            className="iconButton whiteBackground    transition"
            href="https://github.com/ElliotTrapp"
            target="_blank"
          >
            <FaGithubSquare className="" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
