import React from "react";
import { SiHere } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import { SiNasa } from "react-icons/si";
import bidenImg from "@/public/personal/biden.jpg";
import jiraImg from "@/public/jira.png";
import srlImg from "@/public/srl.jpg";
import ddImg from "@/public/dd.png";
import siteImg from "@/public/site.png";
import domImg from "@/public/dom-cli.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// TODO: read in from a yml file

export const experiencesData = [
  //  {
  //    title: "Completed MA in Philosophy",
  //    //institution: "The New School for Social Research",
  //    location: "New York, NY",
  //    description:
  //      "Pursued my passion for logic, language, and ethics at the graduate level",
  //    icon: React.createElement(LuGraduationCap),
  //    date: "2015",
  //  },
  //  {
  //    title: "Simulation Operations Specialist",
  //    //institution: "DePaul University",
  //    location: "Chicago, IL",
  //    description: "Administered DePaul University's nursing simulation lab",
  //    icon: React.createElement(LuGraduationCap),
  //    date: "2018",
  //  },
  {
    title: "Software and Mission Operations Engineer",
    institution: "NASA Jet Propulsion Laboratory",
    link: "https://www.jpl.nasa.gov/",
    location: "Pasadena, CA",
    description:
      "As a developer, I integrated telemetry into M20 visualization, developed and administered an AWS data-lake for 27 engineering teams, and adapted command schemas to meet requirements for the Sample Return Lander (SRL) project. In operations, I implemented a new command product paradigm, automated customer service processes through JIRA, lead operations support for 12 flight projects, hired, mentored, and managed 4 full-time operations engineers and 3 cohorts of interns.",
    icon: React.createElement(SiNasa),
    date: "2019-Present",
  },
  {
    title: "Software Engineering Intern",
    institution: "NASA Johnson Space Center",
    link: "https://www.nasa.gov/centers/johnson/home/index.html",
    location: "Houston, TX",
    description:
      "Authored python and MATLAB libraries to automate data cleaning, ingestion, and verification of pupillometery data. Engaged in research on the use of machine learning to predict cognitive workload of astronauts.",
    icon: React.createElement(SiNasa),
    date: "2018",
  },
  {
    title: "Software Engineering Intern",
    institution: "HERE Technologies",
    link: "https://www.here.com/",
    location: "Chicago, IL",
    description:
      "Implemented python modules for model verification and validation while honing my python & C++ skills",
    icon: React.createElement(SiHere),
    date: "2018",
  },
  {
    title: "MS in Computer Science",
    institution: "DePaul University",
    link: "https://www.depaul.edu/Pages/default.aspx",
    location: "Chicago, IL",
    description:
      "Specialized in machine learning and artificial intelligence. After graduating I immediately found a software engineering internship",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
] as const;

export const projectsData = [
  {
    title: "Mars 2020 Landing Visualization Development",
    description:
      "Integrated orbiter telemetry into a visualization of the Mars 2020 landing sequence, seen here being watched by the President",
    tags: ["Javascript", "React"],
    imageUrl: bidenImg,
  },
  {
    title: "Sample Return Lander (SRL) Flight Software",
    description: "Developing flight software for the SRL project",
    tags: ["C", "C++", "Python", "Jinja2"],
    imageUrl: srlImg,
  },
  {
    title: "Operational Cloud Store (OCS) Development",
    description:
      "Developed a data-lake supporting 27 engineering teams across the Mars 2020 and Europa Clipper projects",
    tags: ["Javascript", "Python", "AWS", "Serverless", "Terraform"],
    imageUrl: ddImg,
  },
  {
    title: "Distributed Object Manager (DOM) Operations",
    description:
      "Lead operational support for the DOM, a distributed object store supporting 12 flight projects",
    tags: ["Python", "Perl", "Bash", "Git"],
    imageUrl: domImg,
  },
  {
    title: "Automated JIRA Service Desk",
    description: "Automated customer ticket tracking and work status reporting",
    tags: ["Jira"],
    imageUrl: jiraImg,
  },
  {
    title: "ElliotTrapp.com",
    description:
      "Designed and developed this portfolio website to teach myself proper web and React development practices in my free time",
    tags: ["TypeScript", "React", "Next.js", "TailwindCSS", "Framer Motion"],
    imageUrl: siteImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Javascript",
  "TypeScript",
  "Node.js",
  "Next.js",
  "React",
  "TailwindCSS",
  "AWS",
  "Serverless",
  "Terraform",
  "Ruby",
  "Perl",
  "SQL",
  "Docker",
  "Puppet",
  "Tensorflow",
  "Keras",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "Jupyter Notebooks",
  "Git",
  "HTML",
  "CSS",
] as const;
