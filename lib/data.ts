import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogsiteImg from "@/public/blogsite.png"
import loanCalculatorImg from "@/public/loancalculator.png"
import netflixGptImg from "@/public/netflix-gpt.png"
import promptoPiaaImg from "@/public/promptopiaa.png"

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
    title: "MERN Developer",
    location: "Surat, Gujarat",
    description:
      "I Take my first one month internship in 7th sem of my BE UG as MERN Developer For one month At Aphelious Solution LTD",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - Aug 2023",
  },
    {
    title: "React Developer",
    location: "SCET Surat, Gujarat",
    description:
      "I Participate as Frontend Developer at my college tech fest",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Blog-site",
    description:
      "I made This Project For Personal Tech Blogs Which Help to share some Experience and Knowledge with other students and developers.",
    tags: ["React.js", "Node.js", "MongoDB","Redux", "Tailwind", "Express.js"],
    imageUrl: blogsiteImg,
    link: "https://github.com/jigneshbhai/Blog_site"
  },
  {
    title: "Netflix-GPT",
    description:
      "Made Netflix Clone with OpenAI integration So user can easily Search movie using Prompts.",
    tags: ["React", "Firebase","OpenAI API","TMDB", "Tailwind", "Redux"],
    imageUrl: netflixGptImg,
    link:"https://github.com/jigneshbhai/netflix-gpt"
  },
  {
    title: "LoanCalculator",
    description:
      "Using This WebApplication User can Calculate and save their Loan bills and easy to access.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind", "Express.js"],
    imageUrl: loanCalculatorImg,
    link: "https://github.com/jigneshbhai/LoanCalculator"
  },
   {
    title: "Prompt-Share",
    description:
      "Using this website user can share their gpt prompts and also use prompts which already share by other users.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: promptoPiaaImg,
    link: "https://github.com/jigneshbhai/next.js"
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
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "C++",
  "Canva",
  "Framer Motion",
] as const;