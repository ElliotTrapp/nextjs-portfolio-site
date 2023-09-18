import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <div className="flex items-center justify-center flex-col">
        <SectionHeading>My Projects</SectionHeading>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="bg-slate-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]">
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
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

      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl max-w-[80%]"
      />
    </section>
  );
}
