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
      <p className="mb-3">
  I started my journey in programming after my school, where I quickly discovered my{" "}
  <span className="font-medium">passion for coding</span>. To pursue this interest, I start learning from youtube, where I learned{" "}
  <span className="font-medium">full-stack web development and system design</span>. My favorite part of programming is the thrill of building projects and the problem-solving aspect. I <span className="underline">love</span> the feeling of finally cracking a tough problem. My core tech stack includes{" "}
  <span className="font-medium">Next.js, Laravel, NestJS, and PostgreSQL</span>. Additionally, I have experience with TypeScript, Vue.js, and MongoDB, and I'm always eager to learn new technologies. I am currently seeking a{" "}
  <span className="font-medium">full-time position</span> as a software engineer.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy spending time with my family and friends—often playfully annoying my sister! 😅 I also love{" "}
  <span className="font-medium">learning new things</span>. Currently, I'm diving into{" "}
  <span className="font-medium">model training</span> and enjoy exploring new ideas across various subjects.
</p>

    </motion.section>
  );
}
