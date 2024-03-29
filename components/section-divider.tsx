"use client"

import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
   return (
    <motion.div
      className="bg-blue-300 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      animate={{
        scale: [1, 1, 1, 1, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    ></motion.div>
  );
}

export default SectionDivider