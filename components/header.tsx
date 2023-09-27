"use client";

import React from "react";
import { motion } from "framer-motion";
import { pageLinks, aboutLinks, blogLinks } from "@/lib/data";
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
    <header id="header" className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none bg-zinc-300 dark:bg-zinc-900 sm:h-[3.25rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <motion.div>
        <nav className="fixed left-0 top-[0.15rem] flex ">
          <Link id="name" className="navButton left-0 flex " href="/">
            Elliot Trapp
          </Link>
        </nav>

        <nav className="fixed left-1/2 top-[0.15rem] flex -translate-x-1/2 py-2 sm:py-0 ">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {aboutLinks.map((link) => (
              <motion.li
                className="relative flex h-3/4 items-center justify-center"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx("navButton", {
                    "text-zinc-900 dark:text-zinc-600":
                      activeSection === link.name,
                  })}
                  href={link.hash}
                  onClick={() => {
                    setTimeOfLastClick(Date.now());
                    setActiveSection(link.name);
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-zinc-200 dark:bg-zinc-900"
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

        <nav
          id="pageLinks"
          className="fixed right-0 top-[0.15rem] flex py-2 sm:py-0"
        >
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-zinc-900 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {pageLinks.map((pageLink) => (
              <motion.li
                className="relative flex h-3/4 items-center justify-center"
                key={pageLink.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 transition hover:text-slate-400 dark:text-zinc-100 dark:hover:text-zinc-600",
                    {
                      "text-zinc-950 dark:text-zinc-100":
                        activeSection === pageLink.name,
                    },
                  )}
                  href={pageLink.hash}
                >
                  {pageLink.name}
                  {pageLink.name === activeSection && (
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
