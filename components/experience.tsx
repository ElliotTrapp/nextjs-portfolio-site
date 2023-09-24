"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useActiveThemeContext } from "@/context/theme-context";

export default function Experience() {
  const { theme, toggleTheme } = useActiveThemeContext();
  const ref = useSectionInView("Experience", 0.2);
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[70rem] scroll-mt-28 text-center sm:mb-40"
      id="experience"
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? ".4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "black",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <Link href={experience.link} target="_blank">
                <p className="!mt-0 font-normal text-slate-700 underline hover:text-slate-400 dark:text-white/80">
                  {experience.institution}
                </p>
              </Link>
              <p className="!mt-0 font-normal">{experience.location}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {experience.description.map((item, key) => (
                  <li
                    key={key}
                    className="list-disc text-left !font-normal text-slate-700 dark:text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="!mt-3 !font-normal text-slate-700"></p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
