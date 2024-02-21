import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cuwipImg from "@/public/cuwip.png";
import jetblueImg from '../public/jetblueImg.png';

import searchunifyImg from '../public/searchunifyImg.png';
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
    title: "Search Unify",
    description:
      "SearchUnify is a robust AI-driven enterprise search platform designed to optimize knowledge management and support workflows, facilitating efficient information retrieval and enhancing user experiences",
    tags: ["Javascript", "React", "Node JS", "Salesforce Permissions", "customized software solutions"],
    imageUrl: searchunifyImg,
  },
  {
    title: "JetBlue Airlines",
    description:
      "Igor Operations at JetBlue Airlines streamline flight operations and improve efficiency through advanced technology solutions, ensuring smoother and more reliable air travel experiences for passengers.",
      tags: ["Angular", "Javascript", "Git", "Validating Inputs", "Responsive Design"],
    imageUrl: jetblueImg,
  },
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