import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { BsCodeSlash, BsDatabase, BsLayers, BsRainbow } from "react-icons/bs";

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
      title: "Laravel + Vue Developer",
      company: "Botsify",
      period: "Nov 2024 – Present",
      location: "Karachi, Pakistan",
      current: true,
      responsibilities: [
        "Developed and maintained core features for chatbot and conversational AI systems using Laravel and Vue.js",
        "Implemented a Message Control Pipeline (MCP) to connect the chatbot with fine-tuned datasets for contextual responses",
        "Containerized services using Docker, improving deployment consistency and platform scalability",
        "Integrated Firebase queues to enable real-time message processing and faster customer response times",
      ],
      technologies: ["Laravel", "Vue.js", "Docker", "Firebase", "AI/ML", "MCP"],
    },
    {
      title: "Frontend Engineer (Contract)",
      company: "Finyou",
      period: "Aug 2024 – Oct 2024",
      location: "Remote",
      current: false,
      responsibilities: [
        "Built the MVP of a fintech product using Next.js and Tailwind CSS, with seamless SSR support for optimal SEO",
        "Integrated dynamic form rendering and personalized dashboards powered by OpenAI for guided financial workflows",
      ],
      technologies: ["Next.js", "Tailwind CSS", "OpenAI API", "SSR", "SEO"],
    },
    {
      title: "Software Engineer",
      company: "Koderlabs",
      period: "Sep 2022 – Aug 2024",
      location: "Remote",
      current: false,
      responsibilities: [
        "Led full-stack development using NestJS and Vue, improving app load times by 35% via optimized API calls and caching",
        "Developed reusable component libraries and enforced code quality via ESLint, unit tests, and TypeScript refactoring",
      ],
      technologies: ["NestJS", "Vue.js", "TypeScript", "ESLint", "Performance Optimization"],
    },
    {
      title: "Fullstack Developer",
      company: "Darson",
      period: "Mar 2022 – Aug 2022",
      location: "Remote",
      current: false,
      responsibilities: [
        "Built a CRM with Kanban-style UI for task management and multilevel role access using Laravel",
        "Integrated real-time sales dashboards with charting libraries and MySQL stored procedures for performance",
      ],
      technologies: ["Laravel", "MySQL", "CRM", "Dashboard", "Real-time"],
    },
    {
      title: "WordPress Developer",
      company: "Peace Technology",
      period: "Mar 2020 – Feb 2022",
      location: "Karachi, Pakistan",
      current: false,
      responsibilities: [
        "Created custom Elementor widgets, reusable plugins, and API integrations to meet diverse client needs",
        "Migrated legacy PHP websites to more modern CMS stacks with improved performance",
      ],
      technologies: ["WordPress", "PHP", "Elementor", "API Integration", "CMS"],
    },
] as const;


export const projectsData = [
    {
      title: "Botsify Agentic",
      description:
        "Botsify Agentic is a platform that allows users to create and manage AI agents. As a Full-Stack Developer, I contributed to the development of the frontend integrate ui with realtime chat functionality and streaming api. integrate mcp and gpt toolins option file-search/websearch.. add generate realtime script of workflwo that generate with all converastion between user and agent. user can create multiple versions and test it before going to live.. user can change color logo, description of his agent in chat that uses. create custom mcp that handles request of customer.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Laravel", "Vue.js", "MySQL", "OpenAI API", "WebSockets", "MCP"],
      features: [
        "AI Agent Management",
        "Real-time Chat",
        "Streaming API",
        "Custom MCP",
        "Version Control",
        "Brand Customization",
      ],
      github: "https://github.com",
      demo: "https://botsify.com",
      highlight: true,
    },
    {
      title: "Finyou",
      description:
        "As a Front-End Engineer for three months, I contributed to Finyou, a funding platform designed for startups and small businesses. My role involved implementing user-friendly interfaces and optimizing the overall user experience.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "React Query", "Zustand", "ShadeCn", "Docker", "CI/CD"],
      features: ["Startup Funding", "Business Dashboard", "User Experience", "Responsive Design"],
      github: "https://github.com",
      demo: "https://finyou.com",
      highlight: false,
    },
    {
      title: "Realmex",
      description:
        "I served as a Full-Stack Developer on Realmex, a real estate platform for buying and selling properties in the Netherlands, for four months. My responsibilities included developing both the front-end and back-end functionalities to ensure a seamless user experience.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Laravel", "Vue.js", "Pusher", "Python", "Redis", "MySQL", "S3"],
      features: ["Property Listings", "Real-time Updates", "Search & Filter", "User Management"],
      github: "https://github.com",
      demo: "https://realmex.com",
      highlight: false,
    },
    {
      title: "Cabbie",
      description:
        "Cabbie is a taxi management platform that facilitates booking rides similar to Uber. As a Full-Stack Developer for four months, I worked on both the front-end and back-end to create an efficient and user-friendly experience.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Laravel", "MQTT", "MySQL", "Queue", "S3", "Serverless Functions"],
      features: ["Ride Booking", "Real-time Tracking", "Payment Integration", "Driver Management"],
      github: "https://github.com",
      demo: "https://cabbie.com",
      highlight: false,
    },
    {
      title: "OnAnIsland",
      description:
        "OnAnIsland is a chat application tailored for an island community in the USA. I worked as a Back-End Developer for two months, focusing on real-time messaging features and database management.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["NestJS", "PostgreSQL", "Socket.io", "Prisma", "Redis", "Docker", "S3"],
      features: ["Real-time Messaging", "Community Features", "File Sharing", "User Profiles"],
      github: "https://github.com",
      demo: "https://onanisland.com",
      highlight: false,
    },
    {
      title: "Brainwash",
      description:
        "Brainwash is a laundry app designed for hostel students. During my two-month tenure as a Back-End Developer, I implemented features to streamline laundry requests and payments.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["NestJS", "PostgreSQL", "Stripe", "Webhooks", "TypeORM"],
      features: ["Laundry Booking", "Payment Processing", "Student Dashboard", "Request Management"],
      github: "https://github.com",
      demo: "https://brainwash.com",
      highlight: false,
    },
  ] as const;


export const skillsData = [
  {
      icon: <BsCodeSlash className="w-8 h-8 text-green-600" />,
      title: "Languages & Frameworks",
      description: "Modern programming languages and frameworks",
      skills: ["JavaScript (ES6+)", "PHP", "Go", "Laravel", "NestJS", "Vue.js", "Next.js", "React", "Tailwind CSS"],
    },
    {
      icon: <BsDatabase className="w-8 h-8 text-purple-600" />,
      title: "Databases & Storage",
      description: "Scalable data storage solutions",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS S3"],
    },
    {
      icon: <BsLayers className="w-8 h-8 text-orange-600" />,
      title: "DevOps & Cloud",
      description: "Infrastructure and deployment tools",
      skills: ["AWS (EC2, S3)", "Docker", "CI/CD (GitHub Actions)", "Nginx", "Git"],
    },
    {
      icon: <BsRainbow className="w-8 h-8 text-red-600" />,
      title: "AI/ML & Tools",
      description: "AI integration and development tools",
      skills: [
        "OpenAI API",
        "GPT Fine-tuning",
        "Prompt Engineering",
        "RAG",
        "Postman",
        "Stripe API",
        "Figma",
        "Vite",
        "ESLint",
      ],
    }
] as const;
