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
    title: "Intern",
    location: "Panchkula, India",
    company: "DigiSpice Pvt. Ltd",
    description:
      "After I graduated and Interned as a frontend developer, specializing in Angular and JavaScript, responsible for creating dynamic pages and enhancing UI experiences.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2018 - Feb 2019",
  },
  {
    title: "Front-End Developer",
    location: "Pune, India",
    company: "Tata Consultancy Services",
    description:
      "Skilled frontend developer proficient in Angular, creating cross-platform applications for seamless user experiences through reusable modules and comprehensive testing.",
    icon: React.createElement(FaReact),
    date: "March 2019 - Oct 2020",
  },
  {
    title: "Software Developer",
    location: "Panchkula, India",
    company: "Grazitti Interative",
    description:
      "Experienced software developer proficient in custom solutions and data analysis, leveraging tools like IntelliJ and Visual Studio to deliver tailored applications for improved business performance.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2020 - Aug 2022",
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
] as const;