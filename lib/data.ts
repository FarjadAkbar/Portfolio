import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Product Engineer",
    location: "Remote",
    description:
      "As a Product Engineer, I lead the frontend development of a platform, collaborating closely with designers and backend developers. My tech stack includes React, Next.js, TypeScript, and ShadeCn. I'm actively seeking full-time opportunities to further contribute my skills.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2024 - Present",
    company: "Finyou",
  },
  {
    title: "Software Engineer",
    location: "Karachi, PK",
    description:
      "In my role as a Software Engineer for two years, I built a variety of web applications, gaining experience across different technologies. My tech stack included Vue.js, Next.js, TypeScript, Laravel, NestJS, MySQL, and PostgreSQL, allowing me to deliver effective solutions for various projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Aug 2024",
    company: "Koderlabs",
  },
  {
    title: "Full-Stack Developer",
    location: "Karachi, PK",
    description:
      "As a Full-Stack Developer, I was responsible for building web applications using React, Laravel, and MySQL. I enjoyed creating dynamic user experiences and ensuring seamless functionality across the stack.",
    icon: React.createElement(FaReact),
    date: "Mar 2022 - Aug 2022",
    company: "Darson Security",
  },
  {
    title: "WordPress Developer",
    location: "Karachi, PK",
    description:
      "In my role as a WordPress Developer, I specialized in building custom Elementor widgets and customizing plugins to meet business requirements, enhancing the functionality and user experience of client websites.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2020 - Feb 2022",
    company: "Peace Technology",
  },
] as const;


export const projectsData = [
  {
    title: "Finyou",
    description:
      "As a Front-End Engineer for three months, I contributed to Finyou, a funding platform designed for startups and small businesses. My role involved implementing user-friendly interfaces and optimizing the overall user experience.",
    tags: ["Next.js", "React Query", "Zustand", "ShadeCn", "Docker", "CI/CD"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Realmex",
    description:
      "I served as a Full-Stack Developer on Realmex, a real estate platform for buying and selling properties in the Netherlands, for four months. My responsibilities included developing both the front-end and back-end functionalities to ensure a seamless user experience.",
    tags: ["Laravel", "Vue.js", "Pusher", "Python", "Redis", "MySQL", "S3"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Cabbie",
    description:
      "Cabbie is a taxi management platform that facilitates booking rides similar to Uber. As a Full-Stack Developer for four months, I worked on both the front-end and back-end to create an efficient and user-friendly experience.",
    tags: ["Laravel", "MQTT", "MySQL", "Queue", "S3", "Serverless Functions"],
    imageUrl: rmtdevImg,
  },
  {
    title: "OnAnIsland",
    description:
      "OnAnIsland is a chat application tailored for an island community in the USA. I worked as a Back-End Developer for two months, focusing on real-time messaging features and database management.",
    tags: ["NestJS", "PostgreSQL", "Socket.io", "Prisma", "Redis", "Docker", "S3"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Brainwash",
    description:
      "Brainwash is a laundry app designed for hostel students. During my two-month tenure as a Back-End Developer, I implemented features to streamline laundry requests and payments.",
    tags: ["NestJS", "PostgreSQL", "Stripe", "Webhooks", "TypeORM"],
    imageUrl: corpcommentImg,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Rust",
  "PostgreSQL",
  "MySql",
  "Convex",
  "Laravel",
  "Php",
  "Docker",
  "AWS",
  "Redis",
  "CI/CD",
  "System Design",
] as const;
