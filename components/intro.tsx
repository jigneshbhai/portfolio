"use client"


import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaTwitter } from "react-icons/fa";
import { useSelectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
  
  const {ref} = useSelectionInView("Home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  return (
    <section  
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
           <motion.div
            animate={{
              scale: [1, 1.5, 1.5, 1.5, 1],
              borderRadius: ["0%", "20%", "30%", "20%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
            
          >
            <Image 
              src="https://media.licdn.com/dms/image/D4D03AQFeIWZ2U3RV1g/profile-displayphoto-shrink_800_800/0/1696594069623?e=1717027200&v=beta&t=ctshg7_fWlHpriz-vCUPS9u3eaWHDvSugrWEb2CcOjc"
              alt="Ricardo portrait"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem]  shadow-xl"
          />
          </motion.div>
       
          
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Jignesh.</span> I&apos;m a{' '}
        <span className="font-bold">full-stack developer</span> {' '}
        <span className="font-bold"> I enjoy{' '}</span>
        building <span className="italic">WebSites & WebDesign</span>.<br/> My focus is{' '}
        <span className="underline">MERN Stack</span>.
      </motion.h1>
       <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 mx-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-blue-400 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-blue-400 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/jigneshbaldaniya/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-blue-400 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/jigneshbhai"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-blue-400 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://twitter.com/Jignesh5376"
          target="_blank"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro;
