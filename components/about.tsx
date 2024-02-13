"use client"

import React from 'react'
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function About() {
  return (
   <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sb:mb-40 scroll-mt-28'
   initial={{opacity:0, y:100}}
   animate={{opacity:1, y:0}}
   transition={{delay: 0.175 }}
   id="about">
        <SectionHeading>About me</SectionHeading>
        <p className='mb-4'>
        After graduating with a degree in <span className="font-medium">Computer Science</span>, I immediately immersed 
        myself in real-world projects,driven by my passion for <span className="italic">problem-solving</span>. 
        My core stack is <span className="font-medium">React, Next.js, Node.js and Postgres</span>. I am also familiar with 
        Python, TypeScript, Prisma, and Zod. Eager to stay ahead of the curve, I actively seek opportunities to learn new 
        technologies. 
        </p>
        <p>Currently pursuing an <span className="italic">M.A. in Computer Science at Brooklyn College</span>. Now, I'm eagerly seeking 
        a  <span className="font-medium">full-time software developer position</span> where I can continue to grow and contribute.
        I'm equally committed to teaching <span className="font-medium">Java</span> and excelling in administrative roles. 
        Outside of work and studies, I find joy in hitting the gym, watching movies, and exploring new places. </p>
   </motion.section>
  )
}
