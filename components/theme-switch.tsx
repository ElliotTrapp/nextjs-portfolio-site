import React from "react";
import { BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = React.useState<Theme>("light");
  return (
    <button
      className="background-blur-[0.5rem] iconButton fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-opacity-80 shadow-2xl transition-all"
      onClick={setTheme.bind(null, theme === "light" ? "dark" : "light")}
    >
      <BsSun />
    </button>
  );
}
