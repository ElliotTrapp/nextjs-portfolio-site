"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Header() {
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.5] backdrop-blur-[0.5rem] dark:border-black dark:bg-slate-800 dark:bg-opacity-80 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <motion.div>
        <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-950 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="relative flex h-3/4 items-center justify-center"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 transition hover:text-slate-400 dark:text-slate-100 dark:hover:text-slate-600",
                    {
                      "text-slate-950 dark:text-slate-100":
                        activeSection === link.name,
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setTimeOfLastClick(Date.now());
                    setActiveSection(link.name);
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-slate-200 dark:bg-slate-950"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
