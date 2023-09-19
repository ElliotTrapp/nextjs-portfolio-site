"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const ref = useSectionInView("Experience", 0.5);
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40"
      id="experience"
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: ".4rem solid #9ca3af",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <Link href={experience.link} target="_blank">
                <p className="!mt-0 font-normal text-slate-700 underline hover:text-slate-400">
                  {experience.institution}
                </p>
              </Link>
              <p className="!mt-0 font-normal">{experience.location}</p>
              <p className="!mt-3 !font-normal text-slate-700">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
