"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <p className='mb-4'>Driven by a passion for crafting solutions, I dived headfirst into real-world projects after graduating 
        with my <span className="font-medium">Computer Science degree</span> .Fueled by a thirst for knowledge, I honed my skills in the 
        dynamic web development stack of <span className="font-medium">React, Next.js, Node.js, and Postgres</span>. 
        While I&apos;m comfortable navigating these core tools, I&apos;m always expanding my horizons, exploring frameworks like 
        <span className="font-medium"> Python, TypeScript, Prisma, and Zod</span>. 
        Never content with the status quo, I actively seek new challenges and technologies to master.</p>

       <p>Currently, I&apos;m enriching my knowledge by pursuing an <span className="italic">M.A. in Computer Science at Brooklyn College</span>. 
       This pursuit fuels my desire to contribute meaningfully to a challenging full-time software developer role. 
       Beyond coding, I thrive in collaborative environments, evidenced by my dedication to teaching 
       <span className="font-medium">Java</span> and excelling in <span className="font-medium">administrative</span> tasks.

       When I&apos;m not immersed in code or studies, I find balance in hitting the gym, exploring new films, and discovering hidden gems around town.</p>

    </motion.section>
  );
}
