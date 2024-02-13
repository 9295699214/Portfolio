import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cuwipImg from "@/public/cuwip.png";
import stemcelImg from "@/public/stemcel.png";
import suarezImg from "@/public/suarez.png";
import geartrackImg from "@/public/geartrack.png";

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

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Panchkula, India",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Gear Tracking",
    description:
      "Developed a vehicle tracking website with robust permissions, secure authentication, QR scanner integration for gear tracking, and PostgreSQL database management.",
    tags: ["Javacript", "React JS", "Node JS", "Prisma"],
    imageUrl: geartrackImg,
  },
  {
    title: "CUWIP CUNY",
    description:
      "Explore CUNY CUWiP 2024, the official hub for the Conference for Undergraduate Women in Physics, featuring schedules, speakers, workshops, and registration.",
    tags: ["Custom Templates", "Google Sites", "Responsive Design"],
    imageUrl: cuwipImg,
  },
  {
    title: "The Suarez Lab",
    description:
      "Discover The Suarez Lab's innovative WordPress website, showcasing cutting-edge research, publications, team members",
    tags: ["Wordpress", "Custome Themes", "Team Member Profiles", "Contact Form", "Responsive Design"],
    imageUrl: suarezImg,
  },
  {
    title: "Stemcel",
    description:
      "Explore the forefront of research and academic excellence in STEM fields with the Brooklyn College Biology Department.",
      tags: ["Wordpress", "Custome Themes", "Team Member Profiles", "Contact Form", "Responsive Design"],
    imageUrl: stemcelImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;