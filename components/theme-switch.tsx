"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useActiveThemeContext } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useActiveThemeContext();

  return (
    <button
      className="background-blur-[0.5rem] iconButton  fixed bottom-5 right-5 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.5] transition-all dark:border-black dark:bg-slate-800"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
